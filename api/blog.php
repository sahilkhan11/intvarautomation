<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

require_once 'config.php';

$conn = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["error" => "Database connection failed"]);
    exit();
}

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        if (isset($_GET['slug'])) {
            $slug = $conn->real_escape_string($_GET['slug']);
            $sql = "SELECT * FROM blog WHERE slug = '$slug'";
            $result = $conn->query($sql);
            if ($result->num_rows > 0) {
                echo json_encode(["post" => $result->fetch_assoc()]);
            } else {
                http_response_code(404);
                echo json_encode(["error" => "Post not found"]);
            }
        } else {
            $sql = "SELECT * FROM blog ORDER BY published_at DESC";
            $result = $conn->query($sql);
            $blog = [];
            if ($result && $result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    $blog[] = $row;
                }
            }
            echo json_encode(["news" => $blog]); // keeping "news" key for admin panel compatibility, or change to "blog"
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        
        $title = $conn->real_escape_string($data['title'] ?? '');
        $slug = $conn->real_escape_string($data['slug'] ?? '');
        $excerpt = $conn->real_escape_string($data['excerpt'] ?? '');
        $content = $conn->real_escape_string($data['content'] ?? '');
        $image_url = $conn->real_escape_string($data['image_url'] ?? '');
        $meta_title = $conn->real_escape_string($data['meta_title'] ?? '');
        $meta_description = $conn->real_escape_string($data['meta_description'] ?? '');

        if (!$title || !$slug) {
            http_response_code(400);
            echo json_encode(["error" => "Title and slug are required"]);
            exit();
        }

        $sql = "INSERT INTO blog (title, slug, excerpt, content, image_url, meta_title, meta_description) 
                VALUES ('$title', '$slug', '$excerpt', '$content', '$image_url', '$meta_title', '$meta_description')";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Blog post created successfully", "id" => $conn->insert_id]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error creating post: " . $conn->error]);
        }
        break;

    case 'PUT':
        $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "ID is required"]);
            exit();
        }

        $data = json_decode(file_get_contents("php://input"), true);
        
        $title = $conn->real_escape_string($data['title'] ?? '');
        $slug = $conn->real_escape_string($data['slug'] ?? '');
        $excerpt = $conn->real_escape_string($data['excerpt'] ?? '');
        $content = $conn->real_escape_string($data['content'] ?? '');
        $image_url = $conn->real_escape_string($data['image_url'] ?? '');
        $meta_title = $conn->real_escape_string($data['meta_title'] ?? '');
        $meta_description = $conn->real_escape_string($data['meta_description'] ?? '');

        $sql = "UPDATE blog SET 
                title='$title', 
                slug='$slug', 
                excerpt='$excerpt', 
                content='$content', 
                image_url='$image_url', 
                meta_title='$meta_title', 
                meta_description='$meta_description' 
                WHERE id=$id";

        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Blog post updated successfully"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error updating post: " . $conn->error]);
        }
        break;

    case 'DELETE':
        $id = isset($_GET['id']) ? intval($_GET['id']) : 0;
        if (!$id) {
            http_response_code(400);
            echo json_encode(["error" => "ID is required"]);
            exit();
        }

        $sql = "DELETE FROM blog WHERE id=$id";
        if ($conn->query($sql) === TRUE) {
            echo json_encode(["message" => "Blog post deleted successfully"]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Error deleting post: " . $conn->error]);
        }
        break;
}

$conn->close();
?>
