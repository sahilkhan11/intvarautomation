<?php
// leads.php
require_once 'config.php';

header('Content-Type: application/json');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed']);
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $result = $conn->query("SELECT id, form_type, business_name AS businessName, phone_number AS phoneNumber, email, problem_or_message AS problemOrMessage, interested_solution AS interestedSolution, created_at AS timestamp FROM leads ORDER BY created_at DESC");
    
    $leads = [];
    if ($result) {
        while ($row = $result->fetch_assoc()) {
            $leads[] = $row;
        }
    }
    
    echo json_encode(['success' => true, 'leads' => $leads]);
} 
elseif ($method === 'POST') {
    // Admin adding a lead manually
    $data = json_decode(file_get_contents('php://input'), true);
    if (!$data) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON']);
        exit();
    }
    
    $businessName = isset($data['businessName']) ? $data['businessName'] : null;
    $phoneNumber = isset($data['phoneNumber']) ? $data['phoneNumber'] : null;
    $email = isset($data['email']) ? $data['email'] : null;
    $formType = 'admin_added';

    $stmt = $conn->prepare("INSERT INTO leads (form_type, business_name, phone_number, email) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $formType, $businessName, $phoneNumber, $email);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to add lead']);
    }
    $stmt->close();
} 
elseif ($method === 'PUT') {
    $data = json_decode(file_get_contents('php://input'), true);
    if (!$data || !isset($data['id'])) {
        http_response_code(400);
        echo json_encode(['error' => 'ID is required']);
        exit();
    }

    $id = (int)$data['id'];
    $businessName = isset($data['businessName']) ? $data['businessName'] : null;
    $phoneNumber = isset($data['phoneNumber']) ? $data['phoneNumber'] : null;
    
    $stmt = $conn->prepare("UPDATE leads SET business_name = ?, phone_number = ? WHERE id = ?");
    $stmt->bind_param("ssi", $businessName, $phoneNumber, $id);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to update lead']);
    }
    $stmt->close();
}
elseif ($method === 'DELETE') {
    $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
    if (!$id) {
        http_response_code(400);
        echo json_encode(['error' => 'ID is required']);
        exit();
    }

    $stmt = $conn->prepare("DELETE FROM leads WHERE id = ?");
    $stmt->bind_param("i", $id);

    if ($stmt->execute()) {
        echo json_encode(['success' => true]);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Failed to delete lead']);
    }
    $stmt->close();
}
else {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
}

$conn->close();
?>
