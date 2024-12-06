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

// Get username and password from the form
$username = htmlspecialchars($_POST['loginUsername']);
$password = trim($_POST['loginPassword']); // Trim extra spaces from the input

// Check if the user exists
$query = "SELECT * FROM users WHERE username = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    $user = $result->fetch_assoc();

    // Plain text password comparison
    if ($password === $user['password']) {
        session_start();
        $_SESSION['user_id'] = $user['id'];
        $_SESSION['username'] = $user['username'];
        echo "Login successful!";
        header("Location: ../Home/home.html"); // Redirect to home page
        exit;
    } else {
        echo "Incorrect password!";
    }
} else {
    echo "User not found!";
}

// Close connection
$stmt->close();
$conn->close();
?>