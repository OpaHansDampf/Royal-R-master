const fs = require("fs");
const saveFile = "savedpos.txt";
gm.vehicles = require("../../vehicles/index.js");
mp.events.addCommand("save", (player, name = "No name") => { //Koordinaten Saven
    let pos = (player.vehicle) ? player.vehicle.position : player.position;
    let rot = (player.vehicle) ? player.vehicle.rotation : player.heading;

    fs.appendFile(saveFile, `Position: ${pos.x}, ${pos.y}, ${pos.z} | ${(player.vehicle) ? `Rotation: ${rot.x}, ${rot.y}, ${rot.z}` : `Heading: ${rot}`} | ${(player.vehicle) ? "InCar" : "OnFoot"} - ${name}\r\n`, (err) => {
        if (err) {
            player.notify(`~r~SavePos Error: ~w~${err.message}`);
        } else {
            player.notify(`~g~Position saved. ~w~(${name})`);
        }
    });
});
mp.events.addCommand("veh", (player, full, hash, r, g, b, r2, g2, b2) => {
		   var veh = mp.vehicles.new(mp.joaat(hash), player.position, {});
		   veh.dimension = player.dimension;
		   veh.numberPlateType = 1;
		   veh.numberPlate = "RoyalCar";
		   veh.engine = true;
		   veh.dead = false;
		   player.putIntoVehicle(veh, -1);	   
});

mp.events.addCommand("train", (player, full, hash, r, g, b, r2, g2, b2) => {
	var veh = mp.vehicles.new(mp.joaat("metrotrain"), player.position, {});
	veh.dimension = player.dimension;
	veh.numberPlateType = 1;
	veh.numberPlate = "RoyalCar";
	veh.engine = true;
	veh.dead = false;
	veh.rotation = 315.141
	player.putIntoVehicle(veh, -1);	   
});



mp.events.addCommand("tpveh",(player) => {
	if (mp.players.exists(player)) {
		if (player.vehicle) {
			var veh = player.vehicle;
			if (mp.vehicles.exists(veh)) {
				var seat = player.seat;
				veh.position = new mp.Vector3(1256.1444091796875, 222.7534942626953, -48.03037643432617);
				veh.heading = 266.5380859375
				//player.position = new mp.Vector3(1256.1444091796875, 222.7534942626953, -48.03037643432617);
				player.putIntoVehicle(veh, seat);
			}
		} else {
			player.notify("~r~Du musst im Fahrzeug sitzen");
		}
	}	
});

