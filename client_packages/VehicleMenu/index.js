// Native UI
const NativeUI = require("nativeui");
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const Point = NativeUI.Point;
const UIMenuListItem = NativeUI.UIMenuListItem;

const MenuPoint = new Point(50, 50);

//TÜREN UND CO UNTERMENÜ
mp.events.add("client:vehiclemenu:doormenu", () => {
    const door_ui = new Menu("Türen & Co", "", MenuPoint);
    door_ui.AddItem(new UIMenuItem(
        "Motorhaube Öffnen/Schließen",
	    "",
    ));
	door_ui.AddItem(new UIMenuItem(
        "Kofferraum Öffnen/Schließen",
	    "",
    ));
    door_ui.AddItem(new UIMenuItem(
        "Fahrertür Öffnen/Schließen",
	    "",
    ));
    door_ui.AddItem(new UIMenuItem(
        "Beifahrer Öffnen/Schließen",
	    "",
    ));
    door_ui.AddItem(new UIMenuItem(
        "Hinten Links Öffnen/Schließen",
	    "",
    ));
    door_ui.AddItem(new UIMenuItem(
        "Hinten Rechts Öffnen/Schließen",
	    "",
    ));
    door_ui.AddItem(new UIMenuItem(
	    "Zurück",
	    "",
    ));
        door_ui.ItemSelect.on((item) => {
        if (item.Text == 'Motorhaube Öffnen/Schließen') {
            mp.events.call("client:vehiclemenu:hoodopen");
        } else if (item.Text == "Kofferraum Öffnen/Schließen") {
            mp.events.call("client:vehiclemenu:trunkopen");
        } else if (item.Text == "Fahrertür Öffnen/Schließen") {
            mp.events.call("client:vehiclemenu:frontleftdoor");
        } else if (item.Text == "Beifahrer Öffnen/Schließen") {
            mp.events.call("client:vehiclemenu:frontrightdoor");
        } else if (item.Text == "Hinten Links Öffnen/Schließen") {
            mp.events.call("client:vehiclemenu:backleftdoor");
        } else if (item.Text == "Hinten Rechts Öffnen/Schließen") {
            mp.events.call("client:vehiclemenu:backrightdoor");
        } else if (item.Text == "Zurück") {
            door_ui.Close();
            mp.events.call("client:vehiclemenu:carmenu");
        };
    });
});

