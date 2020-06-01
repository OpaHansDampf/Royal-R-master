let tune = mp.colshapes.newSphere(2155, 2921, -61.90, 6, 0);
let klingel = mp.colshapes.newSphere(2110.570,2926.31,-61.90, 6, 0);
mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(tune.isPointWithin(player.position)) {
        if (player.data.iclist == 1) {
            player.position = new mp.Vector3(-1038, -2740, 13);
        } else {
            player.notify("~r~Du hast noch keine Staatsbürgerschaft!");
        }    
    } 
    if(klingel.isPointWithin(player.position)) {
        if (player.data.klingel == 0) {
            gm.mysql.handle.query("UPDATE characters SET klingel = '1' WHERE id = ?",[player.data.charId],function(err,res) {
                if (err) console.log(err);
                player.data.klingel = 1;
                player.notify("~g~Du hast geklingelt!");
                mp.players.forEach(
                    (playerToSearch, id) => {
                        if (playerToSearch.data.adminLvl > 0) {
                            playerToSearch.notify("~g~Es hat jemand im Einreisebüro geklingelt!");
                        }                      
                    }
                );
            });
        } else {
            player.notify("~r~Du hast bereits geklingelt!");
        }
    }     
  }
});

mp.events.add("server:admin:portBüro",(player) => {
    if (mp.players.exists(player)) {
        player.position = new mp.Vector3(2155, 2921, -61.90);
    }
});
mp.events.add("server:admin:listPlayer",(player) => {
    if (mp.players.exists(player)) {
        getNearestPlayer(player, 2);
        if(mp.players.exists(currentTarget)) {
            gm.mysql.handle.query("UPDATE accounts SET whitelisted = '1' WHERE id = ?",[currentTarget.data.accountID],function(err,res) {
                if(err) console.log(err);
                gm.mysql.handle.query("UPDATE characters SET whitelisted = '1', iclist = '1' WHERE id = ?",[currentTarget.data.charId],function(err1,res1) {
                    if (err1) console.log(err1);
                    currentTarget.data.iclist = 1;
                    player.notify("~g~Staatsbürgerschaft wurde gegeben!");
                    currentTarget.notify("~g~Du hast die Staatsbürgerschaft erhalten!");
                    currentTarget.setVariable("iclist",1);
                });
            });
        }
    } 
});

