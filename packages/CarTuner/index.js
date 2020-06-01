
// Tuning
mp.events.add("mod", (player, vehicle, mod, modvalue) => {
  if(mp.vehicles.exists(vehicle)) {
    vehicle.setMod(parseInt(mod), parseInt(modvalue));
    var id = vehicle.getVariable("vehId");
    if (mod == 48) {
      gm.mysql.handle.query("UPDATE vehicles SET design = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Design: "+err);
      });
    }
    if (mod == 0) {
      gm.mysql.handle.query("UPDATE vehicles SET spoiler = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Spoiler: "+err);
      });
    }
    if (mod == 1) {
      gm.mysql.handle.query("UPDATE vehicles SET front = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Front: "+err);
      });
    }
    if (mod == 2) {
      gm.mysql.handle.query("UPDATE vehicles SET heck = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Heck: "+err);
      });
    }
    if (mod == 3) {
      gm.mysql.handle.query("UPDATE vehicles SET seite = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Seite: "+err);
      });
    }
    if (mod == 4) {
      gm.mysql.handle.query("UPDATE vehicles SET auspuff = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Auspuff: "+err);
      });
    }
    if (mod == 5) {
      gm.mysql.handle.query("UPDATE vehicles SET rahmen = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Rahmen: "+err);
      });
    }
    if (mod == 6) {
      gm.mysql.handle.query("UPDATE vehicles SET gitter = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Gitter: "+err);
      });
    }
    if (mod == 7) {
      gm.mysql.handle.query("UPDATE vehicles SET haube = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Haube: "+err);
      });
    }
    if (mod == 8) {
      gm.mysql.handle.query("UPDATE vehicles SET kotfl = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Kotfl: "+err);
      });
    }
    if (mod == 10) {
      gm.mysql.handle.query("UPDATE vehicles SET dach = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Dach: "+err);
      });
    }
    if (mod == 11) {
      gm.mysql.handle.query("UPDATE vehicles SET motor = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Motor: "+err);
      });
    }
    if (mod == 12) {
      gm.mysql.handle.query("UPDATE vehicles SET bremsen = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Bremsen: "+err);
      });
    }

    if (mod == 13) {
      gm.mysql.handle.query("UPDATE vehicles SET getriebe = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Getriebe: "+err);
      });
    }
    if (mod == 14) {
      gm.mysql.handle.query("UPDATE vehicles SET hupe = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Hupe: "+err);
      });
    }
    if (mod == 15) {
      gm.mysql.handle.query("UPDATE vehicles SET feder = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Feder: "+err);
      });
    }
    if (mod == 18) {
      gm.mysql.handle.query("UPDATE vehicles SET turbo = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Turbo: "+err);
      });
    }
    if (mod == 22) {
      gm.mysql.handle.query("UPDATE vehicles SET xenon = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Xenon: "+err);
      });
    }
    if (mod == 23) {
      gm.mysql.handle.query("UPDATE vehicles SET felgen = ? WHERE id = ?",[modvalue,id], function (err,res) {
        if (err) console.log("Error in Update Felgen: "+err);
      });
    }
  }
});

mp.events.add("modcolor1", (player, vehicle, primcolor) => {
  if(mp.vehicles.exists(vehicle)) {
    vehicle.setColor(parseInt(primcolor), vehicle.getColor(1));
    var id = vehicle.getVariable("vehId");
    gm.mysql.handle.query("UPDATE vehicles SET pcolor = ? WHERE id = ?",[primcolor,id], function (err,res) {
      if (err) console.log("Error in Update Scolor: "+err);
    });
  }
});

mp.events.add("modcolor2", (player, vehicle, seccolor) => {
  if(mp.vehicles.exists(vehicle)) {
	  vehicle.setColor(vehicle.getColor(0), parseInt(seccolor));
    vehicle.setVariable("secColor", seccolor);
    var id = vehicle.getVariable("vehId");
    gm.mysql.handle.query("UPDATE vehicles SET scolor = ? WHERE id = ?",[seccolor,id], function (err,res) {
      if (err) console.log("Error in Update Scolor: "+err);
    });
  }
});

mp.events.add("modneon", (player, vehicle, toggle) => {
  if(mp.vehicles.exists(vehicle)) {
    vehicle.neonEnable = toggle;
    console.log("T: "+toggle);
    var id = vehicle.getVariable("vehId");
    if (toggle === true) { 
      vehicle.setVariable("neoneingebaut",true);     
      gm.mysql.handle.query("UPDATE vehicles SET neonEnabled = '1' WHERE id = ?",[id], function (err,res) {
        if (err) console.log("Error in Update wheelColor: "+err);
      });
    } if (toggle == false) {
      vehicle.setVariable("neoneingebaut",false);   
      gm.mysql.handle.query("UPDATE vehicles SET neonEnabled = '0' WHERE id = ?",[id], function (err,res) {
        if (err) console.log("Error in Update wheelColor: "+err);
      });
    }
  	vehicle.setNeonColor(255, 255, 255);
  	if(!toggle){
  		vehicle.setNeonColor(255, 255, 255);
  	}
  }
});

