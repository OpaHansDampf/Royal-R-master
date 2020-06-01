function setTimeDate(){
	var date = new Date();
	var datetext = date.toLocaleDateString('de-DE', {day: 'numeric', month: 'long', year: 'numeric'});
	var timetext = date.toLocaleTimeString('de-DE', {hour: '2-digit', minute:'2-digit'});
	document.getElementById("date").innerHTML = datetext;
	document.getElementById("time").innerHTML = timetext;
}
setInterval(setTimeDate, 1000);

function randomSignal(){
	var randSignal = Math.floor(Math.random() * 5) + 1;
	if(randSignal < 5){
		document.getElementById("signalIcon").innerHTML = `<i class="fad fa-fw fa-signal-`+randSignal+`"></i>`;
	}else if(randSignal == 5){
		document.getElementById("signalIcon").innerHTML = `<i class="fad fa-fw fa-signal"></i>`;
	}
}
setInterval(randomSignal, 6000);

function batteryStatus(){
	var date = new Date();
	var hour = date.getHours();
	
	if(hour >= 5 && hour < 13){
		document.getElementById("batteryIcon").innerHTML = `<i class="fal fa-fw fa-battery-full"></i>`;
	}else if(hour >= 13 && hour < 18){
		document.getElementById("batteryIcon").innerHTML = `<i class="fal fa-fw fa-battery-three-quarters"></i>`;
	}else if(hour >= 18 && hour < 23){
		document.getElementById("batteryIcon").innerHTML = `<i class="fal fa-fw fa-battery-half"></i>`;
	}else if(hour == 23 || hour >= 0 && hour < 4){
		document.getElementById("batteryIcon").innerHTML = `<i class="fal fa-fw fa-battery-quarter"></i>`;
	}else if(hour == 4){
		document.getElementById("batteryIcon").innerHTML = `<i class="fal fa-fw fa-battery-empty text-danger pulse-icon"></i>`;
	}
}
setInterval(batteryStatus, 1000);

function weatherStatus(){
	var date = new Date();
	var hour = date.getHours();
	
	if(hour >= 5 && hour < 8){
		document.getElementById("weatherIcon").innerHTML = `10<i class="fal fa fa-thermometer-empty text-danger pulse-icon"></i>`;
	}else if(hour >= 11 && hour < 19){
		document.getElementById("weatherIcon").innerHTML = `22<i class="fal fa fa-thermometer-full"></i>`;
	}else if(hour > 8 && hour < 11 || hour > 19 && hour < 23){
		document.getElementById("weatherIcon").innerHTML = `16<i class="fal fa fa-thermometer-three-quarters"></i>`;
	}else if(hour == 23 || hour >= 0 && hour < 4){
		document.getElementById("weatherIcon").innerHTML = `12<i class="fa fa-thermometer-half"></i>`;
	}else if(hour == 4){
		document.getElementById("weatherIcon").innerHTML = `10<i class="fal fa fa-thermometer-empty text-danger pulse-icon"></i>`;
	}
}
setInterval(weatherStatus, 1000);

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


function dispatchesClicked(){
	location.href = "../Dispatch/dispatch.html";
}

function settingsClicked(){
	mp.trigger("client:Handy:getOwnNumber");
}

function powerClicked(){
	location.href = "../phoneoff.html"
	location.href = "../Off/off.html"	
	mp.trigger("client:Handy:onPhone",1);
}


function switcherClicked(){
	location.href = "../Error/error.html"
}

function datingClicked(){
	location.href = "../Error/error.html"
}

function rugelmapsClicked(){
	location.href = "../Error/error.html"
}

function gpsClicked(){
	mp.trigger("client:Handy:gpsData");
}


function lifeinvaderClicked(){
	location.href = "../Error/error.html"
}


function bankClicked(){
	mp.trigger("client:Handy:bankData");
}

function newsClicked(){
	location.href = "../Error/error.html"
}

function gesetzeClicked(){
	location.href = "../Error/error.html"
}