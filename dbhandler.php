<?php 

$db_source_name = "mysql:host=localhost;dbname=firstdatabase";
$db_username = "root";
$db_password = "#AunG2004$";

try {
    $pdo = new PDO($db_source_name,$db_username,$db_password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection Failed : ".$e->getMessage();   
}