mp.events.add("hlight", (player, vehicle, art,id) => {
  if(mp.vehicles.exists(vehicle)) {
    if (art == 1) {
      vehicle.data.headlightColor = Number(id);
      var vehid = vehicle.getVariable("vehId");
      gm.mysql.handle.query("UPDATE vehicles SET hlight = ? WHERE id = ?",[id,vehid], function (err,res) {
        if (err) console.log("Error in Update wheelColor: "+err);
      });
    } else {
      vehicle.resetTyreSmokeColor();
      gm.mysql.handle.query("UPDATE vehicles SET hlight = ? WHERE id = ?",[999,vehid], function (err,res) {
        if (err) console.log("Error in Update wheelColor: "+err);
      });
    }
      
  }
});

mp.events.add("modwheelcolor2", (player, vehicle, r, g, b) => {
  if(mp.vehicles.exists(vehicle)) {
  	vehicle.setTyreSmokeColor(Number(r), Number(g), Number(b));
  	vehicle.setVariable("wheelColorR", r);
  	vehicle.setVariable("wheelColorG", g);
    vehicle.setVariable("wheelColorB", b);
    var id = vehicle.getVariable("vehId");
    gm.mysql.handle.query("UPDATE vehicles SET wheelr = ?,wheelg = ?,wheelb = ? WHERE id = ?",[r,g,b,id], function (err,res) {
      if (err) console.log("Error in Update wheelColor: "+err);
    });
  }
});
mp.events.add("modpearl", (player, vehicle, pearlescentColor) => {
  if(mp.vehicles.exists(vehicle)) {
    let wheelcolor = vehicle.wheelColor;
    player.call("modpearl", [vehicle, wheelcolor, pearlescentColor]);
    var id = vehicle.getVariable("vehId");
    gm.mysql.handle.query("UPDATE vehicles SET pearl = ? WHERE id = ?",[pearlescentColor,id], function (err,res) {
      if (err) console.log("Error in Update wheelColor: "+err);
    });  
  }
});

mp.events.add("modneoncolor", (player, vehicle, r, g, b) => {
  if(mp.vehicles.exists(vehicle)) {
  	vehicle.setNeonColor(parseInt(r), parseInt(g), parseInt(b));
  	vehicle.setVariable("neonColorR", r);
  	vehicle.setVariable("neonColorG", g);
    vehicle.setVariable("neonColorB", b);
    var id = vehicle.getVariable("vehId");
    gm.mysql.handle.query("UPDATE vehicles SET neonr = ?,neong = ?,neonb = ? WHERE id = ?",[r,g,b,id], function (err,res) {
      if (err) console.log("Error in Update wheelColor: "+err);
    });
  }
});

mp.events.add("modwindowtint", (player, vehicle, tint) =>{
  if(mp.vehicles.exists(vehicle)) {
    vehicle.windowTint = parseInt(tint);
    var id = vehicle.getVariable("vehId");
    gm.mysql.handle.query("UPDATE vehicles SET windowTint = ? WHERE id = ?",[tint,id], function (err,res) {
      if (err) console.log("Error in Update wheelColor: "+err);
    });    
  }
});

mp.events.add("modwheelcolor", (player, vehicle, color) => {
  if(mp.vehicles.exists(vehicle)) {
    vehicle.wheelColor = parseInt(color);
    var id = vehicle.getVariable("vehId");
    gm.mysql.handle.query("UPDATE vehicles SET wheelColor = ? WHERE id = ?",[color,id], function (err,res) {
      if (err) console.log("Error in Update wheelColor: "+err);
    });
  }
});

mp.events.add("Server:CarTuner:setWheels", (player, vehicle, wheelType, wheel) => {
  if(mp.vehicles.exists(vehicle)) {
    vehicle.wheelType = wheelType;
    vehicle.setMod(23, wheel);
    var id = vehicle.getVariable("vehId");
    gm.mysql.handle.query("UPDATE vehicles SET felgen = ? WHERE id = ?",[wheel,id], function (err,res) {
      if (err) console.log("Error in Update Felgen: "+err);
    });
  }
});

mp.events.add("repair", (player, vehicle) => {
  if(mp.vehicles.exists(vehicle)) {
  	var vehicles = getVehicleFromPosition(player.position, 3);
    if (vehicles.length > 0) {
      player.notify("~g~Fahrzeug repariert");
      if (mp.vehicles.exists(vehicles[0])) {
        vehicles[0].repair();
        vehicles[0].setVariable("isDead","false");
        vehicles[0].setVariable("tanken","false");
        vehId = vehicles[0].getVariable("vehId");
        gm.mysql.handle.query("UPDATE vehicles SET dead = 'false' WHERE id = ?",[vehId],function(err,res) {
          if (err) console.log("Error in Update vehicles Repair: "+err);
        });
      }
    }
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

mp.events.add("updatePearlForPlayer", (player, playerToUpdate, vehicle, wheelColor, pearlColor) => {
  if(mp.vehicles.exists(vehicle)) {
    // call client to update pearl for a vehicle
    if (vehicle !== undefined) {
        vehicle.setVariable("pearlColor", pearlColor);
        playerToUpdate.call("updatePearlForVehicle", [vehicle, wheelColor, pearlColor]);
    } else {
        playerToUpdate.notify("Server hat undfined vehicle ...");
    }
  }
});
