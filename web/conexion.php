<?php
include('conexion.php');
if(isset($_POST['nombre']) && !empty($_POST['nombre']) && 
    isset($_POST['pass']) && !empty($_POST['pass']))
{
    $con=mysqli_connect($host,$user,$pass,$db) or die("
    problemas al conectar");
    mysqli_query($con,"INSERT INTO codigo(nombre,pass) VALUES('$_POST[nombre]','$_POST[pass]')");
    echo "datos insertados";

}else {
    echo "Problemas al insertar";
}   

?>