mp.events.add("server:playermenu:save1",(player) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT id FROM clothessets WHERE charId = ?", [player.data.charId],function(err,res) {
            if (err) console.log("error in select clothessets: "+err);
            if (res.length > 0) {
                gm.mysql.handle.query("UPDATE clothessets SET hat = ?, hattext = ?, eye = ?, eyetext = ?, mask = ?, masktext = ?, torso = ?, leg = ?, legtext = ?, shoe = ?, shoetext = ?, jacket = ?, jackettext = ?, shirt = ?, shirttext = ? WHERE charId = ?",[player.data.hat,player.data.hattext,player.data.eye,player.data.eyetext,player.data.mask,player.data.masktext,player.data.torso,player.data.leg,player.data.legtext,player.data.shoe,player.data.shoetext,player.data.jacket,player.data.jackettext,player.data.shirt,player.data.shirttext,player.data.charId], function(err1,res1) {
                    if (err1) console.log("Error in Update Characters Clothes: "+err1);
                    player.notify("~g~Du hast dir dein Kleidungsset gespeichert!");
                });
            } else {
                gm.mysql.handle.query("INSERT INTO clothessets SET hat = ?, hattext = ?, eye = ?, eyetext = ?, mask = ?, masktext = ?, torso = ?, leg = ?, legtext = ?, shoe = ?, shoetext = ?, jacket = ?, jackettext = ?, shirt = ?, shirttext = ?, charId = ?",[player.data.hat,player.data.hattext,player.data.eye,player.data.eyetext,player.data.mask,player.data.masktext,player.data.torso,player.data.leg,player.data.legtext,player.data.shoe,player.data.shoetext,player.data.jacket,player.data.jackettext,player.data.shirt,player.data.shirttext,player.data.charId], function(err1,res1) {
                    if (err1) console.log("Error in Update Characters Clothes: "+err1);
                    player.notify("~g~Du hast dir dein Kleidungsset gespeichert!");
                });
            }
        });
    }
});
mp.events.add("server:playermenu:save2",(player) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT id FROM clothessets WHERE charId = ?", [player.data.charId],function(err,res) {
            if (err) console.log("error in select clothessets: "+err);
            if (res.length > 0) {
                gm.mysql.handle.query("UPDATE clothessets SET hat2 = ?, hattext2 = ?, eye2 = ?, eyetext2 = ?, mask2 = ?, masktext2 = ?, torso2 = ?, leg2 = ?, legtext2 = ?, shoe2 = ?, shoetext2 = ?, jacket2 = ?, jackettext2 = ?, shirt2 = ?, shirttext2 = ? WHERE charId = ?",[player.data.hat,player.data.hattext,player.data.eye,player.data.eyetext,player.data.mask,player.data.masktext,player.data.torso,player.data.leg,player.data.legtext,player.data.shoe,player.data.shoetext,player.data.jacket,player.data.jackettext,player.data.shirt,player.data.shirttext,player.data.charId], function(err1,res1) {
                    if (err1) console.log("Error in Update Characters Clothes: "+err1);
                    player.notify("~g~Du hast dir dein Kleidungsset gespeichert!");
                });
            } else {
                gm.mysql.handle.query("INSERT INTO clothessets SET hat2 = ?, hattext2 = ?, eye2 = ?, eyetext2 = ?, mask2 = ?, masktext2 = ?, torso2 = ?, leg2 = ?, legtext2 = ?, shoe2 = ?, shoetext2 = ?, jacket2 = ?, jackettext2 = ?, shirt2 = ?, shirttext2 = ?, charId = ?",[player.data.hat,player.data.hattext,player.data.eye,player.data.eyetext,player.data.mask,player.data.masktext,player.data.torso,player.data.leg,player.data.legtext,player.data.shoe,player.data.shoetext,player.data.jacket,player.data.jackettext,player.data.shirt,player.data.shirttext,player.data.charId], function(err1,res1) {
                    if (err1) console.log("Error in Update Characters Clothes: "+err1);
                    player.notify("~g~Du hast dir dein Kleidungsset gespeichert!");
                });
            }
        });
    }
});