mp.events.addCommand("tpcor", (player, full, x, y, z) => {
	player.position = new mp.Vector3(parseFloat(x), parseFloat(y), parseFloat(z));
  
  });


  mp.events.addCommand("ween", (player, full, x, y, z) => {	
	mp.players.forEach((player) => {
        var newWeather = "RAIN";
        gm.weather.currentWeather = newWeather;
		mp.players.call("client:world:weatherUpdate", [newWeather]);
		player.call("weensound"); 
		setTimeout(_ => {
            if (mp.players.exists(player)) {
                player.call("weensoundoff");
            }          
      }, 180000);  
    });
  });
  mp.events.addCommand("boost", (player, full, p1) => {
	  if (player.vehicle) {
		player.call("vehboos",[parseInt(p1),player.vehicle]); 
	  } else {
		  player.notify("~r~Du musst im Fahrzeug sitzen");
	  }	
  });
  mp.events.addCommand("noose", (player, full, x, y, z) => {
	player.setProp(0,117,0); //Hut
	player.setProp(1,0,0); //Brille
	player.setClothes(1,125,0,0); //Masken
	player.setClothes(3,17,0,0); //Torso
	player.setClothes(4,102,0,0); //Hose
	player.setClothes(6,82,0,0); //Schuhe
	player.setClothes(11,248,0,0);//Jacke
	player.setClothes(8,56,0,0); //Shirt
	player.data.hat = 117;
  });

  mp.events.addCommand("noose1", (player, full, x, y, z) => {
	  if (player.data.gender == 0) {
		player.setProp(0,61,6); //Hut
		player.setClothes(1,51,0,0); //Masken
		player.setProp(1,5,5); //Brille
		player.setClothes(3,44,0,0); //Torso
		player.setClothes(4,10,0,0); //Hose
		player.setClothes(6,10,0,0); //Schuhe
		player.setClothes(11,31,0,0);//Jacke
		player.setClothes(8,96,2,0); //Shirt
		player.setClothes(9,0,0,2); // Weste
		player.setClothes(7,22,1,2); // Accesior
		player.data.hat = 61;
	  } else {
		player.setProp(0,44,1); //Hut
		player.setProp(1,player.data.eye,0); //Brille
		player.setClothes(1,51,0,0); //Masken
		player.setClothes(3,18,0,0); //Torso
		player.setClothes(4,75,0,0); //Hose
		player.setClothes(6,60,10,0); //Schuhe
		player.setClothes(11,57,0,0);//Jacke
		player.setClothes(8,38,0,0); //Shirt
		player.setClothes(7,23,0,2); // Accesior
		player.setClothes(9,0,0,2); // Weste
		player.data.hat = 44;
	  }
		player.giveWeapon(0x3656C8C1, 0);
		player.giveWeapon(0x99AEEB3B, 10000);
		player.giveWeapon(0x22D8FE39, 10000);
		player.giveWeapon(0x2BE6766B, 10000);
		player.giveWeapon(0x83BF0278, 10000);
		player.giveWeapon(0x8BB05FD7, 0);
		player.giveWeapon(0x678B81B1, 0);	
  });


  mp.events.addCommand("revall", (player, full, x, y, z) => {	
		mp.players.forEach((player) => {
			var dead = player.getVariable("isDead");
			if (dead == "true") {
				player.spawn(player.position);
				player.health = 100;  
				clearTimeout(player.respawnTimer);
				player.respawnTimer = null;
				clearTimeout(player.spawnTimer);
				player.spawnTimer = null;
				player.call("closeDeathscreen");
				player.call("progress:end");
				player.setVariable("isDead", false);
				gm.mysql.handle.query("UPDATE characters SET dead = '0', health = '100' WHERE id = ?",[player.data.charId],function(err,res) {
					if (err) console.log(err);
				});
			}			
		});
  });

  mp.events.addCommand('weapon', (player, fullText, weapon, ammo) => {
		var weaponHash = mp.joaat(weapon);
        player.giveWeapon(weaponHash, parseInt(ammo) || 10000);
});

mp.events.addCommand('pos', (player, fullText) => {
	player.outputChatBox(""+player.position);
});
mp.events.addCommand("creategarage", (player, name) => {	
	if(name != "")
	{
		gm.mysql.handle.query("INSERT INTO garage SET name = ?, pedx = ?, pedy = ?, pedz = ?, pedr = ?", [name,player.position.x,player.position.y,player.position.z,player.heading], function(err, res){
		if(err) console.log("Error in Create Garage : "+err);
		mp.blips.new(50, new mp.Vector3(player.position.x,player.position.y,player.position.z),
		{
			name: name,
			color: 0,
			shortRange: true,
		});
		});
		player.outputChatBox("Garage erstellt[" +name+ "]");
	}		
});

mp.events.addCommand("gs1", (player, id) => {
	
		if(id != "")
		{
			gm.mysql.handle.query("UPDATE garage SET spawn1x = ?, spawn1y = ?, spawn1z = ?, spawn1r = ? WHERE id = ?", [player.position.x,player.position.y,player.position.z,player.heading,id], function(err, res){
			if(err) console.log("Error in Create Garage : "+err);
			});
			player.outputChatBox("Spawn 1 erstellt[" +id+ "]");
		}	
	
});

