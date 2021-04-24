<html>
    <head>
        <meta name="viewport" content="user-scalable=0, initial-scale=1.0">
        <title>Q1 Info Proj</title>
        <link rel="stylesheet" href="/public_html/assets/css/main.css">

        <script href="/public_html/assets/js/jquery.min.js"></script>
    </head>
    <body>
        <?php
            session_start();
        ?>
        <?php
            $site = isset($_GET['site']) ? $_GET['site'] : 'home';
        ?>

        <video autoplay muted loop class="background-video">
            <source src="/public_html/assets/img/preview.mp4">
        </video>

        <div class="header">
            <div class="header-content">
                <?php
                    if($site == 'home') {
                ?>
                <a class="a signup" href="?site=register">Register</a>
                <a class="a signin" href="?site=login">Login</a>
                <?php
                    } elseif($site == 'register') {
                ?>
                <div class="register-form">
                    <form action="/register.php" method="POST">
                        <input type="email" name="email" placeholder="Email..."><br><br>
                        <input type="text" name="username" placeholder="Username..."><br><br>
                        <input type="password" name="password1" placeholder="Password..."><br><br>
                        <input type="password" name="password2" placeholder="Repeat Password..."><br><br>
                        <button>Register</button>
                        <?php
                            if(isset($_GET["message"])) {
                                print "<p>" . $_GET["message"] . "</p>";
                            }
                        ?>
                    </form>
                </div>
                <?php
                    } elseif($site == 'login') {
                ?>
                <div class="register-form">
                    <form action="/login.php" method="POST">
                        <input type="email" name="email" placeholder="Email..."><br><br>
                        <input type="password" name="password" placeholder="Password..."><br><br>
                        <button>Login</button>
                        <?php
                            if(isset($_GET["message"])) {
                                print "<p>" . $_GET["message"] . "</p>";
                            }
                        ?>
                    </form>
                </div>
                <?php
                    }
                ?>
            </div>
        </div>
    </body>
</html>
