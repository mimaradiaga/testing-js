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

e.preventDefault();

//objeto que contenga los valores de la forma//
const formulario = {
    name: nombre.value,
    correo: correo.value,
    job: trabajo.value,
    tel: telefono.value,
    text: texto.value,

}

// dar orden de submit//
console.log(formulario);


});

const submit = document.getElementById("submit");

submit.addEventListener("click", (e) => {
    console.log(e.target);
});



