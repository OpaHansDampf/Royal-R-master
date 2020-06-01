let duty = mp.colshapes.newSphere(1187.18, 2645.38, 38.3641, 2, 0); //ckeck
let clothes = mp.colshapes.newSphere(1196.8555, 2643, 37.82829, 2, 0); //Klamotten
let vehicle = mp.colshapes.newSphere(1179.609, 2646.27, 37.82829, 2, 0); //check
let pc = mp.colshapes.newSphere(1189.9288, 2651.27, 38, 2, 0); //check
let parkin = mp.colshapes.newSphere(1189.60986328125, 2657.606201171875, 37.83274459838867, 0); //check
let chief = mp.colshapes.newSphere(1169.7239990234375,2645.919189453125, 37.8099327087, 0); 

mp.events.add("PushE", (player) => {
    if (mp.players.exists(player)) {
        if (player.data.faction == "ACLS") {
            if(pc.isPointWithin(player.position) && player.data.mainmenu == false && player.data.factionrang > 2) {
                player.call("client:acls:createOfficeComputer",[player.data.factionrang]);
                player.data.mainmenu = true;
            } else if(vehicle.isPointWithin(player.position) && player.data.mainmenu == false) {
                player.call("client:acls:createVeichleMenu",[player.data.factionrang]);
                player.data.mainmenu = true;
            }else if(duty.isPointWithin(player.position) && player.data.mainmenu == false) {
                mp.events.call("server:faction:duty", player);
            }else if(chief.isPointWithin(player.position) && player.data.mainmenu == false && player.data.factionrang > 10) {
                player.call("client:acls:createChiefMenu",[player.data.factionrang]);
                player.data.mainmenu = true;
            }else if(parkin.isPointWithin(player.position) && player.data.mainmenu == false) {
                mp.events.call("server:acls:parkin",(player));
            }else if(clothes.isPointWithin(player.position) && player.data.mainmenu == false) {
                player.call("client:acls:clothes");
                player.data.mainmenu = true;
            }
        }      
    }
  });

