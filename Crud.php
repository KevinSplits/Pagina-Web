<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" href="EstilosPhp.css">
    <script src="Verificar.js"></script>
    <title>Tabla de Datos Guardados</title>
</head>
<body>
    <form></form>
    <?php
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            // Incluir archivo de conexión a la base de datos
            include('conexion.php');

            // Conectar a la base de datos
            $con = mysqli_connect($host, $user, $pass, $db) or die("Problemas al conectar al servidor");

            // Consulta para seleccionar datos de usuario y distrito
            $query = "SELECT u.cod_usr, u.nom_usr, u.fec_usr, u.con_usr, u.cor_usr, u.tel_usr, u.gen_usr, u.tip_usr, u.esp_usr, u.niv_usr, d.nom_dis
                      FROM usuario u
                      INNER JOIN distrito d ON u.cod_dis = d.cod_dis";

            $result = mysqli_query($con, $query);

            // Verificar si hay resultados
            if (mysqli_num_rows($result) > 0) {
                echo "<!DOCTYPE html>";
                echo "<html lang='es'>";
                echo "<head>";
                echo "<meta charset='UTF-8'>";
                echo "<meta name='viewport' content='width=device-width, initial-scale=1.0'>";
                echo "<title>Mostrar Usuarios y Distritos</title>";
                echo "<link rel='stylesheet' type='text/css' href='EstilosPhp.css'>";
                echo "</head>";
                echo "<body>";
                echo "<div class='container'>";
                echo "<h1>Usuarios y Distritos Registrados</h1>";
                echo "<table>";
                echo "<thead>";
                echo "<tr>";
                echo "<th>Código</th>";
                echo "<th>Nombre</th>";
                echo "<th>Fecha de Nacimiento</th>";
                echo "<th>Contraseña</th>";
                echo "<th>Correo</th>";
                echo "<th>Teléfono</th>";
                echo "<th>Género</th>";
                echo "<th>Tipo de Usuario</th>";
                echo "<th>Especialidades de área</th>";
                echo "<th>Nivel de Conocimiento</th>";
                echo "<th>Distrito</th>";
                echo "</tr>";
                echo "</thead>";
                echo "<tbody>";
                while ($row = mysqli_fetch_assoc($result)) {
                    echo "<tr>";
                    echo "<td>" . $row['cod_usr'] . "</td>";
                    echo "<td>" . $row['nom_usr'] . "</td>";
                    echo "<td>" . $row['fec_usr'] . "</td>";
                    echo "<td>" . $row['con_usr'] . "</td>";
                    echo "<td>" . $row['cor_usr'] . "</td>";
                    echo "<td>" . $row['tel_usr'] . "</td>";
                    echo "<td>" . $row['gen_usr'] . "</td>";
                    echo "<td>" . $row['tip_usr'] . "</td>";
                    echo "<td>" . $row['esp_usr'] . "</td>";
                    echo "<td>" . $row['niv_usr'] . "</td>";
                    echo "<td>" . $row['nom_dis'] . "</td>";
                    echo "</tr>";
                }
                echo "</tbody>";
                echo "</table>";
                // Botón para volver al formulario anterior
                echo "<a href='Formulario_Ins.html' class='regresar-btn'>Volver al Formulario</a>";
                echo "</div>";
                echo "</body>";
                echo "</html>";
            } else {
                echo "No se encontraron usuarios y distritos.";
            }
        }
    ?>
</body>
</html>