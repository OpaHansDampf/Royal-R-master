//require('./houses.js');

mp.events.add("server:housing:loadmarker", (player) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query('SELECT * FROM housing WHERE 1=1', [], function (error, results, fields) {
            for(let i = 0; i < results.length; i++) {
                player.call("LoadHousingOutMarkers",[results[i].outX,results[i].outY,results[i].outZ]);	
                player.call("LoadHousingInMarkers",[results[i].inX,results[i].inY,results[i].inZ]);		
            }
            gm.mysql.handle.query('SELECT * FROM housing_garages WHERE 1=1', [], function (error, results, fields) {
                for(let i = 0; i < results.length; i++) {
                    player.call("LoadHousingOutMarkers",[results[i].outX,results[i].outY,results[i].outZ]);	                    	
                }
                gm.mysql.handle.query('SELECT * FROM housing_garint WHERE 1=1', [], function (error, results, fields) {
                    for(let i = 0; i < results.length; i++) {
                        player.call("LoadHousingInMarkers",[results[i].x,results[i].y,results[i].z]);                    	
                    }
                });
            });
        });	
    }		
});

mp.events.add("server:housing:garageout",(player) => {
    if (mp.players.exists(player)) {        
        /*gm.mysql.handle.query("SELECT intId FROM housing_garages WHERE id = ?",[id],function(err,res) {
            if (err) console.log("Error in Select: "+err);
            if (res.length > 0) {
                gm.mysql.handle.query("SELECT x,y,z FROM housing_garint WHERE id = ?",[res[0].intId],function(err2,res2) {
                    if (err2) console.log(err2);
                    if (player.vehicle) {
                        var veh = player.vehicle;
                        var seat = player.seat;
                        veh.position = new mp.Vector3(parseFloat(res2[0].x), parseFloat(res2[0].y), parseFloat(res2[0].z));
                        player.putIntoVehicle(veh, seat);
                        player.dimension = parseInt(id);
                        veh.dimension = parseInt(id);
                        player.call("setVehicle",[veh]);                    
                        veh.rotation = 50;
                    } else {
                        player.position = new mp.Vector3(res2[0].x, res2[0].y, res2[0].z);
                        player.dimension = parseInt(id);
                    }
                });               
            }
        });*/
        if (player.vehicle) {
                const veh = player.vehicle;
                if (mp.vehicles.exists(veh)) {
                if (veh === null) {
                    player.notify("~r~Kein Fahrzeug in der Einfahrt");
                    return;
                }
                gm.mysql.handle.query("SELECT * FROM vehicles WHERE id = ?",[veh.getVariable("vehId")], function(err1,res1) {
                    if (err1) console.log("Error in Select Vehicles: "+err1);
                    if (res1[0].charId == player.data.charId) {                
                        gm.mysql.handle.query("UPDATE vehicles SET parked = '1' WHERE id = ?",[veh.getVariable("vehId")], function(err2,res2) {
                            if (err2) console.log("Error in Update Vehicles: "+err2);
                            veh.destroy();
                        });
                    } else {
                        player.notify("~r~Hier ist kein Fahrzeug von dir");
                    }
                });        
            }
        } else {
            gm.mysql.handle.query("SELECT numberPlate,model,id FROM vehicles WHERE charId = ? AND parked = '1' AND impounded = '0'",[player.data.charId],function(err,res) {
                if(err) console.log("Error in Select vehicles :"+err);
                if (res.length > 0) {
                    var i = 1;
                    let VehList = [];
                    res.forEach(function(veh) {
                        let obj = {"numberPlate": String(veh.numberPlate), "model": String(veh.model), "id": String(veh.id)};
                        VehList.push(obj);
                        if (parseInt(i) == parseInt(res.length)) {
                            if (player.data.mainmenu == false) {
                                player.data.mainmenu = true;
                                if(mp.players.exists(player)) player.call("client:housing:parkoutmenu", [JSON.stringify(VehList)]);
                            }                             
                        }
                        i++;
                    });
                } else {
                    player.notify("~r~Du besitzt keine Fahrzeuge!");
                }
             });
        }        
    }
});

