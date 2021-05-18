
$( document ).ready(function() {

    setFocusToIsbnSearch();

    console.log( "ready!" );

    $("#clear-btn").click(function() {
    	event.preventDefault();
    	clearForm();
    	$('#success-alert').hide();
    });

    $("#save-n-clear-btn").click(function() {
    	event.preventDefault();
    	if(checkForm() === true) {
      		saveForm();
    		clearForm();
      	}
    });

	$("#isbn-search-btn").click(function() {
		event.preventDefault();
		if(checkISBN()===false){alert('no isbn provided!');}
      	if(checkForm() == true) {
      		saveForm();
      		loadRessource();
        }
        setFocusToIsbnSearch();
	});//("#isbn-search-btn").click(function()


});//( document ).ready

//	978-3-658-05792-3

function setFocusToIsbnSearch(){
    //$('#isbn-search').focus();
    $('#isbn-search').select();
}

function fillPreview(bookArray){  	
	$('#preview-title').html(bookArray['title']);      
	$('#preview-author').html(bookArray['author']);   	
	$('#preview-content').html(bookArray['description']);
	$('#preview-thumburl').attr("src",bookArray['thumburl']);

	$('#preview-publisher').html(bookArray['publisher']); 
	$('#preview-pubdate').html(bookArray['pubdate']);

	$('#preview-isbn10').html(bookArray['isbn10']); 
	$('#preview-isbn13').html(bookArray['isbn13']);   
}

function fillForm(bookArray){
	//$('#book-barcode').val(bookArray['barcode']);   	
	$('#book-title').val(bookArray['title']);      
	$('#book-author').val(bookArray['author']);   	
	$('#book-subject').val(bookArray['subject']);  	
	$('#book-description').val(bookArray['description']);
	$('#book-category').val(bookArray['category']);   
	$('#book-media').val(bookArray['media']);      
	$('#book-publisher').val(bookArray['publisher']);  
	$('#book-publocation').val(bookArray['publocation']);
	$('#book-pubdate').val(bookArray['pubdate']);    
	$('#book-edition').val(bookArray['edition']);    
	$('#book-isbn').val(bookArray['isbn']);    	
	$('#book-type').val(bookArray['type']);       
	$('#book-thumburl').val(bookArray['thumburl']);   
	$('#book-callnumber').val(bookArray['callnumber']); 
}

function clearForm(){
	//$('#book-barcode').val('');
	$('#book-title').val('');     
	$('#book-author').val('');  	
	$('#book-subject').val(''); 
	$('#book-description').val(''); 
	$('#book-category').val('');  
	$('#book-media').val('');  
	$('#book-publisher').val(''); 
	$('#book-publocation').val(''); 
	$('#book-pubdate').val(''); 
	$('#book-edition').val('');   
	$('#book-isbn').val('');  	
	$('#book-type').val('');    
	$('#book-thumburl').val(''); 
	$('#book-callnumber').val(''); 
	$('#isbn-search').val('');


	$('#preview-title').html('Buchtitel');      
	$('#preview-author').html('Autor');   	
	$('#preview-content').html('Inhaltsangabe / Beschreibung');
	$('#preview-thumburl').attr("src", "https://www.google.de/images/nav_logo242.png");

	$('#preview-publisher').html('Herausgeber'); 
	$('#preview-pubdate').html('Datum');

	$('#preview-isbn10').html('isbn10'); 
	$('#preview-isbn13').html('isbn13');
	setFocusToIsbnSearch();
}

function saveForm(){
	// var data = $('#book-data').serialize();
	// console.log(data);
	$.ajax({
        type: 'POST',
      	url: 'php/processor.php',
      	data: $('#book-data').serialize(),
      	success: function(data) {
		    if(data.status == 'success'){
		        //alert(data.msg);
		        $('#success-alert').show();
		        $('#success-alert').text(data.msg);
		    }else if(data.status == 'error'){
		        alert(data.msg);
		        $('#success-alert').hide();
		        $('#success-alert').text('Error: ' + data.msg);
		    }
		}
    });
}

function checkISBN(){
	var isbn = $('#isbn-search').val()
	if(isbn == "" || isbn == null){
		return false;
	} else {
		return true;
	}
}


