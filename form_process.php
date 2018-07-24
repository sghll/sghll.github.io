<?php

//form is submitted with POST method
if ($_SERVER["REQUEST_METHOD"] == "POST") {

  if (empty($_POST["name"])) {
    $name = "";
  } else {
    $name = test_input($_POST["name"]);
  }

  if (empty($_POST["email"])) {
    $email = "";
  } else {
    $email = test_input($_POST["email"]);
  }

  if (empty($_POST["message"]) == false) {

    $message = test_input($_POST["message"]);
    
    $message_body = '';
    $to = 'sghll@hotmail.com';
    $subject = 'Contact Form Submit';
    mail($to, $subject, $message);

  }

}

?>
