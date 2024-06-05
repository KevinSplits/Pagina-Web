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

// Ejercicio 03 del "Entregable 04":Función para validar la cantidad ingresada
function validarCantidad() {
    var cantidad = document.formCantidadNumeros.cantidad.value;
    var errorCantidad = document.getElementById('errorCantidad');
    document.getElementById('errorCantidad').innerText = "";

    // Verificar si la cantidad es un número positivo
    if (cantidad <= 0 || isNaN(cantidad) || cantidad == "") {
        errorCantidad.innerText = "La cantidad de números aleatorios debe ser positiva y no nula!!!";
        return false;
    }

    return true;
}

// Ejercicio 04 del "Entregable 04": Función para validar el formato, el tipo y el valor de los números
function validarNumeros() {
    var num1 = parseInt(document.formMCMyMCD.num1.value);
    var num2 = parseInt(document.formMCMyMCD.num2.value);
    var num3 = parseInt(document.formMCMyMCD.num3.value);

    var valid = true;

    // Limpiar mensajes de error
    document.getElementById('error-num1').innerText = "";
    document.getElementById('error-num2').innerText = "";
    document.getElementById('error-num3').innerText = "";

    if (isNaN(num1) || num1 <= 0) {
        document.getElementById('error-num1').innerText = "Ingrese un número entero positivo y no nulo, por favor!!!";
        valid = false;
    }

    if (isNaN(num2) || num2 <= 0) {
        document.getElementById('error-num2').innerText = "Ingrese un número entero positivo y no nulo, por favor!!!";
        valid = false;
    }

    if (isNaN(num3) || num3 <= 0) {
        document.getElementById('error-num3').innerText = "Ingrese un número entero positivo y no nulo, por favor!!!";
        valid = false;
    }

    return valid;
}