//MAIN MENÜ
mp.events.add("client:vehiclemenu:carmenu", (locked,seat, Keys, vehicleid,engine,gurt,faction, userfaction,neon) => {
    const main_ui = new Menu("Fahrzeugmenü", "", MenuPoint);
    vehiclekey = JSON.parse(Keys);
        if (mp.players.local.vehicle && seat == -1 && engine == false) {    
            main_ui.AddItem(new UIMenuItem("Motor an", ""));  
            }   
        if (mp.players.local.vehicle && seat == -1 && engine == true) {    
            main_ui.AddItem(new UIMenuItem("Motor aus", ""));  
            } 
        if (faction == "LSPD") {
            main_ui.AddItem(new UIMenuItem("~w~[~r~NOT KNOPF~w~]", ""));
        }
        if(mp.players.local.vehicle && gurt == false || mp.players.local.vehicle && gurt == null) {
            main_ui.AddItem(new UIMenuItem("Gurt anlegen", ""));
        }
        if(mp.players.local.vehicle && gurt == true) {
            main_ui.AddItem(new UIMenuItem("Gurt ablegen", ""));
    }
    if (mp.players.local.vehicle && seat == -1 && neon == false) {    
        main_ui.AddItem(new UIMenuItem("Neon an", ""));  
        }   
    if (mp.players.local.vehicle && seat == -1 && neon == true) {    
        main_ui.AddItem(new UIMenuItem("Neon aus", ""));  
        }
    vehiclekey.forEach(key => {
        if (locked == false && key.vehid == vehicleid && key.active == "Y") {
            main_ui.AddItem(new UIMenuItem("Fahrzeug abschließen", ""));            
        }
        if (locked == true && key.vehid == vehicleid && key.active == "Y") {
            main_ui.AddItem(new UIMenuItem("Fahrzeug aufschließen", ""));
        }
    });
        if (faction == userfaction && locked == true || userfaction == "Noose" && locked == true) {
            main_ui.AddItem(new UIMenuItem("Fahrzeug aufschließen", ""));
        }
        if (faction == userfaction && locked == false || userfaction == "Noose" && locked == false) {
            main_ui.AddItem(new UIMenuItem("Fahrzeug abschließen", ""));
        }
        if (locked == false) {
            main_ui.AddItem(new UIMenuItem("Kofferraum", ""));
        }
        if (mp.players.local.vehicle && seat == -1) {    
            //main_ui.AddItem(new UIMenuItem("Türen", ""));    
        }   
    main_ui.AddItem(new UIMenuItem("Fahrzeug Informationen", "")); 
    main_ui.AddItem(new UIMenuItem("Schließen", ""));
	    main_ui.ItemSelect.on((item) => {
        if (item.Text == "Türen") {
            mp.events.call("client:vehiclemenu:doormenu");
            main_ui.Close();
        } else if (item.Text == "~w~[~r~NOT KNOPF~w~]") {
            mp.events.callRemote("server:lspd:sosknopf");
            main_ui.Close();
        } else if (item.Text == "Gurt anlegen") {
            mp.events.callRemote("server:vehicleMenu:sealtbealton");
            main_ui.Close();
        } else if (item.Text == "Gurt ablegen") {
            mp.events.callRemote("server:vehicleMenu:sealtbealtoff");
            main_ui.Close();
        } else if (item.Text == "Neon an") {
            mp.events.callRemote("server:neon:on");
            main_ui.Close();
        } else if (item.Text == "Neon aus") {
            mp.events.callRemote("server:neon:off");
            main_ui.Close();                        
        } else if (item.Text == "Fahrzeug Informationen") {
            mp.events.callRemote("server:vehiclemenu:infos",vehicleid);
            main_ui.Close();
        } else if (item.Text == "Fahrzeug aufschließen") {
            mp.events.callRemote("server:vehiclemenu:togglelock");
            main_ui.Close();
        } else if (item.Text == "Fahrzeug abschließen") {
            mp.events.callRemote("server:vehiclemenu:togglelock");
            main_ui.Close();
        } else if (item.Text == "Motor an") {
            mp.events.callRemote("server:vehiclemenu:motor");
            main_ui.Close();
        } else if (item.Text == "Motor aus") {
            mp.events.callRemote("server:vehiclemenu:motor");
            main_ui.Close();
        } else if (item.Text == "Kofferraum") {
            mp.events.callRemote("server:kofferaum:firststep");
            main_ui.Close();
        } else if (item.Text == "Schließen") {
            main_ui.Close();
        };
    });
    main_ui.MenuClose.on(() => {
        mp.events.callRemote("server:playermenu:variable");
      });
});

mp.events.add("client:vehiclemenu:infos",(model,numberPlate,firstRegistration,km,fuelart,motor,bremsen,getriebe,turbo) => {
    let infos = new Menu("Informationen", "", MenuPoint);
    infos.AddItem(new UIMenuItem("Model: "+model,""));   
    infos.AddItem( new UIMenuItem("Kennzeichen: "+numberPlate, ""));
    infos.AddItem( new UIMenuItem("Erstzulassung: "+firstRegistration, ""));
    infos.AddItem( new UIMenuItem("KM: "+km, ""));
    infos.AddItem( new UIMenuItem("Tankart: "+fuelart, ""));
    if (motor == -1) {
        infos.AddItem( new UIMenuItem("Motor: Standart", ""));
    } 
    if (motor == 0) {
        infos.AddItem( new UIMenuItem("Motor: Stufe 1", ""));
    }
    if (motor == 1) {
        infos.AddItem( new UIMenuItem("Motor: Stufe 2", ""));
    }
    if (motor == 2) {
        infos.AddItem( new UIMenuItem("Motor: Stufe 3", ""));
    }
    if (motor == 3) {
        infos.AddItem( new UIMenuItem("Motor: Stufe 4", ""));
    }
    if (bremsen == -1) {
        infos.AddItem( new UIMenuItem("Bremsen: Standart", ""));
    } 
    if (bremsen == 0) {
        infos.AddItem( new UIMenuItem("Bremsen: Stufe 1", ""));
    }
    if (bremsen == 1) {
        infos.AddItem( new UIMenuItem("Bremsen: Stufe 2", ""));
    }
    if (bremsen == 2) {
        infos.AddItem( new UIMenuItem("Bremsen: Stufe 3", ""));
    }
    if (getriebe == -1) {
        infos.AddItem( new UIMenuItem("Getriebe: Standart", ""));
    } 
    if (getriebe == 0) {
        infos.AddItem( new UIMenuItem("Getriebe: Stufe 1", ""));
    }
    if (getriebe == 1) {
        infos.AddItem( new UIMenuItem("Getriebe: Stufe 2", ""));
    }
    if (getriebe == 2) {
        infos.AddItem( new UIMenuItem("Getriebe: Stufe 3", ""));
    }
    if (turbo == -1) {
        infos.AddItem( new UIMenuItem("Turbo: Standart", ""));
    } 
    if (turbo == 0) {
        infos.AddItem( new UIMenuItem("Turbo: Stufe 1", ""));
    }
    infos.Visible = true;
  
    infos.ItemSelect.on((item, index, value) => {
        infos.Close();
    });
  });