mp.events.add("server:housing:parkout",(player,id) => {
    if (mp.players.exists(player)) {
        console.log("T1");
        gm.mysql.handle.query("SELECT * FROM vehicles WHERE id = ?",[id],function(err1,res1) {
            if (err1) console.log("Error in Select Vehicles on Garage: "+err);
            console.log("T1");
                    const one = new mp.Vector3(player.position);
                    const onehead = player.heading;
                    console.log("T1");
                    gm.mysql.handle.query("SELECT * FROM vehicle_block WHERE model = ?",[res1[0].model],function(err3,res3) {
                    if (err3) console.log("Error in Select vehicleblock: "+err3);
                    console.log("T1");
                    if (res3.length > 0) {
                        if (res3[0].block == 1) {
                            player.notify("~r~Dieses Fahrzeug befindet sich in Winterwartung");
                        } else {
                                var veh = mp.vehicles.new(res1[0].model, player.position, {
                                    heading: onehead,
                                    numberPlate: res1[0].numberPlate,
                                    locked: true,
                                    engine: false,
                                    dimension: 0                     
                            });  
                            gm.mysql.handle.query("UPDATE vehicles SET parked = '0' WHERE id = ?",[id],function (err2,res2) {
                                if (err2) console.log("Error in Update vehicles: "+err);                    
                                veh.setVariable("vehId",res1[0].id);
                                veh.setVariable("fuel",res1[0].fill);
                                veh.setVariable("fuelart",res1[0].fuelart);
                                veh.setVariable("isDead",res1[0].dead);
                                veh.setVariable('Kilometer',res1[0].km);
                                veh.setVariable("tanken","false");
                                /*if(res1[0].neonEnabled == 1) {
                                    veh.neonEnabled = true;
                                    veh.setVariable("neon",true);
                                } else {
                                    veh.neonEnabled = false;
                                    veh.setVariable("neon",false)
                                }
                                veh.setNeonColor(parseInt(res1[0].neonr), parseInt(res1[0].neong), parseInt(res1[0].neonb));*/
                                if (res1[0].hlight !== 999) {
                                    veh.data.headlightColor = Number(res1[0].hlight);
                                }
                                veh.setTyreSmokeColor(Number(res1[0].wheelr), Number(res1[0].wheelg), Number(res1[0].wheelb));
                                veh.setColor(res1[0].pcolor, res1[0].scolor);
                                veh.setMod(48, res1[0].design);
                                veh.setMod(0, res1[0].spoiler);
                                veh.setMod(1, res1[0].front);
                                veh.setMod(2, res1[0].heck);
                                veh.setMod(3, res1[0].seite);
                                veh.setMod(4, res1[0].auspuff);
                                veh.setMod(5, res1[0].rahmen);
                                veh.setMod(6, res1[0].gitter);
                                veh.setMod(7, res1[0].haube);
                                veh.setMod(8, res1[0].kotfl);
                                veh.setMod(10, res1[0].dach);
                                veh.setMod(11, res1[0].motor);
                                veh.setMod(12, res1[0].bremsen);
                                veh.setMod(13, res1[0].getriebe);
                                veh.setMod(14, res1[0].hupe);
                                veh.setMod(15, res1[0].feder);
                                veh.setMod(18, res1[0].turbo);
                                veh.setMod(22, res1[0].xenon);
                                veh.setMod(23, res1[0].felgen);
                                veh.wheelColor = res1[0].wheelColor;
                                veh.windowTint = res1[0].windowTint;
                                veh.numberPlateType = 1;
                                veh.numberPlate = String(res1[0].numberPlate);
                                veh.engine = false;
                                veh.dimension = player.dimension;
                                player.putIntoVehicle(veh, -1);
                                player.notify("~g~Dein Fahrzeug wurde ausgeparkt");  
                            });                    
                                          
                    }
                    } else {
                            var veh = mp.vehicles.new(res1[0].model, player.position, {
                                heading: onehead,
                                numberPlate: res1[0].numberPlate,
                                locked: true,
                                engine: false,
                                dimension: 0                       
                        });  
                        gm.mysql.handle.query("UPDATE vehicles SET parked = '0' WHERE id = ?",[id],function (err2,res2) {
                            if (err2) console.log("Error in Update vehicles: "+err);                    
                            veh.setVariable("vehId",res1[0].id);
                            veh.setVariable("fuel",res1[0].fill);
                            veh.setVariable("fuelart",res1[0].fuelart);
                            veh.setVariable("isDead",res1[0].dead);
                            veh.setVariable('Kilometer',res1[0].km);
                            veh.setVariable("tanken","false");
                            /*if(res1[0].neonEnabled == 1) {
                                veh.neonEnabled = true;
                                veh.setVariable("neon",true);
                            } else {
                                veh.neonEnabled = false;
                                veh.setVariable("neon",false)
                            }
                            veh.setNeonColor(parseInt(res1[0].neonr), parseInt(res1[0].neong), parseInt(res1[0].neonb));*/
                            veh.setColor(res1[0].pcolor, res1[0].scolor);
                            if (res1[0].hlight !== 999) {
                                veh.data.headlightColor = Number(res1[0].hlight);
                            }
                            veh.setTyreSmokeColor(Number(res1[0].wheelr), Number(res1[0].wheelg), Number(res1[0].wheelb));
                            veh.setMod(48, res1[0].design);
                            veh.setMod(0, res1[0].spoiler);
                            veh.setMod(1, res1[0].front);
                            veh.setMod(2, res1[0].heck);
                            veh.setMod(3, res1[0].seite);
                            veh.setMod(4, res1[0].auspuff);
                            veh.setMod(5, res1[0].rahmen);
                            veh.setMod(6, res1[0].gitter);
                            veh.setMod(7, res1[0].haube);
                            veh.setMod(8, res1[0].kotfl);
                            veh.setMod(10, res1[0].dach);
                            veh.setMod(11, res1[0].motor);
                            veh.setMod(12, res1[0].bremsen);
                            veh.setMod(13, res1[0].getriebe);
                            veh.setMod(14, res1[0].hupe);
                            veh.setMod(15, res1[0].feder);
                            veh.setMod(18, res1[0].turbo);
                            veh.setMod(22, res1[0].xenon);
                            veh.setMod(23, res1[0].felgen);
                            veh.wheelColor = res1[0].wheelColor;
                            veh.windowTint = res1[0].windowTint;
                            veh.numberPlateType = 1;
                            veh.numberPlate = String(res1[0].numberPlate);
                            veh.engine = false;
                            veh.dimension = player.dimension;
                            player.putIntoVehicle(veh, -1);
                            player.notify("~g~Dein Fahrzeug wurde ausgeparkt");  
                        });                
                    }                     
                });                                                      
        });
    }
});

