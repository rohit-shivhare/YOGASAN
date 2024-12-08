<?php
// Database credentials
$host = "sql306.infinityfree.com";
$dbname = "if0_37839418_yogasan";
$user = "if0_37839418";
$pass = "YOGJGUNI";
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
        echo "<script>alert('Registration Successfull!'); window.history.back();</script>";
        header("Location: access.html");
    } else {
        echo "Error: " . $stmt->error;
    }
}

// Close connection
$stmt->close();
$conn->close();
?>