mp.keys.bind(85, true, function() { 
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:vehiclemenu:togglelock");
 });

mp.keys.bind(77, true, function() { 
	if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
	mp.events.callRemote("server:vehiclemenu:motor");
 });


mp.events.add("PushK", () => {
    mp.events.callRemote("server:vehiclemenu:keypressY");
  });


//MOTORHAUBE AUF
mp.events.add("client:vehiclemenu:hoodopen", function() {
    if(mp.players.local.vehicle){
        if (mp.players.local.vehicle.hood){
            mp.players.local.vehicle.hood = false;
            mp.players.local.vehicle.setDoorShut(4, false);
        } else {
            mp.players.local.vehicle.hood = true;
            mp.players.local.vehicle.setDoorOpen(4, false, false);
        };
    };
});

//KOFFERRAUM AUF
mp.events.add("client:vehiclemenu:trunkopen", function() {
    if(mp.players.local.vehicle){
        if (mp.players.local.vehicle.trunk){
            mp.players.local.vehicle.trunk = false;
            mp.players.local.vehicle.setDoorShut(5, false);
        } else {
            mp.players.local.vehicle.trunk = true;
            mp.players.local.vehicle.setDoorOpen(5, false, false);
        };
    };
});

//Fahrertür AUF
mp.events.add("client:vehiclemenu:frontleftdoor", function() {
    if(mp.players.local.vehicle){
        if (mp.players.local.vehicle.door){
            mp.players.local.vehicle.door = false;
            mp.players.local.vehicle.setDoorShut(0, false);
        } else {
            mp.players.local.vehicle.door = true;
            mp.players.local.vehicle.setDoorOpen(0, false, false);
        };
    };
});

//Beifahrertür AUF
mp.events.add("client:vehiclemenu:frontrightdoor", function() {
    if(mp.players.local.vehicle){
        if (mp.players.local.vehicle.door){
            mp.players.local.vehicle.door = false;
            mp.players.local.vehicle.setDoorShut(1, false);
        } else {
            mp.players.local.vehicle.door = true;
            mp.players.local.vehicle.setDoorOpen(1, false, false);
        };
    };
});

//Hinten links AUF
mp.events.add("client:vehiclemenu:backleftdoor", function() {
    if(mp.players.local.vehicle){
        if (mp.players.local.vehicle.door){
            mp.players.local.vehicle.door = false;
            mp.players.local.vehicle.setDoorShut(2, false);
        } else {
            mp.players.local.vehicle.door = true;
            mp.players.local.vehicle.setDoorOpen(2, false, false);
        };
    };
});

//Hinten rechts AUF
mp.events.add("client:vehiclemenu:backrightdoor", function() {
    if(mp.players.local.vehicle){
        if (mp.players.local.vehicle.door){
            mp.players.local.vehicle.door = false;
            mp.players.local.vehicle.setDoorShut(3, false);
        } else {
            mp.players.local.vehicle.door = true;
            mp.players.local.vehicle.setDoorOpen(3, false, false);
        };
    };
});

