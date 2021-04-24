<?php
    include(dirname(__FILE__)."/../../src/dbconnect.php");

    if (isset($_GET["mid"]) && isset($_GET["x"]) && isset($_GET["y"]) && $db) {
        $sql = "SELECT * FROM room WHERE map=" . $_GET["mid"] . " AND x=" .  $_GET["x"] . " AND y=" .  $_GET["y"];

        $jsonresult = '{"room":[';
        foreach ($db->query($sql) as $row) {
            $jsonresult = $jsonresult . '{';
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
