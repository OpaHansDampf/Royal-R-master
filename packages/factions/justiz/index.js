let duty = mp.colshapes.newSphere(119,-731,242, 1, 0);
let chief = mp.colshapes.newSphere(137,-760,258, 1, 0);
let pc = mp.colshapes.newSphere(126,-767,242, 1, 0);

mp.events.add("PushE", (player) => {
    if (mp.players.exists(player)) {
        if (player.data.faction == "Justiz") {
            if(pc.isPointWithin(player.position) && player.data.mainmenu == false) {
                player.call("client:justiz:createOfficeComputer",[player.data.factionrang]);
                player.data.mainmenu = true;
            }else if(duty.isPointWithin(player.position) && player.data.mainmenu == false) {
                mp.events.call("server:faction:duty", player);
            }else if(chief.isPointWithin(player.position) && player.data.mainmenu == false && player.data.factionrang > 9) {
                player.call("client:justiz:createChiefMenu",[player.data.factionrang]);
                player.data.mainmenu = true;
            }
        }      
    }
  });



mp.events.add("server:justiz:mainMenu", (player,slot,name) => {
    getNearestPlayer(player, 2);   
	if(name == "Dienstausweis zeigen")
	{
        // Dienstausweis zeigen
        if (mp.players.exists(player)) {
            if(mp.players.exists(currentTarget)) {
                if (currentTarget !== null) {
                    player.notify("Du hast deinen Dienstausweis gezeigt.");
                    player.playAnimation('mp_common', 'givetake2_a', 1, 49);
                    currentTarget.call("client:dokumente:showjustiz",[player.data.firstname,player.data.lastname]);
                    setTimeout(_ => {
                        if (mp.players.exists(player)) player.stopAnimation();
                    }, 2500);           
                } else {
                    player.notify("~r~Keiner in deiner Nähe!");
                }
            }
        }
               
    }
    if (name == "Mitarbeiterverwaltung")
    {
        if(mp.players.exists(player)) player.call("client:justiz:openMemberMenu");
    }
    if (name == "Leitstelle")
    {
        if(mp.players.exists(player)) mp.events.call("server:phone:getLeitstelle",player,914);
    }
});

mp.events.add("server:justiz:entlassen", (player,itemText) => {
    if (mp.players.exists(player)) {
        getNearestPlayer(player, 2); 
        if (mp.players.exists(currentTarget)) {
            if(currentTarget !== null) {      
                if (currentTarget.data.faction == "Justiz") {
                    currentTarget.notifyWithPicture("Department of Justice", "Entlassung", "Deine Anstellung wurde beendet","CHAR_CALL911");
                    currentTarget.call("client:faction:delmarkers");
                    player.notifyWithPicture("Department of Justice", "Mitarbeiterverwaltung","Du hast "+currentTarget.data.firstname + " "+ currentTarget.data.lastname + " entlassen.","CHAR_CALL911");
                    currentTarget.data.faction = "Civillian";
                    currentTarget.data.factionDuty = 0;
                    currentTarget.data.factionrang = 0;
                    gm.mysql.handle.query("UPDATE characters SET faction = ?, duty = ?, factionrang = ?, factioncloth = 'Zivil' WHERE id = ?", [currentTarget.data.faction, currentTarget.data.factionDuty,currentTarget.data.factionrang,currentTarget.data.charId], function(err12, ress12) {
                        if(err12) console.log("Error in justiz Dismiss Member");
                    });
                    gm.mysql.handle.query("SELECT * FROM characters WHERE id = ?",[currentTarget.data.charId], function(err5,res5) {
                        if (err5) console.log("Error in Select Character: "+err5);
                        
                        res5.forEach(function(modelData) {
                            if (mp.players.exists(currentTarget)) {
                                currentTarget.setProp(0,modelData.hat,modelData.hattext); //Hut
                                currentTarget.setProp(1,modelData.eye,modelData.eyetext); //Brille
                                currentTarget.setClothes(1,modelData.mask,modelData.masktext,0); //Masken
                                currentTarget.setClothes(3,modelData.torso,0,0); //Torso
                                currentTarget.setClothes(4,modelData.leg,modelData.legtext,0); //Hose
                                currentTarget.setClothes(6,modelData.shoe,modelData.shoetext,0); //Schuhe
                                currentTarget.setClothes(11,modelData.jacket,player.data.jackettext,0);//Jacke
                                currentTarget.setClothes(8,modelData.shirt,modelData.shirttext,0); //Shirt
                                currentTarget.setClothes(9,modelData.body,modelData.bodytext,0); //Body
                            }                        
                        });                          
                    });
                } else {
                    if (mp.players.exists(player)) player.notify("~r~Die Person arbeitet nicht bei der Justiz!");
                }                
            }
        }          
    }      
});
mp.events.add("server:justiz:officeComputer", (player, itemText) => {
    if(itemText == "Aktive Mitarbeiter")
    {
        gm.mysql.handle.query("SELECT firstname,lastname,factionrang,onlineid FROM characters WHERE faction = 'Justiz' AND duty = '1'",[],function(err,res) {
            if(err) console.log("Error in Select Active justiz Members: "+err);
            if (res.length > 0) {
                var PlayerList = [];
                var i = 1;
                res.forEach(function(players) {
                    let obj = { "firstname": String(players.firstname), "lastname": String(players.lastname),"factionrang": String(players.factionrang), "onlineid": String(players.onlineId)};
                    PlayerList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if (mp.players.exists(player)) player.call("client:justiz:activeMemberList", [JSON.stringify(PlayerList)]);
                    }
                    i++;
                });
            } else {
                //Keine Spieler Online
            }
        });    
    } 
});

