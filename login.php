<?php
// Check if form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Check if username and password are correct
    $username = $_POST["student-id"];
    $password = $_POST["password"];
    
    // Define the correct username and password
    $correct_username = "JIS/2023/0386";
    $correct_password = "JIS/2023/0386";
    
    // Check if entered username and password match the correct ones
    if ($username === $correct_username && $password === $correct_password) {
        // Redirect to the main page if login is successful
        header("Location: main_page.php");
        exit();
    } else {
        // Display an error message if login fails
        $error_message = "Invalid username or password. Please try again.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Login</title>
    <link rel="stylesheet" href="login.css">
</head>
<body>
    <div class="container">
        <div class="login-box">
            <div class="logo">
                <img src="JIS-logo.jpg" alt="JIS Group Educational Initiatives">
            </div>
            <h2>Student Login</h2>
            <form method="post" action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>">
                <div class="form-group">
                    <label for="student-id">ENTER STUD. ID NO. ON PHOTO I-CARD</label>
                    <input type="text" id="student-id" name="student-id" placeholder="***/***/****">
                </div>
                <div class="form-group">
                    <label for="password">PASSWORD</label>
                    <input type="password" id="password" name="password" placeholder="Enter Password">
                </div>
                <?php if(isset($error_message)) { ?>
                <div class="error-message"><?php echo $error_message; ?></div>
                <?php } ?>
                <button type="submit" class="btn">Login</button>
            </form>
        </div>
    </div>
</body>
</html>
