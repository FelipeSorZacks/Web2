function saludar(nombre){
    console.log("hola " + nombre);
}

function sumar(n1, n2){
    return parseInt(n1) + parseInt(n2);
}

let numero1 = prompt("Numero 1: ");
let numero2 = prompt("Numero 2: ");

var resultado = sumar(numero1, numero2);
var resultado = sumar(2, 3);
var resultado = sumar(5, 1);
var resultado = sumar(13, 12);
var resultado = sumar(21, 56);
console.log("El total de la suma es: " + resultado);