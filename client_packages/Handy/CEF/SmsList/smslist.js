$(".btn").on('click', function(){
	$(".contact ,.overlay").removeClass("hidden");
});

var innerHTMLString = "";

function smsList(name) {
	mp.trigger("client:Handy:getSmsContact", name);
}

function addSmsDiv(contactName) {
	if(contactName.length > 21) {
		contactname = contactName.substring(0,21);
	}
	innerHTMLString += `<button type='button' class='btn btn-success btn-sm btn-block text-left' onclick='smsList("` + contactName + `")'><i class='far fa-fw fa-check-double'></i> ` + contactName + `</button>`;
	document.getElementById('wrapper-contacts').innerHTML = innerHTMLString;
	
}

function addNewDiv(contactName) {
	if(contactName.length > 21) {
		contactname = contactName.substring(0,21);
	}
	innerHTMLString += `<button type='button' class='btn btn-secondary btn-sm btn-block text-left' onclick='smsList("` + contactName + `")'><i class='fa fa-fw fa-star'></i> ` + contactName + `</button>`;
	document.getElementById('wrapper-contacts').innerHTML = innerHTMLString;
}