const frutas = ['Banana'];
frutas.push('Sandia'); //final
frutas.unshift('Manzana'); //inicio
frutas.push('Pera'); //final
frutas.unshift('Cereza'); //inicio

console.log(frutas);

for (let fruta of frutas) {
    console.log(fruta);
}

console.log("-------------------------------");

frutas.pop(); //elimina el ultimo

for (let fruta of frutas) {
    console.log(fruta);
}

console.log("-------------------------------");

frutas.shift(); //elimina el primero

for (let fruta of frutas) {
    console.log(fruta);
}


/*
//MAL
const puerto = 3306;
puerto = 8080;
console.log(puerto);
*/