mp.events.add("server:acls:clothes", (player,name) => {
    if (name == "Azubi-Klamotten") {                
        gm.mysql.handle.query("UPDATE characters SET factioncloth = 'Azubi-Klamotten' WHERE id = ?", [player.data.charId], function(err,res) {
            if (err) console.log("Error in Update Faction Clothes: "+err);
            gm.mysql.handle.query("SELECT * FROM characters WHERE id = ?",[player.data.charId], function(err5,res5) {
                if (err5) console.log("Error in Select Character: "+err5);                
                res5.forEach(function(modelData) {
                    if (mp.players.exists(player)) {
                        player.setProp(0,modelData.hat,modelData.hattext); //Hut
                        player.setProp(1,modelData.eye,modelData.eyetext); //Brille
                        player.data.hat = modelData.hat;
                        player.data.hattext = modelData.hattext;
                        player.data.eye = modelData.eye;
                        player.data.eyetext = modelData.eyetext;
                        if (player.data.gender == 0) {
                            player.setClothes(3,0,0,2); // Torso
                            player.data.torso = 0;
                            player.setClothes(8,15,0,2); // Shirt
                            player.data.shirt = 15;
                            player.data.shirttext = 0;
                            player.setClothes(11,65,0,2); // Jacke
                            player.data.jacket = 65;
                            player.data.jackettext = 0;
                            player.setClothes(4,38,0,2); // Hose
                            player.data.leg = 38;
                            player.data.legtext = 0;
                            player.setClothes(6,25,0,2); // Schuh
                            player.data.shoe = 25;
                            player.data.shoetext = 0;
                        } else {
                            player.setClothes(3,0,0,2); // Torso
                            player.data.torso = 0;
                            player.setClothes(8,6,0,2); // Shirt
                            player.data.shirt = 6;
                            player.data.shirttext = 0;
                            player.setClothes(11,59,0,2); // Jacke
                            player.data.jacket = 59;
                            player.data.jackettext = 0;
                            player.setClothes(4,38,0,2); // Hose
                            player.data.leg = 30;
                            player.data.legtext = 0;
                            player.setClothes(6,25,0,2); // Schuhe
                            player.data.shoe = 25;
                            player.data.shoetext = 0;
                        }
                    }                    
                });                        
           });                    
        });
    } else {
        if (name == "Arbeits-Klamotten") {
            gm.mysql.handle.query("UPDATE characters SET factioncloth = 'Arbeits-Klamotten' WHERE id = ?", [player.data.charId], function(err3,res3) {
                if (err3) console.log("Error in Update Faction Clothes: "+err3);
                if (mp.players.exists(player)) {
                    if (player.data.gender == 0) {//Männlich
                        player.setClothes(3,6,0,2); // Torso
                        player.data.torso = 0;
                        player.setClothes(8,15,0,2); // Shirt
                        player.data.shirt = 15;
                        player.data.shirttext = 0;
                        player.setClothes(11,244,18,2); // Jacke
                        player.data.jacket = 244;
                        player.data.jackettext = 0;
                        player.setClothes(4,98,16,2); // Hose
                        player.data.leg = 98;
                        player.data.legtext = 0;
                        player.setClothes(6,25,0,2); // Schuh
                        player.data.shoe = 25;
                        player.data.shoetext = 0;
                    } else {
                        player.setClothes(3,0,0,2); // Torso
                        player.data.torso = 0;
                        player.setClothes(8,15,0,2); // Shirt
                        player.data.shirt = 15;
                        player.data.shirttext = 0;
                        player.setClothes(11,252,18,2); // Jacke
                        player.data.jacket = 252;
                        player.data.jackettext = 0;
                        player.setClothes(4,101,16,2); // Hose
                        player.data.leg = 101;
                        player.data.legtext = 0;
                        player.setClothes(6,25,0,2); // Schuhe
                        player.data.shoe = 25;
                        player.data.shoetext = 0;
                    }
                }                                
            });
        } else {
            if (name == "Zivil") {
                gm.mysql.handle.query("UPDATE characters SET factioncloth = 'Zivil' WHERE id = ?", [player.data.charId], function(err4,res4) {
                    if (err4) console.log("Error in Update Faction Clothes: "+err4);
                    gm.mysql.handle.query("SELECT * FROM characters WHERE id = ?",[player.data.charId], function(err5,res5) {
                        if (err5) console.log("Error in Select Character: "+err5);                        
                        res5.forEach(function(modelData) {
                            if(mp.players.exists(player)) {
                                player.setProp(0,modelData.hat,modelData.hattext); //Hut
                                player.setProp(1,modelData.eye,modelData.eyetext); //Brille                            
                                player.setClothes(3,modelData.torso,0,0); //Torso
                                player.setClothes(4,modelData.leg,modelData.legtext,0); //Hose
                                player.setClothes(6,modelData.shoe,modelData.shoetext,0); //Schuhe
                                player.setClothes(11,modelData.jacket,player.data.jackettext,0);//Jacke
                                player.setClothes(8,modelData.shirt,modelData.shirttext,0); //Shirt
                                player.setClothes(9,modelData.body,modelData.bodytext,0); //Body                                                     
                                player.data.hat = modelData.hat;
                                player.data.hattext = modelData.hattext;
                                player.data.eye = modelData.eye;
                                player.data.eyetext = modelData.eyetext;
                                player.data.torso = modelData.torso;
                                player.data.jacket = modelData.jacket;
                                player.data.jackettext = modelData.jackettext;
                                player.data.leg = modelData.leg;
                                player.data.legtext = modelData.legtext;
                                player.data.shoe = modelData.shoe;
                                player.data.shoetext = modelData.shoetext;
                                player.data.shirt = modelData.shirt;
                                player.data.shirttext = modelData.shirttext;
                                if (player.data.gender == 0) {
                                    player.data.mask = 0;
                                    player.data.masktext = 0;
                                    player.data.body = 0;
                                    player.data.bodytext = 0;
                                    player.data.decal = 0;
                                    player.data.decaltext = 1;
                                } else {    
                                    player.data.mask = 121;
                                    player.data.masktext = 0;
                                    player.data.body = 0;
                                    player.data.bodytext = 0;
                                    player.data.decal = 0;
                                    player.data.decaltext = 1;
                                }
                            }                            
                        });                          
                   });                                   
               });                
            }
        }
    }
});


