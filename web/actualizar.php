<?php
include('conexion.php');

if (
    isset($_POST['cod_usuario']) && !empty($_POST['cod_usuario']) &&
    isset($_POST['nombre']) && !empty($_POST['nombre']) &&
    isset($_POST['nacimiento']) && !empty($_POST['nacimiento']) &&
    isset($_POST['password']) && !empty($_POST['password']) &&
    isset($_POST['correo']) && !empty($_POST['correo']) &&
    isset($_POST['telefono']) && !empty($_POST['telefono']) &&
    isset($_POST['genero']) && !empty($_POST['genero']) &&
    isset($_POST['tipousuario']) && !empty($_POST['tipousuario']) &&
    isset($_POST['especialidad']) && !empty($_POST['especialidad']) &&
    isset($_POST['conocimiento']) && !empty($_POST['conocimiento']) &&
    isset($_POST['distrito']) && !empty($_POST['distrito'])
) {

    $con = mysqli_connect($host, $user, $pass, $db) or die("Problemas al conectar");

    $cod_usuario = mysqli_real_escape_string($con, $_POST['cod_usuario']);
    $nombre = mysqli_real_escape_string($con, $_POST['nombre']);
    $fecha_nacimiento = mysqli_real_escape_string($con, $_POST['nacimiento']);
    $password = mysqli_real_escape_string($con, $_POST['password']);
    $correo = mysqli_real_escape_string($con, $_POST['correo']);
    $telefono = mysqli_real_escape_string($con, $_POST['telefono']);
    $genero = mysqli_real_escape_string($con, $_POST['genero']);
    $tipo_usuario = mysqli_real_escape_string($con, $_POST['tipousuario']);
    $especialidades = implode(',', $_POST['especialidad']); // Convertir array a string
    $conocimiento = mysqli_real_escape_string($con, $_POST['conocimiento']);
    $distrito = mysqli_real_escape_string($con, $_POST['distrito']);

    // Verificar si el distrito existe en la tabla
    $query_check_distrito = "SELECT cod_dis FROM distrito WHERE nom_dis = '$distrito'";
    $result_check_distrito = mysqli_query($con, $query_check_distrito);

    if (mysqli_num_rows($result_check_distrito) > 0) {
        // El distrito existe, obtener su ID
        $row = mysqli_fetch_assoc($result_check_distrito);
        $cod_dis = $row['cod_dis'];
    } else {
        // El distrito no existe, insertarlo y obtener su nuevo ID
        $query_insert_distrito = "INSERT INTO distrito (nom_dis) VALUES ('$distrito')";
        if (mysqli_query($con, $query_insert_distrito)) {
            $cod_dis = mysqli_insert_id($con); // Obtener el ID del nuevo distrito insertado
        } else {
            echo "<div class='container'>";
            echo "<h1>Error al insertar el nuevo distrito</h1>";
            echo "<p>" . mysqli_error($con) . "</p>";
            echo "<a href='javascript:history.back()' class='regresar-btn'>Regresar al Formulario</a>";
            echo "</div>";
            exit;
        }
    }

    // Actualizar usuario con el ID del distrito obtenido
    $query_update_usuario = "UPDATE usuario SET 
                             nom_usr = '$nombre',
                             fec_usr = '$fecha_nacimiento',
                             con_usr = '$password',
                             cor_usr = '$correo',
                             tel_usr = '$telefono',
                             gen_usr = '$genero',
                             tip_usr = '$tipo_usuario',
                             esp_usr = '$especialidades',
                             niv_usr = '$conocimiento',
                             cod_dis = '$cod_dis'
                             WHERE cod_usr = $cod_usuario";

    if (mysqli_query($con, $query_update_usuario)) {
        echo "<div class='container'>";
        echo "<h1>Datos actualizados correctamente</h1>";
        echo "<a href='javascript:history.back()' class='regresar-btn'>Regresar al Formulario</a>";
        echo "</div>";
    } else {
        echo "<div class='container'>";
        echo "<h1>Error al actualizar usuario</h1>";
        echo "<p>" . mysqli_error($con) . "</p>";
        echo "<a href='javascript:history.back()' class='regresar-btn'>Regresar al Formulario</a>";
        echo "</div>";
    }

    mysqli_close($con);
} else {
    echo "<div class='container'>";
    echo "<h1>Faltan campos por llenar en el formulario</h1>";
    echo "<a href='javascript:history.back()' class='regresar-btn'>Regresar al Formulario</a>";
    echo "</div>";
}
?>
