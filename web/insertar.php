<?php
include('conexion.php');

if (
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
            echo "Error al insertar el nuevo distrito: " . mysqli_error($con);
            exit;
        }
    }

    // Insertar usuario con el ID del distrito obtenido
    $query_insert_usuario = "INSERT INTO usuario (nom_usr, fec_usr, con_usr, cor_usr, tel_usr, gen_usr, tip_usr, esp_usr, niv_usr, cod_dis) 
                             VALUES ('$nombre', '$fecha_nacimiento', '$password', '$correo', '$telefono', '$genero', '$tipo_usuario', '$especialidades', '$conocimiento', '$cod_dis')";

    if (mysqli_query($con, $query_insert_usuario)) {
        echo "Datos insertados correctamente";
    } else {
        echo "Error al insertar usuario: " . mysqli_error($con);
    }

    mysqli_close($con);
} else {
    echo "Faltan campos por llenar en el formulario";
}
?>