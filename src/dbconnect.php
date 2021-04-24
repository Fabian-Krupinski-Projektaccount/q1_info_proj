<?php
    $db = DB_CONNECT();

    function DB_CONNECT() {
      $dbconf = parse_ini_file(dirname(__FILE__)."/../config/db.ini", false, INI_SCANNER_RAW);
      $db = NULL;

      try {
          $db = new PDO("mysql:host=" . $dbconf['host'] . ";dbname=" . $dbconf['name'] . "", $dbconf['user'], $dbconf['pwd']);
      } catch(PDOException $e) {
          echo "Error:".$e->getMessage();
          die();
      }

      return $db;
    }
?>
