let opUser = prompt(`
    Selecciona una Opcion
    1.- Libros
    2.- Peliculas
    3.- Juegos
    `);

switch (opUser){
    case "1":
        console.log("Principito");
        break;

    case "2":
        console.log("Matrix");
        break;

    case "3":
        console.log("FIFA");
        break;
    
    default:
        console.log("Opcion no Valida");
        break;

}
