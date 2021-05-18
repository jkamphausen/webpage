<?php 

	header('Content-Type: application/json; charset=utf-8');

	// Connection data
  	include 'db.inc.php';

	if(isset($_POST['barcode'])){$barcode = $_POST['barcode'];} else {
		echo "no barcode transmitted!";
		return;
	}

	$mysqli = new mysqli($server, $user, $pw, $dbname);
	mysqli_query($mysqli, "SET NAMES 'utf8'");
	$myArray = array();
	$result = $mysqli->query("DELETE FROM wp_weblib_collection WHERE barcode = '". $barcode ."'");
	echo $result;

	$result->close();
	$mysqli->close();

/*
 *	Created by Julian Kamphausen, 2016 Cologne
 */
  