mp.events.add("inputValueShop", (player, trigger, output, text) => {
    if(mp.players.exists(player)) {
      if(trigger === "dienstnummerjustiz") {  
        getNearestPlayer(player, 2);  
          if (currentTarget !== null) {
              if (currentTarget.data.faction == "Justiz") {
                gm.mysql.handle.query("SELECT factiondn FROM characters WHERE faction = 'Justiz' AND factiondn = ?",[output],function(err,res) {
                    if (err) console.log("Error in Select Dienstnummer: "+err);
                    if (res.length > 0) {
                        player.notify("~r~Die Dienstnummer ist schon vergeben");
                    } else {
                        gm.mysql.handle.query("UPDATE characters SET factiondn = ? WHERE id = ?",[output,currentTarget.data.charId],function(err1,res1) {
                            if (err1) console.log("Error in Update Dienstnummer: "+err1);
                            player.notify("~g~Du hast die Dienstnummer "+output+" gegeben");
                            currentTarget.notify("~g~Du hast die Dienstnummer "+output+" bekommen");
                            currentTarget.data.factiondn = output;
                        });
                    }            
                });
              }  else {
                  player.notify("~r~Die Person ist nicht in der Justiz");
              }          
          } else {
              player.notify("~r~Keiner in deiner Nähe");
          }          
      }
    }
});

mp.events.add("server:justiz:befördern", (player,rank) => {
    if (mp.players.exists(player)) {
        getNearestPlayer(player,2);
        if (currentTarget !== null) {
            if (currentTarget.data.faction == "Justiz") {
                gm.mysql.handle.query("UPDATE characters SET factionrang = ? WHERE id = ?", [rank,currentTarget.data.charId], function (err,res) {
                    if (err) console.log("Error in Update Character Factionrank: "+err);
                    player.notify("~g~Die Person wurde auf "+rank+" gesetzt");
                    currentTarget.notify("Du wurdest auf Rang "+rank+" gesetzt");
                    currentTarget.data.factionrang = rank;                    
                });
            } else {
               if (mp.players.exists(player)) player.notify("~r~Die Person ist nicht in der Justiz");
            }
        } else {
            if (mp.players.exists(player)) player.notify("~r~Keiner in deiner Nähe");
        }
    }
});

mp.events.add("server:justiz:mitarbeiter",(player) => {
    gm.mysql.handle.query("SELECT firstname,lastname,factionrang,id FROM characters WHERE faction = 'Justiz'",[],function(err,res) {
        if (err) console.log("Error in Select Justiz Characters: "+err);
        if (res.length > 0) {
            var JustizList = [];
            var i = 1;
            res.forEach(function(justiz) {
                let obj = { "firstname": String(justiz.firstname), "lastname": String(justiz.lastname),"factionrang": String(justiz.factionrang), "id": String(justiz.id)};
                JustizList.push(obj);
                if (parseInt(i) == parseInt(res.length)) {
                    if (mp.players.exists(player)) player.call("client:justiz:Memberlist", [JSON.stringify(JustizList)]);
                }
                i++;
            });
        } else {   
            if (mp.players.exists(player)) player.notify("Es gibt keine Justiz Beamten");
        }
     });
});

