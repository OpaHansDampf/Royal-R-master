const objects = require('./other/objects.js');

mp.events.add("client:world:weatherUpdate",(newWeather) => {
    if (mp.players.local.dimension !== 7) {
      mp.game.gameplay.setOverrideWeather(newWeather);
      mp.game.gameplay.setWeatherTypePersist(newWeather);
      if (newWeather == "RAIN" || newWeather == "THUNDER") {
        mp.game.gameplay.setRainFxIntensity(0.75);
      } else {
        mp.game.gameplay.setRainFxIntensity(0.0);
      }
    } else {
      mp.game.gameplay.setOverrideWeather("CLEAR");
      mp.game.gameplay.setWeatherTypeNow("CLEAR");
      mp.game.gameplay.setWeatherTypePersist("CLEAR");
      mp.game.gameplay.setRainFxIntensity(0.0);
    }
  });
  var hud = null;
  mp.events.add("openHud",() => {
    if (hud !== null) hud.destroy();
    hud = mp.browsers.new('package://Hud/index.html');
    mp.gui.cursor.visible = false;
    mp.game.controls.disableControlAction(0, 82, false);
  });

  mp.events.add("playSound",(d1,d2) => {
    mp.game.audio.playSoundFrontend(-1, d1, d2, true);
  });

  
mp.events.add('changeValue',(type,value) => {
  if (type === "money") {
      hud.execute("setMoneyAmount('" + value + "')");
  } else if (type === "drink") {
      hud.execute("setDrinkValue('" + value + "')");
  } else if (type === "food") {
      hud.execute("setFoodValue('" + value + "')");
  } else if (type === "micro") {
      hud.execute("setMicroValue('" + value + "')");
  }    
});

mp.events.add("createPed",(x, y, z, rotation) => {
    let Ped = mp.peds.new(mp.game.joaat('MP_F_Freemode_01'), new mp.Vector3(x, y, z),rotation, 0);
});

mp.events.add('render', () => {
  var intro = player.getVariable("intro");
  var iclist = player.getVariable("iclist");
  /*if (intro === 1) {
    mp.game.controls.disableAllControlActions(0);
  } else {
    mp.game.controls.enableAllControlActions(0);
  }  */
  mp.game.player.setHealthRechargeMultiplier(0.0);
  var ingameName = player.getVariable("ingameName");
  mp.discord.update('Royal-Roleplay 2.0', ''+ingameName);
  mp.game.audio.setRadioToStationName("OFF");
  mp.game.audio.setUserRadioControlEnabled(false);  
  if (player.vehicle) {
    mp.game.ui.displayRadar(true);
  } else {
    mp.game.ui.displayRadar(false);
  }
  if (iclist === 0) {
    mp.game.player.disableFiring(true);
    mp.game.controls.disableControlAction(0, 140, true);
  } 
});


mp.events.add("client:character:destroy",() => {
  player.call("loginHandler", ["destroy"]);  
});

mp.keys.bind(0x45, true, function () {
  if (objects.checkLocalObjectsFirst(player) === "atm") {
    mp.events.callRemote("server:bank:konten",104);
    return;
  }
  if (objects.checkLocalObjectsFirst(player) === "water") {
    mp.events.callRemote("server:shop:openShop", 20);
    return;
  }
  if (objects.checkLocalObjectsFirst(player) === "snack") {
    mp.events.callRemote("server:shop:openShop", 21);
    return;
  }
  if (objects.checkLocalObjectsFirst(player) === "drinks") {
    mp.events.callRemote("server:shop:openShop", 22);
    return;
  }
  if (objects.checkLocalObjectsFirst(player) === "coffee") {
    mp.events.callRemote("server:shop:openShop", 23);
    return;
  }
});

mp.events.add("ragdoll",(player) => {
  player.setToRagdoll(5000, 10000, 0, false, false, false);
});

