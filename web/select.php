<?php
	include ('conexion.php');

	$con = mysqli_connect($host,$user,$pass,$db) or die ("Problemas al conectar al server");
	mysqli_select_db($con,$db) or die ("Problemas al conectar a la base de datos");

	$registro = mysqli_query($con,"SELECT * FROM codigo where nombre='$_POST[nombre]' ") or die ("Problemas en consulta: ".mysqli_error());

	if ($reg=mysqli_fetch_array($registro)) {
		echo $reg['nombre']."<br>";
		echo $reg['pass']."<br>";
	}else{
		echo "datos no encontrados";
	}
?>