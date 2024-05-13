<?php
$servername = "localhost";
$username = "root";
$password = "";
$database = "vue_finals";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$database", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  // echo "Connected successfully"; // Commenting this out to prevent echoing before JSON response
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

