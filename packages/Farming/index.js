require('./routes.js');

mp.events.add("server:farming:loadmarker", (player) => {
	gm.mysql.handle.query('SELECT * FROM farming WHERE 1=1', [], function (error, results, fields) {
		for(let i = 0; i < results.length; i++) {
            player.call("LoadProcessMarkers",[results[i].processorsX,results[i].processorsY,results[i].processorsZ,results[i].processorsR,results[i].processorsPed]);		
            player.call("LoadSellMarkers",[results[i].sellX,results[i].sellY,results[i].sellZ,results[i].sellR,results[i].sellPed]);		
		}
	});	
});

mp.events.add("server:farming:farm",(player, id, itemid) => {
    if (player.data.isFarming == true) {
        player.notify("~r~Nicht spammen");      
    } else {
        gm.mysql.handle.query("SELECT u.*, i.itemName, i.usable, i.itemcount FROM user_items u LEFT JOIN items i ON i.id = u.itemId WHERE u.charId = ?", [player.data.charId],function(err,res) {
            if (err) console.log("Error in Select Farm Items: "+err);
            if (res.length > 0) { 
            var i = 1;
            var weight = 0.00;
            var inv = {};
            res.forEach(function(item) {
              if (i == res.length) {
                inv[""+item.id] = item;
                weight = parseFloat(parseFloat(weight) + (parseInt(item.amount) * parseFloat(item.itemcount))).toFixed(2);
              } else {
                inv[""+item.id] = item;
                weight = parseFloat(parseFloat(weight) + (parseInt(item.amount) * parseFloat(item.itemcount))).toFixed(2);
              }
              i = parseInt(parseInt(i) + 1);
            });
            player.data.weight = weight;
            } else {
                player.data.weight = 0.00;
            }

            if(parseFloat(player.data.weight) >= parseFloat(player.data.inventory)) {
                player.notify("Du kannst nicht soviel tragen!");
                return;
            }
        player.playAnimation("amb@medic@standing@kneel@base","base",1,33);
        player.data.isFarming = true;
        player.setVariable('farming','true');
        player.call('progress:start', [30, "Du bist am Sammeln"]); 
        setTimeout(_ => {
        if (mp.players.exists(player)) {
            player.stopAnimation();
            player.data.isFarming = false; 
            player.data.spam = false;   
            player.setVariable('farming','false');    
            gm.mysql.handle.query("SELECT * FROM items WHERE id = ?",[itemid],function(err4,res4) {
                if (err4) console.log("Error in Select Items: "+err4);
                gm.mysql.handle.query("SELECT amount FROM user_items WHERE itemId = ? AND charId = ?",[itemid,player.data.charId], function (err1,res1) {
                    if (err1) console.log("Error in Select user items: "+err1);
                    if (res1.length > 0) {
                        var newAm = parseInt(parseInt(res1[0].amount) + parseInt(10));
                        gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE charId = ? AND itemId = ?",[newAm, player.data.charId, itemid], function (err2,res2) {
                            if (err2) console.log("Error in Update User Items on Farming: "+err2);
                            player.notify("~g~Du hast 10x "+res4[0].itemName+" gefarmt");
                        });
                    } else {
                        gm.mysql.handle.query("INSERT INTO user_items SET amount = '10', itemId = ?, charId = ?",[itemid,player.data.charId], function (err3,res3) {
                            if (err3) console.log("Error in Insert Items on Farming: "+err3);
                            player.notify("~g~Du hast 10x "+res4[0].itemName+" gefarmt");
                        });
                    }
                });
            });                                
            }        
      }, 30000);
    });
    }    
});