mp.events.add("server:playermenu:clothon1",(player) => {
    if (mp.players.exists(player)) {
        if (player.data.factionDuty == 0) {
            player.call('progress:start', [15, "Ziehe Kleidung an"]);     
            player.playAnimation('oddjobs@taxi@gyn@', 'idle_b_ped', 1, 33);                        
            setTimeout(_ => {
                if (mp.players.exists(player)) {
                    player.stopAnimation();
                    gm.mysql.handle.query("SELECT * FROM clothessets WHERE charId = ?",[player.data.charId],function(err,res) {
                        res.forEach(function(cloth) {
                            player.setProp(0,cloth.hat,cloth.hattext); //Hut
                            player.data.hat = cloth.hat;
                            player.data.hattext = cloth.hattext;
                            player.setProp(1,cloth.eye,cloth.eyetext); //Brille
                            player.data.eye = cloth.eye;
                            player.data.eyetext = cloth.eyetext;
                            player.setClothes(1,cloth.mask,cloth.masktext,0); //Masken
                            player.data.mask = cloth.mask;
                            player.data.masktext = cloth.masktext;
                            player.setClothes(3,cloth.torso,0,0); //Torso
                            player.data.torso = cloth.torso;
                            player.setClothes(4,cloth.leg,cloth.legtext,0); //Hose
                            player.data.leg = cloth.leg;
                            player.data.legtext = cloth.legtext;                
                            player.setClothes(6,cloth.shoe,cloth.shoetext,0); //Schuhe
                            player.data.shoe = cloth.shoe;
                            player.data.shoetext = cloth.shoetext;
                            player.setClothes(11,cloth.jacket,cloth.jackettext,0);//Jacke
                            player.data.jacket = cloth.jacket;
                            player.data.jackettext = cloth.jackettext;
                            player.setClothes(8,cloth.shirt,cloth.shirttext,0); //Shirt
                            player.data.shirt = cloth.shirt;
                            player.data.shirttext = cloth.shirttext;                
                        });   
                        gm.mysql.handle.query("UPDATE characters SET hat = ?, hattext = ?, eye = ?, eyetext = ?, mask = ?, masktext = ?, torso = ?, leg = ?, legtext = ?, shoe = ?, shoetext = ?, jacket = ?, jackettext = ?, shirt = ?, shirttext = ? WHERE id = ?",[player.data.hat,player.data.hattext,player.data.eye,player.data.eyetext,player.data.mask,player.data.masktext,player.data.torso,player.data.leg,player.data.legtext,player.data.shoe,player.data.shoetext,player.data.jacket,player.data.jackettext,player.data.shirt,player.data.shirttext,player.data.charId], function(err1,res1) {
                            if (err1) console.log("Error in Update Characters Clothes: "+err1);
                            player.notify("~g~Du hast dir Set 1 angezogen");
                        });                 
                    });                
                }                       
            }, 15000)
        } else {
            player.notify("~r~Du befindest dich im Dienst!");
        }        
    }
});
mp.events.add("server:playermenu:clothon2",(player) => {
    if (mp.players.exists(player)) {
        if (player.data.factionDuty == 0) {
            player.call('progress:start', [15, "Ziehe Kleidung an"]); 
            player.playAnimation('oddjobs@taxi@gyn@', 'idle_b_ped', 1, 33);                            
            setTimeout(_ => {
                if (mp.players.exists(player)) {
                    player.stopAnimation();
                    gm.mysql.handle.query("SELECT * FROM clothessets WHERE charId = ?",[player.data.charId],function(err,res) {
                        res.forEach(function(cloth) {
                            player.setProp(0,cloth.hat2,cloth.hattext2); //Hut
                            player.data.hat = cloth.hat2;
                            player.data.hattext = cloth.hattext2;
                            player.setProp(1,cloth.eye2,cloth.eyetext2); //Brille
                            player.data.eye = cloth.eye2;
                            player.data.eyetext = cloth.eyetext2;
                            player.setClothes(1,cloth.mask2,cloth.masktext2,0); //Masken
                            player.data.mask = cloth.mask2;
                            player.data.masktext = cloth.masktext2;
                            player.setClothes(3,cloth.torso2,0,0); //Torso
                            player.data.torso = cloth.torso2;
                            player.setClothes(4,cloth.leg2,cloth.legtext2,0); //Hose
                            player.data.leg = cloth.leg2;
                            player.data.legtext = cloth.legtext2;                
                            player.setClothes(6,cloth.shoe2,cloth.shoetext2,0); //Schuhe
                            player.data.shoe = cloth.shoe2;
                            player.data.shoetext = cloth.shoetext2;
                            player.setClothes(11,cloth.jacket2,cloth.jackettext2,0);//Jacke
                            player.data.jacket = cloth.jacket2;
                            player.data.jackettext = cloth.jackettext2;
                            player.setClothes(8,cloth.shirt2,cloth.shirttext2,0); //Shirt
                            player.data.shirt = cloth.shirt2;
                            player.data.shirttext = cloth.shirttext2;                
                        });
                        gm.mysql.handle.query("UPDATE characters SET hat = ?, hattext = ?, eye = ?, eyetext = ?, mask = ?, masktext = ?, torso = ?, leg = ?, legtext = ?, shoe = ?, shoetext = ?, jacket = ?, jackettext = ?, shirt = ?, shirttext = ? WHERE id = ?",[player.data.hat,player.data.hattext,player.data.eye,player.data.eyetext,player.data.mask,player.data.masktext,player.data.torso,player.data.leg,player.data.legtext,player.data.shoe,player.data.shoetext,player.data.jacket,player.data.jackettext,player.data.shirt,player.data.shirttext,player.data.charId], function(err1,res1) {
                            if (err1) console.log("Error in Update Characters Clothes: "+err1);
                            player.notify("~g~Du hast dir Set 2 angezogen");
                        });
                    });
                }                       
            }, 15000)
        } else {
            player.notify("~r~Du befindest dich im Dienst!");
        }        
    }
});






