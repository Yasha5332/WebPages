<?php
$database = mysqli_connect("localhost", "root", "#AunG2004$", "firstdatabase");
 

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    try {
        $query = "UPDATE users_acc SET pwd = '$password' WHERE username = '$username';";
        mysqli_query($database, $query);
    } catch (Exception $e) {
        echo $e;
    }
}
