<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Ensure these variables are set in your Hostinger cPanel / .htaccess or replace them with hardcoded values for production
$host = getenv('DB_HOST') !== false ? getenv('DB_HOST') : 'localhost';
$user = getenv('DB_USER') !== false ? getenv('DB_USER') : 'u283904008_intvar';
$password = getenv('DB_PASSWORD') !== false ? getenv('DB_PASSWORD') : 'S@hil@3140';
$database = getenv('DB_NAME') !== false ? getenv('DB_NAME') : 'u283904008_intvar';

$conn = new mysqli($host, $user, $password, $database);

if ($conn->connect_error) {
    http_response_code(500);
    die(json_encode(["error" => "Connection failed: " . $conn->connect_error]));
}
?>