mp.events.add("server:housing:garagein",(player,id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT outX,outY,outZ FROM housing_garages WHERE id = ?",[id],function(err,res) {
            if (err) console.log("Error in Select: "+err);
            if (res.length > 0) {
                if (player.vehicle) {
                    var veh = player.vehicle;
                    var seat = player.seat;
                    veh.position = new mp.Vector3(res[0].outX, res[0].outY, res[0].outZ);
                    player.putIntoVehicle(veh, seat);
                    player.dimension = parseInt(0);
                    veh.dimension = parseInt(0);
                    player.call("setVehicle",[veh]);
                    veh.rotation = 50;
                } else {
                    player.position = new mp.Vector3(res[0].outX, res[0].outY, res[0].outZ);
                    player.dimension = parseInt(0);
                }
            }
        });
    }
});

mp.events.add("server:housing:persmarker",(player) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM user_houses WHERE charId = ?",[player.data.charId], function (err,res) {
            if (err) console.log("Error in Select User Houses: "+err);
            if (res.length > 0) {
                for(let i = 0; i < res.length; i++) {
                    gm.mysql.handle.query("SELECT * FROM housing WHERE id = ?",[res[i].houseId],function(err1,res1) {
                        if (err1) console.log("Error in Select housing pos: "+err1);
                        for(let i = 0; i < res1.length; i++) {
                            player.call("LoadHousingOutBlips",[res1[i].outX,res1[i].outY,res1[i].outZ]);
                        }
                    });
                }
            }
        });
    }    
});

