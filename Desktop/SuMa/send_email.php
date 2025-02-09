<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Sanitize input to prevent security issues
    $name = htmlspecialchars($_POST["name2"]);
    $email = htmlspecialchars($_POST["email2"]);
    $message = htmlspecialchars($_POST["message2"]);

    // Recipient email
    $to = "eshwarsaibandi@gmail.com";

    // Email subject
    $subject = "New Contact Form Submission from $name";

    // Email body
    $body = "Name: $name\n";
    $body .= "Email: $email\n\n";
    $body .= "Message:\n$message\n";

    // Headers
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";

    // Sending email
    if (mail($to, $subject, $body, $headers)) {
        echo "<script>alert('Message sent successfully!'); window.location.href='index.html';</script>";
    } else {
        echo "<script>alert('Failed to send message. Please try again.'); window.location.href='index.html';</script>";
    }
} else {
    echo "<script>alert('Invalid request.'); window.location.href='index.html';</script>";
}
?>
