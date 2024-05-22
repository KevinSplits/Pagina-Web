/*-----------------------------------Pagina web---------------------------------*/

/*----Inicio----*/

/*-----Modificar el tamaño de la letra-----*/

function cambiarTamaño() {
    var tamano=prompt('Inserte el tamaño que quieres poner')
    if (tamano<1) {
        alert('Ingrese un número valido')
    }else{
        if (tamano>101) {
            alert('Recomendamos no pasarse del límite')

        }else{
        document.getElementById('tamaño').style.fontSize=tamano+'px';
        }
    }
}

function reestablecerTamaño() {
    document.getElementById('tamaño').style.fontSize='16px';
}

/*----Imagenes mostradas en inicio----*/

function ponerDescripcion1() {
   const descripcion = document.getElementById('descripcion1');
    descripcion.style.display = 'block';
    document.getElementById('imagen').style.opacity = 0.6;

}

function quitarDescripcion1() {
    const descripcion = document.getElementById('descripcion1');
    descripcion1.style.display = 'none';
    document.getElementById('imagen').style.opacity = 1;
}

function ponerDescripcion2() {
    const descripcion = document.getElementById('descripcion2');
    descripcion.style.display = 'block';
    document.getElementById('imagen1').style.opacity = 0.6;

}

function quitarDescripcion2() {
    const descripcion = document.getElementById('descripcion2');
    descripcion.style.display = 'none';
    document.getElementById('imagen1').style.opacity = 1;
}

function ponerDescripcion3() {
    const descripcion = document.getElementById('descripcion3');
    descripcion.style.display = 'block';
    document.getElementById('imagen2').style.opacity = 0.6;

}

function quitarDescripcion3() {
    const descripcion = document.getElementById('descripcion3');
    descripcion.style.display = 'none';
    document.getElementById('imagen2').style.opacity = 1;
}

/*-----Formulario-----*/

function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellidos = document.getElementById('apellidos').value;
    var correo = document.getElementById('correo').value;
    var genero = document.getElementById('gen').value;
    var preferencias = document.querySelectorAll('input[type="checkbox"]:checked');

    //Verificar que todo los campos esten llenos (exceptuando el area de texto de "Sugerencias")
    if (nombre === "" || apellidos === "" || correo === "" || genero === "" || preferencias.length === 0) {
        alert("Los campos deben ser llenados obligatoriamente para ser enviado el formulario correctamente, incluyendo al menos una preferencia temática.");
        return false;
    } else {
        alert("Su formulario ha sido subido exitosamente. Puede seguir navegando en la página");
        return true;
    }
}

function cancelarFormulario() {
    if (confirm("¿Estás seguro que deseas cancelar? Se perderán todos los cambios hechos en tu formulario")) {
        document.getElementById('suscripcionForm').reset();
    }
}

/*-----------------Entregable 3---------------------------*/

/*-----Ejercicio 1-----*/

/*-----Imagenes mostradas en ejercicio-----*/

function ponerDescripcion() {
    const descripcion = document.getElementById('descripcion');
    descripcion.style.display = 'block';
}

function quitarDescripcion() {
    const descripcion = document.getElementById('descripcion');
    descripcion.style.display = 'none';
}
/*Ejercicio 2*/
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

/*Ejercicio 3*/

function construirTriangulo() {
    let caracter = document.TrianguloConstructor.input.value;
    let tamano = parseInt(document.TrianguloConstructor.input1.value);

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
    let longitudFila = tamano * 2 - 1;

    for (let i = tamano; i > 0; i--) {
        let espaciosAntes = "&nbsp;".repeat(tamano - i);
        let espaciosDespues = "&nbsp;".repeat(tamano - i);
        let fila = espaciosAntes + caracter.repeat(i * 2 - 1) + espaciosDespues;
        triangulo += fila + "<br>";
    }

    // Mostrar el resultado en el div con el id "contenido"
    document.getElementById('contenido').innerHTML = triangulo;
}

/*Ejercicio 4*/

