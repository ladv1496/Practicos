function validar(cadena) {
    let patron = /^\d{2}[A-Z]{4}\d$/;

    if (patron.test(cadena)) {
        alert("El formato de la cadena es válido.");
    } else {
        
        throw new Error("El formato de cadena no es válido. Intente nuevamente");
    }
}


let cadena = prompt("Ingrese la cadena a validar:");
        try {
            validar(cadena);
        } catch (error) {
            alert(error.message);
        }
