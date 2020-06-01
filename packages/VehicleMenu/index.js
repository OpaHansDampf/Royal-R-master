mp.events.add("server:vehiclemenu:keypressY", (player) => {
  if(mp.players.exists(player)) {
    let pos = new mp.Vector3(player.position.x, player.position.y, player.position.z);

    if (getVehicleFromPosition(pos, 5).length > 0) {
      var vehicle = getVehicleFromPosition(pos, 5)[0];
      if(mp.vehicles.exists(vehicle)) {
        if (vehicle) {
          var currentKeys = player.getVariable("currentKeys");
          var vehicleid = vehicle.getVariable("vehId");
          var gurt = player.getVariable("gurt");
          var faction = vehicle.getVariable("faction");     
          var neon = vehicle.getVariable("neon") 
          if (player.data.mainmenu == false) {
            player.data.mainmenu = true;
            player.call("client:vehiclemenu:carmenu",[vehicle.locked, player.seat,currentKeys,vehicleid,vehicle.engine,gurt,faction,player.data.faction,neon]);
          }                    
        }
      }      
    }
  }
});

mp.events.add("server:neon:on",(player) => {
  if (mp.players.exists(player)) {
    if (player.vehicle) {
      var vehicle = player.vehicle;
      if (mp.vehicles.exists(vehicle)) {
        vehicle.setVariable("neon",true);
        var neon = vehicle.getVariable("neoneingebaut");   
        if (neon == true) {
          var x = player.position.x
          var y = player.position.y
          var z = player.position.z
          mp.players.forEachInRange({x,y,z}, 20, (player) => {                                
            player.call("client:vehiclemenu:neonan",[vehicle])
        }); 
        } else {
          player.notify("~r~Du hast kein Neon eingebaut");
        }        
      }
    } else {
      player.notify("~r~Du musst im Fahrzeug sitzen");
    }
  }
});

mp.events.add("server:neon:off",(player) => {
  if (mp.players.exists(player)) {
    if (player.vehicle) {
      var vehicle = player.vehicle;
      if (mp.vehicles.exists(vehicle)) {
        vehicle.setVariable("neon",false);
        var neon = vehicle.getVariable("neoneingebaut");   
        if (neon == true) {
          var x = player.position.x
          var y = player.position.y
          var z = player.position.z
          mp.players.forEachInRange({x,y,z}, 20, (player) => {                                
            player.call("client:vehiclemenu:neonaus",[vehicle])
        }); 
        } else {
          player.notify("~r~Du hast kein Neon eingebaut");
        }         
      }
    } else {
      player.notify("~r~Du musst im Fahrzeug sitzen");
    }
  }
});

mp.events.add("server:vehiclemenu:infos",(player,vehid) => {
  gm.mysql.handle.query("SELECT * FROM vehicles WHERE id = ?",[vehid],function(err,res) {
    if (err) console.log("Error in Select vehicle infos: "+err);
    if (res.length > 0) {
      player.call("client:vehiclemenu:infos",[res[0].model,res[0].numberPlate,res[0].firstRegistration,res[0].km,res[0].fuelart,res[0].motor,res[0].bremsen,res[0].getriebe,res[0].turbo])
    }
  });
});

mp.events.add("server:vehicleMenu:sealtbealton", (player) => {
  player.call("client:vehiclemenu:seatbelton");
  player.setVariable("gurt", true);
});
mp.events.add("server:vehicleMenu:sealtbealtoff", (player) => {
  player.call("client:vehiclemenu:seatbeltoff");
  player.setVariable("gurt", false);
});

function playerEnterVehicleHandler(player, vehicle, seat) {
  if(mp.players.exists(player) && mp.vehicles.exists(vehicle)) {
    if (seat == -1) {
  	  player.vehicle = vehicle;
      vehicle.setVariable("driver",String(player.id));
      if (vehicle.getVariable("isRunning") === "true") {
        if (parseInt(vehicle.getVariable("fuel")) !== 0) {
          vehicle.engine = true;
        } else {
          vehicle.setVariable("isRunning","false");
          setTimeout(function() {
            try{
            } catch (e){
              console.log("ERROR - VehicleMenu - EnterVehicleHandler: " + e);
            }
          },1100);
        }
      } else {
        vehicle.setVariable("isRunning","false");
        setTimeout(function(){
          try{
           } catch (e){
            console.log("ERROR - VehicleMenu - EnterVehicleHandler: " + e);
           }
        },1100);
      }
    }
    player.vehicle = vehicle;
  }
}
mp.events.add("playerEnterVehicle", playerEnterVehicleHandler);

//Z - Motor An/Aus
mp.events.add("server:vehiclemenu:motor", (player, vehicle) => {
  if(mp.players.exists(player)) {
         
    if(player.vehicle) {
      if (mp.vehicles.exists(player.vehicle)) {
        vehicle = player.vehicle;
        var vehicleid = vehicle.getVariable("vehId");
        var faction = vehicle.getVariable("faction");
        var dead = vehicle.getVariable("isDead");
            var tanken = vehicle.getVariable("tanken");
        if (faction == player.data.faction || player.data.faction == "Noose") {
          if (tanken !== "true") {
              if (vehicle.engine === true) {
                vehicle.engine = false;
                vehicle.setVariable("isRunning","false");
                player.notify("~r~Motor ausgeschaltet");
              } else {
                  vehicle.engine = true;
                  vehicle.setVariable("isRunning","true");
                  player.notify("~g~Motor eingeschaltet");
              }              
          } else {
            player.notify("~r~Du bist am Tanken!");
          } 
        } else {
          var currentKeys = player.getVariable("currentKeys");
          currentKeys = JSON.parse(currentKeys);  
          player.setVariable("playerVehicle",JSON.stringify(vehicle));
            if (currentKeys.length > 0) {
            var check = false;
            if (player.data.faction == "Noose") check = true;
              currentKeys.forEach(function(key) {
                if (parseInt(key.vehid) == parseInt(vehicleid) && key.active == "Y") check = true;
              });                       
            if (check == true) {
              if (tanken !== "true") {
                  if (vehicle.engine === true) {
                    vehicle.engine = false;
                    vehicle.setVariable("isRunning","false");
                    player.notify("~r~Motor ausgeschaltet");
                  } else {
                      vehicle.engine = true;
                      vehicle.setVariable("isRunning","true");
                      player.notify("~g~Motor eingeschaltet");
                  }              
              } else {
                player.notify("~r~Du bist am Tanken!");
              }          
            }          
          }
        }        
      }
    } else {
        player.notify("Du musst in einem Fahrzeug sein um den Motor zu starten!");
    }
  }
});

