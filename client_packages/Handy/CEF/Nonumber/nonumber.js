function buttoncallRejected(){
    var callingNumber = document.getElementById("callingPartner").value;
    mp.trigger("client:Handy:rejectCall", callingNumber, callingNumber ,callingNumber);
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