mp.events.add("server:acls:mainMenu", (player,slot) => {
    getNearestPlayer(player, 2);   
        if(slot == "Dienstausweis zeigen")
	{
        if (mp.players.exists(player)) {
            if (mp.players.exists(currentTarget)) {
                // Dienstausweis zeigen
                if (currentTarget !== null) {            
                    player.notify("Du hast deinen Dienstausweis gezeigt.");
                    player.playAnimation('mp_common', 'givetake2_a', 1, 49);
                    currentTarget.call("client:dokumente:showacls",[player.data.firstname,player.data.lastname,player.data.factiondn]);
                    setTimeout(_ => {
                        if (mp.players.exists(player)) player.stopAnimation();
                    }, 2500);            
                } else {
                    player.notify("~r~Keiner in deiner Nähe!");
                }
            }
        }       
    }
	else if(slot == "Mitarbeiterverwaltung")
	{
        if (mp.players.exists(player)) {
            player.call("client:acls:closeMainMenu");
		    player.call("client:acls:openMemberMenu");
        }       
    }
    else if (slot == "Dispatches") {
        if(mp.players.exists(player)) {
            gm.mysql.handle.query("SELECT * FROM faction_dispatches WHERE faction = 'ACLS' AND active = 'Y'", [], function(err, res) {
              if (err) console.log("ERROR in Select Dispatches: "+err);
                  if (res.length > 0) {
                      var i = 1;
                      let DisList = [];
                      res.forEach(function(dis) {
                          let obj = {"id": String(dis.id),"posx":dis.posx,"posy":dis.posy,"disid": String(dis.dispatchid)};
                          DisList.push(obj);
        
                          if (parseInt(i) == parseInt(res.length)) {
                              if(mp.players.exists(player)) player.call("client:acls:dispatchvewer", [JSON.stringify(DisList)]);
                          }
                          i++;
                      });
                  } else {
                      if(mp.players.exists(player)) player.call("client:acls:dispatchvewer", ["none"]);
                  }
              });
          }
    }   
    else if (slot == "Fahrzeug reparieren")
    {
        getNearestVehicle(player, 2);
        if (mp.players.exists(player)) {
            if (mp.players.exists(currentTarget)) {
                if(currentTarget !== null)
                {
                    player.playAnimation("amb@medic@standing@kneel@base","base",1,33);
                    player.call('progress:start', [30, "Fahrzeug reparieren"]);
                    setTimeout(_ => {  
                        if (mp.players.exists(player)) {
                            player.stopAnimation();
                            if(currentTarget)
                            {
                                var vehicles = getVehicleFromPosition(player.position, 3);
                                    if (vehicles.length > 0)
                                    {
                                        if (mp.vehicles.exists(vehicles[0]))
                                        {
                                            vehicles[0].repair();
                                            vehicles[0].setVariable("isDead","false");
                                            vehicles[0].setVariable("tanken","false");
                                            vehicles[0].setVariable("fuel",100);
                                            gm.mysql.handle.query("UPDATE vehicles SET fill = '100' WHERE id = ?",[id],function(err1,res1) 
                                            {
                                                gm.mysql.handle.query("UPDATE vehicles SET dead = 'false' WHERE id = ?",[id],function(err,res) {                                
                                                });
                                            }); 
                                        }
                                    }
                            }
                            player.notify("~g~Fahrzeug wurde repariert.");
                        }        
                    }, 30000);  
                }
            }
        }            
    }
    else if (slot == "Fahrzeug Abschleppen") {
        if(mp.players.exists(player)) {
            var vehicles = getVehicleFromPosition(player.position, 3);
            if (vehicles.length > 0) {
                if (mp.vehicles.exists(vehicles[0])) {
                var veh = vehicles[0];
                var id = veh.getVariable("vehId");
                    gm.mysql.handle.query("UPDATE vehicles SET parked = '1' , impounded = '3' WHERE id = ?", [id], function (err, res) {
                        if (err) console.log(err);
                        player.notify("~g~Du hast das Fahrzeug abgeschleppt!");
                        if (mp.vehicles.exists(veh)) {
                        veh.destroy();
                        }
                    });
                }
            }
        }
    }
	
});