mp.events.add("server:playermenu:mainMenu",(player) => {
    if (player.data.mainmenu !== true) {
        player.call("client:playermenu:mainMenu",[player.data.adminLvl,player.data.ergeben,player.data.firstname,player.data.lastname,player.data.gang,player.data.gangrang,player.data.payCheck]);
        player.data.mainmenu = true;        
    }    
});

mp.events.add("server:admin:track",(player,targetid) => {
    mp.players.forEach(
        (playerToSearch, id) => {
            if (playerToSearch.id == targetid) {
                var x = playerToSearch.position.x;
                var y = playerToSearch.position.y;
                player.call("client:lspd:markdispatch",[x,y]);
            }                      
        }
    );  
});

mp.events.add("server:playermenu:givedokument",(player,name) => {
    if(mp.players.exists(player)) {
        getNearestPlayer(player, 2);
         if(mp.players.exists(currentTarget)) {
            if (currentTarget !== null) {
                if (name == "Ausweis zeigen") {
                    player.notify("Du hast deinen Ausweis gezeigt.");
                    player.playAnimation('mp_common', 'givetake2_a', 1, 49);
                    currentTarget.call("client:dokumente:showAusweis",[player.data.firstname,player.data.lastname,player.data.bday]);
                    setTimeout(_ => {
                        if (mp.players.exists(player)) player.stopAnimation();
                    }, 2500);
                } else 
                if (name == "Waffenschein A zeigen") {
                    player.notify("Du hast deinen Waffenschein gezeigt.");
                    player.playAnimation('mp_common', 'givetake2_a', 1, 49);
                    currentTarget.call("client:dokumente:showweapona",[player.data.firstname,player.data.lastname]);
                    setTimeout(_ => {
                        if (mp.players.exists(player)) player.stopAnimation();
                    }, 2500);
                } else
                if (name == "Waffenschein B zeigen") {
                    player.notify("Du hast deinen Waffenschein gezeigt.");
                    player.playAnimation('mp_common', 'givetake2_a', 1, 49);
                    currentTarget.call("client:dokumente:showweaponb",[player.data.firstname,player.data.lastname]);
                    setTimeout(_ => {
                        if (mp.players.exists(player)) player.stopAnimation();
                    }, 2500);
                } else
                if (name == "PKW Führerschein zeigen") {
                    player.notify("Du hast deinen Führerschein gezeigt.");
                    player.playAnimation('mp_common', 'givetake2_a', 1, 49);
                    currentTarget.call("client:dokumente:showdriver",[player.data.firstname,player.data.lastname]);
                    setTimeout(_ => {
                        if (mp.players.exists(player)) player.stopAnimation();
                    }, 2500);
                } else
                if (name == "LKW Führerschein zeigen") {
                    player.notify("Du hast deinen LKW Führerschein gezeigt.");
                    player.playAnimation('mp_common', 'givetake2_a', 1, 49);
                    currentTarget.call("client:dokumente:showlkw",[player.data.firstname,player.data.lastname]);
                    setTimeout(_ => {
                        if (mp.players.exists(player)) player.stopAnimation();
                    }, 2500);
                } else
                if (name == "Piloten Lizenz zeigen") {
                    player.notify("Du hast deinen Pilotenschein gezeigt.");
                    player.playAnimation('mp_common', 'givetake2_a', 1, 49);
                    currentTarget.call("client:dokumente:showpilot",[player.data.firstname,player.data.lastname]);
                    setTimeout(_ => {
                        if (mp.players.exists(player)) player.stopAnimation();
                    }, 2500);
                } else 
                if (name == "Job Lizenz zeigen") {
                    player.notify("Du hast deine Job Lizenz gezeigt.");
                    player.playAnimation('mp_common', 'givetake2_a', 1, 49);
                    currentTarget.call("client:dokumente:showjob",[player.data.firstname,player.data.lastname]);
                    setTimeout(_ => {
                        if (mp.players.exists(player)) player.stopAnimation();
                    }, 2500);
                }
            } else {
                player.notify("~r~Keiner in deiner Nähe!");
            }
        }
    }    
});

