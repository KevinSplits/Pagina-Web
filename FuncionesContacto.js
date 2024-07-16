//let currentIndex = -1; // Variable global para rastrear el índice del campo actual

function limpiarFormularioContacto() {
    //Opción 1: Limpiar los campos (uno a uno) desde el primer hasta el último campo (con cuadros de diálogo por campo) con solo apretar el botón una vez
    /*const inputs = document.querySelectorAll('.form-input, .form-textarea');

    // Incrementar el índice para pasar al siguiente campo
    currentIndex++;

    // Verificar si currentIndex está dentro del rango de inputs
    if (currentIndex < inputs.length) {
        const currentInput = inputs[currentIndex];

        // Mostrar el alert para confirmar la eliminación del campo
        if (currentInput.value !== '') {
            const confirmation = confirm(`¿Desea borrar el campo "${currentInput.placeholder}"?`);
            
            // Según la opción seleccionada en el confirm(), actuar sobre el campo actual
            if (confirmation) {
                currentInput.value = ''; // Aceptar: borrar el valor del campo
            }
        }

        // Si se cancela o se acepta, avanzar al siguiente campo después de mostrar el alert()
        if (currentIndex + 1 < inputs.length) {
            inputs[currentIndex + 1].focus(); // Colocar el foco en el siguiente campo
        }
    } else {
        // Reiniciar currentIndex cuando se alcanza el final de los campos
        currentIndex = -1;
    }*/
    // Opción 2: Limpiar desde el último input ingresado hasta el primero (sin cuadros de diálogo) presionando el botón varias veces
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    for (let i = inputs.length - 1; i >= 0; i--) {
        if (inputs[i].value !== '') {
            inputs[i].value = '';
            break;
        }
    }
}

function cancelarFormularioContacto() {
    if (confirm('¿Desea cancelar el envío total? Se perderán todos los cambios realizados')) {
        document.querySelector('.contact-form').reset();
    }
}

function validarFormularioContacto() {
    // Resetear mensajes de error
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('phoneError').textContent = '';
    document.getElementById('subjectError').textContent = '';
    document.getElementById('commentsError').textContent = '';
    document.getElementById('addressError').textContent = '';

    let isValid = true;

    // Validación del nombre
    const nameInput = document.getElementById('name');
    if (nameInput.value.trim() === '') {
        document.getElementById('nameError').textContent = 'Debe ingresar un nombre antes de enviar el formulario';
        isValid = false;
    }

    // Validación del correo electrónico
    const emailInput = document.getElementById('email');
    if (!isValidEmail(emailInput.value)) {
        document.getElementById('emailError').textContent = 'Ingrese un correo electrónico válido antes de enviar el formulario';
        isValid = false;
    }

    // Validación del teléfono
    const phoneInput = document.getElementById('phone');
    if (!isValidPhone(phoneInput.value)) {
        document.getElementById('phoneError').textContent = 'Ingrese un teléfono válido (9 dígitos comenzando con 9) antes de enviar el formulario';
        isValid = false;
    }

    // Validación del asunto
    const subjectInput = document.getElementById('subject');
    if (subjectInput.value.trim() === '') {
        document.getElementById('subjectError').textContent = 'Debe ingresar un asunto antes de enviar el formulario';
        isValid = false;
    }

    // Validación de los comentarios
    const commentsInput = document.getElementById('comments');
    if (commentsInput.value.trim() === '') {
        document.getElementById('commentsError').textContent = 'Debe ingresar un comentario antes de enviar el formulario';
        isValid = false;
    }

    // Validación de la dirección
    const addressInput = document.getElementById('address');
    if (addressInput.value.trim() === '') {
        document.getElementById('addressError').textContent = 'Debe ingresar una dirección antes de enviar el formulario';
        isValid = false;
    }

    return isValid;
}

function isValidEmail(email) {
    // Validación específica de correo electrónico con dominios permitidos
    return /^[^\s@]+@[^\s@]+\.(com|pe|com\.pe)$/.test(email);
}

function isValidPhone(phone) {
    // Validación básica de formato de número de teléfono en Perú
    return /^9\d{8}$/.test(phone);
}