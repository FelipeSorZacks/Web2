let nombre = [];

function agregarNombre() {
    let nombre = prompt("Ingresa un nombre:");

    if (nombre) {
        nombres.push(nombre);
        alert(`Nombre es ${nombre} agregado exitosamente`);

    }else{
        alert("El nombre esta vacio");
    }
}


/*
function mostrarNombres() {
    if (nombres.length === 0) {
        alert(`No hay nombres almacenados`);
        return;
    }else{
        let mensaje = "Nombres almacenados:\n";
        nombres.forEach((nombre, index) => {
            mensaje += `${index + 1}. ${nombre}\n`;
        });
        alert(mensaje);
    }
}
    */
function mostrarNombres() {
    if (nombres.length === 0) {
        alert(`No hay nombres almacenados`);
        return;
    }else{
        let mensaje = "Nombres almacenados:\n";
        for (let i = 0; i < nombres.length; i++) {
            mensaje += `${i + 1}. ${nombres[i]}\n`;
        }
        alert(mensaje);
    }
}

function mostrarMenu() {
    let opcion;
    do {
        opcion = prompt(`Seleccione una opción:
        1. Agregar nombre
        2. Mostrar nombres
        3. Salir
        Elige una opcion`);
        switch (opcion) {
            case "1":
                agregarNombre();
                break;
            case "2":
                mostrarNombres();
                break;
            case "3":
                alert("Saliendo...");
                break;
            default:
                alert("Opción inválida. Selecciona una opción válida.");
        }
    } while (opcion !== "3");
}   

//iniciar programa
mostrarMenu();