function mostrarSigno(){
    let dia, mes;
    dia = parseInt (document.formsig.dia.value);
    mes = parseInt (document.formsig.mes.value);

    let signo = '';
    let descSigno = '';
    let imgSigno = '';

    if ((dia === '' || isNaN(dia)) || (mes === '' || isNaN(mes))) {
        document.getElementById('validar-signo').innerText = "Por favor, ingrese valores numéricos para el día y el mes";
        return;
    }    

    if((dia>=21&&mes==3)||(dia<=20&&mes==4)){
        signo = 'Aries';
        descSigno = 'Descripción de Aries';
        imgSigno = 'imagenes/aries.jpg';
    }else if((dia>=24&&mes==9)||(dia<=23&&mes==10)){
        signo = 'Libra';
        descSigno = 'Descripción de Libra';
        imgSigno = 'imagenes/libra.jpg';
    }else if((dia>=21&&mes==4)||(dia<=21&&mes==5)){
        signo = 'Tauro';
        descSigno = 'Descripción de Tauro';
        imgSigno = 'imagenes/tauro.jpg';
    }else if((dia>=24&&mes==10)||(dia<=22&&mes==11)){
        signo = 'Escorpio';
        descSigno = 'Descripción de Escorpio';
        imgSigno = 'imagenes/escorpio.jpg';
    }else if((dia>=22&&mes==5)||(dia<=21&&mes==6)){
        signo = 'Géminis';
        descSigno = 'Géminis es un signo mutable que forma parte del elemento aire; ' +
                  'como signo de los gemelos, su carácter es doble y bastante contradictorio por complejo. ' +
                  'Por una parte es capaz de adaptarse con facilidad y rapidez a todo, pero por otra puede resultar hipócrita. ' +
                  'Su distintivo común es la comunicación y el ingenio.';
        imgSigno = 'imagen/Geminis.png';
    }else if((dia>=23&&mes==11)||(dia<=21&&mes==12)){
        signo = 'Sagitario';
        descSigno = 'Descripción de Sagitario';
        imgSigno = 'imagenes/sagitario.jpg';
    }else if((dia>=21&&mes==6)||(dia<=23&&mes==7)){
        signo = 'Cáncer';
        descSigno = 'Descripción de Cáncer';
        imgSigno = 'imagen/cancer.jpg';
    }else if((dia>=22&&mes==12)||(dia<=20&&mes==1)){
        signo = 'Capricornio';
        descSigno = 'Descripción de Capricornio';
        imgSigno = 'imagenes/capricornio.jpg';
    }else if((dia>=24&&mes==7)||(dia<=23&&mes==8)){
        signo = 'Leo';
        descSigno = 'Descripción de Leo';
        imgSigno = 'imagenes/leo.jpg';
    }else if((dia>=21&&mes==1)||(dia<=19&&mes==2)){
        signo = 'Acuario';
        descSigno = 'Descripción de Acuario';
        imgSigno = 'imagenes/acuario.jpg';
    }else if((dia>=24&&mes==8)||(dia<=23&&mes==9)){
        signo = 'Virgo';
        descSigno = 'Descripción de Virgo';
        imgSigno = 'imagenes/virgo.jpg';
    }else if((dia>=20&&mes==2)||(dia<=20&&mes==3)){
        signo = 'Piscis';
        descSigno = 'Descripción de Piscis';
        imgSigno = 'imagenes/piscis.jpg';
    }
    const mostrarSig = document.getElementById('result1');
    mostrarSig.innerHTML = `<div class="resultado-signo">
                                <img src="${imgSigno}" alt="${signo}" class="imagen-signo">
                                <div class="descrip-contain-signo">
                                    <div class="nombre-signo">${signo}</div>
                                    <div class="descripcion-signo">${descSigno}</div>
                                    </div>
                           </div>`;
}
function agrandarDescripSigno() {
    var descripcionSigno = document.getElementById('descripcion-signo');
    descripcionSigno.style.fontSize = '30px'; // Cambia el tamaño de la fuente a 20px al pasar el mouse sobre la descripción
}

function reducirDescripSigno() {
    var descripcionSigno = document.getElementById('descripcion-signo');
    descripcionSigno.style.fontSize = '16px'; // Restaura el tamaño de la fuente a 16px al sacar el mouse de la descripción
}

/*Ejercicio 5*/

function darEmpleado() {

    let codEmp = document.formEmp.codigo.value.trim(); //trim(): Para no dejar espacios en blancos en los extremos

    //Verificamos el correcto ingreso del código (formato numérico)
    if (codEmp.length !== 4 || isNaN(codEmp)) {
        document.getElementById('validar-empleado').innerText = "¡Por favor, ingrese un código numérico tal como se indica al inicio!";
        document.getElementById('result2').innerText = "";
        return;
    } else {
        document.getElementById('validar-empleado').innerText = "";
    }

    // Variables que forman parte del código del empleado
    let numEC = parseInt(codEmp.charAt(0));
    let edad = parseInt(codEmp.charAt(1)+codEmp.charAt(2));
    let codGen = parseInt(codEmp.charAt(3));

    // Inicializamos la variable de "Estado Civil"
    let estCiv = "";
    //Establecemos 
    if (numEC == 1) {
        estCiv = "Soltero";
    }else if (numEC == 2) {
        estCiv = "Casado";
    }else if (numEC == 3) {
        estCiv = "Viudo";
    }else if (numEC == 4) {
        estCiv = "Divorciado";
    } else {
        document.getElementById('validar-empleado').innerText = "El código que ha ingresado no se encuentra en el sistema\n"
        +"Por favor, ingrese nuevamente el código";
        document.getElementById('result2').innerText = "";
        return;
    }

    // Determinar género
    let genero = "";
    if (codGen % 2 == 0) {
        genero = "Femenino";
    } else {
        genero = "Masculino";
    }

    // Mostrar el resultado
    document.getElementById('result2').innerHTML = `<p><strong>Estado civil:</strong> ${estCiv}</p>
                                            <p><strong>Edad:</strong> ${edad} años</p>
                                            <p><strong>Sexo:</strong> ${genero}</p>`;
}
 function resaltarTexto() {
            const elementos = document.querySelectorAll('article ul li');
            elementos.forEach(elemento => {
                if (elemento.style.backgroundColor === 'yellow') {
                    elemento.style.backgroundColor = '';
                } else {
                    elemento.style.backgroundColor = 'yellow';
                }
            });
        }