mp.events.add("server:acls:mark", (player, id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT posx,posy FROM faction_dispatches WHERE id = ?", [id], function(err,res) {
            if(err) console.log("Error in Select Dispatch: "+err);
            player.call("client:acls:markdispatch", [res[0].posx, res[0].posy])
          });
    }    
  });
  
  mp.events.add("server:acls:deletedispatch", (player, id) => {
    gm.mysql.handle.query("UPDATE faction_dispatches SET active = 'N' WHERE id = ?", [id], function (err,res) {
      if(err) console.log("Error in Update Dispatch: "+err);
    });
  });
mp.events.add("server:acls:entlassen", (player,itemText) => {
    if (mp.players.exists(player)) {
        getNearestPlayer(player, 2);   
        if (mp.players.exists(currentTarget)) {
            if (currentTarget.data.faction == "ACLS") {
                if(currentTarget !== null) {        
                    currentTarget.notifyWithPicture("Auto Club Los Santos", "Entlassung", "Deine Anstellung wurde beendet","CHAR_CALL911");
                    currentTarget.call("client:faction:delmarkers");
                    player.notifyWithPicture("Auto Club Los Santos", "Mitarbeiterverwaltung","Du hast "+currentTarget.data.firstname + " "+ currentTarget.data.lastname + " entlassen.","CHAR_CALL911");
                    currentTarget.data.faction = "Civillian";
                    currentTarget.data.factionDuty = 0;
                    currentTarget.data.factionrang = 0;
                    gm.mysql.handle.query("UPDATE characters SET faction = ?, duty = ?, factionrang = ?, factioncloth = 'Zivil' WHERE id = ?", [currentTarget.data.faction, currentTarget.data.factionDuty,currentTarget.data.factionrang,currentTarget.data.charId], function(err12, ress12) {
                        if(err12) console.log("Error in ACLS Dismiss Member");
                    });
                    gm.mysql.handle.query("SELECT * FROM characters WHERE id = ?",[currentTarget.data.charId], function(err5,res5) {
                        if (err5) console.log("Error in Select Character: "+err5);
                        
                        res5.forEach(function(modelData) {
                            if(mp.players.exists(currentTarget)) {
                                currentTarget.setProp(0,modelData.hat,modelData.hattext); //Hut
                                currentTarget.data.faction = 'Civillian';
                                currentTarget.data.factionDuty = 0;
                                currentTarget.data.factionrang = 0;
                                currentTarget.setVariable("factionDuty",0);
                                currentTarget.setVariable("faction","Civillian");
                                currentTarget.setProp(1,modelData.eye,modelData.eyetext); //Brille
                                currentTarget.setClothes(1,modelData.mask,modelData.masktext,0); //Masken
                                currentTarget.setClothes(3,modelData.torso,0,0); //Torso
                                currentTarget.setClothes(4,modelData.leg,modelData.legtext,0); //Hose
                                currentTarget.setClothes(6,modelData.shoe,modelData.shoetext,0); //Schuhe
                                currentTarget.setClothes(11,modelData.jacket,currentTarget.data.jackettext,0);//Jacke
                                currentTarget.setClothes(8,modelData.shirt,modelData.shirttext,0); //Shirt
                                currentTarget.setClothes(9,modelData.body,modelData.bodytext,0); //Body
                                currentTarget.setClothes(7,modelData.accessoire,modelData.accessoiretext,2); // Accesior
                                currentTarget.setClothes(10,0,1,2); // Decal
                                currentTarget.setClothes(9,0,0,2); // Weste
                                currentTarget.data.body = 0;
                                currentTarget.data.bodytext = 0;
                                currentTarget.data.decal = 0;
                                currentTarget.data.decaltext = 1;
                                currentTarget.data.hat = modelData.hat;
                                currentTarget.data.hattext = modelData.hattext;
                                currentTarget.data.eye = modelData.eye;
                                currentTarget.data.eyetext = modelData.eyetext;
                                currentTarget.data.mask = modelData.mask;
                                currentTarget.data.masktext = modelData.masktext;
                                currentTarget.data.torso = modelData.torso;
                                currentTarget.data.jacket = modelData.jacket;
                                currentTarget.data.jackettext = modelData.jackettext;
                                currentTarget.data.leg = modelData.leg;
                                currentTarget.data.legtext = modelData.legtext;
                                currentTarget.data.shoe = modelData.shoe;
                                currentTarget.data.shoetext = modelData.shoetext;
                                currentTarget.data.shirt = modelData.shirt;
                                currentTarget.data.shirttext = modelData.shirttext;
                                currentTarget.data.accessoire = modelData.accessoire;
                                currentTarget.data.accessoiretext = modelData.accessoiretext;
                                currentTarget.data.decal = 0;
                                currentTarget.data.decaltext = 0;
                                currentTarget.call("client:faction:delmarkers");
                                gm.mysql.handle.query("UPDATE faction_weapons SET taser = '0',pistol = '0',appistol = '0',smg = '0',karabiner = '0',taschenlampe = '0',schlagstock = '0' WHERE charId = ?",[currentTarget.data.charId],function(err2,res2) {
                                    if (err2) console.log("error in update faction weapons: "+err2);
                                });
                            }                            
                        });                          
                    });
                } 
            }            
        }          
    }    
});


