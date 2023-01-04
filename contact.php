<?php
if($_POST["name"]);
($_POST["email"]);
($_POST["contact"]);
($_POST["comment"]);{
    mail("raushanraunak2002@gmail.com", "Form to email message", $_POST["message"], "From: ninja.coder.psy@gmail.com");
}
$name = $_POST['name'];
$email = $_POST['email'];
$contact = $POST['contact'];
$message = $_POST['message'];
$formcontent="From: $name \n Message: $message";
$recipient = "emailaddress@here.com";
$subject = "Contact Form";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank You!";
?>