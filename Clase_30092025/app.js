//Iniciamos con un arreglo para almacenar tareas
let tareas = [];

//funcion para mostrar el menu de opciones
function mostrarTareas() {
    return parseInt(prompt(`Seleccione una opción:
    1.- Agregar tarea
    2.- Ver tareas
    3.- Marcar tarea completada
    4.- Eliminar tarea
    5.- Salir
    Elige una opcion`));
}

//Funcion para agregar tarea
function agregarTarea() {
    let nombreTarea = prompt("Introduce el nombre de la tarea:");
    if (nombreTarea) {
        let tarea = {
            nombre: nombreTarea,
            completada: false
        };
        tareas.push(tarea);
        alert(`Tarea "${nombreTarea}" agregada.`);
    }else {
        alert("El nombre de la tarea no puede estar vacío.");
        return;
    }
}

//Funcion para ver tareas
function verTareas() {
    if (tareas.length === 0) {
        alert("No hay tareas disponibles.");
        return;
    } else {
        let mensaje = "Lista de Tareas\n";
        tareas.forEach((tarea, index) => {
            mensaje += `${index + 1}.- ${tarea.nombre}  [${tarea.completada ? "Completada" : "Pendiente"}]\n`;
        });
        alert(mensaje);
    }
}

//Funcion para marcar tareas completadas
function marcarTareaCompletada() {
    verTareas();
    let numeroTarea = prompt("Introduce el número de la tarea que has completado:");
    if (numeroTarea > 0 && numeroTarea <= tareas.length) {
        tareas[numeroTarea - 1].completada = true;
        alert(`Tarea "${tareas[numeroTarea - 1].nombre}" marcada como completada.`);
        verTareas();
    }else {
        alert("Número de tarea inválido.");
        return;
    }
}

/*
function marcarTareaCompletada() {
    if (tareas.length === 0) {
        alert("No hay tareas disponibles");
        return;
    }else {
        verTareas();
        let indice = parseInt(prompt("Introduce el número de la tarea que has completado:")) - 1;  
        if (indice >= 0 && indice < tareas.length) {
            tareas[indice].completada = true;
            alert(`Tarea "${tareas[indice].nombre}" marcada como completada.`);
        }else {
            alert("Número de tarea inválido.");
            return;
        }  
    }
}
*/


function eliminarTarea() {
    if (tareas.length === 0) {
        alert("No hay tareas disponibles para eliminar.");
        return;
    }
    
    verTareas();
    let numeroTarea = parseInt(prompt("Introduce el número de la tarea que deseas eliminar:"));
    
    if (numeroTarea > 0 && numeroTarea <= tareas.length) {
        let tareaEliminada = tareas.splice(numeroTarea - 1, 1)[0];
        alert(`Tarea "${tareaEliminada.nombre}" eliminada correctamente.`);
        verTareas();
    } else {
        alert("Número de tarea inválido.");
        return;
    }
}

//Bucle principal del programa
function iniciarPrograma() {
    let continuar = true;
    while (continuar) {
        let opcion = mostrarTareas();
        switch (opcion) {
            case 1:
                agregarTarea();
                break;
            case 2:
                verTareas();
                break;
            case 3:
                marcarTareaCompletada();
                break;
            case 4:
                eliminarTarea();
                break;
            case 5:
                alert("Saliendo del programa");
                continuar = false;
                break;  
            default:
                alert("Opción inválida. Por favor, elige una opción del 1 al 5.");
        }
    }
}

iniciarPrograma();

/*        
        let opcion;
do {
    opcion = mostrarTareas();
    switch (opcion) {
        case 1:
            agregarTarea();
            break;
        case 2:
            verTareas();
            break;
        case 3:
            marcarTareaCompletada();
            break;
        case 4:
            alert("Saliendo del programa");
            break;
        default:
            alert("Opción inválida. Por favor, elige una opción del 1 al 4.");
    }
} while (opcion !== 4);
 */




// A HACER:
// ELIMINAR TAREAS