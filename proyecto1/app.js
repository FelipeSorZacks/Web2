const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const dbConfig = require('./configuracion_db'); // <-- Importar la configuración de la BD
const { error } = require('console');

const app = express();

// Middleware para manejar datos de formularios (solicitudes HTTP POST)
app.use(bodyParser.urlencoded({extended: false}));

// Configuración de el motor de plantillas
app.set('view engine','ejs');
app.use(express.static('public')); // Para cargar styles.css

// Configuración de la Base de Datos usando el archivo importado
const db = mysql.createConnection(dbConfig); // <-- Usar dbConfig importado

// Verificar la conexión a la base de datos
db.connect(err=>{
    if(err){
        console.error('Error en servidor de MySQL: ',err);
    }else{
        console.log('Conexión con la base de datos exitosa :)');
    }
});

const puerto = 3008; // Cambiado a 'puerto'
app.listen(puerto,()=>{
    console.log(`Servidor iniciado en http://localhost:${puerto}`);
});

// ------------------------------------------------------------------
// RUTAS DE AUTENTICACIÓN
// ------------------------------------------------------------------

// GET / - Muestra el formulario de Login (Página principal)
app.get('/', (req, res) => {
    // Si la solicitud viene de un redirect con mensaje, lo pasamos a la vista.
    // Usamos req.query para obtener el mensaje (aunque es simple, para un uso más robusto se recomienda 'express-session')
    const mensaje = req.query.msg ? JSON.parse(req.query.msg) : null;
    res.render('inicio', { mensaje });
});

// POST /acceder - Procesa el Login
app.post('/acceder', (req, res) => {
    const { usuario, clave } = req.body; 
    
    // Primero, verificamos si el usuario existe
    const consultaUsuario = 'SELECT * FROM User WHERE username = ?';

    db.query(consultaUsuario, [usuario], (err, resultados) => { 
        if (err) {
            console.error('Error en consulta de usuario:', err);
            const msg = encodeURIComponent(JSON.stringify({ texto: 'Error interno del servidor.', tipo: 'error' }));
            return res.redirect(`/?msg=${msg}`);
        }

        if (resultados.length === 0) {
            // Caso 1: Usuario NO existe
            console.log(`Intento de login fallido para: ${usuario} (Usuario no encontrado)`);
            const msg = encodeURIComponent(JSON.stringify({ texto: 'El usuario no existe.', tipo: 'error' }));
            return res.redirect(`/?msg=${msg}`);
        }

        // Si el usuario existe, verificamos la contraseña
        const user = resultados[0];
        
        if (user.password === clave) {
            // Caso 2: Login exitoso
            console.log(`Login exitoso para: ${usuario}`);
            res.redirect('/listado');
        } else {
            // Caso 3: Contraseña incorrecta
            console.log(`Intento de login fallido para: ${usuario} (Contraseña incorrecta)`);
            const msg = encodeURIComponent(JSON.stringify({ texto: 'Contraseña incorrecta.', tipo: 'error' }));
            res.redirect(`/?msg=${msg}`);
        }
    });
});

// GET /registro - Muestra el formulario de Registro
app.get('/registro', (req, res) => { 
    // Si la solicitud viene de un redirect con mensaje, lo pasamos a la vista.
    const mensaje = req.query.msg ? JSON.parse(req.query.msg) : null;
    res.render('registro', { mensaje });
});

// POST /registrar - Procesa el Registro (para la tabla User)
app.post('/registrar', (req, res) => { 
    const { usuario, clave } = req.body; 

    // 1. Verificar si el usuario ya existe
    const consultaVerificar = 'SELECT * FROM User WHERE username = ?';

    db.query(consultaVerificar, [usuario], (err, resultados) => {
        if (err) {
            console.error('Error al verificar usuario:', err);
            const msg = encodeURIComponent(JSON.stringify({ texto: 'Error interno del servidor.', tipo: 'error' }));
            return res.redirect(`/registro?msg=${msg}`);
        }
        
        if (resultados.length > 0) {
            // El usuario ya existe
            console.log(`Intento de registro fallido para: ${usuario} (Ya existe)`);
            const msg = encodeURIComponent(JSON.stringify({ texto: 'Ese nombre de usuario ya está en uso.', tipo: 'error' }));
            return res.redirect(`/registro?msg=${msg}`);
        }

        // 2. Si no existe, proceder con el registro
        const consultaRegistro = 'INSERT INTO User (username, password) VALUES(?,?)';

        db.query(consultaRegistro, [usuario, clave], (err) => {
            if (err) {
                console.error('Error al registrar usuario:', err);
                const msg = encodeURIComponent(JSON.stringify({ texto: 'No se pudo completar el registro.', tipo: 'error' }));
                return res.redirect(`/registro?msg=${msg}`);
            } else {
                // Registro exitoso, redirigir al login con mensaje de éxito
                console.log(`Registro exitoso para: ${usuario}`);
                const msg = encodeURIComponent(JSON.stringify({ texto: '¡Registro exitoso! Por favor inicia sesión.', tipo: 'success' }));
                res.redirect(`/?msg=${msg}`);
            }
        });
    });
});

// GET /salir - Cierre de sesión
app.get('/salir', (req, res) => { 
    res.redirect('/');
});


// ------------------------------------------------------------------
// RUTAS DE CRUD (TABLA Lista)
// ------------------------------------------------------------------

// GET /listado - Muestra la información de la tabla Lista
app.get('/listado',(req,res)=>{
    const consulta = 'SELECT * FROM Lista';

    db.query(consulta,(err,resultados)=>{
        if(err){
            console.error('Error al recuperar datos de Lista',err);
            res.send('Error, no se recuperan datos de la lista');
        }else{
            res.render('listado',{personas: resultados, mensaje: null}); 
        }
    });
});

// POST /agregar - Agrega una persona a la tabla Lista
app.post('/agregar', (req, res) => { 
    const { nombre, correo, edad, trabajo } = req.body;

    const consulta = 'INSERT INTO Lista (nombre, correo, edad, trabajo) VALUES(?,?,?,?)';

    db.query(consulta, [nombre, correo, edad, trabajo], (err) => {
        if (err) {
            console.error('Error al agregar persona:', err);
            res.send('Error al agregar persona');
        } else {
            res.redirect('/listado');
        }
    });
});

// POST /actualizar/:id - Actualiza una persona en la tabla Lista
app.post('/actualizar/:id', (req, res) => { 
    const { id } = req.params;
    const { nombre, correo, edad, trabajo } = req.body;
    
    const consultaActualizar = 'UPDATE Lista SET nombre = ?, correo=?, edad=?, trabajo=? WHERE id=?';
    
    db.query(consultaActualizar, [nombre, correo, edad, trabajo, id], (err) => {
        if (err) {
            console.error('Error al actualizar persona', err);
            res.redirect('/listado');
        } else {
            res.redirect('/listado');
        }
    });
});

// GET /eliminar/:id - Elimina una persona de la tabla Lista
app.get('/eliminar/:id', (req, res) => { 
    const { id } = req.params;
    const consultaElimina = 'DELETE FROM Lista WHERE id =?';

    db.query(consultaElimina, [id], (err) => {
        if (err) {
            console.error('Error al eliminar persona', err);
            res.send('Error al eliminar');
        } else {
            res.redirect('/listado');
        }
    });
});