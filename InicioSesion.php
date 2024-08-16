<?php session_start(); ?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Inicio de Sesión</title>
    <link rel="stylesheet" type="text/css" href="login.css">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>
</head>
<body>
    <div class="login-container">
        <a href="logout.php">Cerrar Sesión</a><br>
        <?php if (isset($_SESSION['usuario'])) {
            echo '<p>Bienvenido, ' . htmlspecialchars($_SESSION['usuario']) . '!</p>';
        } ?>
        <form action="" method="POST">
            <img src="imagen/logo.png" alt="Logo">
            <label for="user">Usuario:</label>
            <input type="text" id="user" name="user" required><br>
            <label for="pass">Contraseña:</label>
            <input type="password" id="pass" name="pass" required><br>
            <div class="g-recaptcha" data-sitekey="6LdrERAqAAAAAFrnQTXXdkzzojiHIJuEZTDkHzMi"></div>
            <input type="submit" name="enviar" value="Iniciar sesión">
        </form>
    </div>
    <?php
    if (isset($_POST['enviar'])) {
        $user = $_POST['user'];
        $pass = $_POST['pass'];
        $recaptcha_secret = '6LdrERAqAAAAAK_UbytTsKytG8_MVlh__WdEQa4C';  // Reemplaza con tu clave secreta de reCAPTCHA
        $recaptcha_response = $_POST['g-recaptcha-response'];
        
        // Verificar reCAPTCHA usando cURL
        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
            'secret' => $recaptcha_secret,
            'response' => $recaptcha_response
        ]));
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        $response_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);  // Obtener el código de estado HTTP
        curl_close($ch);

        if ($response_code != 200) {
            echo '<script>alert("Hubo un error en la verificación del CAPTCHA. Código de estado: ' . $response_code . '");</script>';
        }

        $response_keys = json_decode($response, true);
        var_dump($response_keys);  // Verifica la respuesta del CAPTCHA
        
        if ($response_keys['success']) {
            // CAPTCHA validado
            if ($user == "web" && $pass == "123") {
                $_SESSION['session'] = true;
                $_SESSION['usuario'] = $user;
                echo '<script>alert("Has iniciado la sesión."); window.location.href = "InicioSesion.php";</script>';
            } else {
                echo '<script>alert("Error de usuario o clave incorrecta.");</script>';
            }
        } else {
            // CAPTCHA no validado
            echo '<script>alert("Por favor, completa el CAPTCHA.");</script>';
        }
    }
    ?>
</body>
</html>
