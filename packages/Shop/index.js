require('./shops.js');
mp.events.add("server:shop:loadmarker", (player) => {
    if(mp.players.exists(player)) {
        gm.mysql.handle.query('SELECT * FROM shops WHERE 1=1', [], function (error, results, fields) {
            for(let i = 0; i < results.length; i++) {
                if (results[i].firma == "none") {
                    player.call("LoadShopMarkers",[results[i].posX,results[i].posY,results[i].posZ,results[i].posR,results[i].ped]);
                }               				
            }
        });
    }		
});


mp.events.add("server:shop:openShop",(player, id) => {
    if(mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM shop_items WHERE shopId = ?",[id],function(err,res) {
            if (err) console.log("Error in Select Shop Items: "+err);
            if (res.length > 0) {
                var i = 1;
                let ItemList = [];          
                res.forEach(function(shop) {
                    let obj = {"name": String(shop.name), "price": String(shop.price), "id": String(shop.itemId)};
                    ItemList.push(obj);                
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:shop:drawMenu", [JSON.stringify(ItemList), id]);
                    }
                    i++;
                });
            } else {
                player.notify("~r~Der Shop hat keine Items");
            }
        });
    }    
});

  mp.events.add("server:shop:buy",(player, id ,name,shop) => {
    player.setVariable("shopId",shop);
    player.setVariable("itemname",name);
    player.setVariable("shopItemId",id);
  });

mp.events.add("inputValueShop",(player,trigger,output) => {
    if (trigger === "shopBuy") {
        if (output == 0) {
            player.notify("~r~Dies ist keine Zahl!");
            return;
        }
        var shop = player.getVariable("shopId");
        var itemId = player.getVariable("shopItemId");
        var name = player.getVariable("itemname");
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
            if(mp.players.exists(player)) {
                gm.mysql.handle.query("SELECT money FROM characters WHERE id = ?",[player.data.charId],function(err8,res8) {
                    gm.mysql.handle.query("SELECT * FROM shop_items WHERE shopId = ? AND itemId = ?", [shop, itemId], function (err3,res3) {
                        if (err3) console.log("Error in Select Shop Items: "+err3);
                        if (res3.length > 0) {
                            gm.mysql.handle.query("SELECT * FROM items WHERE id = ?",[itemId],function(err9,res9) {
                                if (err9) console.log("Error in Select shop: "+err9);
                                var itemweight = parseFloat(parseInt(output) * parseFloat(res9[0].itemcount)).toFixed(2);
                            var newWeight =  parseFloat(parseFloat(player.data.weight) + (parseInt(itemweight)));
                            if (newWeight >= player.data.inventory) {
                                player.notify("Du kannst nicht soviel tragen!");                                
                            }   else {
                                var price = parseFloat(res3[0].price).toFixed(2) * parseFloat(output).toFixed(2);
                                if (res8[0].money > price) {
                                    var newMoney = parseFloat( parseFloat(res8[0].money *1).toFixed(2) - parseFloat(price*1).toFixed(2)).toFixed(2);
                                    gm.mysql.handle.query("UPDATE characters SET money = ? WHERE id = ?", [newMoney,player.data.charId], function (err4,res4) {
                                        if (err4) console.log("Error in Update characters on Shop: "+err4);
                                        gm.mysql.handle.query("SELECT * FROM shops WHERE id = ?", [shop], function (err6,res6) {
                                            if (err6) console.log("Error in Select * From Shops: "+err6);
                                            var newShopMoney = parseFloat(parseFloat(res6[0].money) + parseFloat(price)).toFixed(2);
                                            gm.mysql.handle.query("UPDATE shops SET money = ? WHERE id = ?", [newShopMoney, shop], function (err5,res5) {
                                                if (err5) console.log("Error in Update Shop Money: "+err5);
                                                gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[itemId, player.data.charId],function (err,res) {
                                                    if (res.length > 0) {
                                                        //User hat das Item
                                                        var newAm = parseInt(parseInt(res[0].amount) + parseInt(output));
                                                        gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm, itemId, player.data.charId],function(err1,res1) {
                                                            if (err1) console.log("Error in Update user_items: "+err1);
                                                            player.notify("~g~Du hast "+output+"x "+""+name+" für "+price+"$ gekauft");         
                                                            player.data.money = newMoney;    
                                                            player.call("updateHudMoney",[newMoney]);       
                                                            player.call("changeValue", ['money', newMoney]);   
                                                            mp.events.call("sqlLog", player, player.data.firstname+" "+player.data.lastname+" hat 1x "+name+" gekauft.");  
                                                            player.call("playSound", ["Bus_Schedule_Pickup", "DLC_PRISON_BREAK_HEIST_SOUNDS"]);                
                                                        });
                                                    } else {
                                                        //User hat das Item Nicht!
                                                        var aM = parseInt(output);
                                                        gm.mysql.handle.query("INSERT INTO user_items SET amount = ?, itemId = ?, charId = ?", [aM,itemId, player.data.charId], function (err2,res2) {
                                                            if (err2) console.log("Error in Inser user_items: "+err2); 
                                                            player.notify("~g~Du hast "+output+"x "+""+name+" für "+price+"$ gekauft");        
                                                            player.data.money = newMoney;    
                                                            player.call("updateHudMoney",[newMoney]);       
                                                            player.call("changeValue", ['money', newMoney]);          
                                                            mp.events.call("sqlLog", player, player.data.firstname+" "+player.data.lastname+" hat "+output+"x "+name+" gekauft.");         
                                                            player.call("playSound", ["Bus_Schedule_Pickup", "DLC_PRISON_BREAK_HEIST_SOUNDS"]);
                                                        });
                                                    }
                                                });
                                            });                                                        
                                        });
                                    });
                                    } else {
                                        player.notify("~r~Du hast nicht genügend Bargeld");
                                    }                
                                }
                            });                            
                            }                            
                        }); 
                });
                              
            }
        });
    }
    
});

