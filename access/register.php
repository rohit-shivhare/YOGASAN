<?php
// Database credentials
$host = "sql201.infinityfree.com";
$dbname = "if0_37800644_profile";
$user = "if0_37800644";
$pass = "h1xAuBfpYD";
$port = 3306;

// Establish database connection
$conn = new mysqli($host, $user, $pass, $dbname, $port);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];

// Check if the username already exists
$query = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo "Username already exists!";
} else {
    // Insert new user into the database
    $sql = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $password);

    if ($stmt->execute()) {
        echo "Registration successful!";
        header("Location: access.html");
    } else {
        echo "Error: " . $stmt->error;
    }
}

// Close connection
$stmt->close();
$conn->close();
?>