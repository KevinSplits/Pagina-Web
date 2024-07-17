<?php

// index.php

// Include Configuration File
include('config.php');

$login_button = '';

if (isset($_GET["code"])) {

    $token = $google_client->fetchAccessTokenWithAuthCode($_GET["code"]);

    if (!isset($token['error'])) {

        $google_client->setAccessToken($token['access_token']);
        $_SESSION['access_token'] = $token['access_token'];

        $google_service = new Google_Service_Oauth2($google_client);
        $data = $google_service->userinfo->get();

        if (!empty($data['given_name'])) {
            $_SESSION['user_first_name'] = $data['given_name'];
        }

        if (!empty($data['family_name'])) {
            $_SESSION['user_last_name'] = $data['family_name'];
        }

        if (!empty($data['email'])) {
            $_SESSION['user_email_address'] = $data['email'];
        }

        if (!empty($data['gender'])) {
            $_SESSION['user_gender'] = $data['gender'];
        }

        if (!empty($data['picture'])) {
            $_SESSION['user_image'] = $data['picture'];
        }
    }
}

if (!isset($_SESSION['access_token'])) {
    $login_button = '<a class="btn btn-primary btn-lg" href="' . $google_client->createAuthUrl() . '">Login With Google</a>';
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inicio de sesión</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js"></script>
    <style>
        body {
            background: linear-gradient(to right, #00b4db, #0083b0);
            color: #fff;
            font-family: Arial, sans-serif;
        }
        .container {
            margin-top: 100px;
            background: rgba(0, 0, 0, 0.5);
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        h2 {
            margin-bottom: 30px;
            font-weight: bold;
        }
        .panel {
            background: #fff;
            color: #000;
            border-radius: 10px;
            padding: 20px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        }
        .panel-heading {
            font-size: 1.5em;
            margin-bottom: 20px;
        }
        .btn-primary {
            background-color: #007bff;
            border-color: #007bff;
        }
        .btn-primary:hover {
            background-color: #0056b3;
            border-color: #004085;
        }
        .img-responsive {
            max-width: 150px;
            border-radius: 50%;
        }
        a {
            color: #007bff;
        }
        a:hover {
            color: #0056b3;
        }
    </style>
</head>
<body>
    <div class="container">
        <h2 class="text-center">Inicio de Sesión</h2>
        <div class="panel">
            <?php
            if ($login_button == '') {
                echo '<div class="panel-heading">Bienvenido, ' . $_SESSION['user_first_name'] . '!</div>';
                echo '<div class="panel-body">';
                echo '<img src="' . $_SESSION["user_image"] . '" class="img-responsive img-thumbnail" />';
                echo '<h3><b>Email :</b> ' . $_SESSION['user_email_address'] . '</h3>';
                echo '<h3><a href="logout.php" class="btn btn-danger">Salir</a></h3>';
                echo '<h3><a href="FrameMenu.html" class="btn btn-success">Ingresar</a></h3>';
                echo '</div>';
            } else {
                echo '<div class="text-center">' . $login_button . '</div>';
                echo "<br>";
                echo '<center><a class="btn btn-primary btn-lg" href="login.php">Ir a Login</a></center>';
                echo "<br>";
                echo '<img src="imagen/Aplicaciones.jpeg"';

            }
            ?>
        </div>
    </div>
</body>
</html>
