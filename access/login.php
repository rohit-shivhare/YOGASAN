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
        header("Location: ../Home/home.html"); // Redirect to home page
        exit;
    } else {
        echo "<script>alert('Incorrect password!'); window.history.back();</script>";
        exit;
    }
} else {
    echo "<script>alert('User not found!'); window.history.back();</script>";
    exit;
}

// Close connection
$stmt->close();
$conn->close();
?>
