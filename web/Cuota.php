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
        <h1>Tabla de Amortización</h1>
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

            echo "<table>";
            echo "<tr><th>Mes</th><th>Cuota mensual</th><th>Pago del interés</th><th>Pago del capital</th><th>Deuda</th></tr>";

            $deuda = $montoCompra;
            for ($mes = 1; $mes <= $meses; $mes++) {
                $pagoInteres = $deuda * $i;
                $pagoCapital = $cuota - $pagoInteres;
                $deuda -= $pagoCapital;

                echo "<tr>";
                echo "<td>$mes</td>";
                echo "<td>" . number_format($cuota, 2) . "</td>";
                echo "<td>" . number_format($pagoInteres, 2) . "</td>";
                echo "<td>" . number_format($pagoCapital, 2) . "</td>";
                echo "<td>" . number_format(max($deuda, 0), 2) . "</td>";
                echo "</tr>";
            }

            echo "</table>";
        }
        ?>
        <a href="EjerciciosPhp.html" class="button">Regresar</a>
    </div>
</body>
</html>
