function setTimeDate(){
	var date = new Date();
	var timetext = date.toLocaleTimeString('de-DE', {hour: '2-digit', minute:'2-digit'});
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

content = `
	<div class="float_left">
		<div id="top_time"><span id="time"></span></div>
	</div>
	<div class="float_right">
		<span id="top_weather"><span id="weatherIcon"><i class="fas fa-circle-notch fa-spin fa-sm"></i></span></span>
		<span id="top_signal"><span id="signalIcon"><i class="fad fa-fw fa-signal"></i></span></span>
		<span id="top_simcard"><i class="fal fa-fw fa-sim-card fa-rotate-270"></i></span>
		<span id="top_battery"><span id="batteryIcon"><i class="fas fa-circle-notch fa-spin fa-sm"></i></span></span>
	</div>
`;

$('#topbar').append(content);