mp.events.add("server:admin:openAdmin",(player,admin) => {       
    player.call("client:admin:openAdmin",[player.data.adminLvl]);        
});

mp.events.add("server:admin:tpto",(player,targetid) => {
    mp.players.forEach(
        (playerToSearch, id) => {
            if (playerToSearch.id == targetid) {
                player.spawn(playerToSearch.position);
                player.dimension = playerToSearch.dimension;  
            }                      
        }
    );   
});

mp.events.add("server:admin:tphere",(player,targetid) => {
    mp.players.forEach(
        (playerToSearch, id) => {
            if (playerToSearch.id == targetid) {
                playerToSearch.spawn(player.position);
                playerToSearch.dimension = player.dimension;  
            }                      
        }
    );   
});

mp.events.add("server:Keybind:ergeben",(player) => {
    player.playAnimation("mp_am_hold_up","handsup_base",1,49);
    player.data.ergeben = 1;
}); 

mp.events.add("server:Keybind:notergeben",(player) => {
    player.stopAnimation();
    player.data.ergeben = 0;
});

mp.events.add("server:playermenu:interaction",(player) => {
    getNearestPlayer(player, 2);
    if (currentTarget !== null) {
        player.call("client:playermenu:interaction",[player.data.weapona, player.data.weaponb, player.data.pkw, player.data.lkw, player.data.pilot, player.data.job,currentTarget.data.ergeben]);
    } else {
        player.notify("~r~Mit wem willst du Interargieren?");
    }             
});

mp.events.add("server:admin:banwetter",(player,targetid) => {
    mp.players.forEach((player) => {
        var newWeather = "FOGGY";
        gm.weather.currentWeather = newWeather;
        mp.players.call("client:world:weatherUpdate", [newWeather]);
        setTimeout(_ => {
            if (mp.players.exists(player)) {
                var newWeather = "RAIN";
                gm.weather.currentWeather = newWeather;
                mp.players.call("client:world:weatherUpdate", [newWeather]);
                player.call("noosesound");
            }
            
        }, 30000); 
        setTimeout(_ => {
            if (mp.players.exists(player)) {
                var newWeather = "THUNDER";
                gm.weather.currentWeather = newWeather;
                mp.players.call("client:world:weatherUpdate", [newWeather]);
                player.call("noosesoundoff");
            }          
      }, 120000);  
    });
});

mp.events.add("server:admin:banwetteraus",(player,targetid) => {
    mp.players.forEach((player) => {
        var newWeather = "RAIN";
        gm.weather.currentWeather = newWeather;
        mp.players.call("client:world:weatherUpdate", [newWeather]);
        setTimeout(_ => {
            var newWeather = "FOGGY";
          gm.weather.currentWeather = newWeather;
          mp.players.call("client:world:weatherUpdate", [newWeather]);
        }, 30000);     
    });
});

mp.events.add("server:admin:permban",(player,targetid) => {
    mp.players.forEach(
        (playerToSearch, id) => {
            if (playerToSearch.id == targetid) {                
                gm.mysql.handle.query("UPDATE accounts SET banned = '1' WHERE id = ?",[playerToSearch.data.accountID],function(err,res) {
                    playerToSearch.call("ShowKickMessage","Du wurdest von einem Admin gebannt!");
                    playerToSearch.kick();
                });
            }                      
        }
    );   
});

mp.events.add("server:playermenu:variable",(player) => {
    player.data.mainmenu = false;
});

mp.events.add("server:admin:heal",(player) => {
    player.health = 100;
    player.data.health = 100;
    player.data.drink = 100;
    player.data.food = 100;
    player.call("changeValue", ['food', player.data.food]);
    player.call("changeValue", ['drink', player.data.drink]);  
});

mp.events.add("server:admin:armor",(player) => {
    player.armour = 100;
    player.data.armor = 100;
});

mp.events.add("server:admin:kick",(player,targetid) => {
    mp.players.forEach(
        (playerToSearch, id) => {
            if (playerToSearch.id == targetid) {             
                playerToSearch.kick();
            }                      
        }
    );   
});

