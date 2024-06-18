//Ejercicio 01 del "Entregable 04": Verificar campos en Libro de Reclamos
function VerificarReclamo() {
    var nombre = document.getElementById('nombre').value.trim();
    var domicilio = document.getElementById('domicilio').value.trim();
    var dni = document.getElementById('dni').value.trim();
    var telefono = document.getElementById('telefono').value.trim();
    var email = document.getElementById('email').value.trim();
    var detalle = document.getElementById('detalle').value.trim();
    var acciones = document.getElementById('acciones').value.trim();
    var firma = document.getElementById('firma').value.trim();

    if (nombre === '' || domicilio === '' || dni === '' || telefono === '' || email === '' || detalle === '' || acciones === '' || firma === '') {
        alert("Por favor, complete todos los campos.");
        return false;
    }

     var nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s]+$/;
    if (!nombreRegex.test(nombre)) {
        alert("El nombre solo debe contener letras. Por favor, inténtelo de nuevo.");
        return false;
    }

    // Validar que el teléfono solo contenga números
    var telefonoRegex = /^\+?\d+$/;
    if (!telefonoRegex.test(telefono)) {
        alert("El teléfono solo debe contener números y el signo más (+) opcionalmente. Por favor, inténtelo de nuevo.");
        return false;
    }

    // Validar que el DNI solo contenga números
    var dniRegex = /^\d+$/;
    if (!dniRegex.test(dni)) {
        alert("El DNI solo debe contener números. Por favor, inténtelo de nuevo.");
        return false;
    }

    // Validar que el detalle no esté vacío
    if (detalle === '') {
        alert("El campo detalle no puede estar vacío. Por favor, ingrese detalles del reclamo.");
        return false;
    }

    // Validar que el formato del correo electrónico sea válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Por favor, ingrese un correo electrónico válido.");
        return false;
    }

    // Si pasa todas las validaciones
    return true;
}

//Ejercicio 02 del "Entregable 04": Validar campos y colocar precios por selección
function CambiarSeleccion() {
     var productos = document.getElementById("ProductosDataMining").value;
     switch (productos) {
                case "SO1":
                    document.getElementById("montoCompra").value=129.9;
                    break;
                case "SO2":
                    document.getElementById("montoCompra").value=99.9;
                    break;
                case "SO3":
                    document.getElementById("montoCompra").value=249.9;
                    break;
                default:
                    document.getElementById("montoCompra").value=0;
            }
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

    if (montoCompra<0 || meses<0 ) {
        alert("Ingrese números positivo y que no sean nulos")
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
//ENTREGABLE 5

//Verificar borrado de usuario

function confirmarBorrado() {
    var nombreUsuario = document.getElementById("nombre").value;
    if (confirm("¿Estás seguro de borrar al usuario " + nombreUsuario + "?")) {
        return true;
    } else{
        return false;
    }
}