mp.events.add("server:acls:befördern", (player,rank) => {
    if (mp.players.exists(player)) {
        getNearestPlayer(player,2);
        if (mp.players.exists(currentTarget)) {
            if (currentTarget !== null) {
                if (currentTarget.data.faction == "ACLS") {
                    gm.mysql.handle.query("UPDATE characters SET factionrang = ? WHERE id = ?", [rank,currentTarget.data.charId], function (err,res) {
                        if (err) console.log("Error in Update Character Factionrank: "+err);
                        player.notify("~g~Die Person wurde auf "+rank+" gesetzt");
                        currentTarget.notify("Du wurdest auf Rang "+rank+" gesetzt");
                        currentTarget.data.factionrang = rank;                    
                    });
                } else {
                    player.notify("~r~Die Person ist nicht im ACLS");
                }
            } else {
                player.notify("~r~Keiner in deiner Nähe");
            }
        }        
    }
});


mp.events.add("server:acls:mitarbeiter",(player) => {
    gm.mysql.handle.query("SELECT firstname,lastname,factionrang,id FROM characters WHERE faction = 'ACLS'",[],function(err,res) {
        if (err) console.log("Error in Select ACLS Characters: "+err);
        if (res.length > 0) {
            var ACLSList = [];
            var i = 1;
            res.forEach(function(acls) {
                let obj = { "firstname": String(acls.firstname), "lastname": String(acls.lastname),"factionrang": String(acls.factionrang), "id": String(acls.id)};
                ACLSList.push(obj);
                if (parseInt(i) == parseInt(res.length)) {
                    if (mp.players.exists(player)) player.call("client:acls:Memberlist", [JSON.stringify(ACLSList)]);
                }
                i++;
            });
        } else {   
            if (mp.players.exists(player)) player.notify("Es gibt keine ACLS Beamten");
        }
     });
});

