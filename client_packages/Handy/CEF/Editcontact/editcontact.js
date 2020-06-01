$(".btn").on('click', function(){
	$(".contact ,.overlay").removeClass("hidden");
})


function showContactName(name) {
	document.getElementById("name").value = name;
	document.getElementById("old_name").value = name;
}

function showContactNumber(number) {
	document.getElementById("nummer").value = number;
	document.getElementById("old_number").value = number;
}


function buttonSaveClicked() {
	var name = document.getElementById("name").value;
	var number = document.getElementById("nummer").value;
	var old_name = document.getElementById("old_name").value;
	var old_number = document.getElementById("old_number").value;
	mp.trigger("client:Handy:saveContact", name, number, old_name, old_number);
	mp.trigger("client:Handy:showContacts");
}

function buttonDiscardClicked() {
	mp.trigger("client:Handy:showContacts");
}
