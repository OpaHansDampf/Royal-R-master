function syncPosition() {
    /*mp.vehicles.forEach(
        (vehicle) => {
            if (!vehicle.position || (vehicle.position.x === 0 && vehicle.position.y === 0 && vehicle.position.z === 0) || (vehicle.position.x === null && vehicle.position.y === null && vehicle.position.z === null)){
                // Fahrzeug Position ist nicht gesynct oder 0,0,0
            } else {
                if (mp.vehicles.exists(vehicle)) {               
                    gm.mysql.handle.query("SELECT inaktive,posX,posY FROM vehicles WHERE id = ?",[vehicle.getVariable("vehId")], function(err4,res4) {
                        if (err4) console.log("Error in select Vehicles on vehiclesync: "+err4);
                        if (res4.length > 0) {
                            res4.forEach(function(veh) {
                                if(parseFloat(veh.posX).toFixed(1) == parseFloat(vehicle.position.x).toFixed(1)) {
                                    var newinaktive = parseFloat(parseFloat(res4[0].inaktive) + parseFloat(1));
                                    gm.mysql.handle.query("UPDATE vehicles SET inaktive = ? WHERE id = ?",[newinaktive,vehicle.getVariable("vehId")],function(err5,res5) {
                                        if (err5) console.log("Error in Update vehicles: "+err5);
                                    });
                                } else {
                                    gm.mysql.handle.query("UPDATE `vehicles` SET posX = ?, posY = ?, posZ = ?, posR = ?, inaktive = '0' WHERE id = ?", [vehicle.position.x, vehicle.position.y, vehicle.position.z, vehicle.rotation.z, vehicle.getVariable("vehId")], function (err, res) {
                                        if (err) console.log("Error in Update Vehicles position " + err);
                                    });
                                }
                            });
                        
                        }
                    });
                }
            }
        }
    );*/
    mp.players.forEach(
    (player, id) => {
        if (mp.players.exists(player)) {
        if (player.getVariable("state") == "INGAME") {
            if(player.vehicle) {            
                var posXsave = parseFloat(player.vehicle.position.x);
                var posYsave = parseFloat(player.vehicle.position.y);
                var posZsave = parseFloat(player.vehicle.position.z);
            } else {
            var posXsave = parseFloat(player.position.x);
                var posYsave = parseFloat(player.position.y);
                var posZsave = parseFloat(player.position.z);
                var rotation = parseFloat(player.heading);
            }
            var dimSave = parseInt(player.dimension);
            var healthSave = parseInt(player.health);
            var armor = parseInt(player.armour);
            if (healthSave > 100) {
                gm.mysql.handle.query("UPDATE accounts SET banned = '1' WHERE id = ?",[player.data.accountID],function(err3,res3) {
                    console.log("Error in Anticheat: "+err3);
                    gm.mysql.handle.query("SELECT note FROM acp_accountNotes WHERE accountID = ?",[player.data.accountID],function(err4,res4) {
                        if (err4) console.log("Error in select acoountnotes: "+err4);
                        if (res4.length > 0) {
                            console.log("Log: "+res4[0].note);
                            var accountnote = ""+res4[0].note+" [SERVER] Wurde vom Anti Cheat wegen Over Health gebannt";
                            gm.mysql.handle.query("UPDATE acp_accountNotes SET note = ? WHERE accountID = ?",[accountnote,player.data.accountID],function(err6,res6) {
                                if (err6) console.log("Error inUpdate accountnote: "+err6);
                            });
                        } else {
                            gm.mysql.handle.query("INSERT INTO acp_accountNotes SET accountID = ?, note = '[SERVER] Wurde vom Anti Cheat wegen Over Health gebannt'",[player.data.accountID],function(err5,res5) {
                                if (err5) console.log("Error in Insert: "+err5);
                            });
                        }
                    });
                    player.notify("~r~Unser Anticheat hat einen Cheat detected, du wurdest gebannt!");
                    player.kick();
                });
            }
            if(player.data.isSpawned == 1)
            {
                if(player.data.spawnTimer <2)
                {
                    player.data.spawnTimer +=1;
                }
                if(player.data.spawnTimer == 2)
                {
                    gm.mysql.handle.query("UPDATE characters SET armor = ?, health = ?,dimension = ?, posX = ?, posY = ? , posZ = ?,posR = ? WHERE id = ?", [armor,healthSave,dimSave,posXsave, posYsave, posZsave,rotation, player.data.charId], function (err, res) {
                        if (err) console.log("Error in Update Characters position " + err);
                    });
                    }
                }
            }
        } 
    }
    );   
}
setInterval(syncPosition, 30000);



