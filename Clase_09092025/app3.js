let carrito = [];
let opcion;

while (true) {
    console.log('\nCarrito actual:', carrito);
    opcion = prompt('Buenas quieres agregar (a), eliminar (e) una fruta o salir (s)? ').toLowerCase();

    if (opcion === 'a') {
        const fruta = prompt('Ingresa el nombre de la fruta que quieras agregar: ');
        carrito.push(fruta);
        console.log(`${fruta} agregada al carrito.`);
    } else if (opcion === 'e') {
        const fruta = prompt('Ingresa el nombre de la fruta que quieras eliminar: ');
        const index = carrito.indexOf(fruta);
        if (index !== -1) {
            carrito.splice(index, 1);
            console.log(`${fruta} eliminada del carrito.`);
        } else {
            console.log(`${fruta} no está en el carrito.`);
        }
    } else if (opcion === 's') {
        break;
    } else {
        console.log('Opción no válida.');
        
    }
}

console.log('\nTu carrito:', carrito);