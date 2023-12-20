<?php 
    
    if($_SERVER["REQUEST_METHOD"]=="POST"){
        $username = $_POST["username"];
        try {
        require_once "dbhandler.php";
        $query = "SELECT * FROM users_acc WHERE username = '$username';";
        $stmt = $pdo->prepare($query);
        $stmt->execute();
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        $pdo = null;
        $stmt = null;
        foreach($result as $t){
            echo "Username is ".$t["username"]. "<br>";
            echo "Password is ".$t["pwd"] . "<br>";
            echo "Email is ".$t["email"] . "<br>";
        }

        } catch (Exception $e) {
            echo $e;
        }
    }