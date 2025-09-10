let nombre = "felipe";

/*
    console.log("Tu nombre es " + nombre);

    console.log(`Tu nombre es ${nombre}`);


    //Aparece tal cual en la consola del navegador
    console.log(`
        Hola como estas : 
        ${nombre}`
    );
*/

console.log(`Hola como estas: ${nombre.toLocaleUpperCase}`);


var nombreUsuario = "Felipe SorZacks";
let estado = false;
//version corta para verificar un true/false y ejecuta true izquierda (todo bien) y false derecha (adios)
console.log(
    `${estado? 'Todo bien' : 'Adios'} ${nombreUsuario}`
);

//version mas larga pero mas comun para verificar true/false
var nombre1 = "nombre";
let bandera = true
if (bandera) {
    console.log(`Todo bien ${nombre1}`);
} else {
    console.log(`Adios ${nombre1}`);
}