mp.events.add("server:shop:ausrauben", (player, id) => {
    if (mp.players.exists(player)) {        
            gm.mysql.handle.query("SELECT COUNT(id) AS counter FROM characters WHERE isOnline = '1' AND faction = 'LSPD' AND duty = '1'", function (err, res) {
                if (err) console.log("Error in Count Duty Officers: "+err);
                if (res[0].counter >= 4) {                    
                    player.call('progress:start', [120, "Raube Shop aus"]);
                    player.call("client:shop:showDispatch");
                    setTimeout(_ => {
                        if (mp.players.exists(player)) {
                            gm.mysql.handle.query("SELECT money FROM characters WHERE id = ?",[player.data.charId],function(err2,res2) {
                                if (err2) console.log("Error in Select money: "+err2);
                                gm.mysql.handle.query("SELECT * FROM shops WHERE id = ?",[id],function(err3,res3) {
                                    if (err3) console.log("Error in Select ATM Rob: "+err3);
                                    let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res3[0].posX), parseFloat(res3[0].posY), parseFloat(res3[0].posZ)));
                                    if (distance <= 2) {
                                        var robMoney = res3[0].money;
                                        var newAm = parseFloat(parseFloat(res2[0].money).toFixed(2) + parseFloat(res3[0].money)).toFixed(2);
                                        gm.mysql.handle.query("UPDATE characters SET money = ? WHERE id = ?", [newAm,player.data.charId], function(err,res) {
                                            if (err) console.log("Error in Update money: "+err);
                                            player.notify("~g~Du hast ausgeraubt: "+robMoney);                             
                                            gm.mysql.handle.query("UPDATE shops SET money = '0' WHERE id = ?",[id],function(err1,res1) {
                                                if (err1) console.log("Error in Update Rob Shop: "+err1);
                                                player.data.money = newAm;
                                                player.call("updateHudMoney",[newAm]);       
                                                player.call("changeValue", ['money', newAm]);  
                                                mp.events.call("sqlLog", player, player.data.firstname+" "+player.data.lastname+" hat Shop: "+player.position+" ausgeraubt.");    
                                            });
                                        });
                                    } else {
                                        player.notify("~r~Du hast dich zu weit entfernt!");
                                    }                            
                                }); 
                            });
                        }                                                              
                    }, 120000);
                } else {
                    player.notify("~r~Es sind nicht genügend Cops im Dienst");
                }
            });     
    }
});