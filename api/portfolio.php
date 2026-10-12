<?php
require_once 'config.php';

// Enable error reporting for debugging (remove in production)
ini_set('display_errors', 1);
error_reporting(E_ALL);

header('Content-Type: application/json');

// Create database connection
$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed: " . $conn->connect_error]);
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        $superstar_only = isset($_GET['superstar']) && $_GET['superstar'] === 'true';
        
        $sql = "SELECT * FROM portfolio_projects";
        if ($superstar_only) {
            $sql .= " WHERE is_superstar = TRUE";
        }
        $sql .= " ORDER BY created_at DESC";
        
        $result = $conn->query($sql);
        
        $projects = [];
        if ($result && $result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                // Decode JSON categories back to array
                if (isset($row['categories']) && !empty($row['categories'])) {
                    $row['categories'] = json_decode($row['categories']);
                } else {
                    $row['categories'] = [];
                }
                
                // Convert to boolean
                $row['is_superstar'] = (bool)$row['is_superstar'];
                
                $projects[] = $row;
            }
        }
        echo json_encode(["projects" => $projects]);
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        
        if (!isset($data['name']) || empty($data['name'])) {
            http_response_code(400);
            echo json_encode(["error" => "Name is required"]);
            break;
        }

        // Generate a project_id from name if not provided
        $project_id = isset($data['project_id']) && !empty($data['project_id']) 
            ? $data['project_id'] 
            : strtolower(trim(preg_replace('/[^A-Za-z0-9-]+/', '-', $data['name'])));
        
        $name = $conn->real_escape_string($data['name']);
        $description = isset($data['description']) ? $conn->real_escape_string($data['description']) : '';
        $image = isset($data['image']) ? $conn->real_escape_string($data['image']) : '';
        $industry = isset($data['industry']) ? $conn->real_escape_string($data['industry']) : '';
        $link = isset($data['link']) ? $conn->real_escape_string($data['link']) : '';
        
        $categories = isset($data['categories']) && is_array($data['categories']) 
            ? $conn->real_escape_string(json_encode($data['categories'])) 
            : '[]';
            
        $is_superstar = isset($data['is_superstar']) && $data['is_superstar'] ? 1 : 0;

        $sql = "INSERT INTO portfolio_projects (project_id, name, description, image, categories, industry, link, is_superstar) 
                VALUES ('$project_id', '$name', '$description', '$image', '$categories', '$industry', '$link', $is_superstar)";

        if ($conn->query($sql) === TRUE) {
            http_response_code(201);
            echo json_encode(["message" => "Project added successfully", "id" => $conn->insert_id]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error adding project: " . $conn->error]);
        }
        break;

    case 'PUT':
        $data = json_decode(file_get_contents("php://input"), true);
        
        if (!isset($data['id'])) {
            http_response_code(400);
            echo json_encode(["error" => "ID is required for update"]);
            break;
        }

        $id = (int)$data['id'];
        
        // Build the update query dynamically based on provided fields
        $updates = [];
        
        if (isset($data['name'])) $updates[] = "name = '" . $conn->real_escape_string($data['name']) . "'";
        if (isset($data['description'])) $updates[] = "description = '" . $conn->real_escape_string($data['description']) . "'";
        if (isset($data['image'])) $updates[] = "image = '" . $conn->real_escape_string($data['image']) . "'";
        if (isset($data['industry'])) $updates[] = "industry = '" . $conn->real_escape_string($data['industry']) . "'";
        if (isset($data['link'])) $updates[] = "link = '" . $conn->real_escape_string($data['link']) . "'";
        
        if (isset($data['categories']) && is_array($data['categories'])) {
            $updates[] = "categories = '" . $conn->real_escape_string(json_encode($data['categories'])) . "'";
        }
        
        if (isset($data['is_superstar'])) {
            $val = $data['is_superstar'] ? 1 : 0;
            $updates[] = "is_superstar = $val";
        }
        
        if (empty($updates)) {
            echo json_encode(["message" => "No fields to update"]);
            break;
        }

        $sql = "UPDATE portfolio_projects SET " . implode(', ', $updates) . " WHERE id = $id";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Project updated successfully"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error updating project: " . $conn->error]);
        }
        break;

    case 'DELETE':
        $id = isset($_GET['id']) ? (int)$_GET['id'] : 0;
        
        if ($id <= 0) {
            http_response_code(400);
            echo json_encode(["error" => "Valid ID is required for deletion"]);
            break;
        }

        $sql = "DELETE FROM portfolio_projects WHERE id = $id";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Project deleted successfully"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error deleting project: " . $conn->error]);
        }
        break;

    case 'OPTIONS':
        // Pre-flight request handled by headers at the top
        http_response_code(200);
        break;
        
    default:
        http_response_code(405);
        echo json_encode(["error" => "Method not allowed"]);
        break;
}

$conn->close();
?>
