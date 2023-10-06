<?php
//header("Content-Type: application/json");
error_reporting(E_ALL);
ini_set('display_errors', 0); // Disable displaying errors in the response
ini_set('log_errors', 1);
ini_set('error_log', 'php_errors.log');

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
$name = $_GET["name"];
$customer_segment = $_GET["customer-segment"];
$national_id=$_GET["national-id"];
$mobile_number=$_GET["mobile-number"];
$email=$_GET["email"];
$date=$_GET["date"];
$meeting_time=$_GET["meeting-time"];

$conn = mysqli_connect('localhost', 'root', '') or die ('No connection');
mysqli_select_db($conn, 'nbe') or die ('DB will not open');

$query="INSERT INTO `cutomer2`(`name`, `email`, `national_id`, `phone`, `meeting_date`, `meeeting_tim`, `segment`) VALUES ('".$name."','".$email."','".$national_id."','".$mobile_number."','".$date."','".$meeting_time."','".$customer_segment."')";
$result = mysqli_query($conn, $query) or die("Invalid query");
mysqli_close($conn);

$data= $date." at " .$meeting_time;

echo json_encode($data);

} else {
    // Handle the case where the request method is not GET
    http_response_code(400);
    echo json_encode(array("error" => "Invalid request method."));
}


?>