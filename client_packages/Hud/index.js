var voice=0;
var food=0;
var drink=0;

function update() {
	if (food === 0){
		document.getElementById("food").style.backgroundImage='url("./food0.png")';
	} else if (food > 0 && food < 50){
		document.getElementById("food").style.backgroundImage='url("./food25.png")';
	} else if (food > 50 && food < 75){
		document.getElementById("food").style.backgroundImage='url("./food50.png")';
	} else if (food > 75 && food < 100){
		document.getElementById("food").style.backgroundImage='url("./food75.png")';
	} else if (food > 90 && food < 101){
		document.getElementById("food").style.backgroundImage='url("./food100.png")';
	}
	if (drink === 0){
		document.getElementById("drink").style.backgroundImage='url("./drink0.png")';
	} else if (drink > 0 && drink < 50){
		document.getElementById("drink").style.backgroundImage='url("./drink25.png")';
	} else if (drink > 50 && drink < 75){
		document.getElementById("drink").style.backgroundImage='url("./drink50.png")';
	} else if (drink > 75 && drink < 100){
		document.getElementById("drink").style.backgroundImage='url("./drink75.png")';
	} else if (drink > 90 && drink < 101){
		document.getElementById("drink").style.backgroundImage='url("./drink100.png")';
	}
	if (voice === 0){
		document.getElementById("voice").style.backgroundImage='url("./laut0.png")';
	} else if (voice === 1){
		document.getElementById("voice").style.backgroundImage='url("./laut1.png")';
	} else if (voice === 2){
		document.getElementById("voice").style.backgroundImage='url("./laut2.png")';
	} else if (voice === 3){
		document.getElementById("voice").style.backgroundImage='url("./laut3.png")';
	} else if (voice === 4){
		document.getElementById("voice").style.backgroundImage='url("./laut4.png")';
	}
}

function setDrinkValue(set) {
	drink = parseInt(set);
	update();
}

function setFoodValue(set) {
	food = parseInt(set);
	update();
}

function setMicroValue(set) {
	voice = parseInt(set);
	update();
}



mp.events.add('setMicroValue', setMicroValue);
mp.events.add('setFoodValue', setFoodValue);
mp.events.add('setDrinkValue', setDrinkValue);