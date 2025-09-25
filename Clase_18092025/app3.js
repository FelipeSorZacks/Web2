
/*var miCarro = new Object();
miCarro.marca = "Toyota";
miCarro.modelo = "Supra";
miCarro.color = "Rojo";

console.log(miCarro);
*/


//Ejemplo de arreglo
/*
let frutas = ["Manzana", "Pera", "Cereza"];
console.log(frutas);
*/

/*
var miCarro = {
    marca: 'Toyota',
    modelo: 'Supra',
    color: 'Rojo'
};

console.log(miCarro.marca);
*/


var perro = {
    nombre: 'Firulais',
    color: 'Marron',
    edad: 5,
    talla: 'Grande',
    enemigos: ['Gatos', 'Personas', 'Autos'],
};

console.log(perro);
// console.log(perro.nombre);
// console.log(perro.enemigos[1]);

//Agregar nueva propiedad
perro.raza = 'Labrador';
console.log(perro);

//Actualizar
perro.edad = 7;
console.log(perro);

//Eliminar
delete perro.talla;
console.log(perro);