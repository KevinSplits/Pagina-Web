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
                if (isset($_POST['cantidad'])) {
                    $cantidad = intval($_POST['cantidad']);
                    
                    if ($cantidad > 0) {
                        echo "<p>Se han generado estos $cantidad números aleatorios:</p>";
                        echo "<table style='text-align: center;'>"; // Abrir adecuadamente la tabla

                        echo "<tr>";
                        echo "<th style='text-align: center;'></th>";
                        echo "<th style='text-align: center;'>Número</th>";
                        echo "<th style='text-align: center;'>Suma de dígitos</th>";
                        echo "<th style='text-align: center;'>Descripción</th>";
                        echo "</tr>";

                        for ($i = 0; $i < $cantidad; $i++) {
                            $numero = rand(300, 2000); // Genera un número aleatorio entre 300 y 2000

                            $sumaDigitos = 0;
                            $temp = $numero;

                            while ($temp > 0) {
                                $sumaDigitos += $temp % 10; // Añadimos el último dígito de temp a sumaDigitos
                                $temp = intval($temp / 10); // Eliminamos el último dígito de temp
                            }

                            // Para la descripción de la suma de digitos de dichos números: Si es par o impar
                            if ($sumaDigitos % 2 == 0) {
                                $descripcion = 'Par';
                            } else {
                                $descripcion = 'Impar';
                            }

                            // Mostramos el resultado en una fila de la tabla
                            echo "<tr>";
                            echo "<td style='text-align: center;'>".($i + 1)."</td>";
                            echo "<td style='text-align: center;'>$numero</td>";
                            echo "<td style='text-align: center;'>$sumaDigitos</td>";
                            echo "<td style='text-align: center;'>$descripcion</td>";
                            echo "</tr>";
                        }
                        echo "</table>"; // Cerrar adecuadamente la tabla
                    } else {
                        echo "<p>Petición no válida.</p>";
                    }
                }
            ?>
        </div>
        <div style="text-align: center;">
        <a href="EjerciciosPhp.html" class="button" style="text-align: center;">Regresar</a>
        </div>
    </div>
</body>
</html>            