<?php
  header('Content-type: application/json; charset=utf-8');

  // Connection data
  include 'db.inc.php';

  // Establish connection
  $conn = new mysqli($server, $user, $pw, $dbname);
  mysqli_query($conn, "SET NAMES 'utf8'");
  // Check connection
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  } 

  $date = new DateTime();
  $barcode      = $date->getTimestamp();
  $title        = "n/a";
  $author       = "n/a";
  $subject      = "n/a";
  $description  = "n/a";
  $category     = "uncategorized";
  $media        = "book";
  $publisher    = "n/a";
  $publocation  = "n/a";
  $pubdate      = null;
  $edition      = "n/a";
  $isbn         = "n/a";
  $type         = "book";
  $thumburl     = "";
  $callnumber   = "n/a";

  //if(isset($_POST['book-barcode'])){$barcode=$_POST['book-barcode'];}
  if(isset($_POST['book-title'])){$title=$_POST['book-title'];}
  if(isset($_POST['book-author'])){$author=$_POST['book-author'];}
  if(isset($_POST['book-subject'])){$subject=$_POST['book-subject'];}
  if(isset($_POST['book-description'])){$description=$_POST['book-description'];}
  if(isset($_POST['book-category'])){$category=$_POST['book-category'];}
  if(isset($_POST['book-media'])){$media=$_POST['book-media'];}
  if(isset($_POST['book-publisher'])){$publisher=$_POST['book-publisher'];}
  if(isset($_POST['book-publocation'])){$publocation=$_POST['book-publocation'];}
  if(isset($_POST['book-pubdate'])){$pubdate=$_POST['book-pubdate'];}
  if(isset($_POST['book-edition'])){$edition=$_POST['book-edition'];}
  if(isset($_POST['book-isbn'])){$isbn=$_POST['book-isbn'];}
  if(isset($_POST['book-type'])){$type=$_POST['book-type'];}
  if(isset($_POST['book-thumburl'])){$thumburl=$_POST['book-thumburl'];}
  if(isset($_POST['book-callnumber'])){$callnumber=$_POST['book-callnumber'];}


  $sql = "INSERT INTO ".$tabname." (
  barcode,
  title,
  author,
  subject,
  description,
  category,
  media,
  publisher,
  publocation,
  pubdate,
  edition,
  isbn,
  type,
  thumburl,
  callnumber
  ) VALUES (
  '".mysqli_real_escape_string($conn, $barcode)."',   
  '".mysqli_real_escape_string($conn, $title)."',     
  '".mysqli_real_escape_string($conn, $author)."',    
  '".mysqli_real_escape_string($conn, $subject)."',   
  '".mysqli_real_escape_string($conn, $description)."',
  '".mysqli_real_escape_string($conn, $category)."',  
  '".mysqli_real_escape_string($conn, $media)."',    
  '".mysqli_real_escape_string($conn, $publisher)."',
  '".mysqli_real_escape_string($conn, $publocation)."',
  '".mysqli_real_escape_string($conn, $pubdate)."',  
  '".mysqli_real_escape_string($conn, $edition)."',   
  '".mysqli_real_escape_string($conn, $isbn)."',      
  '".mysqli_real_escape_string($conn, $type)."',      
  '".mysqli_real_escape_string($conn, $thumburl)."',  
  '".mysqli_real_escape_string($conn, $callnumber)."'

  )";



  if ($conn->query($sql) === TRUE) {
      $response_array['status'] = 'success';
      $response_array['msg']    = 'Das Buch mit dem Titel "'. $title .'" von '. $author .' wurde erfolgreich gespeichert. ('. date('H:i:s', time()) .')';
  } else { 
      $response_array['status'] = 'error'; 
      $response_array['msg']    = 'Error: ' . $sql . '<br>' . $conn->error;
      // $response_array['msg']    = 'Error: ' . print_r( $_POST, true );
  }

  echo json_encode($response_array);
  // Destroy connection
  $conn->close();

/*
 *  Created by Julian Kamphausen, 2016 Cologne
 */
  





