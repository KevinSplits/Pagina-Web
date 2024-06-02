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

    echo number_format($cuota, 2);
}
?>