mp.events.add("server:farming:processing",(player, id, oldItem, newItem) => {
    gm.mysql.handle.query("SELECT * FROM farming WHERE processorsneedItem = ?",[oldItem], function(err6,res6) {
        if (err6) console.log(err6);
        gm.mysql.handle.query("SELECT * FROM items WHERE id = ?",[oldItem], function (err, res) {
            if (err) console.log("Error in Select Items on Farming: "+err);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[oldItem, player.data.charId], function (err1,res1) {
                if (err1) console.log("Error in Select User Items: "+err1);
                if (player.data.isProcessing == true) {
                    player.notify("~r~Nicht spammen");
                } else {
                    if (res1.length > 0) {
                        player.data.isProcessing = true;
                        player.setVariable('farming','true');  
                        var time = res1[0].amount * res6[0].farmingTimeBar;
                            time = parseInt(time);
                            var timeout = res6[0].farmingTime*res1[0].amount;
                            timeout = parseInt(timeout);  
                            player.call('progress:start', [time, "Verarbeite: "+res[0].itemName]);                       
                         setTimeout(_ => {
                             if (mp.players.exists(player)) {
                                player.setVariable('farming','false'); 
                                let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res6[0].processorsX), parseFloat(res6[0].processorsY), parseFloat(res6[0].processorsZ)));
                                if (distance <= 5) {
                                    player.data.isProcessing = false;          
                                    var itemAmount = res1[0].amount;
                                    gm.mysql.handle.query("DELETE FROM user_items WHERE itemId = ? AND charId = ? ",[oldItem,player.data.charId],function(err2,res2) {
                                        if (err2) console.log("Error in Delete user_items: "+err2);
                                        gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[newItem,player.data.charId], function(err3,res3) {
                                            if (err3) console.log("Error in Select new Item: "+err3);
                                            if (res3.length > 0) {
                                                var newAm = parseInt(parseInt(res3[0].amount) + parseInt(itemAmount));
                                                gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?", [newAm,newItem, player.data.charId], function (err4,res4) {
                                                    if (err4) console.log("Error in Update new Item; "+err4);
                                                    player.notify("~g~Du hast "+itemAmount+"x "+res[0].itemName+" verarbeitet!");
                                                });
                                            } else {
                                                gm.mysql.handle.query("INSERT INTO user_items SET amount = ?, charId = ?, itemId = ?",[itemAmount,player.data.charId,newItem], function(err5,res5) {
                                                    if (err5) console.log("Error in Insert user Items: "+err5);
                                                    player.notify("~g~Du hast "+itemAmount+"x "+res[0].itemName+" verarbeitet!");
                                                });
                                            }
                                        });
                                    });      
                                } else {
                                    player.notify("~r~Du hast dich zu weit entfernt!");
                                    player.data.isProcessing = false;  
                                    player.setVariable('farming','false');  
                                }
                             }                       
                        }, timeout)
                    } else {
                        player.notify("~r~Du besitzt kein "+res[0].itemName);
                    }
                }            
            });
        });
    });    
});

mp.events.add("server:farming:selling",(player,id,item) => {
    gm.mysql.handle.query("SELECT * FROM farming WHERE sellneedItem = ?",[item], function(err1,res1) {
        gm.mysql.handle.query("SELECT * FROM items WHERE id = ?",[item], function(err,res) {
            if (err) console.log("Error in Select items: "+err);
            if (res.length > 0) {
                gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?", [item, player.data.charId],function(err3,res3) {
                    if (err3) console.log("Error in Select selling items: "+err3);
                    if (res3.length > 0) {
                        var itemAmount = res3[0].amount;
                        var itemprice = res1[0].sellPrice;
                        var total = parseFloat(itemAmount * itemprice);
                        var newAm = parseFloat(total + parseFloat(player.data.money)).toFixed(2);                
                        gm.mysql.handle.query("DELETE FROM user_items WHERE itemId = ? AND charId = ?",[item, player.data.charId], function(err2,res2) {
                            if (err2) console.log("Error in Delete items on selling: "+err2);
                            gm.mysql.handle.query("UPDATE characters SET money = ? WHERE id = ?", [newAm,player.data.charId], function(err4,res4) {
                                if (err4) console.log("Error in Update characters: "+err4);
                                player.data.money = newAm;
                                player.call("changeValue", ['money', player.data.money]); 
                                player.notify("~g~Du hast "+itemAmount+"x "+res[0].itemName+" für "+total+"$ verkauft!");

                            });
                    
                        });
                    } else {
                        player.notify("~r~Du besitzt kein "+res3[0].itemName);                        
                    }                 
                });
            } else {
                player.notify("~r~You have not ");
            }
        });
    });
});




