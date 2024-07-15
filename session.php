<?php 
session_start();
 $_SESSION['usuario']="tallerweb";
 user($_SESSION['usuario']);
 echo $_SESSION['usuario'];




?>