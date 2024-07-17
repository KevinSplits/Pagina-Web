	 
	 <?php

	 include('config.php');
    echo '<center><div class="panel-heading">Bienvenido Usuario</div><div class="panel-body">';
    echo '<img src="'.$_SESSION["user_image"].'" class="img-responsive img-circle img-thumbnail" />';
    echo '<h3><b>Email :</b> '.$_SESSION['user_email_address'].'</h3>';
    echo '<h3><a href="#" onclick="logout()">Cerrar Sesión</a></h3></div></center>';

   ?>
   <script>
function logout() {
    // Hacer una solicitud para destruir la sesión
    fetch('logout.php')
    .then(response => {
        if (response.ok) {
            // Redirigir la página principal a index.php
            window.parent.location.href = 'index.php';
        } else {
            console.error('Error al cerrar sesión');
        }
    })
    .catch(error => console.error('Error de red:', error));
}
</script>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title></title>
	<link rel="stylesheet" type="text/css" href="Estilos.css">
    <style type="text/css"></style>
</head>
<body id="lista">
	<ul>
		<h2><strong>¿Qué te gustaría ver...?</strong></h2>

		<li><button class="boton1"><a href="Noticias.html" class="vinculo" target="right">Noticias y tendencias</a></button></li>
		<br>

		<li><button class="boton1"><a href="Inicio.html" class="vinculo" target="right">Inicio</a></button></li>
		<br>

		<li><button class="boton1"><a href="Tabla.html" class="vinculo" target="right">Características</a></li>
		<br>

		<li><button class="boton1"><a href="Video.html" class="vinculo" target="right">Videos</a></button></li>
		<br>

		<li><button class="boton1"><a href="Formulario.html" class="vinculo"target="right">Formulario de suscripción</button></a></li>
		<br>

		<li><button class="boton1"><a href="Ejercicios.html" class="vinculo"target="right">Entregable 3</button></a></li><br>

		<li><button class="boton1"><a href="EjerciciosPhp.html" class="vinculo"target="right">Entregable 4</button></a></li><br>

		<li><button class="boton1"><a href="Formulario_Ins.html" class="vinculo"target="right">Entregable 5</button></a></li><br>

		<li><button class="boton1"><a href="LibroReclamos.html" class="vinculo"target="right">Libro de reclamaciones</button></a></li><br>

		<li><button class="boton1"><a href="InicioSesion.php" class="vinculo" target="right">Inicio Sesión</button></a></li><br>

		<li><button class="boton1"><a href="Formulario_Contacto.html" class="vinculo" target="right">Formulario de Contacto</button></a></li><br>

	</ul>
	
</body>
</html>