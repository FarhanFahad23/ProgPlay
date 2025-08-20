<?php
session_start();
if (!isset($_SESSION['email'])) {
    header("Location: index.php"); 
    exit();
}
?>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="refresh" content="0; url=PRogplaygames/index.html">
    <title>Loading Game...</title>
</head>
<body>
    <p>Redirecting to the game...</p>
    <a href="logout.php">Logout</a>
    
</body>
</html>
