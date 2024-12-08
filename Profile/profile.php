<?php
// Database credentials
$host = "sql306.infinityfree.com";
$dbname = "if0_37839418_yogasan";
$user = "if0_37839418";
$pass = "YOGJGUNI";
$port = 3306;

// Start the session
session_start();

if (!isset($_SESSION['user_id'])) {
    echo json_encode(["error" => "User not logged in"]);
    exit;
}

$conn = new mysqli($host, $user, $pass, $dbname, $port);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$user_id = $_SESSION['user_id'];

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $dob = $_POST['dob'];
    $gender = $_POST['gender'];
    $country = $_POST['country'];

    $sql = "UPDATE users SET name = ?, email = ?, phone = ?, dob = ?, gender = ?, country = ? WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ssssssi", $name, $email, $phone, $dob, $gender, $country, $user_id);

    if ($stmt->execute()) {
        echo json_encode(["success" => "Profile updated successfully"]);
    } else {
        echo json_encode(["error" => "Failed to update profile"]);
    }

    $stmt->close();
} else {
    $sql = "SELECT * FROM users WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $user_id);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        echo json_encode($user);
    } else {
        echo json_encode(["error" => "No user found"]);
    }

    $stmt->close();
}

$conn->close();
?>