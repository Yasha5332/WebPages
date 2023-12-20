<?php
   
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $email = $_POST["email"];
    try {
        require_once("dbhandler.php");
        $query = "INSERT INTO users_acc VALUES(?,?,?,?);";
        $statement  = $pdo->prepare($query);

        $statement->execute([6,$username,$password,$email]);
        
        $query=null;
        $statement=null;
        echo "Completed your Sign Up!";
        die();
    } catch (PDOException $error) {
        die("Connection Failed : ".$error->getMessage());
    }
} else {
    header("location: ../index.php");
}
