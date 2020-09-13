<?php
include_once("dbconfig.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$name = mysqli_real_escape_string($mysqli, trim($request->name));
$password = mysqli_real_escape_string($mysqli, (int)$request->password);
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$mobile = mysqli_real_escape_string($mysqli, (int)$request->mobile);
$sql = "INSERT INTO users(name,email,mobile,password) VALUES
('{$name}','{$email}','{$mobile}','{$password}')";
// echo $sql;
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'name' => $name,
'pwd' => '',
'email' => $email,
'mobile' => $mobile,
'Id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}
?>