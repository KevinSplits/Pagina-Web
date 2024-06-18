<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="EstilosPhp.css">
    <title>Resultado del Borrado</title>
</head>
<body>
    <div class="container">
        <?php
	        include('conexion.php');

	        if (isset($_POST['nombre']) && !empty($_POST['nombre'])) {
	            $nombre = $_POST['nombre'];

	            $con = mysqli_connect($host, $user, $pass, $db) or die("Problemas al conectar");

	            $registro = mysqli_query($con, "SELECT cod_usr FROM usuario WHERE nom_usr = '$nombre'") or die("Problemas en consulta: " . mysqli_error($con));

	            if ($re = mysqli_fetch_array($registro)) {
	                $cod_usr = $re['cod_usr'];
	                mysqli_query($con, "DELETE FROM usuario WHERE cod_usr = '$cod_usr'") or die("Problemas en consulta: " . mysqli_error($con));

	                // Mostrar mensaje de éxito
	                echo "<h1>Datos eliminados correctamente</h1>";
	            } else {
	                // Mostrar mensaje de error
	                echo "<h1>Datos no encontrados o error al eliminar</h1>";
	            }

	            mysqli_close($con);
	        } else {
	            // Mostrar mensaje de error
	            echo "<h1>Error al eliminar datos. Por favor, proporciona el nombre de usuario.</h1>";
	        }
        ?>
        <a href="javascript:history.back()" class="regresar-btn">Regresar al Formulario</a>
    </div>
</body>
</html>