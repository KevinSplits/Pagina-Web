<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resultado de Cuota Mensual</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f0f0f0;
        }
        .container {
            max-width: 600px;
            margin: 50px auto;
            background-color: #fff;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            text-align: center;
        }
        .result {
            text-align: center;
            font-size: 24px;
            margin-bottom: 20px;
        }
        .button {
            background-color: #4CAF50;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
            border-radius: 5px;
            text-decoration: none;
            display: inline-block;
            margin-top: 20px;
        }
        .button:hover {
            background-color: #45a049;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Resultado de Cuota Mensual</h1>
        <div class="result">
            <?php
            if ($_SERVER["REQUEST_METHOD"] == "POST") {
                $montoCompra = $_POST["montoCompra"];
                $tipoTarjeta = $_POST["tipoTarjeta"];
                $meses = $_POST["meses"];
                $interes = 0;

                switch ($tipoTarjeta) {
                    case "visa":
                        $interes = 3;
                        break;
                    case "mastercard":
                        $interes = 3.5;
                        break;
                    case "amex":
                        $interes = 4;
                        break;
                    default:
                        $interes = 0;
                }

                $i = $interes / 100;
                $cuota = $montoCompra * $i / (1 - pow((1 + $i), -$meses));

                echo "La cuota mensual es: $" . number_format($cuota, 2);
            }
            ?>
        </div>
        <a href="EjerciciosPhp.html" class="button">Regresar</a>
    </div>
</body>
</html>
