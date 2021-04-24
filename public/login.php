<?php
    session_start();
    include(dirname(__FILE__)."/../src/dbconnect.php");

    if(isset($_POST["email"]) && isset($_POST["password"]) && $db) {
        $email = $_POST["email"];
        $password = $_POST["password"];

        $statement = $db->prepare("SELECT * FROM user WHERE email = :email");
        $result = $statement->execute(array("email" => $email));
        $user = $statement->fetch();

        if ($user !== false && password_verify($password, $user["pw"])) {
            $_SESSION["userid"] = $user["UID"];
            header('Location: /');
            die();
        } else {
            header('Location: /?site=login&message=No user with this Email / Wrong Password');
            die();
        }
    }
?>
