<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

if ($method === 'GET') {
    if (isset($_GET['id'])) {
        // Fetch single article
        $id = $_GET['id'];
        $stmt = $conn->prepare("SELECT * FROM news WHERE id = ? OR slug = ?");
        $stmt->bind_param("ss", $id, $id);
        $stmt->execute();
        $result = $stmt->get_result();
        
        if ($result->num_rows === 0) {
            http_response_code(404);
            die(json_encode(["error" => "News article not found"]));
        }
        
        $news = $result->fetch_assoc();
        echo json_encode(["news" => $news]);
        $stmt->close();
    } else {
        // Fetch all articles
        $result = $conn->query("SELECT * FROM news ORDER BY published_at DESC");
        $news = [];
        
        if ($result) {
            while ($row = $result->fetch_assoc()) {
                $news[] = $row;
            }
        }
        
        echo json_encode(["news" => $news]);
    }
} elseif ($method === 'POST') {
    $input = json_decode(file_get_contents('php://input'), true);
    
    $title = $input['title'] ?? null;
    $slug = $input['slug'] ?? null;
    $excerpt = $input['excerpt'] ?? null;
    $content = $input['content'] ?? null;
    $image_url = $input['image_url'] ?? null;
    $meta_title = $input['meta_title'] ?? null;
    $meta_description = $input['meta_description'] ?? null;

    if (!$title || !$slug) {
        http_response_code(400);
        die(json_encode(["error" => "Title and slug are required"]));
    }

    $stmt = $conn->prepare("INSERT INTO news (title, slug, excerpt, content, image_url, meta_title, meta_description) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("sssssss", $title, $slug, $excerpt, $content, $image_url, $meta_title, $meta_description);
    
    if ($stmt->execute()) {
        echo json_encode(["success" => true, "id" => $stmt->insert_id]);
    } else {
        if ($conn->errno === 1062) { // Duplicate entry
            http_response_code(409);
            echo json_encode(["error" => "A news post with this slug already exists."]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Internal Server Error"]);
        }
    }
    $stmt->close();
} elseif ($method === 'PUT') {
    if (!isset($_GET['id'])) {
        http_response_code(400);
        die(json_encode(["error" => "ID is required"]));
    }
    $id = $_GET['id'];
    $input = json_decode(file_get_contents('php://input'), true);
    
    $title = $input['title'] ?? null;
    $slug = $input['slug'] ?? null;
    $excerpt = $input['excerpt'] ?? null;
    $content = $input['content'] ?? null;
    $image_url = $input['image_url'] ?? null;
    $meta_title = $input['meta_title'] ?? null;
    $meta_description = $input['meta_description'] ?? null;

    $stmt = $conn->prepare("UPDATE news SET title = ?, slug = ?, excerpt = ?, content = ?, image_url = ?, meta_title = ?, meta_description = ? WHERE id = ?");
    $stmt->bind_param("sssssssi", $title, $slug, $excerpt, $content, $image_url, $meta_title, $meta_description, $id);
    
    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        if ($conn->errno === 1062) { // Duplicate entry
            http_response_code(409);
            echo json_encode(["error" => "A news post with this slug already exists."]);
        } else {
            http_response_code(500);
            echo json_encode(["error" => "Internal Server Error"]);
        }
    }
    $stmt->close();
} elseif ($method === 'DELETE') {
    if (!isset($_GET['id'])) {
        http_response_code(400);
        die(json_encode(["error" => "ID is required"]));
    }
    $id = $_GET['id'];

    $stmt = $conn->prepare("DELETE FROM news WHERE id = ?");
    $stmt->bind_param("s", $id);
    if ($stmt->execute()) {
        echo json_encode(["success" => true]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Internal Server Error"]);
    }
    $stmt->close();
}
?>
