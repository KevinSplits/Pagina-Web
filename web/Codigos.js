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

function datosOn() {
    document.getElementById('d1').style.opacity = 0.8;
}

function datosOff() {
    document.getElementById('d1').style.opacity = 1;
}

function cambiarTamaño() {
    var tamano=prompt('Inserte el tamaño que quieres poner')
    if (tamano<1) {
        alert('Ingrese un número valido')
    }else{
        if (tamano>101) {
            alert('Recomendamos no pasarse del límite')

        }
            else{
        document.getElementById('tamaño').style.fontSize=tamano+'px';
    }}
    }


function reestablecerTamaño() {
    document.getElementById('tamaño').style.fontSize='16px';
}


function ponerDescripcion() {
    const descripcion = document.getElementById('descripcion');
    descripcion.style.display = 'block';
}

function quitarDescripcion() {
    const descripcion = document.getElementById('descripcion');
    descripcion.style.display = 'none';
}

// function mostrarSigno() {
//     const fechaNacimiento = document.getElementById('fecha').value;
//     const resultado = document.getElementById('result1');

//     if (!fechaNacimiento) {
//         resultado.innerHTML = 'Por favor, ingrese una fecha de nacimiento.';
//         return;
//     }

//     const partes = fechaNacimiento.split("-");
//     const mes = parseInt(partes[1], 10);
//     const dia = parseInt(partes[2], 10);

//     let signo = '';
//     let descripcion = '';
//     let imagen = '';

//     if ((mes === 1 && dia >= 20) || (mes === 2 && dia <= 18)) {
//         signo = 'Acuario';
//         descripcion = 'Descripción de Acuario';
//         imagen = 'imagenes/acuario.jpg';
//     } else if ((mes === 2 && dia >= 19) || (mes === 3 && dia <= 20)) {
//         signo = 'Piscis';
//         descripcion = 'Descripción de Piscis';
//         imagen = 'imagenes/piscis.jpg';
//     } else if ((mes === 3 && dia >= 21) || (mes === 4 && dia <= 19)) {
//         signo = 'Aries';
//         descripcion = 'Descripción de Aries';
//         imagen = 'imagenes/aries.jpg';
//     } else if ((mes === 4 && dia >= 20) || (mes === 5 && dia <= 20)) {
//         signo = 'Tauro';
//         descripcion = 'Descripción de Tauro';
//         imagen = 'imagenes/tauro.jpg';
//     } else if ((mes === 5 && dia >= 21) || (mes === 6 && dia <= 20)) {
//         signo = 'Géminis';
//         descripcion = 'Descripción de Géminis';
//         imagen = 'imagenes/geminis.jpg';
//     } else if ((mes === 6 && dia >= 21) || (mes === 7 && dia <= 22)) {
//         signo = 'Cáncer';
//         descripcion = 'Descripción de Cáncer';
//         imagen = 'imagenes/cancer.jpg';
//     } else if ((mes === 7 && dia >= 23) || (mes === 8 && dia <= 22)) {
//         signo = 'Leo';
//         descripcion = 'Descripción de Leo';
//         imagen = 'imagenes/leo.jpg';
//     } else if ((mes === 8 && dia >= 23) || (mes === 9 && dia <= 22)) {
//         signo = 'Virgo';
//         descripcion = 'Descripción de Virgo';
//         imagen = 'imagenes/virgo.jpg';
//     } else if ((mes === 9 && dia >= 23) || (mes === 10 && dia <= 22)) {
//         signo = 'Libra';
//         descripcion = 'Descripción de Libra';
//         imagen = 'imagenes/libra.jpg';
//     } else if ((mes === 10 && dia >= 23) || (mes === 11 && dia <= 21)) {
//         signo = 'Escorpio';
//         descripcion = 'Descripción de Escorpio';
//         imagen = 'imagenes/escorpio.jpg';
//     } else if ((mes === 11 && dia >= 22) || (mes === 12 && dia <= 21)) {
//         signo = 'Sagitario';
//         descripcion = 'Descripción de Sagitario';
//         imagen = 'imagenes/sagitario.jpg';
//     } else if ((mes === 12 && dia >= 22) || (mes === 1 && dia <= 19)) {
//         signo = 'Capricornio';
//         descripcion = 'Descripción de Capricornio';
//         imagen = 'imagenes/capricornio.jpg';
//     }
//     resultado.innerHTML = `<div class="signo">${signo}</div><div class="descripcion">${descripcion}</div><img src="${imagen}" alt="${signo}" class="imagen-signo">`;
// }

