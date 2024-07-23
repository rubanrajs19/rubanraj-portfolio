<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // You can add code here to save the data to a database or send an email

    echo "<p>Thank you, $name. Your message has been received.</p>";
} else {
    echo "<p>Invalid request.</p>";
}
?>