mp.events.add("server:justiz:mitarbeiterentl",(player,id) => {
    gm.mysql.handle.query("SELECT * FROM characters WHERE id = ?",[id],function(err,res) {
        if (err) console.log("Error in Select Kündigen Char: "+err);
        res.forEach(function(justiz) {
            if (justiz.isOnline == 1) {
                gm.mysql.handle.query("UPDATE characters SET faction = 'Civillian', duty = '0', factionrang = '0', factioncloth = 'Zivil' WHERE id = ?",[id],function(err1,res1) {
                    if (err1) console.log("Error in Update Faction Char: "+err1);
                    mp.players.forEach(
                        (playerToSearch, id) => {
                            if (mp.players.exists(playerToSearch)) {
                                if (playerToSearch.id == justiz.onlineId) {                
                                    playerToSearch.data.faction = 'Civillian';
                                    playerToSearch.data.factionDuty = 0;
                                    playerToSearch.data.factionrang = 0;
                                    playerToSearch.setProp(0,justiz.hat,justiz.hattext); //Hut
                                    playerToSearch.setProp(1,justiz.eye,justiz.eyetext); //Brille
                                    playerToSearch.setClothes(1,justiz.mask,justiz.masktext,0); //Masken
                                    playerToSearch.setClothes(3,justiz.torso,0,0); //Torso
                                    playerToSearch.setClothes(4,justiz.leg,justiz.legtext,0); //Hose
                                    playerToSearch.setClothes(6,justiz.shoe,justiz.shoetext,0); //Schuhe
                                    playerToSearch.setClothes(11,justiz.jacket,justiz.jackettext,0);//Jacke
                                    playerToSearch.setClothes(8,justiz.shirt,justiz.shirttext,0); //Shirt
                                    playerToSearch.setClothes(9,justiz.body,justiz.bodytext,0); //Body
                                    playerToSearch.call("client:faction:delmarkers");
                                }    
                            }                                              
                        }                        
                    );
                   if (mp.players.exists(player)) player.notify("~g~Der Bürger wurde entlassen");
                });
            } else {
                gm.mysql.handle.query("UPDATE characters SET faction = 'Civillian', duty = '0', factionrang = '0', factioncloth = 'Zivil' WHERE id = ?",[id],function(err1,res1) {
                    if (err1) console.log("Error in Update Faction Char: "+err1);
                    if (mp.players.exists(player)) player.notify("~g~Der Bürger wurde entlassen");
                });
            }
        });
    });
});


mp.events.add("server:justiz:einstellen",(player) => {
    if(mp.players.exists(player)) {
        getNearestPlayer(player, 2); 
        if(mp.players.exists(currentTarget)) {
            if (currentTarget !== null) {
                if (currentTarget.data.faction == "Civillian") {
                    gm.mysql.handle.query("UPDATE characters SET faction = 'Justiz', factionrang = '1' WHERE id = ?",[currentTarget.data.charId], function (err,res) {
                        if (err) console.log("Error in Update Faction user: "+err);
                        player.notify("~g~Der Bürger wurde eingestellt");
                        currentTarget.notify("Sie wurden bei der Justiz eingestellt!");
                        currentTarget.data.faction = "Justiz";
                        currentTarget.data.factionDuty = 0;
                        currentTarget.data.factionrang = 1;
                        currentTarget.data.factiondn = 0;
                        gm.mysql.handle.query('SELECT * FROM faction WHERE name = ?', [currentTarget.data.faction], function (error, results, fields) {
                            for(let i = 0; i < results.length; i++) {
                                if(currentTarget.data.faction == results[i].name)
                                {
                                    if (mp.players.exists(currentTarget)) {
                                        currentTarget.call("LoadFactionDutyMarkers",[results[i].dutyX,results[i].dutyY,results[i].dutyZ]);
                                        currentTarget.call("LoadFactionClothesMarkers",[results[i].clothesX,results[i].clothesY,results[i].clothesZ]);
                                        currentTarget.call("LoadFactionEquipMarkers", [results[i].equipX,results[i].equipY,results[i].equipZ]);
                                        currentTarget.call("LoadFactionPCMarkers", [results[i].pcX,results[i].pcY,results[i].pcZ]);
                                        currentTarget.call("LoadFactionChiefMarkers", [results[i].chiefX,results[i].chiefY,results[i].chiefZ]);
                                        currentTarget.call("LoadFactionGaragenMarkers",[results[i].vehicleX,results[i].vehicleY,results[i].vehicleZ]);
                                        currentTarget.call("LoadFactionParkingMarkers",[results[i].parkX,results[i].parkY,results[i].parkZ]);
                                    }                                    
                                }				
                            }
                        });	            
                    });
                } else {    
                    if (mp.players.exists(player)) player.notify("~r~Der Bürger ist schon in einer Fraktion");
                } 
            } else {
                if (mp.players.exists(player)) player.notify("~r~Keiner in deiner Nähe");
            } 
        }          
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