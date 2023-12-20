<?php

$database = mysqli_connect("localhost", "root", "#AunG2004$", "firstdatabase");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST["username"];
    $password = $_POST["password"];
    $query = "DELETE FROM users_acc WHERE username = '$username' AND pwd = '$password';";
    mysqli_query($database,$query);
}
