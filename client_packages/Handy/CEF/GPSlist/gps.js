$(".btn").on('click', function(){
	$(".contact ,.overlay").removeClass("hidden");
});

var innerHTMLString = "";

function editContact(name) {
	mp.trigger("client:Handy:getSingleGPS", name);
}

function addContactDiv(contactName) {
	if(contactName.length > 21) {
		contactname = contactName.substring(0,21);
	}
	innerHTMLString += `<button type='button' class='btn btn-secondary btn-sm btn-block text-left' onclick='editContact("` + contactName + `")'><i class='fa fa-fw fa-map-marker-alt'></i> ` + contactName + `</button>`;
	document.getElementById('wrapper-contacts').innerHTML = innerHTMLString;
}