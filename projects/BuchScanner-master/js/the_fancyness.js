
$( document ).ready(function() {
	injectSQL('#sql');
	$('#sql').selectText();
	$("#focus-sql").click(function() {
    	setFocusToSQL();	
    });

});

function setFocusToSQL(){
	//SelectText('#sql');
	//$('#sql').select();
	
	$('#sql').selectText();
}

jQuery.fn.selectText = function(){
    this.find('input').each(function() {
        if($(this).prev().length == 0 || !$(this).prev().hasClass('p_copy')) { 
            $('<p class="p_copy" style="position: absolute; z-index: -1;"></p>').insertBefore($(this));
        }
        $(this).prev().html($(this).val());
    });
    var doc = document;
    var element = this[0];
    console.log(this, element);
    if (doc.body.createTextRange) {
        var range = document.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) {
        var selection = window.getSelection();        
        var range = document.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
};

function injectSQL(element){
	var html = buildTable();
	$(element).append(html);
}

function buildTable(){

	var data = JSON.parse(getTheData());
	var sqlHTML = 'INSERT INTO wp_weblib_collection ( barcode, title, author, subject, description, category, media, publisher, publocation, pubdate, edition, isbn, type, thumburl, callnumber) VALUES ';
	var i = 1;

	//console.log(data);

	data.forEach(function(i, idx, row){
	   	sqlHTML += "('" + i.barcode + "','" + i.title + "','" + i.author + "','" + i.subject + "','" + i.description + "','" + i.category + "','" + i.media + "','" + i.publisher + "','" + i.publocation + "','" + i.pubdate + "','" + i.edition + "','" + i.isbn + "','" + i.type + "','" + i.thumburl + "','" + i.callnumber + "')";

	   if (idx === row.length - 1){ 
	       sqlHTML += '; <br>'; 
	   } else {
	   		sqlHTML += ', <br><br>'; 
	   }
	});
	return sqlHTML;
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

/*
 *	Created by Julian Kamphausen, 2016 Cologne
 */




