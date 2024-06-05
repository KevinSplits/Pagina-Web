<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Reclamo Recibido - Minería de Datos</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f8f9fa;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: auto;
            background-color: #fff;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 8px;
        }
        h1 {
            text-align: center;
            color: #343a40;
        }
        .reclamo {
            border: 1px solid #ccc;
            padding: 15px;
            margin-top: 20px;
            border-radius: 4px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Reclamo Recibido</h1>
        <?php
        if ($_SERVER["REQUEST_METHOD"] == "POST") {
            // Obtener los datos del formulario
            $fecha = htmlspecialchars($_POST['fecha']);
            $nombre = htmlspecialchars($_POST['nombre']);
            $domicilio = htmlspecialchars($_POST['domicilio']);
            $dni = htmlspecialchars($_POST['dni']);
            $telefono = htmlspecialchars($_POST['telefono']);
            $email = htmlspecialchars($_POST['email']);
            $padre = htmlspecialchars($_POST['padre']);
            $detalle = htmlspecialchars($_POST['detalle']);
            $acciones = htmlspecialchars($_POST['acciones']);
            $firma = htmlspecialchars($_POST['firma']);

            echo "<div class='reclamo'>";
            echo "<p><strong>Fecha:</strong> $fecha</p>";
            echo "<p><strong>Nombre:</strong> $nombre</p>";
            echo "<p><strong>Domicilio:</strong> $domicilio</p>";
            echo "<p><strong>DNI/CE:</strong> $dni</p>";
            echo "<p><strong>Teléfono:</strong> $telefono</p>";
            echo "<p><strong>Email:</strong> $email</p>";
            echo "<p><strong>Nombre del padre:</strong> $padre</p>";
            echo "<p><strong>Detalle del reclamo:</strong> $detalle</p>";
            echo "<p><strong>Recomendaciones:</strong> $acciones</p>";
            echo "<p><strong>Código:</strong> $firma</p>";
            echo "</div>";
            echo "<a href='javascript:history.back()' class='regresar-btn'>Regresar</a>";
            } else {
            echo "<p>No se recibieron datos del formulario.</p>";
            }
            ?>

</div>

</body>
</html>