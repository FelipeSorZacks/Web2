// funcion declarativa
function numeroaleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(numeroaleatorio(1, 11));

//Funcion expresada
const minumero = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(minumero(2, 20));