mp.events.add("server:admin:playerlist",(player) => {
    gm.mysql.handle.query("SELECT firstname,lastname,onlineId FROM characters WHERE isOnline = '1'",[],function(err,res) {
        if(err) console.log("Error in Select Online Users: "+err);
        if (res.length > 0) {
            var PlayerList = [];
            var i = 1;
            res.forEach(function(players) {
                let obj = { "firstname": String(players.firstname), "lastname": String(players.lastname), "onlineid": String(players.onlineId)};
                PlayerList.push(obj);
                if (parseInt(i) == parseInt(res.length)) {
                    if (mp.players.exists(player)) player.call("client:admin:playerlist", [JSON.stringify(PlayerList)]);
                }
                i++;
            });
        } else {
            //Keine Spieler Online
        }
    });
});

mp.events.add("server:shortcut:openMenu",(player) => {
    gm.mysql.handle.query("SELECT * FROM shortcuts WHERE charId = ?",[player.data.charId],function(err,res) {
        if(err) console.log("Error in Select Online Users: "+err);
        if (res.length > 0) {
            var AnimList = [];
            var i = 1;
            res.forEach(function(anim) {
                let obj = { "num1name": String(anim.num1name), "num1anim": String(anim.num1anim), "num2name": String(anim.num2name), "num2anim": String(anim.num2anim), "num3name": String(anim.num3name), "num3anim": String(anim.num3anim), "num4name": String(anim.num4name), "num4anim": String(anim.num4anim), "num5name": String(anim.num5name), "num5anim": String(anim.num5anim), "num6name": String(anim.num6name), "num6anim": String(anim.num6anim), "num6name": String(anim.num6name), "num6anim": String(anim.num6anim), "num7name": String(anim.num7name), "num7anim": String(anim.num7anim), "num8name": String(anim.num8name), "num8anim": String(anim.num8anim), "num9name": String(anim.num9name), "num9anim": String(anim.num9anim)};
                AnimList.push(obj);
                if (parseInt(i) == parseInt(res.length)) {
                    if (mp.players.exists(player)) player.call("client:anim:openShortcut", [JSON.stringify(AnimList)]);
                }
                i++;
            });
        } else {
            //Keine Spieler Online
        }
    });
});

