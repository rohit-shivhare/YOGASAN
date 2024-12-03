<?php
// Database credentials
$host = "sql306.infinityfree.com"; // Change if hosted remotely
$dbname = "if0_37839418_Yogasan"; 
$user = "if0_37839418"; // Your database username
$pass = "YOGJGUNI"; // Your database password
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

// Check if the email already exists in the database
$sql = "SELECT * FROM users WHERE email = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $email);
$stmt->execute();
$result = $stmt->get_result();

// If email already exists, show an error message
if ($result->num_rows > 0) {
    echo "<script>alert('This email is already registered!');</script>";
} else {
    // Insert user into database if the email is unique
    $sql = "INSERT INTO users (username, email, password) 
            VALUES (?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sss", $username, $email, $password);

    if ($stmt->execute()) {
        echo "<script>alert('Registration Successful!');</script>";
    } else {
        echo "Error: " . $stmt->error;
    }
}

// Close connection
$stmt->close();
$conn->close();
?>
