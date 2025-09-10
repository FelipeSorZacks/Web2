function sumar(n1, n2, n3){
    return parseInt(n1) + parseInt(n2) + parseInt(n3);
}

function restar(n1, n2, n3){
    return parseInt(n1) - parseInt(n2) - parseInt(n3);
}

function dividir(n1, n2, n3){
    return parseInt(n1) / parseInt(n2);
}

function multiplicar(n1, n2, n3){
    return parseInt(n1) * parseInt(n2) * parseInt(n3);
}

// 

var resultado = sumar(25, 89, 4);
var resultado1 = sumar(2, 3, 8);
var resultado2 = sumar(5, 1, 6);

var resultado3 = restar(13, 12, 4);
var resultado4 = restar(21, 56, 6);
var resultado5 = restar(1, 5, 2);

var resultado6 = multiplicar(2, 6, 12);
var resultado7 = multiplicar(5, 8, 47);
var resultado8 = multiplicar(10, 14, 23);

var resultado9 = dividir(46, 45);
var resultado10 = dividir(4, 56);
var resultado11 = dividir(86, 4);

console.log("El total de la suma es: " + resultado);
console.log("El total de la suma es: " + resultado1);
console.log("El total de la suma es: " + resultado2);
console.log("El total de la suma es: " + resultado3);
console.log("El total de la resta es: " + resultado4);
console.log("El total de la resta es: " + resultado5);
console.log("El total de la multiplicacion es: " + resultado6);
console.log("El total de la multiplicacion es: " + resultado7);
console.log("El total de la multiplicacion es: " + resultado8);
console.log("El total de la division es: " + resultado9);
console.log("El total de la division es: " + resultado10);
console.log("El total de la division es: " + resultado11);