mp.events.add("server:housing:openMenu",(player,id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM housing WHERE id = ?",[id], function(err1,res1) {
            if (err1) console.log("Error in Select Housing: "+err1);       
            gm.mysql.handle.query("SELECT * FROM user_houses WHERE houseId = ? AND charId = ?",[id,player.data.charId], function(err,res) {
                if (err) console.log("Error in Select User Houses: "+err);
                if (res.length > 0) {                
                    player.call("client:housing:ownedHouse",[res[0].id,res1[0].sellprice, id,res[0].locked]);           
                } else {
                    player.call("client:housing:openMenu",[id,res1[0].price]);
                }   
            });
        }); 
    }    
});

mp.events.add("server:housing:outfitload",(player) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT outfit,id FROM user_outfits WHERE charId = ?", [player.data.charId],function(err,res) {
            if (err) console.log("Error in Select User Outfits: "+err);
            if (res.length > 0) {   
                var i = 1;
                let OutfitList = [];
                res.forEach(function(outfit) {
                    let obj = {"name": String(outfit.outfit), "id": String(outfit.id)};
                    OutfitList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:housing:outfits", [JSON.stringify(OutfitList)]);
                    }
                    i++;
                });
            } else {
                player.notify("~r~Du besitzt keine Outfits");
            }
        });
    }        
});

mp.events.add("server:housing:deleteoutfits",(player) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT outfit,id FROM user_outfits WHERE charId = ?", [player.data.charId],function(err,res) {
            if (err) console.log("Error in Select User Outfits: "+err);
            if (res.length > 0) {   
                var i = 1;
                let OutfitList = [];
                res.forEach(function(outfit) {
                    let obj = {"name": String(outfit.outfit), "id": String(outfit.id)};
                    OutfitList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:housing:deleteoutfits", [JSON.stringify(OutfitList)]);
                    }
                    i++;
                });
    
            } else {
                player.notify("~r~Du besitzt keine Outfits");
            }
        });
    }    
});

mp.events.add("server:housing:deleteoutfit", (player, id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("DELETE FROM user_outfits WHERE id = ?",[id], function(err,res) {
            if (err) console.log("Error in Delete Outfit: "+err);
            player.notify("~g~Dein Outfit wurde gelöscht");
        });
    }
});

mp.events.add("server:housing:id",(player,id) =>  {
    if (mp.players.exists(player)) player.setVariable("houseid",id);
});

mp.events.add('inputValueHouse', (player, trigger, output) => {
    if(trigger === "housingPin") {
        var id = player.getVariable("houseid");
        gm.mysql.handle.query("UPDATE user_houses SET pin = ? WHERE id = ?",[output,id], function(err,res) {
            if (err) console.log("Error in Update Pin: "+err);
            if(mp.players.exists(player)) player.notify("~g~Pin wurde geändert!");
        });
    }
});

mp.events.add('inputValueHouse', (player, trigger, output) => {
    if(trigger === "housingEnterPin") {
        if (output !== "") {
            var id = player.getVariable("houseid");
            gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?", [id], function(err,res) {
                if (err) console.log("Error in Select User Houses: "+err);
                if (res.length > 0) {
                    if (res[0].pin == output) {
                        gm.mysql.handle.query("SELECT * FROM housing WHERE id = ?",[res[0].houseId], function(err1,res1) {
                            if (err1) console.log("Error in Select housing: "+err1);
                            gm.mysql.handle.query("SELECT * FROM housing_interrior WHERE id = ?",[res1[0].interrior],function(err2,res2) {
                                if (err2) console.log("Error: "+err2);
                                player.position = new mp.Vector3(res2[0].posX,res2[0].posY,res2[0].posZ);
                                player.dimension = res[0].id;
                            });                    
                        });
                    } else {
                        player.notify("~r~Falscher Pin");
                    }                
                }
            });
        } else {
            player.notify("~r~Du musst auch einen Pin eingeben");
        }        
    }
});

mp.events.add("server:housing:anziehen", (player,id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM user_outfits WHERE id = ?", [id], function(err,res) {
            if (err) console.log("Error in Select User Outfits: "+err);
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
                player.notify("~g~Du hast dir dein Outfit angezogen"); 
            });   
        });
    }    
});