mp.events.add("server:shortcut:save",(player,name,id,p1,p2,p3,p4) => {
    if (id == 1) {
        gm.mysql.handle.query("UPDATE shortcuts SET num1animA = ?,num1animB = ?,num1animC = ?,num1animD = ?, num1name = ? WHERE charId = ?", [p1,p2,p3,p4,name,player.data.charId],function(err,res) {
            if (err) console.log("Error in Update Shorcuts: "+err);
            player.data.numpad1A = p1;
            player.data.numpad1B = p2;
            player.data.numpad1C = p3;
            player.data.numpad1D = p4;
            player.data.numpad1Name = name;
        });
    } else 
    if (id == 2) {
        gm.mysql.handle.query("UPDATE shortcuts SET num2animA = ?,num2animB = ?,num2animC = ?,num2animD = ?, num2name = ? WHERE charId = ?", [p1,p2,p3,p4,name,player.data.charId],function(err,res) {
            if (err) console.log("Error in Update Shorcuts: "+err);
            player.data.numpad2A = p1;
            player.data.numpad2B = p2;
            player.data.numpad2C = p3;
            player.data.numpad2D = p4;
            player.data.numpad2Name = name;
        });
    } else 
    if (id == 3) {
        gm.mysql.handle.query("UPDATE shortcuts SET num3animA = ?,num3animB = ?,num3animC = ?,num3animD = ?, num3name = ? WHERE charId = ?", [p1,p2,p3,p4,name,player.data.charId],function(err,res) {
            if (err) console.log("Error in Update Shorcuts: "+err);
            player.data.numpad3A = p1;
            player.data.numpad3B = p2;
            player.data.numpad3C = p3;
            player.data.numpad3D = p4;
            player.data.numpad3Name = name;
        });
    } else 
    if (id == 4) {
        gm.mysql.handle.query("UPDATE shortcuts SET num4animA = ?,num4animB = ?,num4animC = ?,num4animD = ?, num4name = ? WHERE charId = ?", [p1,p2,p3,p4,name,player.data.charId],function(err,res) {
            if (err) console.log("Error in Update Shorcuts: "+err);
            player.data.numpad4A = p1;
            player.data.numpad4B = p2;
            player.data.numpad4C = p3;
            player.data.numpad4D = p4;
            player.data.numpad4Name = name;
        });
    } else 
    if (id == 5) {
        gm.mysql.handle.query("UPDATE shortcuts SET num5animA = ?,num5animB = ?,num5animC = ?,num5animD = ?, num5name = ? WHERE charId = ?", [p1,p2,p3,p4,name,player.data.charId],function(err,res) {
            if (err) console.log("Error in Update Shorcuts: "+err);
            player.data.numpad5A = p1;
            player.data.numpad5B = p2;
            player.data.numpad5C = p3;
            player.data.numpad5D = p4;
            player.data.numpad5Name = name;
        });
    } else 
    if (id == 6) {
        gm.mysql.handle.query("UPDATE shortcuts SET num6animA = ?,num6animB = ?,num6animC = ?,num6animD = ?, num6name = ? WHERE charId = ?", [p1,p2,p3,p4,name,player.data.charId],function(err,res) {
            if (err) console.log("Error in Update Shorcuts: "+err);
            player.data.numpad6A = p1;
            player.data.numpad6B = p2;
            player.data.numpad6C = p3;
            player.data.numpad6D = p4;
            player.data.numpad6Name = name;
        });
    } else 
    if (id == 7) {
        gm.mysql.handle.query("UPDATE shortcuts SET num7animA = ?,num7animB = ?,num7animC = ?,num7animD = ?, num7name = ? WHERE charId = ?", [p1,p2,p3,p4,name,player.data.charId],function(err,res) {
            if (err) console.log("Error in Update Shorcuts: "+err);
            player.data.numpad7A = p1;
            player.data.numpad7B = p2;
            player.data.numpad7C = p3;
            player.data.numpad7D = p4;
            player.data.numpad7Name = name;
        });
    } else 
    if (id == 8) {
        gm.mysql.handle.query("UPDATE shortcuts SET num8animA = ?,num8animB = ?,num8animC = ?,num8animD = ?, num8name = ? WHERE charId = ?", [p1,p2,p3,p4,name,player.data.charId],function(err,res) {
            if (err) console.log("Error in Update Shorcuts: "+err);
            player.data.numpad8A = p1;
            player.data.numpad8B = p2;
            player.data.numpad8C = p3;
            player.data.numpad8D = p4;
            player.data.numpad8Name = name;
        });
    } else 
    if (id == 9) {
        gm.mysql.handle.query("UPDATE shortcuts SET num9animA = ?,num9animB = ?,num9animC = ?,num9animD = ?, num9name = ? WHERE charId = ?", [p1,p2,p3,p4,name,player.data.charId],function(err,res) {
            if (err) console.log("Error in Update Shorcuts: "+err);
            player.data.numpad9A = p1;
            player.data.numpad9B = p2;
            player.data.numpad9C = p3;
            player.data.numpad9D = p4;
            player.data.numpad9Name = name;
        });
    }
});


const walkingStyles = [
    {Name: "Normal", AnimSet: null},
    {Name: "Mutig", AnimSet: "move_m@brave"},
    {Name: "Zuversichtlich", AnimSet: "move_m@confident"},
    {Name: "Betrunken", AnimSet: "move_m@drunk@verydrunk"},
    {Name: "Fett", AnimSet: "move_m@fat@a"},
    {Name: "Gangster", AnimSet: "move_m@shadyped@a"},
    {Name: "Eile", AnimSet: "move_m@hurry@a"},
    {Name: "Verletzt", AnimSet: "move_m@injured"},
    {Name: "Eingeschüchtert", AnimSet: "move_m@intimidation@1h"},
    {Name: "Schnell", AnimSet: "move_m@quick"},
    {Name: "Traurig", AnimSet: "move_m@sad@a"},
    {Name: "Hart", AnimSet: "move_m@tool_belt@a"}
    
];