function mostrarSigno(){
    let dia, mes;
    dia = parseInt (document.formsig.dia.value);
    mes = parseInt (document.formsig.mes.value);

    let signo = '';
    let descripcion = '';
    let imagen = '';

    if((dia>=21&&mes==3)||(dia<=20&&mes==4)){
        signo = 'Aries';
        descripcion = 'Descripción de Aries';
        imagen = 'imagenes/aries.jpg';
    }else if((dia>=24&&mes==9)||(dia<=23&&mes==10)){
        signo = 'Libra';
        descripcion = 'Descripción de Libra';
        imagen = 'imagenes/libra.jpg';
    }else if((dia>=21&&mes==4)||(dia<=21&&mes==5)){
        signo = 'Tauro';
        descripcion = 'Descripción de Tauro';
        imagen = 'imagenes/tauro.jpg';
    }else if((dia>=24&&mes==10)||(dia<=22&&mes==11)){
        signo = 'Escorpio';
        descripcion = 'Descripción de Escorpio';
        imagen = 'imagenes/escorpio.jpg';
    }else if((dia>=22&&mes==5)||(dia<=21&&mes==6)){
        signo = 'Géminis';
        descripcion = 'Géminis es un signo mutable que forma parte del elemento aire; ' +
                  'como signo de los gemelos, su carácter es doble y bastante contradictorio por complejo. ' +
                  'Por una parte es capaz de adaptarse con facilidad y rapidez a todo, pero por otra puede resultar hipócrita. ' +
                  'Su distintivo común es la comunicación y el ingenio.';
        imagen = 'imagen/Geminis.png';
    }else if((dia>=23&&mes==11)||(dia<=21&&mes==12)){
        signo = 'Sagitario';
        descripcion = 'Descripción de Sagitario';
        imagen = 'imagenes/sagitario.jpg';
    }else if((dia>=21&&mes==6)||(dia<=23&&mes==7)){
        signo = 'Cáncer';
        descripcion = 'Descripción de Cáncer';
        imagen = 'imagen/cancer.jpg';
    }else if((dia>=22&&mes==12)||(dia<=20&&mes==1)){
        signo = 'Capricornio';
        descripcion = 'Descripción de Capricornio';
        imagen = 'imagenes/capricornio.jpg';
    }else if((dia>=24&&mes==7)||(dia<=23&&mes==8)){
        signo = 'Leo';
        descripcion = 'Descripción de Leo';
        imagen = 'imagenes/leo.jpg';
    }else if((dia>=21&&mes==1)||(dia<=19&&mes==2)){
        signo = 'Acuario';
        descripcion = 'Descripción de Acuario';
        imagen = 'imagenes/acuario.jpg';
    }else if((dia>=24&&mes==8)||(dia<=23&&mes==9)){
        signo = 'Virgo';
        descripcion = 'Descripción de Virgo';
        imagen = 'imagenes/virgo.jpg';
    }else if((dia>=20&&mes==2)||(dia<=20&&mes==3)){
        signo = 'Piscis';
        descripcion = 'Descripción de Piscis';
        imagen = 'imagenes/piscis.jpg';
    }
    const resultado = document.getElementById('result1');
    resultado.innerHTML = `<div class="resultado-signo">
                                <img src="${imagen}" alt="${signo}" class="imagen-signo">
                                <div class="descrip-contain-signo">
                                    <div class="nombre-signo">${signo}</div>
                                    <div class="descripcion-signo">${descripcion}</div>
                                    </div>
                           </div>`;
}