mp.events.add("server:acls:mitarbeiter",(player,id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM characters WHERE id = ?",[id],function(err,res) {
            if (err) console.log("Error in Select Kündigen Char: "+err);
            res.forEach(function(acls) {
                if (acls.isOnline == 1) {
                    gm.mysql.handle.query("UPDATE characters SET faction = 'Civillian', duty = '0', factionrang = '0', factioncloth = 'Zivil' WHERE id = ?",[id],function(err1,res1) {
                        if (err1) console.log("Error in Update Faction Char: "+err1);
                        mp.players.forEach(
                            (playerToSearch, id) => {
                                if (mp.players.exists(playerToSearch)) {
                                    if (playerToSearch.id == acls.onlineId) {                
                                        playerToSearch.data.faction = 'Civillian';
                                        playerToSearch.data.factionDuty = 0;
                                        playerToSearch.data.factionrang = 0;
                                        playerToSearch.setVariable("factionDuty",0);
                                        playerToSearch.setVariable("faction","Civillian");
                                        playerToSearch.setProp(1,acls.eye,acls.eyetext); //Brille
                                        playerToSearch.setClothes(1,acls.mask,acls.masktext,0); //Masken
                                        playerToSearch.setClothes(3,acls.torso,0,0); //Torso
                                        playerToSearch.setClothes(4,acls.leg,acls.legtext,0); //Hose
                                        playerToSearch.setClothes(6,acls.shoe,acls.shoetext,0); //Schuhe
                                        playerToSearch.setClothes(11,acls.jacket,playerToSearch.data.jackettext,0);//Jacke
                                        playerToSearch.setClothes(8,acls.shirt,acls.shirttext,0); //Shirt
                                        playerToSearch.setClothes(9,acls.body,acls.bodytext,0); //Body
                                        playerToSearch.setClothes(7,acls.accessoire,acls.accessoiretext,2); // Accesior
                                        playerToSearch.setClothes(10,0,1,2); // Decal
                                        playerToSearch.setClothes(9,0,0,2); // Weste
                                        playerToSearch.data.body = 0;
                                        playerToSearch.data.bodytext = 0;
                                        playerToSearch.data.decal = 0;
                                        playerToSearch.data.decaltext = 1;
                                        playerToSearch.data.hat = acls.hat;
                                        playerToSearch.data.hattext = acls.hattext;
                                        playerToSearch.data.eye = acls.eye;
                                        playerToSearch.data.eyetext = acls.eyetext;
                                        playerToSearch.data.mask = acls.mask;
                                        playerToSearch.data.masktext = acls.masktext;
                                        playerToSearch.data.torso = acls.torso;
                                        playerToSearch.data.jacket = acls.jacket;
                                        playerToSearch.data.jackettext = acls.jackettext;
                                        playerToSearch.data.leg = acls.leg;
                                        playerToSearch.data.legtext = acls.legtext;
                                        playerToSearch.data.shoe = acls.shoe;
                                        playerToSearch.data.shoetext = acls.shoetext;
                                        playerToSearch.data.shirt = acls.shirt;
                                        playerToSearch.data.shirttext = acls.shirttext;
                                        playerToSearch.data.accessoire = acls.accessoire;
                                        playerToSearch.data.accessoiretext = acls.accessoiretext;
                                        playerToSearch.data.decal = 0;
                                        playerToSearch.data.decaltext = 0;
                                        playerToSearch.call("client:faction:delmarkers");
                                        playerToSearch.removeWeapon(0x8BB05FD7);
                                        playerToSearch.removeWeapon(0x678B81B1);
                                        playerToSearch.removeWeapon(0x3656C8C1);
                                        playerToSearch.removeWeapon(0x99AEEB3B);
                                        playerToSearch.removeWeapon(0x22D8FE39);
                                        playerToSearch.removeWeapon(0x2BE6766B);
                                        playerToSearch.removeWeapon(0x83BF0278);    
                                        gm.mysql.handle.query("UPDATE faction_weapons SET taser = '0',pistol = '0',appistol = '0',smg = '0',karabiner = '0',taschenlampe = '0',schlagstock = '0' WHERE charId = ?",[playerToSearch.data.charId],function(err2,res2) {
                                            if (err2) console.log("error in update faction weapons: "+err2);
                                        });
                                    } 
                                }                                                 
                            }                        
                        );
                        player.notify("~g~Der Bürger wurde entlassen");
                    });
                } else {
                    gm.mysql.handle.query("UPDATE characters SET faction = 'Civillian', duty = '0', factionrang = '0', factioncloth = 'Zivil' WHERE id = ?",[id],function(err1,res1) {
                        if (err1) console.log("Error in Update Faction Char: "+err1);
                        player.notify("~g~Der Bürger wurde entlassen");
                    });
                }
            });
        });
    }    
});



