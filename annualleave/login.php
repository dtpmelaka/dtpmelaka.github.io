<?php
session_start(); // Starting Session
$error = ''; // Variable To Store Error Message
if (isset($_POST['submit'])) {
    if (empty($_POST['username']) || empty($_POST['password'])) {
        $error = "Username or Password is invalid";
    } else {
        // Define $username and $password
        $username   = $_POST['username'];
        $password   = $_POST['password'];
        // Establishing Connection with Server by passing server_name, user_id and password as a parameter
        //$connection = mysql_connect("localhost", "root", ""); // NOT USED ATM
        // To protect MySQL injection for Security purpose
        //$username   = stripslashes($username); // NOT USED ATM v
        //$password   = stripslashes($password);
        //$username   = mysql_real_escape_string($username);
        //$password   = mysql_real_escape_string($password); // NOT USED ATM ^
        $username = intval($username);
        // Selecting Database
        //$db         = mysql_select_db("company", $connection); // NOT USED ATM

        // connect to the server and select database
        $host = "us-cdbr-azure-southcentral-f.cloudapp.net";
        $dbuser = "b798446efd6630";
        $pwd = "e0068ef3";
        $db = "testfortechnoplastsql";
        // Connect to database.
        $conn = new PDO( "mysql:host=$host;dbname=$db", $dbuser, $pwd);
        $conn->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );

        // SQL query to fetch information of registerd users and finds user match.
        //$query      = mysql_query("select * from login where password='$password' AND username='$username'", $connection); // NOT USED ATM v
        //$rows       = mysql_num_rows($query);
        //if ($rows == 1) {
        //    $_SESSION['login_user'] = $username; // Initializing Session
        //    header("location: profile.php"); // Redirecting To Other Page
        //} else {
        //    $error = "Username or Password is invalid";
        //}
        //mysql_close($connection); // Closing Connection // NOT USED ATM ^

        $sql_user = "SELECT employee_name FROM users, employees WHERE id=? and password=? and employee_no=id";
        $stmt = $conn->prepare($sql_user);
        $stmt->execute(array($username, $password));
        $results = $stmt->fetchAll();

        if(count($results) > 0) {
            foreach ($results as $result) {
                $_SESSION['login_user'] = $result['employee_name']; // Initializing Session
            }
            header("location: profile.php"); // Redirecting To Other Page
        } else {
            $error = "Username or Password is incorrect";
        }
    }
}
?>
