
let num1 = prompt("Ingresa un Numero");
let num2 = prompt("Ingresa un Segundo Numero");
let num3 = prompt("Ingresa un Tercer Numero");

if (num1 < num2 && num1 < num3 ) {
    console.log("Numero menor es " + num1);
}

else if (num2 < num1 && num2 < num3 ) {
    console.log("Numero menor es " + num2);
}

else if (num3 < num1 && num3 < num2 ) {
    console.log("Numero menor es " + num3);
}

//Mayor que
if (num1 > num2 && num1 > num3 ) {
    console.log("Numero Mayor es " + num1);
}

else if (num2 > num1 && num2 > num3 ) {
    console.log("Numero Mayor es " + num2);
}

else if (num3 > num1 && num3 > num2 ) {
    console.log("Numero Mayor es " + num3);
}


if (num1 == num2 && num2 != num3) {
    console.log("Son iguales los numeros " + num1 + " " + num2);
}

else if (num2 == num3 && num1 != num3) {
    console.log("Son iguales los numeros " + num2 + " " + num3);
}

else if (num1 == num2 && num2== num3) {
    console.log("Todos los numeros son iguales "+ num1 + " " + num2 + " " + num3);
}


console.log("Flujo Completo");