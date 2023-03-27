<?php
$servername = "192.168.1.120"; //IP Servera
$username = "admin"; //Login do serwera BD
$password = "ManuPart23"; //Hasło
$dbname = "test"; //Baza danych
$fb = "";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if (!$conn) { //Sprawdzanie połączenia
    die("Connection failed: " . mysqli_connect_error());
}

$sql = $_POST['db_check']; // Tworzenie zapytania do bazy danych
$result = mysqli_query($conn, $sql); // Odpowiedź

if (mysqli_num_rows($result) == 0) {
    $fb = 'Nie ma w bazie';
} else {
    $fb = mysqli_fetch_assoc($result)['result'];
    if ($fb == "0") {
        $fb = 'Fail';
    } else {
        $fb = '';
    }
}

$response = array('fb' => $fb);
echo json_encode($response);
mysqli_close($conn); //Zamykanie połączenia z bazą danych
?>