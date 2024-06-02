function Verificar_Reclamo(){
	  document.getElementById('reclamoForm').addEventListener('submit', function(event) {
        let isValid = true;
        const nombre = document.getElementById('nombre');
        const email = document.getElementById('email');
        const telefono = document.getElementById('telefono');
        const detalle = document.getElementById('detalle');

        // Clear previous error messages
        document.querySelectorAll('.error').forEach(element => element.remove());

        // Validación de nombre
        if (nombre.value.trim() === '') {
            isValid = false;
        }

        // Validación de email
        if (email.value.trim() === '' || !validateEmail(email.value)) {
            isValid = false;
        }

        // Validación de teléfono
        if (telefono.value.trim() === '' || !validatePhone(telefono.value)) {
            isValid = false;
        }

        // Validación de detalle
        if (detalle.value.trim() === '') {
            isValid = false;
        }

        if (!isValid) {
            event.preventDefault();
            alert("Por favor, completa todos los campos correctamente antes de enviar el formulario.");
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    }

    function validatePhone(phone) {
        const re = /^\d{10}$/;
        return re.test(String(phone));
    }
}