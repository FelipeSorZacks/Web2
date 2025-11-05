const usuarios = [];

const form = document.getElementById('userForm');
const salida = document.getElementById('salidaJSON');

form.addEventListener('submit', function(event) {
  event.preventDefault();

    const nombre = document.getElementById('Nombre').value;
    const correo = document.getElementById('Correo').value;

    const nuevoUsuario = { 
        nombre: nombre, 
        correo: correo 
    };

    usuarios.push(nuevoUsuario);
    salida.textContent = JSON.stringify(usuarios, null, 2);
    form.reset();
});