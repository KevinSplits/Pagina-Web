function convertirBaseADecimal() {
    // Función para convertir un número en base a decimal
    function convertirBaseADecimal(base, numero) {
        // Validar que el número pertenezca a la base especificada
        for (let i = 0; i < numero.length; i++) {
            if (parseInt(numero[i], base) >= base) {
                return -1; // Si algún dígito no pertenece a la base, retornar -1 (indicando error)
            }
        }
        
        // Convertir el número a base 10
        return parseInt(numero, base);
    }

    let base = parseInt(document.Binario_Octal.input1.value);
    let numero = document.Binario_Octal.input2.value;

    // Validar que la base sea menor o igual a 10
    if (isNaN(base) || base <= 0 || base > 10) {
        alert("La base debe ser un número entero entre 1 y 10.");
        return;
    }

    // Validar que el número pertenezca a la base especificada
    if (!numero.match("^[0-" + (base - 1) + "]+$")) {
        alert("El número ingresado no pertenece a la base especificada.");
        return;
    }

    // Convertir el número a decimal
    let resultado = convertirBaseADecimal(base, numero);
    
    // Mostrar el resultado en el output
    document.Binario_Octal.output.value = resultado !== -1 ? resultado : "Error: El número ingresado no pertenece a la base especificada.";
}

function construirTriangulo() {
    let caracter = document.forms["TrianguloConstructor"]["input"].value;
    let tamano = parseInt(document.forms["TrianguloConstructor"]["input1"].value);

    // Verificar que se haya ingresado un carácter y un tamaño válido
    if (caracter.length !== 1) {
        alert("Por favor, ingrese un solo carácter.");
        return;
    }

    if (isNaN(tamano) || tamano < 1) {
        alert("Por favor, ingrese un tamaño válido (mayor o igual a 1).");
        return;
    }

    let triangulo = "";
    for (let i = 1; i <= tamano; i++) {
        // Construir cada línea del triángulo
        triangulo += caracter.repeat(i) + "\n";
    }

    // Mostrar el resultado en el campo de texto "Respuesta"
    document.forms["TrianguloConstructor"]["output"].value = triangulo;
}


