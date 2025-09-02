/*
function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}
consolelog.random(1, 10);
*/

let minimo = parseInt(prompt("ingresa un numero minimo "));
let maximo = parseInt(prompt("ingresa un numero maximo "));

const num = Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;

alert (num);