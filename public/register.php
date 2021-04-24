<?php
    session_start();
    include(dirname(__FILE__)."/../src/dbconnect.php");

    if(isset($_POST["email"]) && isset($_POST["username"]) && isset($_POST["password1"]) && isset($_POST["password2"]) && $db) {
        $email = $_POST["email"];
        $uname = $_POST["username"];
        $password1 = $_POST["password1"];
        $password2 = $_POST["password2"];

        if(!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            header('Location: /?site=register&message=Email is invalid');
            die();
        }
        if(strlen($password1) == 0) {
            header('Location: /?site=register&message=No Password entered');
            die();
        }
        if($password1 != $password2) {
            header('Location: /?site=register&message=Passwords must match');
            die();
        }


        //Check if email/username already exists
        $statement = $db->prepare("SELECT * FROM user WHERE email = :email OR uname = :uname");
        $result = $statement->execute(array("email" => $email, "uname" => $uname));
        $user = $statement->fetch();

        if($user !== false) {
            header('Location: /?site=register&message=This Email/Username is already taken');
            die();
        }


        //Write credentials to db
        $password_hash = password_hash($password1, PASSWORD_DEFAULT);

        $statement = $db->prepare("INSERT INTO user (uname, email, pw) VALUES (:uname, :email, :pw)");
        $result = $statement->execute(array("uname" => $uname, "email" => $email, "pw" => $password_hash));

        if($result) {
            header('Location: /?site=login');
            die();
        } else {
            header('Location: /?site=register&message=Unknown server error');
            die();
        }
    }
?>
