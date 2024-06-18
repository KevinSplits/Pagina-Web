<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="EstilosPhp.css">
    <title>Búsqueda del usuario</title>
</head>
<body>
    <div class="container">
        <?php
        include('conexion.php');

        if (isset($_POST['nombre']) && !empty($_POST['nombre'])) {
            $nombre = $_POST['nombre'];

            $con = mysqli_connect($host, $user, $pass, $db) or die("Problemas al conectar");

            $registro = mysqli_query($con, "SELECT u.cod_usr, u.nom_usr, u.fec_usr, u.con_usr, u.cor_usr, u.tel_usr, u.gen_usr, u.tip_usr, u.esp_usr, u.niv_usr, d.nom_dis
                      FROM usuario u
                      INNER JOIN distrito d ON u.cod_dis = d.cod_dis WHERE nom_usr = '$nombre'") or die("Problemas en consulta: " . mysqli_error($con));

            if ($re = mysqli_fetch_array($registro)) {
                echo "<h1>Información del Usuario</h1>";
                echo "<p>Nombre: " . $re['nom_usr'] . "</p>";
                echo "<p>Fecha de Nacimiento: " . $re['fec_usr'] . "</p>";
                echo "<p>Correo: " . $re['cor_usr'] . "</p>";
                echo "<p>Teléfono: " . $re['tel_usr'] . "</p>";
                echo "<p>Género: " . $re['gen_usr'] . "</p>";
                echo "<p>Tipo de Usuario: " . $re['tip_usr'] . "</p>";
                echo "<p>Especialidades: " . $re['esp_usr'] . "</p>";
                echo "<p>Nivel de Conocimiento: " . $re['niv_usr'] . "</p>";
                echo "<p>Distrito: " . $re['nom_dis'] . "</p>";
            } else {
                echo "<h1>Usuario no encontrado</h1>";
            }

            //mysqli_close($con);
        } else {
            echo "<h1>Error al buscar datos. Por favor, proporciona el nombre de usuario.</h1>";
        }
        ?>
        <a href="javascript:history.back()" class="regresar-btn">Regresar al Formulario</a>
    </div>
</body>
</html>
