// F10
mp.keys.bind(121, true, function() {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("F10");	
});
//F2
mp.keys.bind(113, true, function() {
	mp.events.callRemote("F2");	
});
// E
mp.keys.bind(0x45, true, function() {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true || player.getVariable('farming') !== 'false') return;
	mp.events.callRemote("PushE"); 
});
// K
mp.keys.bind(75, true, function() {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.call("PushK"); 
});
mp.keys.bind(0x08, true,function () {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.call("CloseLicence");
});
mp.keys.bind(0x4C, true, function() { // L Taste
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:faction:interaction");
 });

 mp.keys.bind(33, true, function() { 
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	 if (mp.players.local.getVariable("phone") == 1) {	
		 var phone = player.getVariable("phoneoff");
		 var hintergrund = player.getVariable("phonepic");	 
		mp.events.call("client:Keybind:PageUp",phone,hintergrund);
		mp.events.callRemote("phoneanim", 'amb@world_human_stand_mobile@male@text@base', 'base', 1, 49, -1);
	 } else {
		 mp.game.graphics.notify("~r~Du besitzt kein Handy");
	 }	
 });
 mp.keys.bind(34, true, function() { 
	mp.events.call("client:Keybind:PageDown");
	mp.events.callRemote("phoneanim", 'cellphone@', 'cellphone_horizontal_exit', 1, 40, -1);
 });
 mp.keys.bind(118, true, function() { 
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("F7");
 });








 // Numpad
mp.keys.bind(0x60,true,function () {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:animations:numpad0");
});
 mp.keys.bind(0x61,true,function () {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:animations:numpad1");
});
mp.keys.bind(0x62,true,function () {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:animations:numpad2");
});
mp.keys.bind(0x63,true,function () {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:animations:numpad3");
});
mp.keys.bind(0x64,true,function () {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:animations:numpad4");
});
mp.keys.bind(0x65,true,function () {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:animations:numpad5");
});
mp.keys.bind(0x66,true,function () {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:animations:numpad6");
});
mp.keys.bind(0x67,true,function () {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:animations:numpad7");
});
mp.keys.bind(0x68,true,function () {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:animations:numpad8");
});
mp.keys.bind(0x69,true,function () {
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:animations:numpad9");
});

