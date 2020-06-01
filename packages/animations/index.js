mp.events.add("server:animations:numpad0", (player) => {
    if (player.vehicle || player.data.numpad1Name == "Nicht Belegt")
        return;
    else
    player.stopAnimation();
    player.data.ergeben = 0;
});
mp.events.add("server:animations:numpad1", (player) => {
    if (player.vehicle || player.data.numpad1Name == "Nicht Belegt")
        return;
    else
    player.playAnimation(player.data.numpad1A,player.data.numpad1B,player.data.numpad1C,player.data.numpad1D);
    player.notify("Animation: " + player.data.numpad1Name);//es
});
mp.events.add("server:animations:numpad2", (player) => {
    if (player.vehicle || player.data.numpad2Name == "Nicht Belegt")
        return;
    else
    player.playAnimation(player.data.numpad2A,player.data.numpad2B,player.data.numpad2C,player.data.numpad2D);
    player.notify("Animation: " + player.data.numpad2Name);
});
mp.events.add("server:animations:numpad3", (player) => {
    if (player.vehicle || player.data.numpad3Name == "Nicht Belegt")
        return;
    else
    player.playAnimation(player.data.numpad3A,player.data.numpad3B,player.data.numpad3C,player.data.numpad3D);
    player.notify("Animation: " + player.data.numpad3Name);
});
mp.events.add("server:animations:numpad4", (player) => {
    if (player.vehicle || player.data.numpad4Name == "Nicht Belegt")
        return;
    else
    player.playAnimation(player.data.numpad4A,player.data.numpad4B,player.data.numpad4C,player.data.numpad4D);
    player.notify("Animation: " + player.data.numpad4Name);
});
mp.events.add("server:animations:numpad5", (player) => {
    if (player.vehicle || player.data.numpad5Name == "Nicht Belegt")
        return;
    else
    player.playAnimation(player.data.numpad5A,player.data.numpad5B,player.data.numpad5C,player.data.numpad5D);
    player.notify("Animation: " + player.data.numpad5Name);
});
mp.events.add("server:animations:numpad6", (player) => {
    if (player.vehicle || player.data.numpad6Name == "Nicht Belegt")
        return;
    else
    player.playAnimation(player.data.numpad6A,player.data.numpad6B,player.data.numpad6C,player.data.numpad6D);
    player.notify("Animation: " + player.data.numpad6Name);
});
mp.events.add("server:animations:numpad7", (player) => {
    if (player.vehicle || player.data.numpad7Name == "Nicht Belegt")
        return;
    else
    player.playAnimation(player.data.numpad7A,player.data.numpad7B,player.data.numpad7C,player.data.numpad7D);
    player.notify("Animation: " + player.data.numpad7Name);
});
mp.events.add("server:animations:numpad8", (player) => {
    if (player.vehicle || player.data.numpad8Name == "Nicht Belegt")
        return;
    else
    player.playAnimation(player.data.numpad8A,player.data.numpad8B,player.data.numpad8C,player.data.numpad8D);
    player.notify("Animation: " + player.data.numpad8Name);
});
mp.events.add("server:animations:numpad9", (player) => {
    if (player.vehicle || player.data.numpad9Name == "Nicht Belegt")
        return;
    else
    player.playAnimation(player.data.numpad9A,player.data.numpad9B,player.data.numpad9C,player.data.numpad9D);
    player.notify("Animation: " + player.data.numpad9Name);
});

mp.events.add("playAnimationEvent", (player, animGroup, animType, speed, moveNumber, milSec) => {
	if(!mp.players.exists(player)) return;
	if(player.vehicle) return;
	player.playAnimation(animGroup, animType, speed, moveNumber);
	if(milSec && milSec != -1) {
		player.call("quitAnimationAfter", [player, parseInt(milSec)]);
	}
});
// Animation stoppen
mp.events.add("stopAnimation", (player) => {
	// Nicht stoppen wenn Spieler im Auto ist
	if(!mp.players.exists(player)) return;
	if(player.vehicle) return;
	player.stopAnimation();
});


mp.events.add({
	animationEvent:(player, toggle, dirt, name, flag)=>{
		if(!toggle) player.stopAnimation();
		else player.playAnimation(dirt.toString(), name.toString(), 2, flag);
	},
	playerCommand:(player, command)=>{
		const args = command.split(/[ ]+/);
		const commandName = args.splice(0, 1)[0];
		switch(commandName){
			case 'animplayer': 
				if(args[0] != undefined && args[0].length && args[0].match(/^[-\+]?\d+/) !== null){
					let name = (args[1] != undefined && args[1].match(/^[-\+]?\d+/) !== null) ? parseInt(args[1]) : false;
					player.call('findAnim', [parseInt(args[0]), name]); 
				} else player.call('createAnimList', [args[0]]); 
				break;
			case 'animflag':
				if(args[0].match(/^[-\+]?\d+/) !== null) player.call('animFlag', [parseInt(args[0])]);
				else if(args[0] === 'up' || args[0] === 'down') player.call('animFlag', [args[0]]);
				else player.outputChatBox("Current command: /animflag [up/down]");
			break;
		}
	}
});