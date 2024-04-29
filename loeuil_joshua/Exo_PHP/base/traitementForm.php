<?php

$email = $_GET['email'];

$email_secu= htmlspecialchars($email);
echo $email_secu;
?>