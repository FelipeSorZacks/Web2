const fs = require('node:fs');

const estado = fs.statSync('./carta.txt');
console.log(estado.isFile()); // true
console.log(estado.isDirectory()); // false
console.log(estado.size);
