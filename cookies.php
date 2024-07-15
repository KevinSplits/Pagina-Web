<?php 
$nombre ="session";
$valor = "yes";
$expire= time()+(60*60*24*365);
$dir = "cookies";
$dominio= "localhost";
$https=false;
$http=false;

setcookie($nombre,$valor,$expire,$dir,$dominio,$https,$http);
echo $_COOKIE['session'];
 ?>