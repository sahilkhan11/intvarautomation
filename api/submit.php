<?php
// submit.php
require_once 'config.php';

header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

// Get JSON data
$data = json_decode(file_get_contents('php://input'), true);
if (!$data) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid JSON payload']);
    exit();
}

// Connect to MySQL
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit();
}

// Extract fields
$formType = isset($data['formType']) ? $data['formType'] : 'unknown';
$businessName = isset($data['businessName']) ? $data['businessName'] : (isset($data['name']) ? $data['name'] : null);
$phoneNumber = isset($data['phoneNumber']) ? $data['phoneNumber'] : null;
$email = isset($data['email']) ? $data['email'] : null;
$problemOrMessage = isset($data['problem']) ? $data['problem'] : (isset($data['message']) ? $data['message'] : null);
$interestedSolution = isset($data['interestedSolution']) ? $data['interestedSolution'] : null;

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO leads (form_type, business_name, phone_number, email, problem_or_message, interested_solution) VALUES (?, ?, ?, ?, ?, ?)");
$stmt->bind_param("ssssss", $formType, $businessName, $phoneNumber, $email, $problemOrMessage, $interestedSolution);

if ($stmt->execute()) {
    echo json_encode(['success' => true, 'message' => 'Lead successfully saved']);
} else {
    http_response_code(500);
    echo json_encode(['error' => 'Failed to save lead']);
}

$stmt->close();
$conn->close();
?>