function playerQuitHandler(player, exitType, reason) {
    if (mp.players.exists(player)) {
        if (player.data.charId !== null) {
            var dead = player.getVariable("isDead");
            if (dead == "true") {
                gm.mysql.handle.query("UPDATE characters SET isOnline = '0', health = '100', onlineId = NULL WHERE id = ?",[player.data.charId],function(err,res) {
                    if (err) console.log("Error in Update Quit "+err);
                    var datum = Math.floor(Date.now() / 1000);
                        gm.mysql.handle.query("INSERT INTO charLogouts SET time = ?,charId = ?",[datum,player.data.charId],function(err,res) {
                        if (err) console.log(err);
                        });
                });
            } else {
                gm.mysql.handle.query("UPDATE characters SET isOnline = '0', onlineId = NULL WHERE id = ?",[player.data.charId],function(err,res) {
                    if (err) console.log("Error in Update Quit "+err);
                    var datum = Math.floor(Date.now() / 1000);
                        gm.mysql.handle.query("INSERT INTO charLogouts SET time = ?,charId = ?",[datum,player.data.charId],function(err,res) {
                        if (err) console.log(err);
                        });
                });
            }        
        }   
    }     
  }
  mp.events.add("playerQuit", playerQuitHandler);


  mp.events.add('server:syncedPlayer:syncClothes', (player, playerToSync) => {
	if(mp.players.exists(player)) {
		if(mp.players.exists(playerToSync)) {
	    if (playerToSync.getVariable("state") == "INGAME") {
				if (playerToSync.data.prop0 == null) {
					playerToSync.setProp(0, parseInt(playerToSync.data.hat), parseInt(playerToSync.data.hattext));
				}
				if (playerToSync.data.prop1 == null) {
					playerToSync.setProp(1, parseInt(playerToSync.data.eye), parseInt(playerToSync.data.eyetext));
				}
			}
		}
	}
});

mp.events.add("server:paycheck:on",(player) => {
    gm.mysql.handle.query("UPDATE characters SET paycheck = '0' WHERE id = ?",[player.data.charId],function(err,res) {
        if (err) console.log(err);
        player.data.payCheck = 0;
        player.notify("~g~Paycheck~w~ Aktiviert!");
    });
});
mp.events.add("server:paycheck:off",(player) => {
    gm.mysql.handle.query("UPDATE characters SET paycheck = '1' WHERE id = ?",[player.data.charId],function(err,res) {
        if (err) console.log(err);
        player.data.payCheck = 1;
        player.notify("~g~Paycheck~r~ Deaktiviert!");
    });
});

// Wetter
gm.weather = {};
gm.weather.lastrain = 15;
gm.weather.currentWeather = 'EXTRASUNNY';

function changeWeather() {    
    let randomWeather = Math.random() * (20 - 1) + 1;
    let newWeather = 'EXTRASUNNY';
    if (randomWeather < 12) {
        newWeather = 'CLEAR';
    } else if (randomWeather > 11 && randomWeather <= 14) {
        newWeather = 'OVERCAST';
    } else if (randomWeather > 14 && randomWeather <= 16) {
        newWeather = 'FOGGY';
    } else if (randomWeather > 16 && randomWeather <= 18) {
        newWeather = 'CLOUDS';
    } else if (randomWeather > 18 && randomWeather <= 19) {
        newWeather = 'THUNDER';
    } else if (randomWeather > 19 && randomWeather <= 20) {
        newWeather = 'RAIN';
    }

    if (newWeather == 'RAIN' || newWeather == 'THUNDER') {
        if (gm.weather.lastrain > 0) {
            newWeather = 'CLEAR';
            gm.weather.lastrain = gm.weather.lastrain - 1;
        } else {
            gm.weather.lastrain = 24;
        }
    } else {
        gm.weather.lastrain = gm.weather.lastrain - 1;
    }

    gm.weather.currentWeather = newWeather;
    //gm.weather.currentWeather = "XMAS";
    mp.world.setWeatherTransition(gm.weather.currentWeather);

    mp.players.call("client:world:weatherUpdate", [gm.weather.currentWeather]);
}
setInterval(changeWeather, 1200000);
changeWeather();

