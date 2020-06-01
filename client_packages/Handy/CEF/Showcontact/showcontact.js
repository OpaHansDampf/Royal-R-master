$(".btn").on('click', function(){
	$(".contact ,.overlay").removeClass("hidden");
})

function showContactName(name) {
	document.getElementById("name").value = name;
}

function showContactNumber(number) {
	document.getElementById("nummer").value = number;
}

function buttonEditClicked() {
	var name = document.getElementById("name").value;
	var number = document.getElementById("nummer").value;
	mp.trigger("client:Handy:editContact", name, number);
}

function buttonCallClicked() {
	var name = document.getElementById("name").value;
	location.href = "../Phonecalling/phonecalling.html";
	mp.trigger("client:Handy:callContact", name);
}

function buttonDeleteClicked() {
	var name = document.getElementById("name").value;
	mp.trigger("client:Handy:deleteContact", name);
	mp.trigger("client:Handy:showContacts");
}

function buttonSMSContactClicked() {
	var number = document.getElementById("nummer").value;
	mp.trigger("client:Handy:showSmsContactWrite", null);
}

function buttonGpsClicked() {
	var number = document.getElementById("nummer").value;
	mp.trigger("client:Handy:gpsbutton");
}