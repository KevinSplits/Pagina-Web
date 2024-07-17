<?php

//start session on web page
session_start();

//config.php

//Include Google Client Library for PHP autoload file
require_once 'vendor/autoload.php';

//Make object of Google API Client for call Google API
$google_client = new Google_Client();

//Set the OAuth 2.0 Client ID
$google_client->setClientId('790497315262-8v1n0s329ntqvqt882tktp9lp7vud6kc.apps.googleusercontent.com');

//Set the OAuth 2.0 Client Secret key
$google_client->setClientSecret('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');

//Set the OAuth 2.0 Redirect URI
$google_client->setRedirectUri('http://localhost/pagina-web/index.php');

// to get the email and profile 
$google_client->addScope('email');

$google_client->addScope('profile');

?> 