mp.events.addCommand("gs2", (player, id) => {
	if(id != "")
	{
		gm.mysql.handle.query("UPDATE garage SET spawn2x = ?, spawn2y = ?, spawn2z = ?, spawn2r = ? WHERE id = ?", [player.position.x,player.position.y,player.position.z,player.heading,id], function(err, res){
		if(err) console.log("Error in Create Garage : "+err);
		});
		player.outputChatBox("Spawn 1 erstellt[" +id+ "]");
	}		
});

mp.events.addCommand("parkin", (player, id) => {
	if(id != "")
	{
		gm.mysql.handle.query("UPDATE garage SET parkInX = ?, parkInY = ?, parkInZ = ? WHERE id = ?", [player.position.x,player.position.y,player.position.z,id], function(err, res){
		if(err) console.log("Error in Create Garage : "+err);
		});
		player.outputChatBox("Einparkpunkt erstellt[" +id+ "]");
	}		
});

mp.events.addCommand("atm",(player) => {
	gm.mysql.handle.query("INSERT INTO atms SET posX = ?, posY = ?, posZ = ?",[player.position.x,player.position.y,player.position.z], function(err,res) {
		if (err) console.log("Error in Create ATM: "+err);
		mp.blips.new(108, new mp.Vector3(player.position.x,player.position.y,player.position.z),
		{
			name: "ATM",
			color: 25,
			scale: 1,
			shortRange: true,
		});
	});
});

mp.events.addCommand("addcloth",(player) => {
	gm.mysql.handle.query("INSERT INTO savedclothes SET posX = ?, posY = ?, posZ = ?, posR = ?",[player.position.x,player.position.y,player.position.z,player.heading], function(err,res) {
		if (err) console.log("Error in Create ATM: "+err);
	});
});

mp.events.addCommand("tank",(player) => {
	gm.mysql.handle.query("INSERT INTO tankstellen SET posX = ?, posY = ?, posZ = ?",[player.position.x,player.position.y,player.position.z], function(err,res) {
		if (err) console.log("Error in Create ATM: "+err);
		mp.blips.new(361, new mp.Vector3(player.position.x,player.position.y,player.position.z),
		{
			name: "Tankstelle",
			color: 5,
			scale: 1,
			shortRange: true,
		});
	});
});

mp.events.addCommand("blip",(player, full, p1,p2,p3, p4) => {
	gm.mysql.handle.query("INSERT INTO blips SET posX = ?, posY = ?, name = ?, color = ?, blipid = ?, scale = ?",[player.position.x,player.position.y, p1, p2, p3, p4], function(err,res) {
		if (err) console.log("Error in Create ATM: "+err);
		mp.blips.new(p3, new mp.Vector3(player.position.x,player.position.y,player.position.z),
		{
			name: ""+p1,
			color: p2,
			scale: p4,
			shortRange: true,
		});
	});
});
mp.events.addCommand("weather",(player, full) => {
	mp.players.forEach((player) => {
		if (mp.players.exists(player)) {
			var newWeather = full;
			gm.weather.currentWeather = newWeather;
			mp.players.call("client:world:weatherUpdate", [newWeather]);
		}        
    });
});

mp.events.addCommand("car",(player, full, p1, p2, p3) => {
	gm.mysql.handle.query("INSERT INTO carshops SET posX = ?, posY = ?, posZ = ?, posR = ?, ped = ?, type = ?, name = ?",[player.position.x,player.position.y,player.position.z, player.heading, p1, p2, p3], function(err,res) {
		if (err) console.log("Error in Create ATM: "+err);
	});
});

mp.events.addCommand("msgserver", (player, fullText) => {
		 mp.players.forEach(
		 (player, id) => {
			player.call("ShowShardMessage", ["~r~Serverbenachrichtigung", fullText]);
		}
	);
});

mp.events.addCommand("msg", (player, fullText, p1) => {
    mp.players.forEach(
        (player, id) => {
            var message = fullText.replace(p1+" ", "");
            if(player.id == p1) {
                player.call("ShowShardMessage", ["~r~Adminbenachrichtigung", message]);
            }       
       }
    );
});

