<?php
$servername = "192.168.1.120"; //IP Servera
$username = "admin"; //Login do serwera BD
$password = "ManuPart23"; //Hasło
$dbname = "db_packiets"; //Baza danych

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) { //Sprawdzanie połączenia
    die("Connection failed: " . mysqli_connect_error());
}

$sql = $_POST['db_output']; // Tworzenie zapytania do bazy danych
$result = mysqli_query($conn, $sql); // Odpowiedź
mysqli_close($conn); //Zamykanie połączenia z bazą danych
?>