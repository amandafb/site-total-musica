<?php
// Check for empty fields
if(empty($_POST['nome'])      ||
   empty($_POST['email'])     ||
   empty($_POST['tel'])       ||
   empty($_POST['assunto'])     ||
   empty($_POST['mensagem'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['nome']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['tel']));
$assunto = strip_tags(htmlspecialchars($_POST['assunto']));
$message = strip_tags(htmlspecialchars($_POST['mensagem']));
   
// Create the email and send the message
$to = 'contato@totalmusica.com.br'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Contato Site:  $name";
$email_body = "Nova mensagem do site.\n\n"."Detalhes da Mensagem:\n\nNome: $name\n\nEmail: $email_address\n\nTelefone: $phone\n\nAssunto:\n$assunto\n\nMensagem:\n$message";
$headers = "From: noreply@totalmusica.com.br\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
// return true;         
 echo "<meta http-equiv='refresh' content='0;URL=../index.html'>";
?>