function weatherSync() {
  var weather = "XMAS";
  mp.players.call("client:world:weatherUpdate", [gm.weather.currentWeather]);
}
setInterval(weatherSync, 60000);

function syncTime() {
    var date = new Date();
    mp.world.time.set(date.getHours(), date.getMinutes(), date.getSeconds());
}
setInterval(syncTime, 60000);
syncTime();



mp.events.add("updatePlayerNeeds", (player) => {
    if(mp.players.exists(player)) {
        if (player.getVariable("state") == "INGAME" && player.data.created == 1) {
            if(player.data.food > 100) {
                player.data.food = 100;
                var currentFood = parseInt(player.data.food);
                var newFood = currentFood - 1;
                player.data.food = newFood;
                //player.call("changeValue", ['food', newFood]);
                gm.mysql.handle.query('UPDATE characters SET food = ? WHERE id = ?', [newFood, player.data.charId], function (err, res, row) {
                    if (err) console.log("Error in UpdatePlayerNeeds(insert values food): " + err);
                    player.call("changeValue", ['food', player.data.food]);
                });                
            }
            else if (player.data.food < 100 || player.data.food == 100 || player.data.food > 0) {
                var currentFood = parseInt(player.data.food);
                var newFood = currentFood - 1;
                player.data.food = newFood;
                //player.call("changeValue", ['food', newFood]);
                gm.mysql.handle.query('UPDATE characters SET food = ? WHERE id = ?', [newFood, player.data.charId], function (err, res, row) {
                    if (err) console.log("Error in UpdatePlayerNeeds(insert values food): " + err);    
                    player.call("changeValue", ['food', player.data.food]);        
                });                
            }
            if(player.data.drink > 100) {
                player.data.drink = 100;
                var currentDrink = parseInt(player.data.drink);
                var newDrink = currentDrink - 2;
                player.data.drink = newDrink;
                //player.call("changeValue", ['drink', newDrink]);
                gm.mysql.handle.query('UPDATE characters SET drink = ? WHERE id = ?', [newDrink, player.data.charId], function (err2, res2, row2) {
                    if (err2) console.log("Error in UpdatePlayerNeeds(insert values drink): " + err2);
                    player.call("changeValue", ['drink', player.data.drink]); 
                });                
            }
            else if(player.data.drink < 100 || player.data.drink == 100 || player.data.drink > 0){
                var currentDrink = parseInt(player.data.drink);
                var newDrink = currentDrink - 2;
                player.data.drink = newDrink;
                //player.call("changeValue", ['drink', newDrink]);
                gm.mysql.handle.query('UPDATE characters SET drink = ? WHERE id = ?', [newDrink, player.data.charId], function (err2, res2, row2) {
                    if (err2) console.log("Error in UpdatePlayerNeeds(insert values drink): " + err2);
                    player.call("changeValue", ['drink', player.data.drink]); 
                });
            }
            if(player.data.drink == 0 || player.data.drink < 0){
                var lowDrink = 0;
                player.data.drink = lowDrink;
                //player.call("changeValue", ['drink', lowDrink]);
                gm.mysql.handle.query('UPDATE characters SET drink = ? WHERE id = ?', [lowDrink, player.data.charId], function (err2, res2, row2) {
                    if (err2) console.log("Error in UpdatePlayerNeeds(insert values drink): " + err2);
                    player.call("changeValue", ['drink', player.data.drink]); 
                });                
            }
            if(player.data.food == 0 || player.data.food < 0){
                var lowFood = 0;
                player.data.food = lowFood;
                //player.call("changeValue", ['food', lowFood]);
                gm.mysql.handle.query('UPDATE characters SET food = ? WHERE id = ?', [lowFood, player.data.charId], function (err2, res2, row2) {
                    if (err2) console.log("Error in UpdatePlayerNeeds(insert values drink): " + err2);
                    player.call("changeValue", ['food', player.data.food]);
                });                
                   
            }
        }     
    }
  });
  
  function updatePlayerNeeds() {
    mp.players.forEach((player, id) => {
      if(player.data.isPed === 0 && player.data.iclist == 1) {
        mp.events.call("updatePlayerNeeds", player);
      }
    });
  }
  
  setInterval(updatePlayerNeeds, 180000);


  /*function payCheck() {
    mp.players.forEach((player, id) => {
        if (mp.players.exists(player)) {        
      gm.mysql.handle.query("SELECT amount FROM bank_konten WHERE ownerId = ? AND firma = '0'", [player.data.charId], function(err, res) {
        if (err) console.log("Error in Select Bankkonten :"+err);
        if (player.data.payCheck == 0) {
            //Aufs Konto
            if (player.data.faction !== "Civillian") {
                if (player.data.firma == 0) {      
                    if (player.data.factionDuty == 1) {              
                        gm.mysql.handle.query("SELECT payCheck FROM payChecks WHERE faction = ? AND factionrang = ?",[player.data.faction, player.data.factionrang], function(err1,res1) {
                            if (err1) console.log("Error in Select Paychecks: "+err1);
                            var newAm = parseFloat(res1[0].payCheck + parseFloat(res[0].amount)).toFixed(2);  
                            gm.mysql.handle.query("UPDATE bank_konten SET amount = ? WHERE ownerId = ? AND firma = '0'", [newAm, player.data.charId], function(err2,res2) {
                                if (err2) console.log("Error in Update Bankkonten: "+err2);
                                player.data.bank = newAm;
                                player.notify("~g~Dir wurde ein Gehalt von ~w~"+res1[0].payCheck+"$ ~g~gezahlt!");
                            });
                        });      
                    }          
                } else {                    
                    gm.mysql.handle.query("SELECT payCheck FROM payChecks WHERE faction = ? AND factionrang = ?",[player.data.faction, player.data.factionrang], function(err1,res1) {
                        if (err1) console.log("Error in Select Paychecks: "+err1);
                        var newAm = parseFloat(res1[0].payCheck + parseFloat(res[0].amount)).toFixed(2);  
                        gm.mysql.handle.query("UPDATE bank_konten SET amount = ? WHERE ownerId = ? AND firma = '0'", [newAm, player.data.charId], function(err2,res2) {
                            if (err2) console.log("Error in Update Bankkonten: "+err2);
                            player.data.bank = newAm;
                            player.notify("~g~Dir wurde ein Gehalt von ~w~"+res1[0].payCheck+"$ ~g~gezahlt!");
                        });
                    });                    
                } 
            } else {
                gm.mysql.handle.query("SELECT payCheck FROM payChecks WHERE faction = ? AND factionrang = ?",[player.data.faction, player.data.factionrang], function(err1,res1) {
                    if (err1) console.log("Error in Select Paychecks: "+err1);
                    var newAm = parseFloat(res1[0].payCheck + parseFloat(res[0].amount)).toFixed(2);  
                    gm.mysql.handle.query("UPDATE bank_konten SET amount = ? WHERE ownerId = ? AND firma = '0'", [newAm, player.data.charId], function(err2,res2) {
                        if (err2) console.log("Error in Update Bankkonten: "+err2);
                        player.data.bank = newAm;
                        player.notify("~g~Dir wurde die Stütze von ~w~"+res1[0].payCheck+"$ ~g~gezahlt!");
                    });
                });
            }
        }  
      });
    }
    });      
}
  setInterval(payCheck, 3600000);*/
  
  function dbactive() {
      gm.mysql.handle.query("SELECT isOnline FROM characters WHERE id = '1'",[],function(err,res) {
        if (err) console.log(err);
        if (res.length > 0) {
            console.log("DB Status geupdated");
        }
      });
  }
  setInterval(dbactive, 1800000);

  function jump() {
    mp.players.forEach(
        (player, id) => {    
            if (mp.players.exists(player)) {
                let playerIsJumping = player.isJumping
                if (playerIsJumping) {
                    var jump = parseInt(parseInt(player.data.jumping) + parseInt(1)).toFixed(0);            
                    player.data.jumping = jump;  
                    if (jump > 2) {
                        player.notify("~p~Durchs dauernde hüpfen bist du ausgerutscht!");
                        player.call("ragdoll",[player]);
                        player.data.jumping = 0; 
                    }                
                } else {                
                    var jump = parseInt(parseInt(player.data.jumping) - parseInt(1)).toFixed(0);          
                    if (jump < 0) {
                        player.data.jumping = 0; 
                    }
                }
            }                  
        }
    );
}
setInterval(jump, 2000);




  function lossHealth() {
    mp.players.forEach(
        (player, id) => {
            if(player.health > 0) {
                if(player.data.food == 0 || player.data.food < 0) {
                    const lossAmount = 2;
                    newHealth = player.health - lossAmount;
                    player.health = newHealth;
                    if(newHealth < 0){
                        newHealth = 0;
                    }
                    gm.mysql.handle.query('UPDATE characters SET health = ? WHERE id = ?', [newHealth, player.data.charId], function (err2, res2, row2) {
                        if (err2) console.log("Error in UpdatePlayerNeeds(insert values drink): " + err2);
                    });
                }
                if(player.data.drink == 0 || player.data.drink < 0) {
                    const lossAmount = 2;
                    newHealth = player.health - lossAmount;
                    player.health = newHealth;
                    if(newHealth < 0){
                        newHealth = 0;
                    }                    
                    gm.mysql.handle.query('UPDATE characters SET health = ? WHERE id = ?', [newHealth, player.data.charId], function (err2, res2, row2) {
                        if (err2) console.log("Error in UpdatePlayerNeeds(insert values drink): " + err2);
                    });

                }
            }
            else if(player.health == 0){
                return;
            }
        }
    );
}
setInterval(lossHealth, 120000);
lossHealth();

