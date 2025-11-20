const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');


const app = express();

//solicitudes de http
app.use(bodyParser.urlencoded({ extended: true }));


//configuracion del motor de plantillas
app.set('view engine', 'ejs');


const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'Sharilamejor1',
    database: 'node_crud',
    port: 3306
})


//verificar la conexion
db.connect((err) => {
    if (err) {
        console.error('Error en Servidor: ', err);
    } else {
        console.log('Conexión establecida');
    }
});


const port = 3306;



app.listen(port, () => {
    console.log(`Servidor http://localhost:${port}`);
});




//Mostrar informacion en una lista -> index.ejs
app.get('/', (req, res) => {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, results) => {
        if (err) {
            console.error('Error al realizar la consulta: ', err);
            res.send('Error al obtener los datos');
        } else {
            res.render('index', { users: results });
        }
    });
});
