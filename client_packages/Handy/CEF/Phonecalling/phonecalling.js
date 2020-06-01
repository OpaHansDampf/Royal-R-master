function buttonDeclineCall(){
	//////// Aus dem CEF Browser heraus lassen sich keine Serverevents callen. Müsste ein Zwischenschritt über nen ClientEvent noch dazu geschrieben werden.
	var number = document.getElementById("callingPartner").value;
	mp.trigger("client:Handy:rejectCall", number, number, number);
	location.href = "../Main/main.html";
}

window.addEventListener("keydown", function (event) {
	var key = event.keyCode;  
	if(key == 190) {
		var number = document.getElementById("callingPartner").value;
		mp.trigger("client:Handy:rejectCall", number, number, number);
		location.href = "../Main/main.html";
	}
});