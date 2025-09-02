/*
//Math.floor(Math.random() * (maximo - minimo + 1)) + minimo;
let numeroMaquina = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
console.log(numeroMaquina);



let numUser= parseInt(prompt("Adivina el Numero magico"));
let vidas = 3;
/*
AND  &&
0 1 0
1 0 0
0 0 0
1 1 1 ->
*/
/*
while( numeroMaquina  !== numUser && vidas > 1 ){
    vidas --;
    numUser = parseInt(prompt("Vuelve a intentar adivinar el numero Magico. Vidas->"+vidas));

}

if(numUser === numeroMaquina){
    alert("Ganaste")
}else{
    alert("Perdiste")
}

*/

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

var numerorandom = random(1, 5);

var vidas = 3;

while (vidas >= 1) {
    let numjugador = parseInt(prompt("Ingresa un número del 1 al 5: "));
    
    // Verificar si el input es válido
    if (isNaN(numjugador) || numjugador < 1 || numjugador > 5) {
        alert("Por favor ingresa un número válido entre 1 y 5");
        continue; // Volver al inicio del bucle sin restar vida
    }
    
    if (numjugador == numerorandom) {
        alert("Ganaste el numero si era " + numerorandom);
        break;
    } else {
        vidas = vidas - 1;
        if (vidas > 0) {
            alert("Mal. Te quedan " + vidas + " vidas");
        } else {
            alert("Perdiste, el número era " + numerorandom);
            break;
        }
    }
}