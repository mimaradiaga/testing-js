// obtener informacion de la forma//
const nombre = document.getElementById("nombre");
const email = document.getElementById("correo");
const trabajo = document.getElementById("trabajo");
const tel = document.getElementById("telefono");
const texto = document.getElementById("texto");

const form = document.getElementById("formulario");

//Event listener para la forma//

form.addEventListener("submit", (e) => {

    //prevenir accion por defecto//

e.target.preventDefault();

//objeto que contenga los valores de la forma//
const formulario = {
    name: nombre.value,
    correo: email.value,
    job: trabajo.value,
    tel: tel.value,
    text: texto.value,

}

// dar orden de submit//
console.log(formulario);


});

const submit = document.getElementById("boton");

submit.addEventListener("click", (e) => {
    console.log(e.target);
});

//Funcion que cree conteido HTML dimanicamente//
    function crearCuadroDeForma(nombre, correo, trabajo, telefono,texto){
        const cuadroHtml = 
        `<div class"contenido">
        <h3>${nombre}</h3>
        <p>${correo}</p>
        <p>${trabajo}</p>
        <p>${telefono}</p>
        <p>${texto}</p>` 

        return cuadroHtml;
    }

// const cuadroHtmlConInfo = crearCuadroDeForma("Ulises", "email@test.com");

// Llamar al button submit
const boton = document.getElementById("boton");

submit.addEventListener("click", (e) => {
  console.log(e.target)
});

// Validar nombre
function validarNombre(nombre) {

  if (nombre != " ") {
    return true; //

    }

}
