// Definir un array para almacenar las personas
let personas = [];

// Función para agregar una persona al array y mostrarla en la tabla
function agregar() {
    // Obtener los valores del formulario
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;

    // Crear un objeto persona con los datos ingresados
    let persona = { nombre: nombre, apellido: apellido, edad: edad };

    // Agregar la persona al array
    personas.push(persona);

    // Mostrar las personas en la tabla
    mostrarPersonas();
}

// Función para mostrar las personas en la tabla
function mostrarPersonas() {
    // Obtener el cuerpo de la tabla
    let cuerpoTabla = document.getElementById("cuerpoTabla");

    // Limpiar el cuerpo de la tabla
    cuerpoTabla.innerHTML = "";

    // Iterar sobre el array de personas y agregarlas a la tabla
    personas.forEach(persona => {
        // Crear una nueva fila
        let fila = document.createElement("tr");

        // Crear celdas para cada dato de la persona
        let celdaNombre = document.createElement("td");
        celdaNombre.textContent = persona.nombre;
        fila.appendChild(celdaNombre);

        let celdaApellido = document.createElement("td");
        celdaApellido.textContent = persona.apellido;
        fila.appendChild(celdaApellido);

        let celdaEdad = document.createElement("td");
        celdaEdad.textContent = persona.edad;
        fila.appendChild(celdaEdad);

        // Agregar la fila al cuerpo de la tabla
        cuerpoTabla.appendChild(fila);
    });
}
