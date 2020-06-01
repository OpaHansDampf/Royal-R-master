let pc = mp.colshapes.newSphere(-27.654624938964844,-1104.081787109375,26.422351837158203, 5, 0);
let chief = mp.colshapes.newSphere(-31.86248016357422,-1113.7772216796875,26.42235565185547, 5, 0);

mp.events.add("PushE", (player) => {
    if (mp.players.exists(player)) {
        if (player.data.faction == "PDM") {
            if(pc.isPointWithin(player.position) && player.data.mainmenu == false) {
                player.call("client:pdm:createOfficeComputer",[player.data.factionrang]);  
                player.data.mainmenu = true;
            } 
			if(chief.isPointWithin(player.position) && player.data.mainmenu == false && player.data.factionrang > 1) {
                player.call("client:pdm:createChiefMenu",[player.data.factionrang]);
                player.data.mainmenu = true;
            }
        }         
    }
  });


mp.events.add("server:pdm:mainMenu", (player,slot,name) => {
    getNearestPlayer(player, 2);   
    if (name == "Mitarbeiterverwaltung")
    {
        player.call("client:pdm:openMemberMenu");
    } 
});
mp.events.add("server:pdm:entlassen", (player,itemText) => {
    getNearestPlayer(player, 2);   
    if(currentTarget !== null) {    
        if (currentTarget.data.faction == "PDM") {
            currentTarget.notifyWithPicture("PDM", "Entlassung", "Deine Anstellung wurde beendet","CHAR_CALL911");
        currentTarget.call("client:pdm:delmarkers");
        player.notifyWithPicture("PDM", "Mitarbeiterverwaltung","Du hast "+currentTarget.data.firstname + " "+ currentTarget.data.lastname + " entlassen.","CHAR_CALL911");
        currentTarget.data.faction = "Civillian";
        currentTarget.data.factionDuty = 0;
        currentTarget.data.factionrang = 0;
        gm.mysql.handle.query("UPDATE characters SET faction = ?, duty = ?, factionrang = ?, factioncloth = 'Zivil',firma = '0' WHERE id = ?", [currentTarget.data.faction, currentTarget.data.factionDuty,currentTarget.data.factionrang,currentTarget.data.charId], function(err12, ress12) {
            if(err12) console.log("Error in justiz Dismiss Member");
        });
        gm.mysql.handle.query("SELECT * FROM characters WHERE id = ?",[currentTarget.data.charId], function(err5,res5) {
            if (err5) console.log("Error in Select Character: "+err5);
            
            res5.forEach(function(modelData) {
                currentTarget.setProp(0,modelData.hat,modelData.hattext); //Hut
                currentTarget.setProp(1,modelData.eye,modelData.eyetext); //Brille
                currentTarget.setClothes(1,modelData.mask,modelData.masktext,0); //Masken
                currentTarget.setClothes(3,modelData.torso,0,0); //Torso
                currentTarget.setClothes(4,modelData.leg,modelData.legtext,0); //Hose
                currentTarget.setClothes(6,modelData.shoe,modelData.shoetext,0); //Schuhe
                currentTarget.setClothes(11,modelData.jacket,player.data.jackettext,0);//Jacke
                currentTarget.setClothes(8,modelData.shirt,modelData.shirttext,0); //Shirt
                currentTarget.setClothes(9,modelData.body,modelData.bodytext,0); //Body
            });                          
        });
        }  else {
            player.notify("~r~Der Spieler arbeitet nicht bei der PDM!")
        } 
    }   
});

mp.events.add("server:pdm:befördern", (player,rank) => {
    if (mp.players.exists(player)) {
        getNearestPlayer(player,2);
        if (currentTarget !== null) {
            if (currentTarget.data.faction == "PDM") {
                gm.mysql.handle.query("UPDATE characters SET factionrang = ? WHERE id = ?", [rank,currentTarget.data.charId], function (err,res) {
                    if (err) console.log("Error in Update Character Factionrank: "+err);
                    player.notify("~g~Die Person wurde auf "+rank+" gesetzt");
                    currentTarget.notify("Du wurdest auf Rang "+rank+" gesetzt");
                    currentTarget.data.factionrang = rank;                    
                });
            } else {
                player.notify("~r~Die Person ist nicht bei PDM");
            }
        } else {
            player.notify("~r~Keiner in deiner Nähe");
        }
    }
});

mp.events.add("server:pdm:mitarbeiter",(player) => {
    gm.mysql.handle.query("SELECT firstname,lastname,factionrang,id FROM characters WHERE faction = 'PDM'",[],function(err,res) {
        if (err) console.log("Error in Select LSC Characters: "+err);
        if (res.length > 0) {
            var LSCList = [];
            var i = 1;
            res.forEach(function(justiz) {
                let obj = { "firstname": String(justiz.firstname), "lastname": String(justiz.lastname),"factionrang": String(justiz.factionrang), "id": String(justiz.id)};
                LSCList.push(obj);
                if (parseInt(i) == parseInt(res.length)) {
                    if (mp.players.exists(player)) player.call("client:pdm:Memberlist", [JSON.stringify(LSCList)]);
                }
                i++;
            });
        } else {   
            player.notify("Es gibt keine PDM Mitarbeiter");
        }
     });
});

mp.events.add("server:pdm:mitarbeiterentl",(player,id) => {
    gm.mysql.handle.query("SELECT * FROM characters WHERE id = ?",[id],function(err,res) {
        if (err) console.log("Error in Select Kündigen Char: "+err);
        res.forEach(function(justiz) {
            if (justiz.isOnline == 1) {
                gm.mysql.handle.query("UPDATE characters SET faction = 'Civillian', duty = '0', factionrang = '0', factioncloth = 'Zivil',firma = '0' WHERE id = ?",[id],function(err1,res1) {
                    if (err1) console.log("Error in Update Faction Char: "+err1);
                    mp.players.forEach(
                        (playerToSearch, id) => {
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
                    );
                    playerToSearch.data.faction == 'Civillian';
                    playerToSearch.data.factionDuty == 0;
                    playerToSearch.data.factionrang == 0;
                    player.notify("~g~Der Bürger wurde entlassen");
                });
            } else {
                gm.mysql.handle.query("UPDATE characters SET faction = 'Civillian', duty = '0', factionrang = '0', factioncloth = 'Zivil',firma = '0' WHERE id = ?",[id],function(err1,res1) {
                    if (err1) console.log("Error in Update Faction Char: "+err1);
                    player.notify("~g~Der Bürger wurde entlassen");
                });
            }
        });
    });
});


mp.events.add("server:pdm:einstellen",(player) => {
    getNearestPlayer(player, 2);  
    if (currentTarget !== null) {
        if (currentTarget.data.faction == "Civillian") {
            gm.mysql.handle.query("UPDATE characters SET faction = 'PDM', factionrang = '1',firma = '1' WHERE id = ?",[currentTarget.data.charId], function (err,res) {
                if (err) console.log("Error in Update Faction user: "+err);
                player.notify("~g~Der Bürger wurde eingestellt");
                currentTarget.notify("Sie wurden bei PDM eingestellt!");
                currentTarget.data.faction = "PDM";
                currentTarget.data.factionDuty = 0;
                currentTarget.data.factionrang = 1;
                currentTarget.data.factiondn = 0;
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
    } else {
        player.notify("~r~Keiner in deiner Nähe");
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