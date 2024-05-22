//Pagina web

/*Formulario*/

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



/*Imagenes mostradas en ejercicio*/

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

/*Imagenes mostradas en ejercicio*/

/*Ejercicio 1*/
function ponerDescripcion() {
    const descripcion = document.getElementById('descripcion');
    descripcion.style.display = 'block';
}

function quitarDescripcion() {
    const descripcion = document.getElementById('descripcion');
    descripcion.style.display = 'none';
}
/*Imagenes mostradas en inicio*/
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

    if ((dia === '' || isNaN(dia) || dia < 1 || dia > 31) || (mes === '' || isNaN(mes) || mes < 1 || mes > 12)) {
        document.getElementById('validar-signo').innerText = "Por favor, ingrese valores numéricos para el día y el mes";
        return;
    } 

    if((dia>=21&&mes==3)||(dia<=20&&mes==4)){
        signo = 'Aries';
        descSigno = 'Aries forma parte de los signos cardinales y al mismo tiempo es un signo de fuego;'+
        ' también es el primer signo del zodíaco, precisamente por eso, simboliza el inicio, la creación.'+
        ' Se caracteriza por ser una persona rebosante de energía y entusiasmo; avanzada y aventurera, adora la libertad, los retos y las nuevas ideas.\n'+
        ' Los Aries son de acción rápida y confían en su poder, por eso no pierden el tiempo pensando en problemas,'+
        ' de hecho, su manera de resolverlos es la acción. Un aspecto negativo de esta actitud, a veces, es la impulsividad y falta de paciencia,'+
        ' además de arriesgarse demasiado. Tampoco soportan equivocarse ni el fracaso.';
        imgSigno = 'imagen/Aries.png';
    }else if((dia>=24&&mes==9)||(dia<=23&&mes==10)){
        signo = 'Libra';
        descSigno = 'Libra es un signo cardinal y de aire, se encuentra además entre los signos más refinados del zodíaco; '+
        'tiene elegancia, encanto, diplomacia y buen gusto, ama la belleza, es muy curioso por naturaleza y odia los conflictos.'+
        ' Sus puntos negativos a veces son la frivolidad y un carácter voluble.\n'+' Al igual que su propio arquetipo: la balanza,'+
        ' símbolo de justicia, las Libra son personas que presentan un sentido de la ecuanimidad y la tolerancia muy desarrollado;'+
        ' comprenden las posturas de los demás y al mismo tiempo procuran dirimir las diferencias.'+
        ' En general, no les gusta la rutina, sobre todo en su trabajo; además tienen una fina sensibilidad artística que'+
        ' pueden llegar a canalizar profesionalmente.';
        imgSigno = 'imagen/Libra.png';
    }else if((dia>=21&&mes==4)||(dia<=21&&mes==5)){
        signo = 'Tauro';
        descSigno = 'Tauro pertenece a los signos fijos y simultáneamente es un signo de tierra. La proyección del Sol en su nacimiento suele'+
        ' influir para que sean personas firmes, decididas y constantes en varios sentidos. También adoran sentir seguridad, por eso la buscan tanto, es como'+
        ' una necesidad constante en sus vidas. Un Tauro es un ser decidido, pragmático y tiene una enorme fuerza de voluntad. Tiende a las ideas conservadoras,'+
        ' y como le gusta tanto la estabilidad, sus ideas son fijas, no hay manera de convencer a un Tauro de algo que vaya en contra de sus principios o de lo que piensa y siente,'+
        ' así que la terquedad es otra de sus características más evidente.\n'+'Tienen una gran capacidad para evitar conflictos y disgustos, sin duda prefieren resolver sus problemas con pragmatismo;'+
        ' también tienen buen humor. Sin embargo, cuando pierden los nervios, son capaces de montar en cólera y mostrar un genio terrible.';
        imgSigno = 'imagen/Tauro.png';
    }else if((dia>=24&&mes==10)||(dia<=22&&mes==11)){
        signo = 'Escorpio';
        descSigno = 'Escorpio es un signo fijo y de agua; su potencia y energía emocional son únicas en todo el zodíaco. Tiene mucha imaginación e intuición, además de una gran capacidad para el análisis,'+
        ' fuerza de voluntad y firmeza, aunque también es muy sensible y emocional consigo mismo y con el entorno. Además, Escorpio desea ejercer el control, acumulando poder; suele tener una profunda inteligencia fruto de su poder de concentración.\n'+
        ' Escorpio tiende a ir a la raíz, a lo esencial y a lo que pertenece al mundo inconsciente. Un Escorpión es inmensamente enérgico y su carácter puede dar lugar a grandes ventajas o no menos grandes peligros para los demás.'+
        ' De hecho, sus puntos negativos son la agresión, los celos y el resentimiento. No soporta la deslealtad y tampoco perdona una ofensa; es más, seguramente busque venganza... y es muy mal enemigo, así que cuidadito con hacerle daño.';
        imgSigno = 'imagen/Escorpio.png';
    }else if((dia>=22&&mes==5)||(dia<=21&&mes==6)){
        signo = 'Géminis';
        descSigno = 'Géminis es un signo mutable que forma parte del elemento aire; ' +
                  'como signo de los gemelos, su carácter es doble y bastante contradictorio por complejo. ' +
                  'Por una parte es capaz de adaptarse con facilidad y rapidez a todo, pero por otra puede resultar hipócrita. ' +
                  'Su distintivo común es la comunicación y el ingenio.';
                  'Su distintivo común es la comunicación y el ingenio.'+'Los Géminis son personas inquietas que empiezan nuevos proyectos '
                  +'y retos con mucho entusiasmo, aunque con demasiada frecuencia les falta la constancia necesaria para realizarlos.\n'+
                  'Tienden a pensar en la vida como un juego y buscan la diversión y aventura en todo lo que hacen; tienen el egoísmo '+
                  'y la imaginación propia de la infancia';
        imgSigno = 'imagen/Geminis.png';
    }else if((dia>=23&&mes==11)||(dia<=21&&mes==12)){
        signo = 'Sagitario';
        descSigno = 'Sagitario pertenece a los signos mutables y su elemento es el fuego; es uno de los signos más resplandecientes y positivos del zodíaco.'+
        ' También es versátil, adora las aventuras y buscar nuevos horizontes, ya que tiene una mente abierta a nuevas ideas y experiencias y mantiene una actitud decidida ante la adversidad;'+
        ' además, frecuentemente la suerte le acompaña. Asimismo, son personas a quienes les encanta empezar nuevos proyectos y aprender constantemente cosas nuevas.'+
        ' Son intuitivas, buenas organizadoras, generosas (pero sin malgastar) y muy cuidadosas, lo que las convierte en buenas gestoras de situaciones y proyectos.\n'+
        ' El signo de Sagitario desarrolla unos ideales y principios que son las pautas que constituyen su forma de caminar por el mundo, precisamente por eso, es muy posible que'+
        ' la religión como búsqueda de la verdad sea algo intrínseco de su energía y a lo que tienda a lo largo de su vida.';
        imgSigno = 'imagen/Sagitario.png';
    }else if((dia>=21&&mes==6)||(dia<=23&&mes==7)){
        signo = 'Cáncer';
        descSigno = 'Cáncer es un signo cardinal y comprendido dentro de los signos de agua. De los signos zodiacales, su carácter es el menos claro; puede ser desde retraído, insociable y pelma,'+
        ' hasta deslumbrante, atractivo y admirado por los demás. A veces es demasiado soñador, por eso equivoca el mundo real con la utopía que ha construido en su cabeza: el refugio de las fantasías que adora.\n'+
        ' Los Cáncer tienen una memoria extraordinaria y además poseen un talento innato para las artes y las letras notable. Además, son ambiciosos y pueden cambiar sin dificultad de profesión, de amistades, etc.\n'+
        ' El Cangrejo vive su vida dando dos pasos hacia delante y uno hacia atrás; es curioso pero temeroso, es bravo pero sensible, es voluble pero conservador, ¡vamos!, ¡el mejor exponente del espíritu de la contradicción pura!';
        imgSigno = 'imagen/Cancer.png';
    }else if((dia>=22&&mes==12)||(dia<=20&&mes==1)){
        signo = 'Capricornio';
        descSigno = 'Capricornio es un signo cardinal y de tierra, y uno de los signos del zodíaco más constante, sólido y apacible. También se caracteriza por ser prudente y práctico en todos los asuntos que le conciernen.'+
        ' Sus aspectos más negativos tienden hacia el pesimismo, la fijeza y la melancolía. En general, son personas trabajadoras, responsables y dispuestas a persistir lo que haga falta para conseguir su objetivo; además son muy fiables y '+
        'cuentan con unas elevadas dosis de paciencia y resistencia para avanzar hacia sus objetivos; en este sentido, su capacidad para la gestión resulta asombrosa. Por otra parte, no soportan la falta de honradez ni de disciplina.\n'+
        ' Capricornio atesora conocimiento por medio de la experiencia. Es el sabio que reconoce y valora lo necesario de lo que no lo es, lo que persiste de lo que perece, la realidad y su representación.';
        imgSigno = 'imagen/Capricornio.png';
    }else if((dia>=24&&mes==7)||(dia<=23&&mes==8)){
        signo = 'Leo';
        descSigno = 'El signo de Leo es fijo y de fuego, también el signo más dominante del zodíaco. Creativo y abierto, tiene ambición, valor, fuerza, autonomía y total seguridad en sí mismo: sabe dónde quiere llegar y nada ni nadie podrá evitarlo.'+
        ' En contrapartida, sus puntos negativos pueden ser tantos como las virtudes que tiene: vanidad, egocentrismo, arrogancia, impostura y un genio de mil demonios, entre otros defectos.\n'+
        ' Los Leones son entusiastas, creativos y muchas veces comprensivos con las circunstancias de los demás; adoran los lujos y la aventura; correr riesgos les motiva. También se caracterizan por tener un elevado concepto de todo, especialmente, de sí mismos,'+
        ' por eso huyen de la vulgaridad. Como disfrutan con la emoción de las nuevas experiencias y adoran estar en medio de mucha gente, es muy posible que alternen varios círculos sociales y de amistad, aunque nunca olvidarán a sus verdaderas amistades.';
        imgSigno = 'imagen/Leo.png';
    }else if((dia>=21&&mes==1)||(dia<=19&&mes==2)){
        signo = 'Acuario';
        descSigno = 'Acuario es un signo fijo y de aire, y sin duda, es el signo con mayor capacidad para la invención de toda la rueda zodiacal. Simpático, original y brillante, Acuario también es un signo muy humanitario, al mismo tiempo que independiente e intelectual.'+
        ' Sus puntos negativos se encuentran en su inestabilidad e imprecisión y en su tendencia a llevar la contraria casi por sistema.\n'+
        ' Las personas nacidas Acuario hacen gala de de una sinceridad e idealismo a prueba de bombas. Amantes de todo lo original, tienen montones de ideas nuevas agolpadas en sus mentes, lo que pasa es que cuando van a poner en marcha una de ellas, sale otra,'+
        ' y cuando van a poner esa en marcha, sale otra, y otra son pura creatividad.\n Generalmente Acuario necesita moverse con libertad, sin condicionantes ni ataduras; la posesión no entra dentro de su modo de ver la vida, además, es un signo caracterizado por su desapego.';
        imgSigno = 'imagen/Acuario.png';
    }else if((dia>=24&&mes==8)||(dia<=23&&mes==9)){
        signo = 'Virgo';
        descSigno = 'Virgo es un signo mutable y de tierra; representado por una virgen, es un signo caracterizado por su espíritu crítico, precisión, reserva, paciencia y convencionalismo. También es lógico, metódico y aplicado, le gusta aprender y es capaz de analizar las situaciones más complejas con una claridad pasmosa.\n'+
        ' Como es el perfeccionista del zodíaco, de vez en cuando cae en obsesiones de todo tipo: desde la obsesión por el orden, pasando por la limpieza, hasta llegar incluso a la obsesión por los detalles. Su sentido de la responsabilidad está muy desarrollado, por eso odia la improvisación y la frivolidad, además, para desarrollarse plenamente necesita sentirse seguro.\n'+
        ' Los Virgo son amigos de sus amigos; si necesitas su ayuda, pídesela y hará todo lo que esté en sus manos por ayudarte. Además, su visión seguramente sea la más acertada, así que puedes estar seguro de que te servirá de algo.';
        imgSigno = 'imagen/Virgo.png';
    }else if((dia>=20&&mes==2)||(dia<=20&&mes==3)){
        signo = 'Piscis';
        descSigno = 'Piscis es un signo mutable y de agua, también es el último signo del zodiaco, precisamente por eso, es el más rico y complejo de todos. Sensible ante el sufrimiento de los demás, responde con buena voluntad y ganas de ayudar. No le gusta sentirse preso y ni respeta las convenciones,'+
        ' así, por las buenas, aunque tampoco tiende a luchar contra lo establecido, sencillamente, discurre por otro lado.\n Los Piscis tienden a vivir de una manera emocional más que racional, de forma instintiva e intuitiva más que de forma lógica.'+
        ' Les cuesta mucho transmitir lo que perciben, no saben expresarlo con palabras sino con acciones... Una clave para los Piscis es cómo contactan con su sensibilidad. Además, aunque suele decirse de Piscis que es el signo de la ingenuidad, cuando es su respuesta ante el mundo de las sensaciones que contempla'+
        ' y percibe lo que le hace ser ingenuo o escéptico, dos extremos de la misma cuerda.';
        imgSigno = 'imagen/Piscis.png';
    }
    
    const mostrarSig = document.getElementById('result1');
    mostrarSig.innerHTML = `<div class="resultado-signo">
                        <img src="${imgSigno}" alt="${signo}" class="imagen-signo">
                        <div class="descrip-contain-signo">
                            <div class="nombre-signo">${signo}</div>
                                <div class="descripcion-signo" id="descripcion-signo" onmouseover="agrandarDescripSigno()" onmouseout="reducirDescripSigno()">
                                ${descSigno}</div>
                            </div>
                        </div>`;
}

function agrandarDescripSigno() {
    var descripcionSigno = document.getElementById('descripcion-signo');
    descripcionSigno.style.fontSize = '30px'; 
}

function reducirDescripSigno() {
    var descripcionSigno = document.getElementById('descripcion-signo');
    descripcionSigno.style.fontSize = '16px'; 
}

function reestablecerSigno() {
    document.getElementById('result1').innerHTML = "";
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

function reestablecerEmpleado() {
    document.getElementById('result2').innerHTML = "";
}