mp.events.add("inputValueText", (player, trigger, output, text) => {
    if(mp.players.exists(player)) {
      if(trigger === "outfitsave") {  
        gm.mysql.handle.query("INSERT INTO user_outfits SET outfit = ?, hat = ?, hattext = ?, eye = ?, eyetext = ?, mask = ?, masktext = ?, torso = ?, leg = ?, legtext = ?, shoe = ?, shoetext = ?, jacket = ?, jackettext = ?, shirt = ?, shirttext = ?, charId = ?",[output,player.data.hat,player.data.hattext,player.data.eye,player.data.eyetext,player.data.mask,player.data.masktext,player.data.torso,player.data.leg,player.data.legtext,player.data.shoe,player.data.shoetext,player.data.jacket,player.data.jackettext,player.data.shirt,player.data.shirttext,player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update Characters Clothes: "+err1);
            player.notify("~g~Du hast dir dein Outfit gespeichert!");
        });       
      }
    }
});

mp.events.add("server:housing:openInMenu",(player) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?", [player.dimension], function(err,res) {
            if (err) console.log("Error in Select Houses: "+err);
            if (res.length > 0) {
                player.call("client:housing:innen", [res[0].id]);
            }
        });
    }    
});


mp.events.add("server:housing:sellhouse",(player,id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?",[id], function(err,res) {
            if (err) console.log("Error in Select user houses: "+err);
            if (res.length > 0) {
                gm.mysql.handle.query("SELECT * FROM housing WHERE id = ?", [res[0].houseId], function(err1,res1) {
                    if (err1) console.log("Error in Select Housing: "+err1);
                    if (res1.length > 0) {
                        gm.mysql.handle.query("DELETE FROM user_houses WHERE id = ?",[id], function (err2,res2) {
                            if (err2) console.log("Error in Delete Houses: "+err2);
                            var newAm = parseFloat(res1[0].sellprice + parseFloat(player.data.bank)).toFixed(2);  
                            gm.mysql.handle.query("UPDATE bank_konten SET amount = ? WHERE ownerId = ? AND firma = '0'",[newAm,player.data.charId], function(err3,res3){
                                if (err3) console.log("Error in Update Bank_Konten: "+err3);

                                var bs_timestamp = Math.floor(Date.now() / 1000);
                                var bs_description = "Hausverkauf";
                                gm.mysql.handle.query("INSERT INTO bank_statements (toCharId, `date`, category, description, amount) VALUES (?, ?, ?, ?, ?)", [player.data.charId, bs_timestamp, "Gutschrift Überweisung", bs_description, res1[0].sellprice], function(err11, res11) {
                                    if (err11) console.log("Error in Insert Bank Statements: "+err11);
                                });

                                player.notify("~g~Du hast dein Haus verkauft für: "+res1[0].sellprice+" $");
                                player.data.bank = newAm;
                                mp.events.call("sqlLog", player, player.data.firstname+" "+player.data.lastname+" hat ein Haus für "+res1[0].sellprice+"$ verkauft.");
                            });                        
                        });
                    }
                });
            } else {
                player.notify("~r~Du besitzt dieses Haus nicht!");
            }
        });
    }    
});

mp.events.add("server:housing:buyhouse",(player,id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM housing WHERE id = ?",[id],function(err,res) {
            if (err) console.log("Error in Select Housing: "+err);
            if (res.length > 0) {
                gm.mysql.handle.query("SELECT COUNT(houseid) AS counter FROM user_houses WHERE houseid = ?",[id], function(err1,res1) {
                    if (err1) console.log("Error in Select user houses: "+err1);
                    if (res1[0].counter >= res[0].maxBuy) {
                        player.notify("~r~Dieses Haus ist Voll!");                    
                    } else {
                        gm.mysql.handle.query("SELECT * FROM bank_konten WHERE ownerId = ? AND firma = '0'",[player.data.charId],function(err2,res2) {
                            if (err2) console.log("Error in Select Bank Konten: "+err3);
                            if (res2.length > 0) {
                                if (res2[0].amount > res[0].price) {    
                                    var sign = ""+player.data.firstname+" "+player.data.lastname;
                                    gm.mysql.handle.query("INSERT INTO user_houses SET houseId = ?, charId = ?, locked = '0', sign = ?",[id, player.data.charId,sign], function (err3,res3) {
                                        if (err3) console.log("Error in Insert Houses: "+err3);
                                        var newAm = parseFloat(res2[0].amount - parseFloat(res[0].price)).toFixed(2);    
                                        gm.mysql.handle.query("UPDATE bank_konten SET amount = ? WHERE ownerId = ? AND firma = '0'",[newAm,player.data.charId],function(err4,res4) {
                                            if (err4) console.log("Error in Update Bank konten: "+err4);

                                            var bs_timestamp = Math.floor(Date.now() / 1000);
                                            var bs_description = "Hauskauf";
                                            gm.mysql.handle.query("INSERT INTO bank_statements (toCharId, `date`, category, description, amount) VALUES (?, ?, ?, ?, ?)", [player.data.charId, bs_timestamp, "Folgelastschrift", bs_description, "-"+res[0].price], function(err12, res12) {
                                                if (err12) console.log("Error in Insert Bank Statements: "+err12);
                                            });

                                            player.data.bank = newAm;
                                            mp.events.call("server:housing:persmarker",player);   
                                            player.notify("~g~Du hast ein neues Haus gekauft");
                                            mp.events.call("sqlLog", player, player.data.firstname+" "+player.data.lastname+" hat ein Haus für "+res[0].price+"$ gekauft.");
                                        });
                                    });
                                } else {
                                    player.notify("~r~Du hast nicht genügend Geld auf der Bank");
                                }
                            } else {
                                player.notify("~r~Du besitzt kein Bank Konto");
                            }
                        });
                    }
                });
            }
        });
    }    
});

