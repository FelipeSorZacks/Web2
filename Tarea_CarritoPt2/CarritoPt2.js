var productos = [
    {nombre: "Camisa", precio: 300},
    {nombre: "Pantalon", precio: 500},
    {nombre: "Zapatos", precio: 800},
    {nombre: "Sombrero", precio: 200}
];

var carrito = [];

// Función para mostrar productos disponibles
function mostrarProductos() {
    let mensaje = "Productos disponibles:\n";
    for (let i = 0; i < productos.length; i++) {
        mensaje += `${i + 1}. ${productos[i].nombre} - $${productos[i].precio}\n`;
    }
    return mensaje;
}

// Función para agregar producto al carrito
function agregarAlCarrito(indiceProducto) {
    carrito.push(productos[indiceProducto]);
    alert(`${productos[indiceProducto].nombre} agregado al carrito`);
    console.log(`Se agregó: ${productos[indiceProducto].nombre}`);
    console.log('Carrito actual:', carrito);
}

// Función para eliminar producto del carrito
function eliminarDelCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }
    
    let mensaje = "Carrito:\n";
    for (let i = 0; i < carrito.length; i++) {
        mensaje += `${i + 1}. ${carrito[i].nombre} - ${carrito[i].precio}\n`;
    }
    
    let indice = prompt(mensaje + "Ingresa el número del producto a eliminar:");
    indice = parseInt(indice) - 1;
    
    if (indice >= 0 && indice < carrito.length) {
        let productoEliminado = carrito.splice(indice, 1)[0];
        alert(`${productoEliminado.nombre} eliminado del carrito`);
        console.log(`Se eliminó: ${productoEliminado.nombre}`);
    } else {
        alert("Opción inválida");
    }
}

// Función para mostrar carrito y total
function mostrarCarritoYTotal() {
    if (carrito.length === 0) {
        alert("El carrito está vacío");
        return;
    }
    
    let total = 0;
    let mensaje = "Carrito:\n";
    for (let i = 0; i < carrito.length; i++) {
        mensaje += `${carrito[i].nombre} - $${carrito[i].precio}\n`;
        total += carrito[i].precio;
    }
    mensaje += `Total: $${total}`;
    alert(mensaje);
    console.log(`Total: $${total}`);
}

// Menú principal para usuarios
function menuUsuario() {
    let opcion;
    while (opcion !== "7") {
        opcion = prompt(`${mostrarProductos()}
${productos.length + 1}. Eliminar del carrito
${productos.length + 2}. Mostrar carrito y total
${productos.length + 3}. Salir
Elige una opción:`);
        
        let numeroOpcion = parseInt(opcion);
        if (numeroOpcion >= 1 && numeroOpcion <= productos.length) {
            agregarAlCarrito(numeroOpcion - 1);
        } else {
            switch (opcion) {
                case String(productos.length + 1):
                    eliminarDelCarrito();
                    break;
                case String(productos.length + 2):
                    mostrarCarritoYTotal();
                    break;
                case String(productos.length + 3):
                    console.log("Regresa pronto");
                    return;
                default:
                    alert("Opción inválida");
            }
        }
    }
}

// Función para agregar nuevo producto (administrador)
function agregarProducto() {
    let nombre = prompt("Ingresa el nombre del nuevo producto:");
    if (!nombre) {
        alert("Nombre inválido");
        return;
    }
    
    let precio = prompt("Ingresa el precio del producto:");
    precio = parseFloat(precio);
    
    if (isNaN(precio) || precio <= 0) {
        alert("Precio inválido");
        return;
    }
    
    productos.push({nombre: nombre, precio: precio});
    alert(`Producto ${nombre} agregado`);
}

// Función para modificar precio de producto (administrador)
function modificarPrecio() {
    if (productos.length === 0) {
        alert("No hay productos disponibles");
        return;
    }
    
    let mensaje = mostrarProductos();
    let indice = prompt(mensaje + "Selecciona el producto a modificar:");
    indice = parseInt(indice) - 1;
    
    if (indice >= 0 && indice < productos.length) {
        let nuevoPrecio = prompt(`Precio actual: ${productos[indice].precio}\nIngresa el nuevo precio:`);
        nuevoPrecio = parseFloat(nuevoPrecio);
        
        if (isNaN(nuevoPrecio) || nuevoPrecio <= 0) {
            alert("Precio inválido");
            return;
        }
        
        productos[indice].precio = nuevoPrecio;
        alert(`Precio modificado`);
    } else {
        alert("Producto inválido");
    }
}

function eliminarProducto() {
    if (productos.length === 0) {
        alert("No hay productos disponibles");
        return;
    }
    
    let mensaje = mostrarProductos();
    let indice = prompt(mensaje + "Selecciona el producto a eliminar:");
    indice = parseInt(indice) - 1;
    
    if (indice >= 0 && indice < productos.length) {
        let productoEliminado = productos.splice(indice, 1)[0];
        alert(`Producto eliminado`);
        carrito = carrito.filter(item => item.nombre !== productoEliminado.nombre);
    } else {
        alert("Producto inválido");
    }
}

function menuAdministrador() {
    let opcion;
    while (opcion !== "5") {
        opcion = prompt(`MENU DE ADMINISTRADOR 
        1. Agregar nuevo producto
        2. Modificar precio
        3. Eliminar producto
        4. Ver productos
        5. Salir
        Elige una opción:`);
        
        switch (opcion) {
            case "1":
                agregarProducto();
                break;
            case "2":
                modificarPrecio();
                break;
            case "3":
                eliminarProducto();
                break;
            case "4":
                alert(mostrarProductos());
                break;
            case "5":
                console.log("Regresando al menú principal");
                return;
            default:
                alert("Opción inválida");
        }
    }
}

function iniciarSistema() {
    console.log("Bienvenido a la tienda");
    let tipoUsuario;
    while (tipoUsuario !== "3") {
        tipoUsuario = prompt(`1. Soy Administrador
2. Soy Usuario
3. Salir
Elige una opción:`);
        
        switch (tipoUsuario) {
            case "1":
                console.log("Bienvenido Administrador");
                menuAdministrador();
                
                break;
            case "2":
                console.log("Puedes empezar a comprar");
                menuUsuario();
                break;
            case "3":
                console.log("Adios");
                break;
            default:
                alert("Opción inválida");
        }
    }
}

iniciarSistema();