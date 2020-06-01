mp.events.add("server:advent:opendoor",(player,id) => {
    if(mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM adventfree WHERE id = ?",[id],function(err,res) {
            if(err) console.log("adventfree"+err);
            if(res.length > 0) {
                if (res[0].free == 1) {
                        gm.mysql.handle.query("SELECT door"+id+" FROM adventskalender WHERE charId = ? AND door"+id+" = '0'",[player.data.charId],function(err1,res1) {
                            if(err1) console.log("advent:"+err1);
                            if(res1.length > 0) {
                                if(res[0].art == "money") {
                                    gm.mysql.handle.query("SELECT money FROM characters WHERE id = ?",[player.data.charId],function(err2,res2) {
                                        if(err2) console.log("Err: "+err2);
                                        var newAm = parseFloat(res[0].ding + parseFloat(res2[0].money)).toFixed(2);   
                                        gm.mysql.handle.query("UPDATE characters SET money = ? WHERE id = ?",[newAm,player.data.charId],function(err3,res3) {
                                            if(err3) console.log("Error in update: "+err3);
                                            player.notify("~g~Im Tor waren "+res[0].ding+"$ drinne");                                       
                                        });
                                    });
                                }
                                if (res[0].art == "item") {
                                    gm.mysql.handle.query("SELECT itemName FROM items WHERE id = ?",[res[0].ding],function(err4,res4){
                                        if(err4) console.log(err4);
                                        gm.mysql.handle.query("INSERT INTO user_items SET amount = ?, charId = ?, itemId = ?",[1,player.data.charId,res[0].ding], function(err5,res5) {
                                            if (err5) console.log("Error in Insert user Items: "+err5);      
                                            player.notify("~g~Im Tor war 1x "+res4[0].itemName+" drinne!");                                  
                                        });
                                    });                                
                                }
                                if (res[0].art == "fahrzeug") {
                                    player.notify("~g~Im Tor war eine Shorato drinne");  
                                    gm.mysql.handle.query("INSERT INTO vehicles SET model = 'shotaro', charId = ?, numberPlate = 'NOLIC', parked = '1', impounded = '0', fill = '100', km = '0', fuelart = 'benzin', kofferraum = '20', dead = 'false'",[ player.data.charId], function (err4,res4) {
                                        if (err4) console.log("Error in Insert Vehicles: "+err4);                                          
                                        gm.mysql.handle.query("SELECT id FROM vehicles WHERE charID = ? ORDER BY id DESC LIMIT 1;",[player.data.charId],function(err5,res5) {
                                            if (err5) console.log("Error in Select last ID: "+err5);                                                
                                            gm.mysql.handle.query("INSERT INTO vehiclekeys (vehID, keyOwner, amount, isActive) VALUES (?,?,'2','Y')", [res5[0].id, player.data.charId], function(err6, res6) {
                                                if (err3) console.log("Error in Insert Vehiclekeys: "+err3);
                                                var currentKeys = player.getVariable("currentKeys");
                                                currentKeys = JSON.parse(currentKeys);
                                                var newList = [];
                                                currentKeys.forEach(function(key) {
                                                  newList.push(key);
                                                });
                                                var obj = {"vehid": parseInt(res5[0].id), "active": "Y"};
                                                newList.push(obj);
                                                newList = JSON.stringify(newList);
                                                player.setVariable("currentKeys",newList);                                                                                       
                                            });
                                        });                                    
                                    });
                                }
                                if (res[0].art == "boot") {
                                    player.notify("~g~Im Tor war ein Jetsky drinne");  
                                    gm.mysql.handle.query("INSERT INTO vehicles SET model = 'seashark', charId = ?, numberPlate = 'NOLIC', parked = '1', impounded = '0', fill = '100', km = '0', fuelart = 'benzin', kofferraum = '20', dead = 'false'",[ player.data.charId], function (err4,res4) {
                                        if (err4) console.log("Error in Insert Vehicles: "+err4);                                          
                                        gm.mysql.handle.query("SELECT id FROM vehicles WHERE charID = ? ORDER BY id DESC LIMIT 1;",[player.data.charId],function(err5,res5) {
                                            if (err5) console.log("Error in Select last ID: "+err5);                                                
                                            gm.mysql.handle.query("INSERT INTO vehiclekeys (vehID, keyOwner, amount, isActive) VALUES (?,?,'2','Y')", [res5[0].id, player.data.charId], function(err6, res6) {
                                                if (err3) console.log("Error in Insert Vehiclekeys: "+err3);
                                                var currentKeys = player.getVariable("currentKeys");
                                                currentKeys = JSON.parse(currentKeys);
                                                var newList = [];
                                                currentKeys.forEach(function(key) {
                                                  newList.push(key);
                                                });
                                                var obj = {"vehid": parseInt(res5[0].id), "active": "Y"};
                                                newList.push(obj);
                                                newList = JSON.stringify(newList);
                                                player.setVariable("currentKeys",newList);                                                                                       
                                            });
                                        });                                    
                                    });
                                }    
                                if (res[0].art == "trophytruck") {
                                    player.notify("~g~Im Tor war ein Jetsky drinne");  
                                    gm.mysql.handle.query("INSERT INTO vehicles SET model = 'trophytruck', charId = ?, numberPlate = 'NOLIC', parked = '1', impounded = '0', fill = '100', km = '0', fuelart = 'benzin', kofferraum = '20', dead = 'false'",[ player.data.charId], function (err4,res4) {
                                        if (err4) console.log("Error in Insert Vehicles: "+err4);                                          
                                        gm.mysql.handle.query("SELECT id FROM vehicles WHERE charID = ? ORDER BY id DESC LIMIT 1;",[player.data.charId],function(err5,res5) {
                                            if (err5) console.log("Error in Select last ID: "+err5);                                                
                                            gm.mysql.handle.query("INSERT INTO vehiclekeys (vehID, keyOwner, amount, isActive) VALUES (?,?,'2','Y')", [res5[0].id, player.data.charId], function(err6, res6) {
                                                if (err3) console.log("Error in Insert Vehiclekeys: "+err3);
                                                var currentKeys = player.getVariable("currentKeys");
                                                currentKeys = JSON.parse(currentKeys);
                                                var newList = [];
                                                currentKeys.forEach(function(key) {
                                                  newList.push(key);
                                                });
                                                var obj = {"vehid": parseInt(res5[0].id), "active": "Y"};
                                                newList.push(obj);
                                                newList = JSON.stringify(newList);
                                                player.setVariable("currentKeys",newList);                                                                                       
                                            });
                                        });                                    
                                    });
                                }                                                        
                            } else {
                                player.notify("~r~Dieses Tor hast du schon geöffnet!");
                            }
                        });
                        gm.mysql.handle.query("UPDATE adventskalender SET door"+id+" = '1' WHERE charId = ?",[player.data.charId],function(err7,res7){
                            if(err7) console.log(err7);                            
                        });
                } else {
                    player.notify("~r~Das Tor ist noch nicht frei!");
                }
            } else {
                player.notify("~r~Das Tor ist noch nicht frei!");
            }
        });
    }
});