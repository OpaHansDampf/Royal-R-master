function setTimeDate(){
	var date = new Date();
	var datetext = "<center>" + date.toLocaleDateString('de-DE', {day: 'numeric', month: 'long', year: 'numeric'}) + "</center>";
	var timetext = "<center>" + date.toLocaleTimeString('de-DE', {hour: '2-digit', minute:'2-digit'}) + "</center>";
	document.getElementById("date").innerHTML = datetext;
	document.getElementById("time").innerHTML = timetext;
}
setInterval(setTimeDate, 1000);

function returntocall(){

}

function phoneClicked(){
	mp.trigger("client:Handy:clickPhoneCallButton");
}

function contactsClicked(){
	mp.trigger("client:Handy:showContacts");
}

function smsClicked(){
	mp.trigger("client:Handy:getSms");
}

function emailClicked(){
	location.href = "../Error/error.html"
}

function settingsClicked(){
	mp.trigger("client:Handy:getOwnNumber");
}

function dispatchesClicked(){
	location.href = "../Dispatch/dispatch.html";
}

function bankClicked(){
	mp.trigger("client:Handy:bankData");
}

function gpsClicked(){
	mp.trigger("client:Handy:gpsData");
}



function gesetzeClicked(){
	location.href = "../Error/error.html"
}

function newsClicked(){
	location.href = "../Error/error.html"
}

function powerClicked(){
	location.href = "../phoneoff.html"
	location.href = "../Off/off.html"	
	mp.trigger("client:Handy:onPhone",1);
}