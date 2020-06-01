require('./lspd/index.js');
require('./justiz/index.js');
require('./medic/index.js');
require('./lsc/index.js');
require('./nitroempire/index.js');
require('./tattoobrooks/index.js');
require('./VanillaUnicorn/index.js');
require('./pdm/index.js');
require('./acls/index.js');
require('./benny/index.js');
require('./mbt/index.js');
require('./tslafamillia/index.js');
require('./taxi/index.js');


mp.events.add("server:faction:loadmarker", (player) => {
	gm.mysql.handle.query('SELECT * FROM faction WHERE name = ?', [player.data.faction], function (error, results, fields) {
		for(let i = 0; i < results.length; i++) {
			if(player.data.faction == results[i].name)
			{
			player.call("LoadFactionDutyMarkers",[results[i].dutyX,results[i].dutyY,results[i].dutyZ]);
			player.call("LoadFactionClothesMarkers",[results[i].clothesX,results[i].clothesY,results[i].clothesZ]);
			player.call("LoadFactionEquipMarkers", [results[i].equipX,results[i].equipY,results[i].equipZ]);
			player.call("LoadFactionPCMarkers", [results[i].pcX,results[i].pcY,results[i].pcZ]);
			player.call("LoadFactionChiefMarkers", [results[i].chiefX,results[i].chiefY,results[i].chiefZ]);
			player.call("LoadFactionGaragenMarkers",[results[i].vehicleX,results[i].vehicleY,results[i].vehicleZ]);
			player.call("LoadFactionParkingMarkers",[results[i].parkX,results[i].parkY,results[i].parkZ]);
			}		
		}
	});	
});