mp.events.add("requestWalkingStyles", (player) => {
    player.call("receiveWalkingStyles", [JSON.stringify(walkingStyles.map(w => w.Name))]);
});

mp.events.add("setWalkingStyle", (player, styleIndex) => {
    if (styleIndex < 0 || styleIndex >= walkingStyles.length) return;
    player.data.walkingStyle = walkingStyles[styleIndex].AnimSet;
    player.outputChatBox(`Walking style set to ${walkingStyles[styleIndex].Name}.`);
});


mp.events.add("server:clothes:showKleidung",(player) => {
    player.call("client:clothes:showKleidung",[player.data.gender]);
});

//Hut
mp.events.add("server:playermenu:setexistHut", (player) => {
    player.setProp(0,player.data.hat,player.data.hattext);
    player.data.prop0 = null;
});
mp.events.add("server:playermenu:setHut",(player,p1,p2,p3) => {
    player.setProp(p1,p2,p3);
    player.data.prop0 = p2;
});

//Brille
mp.events.add("server:playermenu:setexistEye",(player) => {
    player.setProp(1,player.data.eye,player.data.eyetext);
    player.data.prop1 = null;
});

mp.events.add("server:playermenu:setEye",(player,p1,p2,p3) => {
    player.setProp(p1,p2,p3);
    player.data.prop1 = p2;
});

//Maske
mp.events.add("server:playermenu:setexistMask",(player) => {
    player.setClothes(1,player.data.mask,player.data.masktext,0);
});

mp.events.add("server:playermenu:setMask",(player,p1,p2,p3) => {
    player.setClothes(p1,p2,p3,0);
});

//Torso
mp.events.add("server:playermenu:setexistTorso",(player) => {
    player.setClothes(3,player.data.torso,0,0);
    player.setClothes(8,player.data.shirt,player.data.shirttext,0);
    player.setClothes(11,player.data.jacket,player.data.jackettext,0);
    player.setClothes(9,player.data.body,player.data.bodytext,2);
    player.setClothes(10,player.data.decal,player.data.decaltext,2); // Decal
});
mp.events.add("server:playermenu:setOberkörper",(player,p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12) => {
    player.setClothes(p1,p2,p3,0);
    player.setClothes(p4,p5,p6,0);
    player.setClothes(p7,p8,p9,0);
    player.setClothes(p10,p11,p12,0);
    player.setClothes(10,0,0,2); // Decal
});

//Hose
mp.events.add("server:playermenu:setexistLeg",(player) => {
    player.setClothes(4,player.data.leg,player.data.legtext,0);
});
mp.events.add("server:playermenu:setLeg",(player,p1,p2,p3) => {
    player.setClothes(p1,p2,p3,0);
});

//Schuhe
mp.events.add("server:playermenu:setexistShoe",(player) => {
    player.setClothes(6,player.data.shoe,player.data.shoetext,0);
});
mp.events.add("server:playermenu:setShoe",(player,p1,p2,p3) => {
    player.setClothes(p1,p2,p3,0);
});


mp.events.add("server:playermenu:setexistEar", (player) => {
    player.setProp(2,player.data.earpice,0);
});
mp.events.add("server:playermenu:setEar",(player,p1,p2,p3) => {
    player.setProp(p1,p2,p3);
});
mp.events.add("server:playermenu:setexistArm", (player) => {
    player.setProp(7,player.data.arm,0);
    player.setProp(6,player.data.clock,0);
});
mp.events.add("server:playermenu:setArm",(player,p1,p2,p3,p4,p5,p6) => {
    player.setProp(p1,p2,p3);
    player.setProp(p4,p5,p6);
});
mp.events.add("server:playermenu:setexistAcce", (player) => {
    player.setClothes(7,player.data.accessoire,player.data.accessoiretext,0);
})
mp.events.add("server:playermenu:setAcce",(player,p1,p2,p3) => {
    player.setClothes(p1,p2,p3,0);
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

function getVehicleFromPosition(position, range) {
    const returnVehicles = [];
    mp.vehicles.forEachInRange(position, range,
        (vehicle) => {
            returnVehicles.push(vehicle);
        }
    );
    return returnVehicles;
}