mp.events.addCommand("cars",(player, full, p1) => {
	gm.mysql.handle.query("UPDATE carshops SET spawnX = ?, spawnY = ?, spawnZ = ?, spawnR = ? WHERE id = ?",[player.position.x,player.position.y,player.position.z, player.heading, p1], function(err,res) {
		if (err) console.log("Error in Create ATM: "+err);
	});
});

mp.events.addCommand("shop",(player, full, p1) => {
	gm.mysql.handle.query("INSERT INTO shops SET posX = ?, posY = ?, posZ = ?, posR = ?, ped = ?",[player.position.x,player.position.y,player.position.z, player.heading, p1], function(err,res) {
		if (err) console.log("Error in Create ATM: "+err);
		mp.blips.new(11, new mp.Vector3(player.position.x,player.position.y,player.position.z),
		{
			name: "ATM",
			color: 25,
			scale: 1,
			shortRange: true,
		});;
	});
});


mp.events.addCommand("addhousele",(player,full,p1,p2,p3) => {
	if (parseFloat(p1) == 1) {
		var inX =  266.0798645019531
		var inY = -1007.3365478515625
		var inZ = -101.00852966308594 
		var outfitX = 260.0909729003906
		var outfitY = -1004.0601196289062
		var outfitZ = -99.0085678100586 
	}
	var procent = parseFloat ( parseFloat(p2*1)* parseFloat(25).toFixed(2));
	var sellprice = parseFloat(parseFloat(procent*1) / parseFloat(100));
	gm.mysql.handle.query("INSERT INTO housing SET outX = ?, outY = ?, outZ = ?, inX = ?, inY = ?, inZ = ?, outfitX = ?, outfitY = ?, outfitZ = ?, price = ?, sellprice = ?, maxbuy = ?",[player.position.x,player.position.y,player.position.z,inX,inY,inZ,outfitX,outfitY,outfitZ,p2,sellprice,p3],function (err,res) {
		if (err) console.log("Error in Update Housing command on Lowend Apartments: "+err);
		player.notify("~g~Haus wurde erstellt");
	});
});

mp.events.addCommand("house",(player,full) => {
	var inX =  340.9412
	var inY =  437.1798
	var inZ =  149.3925
	var outfitX = 334.46
	var outfitY = 428.667
	var outfitZ = 145.57
var procent = parseFloat ( parseFloat(500000*1)* parseFloat(25).toFixed(2));
var sellprice = parseFloat(parseFloat(procent*1) / parseFloat(100));
gm.mysql.handle.query("INSERT INTO housing SET outX = ?, outY = ?, outZ = ?, inX = ?, inY = ?, inZ = ?, outfitX = ?, outfitY = ?, outfitZ = ?, price = ?, sellprice = ?, maxbuy = ?",[player.position.x,player.position.y,player.position.z,inX,inY,inZ,outfitX,outfitY,outfitZ,500000,sellprice,1],function (err,res) {
	if (err) console.log("Error in Update Housing command on Lowend Apartments: "+err);
	player.notify("~g~Haus wurde erstellt");
});
});

mp.events.addCommand("hgarage",(player,full,p1,p2,p3) => {
	if (parseFloat(p1) == 1) {
		var inX =  0
		var inY = -1004.193
		var inZ = -98.99 
		var intId = 1
	}
	if (parseFloat(p1) == 2) {
		var inX =  0
		var inY = -996
		var inZ = -99 
		var intId = 2
	}
	gm.mysql.handle.query("INSERT INTO housing_garages SET outX = ?, outY = ?, outZ = ?, inX = ?, inY = ?, inZ = ?,intId = ?",[player.position.x,player.position.y,player.position.z,inX,inY,inZ,intId],function (err,res) {
		if (err) console.log("Error in Update Housing command on Lowend Apartments: "+err);
		player.notify("~g~Garage wurde erstellt");
	});
});