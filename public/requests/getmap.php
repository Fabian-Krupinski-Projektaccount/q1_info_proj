<?php
    include(dirname(__FILE__)."/../../src/dbconnect.php");

    //var_dump($_GET);
    //print "test " . $_GET["id"] . " " . isset($_GET["id"]) . "<br>";
    if (isset($_GET["id"]) && $db) {
        $sql = "SELECT * FROM room WHERE map=" . $_GET["id"];

        $jsonresult = '{"room":[';
        foreach ($db->query($sql) as $row) {
            $jsonresult = $jsonresult . '{';
            $jsonresult = $jsonresult . '"x":"' . $row["x"] . '",';
            $jsonresult = $jsonresult . '"y":"' . $row["y"] . '",';
            $jsonresult = $jsonresult . '"nblocked":"' . $row["n_blocked"] . '",';
            $jsonresult = $jsonresult . '"eblocked":"' . $row["e_blocked"] . '",';
            $jsonresult = $jsonresult . '"sblocked":"' . $row["s_blocked"] . '",';
            $jsonresult = $jsonresult . '"wblocked":"' . $row["w_blocked"] . '"';
            $jsonresult = $jsonresult . '},';
        }
        $jsonresult = substr($jsonresult, 0, -1);
        $jsonresult = $jsonresult . ']}';

        print $jsonresult;
    }
?>
