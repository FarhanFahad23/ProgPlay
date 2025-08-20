<?php
session_start();
include("connect.php");

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Homepage</title>
    <script>
  <?php
    if(isset($_SESSION['email'])){
      $email = $_SESSION['email'];
      $query = mysqli_query($conn, "SELECT firstName FROM users WHERE email='$email'");
      $row = mysqli_fetch_assoc($query);
      $firstName = $row['firstName'];
      echo "const loggedInUserName = " . json_encode($firstName) . ";";
    } else {
      echo "const loggedInUserName = null;";
    }
  ?>
</script>

</head>
<body>
    <div style="text-align:center; padding:15%;">
      <p  style="font-size:50px; font-weight:bold;">
       Hello  <?php 
       if(isset($_SESSION['email'])){
        $email=$_SESSION['email'];
        $query=mysqli_query($conn, "SELECT users.* FROM `users` WHERE users.email='$email'");
        while($row=mysqli_fetch_array($query)){
            echo $row['firstName'].' '.$row['lastName'];
        }
       }
       ?>
       :)
      </p>
      <a href="logout.php">Logout</a>
    </div>
</body>
</html>