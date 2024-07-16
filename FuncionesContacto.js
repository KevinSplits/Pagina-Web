function clearForm() {
    // Opción 1: Limpiar el input activo
    // document.activeElement.value = '';

    // Opción 2: Limpiar desde el último input ingresado hasta el primero
    const inputs = document.querySelectorAll('.form-input, .form-textarea');
    for (let i = inputs.length - 1; i >= 0; i--) {
        if (inputs[i].value !== '') {
            inputs[i].value = '';
            break;
        }
    }
}

function cancelForm() {
    if (confirm('¿Desea cancelar el envío total?')) {
        document.querySelector('.contact-form').reset();
    }
}