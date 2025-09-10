
/*
function saludar(){
    console.log("hola mundo desde la funcion");
}


//redundancia ya que la funcion ya lo esta llamando a imprimir
console.log(saludar());

//mas facil en cuestion de codigo y menor redundancia
saludar();
*/

function saludo(nombreUsuario){
    console.log("Hola, como estas?" + nombreUsuario);
}

saludo("felipe");


let nombreUsuario2 = prompt("Como te llamas?");
alert("Hola, como estas? " + nombreUsuario2)
