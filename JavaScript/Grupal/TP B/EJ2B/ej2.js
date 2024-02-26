/*2) Realice un formulario que contenga Nombre, Apellido, Sexo, Fecha de nacimiento y mail.
Luego realice las validaciones para cada uno de los campos.*/



function verificar() {
    let nombre = document.getElementById("nombre").value
    let apellido = document.getElementById("apellido")
    let sexo = document.querySelector('input[name=eleccion]:checked')
    let fecha = document.getElementById("fecha").value
    let mail = document.getElementById("mail").value
    let enviar = document.getElementById("enviar")

    let regexNA = /^[a-zA-Z\s]+$/
    let regexmail = /^\S+@\S+\.\S+$/
    let error = false

    if (!regexNA.test(nombre)) {
        document.getElementById("errornombre").textContent = "Por favor, ingresa tu nombre"
        error=true;
    }

    if (!regexNA.test(apellido)) {
        document.getElementById("erroraoellido").textContent = "Por favor, ingresa tu apellido"
        error=true;
    }

    if (!sexo) {
        document.getElementById("errorsexo").textContent = "Por favor, selecciona tu género"
        error=true;
    }

    if (fecha === "") {
        document.getElementById("errorfecha").textContent = "Por favor, ingresa tu fecha de nacimiento"
        error=true;
    }

    if (!regexmail.test(mail)) {
        document.getElementById("errormail").textContent = "Por favor, ingresa tu correo electrónico"
        error=true;
    }

    if (error) {
        return
    }
    alert("Formulario enviado correctamente");


}


