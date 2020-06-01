$(".btn").on('click', function(){
	$(".contact ,.overlay").removeClass("hidden");
});

var innerHTMLString = "";

function addSmsDiv(contactName) {
	if(contactName.length > 21) {
		contactname = contactName.substring(0,21);
	}
	innerHTMLString += `<div class='text-right'><button type='button' class='btn btn-dark btn-sm mt-2 ml-5 text-right'>` + contactName + `<br>ungelesen <i class='far fa-fw fa-times text-danger'></i></button></div>`;
	document.getElementById('wrapper-contacts').innerHTML = innerHTMLString;	
	setTimeout(function() {
		window.scrollTo({ bottom: 0, left: 0, behavior: "smooth" });
	  },3000);
}


function addNewDiv(contactName) {
	if(contactName.length > 21) {
		contactname = contactName.substring(0,21);
	}
	innerHTMLString += `<button type='button' class='btn btn-primary btn-sm text-left mt-2 mr-5'>` + contactName + `</button>`;
	document.getElementById('wrapper-contacts').innerHTML = innerHTMLString;
}


function addSmsDivGelesen(contactName) {
	if(contactName.length > 21) {
		contactname = contactName.substring(0,21);
	}
	innerHTMLString += `<div class='text-right'><button type='button' class='btn btn-dark btn-sm mt-2 ml-5 text-right'>` + contactName + `<br>gelesen <i class='far fa-fw fa-check-double text-success'></i></button></div>`;
	document.getElementById('wrapper-contacts').innerHTML = innerHTMLString;	
	setTimeout(function() {
		window.scrollTo({ bottom: 0, left: 0, behavior: "smooth" });
	  },3000);
}