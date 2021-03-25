<?php
$conf = new Config('/public_html/config/db.json');

try {
    $pdo = new PDO('mysql:host='.$conf->get('server').';dbname='.$conf->get('database').'', $conf->get('username'), $conf->get('password'));
} catch (PDOException $e) {
    print "Error!: " . $e->getMessage() . "<br/>";
    die();
}
?>
