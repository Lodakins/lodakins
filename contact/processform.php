<?php

$firstname=$_POST["firstname"];
$lastname=$_POST["lastname"];
$surname=$_POST["surname"];
$gender=$_POST["gender"];
$reason=$_POST["reason"];
$comments=$_POST["comments"];
$agree=$_POST["agree"];


$filepath ="C:\wamp64\www\contact\\$firstname.txt";
$file = fopen( $filepath, "w" );

if($file == false){
  print_r("Am not here oooo");
  echo ("Error in opening new file");
  exit();
}else{
  
  print_r("Here oooooo");
  $msg=" First Name: $firstname\n 
  Surname :$surname\n
  Last Name:$lastname\n
  Gender :$gender\n
  Reason:$reason\n
  Comments:$comments";

  fwrite($file,$msg);
  fclose($file);

  
}

?>