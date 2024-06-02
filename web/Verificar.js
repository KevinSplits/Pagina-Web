function Verificar_Reclamo() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const dni = document.getElementById('dni').value;

    const nombreValido = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/.test(nombre);
    const telefonoValido = /^\+?\d+$/.test(telefono);
    const dniValido = /^\d+$/.test(dni);

    if (!nombreValido) {
        alert("El nombre solo debe contener letras. Por favor, inténtelo de nuevo.");
        return false;
    }

    if (!telefonoValido) {
        alert("El teléfono solo debe contener números y el signo más (+) opcionalmente. Por favor, inténtelo de nuevo.");
        return false;
    }

    if (!dniValido) {
        alert("El DNI solo debe contener números. Por favor, inténtelo de nuevo.");
        return false;
    }

    // Si todos los campos son válidos, retorna true
    return true;
}

  function validarFormulario() {
    var montoCompra = document.getElementById("montoCompra").value;
    var tipoTarjeta = document.getElementById("tipoTarjeta").value;
    var meses = document.getElementById("meses").value;

    if (montoCompra == "" || tipoTarjeta == "" || meses == "") {
        alert("Por favor complete todos los campos.");
        return false;
    }

    if (isNaN(montoCompra) || isNaN(meses)) {
        alert("Por favor ingrese valores numéricos válidos.");
        return false;
    }

    // Si la validación es exitosa, enviar el formulario
    return true;
}