mp.events.add("server:faction:duty", (player) => {
	if (player.data.factionDuty == 1) {
		gm.mysql.handle.query("UPDATE characters SET duty = '0' WHERE id = ? ", [player.data.charId], function (err, res) {
			if (err) console.log("Error in Update Duty :"+err);
			if(player.data.faction == "LSPD") { player.notifyWithPicture("Los Santos Police Department", "Dienst", "Du bist außer Dienst gegangen!","CHAR_CALL911"); }
			else if(player.data.faction === "Medic") { player.notifyWithPicture("Los Santos Medical Center", "Dienst", "Du bist außer Dienst gegangen!","CHAR_CALL911"); }
			else if(player.data.faction === "Justiz") { player.notifyWithPicture("Department of Justice", "Dienst", "Du bist außer Dienst gegangen!","CHAR_CALL911"); }
			else if(player.data.faction === "ACLS") { player.notifyWithPicture("Auto Club Los Santos", "Dienst", "Du bist außer Dienst gegangen!","CHAR_CALL911"); }
			else if(player.data.faction === "FIB") { player.notifyWithPicture("Federal Investigation Bureau", "Dienst", "Du bist außer Dienst gegangen!","CHAR_CALL911"); }
			player.data.factionDuty = 0;
			player.removeWeapon(0x8BB05FD7);
			player.removeWeapon(0x678B81B1);
			player.removeWeapon(0x3656C8C1);
			player.removeWeapon(0x99AEEB3B);
			player.removeWeapon(0x22D8FE39);
			player.removeWeapon(0x2BE6766B);
			player.removeWeapon(0x83BF0278);
			gm.mysql.handle.query("SELECT * FROM characters WHERE id = ?", [player.data.charId], function (err2, res20) {
				if (err2) console.log("Error in setModel + Clothes on Login");
				res20.forEach(function(modelData) {
					player.setProp(0,modelData.hat,modelData.hattext); //Hut
					player.setProp(1,modelData.eye,modelData.eyetext); //Brille
					player.setClothes(1,modelData.mask,modelData.masktext,0); //Masken
					player.setClothes(3,modelData.torso,0,0); //Torso
					player.setClothes(4,modelData.leg,modelData.legtext,0); //Hose
					player.setClothes(6,modelData.shoe,modelData.shoetext,0); //Schuhe
					player.setClothes(11,modelData.jacket,player.data.jackettext,0);//Jacke
					player.setClothes(8,modelData.shirt,modelData.shirttext,0); //Shirt
					player.setClothes(9,modelData.body,modelData.bodytext,0); //Body
					player.setClothes(7,modelData.accessoire,modelData.accessoiretext,2); // Accesior
					player.setClothes(10,0,1,2); // Decal
					player.setClothes(9,0,0,2); // Weste
					player.data.body = 0;
					player.data.bodytext = 0;
					player.data.decal = 0;
					player.data.decaltext = 1;
					player.data.hat = modelData.hat;
					player.data.hattext = modelData.hattext;
					player.data.eye = modelData.eye;
					player.data.eyetext = modelData.eyetext;
					player.data.mask = modelData.mask;
					player.data.masktext = modelData.masktext;
					player.data.torso = modelData.torso;
					player.data.jacket = modelData.jacket;
					player.data.jackettext = modelData.jackettext;
					player.data.leg = modelData.leg;
					player.data.legtext = modelData.legtext;
					player.data.shoe = modelData.shoe;
					player.data.shoetext = modelData.shoetext;
					player.data.shirt = modelData.shirt;
					player.data.shirttext = modelData.shirttext;
					player.data.accessoire = modelData.accessoire;
					player.data.accessoiretext = modelData.accessoiretext;
					player.data.decal = 0;
					player.data.decaltext = 0;
				});
				player.setVariable("factionDuty",0);
				player.call("client:TS-VoiceChat:addToRadio");				
			});			
		});
	} else {
		gm.mysql.handle.query("UPDATE characters SET duty = '1' WHERE id = ?", [player.data.charId], function(err1,res1) {
			if (err1) console.log("Error in Update Duty: "+err1);
			if(player.data.faction == "LSPD") { player.notifyWithPicture("Los Santos Police Department", "Dienst", "Du bist in den Dienst gegangen!","CHAR_CALL911"); }
			else if(player.data.faction === "Medic") { player.notifyWithPicture("Los Santos Medical Center", "Dienst", "Du bist in den Dienst gegangen!","CHAR_CALL911"); }
			else if(player.data.faction === "Justiz") { player.notifyWithPicture("Department of Justice", "Dienst", "Du bist in den Dienst gegangen!","CHAR_CALL911"); }
			else if(player.data.faction === "ACLS") { player.notifyWithPicture("Auto Club Los Santos", "Dienst", "Du bist in den Dienst gegangen!","CHAR_CALL911"); }
			else if(player.data.faction === "FIB") { player.notifyWithPicture("Federal Investigation Bureau", "Dienst", "Du bist in den Dienst gegangen!","CHAR_CALL911"); }
			player.data.factionDuty = 1;
			gm.mysql.handle.query("SELECT * FROM faction_weapons WHERE charId = ?", [player.data.charId], function (err6,res6) {
                if (err6) console.log("Error in Select Weapons on Login :"+err6);
                res6.forEach(function(weapon) {
                    if (player.data.factionDuty == 1) {
                        if (weapon.taser == 1) {
                            player.giveWeapon(0x3656C8C1, 0);
                        }
                        if (weapon.pistol == 1) {
                            player.giveWeapon(0x99AEEB3B, 100);
                        }
                        if (weapon.appistol == 1) {
                            player.giveWeapon(0x22D8FE39, 150);
                        }
                        if (weapon.smg == 1) {
                            player.giveWeapon(0x2BE6766B, 200);
                        }
                        if (weapon.karabiner == 1) {
                            player.giveWeapon(0x83BF0278, 200);
                        }
                        if (weapon.taschenlampe == 1) {
                            player.giveWeapon(0x8BB05FD7, 0);
                        }
                        if (weapon.schlagstock == 1) {
                            player.giveWeapon(0x678B81B1, 0);
                        }
                        player.giveWeapon(0xA2719263, 0);
					}     
				});
				gm.mysql.handle.query("SELECT factioncloth FROM characters WHERE id = ?", [player.data.charId], function (err2, res20) {
					if (err2) console.log("Error in setModel + Clothes on Login");
					res20.forEach(function(modelData) {
						if(modelData.faction == "LSPD") { mp.events.call("server:lspd:clothes", player, modelData.factioncloth); }
						if(modelData.faction == "Medic") { mp.events.call("server:lsmc:clothes", player, modelData.factioncloth); }
					});
					player.setVariable("factionDuty",1);
					player.call("client:TS-VoiceChat:removeFromRadio");					
				});
			});                
		});
	}
});