function checkForm(){
	errors = [];

	if($('#book-title').val().length === 0 && $('#book-author').val().length === 0 && $('#book-subject').val().length === 0 && $('#book-description').val().length === 0 && $('#book-category').val().length === 0 && $('#book-publisher').val().length === 0 && $('#book-publocation').val().length === 0 && $('#book-pubdate').val().length === 0 && $('#book-edition').val().length === 0 && $('#book-isbn').val().length === 0 &&  $('#book-thumburl').val().length === 0){
		//alert('Erster Eintrag? :-)');
		loadRessource();
		console.log('first entry - not saved to db of course ...');
		return false;
	} 	


	//if(!$('#book-barcode').val()){ errors.push(" Das Feld 'Barcode' muss ausgefüllt sein!"); } // we be generated -> no alert!
	//if($('#book-media').val().length <= 0){ errors.push(" Das Feld 'Media' muss ausgefüllt sein!"); } // we be generated -> no alert!  
	//if($('#book-type').val().length <= 0){ errors.push(" Das Feld 'Type' muss ausgefüllt sein!"); } // we be generated -> no alert!
	////if($('#book-callnumber').val().length <= 0){ errors.push(" Das Feld 'Callnumber' muss ausgefüllt sein!"); } // we be generated -> no alert!
	
	if($('#book-title').val().length <= 0){ errors.push(" Das Feld 'Titel' muss ausgefüllt sein!"); }     
	if($('#book-author').val().length <= 0){ errors.push(" Das Feld 'Autor' muss ausgefüllt sein!"); } 
	if($('#book-isbn').val().length <= 0){ errors.push(" Das Feld 'ISBN' muss ausgefüllt sein!"); }  	

	/*
	if($('#book-subject').val().length <= 0){ errors.push(" Das Feld 'Subject' muss ausgefüllt sein!"); } 
	if($('#book-description').val().length <= 0){ errors.push(" Das Feld 'Description' muss ausgefüllt sein!"); } 
	if($('#book-category').val().length <= 0){ errors.push(" Das Feld 'Category' muss ausgefüllt sein!"); } 
	if($('#book-publisher').val().length <= 0){ errors.push(" Das Feld 'Publisher' muss ausgefüllt sein!"); } 
	if($('#book-publocation').val().length <= 0){ errors.push(" Das Feld 'Publocation' muss ausgefüllt sein!"); } 
	if($('#book-pubdate').val().length <= 0){ errors.push(" Das Feld 'Pubdate' muss ausgefüllt sein!"); } 
	if($('#book-edition').val().length <= 0){ errors.push(" Das Feld 'Edition' muss ausgefüllt sein!"); } 
	if($('#book-thumburl').val().length <= 0){ errors.push(" Das Feld 'Thumbnail' muss ausgefüllt sein!"); } 
	*/

	console.log(errors);

	if(errors.length !== 0) {
		var errormsg = "FORMULAR FEHLER: ";
		var arrayLength = errors.length;
		for (var i = 0; i < arrayLength; i++) {
		    errormsg+= "\n " + errors[i];
		    //Do something
		}
		$('#success-alert').hide();
		$('#success-alert').text('Error: ' + errormsg);
		console.log(errormsg);
		alert(errormsg);
		return false;
	}  
	return true;
}

function loadRessource(){
	$.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: 'https://www.googleapis.com/books/v1/volumes?q=' + $('#isbn-search').val(),
		contentType: "application/x-www-form-urlencoded;charset=utf-8",
    	success: function(data){
	       	var item 			= data.items[0].volumeInfo;
	       	var book 			= [];

	        book['isbn10'] 		= item.industryIdentifiers[0].identifier;
		  	book['isbn13'] 		= item.industryIdentifiers[1].identifier;

		  	//book['barcode']   	= ''; 
			book['title']      	= item.title;
			book['author']   	= item.authors;  
			book['subject']  	= item.title; 
			book['description']	= item.description;
			book['category']   	= item.categories;
			book['media']      	= 'book';
			book['publisher']  	= item.publisher;
			book['publocation'] = 'x';
			book['pubdate']    	= item.publishedDate;
			book['edition']    	= item.contentVersion;
			if(item.industryIdentifiers[1].identifier != null && item.industryIdentifiers[1].identifier > 0){
				book['isbn']    = item.industryIdentifiers[1].identifier;	//isbn13	
			} else {
				book['isbn']    = item.industryIdentifiers[0].identifier;	//isbn10	
			}
			book['type']       	= 'book';
			if(typeof item.imageLinks === 'undefined'){
				book['thumburl']= '';	
			} else {
				book['thumburl']= item.imageLinks.thumbnail;
			}
			
			book['callnumber']  = 'n/a';

			fillPreview(book);
			fillForm(book);
    	}//success
    });//$.ajax
}

/*
 *	Created by Julian Kamphausen, 2016 Cologne
 */









