// const apiUrl = "https://api.thedogapi.com/v1/images/search";

//Función que obtiene una imagen de perro usando Promesas
//Función que obtiene una imagen de perro usando Async/Await
function obtenerperro() {
    fetch('https://api.thedogapi.com/v1/images/search') // Llamada a la API para obtener una imagen aleatoria de perro
        .then(response => response.json()) // Convierte la respuesta en formato JSON
        .then(data => mostrarPerro(data)); // Llama a la función para mostrar la imagen en la página
}
//Función para mostrar la imagen en la página
function mostrarPerro(dataPerro) {
    let img = document.createElement('img'); // Crea un nuevo elemento de imagen
    img.src = dataPerro[0].url; // Asigna la URL de la imagen obtenida desde la API
    document.body.append(img); // Agrega la imagen al cuerpo del documento
}


//-----Cuando se clique en el elemento con id "fetchBtn" se ejecutará la función obtener perro que a su vez llama a "mostrarperro"-----
document.getElementById("fetchBtn").addEventListener('click', obtenerperro);
//---------- ASYNC/AWAIT------Función que obtiene una imagen 
async function mostrarPerroAwait() {
    let respuesta = await fetch('https://api.thedogapi.com/v1/images/search'); // Llama a la API
    let perro = await respuesta.json(); // Convierte la respuesta en JSON

    let img = document.createElement('img'); // Crea un elemento que será una imagen
    img.src = perro[0].url; // Asigna a esa variable imagen la URL de la imagen obtenida de la api
    document.body.append(img); // Se añade al body esa imagen
}

//-----Cuando se clique en el elemento con id "asyncBtn" se ejecutará la función "mostrarperroAwait"-----
document.getElementById("asyncBtn").addEventListener('click', mostrarPerroAwait);
