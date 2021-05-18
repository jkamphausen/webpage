<?php 

	header('Content-Type: application/json; charset=utf-8');

	// Connection data
  	include 'db.inc.php';

	$mysqli = new mysqli($server, $user, $pw, $dbname);
	mysqli_query($mysqli, "SET NAMES 'utf8'");
	$myArray = array();
	if ($result = $mysqli->query("SELECT * FROM wp_weblib_collection")) {

	    while($row = $result->fetch_array(MYSQL_ASSOC)) {
	            $myArray[] = $row;
	    }
	    echo json_encode($myArray);
	}

	$result->close();
	$mysqli->close();

/*
 *	Created by Julian Kamphausen, 2016 Cologne
 */







