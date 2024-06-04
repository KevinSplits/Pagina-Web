<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>
    <link rel="stylesheet" type="text/css" href="EstilosPhp.css">
    <script src="Verificar.js"></script>
</head>
<body>
    <div class="container">
        <h1 style="text-align: center;">Resultado de Cuota Mensual</h1>
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
        <div style="text-align: center;">
        <a href="EjerciciosPhp.html" class="button" style="text-align: center;">Regresar</a>
        </div>
</body>
</html>
