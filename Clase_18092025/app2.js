// funcion tradicional
/*
function numero (a){
    return a+100;
}

//1-
(a) => {
    return a+100;
}

//2-
(a) => a+100;

//3-
a => a+100;

//4-
(a,b) => {a+100}
*/

const miNumeroFlecha = (max) => {
    return Math.floor(Math.random() * (max + 1));
}
console.log(miNumeroFlecha(50));

const miNumeroFlecha2 = max => Math.floor(Math.random() * (max + 1));
console.log(miNumeroFlecha2(100));