mp.events.add("server:Global:showDispatch", (player, value, playerposx, playerposy, playerposz) => {
	if (mp.players.exists(player)) {
	  var dispatchid = 0;
	  dispatchid = "" + Math.floor(Math.random() * 5000);  
	  gm.mysql.handle.query("INSERT INTO faction_dispatches (faction,posx,posy,posz,dispatchid, von, active) VALUES (?,?,?,?,?,?,'Y')",[value,playerposx,playerposy,playerposz,dispatchid,player.data.charId], function (err, res) {
	  if(value == "Medics") {
		var sendDispatchTo = "Medic";
	  } else if (value == "lspd") {
		var sendDispatchTo = "LSPD";
		var sendDispatchTo2 = "FIB";
	  } else if (value == "acls") {
		var sendDispatchTo = "ACLS";
	  } else if (value == "AtmRob") {
	  } else if (value == "ShopRob") {
	} else if (value == "TankstellenRob") {
	} else if (value == "ortung") {
	}
	  mp.players.forEach(
		(receiver, id) => {
			if (receiver.data.faction == sendDispatchTo && receiver.data.factionDuty == 1 || receiver.data.faction == sendDispatchTo2 && receiver.data.factionDuty == 1) {
			  if(sendDispatchTo == "Medic") {
				receiver.call("client:medic:showDispatch", [playerposx, playerposy, playerposz, dispatchid]);
			  } else if (sendDispatchTo == "LSPD") {
				  player.notify("Neuer Dispatch eingegangen!");
				receiver.call("client:lspd:showDispatch", [playerposx, playerposy, playerposz, dispatchid]);
			  } else if (sendDispatchTo == "ACLS") {
				receiver.call("client:acls:showDispatch", [playerposx, playerposy, playerposz, dispatchid]);
			  }
			} else if (receiver.data.faction == "LSPD" && receiver.data.factionDuty == 1 && value == "FuelLSPD" || receiver.data.faction == "FIB" && receiver.data.factionDuty == 1 && value == "FuelLSPD") {
			  receiver.call("client:police:fuelstation", [playerposx, playerposy, playerposz, hint, hintType]);
			} else if (receiver.data.faction == "LSPD" && receiver.data.factionDuty == 1 && value == "AtmRob" || receiver.data.faction == "FIB" && receiver.data.factionDuty == 1 && value == "AtmRob") {
			  receiver.call("client:bank:atmrob", [playerposx, playerposy, playerposz]);
			} else if (receiver.data.faction == "LSPD" && receiver.data.factionDuty == 1 && value == "ShopRob" || receiver.data.faction == "FIB" && receiver.data.factionDuty == 1 && value == "ShopRob") {
			  receiver.call("client:shop:shoprob", [playerposx, playerposy, playerposz]);
			} else if (receiver.data.faction == "LSPD" && receiver.data.factionDuty == 1 && value == "TankstellenRob" || receiver.data.faction == "FIB" && receiver.data.factionDuty == 1 && value == "TankstellenRob") {
				receiver.call("client:tankstellen:tankstellenrob", [playerposx, playerposy, playerposz]);
			} else if (receiver.data.faction == "LSPD" && receiver.data.factionDuty == 1 && value == "ortung" || receiver.data.faction == "FIB" && receiver.data.factionDuty == 1 && value == "ortung") {
			receiver.call("client:lspd:showOrtung", [playerposx, playerposy, playerposz]);
			}	  
		}
	  );
	  }); 
	}
  });

  //Ticket ausstellen
