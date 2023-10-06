<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    
    $cusname=$_POST["cusID"];
    $filename1 =  $_FILES['filename1'];
    $imagename1 = $_FILES['filename1']['name'];
    $imageoldloc1 = $_FILES['filename1']['tmp_name'];
    $filename2 =  $_FILES['filename2'];
    $imagename2 = $_FILES['filename2']['name'];
    $imageoldloc2 = $_FILES['filename2']['tmp_name'];
    $filename3 =  $_FILES['filename3'];
    $imagename3 = $_FILES['filename3']['name'];
    $imageoldloc3 = $_FILES['filename3']['tmp_name'];
    $r = rand();
    $s = rand();
    $q = rand();
    $newloc1 = "uploads/$r$imagename1";
    $newloc2 = "uploads/$s$imagename2";
    $newloc3 = "uploads/$q$imagename3";    
    move_uploaded_file($imageoldloc1 , $newloc1);
    move_uploaded_file($imageoldloc2 , $newloc2);
    move_uploaded_file($imageoldloc3 , $newloc3);
    $conn = mysqli_connect('localhost', 'root', '') or die ('No connection');
    mysqli_select_db($conn, 'NBE') or die ('DB will not open'); 

    $query="UPDATE `cutomer2` SET `front_id`='".$newloc1."',`back_id`='".$newloc2."',`sign`='".$newloc3."' WHERE `national_id` = '" . $cusname . "'";
    $result = mysqli_query($conn, $query) or die("Invalid query");
   

    mysqli_close($conn);
} 
?>