mp.events.add("server:acls:spawnVehicle",(player,type) => {
    const one = new mp.Vector3(1162.658569339, 2656.4572257812, 38.001583);
    const onehead = 273;
    const two = new mp.Vector3(1162.658569339, 2661.4572257812, 38.001583);
    const twohead = 273;
    const three = new mp.Vector3(1162.658569339, 2666.4572257812, 38.001583);
    const threehead = 273;
    const four = new mp.Vector3(1162.658569339, 2671.4572257812, 38.001583);
    const fourhead = 273;      
    if (getVehicleFromPosition(one, 3).length > 0) {    
        if (getVehicleFromPosition(two, 3).length > 0) {   
            if (getVehicleFromPosition(three, 3).length > 0) {     
                if (getVehicleFromPosition(four, 3).length > 0) {
                    player.notify("~r~Alle Garagenplätze sind Belegt");    
                    return; 
                }  else {
                var veh = mp.vehicles.new(parseFloat(type), four, {
                    heading: fourhead,
                    numberPlate: "ACLS",
                    locked: true,
                    engine: false,
                    dimension: 0
                });
                if (mp.players.exists(player)) {
                    if (mp.vehicles.exists(veh)) {
                        veh.setColorRGB(255,171,0,255,171,0);
                        player.notify("~g~Dein Fahrzeug steht auf Stellplatz 4");                
                        veh.setVariable("faction", "ACLS");
                        veh.setVariable("fuel",100);
                        veh.setVariable("fuelart","Diesel");
                        veh.setVariable("isDead","false");
                        veh.setVariable('Kilometer',0);
                        veh.setVariable("tanken","false");
                        veh.numberPlateType = 1;
                        veh.numberPlate = "ACLS";
                        veh.setMod(55, 2);
                        veh.setMod(18, 2);
                        veh.setMod(12, 2);
                        veh.setMod(11, 3);
                        veh.setMod(22, 0);
                        veh.setMod(40, 2);
                    }
                }                
                }                   
            } else {
                var veh = mp.vehicles.new(parseFloat(type), three, {
                    heading: threehead,
                    numberPlate: "ACLS",
                    locked: true,
                    engine: false,
                    dimension: 0
                });  
                if (mp.players.exists(player)) {
                    if (mp.vehicles.exists(veh)) {
                        veh.setColorRGB(255,171,0,255,171,0);
                        player.notify("~g~Dein Fahrzeug steht auf Stellplatz 3");                
                        veh.setVariable("faction", "ACLS");
                        veh.setVariable("fuel",100);
                        veh.setVariable("fuelart","Diesel");
                        veh.setVariable("isDead","false");
                        veh.setVariable('Kilometer',0);
                        veh.setVariable("tanken","false");
                        veh.numberPlateType = 1;
                        veh.numberPlate = "ACLS";
                        veh.setMod(55, 2);
                        veh.setMod(18, 2);
                        veh.setMod(12, 2);
                        veh.setMod(11, 3);
                        veh.setMod(22, 0);
                        veh.setMod(40, 2);
                    }
                }       
            }                
        } else {
            var veh = mp.vehicles.new(parseFloat(type), two, {
                heading: twohead,
                numberPlate: "ACLS",
                locked: true,
                engine: false,
                dimension: 0
            });    
            if (mp.players.exists(player)) {
                if (mp.vehicles.exists(veh)) {
                    veh.setColorRGB(255,171,0,255,171,0);
                    player.notify("~g~Dein Fahrzeug steht auf Stellplatz 2");                
                    veh.setVariable("faction", "ACLS");
                    veh.setVariable("fuel",100);
                    veh.setVariable("fuelart","Diesel");
                    veh.setVariable("isDead","false");
                    veh.setVariable('Kilometer',0);
                    veh.setVariable("tanken","false");
                    veh.numberPlateType = 1;
                    veh.numberPlate = "ACLS";
                    veh.setMod(55, 2);
                    veh.setMod(18, 2);
                    veh.setMod(12, 2);
                    veh.setMod(11, 3);
                    veh.setMod(22, 0);
                    veh.setMod(40, 2);
                }
            }       
        }  
    } else {
        var veh = mp.vehicles.new(parseFloat(type), one, {
            heading: onehead,
            numberPlate: "ACLS",
            locked: true,
            engine: false,
            dimension: 0
        });  
        if (mp.players.exists(player)) {
            if (mp.vehicles.exists(veh)) {
                veh.setColorRGB(255,171,0,255,171,0);
                player.notify("~g~Dein Fahrzeug steht auf Stellplatz 1");                
                veh.setVariable("faction", "ACLS");
                veh.setVariable("fuel",100);
                veh.setVariable("fuelart","Diesel");
                veh.setVariable("isDead","false");
                veh.setVariable('Kilometer',0);
                veh.setVariable("tanken","false");
                veh.numberPlateType = 1;
                veh.numberPlate = "ACLS";
                veh.setMod(55, 2);
                veh.setMod(18, 2);
                veh.setMod(12, 2);
                veh.setMod(11, 3);
                veh.setMod(22, 0);
                veh.setMod(40, 2);
            }
        }       
    }                        
});





