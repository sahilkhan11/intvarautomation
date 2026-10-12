<?php
// config.php
$host = getenv('DB_HOST') !== false ? getenv('DB_HOST') : 'localhost';
$user = getenv('DB_USER') !== false ? getenv('DB_USER') : 'u283904008_intvar';
$password = getenv('DB_PASSWORD') !== false ? getenv('DB_PASSWORD') : 'S@hil@3140';
$database = getenv('DB_NAME') !== false ? getenv('DB_NAME') : 'u283904008_intvar';

define('DB_HOST', $host);
define('DB_USER', $user);
define('DB_PASS', $password);
define('DB_NAME', $database);

// Optional: CORS configuration if your PHP is hosted on a different subdomain
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Accept, Authorization");
?>
