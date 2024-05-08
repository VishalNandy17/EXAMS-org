<?php
// Check if the user is logged in, otherwise redirect to the login page
session_start();

if (!isset($_SESSION["loggedin"]) || $_SESSION["loggedin"] !== true) {
    header("location: login.php");
    exit;
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Semester - 2023-24</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div class="container">
        <header>
            <div class="logo">
                <img src="JIS-logo.jpg" alt="Center of Excellence">
            </div>
            <h1>Semester - 2023-24</h1>
            <a href="logout.php" class="logout">Logout</a>
        </header>
        <div class="content">
            <nav class="sidebar">
                <ul>
                    <li><a href="#">ENROLLMENT FOR EXAMINATION</a></li>
                    <li><a href="#">PRINT</a>
                        <ul>
                            <li><a href="#">Print Admit Card</a></li>
                        </ul>
                    </li>
                    <li><a href="#">FORM FILLUP</a></li>
                    <li><a href="#">Semester Result</a></li>
                </ul>
            </nav>
            <main>
                <div class="profile">
                    <h2>Profile Details</h2>
                    <div class="photo">
                        <img src="profile.jpg" alt="Profile Photo">
                        <button class="upload">Upload photo</button>
                        <button class="upload">Upload Signature</button>
                        <p>Allowed JPG Max size of 50Kb</p>
                    </div>
                    <div class="signature">
                        <img src="signature.png" alt="Signature">
                    </div>
                </div>
                <div class="messages">
                    <h2>Messages</h2>
                    <p>Fees Pending or Less Attendance, Please contact your Department.</p>
                    <p>Attendance: Not Eligible</p>
                </div>
            </main>
        </div>
    </div>
</body>
</html>