mp.events.add("inputValueShop", (player, trigger, output, text) => {
    if(mp.players.exists(player)) {
      if(trigger === "Rechnung") {
        getNearestPlayer(player, 1);      
        if (mp.players.exists(currentTarget)) {
         gm.mysql.handle.query("SELECT amount FROM `bank_konten` WHERE ownerId = ?", [currentTarget.data.charId], function (err, res) {
            if (err) console.log("Error in get Player bank amount at lspd ticket: "+err);
           gm.mysql.handle.query("SELECT amount FROM `bank_konten` WHERE ownerId = ?", [player.data.charId], function (err1, res1) {
              if (err1) console.log("Error in get Player bank amount at staatskonto: "+err1);
              if (res.length > 0) {                
                  if (parseFloat(res[0].amount) >= parseFloat(output)) {
                    if(mp.players.exists(currentTarget)) currentTarget.call("client:rechnung:requestTicket",[player,output,res[0].amount,res1[0].amount]);
                    currentTarget.setVariable("kontoamount",res[0].amount);
                    player.setVariable("staatskonto", res1[0].amount);                    
                    player.playAnimation('mp_common', 'givetake2_a', 1, 49);
                    setTimeout(_ => {
                      if (mp.players.exists(player)) player.stopAnimation();
                    }, 2500);
                  } else {
                    if(mp.players.exists(player)) player.notify("Die Transaktion wurde wegen zu wenig Geld verweigert!");
                  }                
              }
            });
          });
        } else {
			player.notify("~r~Keiner in deiner Nähe!");
		}
      }
    }
  });

  mp.events.add("server:rechnung:payTicket", (player, cop,amount,accountamount, staatskonto) => {
    if(mp.players.exists(player) && mp.players.exists(cop)) {
      var newamount = parseFloat(parseFloat(accountamount) - parseFloat(amount));
      var staatamout = parseFloat(parseFloat(amount) + parseFloat(staatskonto));
      player.playAnimation('mp_common', 'givetake2_a', 1, 49);
      setTimeout(_ => {
        if (mp.players.exists(player)) player.stopAnimation();
      }, 2500);
  
      gm.mysql.handle.query("UPDATE `bank_konten` SET amount = ? WHERE ownerId = ? AND firma = '0'",[newamount,player.data.charId], function(err, res) {
        if (err) {
          console.log("Error in Pay LSPD Ticket Query: "+err);
          if(mp.players.exists(cop)) cop.notify("Die Banktransaktion wurde technisch abgebrochen.");
          if(mp.players.exists(player)) player.notify("Die Banktransaktion wurde technisch abgebrochen.");
        } else {
          gm.mysql.handle.query("UPDATE bank_konten SET amount = ? WHERE ownerId = ? AND firma = '0'", [staatamout, cop.data.charId], function(err1, res1) {
            if (err1) console.log("Error in Update Staatskonto: "+err1);

            var bs_timestamp = Math.floor(Date.now() / 1000);
            var bs_description = cop.data.faction+" Rechnung ("+player.data.firstname+" "+player.data.lastname+")";
            gm.mysql.handle.query("INSERT INTO bank_statements (fromCharId, toCharId, `date`, category, description, amount) VALUES (?, ?, ?, ?, ?, ?)", [cop.data.charId, player.data.charId, bs_timestamp, "Kartenzahlung", bs_description, "-"+parseFloat(amount)], function(err11, res11) {
            	if (err11) console.log("Error in Insert Bank Statements: "+err11);
            });

            gm.mysql.handle.query("INSERT INTO bank_statements (fromCharId, toCharId, `date`, category, description, amount) VALUES (?, ?, ?, ?, ?, ?)", [player.data.charId, cop.data.charId, bs_timestamp, "Kartenzahlung", bs_description, parseFloat(amount)], function(err12, res12) {
            	if (err12) console.log("Error in Insert Bank Statements: "+err12);
            });
          });
          if(mp.players.exists(cop)) cop.notify("Die Rechnung wurde bezahlt.");
          if(mp.players.exists(player)) player.notify("Du hast die Rechnung bezahlt.");
        }
      });
    }
  });
  
  mp.events.add("server:rechnung:dontPayTicket", (player, cop) => {
    if(mp.players.exists(player) && mp.players.exists(cop)) {
      cop.notify("Die Bezahlung wurde durch die Gegenpartei abgelehnt.");
      player.notify("Du hast die Bezahlung abgelehnt.");
      player.playAnimation('mp_common', 'givetake2_a', 1, 49);
      setTimeout(_ => {
        if (mp.players.exists(player)) player.stopAnimation();
      }, 2500);
    }
  });

  mp.events.add("server:faction:interaction", (player) => {	
    if(player.data.faction == "LSPD" && player.data.factionDuty == 1 && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:lspd:openMainMenu",[player.data.factionrang]);
	}  else
	if (player.data.faction == "Medic" && player.data.factionDuty == 1 && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:lsmc:openMainMenu",[player.data.factionrang]);
	} else
	if (player.data.faction == "Justiz" && player.data.factionDuty == 1 && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:justiz:openMainMenu",[player.data.factionrang]);
	} else
	if (player.data.faction == "ACLS" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:acls:openMainMenu",[player.data.factionrang]);
	} else
	if (player.data.faction == "LSC" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:lsc:openMainMenu",[player.data.factionrang]);
	} else
	if (player.data.faction == "NitroEmpire" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:nitroempire:openMainMenu",[player.data.factionrang]);
	} else
	if (player.data.faction == "TattooBrooks" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:tb:openMainMenu",[player.data.factionrang]);
	} else
	if (player.data.faction == "Fahrschule" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:fs:openMainMenu",[player.data.factionrang]);
	} else
	if (player.data.faction == "PSConstructions" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:ps:openMainMenu",[player.data.factionrang]);
	} else
	if (player.data.faction == "VanillaUnicorn" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:vu:openMainMenu",[player.data.factionrang]);
	} else
	if (player.data.faction == "FIB" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:fib:openMainMenu",[player.data.factionrang]);
	} else
	if (player.data.faction == "PDM" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:pdm:openMainMenu",[player.data.factionrang]);
	} else
	if (player.data.faction == "Bennys" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:bennys:openMainMenu",[player.data.factionrang]);
	} else
	if (player.data.faction == "MBT" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:mbt:openMainMenu",[player.data.factionrang]);
	}else
	if (player.data.faction == "TattooLaFamilia" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:tslf:openMainMenu",[player.data.factionrang]);
	}else
	if (player.data.faction == "Taxi" && player.data.mainmenu == false) {
		player.data.mainmenu = true;
		player.call("client:taxi:openMainMenu",[player.data.factionrang]);
	}
});

  var currentTarget = null;

function getNearestPlayer(player, range) {
    let dist = range;
    mp.players.forEachInRange(player.position, range,
        (_player) => {
            if (player != _player) {
                let _dist = _player.dist(player.position);
                if (_dist < dist) {
                    currentTarget = _player;
                    dist = _dist;
                }
            }
        }
    );
};