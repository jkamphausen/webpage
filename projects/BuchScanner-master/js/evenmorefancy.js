
$( document ).ready(function() {
	
	injectTable('#list-of-books');
	setCount();

	$(".delete-btn").click(function() {
    	event.preventDefault();
    	var barcode = $(this).attr('target');

    	if (confirm('Buch Nr. ' + barcode + ' endgültig löschen?')) { 
		 	killItWithAjax(barcode);
		}	
    });

	$(".delete-all-btn").click(function(evt){
	    evt.preventDefault();
    	OneFunctionToKillThemAll();
	});

	$('#select-all-box').click(function(event) {   
	    if(this.checked) {
	        $('#book-list input').each(function() {
	            this.checked = true;                        
	        });
	    } else {
	    	$('#book-list input').each(function() {
	            this.checked = false;                        
	        });
	    }
	});

    
});


function injectTable(element){
	var html = buildTable();
	$(element).append(html);
}

function setCount(){
	var book_count = $("#list-of-books tr").length;
	$('#book-count').text(book_count);
}

function buildTable(){

	var data = JSON.parse(getTheData());
	var tbodyHtml = '';
	var i = 1;
	data.forEach(function(row){
		tbodyHtml +=   '<tr id="row-' + row.barcode + '"><td><button type="button" class="btn btn-danger btn-xs delete-btn" target="' + row.barcode + '"><span class="glyphicon glyphicon-trash"></span></button></td><td><input type="checkbox" id="check-' + i + '" value="' + row.barcode + '"></td><td>' + row.barcode + '</td><td><a href="#" data-html="true" data-toggle="popover" data-trigger="hover" title="' + row.title + '" data-content="<img src=\''+ row.thumburl + '\'>">' + row.title + '</a></td><td>' + row.author + '</td><td>' + row.isbn + '</td><td>' + row.subject + '</td><td><a href="#" data-toggle="popover" data-trigger="hover" title="' + row.title + ' - Abstract" data-content="' + row.description + '">' + row.description.substr(0, 30) + '...</a></td><td>' + row.category + '</td><td>' + row.media + '</td><td>' + row.publisher + '</td><td>' + row.publocation + '</td><td>' + row.pubdate + '</td><td>' + row.edition + '</td><td>' + row.type + '</td><td><a href="#" data-html="true" data-toggle="popover" data-trigger="hover" title="' + row.title + ' - Cover" data-content="<img src=\''+ row.thumburl + '\'>">' + row.thumburl + '</a></td><td>' + row.callnumber + '</td></tr>';
			i++;
	});
	return tbodyHtml;
}

function getTheData(){

	var response =  $.ajax({
	    type: "GET",
	    url: "php/reader.php",
	    dataType: "json",
	    async: false,
	    cache: false
	}).responseText;
	return response;  
}

function killItWithAjax(barcode){
	$.ajax({
	    type: 'POST',
	    url: 'php/killer.php',
	    data: { barcode: barcode },
	    success: function (strg) {
	    	alert(strg);
	    }
    });
	$('#row-'+barcode).hide();
	setCount();
}


function OneFunctionToKillThemAll() {
	var selected = [];
	$('#book-list input:checked').each(function() {
	    selected.push($(this).attr('value'));
	});
	
	if (confirm('Es wurden ' + selected.length + ' Bücher zur endgültigen Löschung ausgwählt - fortfahren?')) { 
	 	selected.forEach(function(barcode){
	 		killItWithAjax(barcode);
	 		//alert(barcode);
	 	});	
	}
}

/*
 *	Created by Julian Kamphausen, 2016 Cologne
 */