//NEON AN
mp.events.add("client:vehiclemenu:neonan", function() {
    if(mp.players.local.vehicle){
        mp.players.local.vehicle.setNeonLightEnabled(0, true);
        mp.players.local.vehicle.setNeonLightEnabled(1, true);
        mp.players.local.vehicle.setNeonLightEnabled(2, true);
        mp.players.local.vehicle.setNeonLightEnabled(3, true);
    };
});


//NEON AUS
mp.events.add("client:vehiclemenu:neonaus", function() {
    if(mp.players.local.vehicle){
        mp.players.local.vehicle.setNeonLightEnabled(0, false);
        mp.players.local.vehicle.setNeonLightEnabled(1, false);
        mp.players.local.vehicle.setNeonLightEnabled(2, false);
        mp.players.local.vehicle.setNeonLightEnabled(3, false);
    };
});

//ANSCHNALLEN
mp.events.add("client:vehiclemenu:seatbelton", function() {
    if(mp.players.local.vehicle){
        let player = mp.players.local;
        player.setConfigFlag(32, false);
        mp.game.graphics.notify("Du hast dich ~g~angeschnallt");
    };
});

//ABSCHNALLEN
mp.events.add("client:vehiclemenu:seatbeltoff", function() {
    if(mp.players.local.vehicle){
        let player = mp.players.local;
        player.setConfigFlag(32, true);
        mp.game.graphics.notify("Du hast dich ~r~abgeschnallt");
    };
});
//mp.game.vehicle.defaultEngineBehaviour = false;

mp.events.add("playerEnterVehicle", function(vehicle, seat){
    if( vehicle.getVariable("faction") == "Medic") vehicle.setEnginePowerMultiplier(15); 
    if( vehicle.getVariable("faction") == "LSPD") vehicle.setEnginePowerMultiplier(40);    
    if( vehicle.getVariable("faction") == "FIB") vehicle.setEnginePowerMultiplier(15);   
	if( vehicle.getVariable("faction") == "ACLS") vehicle.setEnginePowerMultiplier(25);  
    let player = mp.players.local;
    player.setConfigFlag(429, true);
    vehicle.setUndriveable(true); 
    if (vehicle.getVariable("isRunning") === true){
        vehicle.setEngineOn(true, true, false);
    } else {
        vehicle.setEngineOn(false, true, false);
    }
});

mp.events.add("vehboos",(p1,veh) => {
    veh.setEnginePowerMultiplier(p1); 
});

setInterval(function(){_intervalFunction();},1000);
function _intervalFunction() {
//all your stuff goes here
	let player = mp.players.local;
		if (player.vehicle && player.vehicle.getPedInSeat(-1) === player.handle) // Check if player is in vehicle and is driver
		{
			let speed = mp.players.local.vehicle.getSpeed();
			let veh_data = JSON.stringify({"speedofcar":speed});
			mp.events.callRemote('calc_km', (player, veh_data));
		}
};




mp.events.add("entityStreamIn", (entity) => {
    if (entity.type === "vehicle") {
        mp.game.streaming.requestCollisionAtCoord(entity.position.x, entity.position.y, entity.position.z);

        mp.game.streaming.requestAdditionalCollisionAtCoord(entity.position.x, entity.position.y, entity.position.z);

        entity.setLoadCollisionFlag(true);
        entity.trackVisibility();


        // Motor Sync
        if (entity.getVariable("isRunning") === true){
            entity.setEngineOn(true, true, false);
        } else {
            entity.setEngineOn(false, true, false);
        }
        // Neon Sync
        if (entity.getVariable("neon") === true){
            entity.setNeonLightEnabled(0, true);
            entity.setNeonLightEnabled(1, true);
            entity.setNeonLightEnabled(2, true);
            entity.setNeonLightEnabled(3, true);
        } else {
            entity.setNeonLightEnabled(0, false);
            entity.setNeonLightEnabled(1, false);
            entity.setNeonLightEnabled(2, false);
            entity.setNeonLightEnabled(3, false);
        }
    }
});

mp.events.add("updatePearlForVehicle", (vehicle, wheelColor, pearlColor) => {
    if (vehicle !== undefined){
        vehicle.setExtraColours(parseInt(pearlColor), parseInt(wheelColor));
    } else {
        mp.game.graphics.notify("Client hat undifined vehicle");
    }
});


mp.events.add("setVehicle",(veh) => {
    veh.setOnGroundProperly();
});


