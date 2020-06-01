$(".btn").on('click', function(){
	$(".contact ,.overlay").removeClass("hidden");
})

function showContactName(name) {
	document.getElementById("name").value = name;
}

function buttonDeleteClicked() {
	var name = document.getElementById("name").value;
	mp.trigger("client:handy:deleteGPS", name);
}

function buttonGpsClicked() {
	var number = document.getElementById("name").value;
	mp.trigger("client:Handy:gpsbutton1",number);
}