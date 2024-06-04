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
                // Verificar si se han enviado los números a través del método GET
                if (isset($_GET['num1']) && isset($_GET['num2']) && isset($_GET['num3'])) {
                    // Obtener los números de la URL
                    $num1 = intval($_GET['num1']);
                    $num2 = intval($_GET['num2']);
                    $num3 = intval($_GET['num3']);

                    /*BLOQUE SOLO PARA "MCD"*/

                    // Calcular el MCD de los primeros dos números
                    $a = $num1;
                    $b = $num2;
                    while ($b != 0) {
                        $temp = $b;
                        $b = $a % $b;
                        $a = $temp;
                    }
                    $mcd_ini = $a;

                    // Calcular el MCD de los tres números
                    $a = $mcd_ini;
                    $b = $num3;
                    while ($b != 0) {
                        $temp = $b;
                        $b = $a % $b;
                        $a = $temp;
                    }
                    $mcd = $a;

                    /*BLOQUE SOLO PARA "MCM"*/

                    // Calcular el MCM de los primeros dos números
                    $mcm_ini = ($num1 * $num2) / $mcd_ini;

                    // Calcular el MCM de los tres números
                    $a = $mcm_ini;
                    $b = $num3;
                    //$mcd_temp = $a;
                    while ($b != 0) {
                        $temp = $b;
                        $b = $a % $b;
                        $a = $temp;
                    }
                    $mcd_final = $a;

                    $mcm = ($mcm_ini * $num3) / $mcd_final;

                    // Mostrar los resultados
                    echo "<h1>Resultados</h1>";
                    echo "<p>Números escogidos: $num1, $num2, $num3</p>";
                    echo "<p>MCM: $mcm</p>";
                    echo "<p>MCD: $mcd</p>";
                } else {
                    // Si los números no se han enviado a través de la URL, mostrar un mensaje de error
                    echo "<h1>Error</h1>";
                    echo "<p>Los números no son válidos.</p>";
                }
            ?>
        </div>
        <div style="text-align: center;">
        <a href="EjerciciosPhp.html" class="button" style="text-align: center;">Regresar</a>
        </div>
    </div>
</body>
</html>        