function fuelUpdate() {
    mp.vehicles.forEach(
      (vehicle) => {
        if (vehicle) {
            if (mp.vehicles.exists(vehicle)) {
            if (vehicle.getVariable("vehId")) {
              let vehId = parseInt(vehicle.getVariable("vehId"));
              let fuel = vehicle.getVariable("fuel").toFixed(2);
              let km = vehicle.getVariable("Kilometer").toFixed(2);
              gm.mysql.handle.query('UPDATE vehicles SET fill = ?, km = ? WHERE id = ?', [fuel,km, vehId], function (err, res, row) {
                  if (err) console.log("Error in Fuel Update: " + err);
              });
            }          
        }      
    }
}
    );
  }  
setInterval(fuelUpdate, 30000);

mp.events.add("F2",(player) => {
    if(mp.players.exists(player)) {
        var usersInRange = [];
        mp.players.forEachInRange(player.position, 30,
            (_player) => {
                if(player != _player)
                {
                    if (player.dimension == _player.dimension) {
                        var _dist = _player.dist(player.position);
                        if(_dist < 30)
                        {
                            usersInRange.push({charId: _player.data.charId, name: ""+_player.data.firstname+" "+_player.data.lastname, distance: _dist});
                        }
                    }
                }
            }
        );

        var usersJson = JSON.stringify(usersInRange);
        if (usersJson !== "[]") {
            var ingameName = ""+player.data.firstname+" "+player.data.lastname;
            gm.mysql.handle.query("INSERT INTO meldungslogs (reportingid,reportingname,users) VALUES(?,?,?)",[player.data.charId,ingameName,usersJson],function(err,res) {
                if (err) console.log("Error in create Supportfall query: "+err);

                if (res) {
                    gm.mysql.handle.query("SELECT id FROM meldungslogs WHERE reportingid = ? ORDER BY id DESC LIMIT 1",[player.data.charId],function(err2,res2) {
                    if (err2) console.log("Error in get Supportfall ID Query: "+err2);

                    if (res2.length > 0) {
                      res2.forEach(function(supportfall) {
                        player.notify("~r~Deine Meldungs Nummer ist: "+supportfall.id);
                        setTimeout(function () {
                            if (mp.players.exists(player)) player.notify("~r~Deine Meldungs Nummer ist: "+supportfall.id);
                        }, 5000);
                      });
                    }
                  });
                }
            });
        } else {
            player.notify("~r~Keine Spieler in Reichweite.");
        }
      }
});