mp.events.add("server:housing:enterHouse",(player,id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?", [id], function(err,res) {
            if (err) console.log("Error in Select User Houses: "+err);
            if (res.length > 0) {
                gm.mysql.handle.query("SELECT * FROM housing WHERE id = ?",[res[0].houseId], function(err1,res1) {
                    if (err1) console.log("Error in Select housing: "+err1);
                    gm.mysql.handle.query("SELECT * FROM housing_interrior WHERE id = ?",[res1[0].interrior],function(err2,res2) {
                        if (err2) console.log("Error: "+err2);
                        player.position = new mp.Vector3(res2[0].posX,res2[0].posY,res2[0].posZ);
                        player.dimension = res[0].id;
                    });                    
                });
            }
        });
    }    
});

mp.events.add("server:housing:leave",(player,id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?",[id], function(err,res) {
            if (err) console.log("Error in Select user houses: "+err);
            if (res.length > 0) {
                gm.mysql.handle.query("SELECT * FROM housing WHERE id = ?",[res[0].houseId], function(err1,res1) {
                    if (err1) console.log("Error in Select Houses: "+err1);
                    player.position = new mp.Vector3(res1[0].outX,res1[0].outY,res1[0].outZ);
                    player.dimension = 0;
                });
            }
        });
    }    
});

mp.events.add("server:housing:resident",(player, id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM user_houses WHERE houseId = ?", [id], function(err,res) {
            if (err) console.log("Error in Select user houses: "+err);
            if (res.length > 0) {
                var i = 1;
                let HouseList = [];          
                res.forEach(function(house) {
                    let obj = {"name": String(house.sign), "id": String(house.id)};
                    HouseList.push(obj);                
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:housing:resident", [JSON.stringify(HouseList)]);
                    }
                    i++;
                });
            } else {
                player.notify("~r~Hier wohnt keine Person");
            }
        });
    }    
});

mp.events.add("server:housing:subMenu",(player, id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?",[id], function(err,res) {
            if (err) console.log("Error in Select user houses: "+err);
            player.call("client:housing:subMenu",[id, res[0].locked]);
        });
    }    
});

mp.events.add("server:housing:lock",(player,id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM user_houses WHERE id = ?", [id], function(err,res) {
            if (err) console.log("Error in Select House. "+err);
            if (res[0].locked == 0) {
                gm.mysql.handle.query("UPDATE user_houses SET locked = '1' WHERE id = ?",[id], function (err1,res1) {
                    if (err1) console.log("Error in Update Locked Status: "+err1);
                    player.notify("~g~Du hast dein Haus aufgeschlossen");
                });
            } else {
                gm.mysql.handle.query("UPDATE user_houses SET locked = '0' WHERE id = ?",[id], function (err2,res2) {
                    if (err2) console.log("Error in Update Locked Status: "+err2);
                    player.notify("~g~Du hast dein Haus abgeschlossen");
                });
            }
        });
    }    
});