mp.events.add("server:acls:einstellen",(player) => {
    if (mp.players.exists(player)) {
        getNearestPlayer(player, 2);    
        if (mp.players.exists(currentTarget)) {
            if (currentTarget.data.faction == "Civillian") {
                gm.mysql.handle.query("UPDATE characters SET faction = 'ACLS', factionrang = '1' WHERE id = ?",[currentTarget.data.charId], function (err,res) {
                    if (err) console.log("Error in Update Faction user: "+err);
                    player.notify("~g~Der Bürger wurde eingestellt");
                    currentTarget.notify("Sie wurden beim ACLS eingestellt!");
                    currentTarget.data.faction = "ACLS";
                    currentTarget.data.factionDuty = 0;
                    currentTarget.data.factionrang = 1;
                    currentTarget.data.factiondn = 0;
                    currentTarget.setVariable("faction","ACLS");
                    gm.mysql.handle.query('SELECT * FROM faction WHERE name = ?', [currentTarget.data.faction], function (error, results, fields) {
                        for(let i = 0; i < results.length; i++) {
                            if(currentTarget.data.faction == results[i].name)
                            {
                            currentTarget.call("LoadFactionDutyMarkers",[results[i].dutyX,results[i].dutyY,results[i].dutyZ]);
                            currentTarget.call("LoadFactionClothesMarkers",[results[i].clothesX,results[i].clothesY,results[i].clothesZ]);
                            currentTarget.call("LoadFactionEquipMarkers", [results[i].equipX,results[i].equipY,results[i].equipZ]);
                            currentTarget.call("LoadFactionPCMarkers", [results[i].pcX,results[i].pcY,results[i].pcZ]);
                            currentTarget.call("LoadFactionChiefMarkers", [results[i].chiefX,results[i].chiefY,results[i].chiefZ]);
                            currentTarget.call("LoadFactionGaragenMarkers",[results[i].vehicleX,results[i].vehicleY,results[i].vehicleZ]);
                            currentTarget.call("LoadFactionParkingMarkers",[results[i].parkX,results[i].parkY,results[i].parkZ]);
                            }	
                        }
                    });	            
                });
            } else {    
                player.notify("~r~Der Bürger ist schon in einer Fraktion");
            }
        }        
    }        
});

mp.events.add("server:acls:parkin",(player,x,y,z) => {
    if (mp.players.exists(player)) {
        const pos = new mp.Vector3(player.position);        
        const veh = getVehicleFromPosition(pos, 2)[0];
        if (mp.vehicles.exists(veh)) {
            veh.destroy();
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

function getNearestVehicle(player, range)
{
    let dist = range;
    mp.vehicles.forEachInRange(player.position, range,
        (_vehicle) => {
            let _dist = _vehicle.dist(player.position);
            if(_dist < dist){
                currentTarget = _vehicle;
                dist = _dist;
            }
        }
    );
};