<?php
	include ('conexion.php');

	$con = mysqli_connect($host,$user,$pass,$db) or die ("Problemas al conectar");
	$registro = mysqli_query($con,"SELECT ID FROM codigo where nombre='$_POST[nombre]' ") or die ("Problemas en consulta: ".mysqli_error());

	if ($re=mysqli_fetch_array($registro)) {
		mysqli_query($con,"DELETE FROM codigo where nombre='$_POST[nombre]'") or die ("Problemas en consulta: ".mysqli_error());
		echo "datos eliminados";
	}else{
		echo "Problemas al insertar datos";
	}
?>