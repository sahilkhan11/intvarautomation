<?php
require_once 'config.php';

// Enable error reporting for debugging
ini_set('display_errors', 1);
error_reporting(E_ALL);

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    $superstarOnly = isset($_GET['superstar']) && $_GET['superstar'] === 'true';
    $query = "SELECT * FROM portfolio_projects";
    if ($superstarOnly) {
        $query .= " WHERE is_superstar = 1";
    }
    $query .= " ORDER BY created_at DESC";

    $result = $conn->query($query);
    
    if (!$result) {
        http_response_code(500);
        echo json_encode(["error" => "Database query failed: " . $conn->error]);
        exit;
    }

    $projects = [];

    if ($result) {
        while ($row = $result->fetch_assoc()) {
            // Parse JSON categories safely
            $row['categories'] = !empty($row['categories']) ? json_decode($row['categories']) : [];
            $row['is_superstar'] = (bool)$row['is_superstar'];
            $projects[] = $row;
        }
    }

    echo json_encode(["projects" => $projects]);
} elseif ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $name = $input['name'] ?? null;
    $description = $input['description'] ?? null;
    $image = $input['image'] ?? null;
    $industry = $input['industry'] ?? null;
    $link = $input['link'] ?? null;
    $categories = isset($input['categories']) ? json_encode($input['categories']) : '[]';

    if (!$name) {
        http_response_code(400);
        die(json_encode(["error" => "Name is required"]));
    }

    $project_id = strtolower(preg_replace('/[^a-z0-9]+/', '-', $name));

    $stmt = $conn->prepare("INSERT INTO portfolio_projects (project_id, name, description, image, categories, industry, link, is_superstar) VALUES (?, ?, ?, ?, ?, ?, ?, 0)");
    
    if (!$stmt) {
        http_response_code(500);
        echo json_encode(["error" => "Failed to prepare statement: " . $conn->error]);
        exit;
    }

    $stmt->bind_param("sssssss", $project_id, $name, $description, $image, $categories, $industry, $link);
    
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "id" => $stmt->insert_id]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to add project: " . $stmt->error]);
    }
    $stmt->close();
} elseif ($method === 'PUT') {
    $input = json_decode(file_get_contents('php://input'), true);
    $id = $input['id'] ?? null;

    if (!$id) {
        http_response_code(400);
        die(json_encode(["error" => "ID is required"]));
    }

    if (isset($input['is_superstar']) && !isset($input['name'])) {
        $is_superstar = $input['is_superstar'] ? 1 : 0;
        $stmt = $conn->prepare("UPDATE portfolio_projects SET is_superstar = ? WHERE id = ?");
        $stmt->bind_param("ii", $is_superstar, $id);
        $stmt->execute();
        $stmt->close();
    } else {
        $name = $input['name'] ?? null;
        $description = $input['description'] ?? null;
        $image = $input['image'] ?? null;
        $industry = $input['industry'] ?? null;
        $link = $input['link'] ?? null;
        $categories = isset($input['categories']) ? json_encode($input['categories']) : '[]';

        $stmt = $conn->prepare("UPDATE portfolio_projects SET name = ?, description = ?, image = ?, categories = ?, industry = ?, link = ? WHERE id = ?");
        $stmt->bind_param("ssssssi", $name, $description, $image, $categories, $industry, $link, $id);
        $stmt->execute();
        $stmt->close();
    }

    echo json_encode(["success" => true]);
} elseif ($method === 'DELETE') {
    $id = $_GET['id'] ?? null;
    if (!$id) {
        http_response_code(400);
        die(json_encode(["error" => "ID is required"]));
    }

    $stmt = $conn->prepare("DELETE FROM portfolio_projects WHERE id = ?");
    $stmt->bind_param("i", $id);
    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Failed to delete project"]);
    }
    $stmt->close();
}
?>