//Öffnet und schliesst das Fahrzeug
mp.events.add("server:vehiclemenu:togglelock", (Player) => {
  if(mp.players.exists(Player)) {    
    var NearbyVehicles = [];
    mp.vehicles.forEachInRange(Player.position, 2.5, (NearbyVehicle) => {
        NearbyVehicles.push(NearbyVehicle);

    });
    NearbyVehicles.sort(function(a, b){return b.dist(Player.position)-a.dist(Player.position)});
      if( NearbyVehicles.length > 0 )
      {
        if (mp.vehicles.exists(NearbyVehicles[0])) {
          let vehicle = NearbyVehicles[0];
          var faction = vehicle.getVariable("faction");
          if (faction == Player.data.faction || Player.data.faction == "Noose") {
            if (vehicle.locked) {
              vehicle.locked = false;
              Player.call("client:vehiclemenu:playSound");
              Player.notify("~g~Fahrzeug aufgeschlossen");
              Player.call("playSound", ["Bomb_Disarmed", "GTAO_Speed_Convoy_Soundset"]);  
            } else {
              vehicle.locked = true;
              Player.call("client:vehiclemenu:playSound");
              Player.notify("~r~Fahrzeug abgeschlossen");
              Player.call("playSound", ["Kill_List_Counter", "GTAO_FM_Events_Soundset"]);  
            }
          } else {
            var currentKeys = Player.getVariable("currentKeys");
            currentKeys = JSON.parse(currentKeys);
            var vehicleid = vehicle.getVariable("vehId");            
            if (currentKeys.length > 0) {
              var check = false;
              if (Player.data.faction == "Noose") check = true
                currentKeys.forEach(function(key) {
                  if (parseInt(key.vehid) == parseInt(vehicleid) && key.active == "Y") check = true;
                });                
              if (check == true) {
                if (vehicle.locked) {
                  vehicle.locked = false;
                  Player.call("client:vehiclemenu:playSound");
                  Player.notify("~g~Fahrzeug aufgeschlossen");
                  Player.call("playSound", ["Bomb_Disarmed", "GTAO_Speed_Convoy_Soundset"]);  
                } else {
                  vehicle.locked = true;
                  Player.call("client:vehiclemenu:playSound");
                  Player.notify("~r~Fahrzeug abgeschlossen");
                  Player.call("playSound", ["Kill_List_Counter", "GTAO_FM_Events_Soundset"]);  
                }  
              }
            }
          }          
        }
      }
    }
});

let timeNow = Date.now();
mp.events.add('calc_km', (player, vehicle_data) => {
  if (mp.players.exists(player)) {  
  vehicle_data = JSON.parse(vehicle_data);
  let distance = 0;
  let speed = vehicle_data.speedofcar;
  
  let trip = Math.floor(speed * ((Date.now() - timeNow) / 1000) * 100) / 100;
      
      distance += parseFloat(trip / 1000);
      timeNow = Date.now();
      var kmS = distance;
      kmS = kmS + player.vehicle.getVariable('Kilometer');
      let data = JSON.stringify({"playerID":player.id,"distance":distance,"state":true,"vehicle":player.vehicle});
      player.vehicle.setVariable('Kilometer',kmS);
      mp.events.call('tank', player, data);
  }
});

function getVehicleFromPosition(position, range) {
  const returnVehicles = [];
  mp.vehicles.forEachInRange(position, range,
      (vehicle) => {
          returnVehicles.push(vehicle);
      }
  );
  return returnVehicles;
}

mp.events.add('tank', (player, args) => {
  if (mp.players.exists(player)) {  
	args = JSON.parse(args);
	player = mp.players.at(args.playerID);
	var vehicle = mp.vehicles.at(args.vehicle);
	var Veh_data = args.distance;
	var State = args.state;
	if(State){
	
	if(player.vehicle.getVariable('fuel') != null){
		

			let rest = (Veh_data*3);
			let tank = player.vehicle.getVariable('fuel');
			let newtank = (tank - rest);
			if(newtank < 0){
				player.vehicle.engine = false;
				player.notify("~r~ Achtung Tank ist leer!");
        player.vehicle.setVariable('fuel',0);
        player.vehicle.setVariable("isDead","true");
			}else if (newtank < 16 && !newtank < 0){
				player.notify("~y~Achtung Tank bald leer!");
				player.vehicle.setVariable('fuel',newtank);
			}else{
				player.vehicle.setVariable('fuel',newtank);
			}
			
			}else{
		player.vehicle.setVariable('fuel',100);
		player.vehicle.setVariable('TankMax',100);
		}
    }
  }
});