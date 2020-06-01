
mp.events.add("server:inventory:prepareMenu", (player) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT money FROM characters WHERE id = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log(err1);
            gm.mysql.handle.query("SELECT u.*, i.itemName, i.usable, i.itemcount FROM user_items u LEFT JOIN items i ON i.id = u.itemId WHERE u.charId = ?", [player.data.charId], function(err, res) {
                if (err) console.log("Error in get Inventory Query: " + err);
                else {
                    if (res.length > 0) {
                        var i = 1;
                        var weight = 0.00;
                        var inv = {};
                        var money = parseFloat(res1[0].money).toFixed(2);
                        res.forEach(function(item) {
                            if (i == res.length) {
                                inv["" + item.id] = item;
                                weight = parseFloat(parseFloat(weight) + (parseInt(item.amount) * parseFloat(item.itemcount))).toFixed(2);
                                if (mp.players.exists(player)) {
                                    player.call("client:inventory:showInventory", [JSON.stringify(inv), weight,money]);
                                }
                            } else {
                                inv["" + item.id] = item;
                                weight = parseFloat(parseFloat(weight) + (parseInt(item.amount) * parseFloat(item.itemcount))).toFixed(2);
                            }
                            i = parseInt(parseInt(i) + 1);
                        });
                    } else {
                        player.notify("Du hast keine Gegenstände dabei.");
                    }
                }
            });
        });        
    }
});

mp.events.add("server:weapons:weapons", (player,atmid) => {
    gm.mysql.handle.query("SELECT * FROM user_weapons WHERE charId = ?", [player.data.charId], function(err, res) {
        if (err) console.log("Error in Select Bank Konten: "+err);
        if (res.length > 0) {
            var i = 1;
            res.forEach(function(weapon) {
                var taser = weapon.taser;
                var pistol = weapon.pistol;
                var fivepistol = weapon.fivepistol;
                var schwerepistol = weapon.schwerepistol;
                var appistol = weapon.appistol;
                var smg = weapon.smg;
                var pdw = weapon.pdw;
                var karabiner = weapon.karabiner;
                var pump = weapon.pump;
                var taschenlampe = weapon.taschenlampe;
                var schlagstock = weapon.schlagstock;
                var messer = weapon.messer;
                var bat = weapon.bat;
                var ak47 = weapon.ak47;
                var micro = weapon.micro;
                var abgesägte = weapon.abgesägte
                var revolver = weapon.revolver;

                if (parseInt(i) == parseInt(res.length)) {
                    if(mp.players.exists(player)) player.call("client:inventory:weapons", [taser,pistol,fivepistol,schwerepistol,appistol,smg,pdw,karabiner,pump,taschenlampe,schlagstock,messer,bat,ak47,micro,abgesägte,revolver]);
                }
                i++;
            });
        } else {
            player.notify("~r~Du besitzt keine Waffen");
        }        
    });
});



mp.events.add("server:inventory:openItemSubmenu", (player, itemId) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT u.*, i.itemName, i.usable, i.itemcount FROM user_items u LEFT JOIN items i ON i.id = u.itemId WHERE u.charId = ? AND u.id = ?", [player.data.charId, itemId], function(err, res) {
            if (err) console.log("Error in openItemSubmenu Query: " + err);
            else {
                if (res.length > 0) {
                    res.forEach(function(item) {
                        if (mp.players.exists(player)) {
                            player.call("client:inventory:openItemSubmenu", [JSON.stringify(item)]);
                        }
                    });
                }
            }
        })
    }
});

mp.events.add("server:inventory:setDestroyItem", (player, itemId) => {
    if (mp.players.exists(player)) player.setVariable("destroyItemId", itemId);
});
mp.events.add("server:inventory:setGiveItem", (player, itemId) => {
    if (mp.players.exists(player)) player.setVariable("giveItemId", itemId);
});

mp.events.add("inputValueShop", (player, trigger, output) => {
    if (mp.players.exists(player)) {
        if (trigger === "DestroyItem") {
            if (player.data.isProcessing == true) {
                player.notify("~r~Während des Verarbeitens geht dies nicht");
            } else {
                var itemId = player.getVariable("destroyItemId");                
                gm.mysql.handle.query("SELECT id, amount,itemId FROM user_items WHERE id = ? AND charId = ?", [itemId, player.data.charId], function(err, res) {
                if (err) console.log("Error in Get Destroy Item Query: " + err);
                else {
                if (res.length > 0) {
                    gm.mysql.handle.query("SELECT illegal FROM items WHERE id = ?",[res[0].itemId],function(err4,res4) {
                        if (err4) console.log("Error in select illegal :"+err4);
                        if (res4[0].illegal == 1) {
                            var x = player.position.x
                            var y = player.position.y
                            var z = player.position.z
                            mp.players.forEachInRange({x,y,z}, 30, (playerrange) => {                                
                                if (playerrange.data.faction == "LSPD" && playerrange.data.factionDuty == 1 && player.data.cop !== "LSPD" && player.data.factionDuty !== 1) {
                                    player.notify("~r~Dies geht aktuell nicht");
                                } else {
                                    res.forEach(function(item) {
                                        if (parseInt(item.amount) >= parseInt(output)) {
                                            if (output > 0) {
                                                if (parseInt(item.amount) == parseInt(output)) {
                                                    gm.mysql.handle.query("DELETE FROM user_items WHERE id = ? AND charId = ?", [itemId, player.data.charId], function(err2, res2) {
                                                        if (err2) console.log("Error in Destroy Item Query: " + err2);
                                                        else {
                                                            player.notify("Du hast den Gegenstand weggeworfen.");
                                                            mp.events.call("server:inventory:prepareMenu", player);
                                                        }
                                                    });
                                                } else {
                                                    var newAmount = parseInt(parseInt(item.amount) - parseInt(output));
                                                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE id = ?", [newAmount, itemId], function(err3, res3) {
                                                        if (err3) console.log("Error in Destroy Item Query 3: " + err3);
                                                        else {
                                                            player.notify("Du hast den Gegenstand weggeworfen.");
                                                            mp.events.call("server:inventory:prepareMenu", player);
                                                        }
                                                    });
                                                }
                                            } else {
                                                player.notify("Du kannst nicht weniger als 1 Wegwerfen.");
                                            }
                                        } else {
                                            player.notify("So viel hast du nicht von diesem Gegenstand!");
                                        }
                                    });
                                }
                            });
                    } else {
                        res.forEach(function(item) {
                            if (parseInt(item.amount) >= parseInt(output)) {
                                if (output > 0) {
                                    if (parseInt(item.amount) == parseInt(output)) {
                                        gm.mysql.handle.query("DELETE FROM user_items WHERE id = ? AND charId = ?", [itemId, player.data.charId], function(err2, res2) {
                                            if (err2) console.log("Error in Destroy Item Query: " + err2);
                                            else {
                                                player.notify("Du hast den Gegenstand weggeworfen.");
                                                mp.events.call("server:inventory:prepareMenu", player);
                                            }
                                        });
                                    } else {
                                        var newAmount = parseInt(parseInt(item.amount) - parseInt(output));
                                        gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE id = ?", [newAmount, itemId], function(err3, res3) {
                                            if (err3) console.log("Error in Destroy Item Query 3: " + err3);
                                            else {
                                                player.notify("Du hast den Gegenstand weggeworfen.");
                                                mp.events.call("server:inventory:prepareMenu", player);
                                            }
                                        });
                                    }
                                } else {
                                    player.notify("Du kannst nicht weniger als 1 Wegwerfen.");
                                }
                            } else {
                                player.notify("So viel hast du nicht von diesem Gegenstand!");
                            }
                        });
                    } 
                    });                               
                } else {
                player.notify("Du besitzt diesen Gegenstand nicht.");
                }
                }
                });
                        
                    
                           
            }            
        }
        if (trigger === "GiveItem") {
            if (player.data.isProcessing == true) {
                player.notify("~r~Während des Verarbeitens geht dies nicht");
            } else {
                var itemId = player.getVariable("giveItemId");
                gm.mysql.handle.query("SELECT u.id, u.amount, u.itemId, i.itemcount FROM user_items u LEFT JOIN items i ON i.id = u.itemId WHERE u.id = ? AND u.charId = ?", [itemId, player.data.charId], function(err, res) {
                    if (err) console.log("Error in Get Give Item Query: " + err);
                    else {
                        if (res.length > 0) {
                            res.forEach(function(item) {
                                getNearestPlayer(player, 2);
                                if (currentTarget !== null) {
                                    if (parseInt(output) > 0 && parseInt(item.amount) == parseInt(output)) {
                                        // ITEMCOUNT == GIVEAMOUNT
                                        itemweight = parseFloat(parseInt(output) * parseFloat(item.itemcount)).toFixed(2);
                                        gm.mysql.handle.query("SELECT SUM(u.amount * i.itemcount) AS weight FROM user_items u LEFT JOIN items i ON i.id = u.itemId WHERE u.charId = ?", [currentTarget.data.charId], function(err2, res2) {
                                            if (err2) console.log("Error in Get Give Item target weight Query: " + err2);
                                            else {
                                                if (res2.length > 0) {
                                                    res2.forEach(function(targetWeight) {
                                                        if (targetWeight.weight !== null) {
                                                            if (parseFloat(parseFloat(targetWeight.weight).toFixed(2) + parseFloat(itemweight).toFixed(2)) <= parseFloat(currentTarget.data.inventory)) {
                                                                gm.mysql.handle.query("SELECT * FROM user_items WHERE charId = ? AND itemId = ?", [currentTarget.data.charId, item.itemId], function(err4, res4) {
                                                                    if (err4) console.log("Error in select existing item on give item query: " + err4);
                                                                    else {
                                                                        if (res4.length > 0) {
                                                                            res4.forEach(function(existingItem) {
                                                                                var existingItemCount = existingItem.amount;
                                                                                var newItemCount = parseInt(parseInt(existingItemCount) + parseInt(output));

                                                                                gm.mysql.handle.query("DELETE FROM user_items WHERE charId = ? AND id = ?", [player.data.charId, itemId], function(err5, res5) {
                                                                                    if (err5) console.log("Error in give item query 5: " + err5);
                                                                                });

                                                                                gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE charId = ? AND id = ?", [newItemCount, currentTarget.data.charId, existingItem.id], function(err6, res6) {
                                                                                    if (err6) console.log("Error in give item Query 6: " + err6);
                                                                                });

                                                                                player.notify("Du hast den Gegenstand übergeben.");
                                                                                currentTarget.notify("Dir wurde etwas übergeben.");  
                                                                                mp.events.call("server:inventory:prepareMenu", player);
                                                                            });
                                                                        } else {
                                                                            gm.mysql.handle.query("UPDATE user_items SET charId = ? WHERE id = ? AND charId = ?", [currentTarget.data.charId, itemId, player.data.charId], function(err3, res3) {
                                                                                if (err3) console.log("Error in Give Item update Query: " + err3);
                                                                                else {
                                                                                    player.notify("Du hast den Gegenstand übergeben.");
                                                                                    currentTarget.notify("Dir wurde etwas übergeben.");
                                                                                    mp.events.call("server:inventory:prepareMenu", player);
                                                                                }
                                                                            });
                                                                        }
                                                                    }
                                                                });
                                                            } else {
                                                                player.notify("Dein Gegenüber kann nicht so viel tragen.");
                                                            }
                                                        } else {
                                                            gm.mysql.handle.query("UPDATE user_items SET charId = ? WHERE id = ? AND charId = ?", [currentTarget.data.charId, itemId, player.data.charId], function(err3, res3) {
                                                                if (err3) console.log("Error in Give Item update Query: " + err3);
                                                                else {
                                                                    player.notify("Du hast den Gegenstand übergeben.");
                                                                    currentTarget.notify("Dir wurde etwas übergeben.");
                                                                    mp.events.call("server:inventory:prepareMenu", player);
                                                                }
                                                            });
                                                        }
                                                    });
                                                } else {
                                                    gm.mysql.handle.query("UPDATE user_items SET charId = ? WHERE id = ? AND charId = ?", [currentTarget.data.charId, itemId, player.data.charId], function(err3, res3) {
                                                        if (err3) console.log("Error in Give Item update Query: " + err3);
                                                        else {
                                                            player.notify("Du hast den Gegenstand übergeben.");
                                                            currentTarget.notify("Dir wurde etwas übergeben.");
                                                            mp.events.call("server:inventory:prepareMenu", player);
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    } else {
                                        if (parseInt(output) < parseInt(item.amount) && parseInt(output) > 0) {
                                            // USER GIVES LESS THAN HE HAS
                                            var newGiveUserAmount = parseInt(parseInt(item.amount) - parseInt(output));
                                            itemweight = parseFloat(parseInt(output) * parseFloat(item.itemcount)).toFixed(2);

                                            gm.mysql.handle.query("SELECT SUM(u.amount * i.itemcount) AS weight FROM user_items u LEFT JOIN items i ON i.id = u.itemId WHERE u.charId = ?", [currentTarget.data.charId], function(err2, res2) {
                                                if (err2) console.log("Error in Get Give Item target weight Query: " + err2);
                                                else {
                                                    if (res2.length > 0) {
                                                        res2.forEach(function(targetWeight) {
                                                            if (targetWeight.weight !== null) {
                                                                if (parseFloat(parseFloat(targetWeight.weight).toFixed(2) + parseFloat(itemweight).toFixed(2)) <= parseFloat(currentTarget.data.inventory)) {
                                                                    gm.mysql.handle.query("SELECT * FROM user_items WHERE charId = ? AND itemId = ?", [currentTarget.data.charId, item.itemId], function(err4, res4) {
                                                                        if (err4) console.log("Error in select existing item on give item query: " + err4);
                                                                        else {
                                                                            if (res4.length > 0) {
                                                                                res4.forEach(function(existingItem) {
                                                                                    var existingItemCount = existingItem.amount;
                                                                                    var newItemCount = parseInt(parseInt(existingItemCount) + parseInt(output));

                                                                                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE charId = ? AND id = ?", [newGiveUserAmount, player.data.charId, itemId], function(err5, res5) {
                                                                                        if (err5) console.log("Error in give Item Query 5: " + err5);
                                                                                    });

                                                                                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE charId = ? AND id = ?", [newItemCount, currentTarget.data.charId, existingItem.id], function(err6, res6) {
                                                                                        if (err6) console.log("Error in give item Query 6: " + err6);
                                                                                    });

                                                                                    player.notify("Du hast den Gegenstand übergeben.");
                                                                                    currentTarget.notify("Dir wurde etwas übergeben.");
                                                                                    mp.events.call("server:inventory:prepareMenu", player);
                                                                                });
                                                                            } else {
                                                                                var newGivenUserAmount = output;
                                                                                gm.mysql.handle.query("INSERT INTO user_items (charId,itemId,amount) VALUES(?,?,?)", [currentTarget.data.charId, item.itemId, newGivenUserAmount], function(err3, res3) {
                                                                                    if (err3) console.log("Error in Give Item q3: " + err3);
                                                                                    else {
                                                                                        var newGiveUserAmount = parseInt(parseInt(item.amount) - parseInt(output));
                                                                                        gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE charId = ? AND itemId = ?", [newGiveUserAmount, player.data.charId, item.itemId], function(err4, res4) {
                                                                                            if (err4) console.log("Error in Give Item q4: " + err4);
                                                                                            else {
                                                                                                player.notify("Du hast den Gegenstand übergeben.");
                                                                                                currentTarget.notify("Dir wurde etwas übergeben.");
                                                                                                mp.events.call("server:inventory:prepareMenu", player);
                                                                                            }
                                                                                        });
                                                                                    }
                                                                                });
                                                                            }
                                                                        }
                                                                    });
                                                                } else {
                                                                    player.notify("Dein Gegenüber kann nicht so viel tragen.");
                                                                }
                                                            } else {
                                                                var newGivenUserAmount = output;
                                                                gm.mysql.handle.query("INSERT INTO user_items (charId,itemId,amount) VALUES(?,?,?)", [currentTarget.data.charId, item.itemId, newGivenUserAmount], function(err3, res3) {
                                                                    if (err3) console.log("Error in Give Item q3: " + err3);
                                                                    else {
                                                                        var newGiveUserAmount = parseInt(parseInt(item.amount) - parseInt(output));
                                                                        gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE charId = ? AND itemId = ?", [newGiveUserAmount, player.data.charId, item.itemId], function(err4, res4) {
                                                                            if (err4) console.log("Error in Give Item q4: " + err4);
                                                                            else {
                                                                                player.notify("Du hast den Gegenstand übergeben.");
                                                                                currentTarget.notify("Dir wurde etwas übergeben.");
                                                                                mp.events.call("server:inventory:prepareMenu", player);
                                                                            }
                                                                        });
                                                                    }
                                                                });
                                                            }
                                                        });
                                                    } else {
                                                        gm.mysql.handle.query("UPDATE user_items SET charId = ? WHERE id = ? AND charId = ?", [currentTarget.data.charId, itemId, player.data.charId], function(err3, res3) {
                                                            if (err3) console.log("Error in Give Item update Query: " + err3);
                                                            else {
                                                                player.notify("Du hast den Gegenstand übergeben.");
                                                                currentTarget.notify("Dir wurde etwas übergeben.");
                                                                mp.events.call("server:inventory:prepareMenu", player);
                                                            }
                                                        });
                                                    }
                                                }
                                            });
                                        } else {
                                            player.notify("So viele davon hast du nicht!");
                                        }
                                    }
                                } else {
                                    player.notify("Es ist keiner in deiner Nähe!");
                                }
                            });
                        } else {
                            player.notify("Du besitzt diesen Gegenstand nicht.");
                        }
                    }
                });
            }            
        }
    }
});

mp.events.add("server:inventory:weaponsub",(player,weapon) => {
    if (weapon == "Taser") {
        if (mp.players.exists(player)) player.removeWeapon(0x3656C8C1);
        gm.mysql.handle.query("UPDATE user_weapons SET taser = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[48,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,48,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~Taser ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,48],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~Taser ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "Pistole") {
        if (mp.players.exists(player)) player.removeWeapon(0x1B06D571);
        gm.mysql.handle.query("UPDATE user_weapons SET pistol = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[49,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,49,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~Pistole ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,49],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~Pistole ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "50. Kaliber") {
        if (mp.players.exists(player)) player.removeWeapon(0x99AEEB3B);
        gm.mysql.handle.query("UPDATE user_weapons SET fivepistol = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[50,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,50,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~.50 Kaliber ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,50],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~.50 Kaliber ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "Schwere Pistole") {
        if (mp.players.exists(player)) player.removeWeapon(0xD205520E);
        gm.mysql.handle.query("UPDATE user_weapons SET schwerepistol = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[51,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,51,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~Schwere Pistole ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,51],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~Schwere Pistole ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "AP Pistole") {
        if (mp.players.exists(player)) player.removeWeapon(0x22D8FE39);
        gm.mysql.handle.query("UPDATE user_weapons SET appistol = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[52,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,52,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~AP Pistole ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,52],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~AP Pistole ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "SMG") {
        if (mp.players.exists(player)) player.removeWeapon(0x2BE6766B);
        gm.mysql.handle.query("UPDATE user_weapons SET smg = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[53,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,53,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~SMG ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,53],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~SMG ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "PDW") {
        if (mp.players.exists(player)) player.removeWeapon(0x0A3D4D34);
        gm.mysql.handle.query("UPDATE user_weapons SET pdw = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[54,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,54,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~PDW ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,54],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~PDW ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "Taschenlampe") {
        if (mp.players.exists(player)) player.removeWeapon(0x8BB05FD7);
        gm.mysql.handle.query("UPDATE user_weapons SET taschenlampe = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[55,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,55,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~Taschenlampe ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,55],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~Taschenlampe ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "Messer") {
        if (mp.players.exists(player)) player.removeWeapon(0x99B507EA);
        gm.mysql.handle.query("UPDATE user_weapons SET messer = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[56,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,56,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~Messer ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,56],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~Messer ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "Baseballschläger") {
        if (mp.players.exists(player)) player.removeWeapon(0x958A4A8F);
        gm.mysql.handle.query("UPDATE user_weapons SET bat = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[57,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,57,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~Baseballschläger ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,57],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~Baseballschläger ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "Pump Schrotflinte") {
        if (mp.players.exists(player)) player.removeWeapon(0x1D073A89);
        gm.mysql.handle.query("UPDATE user_weapons SET pump = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[58,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,58,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~Schrotflinte ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,58],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~Schrotflinte ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "AK47") {
        if (mp.players.exists(player)) player.removeWeapon(0xBFEFFF6D);
        gm.mysql.handle.query("UPDATE user_weapons SET ak47 = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[72,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,72,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~AK47 ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,72],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~AK47 ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "Micro Uzi") {
        if (mp.players.exists(player)) player.removeWeapon(0x13532244);
        gm.mysql.handle.query("UPDATE user_weapons SET micro = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[75,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,75,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~Micro Uzi ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,75],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~Micro Uzi ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "Revolver") {
        if (mp.players.exists(player)) player.removeWeapon(0xC1B3C3D1);
        gm.mysql.handle.query("UPDATE user_weapons SET revolver = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[74,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,74,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~Revolver ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,74],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~Revolver ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
    if (weapon == "Schrotflinte") {
        if (mp.players.exists(player)) player.removeWeapon(0xEF951FBB);
        gm.mysql.handle.query("UPDATE user_weapons SET abgesägte = '0' WHERE charId = ?",[player.data.charId], function(err1,res1) {
            if (err1) console.log("Error in Update user weapons on Taser: "+err1);
            gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[73,player.data.charId],function(err2,res2) {
                if (err2) console.log(err2);
                if (res2.length > 0) {
                    var newAm = parseInt(parseInt(res2[0].amount) + parseInt(1));
                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm,73,player.data.charId],function(err3,res3) {
                        if (err3) console.log(err3);
                        if (mp.players.exists(player)) player.notify("~w~Schrotflinte ~g~eingepackt"); 
                    });
                } else {
                    gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', charId = ?, itemId = ?",[player.data.charId,73],function(err4,res4) {
                        if (err4) console.log(err4);
                        if (mp.players.exists(player)) player.notify("~w~Schrotflinte ~g~eingepackt");
                    });
                }                 
            });
        });            
    }
});


mp.events.add("server:inventory:useItem", (player, itemId) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT u.id, u.amount, u.itemId, i.type, i.itemcount, i.fillvalue FROM user_items u LEFT JOIN items i ON i.id = u.itemId WHERE u.id = ? AND u.charId = ?", [itemId,player.data.charId], function(err, res) {
            if (err) console.log("Error in useItem Query 1: " + err);
            else {
                if (res.length > 0) {
                    res.forEach(function(itemData) {
                        var countDownItem = false;
                        if (itemData.type == "weapon") {
                            if (parseInt(itemData.itemId) == 48) {
                                // Taser
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0x3656C8C1, 0);
                                    gm.mysql.handle.query("UPDATE user_weapons SET taser = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~Taser ~g~ausgerüstet");                                    
                            } 
                            if (parseInt(itemData.itemId) == 47) {
                                // Karabiner
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0x83BF0278, 200);
                                    gm.mysql.handle.query("UPDATE user_weapons SET karabiner = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~Karabiner ~g~ausgerüstet");                                    
                            }
                            if (parseInt(itemData.itemId) == 49) {
                                // Pistole
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0x1B06D571, 90);
                                    gm.mysql.handle.query("UPDATE user_weapons SET pistol = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~Pistole ~g~ausgerüstet");                                    
                            }  
                            if (parseInt(itemData.itemId) == 50) {
                                // .50 Kaliber
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0x99AEEB3B, 90);
                                    gm.mysql.handle.query("UPDATE user_weapons SET fivepistol = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~.50 Kaliber Pistole ~g~ausgerüstet");                                    
                            }
                            if (parseInt(itemData.itemId) == 51) {
                                // Schwere Pistole
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0xD205520E, 90);
                                    gm.mysql.handle.query("UPDATE user_weapons SET schwerepistol = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~.Schwere Pistole ~g~ausgerüstet");                                    
                            }  
                            if (parseInt(itemData.itemId) == 52) {
                                // AP Pistole
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0x22D8FE39, 90);
                                    gm.mysql.handle.query("UPDATE user_weapons SET appistol = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~.AP Pistole ~g~ausgerüstet");                                    
                            }
                            if (parseInt(itemData.itemId) == 53) {
                                // SMG
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0x2BE6766B, 200);
                                    gm.mysql.handle.query("UPDATE user_weapons SET smg = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~SMG ~g~ausgerüstet");                                    
                            }
                            if (parseInt(itemData.itemId) == 54) {
                                // PDW
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0x0A3D4D34, 200);
                                    gm.mysql.handle.query("UPDATE user_weapons SET pdw = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~PDW ~g~ausgerüstet");                                    
                            }
                            if (parseInt(itemData.itemId) == 55) {
                                // Taschenlampe
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0x8BB05FD7, 0);
                                    gm.mysql.handle.query("UPDATE user_weapons SET taschenlampe = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~Taschenlampe ~g~ausgerüstet");                                    
                            }
                            if (parseInt(itemData.itemId) == 56) {
                                // Messer
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0x99B507EA, 0);
                                    gm.mysql.handle.query("UPDATE user_weapons SET messer = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~Messer ~g~ausgerüstet");                                    
                            }
                            if (parseInt(itemData.itemId) == 57) {
                                // Basey
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0x958A4A8F, 0);
                                    gm.mysql.handle.query("UPDATE user_weapons SET bat = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~Baseballschläger ~g~ausgerüstet");                                    
                            }
                            if (parseInt(itemData.itemId) == 58) {
                                // Shotgut
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0x1D073A89, 130);
                                    gm.mysql.handle.query("UPDATE user_weapons SET pump = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~Pump Shotgun ~g~ausgerüstet");                                    
                            }
                            if (parseInt(itemData.itemId) == 72) {
                                // Shotgut
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0xBFEFFF6D, 300);
                                    gm.mysql.handle.query("UPDATE user_weapons SET ak47 = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~AK47 ~g~ausgerüstet");                                    
                            }
                            if (parseInt(itemData.itemId) == 73) {
                                // Shotgut
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0xEF951FBB, 150);
                                    gm.mysql.handle.query("UPDATE user_weapons SET abgesägte = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~Shotgun ~g~ausgerüstet");                                    
                            }
                            if (parseInt(itemData.itemId) == 74) {
                                // Shotgut
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0xC1B3C3D1, 20);
                                    gm.mysql.handle.query("UPDATE user_weapons SET revolver = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~Revolver ~g~ausgerüstet");                                    
                            }
                            if (parseInt(itemData.itemId) == 75) {
                                // Shotgut
                                var countDownItem = true;
                                if (mp.players.exists(player)) player.giveWeapon(0x13532244, 300);
                                    gm.mysql.handle.query("UPDATE user_weapons SET micro = '1' WHERE charId = ?",[player.data.charId], function(err1,res1) {
                                        if (err1) console.log("Error in Update user weapons on Taser: "+err1);
                                    });
                                        if (mp.players.exists(player)) player.notify("~w~Micro Uzi ~g~ausgerüstet");                                    
                            }
                        } else if (itemData.type == "joint") {                            // USE ITEM IST JOINT
                            if (player.health < 94) player.health = parseInt(parseInt(player.health) + parseInt(itemData.fillvalue));

                            mp.events.call("playAnimationEvent", player, 'amb@world_human_smoking_pot@male@base', 'base', 1, 49, -1);
                            player.call("smokeJointEffect");
                            setTimeout(_ => {
                                try {
                                    if (mp.players.exists(player) && !player.vehicle) {
                                        player.stopAnimation();
                                    }
                                } catch (e) {
                                    console.log("Error - Inventory/index.js - uselifeloss");
                                }
                            }, 70000);

                            countDownItem = true;
                        } else if (itemData.type == "smoke") {                            // USE ITEM IST JOINT
                            player.health = parseInt(parseInt(player.health) - parseInt(itemData.fillvalue));

                            mp.events.call("playAnimationEvent", player, 'amb@world_human_smoking_pot@male@base', 'base', 1, 49, -1);
                            setTimeout(_ => {
                                try {
                                    if (mp.players.exists(player) && !player.vehicle) {
                                        player.stopAnimation();
                                    }
                                } catch (e) {
                                    console.log("Error - Inventory/index.js - uselifeloss");
                                }
                            }, 140000);

                            countDownItem = true;
                        } else if (itemData.type == "play") {                            // USE ITEM IST JOINT
                            
                            player.playAnimation('mp_common', 'givetake2_a', 1, 49);
                            var x = player.position.x
                            var y = player.position.y
                            var z = player.position.z
                            var zahl = "" + Math.floor(Math.random() * 18);
                            mp.players.forEachInRange({x,y,z}, 5, (player) => {                                
                                player.notify("~g~Jemand hat eine ~b~"+zahl+" ~g~gewürfelt");
                            });                            
                            setTimeout(_ => {
                                try {
                                    if (mp.players.exists(player) && !player.vehicle) {
                                        player.stopAnimation();
                                    }
                                } catch (e) {
                                    console.log("Error - Inventory/index.js - uselifeloss");
                                }
                            }, 3000);
                        } if (itemData.type == "armor") {
                            if (parseInt(itemData.itemId) == 192) {
                                // Weste wird ausgepackt
                                if (itemData.amount > 1) {
                                    var newCount = parseInt(parseInt(itemData.amount) - 1);
                                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE id = ? AND charId = ?", [newCount, itemData.id, player.data.charId], function(err3, res3) {
                                        if (err3) console.log("Error in Countdown Item after use query: " + err3);
                                        if (mp.players.exists(player)) {
                                            player.notify("~w~Weste ~g~angezogen");
                                            player.armour = 100;
                                            player.setClothes(9, 12, 1, 2);
                                        }
                                    });
                                } else {
                                    gm.mysql.handle.query("DELETE FROM user_items WHERE id = ? AND charId = ?", [itemData.id, player.data.charId], function(err2, res2) {
                                        if (err2) console.log("Error in Remove Item after use query: " + err2);
                                        if (mp.players.exists(player)) {
                                            player.notify("~w~Weste ~g~angezogen");
                                            player.armour = 100;
                                            player.setClothes(9, 12, 1, 2);
                                        }
                                    });
                                }
                            }
                        } else if (itemData.type == "bag") {
                            // USE ITEM IST TASCHE
                            if (parseInt(itemData.itemId) == 3) {
                                // Tasche wird ausgepackt
                                player.data.inventory = 30;
                                gm.mysql.handle.query("UPDATE user_items SET itemId = ? WHERE id = ? AND charId = ?", [4, itemId, player.data.charId], function(err2, res2) {
                                    if (err2) console.log("Error in Update Tasche on use item 34: " + err2);
                                    else {
                                        if (mp.players.exists(player)) {
                                            gm.mysql.handle.query("UPDATE characters SET tasche = '1' WHERE id = ?",[player.data.charId],function(err3,res3) {
                                                if (err3) console.log("Error Tasche: "+err3);
                                                player.notify("~w~Tasche ~g~ausgepackt");
                                                player.setClothes(5, 45, 0, 0);
                                                player.data.inventory = 30;
                                            });                                            
                                        }
                                    }
                                });
                            } else if (parseInt(itemData.itemId) == 4) {
                                // Tasche wird eingepackt
                                gm.mysql.handle.query("SELECT SUM(u.amount * i.itemcount) AS weight FROM user_items u LEFT JOIN items i ON i.id = u.itemId WHERE u.charId = ?", [player.data.charId], function(err2, res2) {
                                    if (err2) console.log("Error in Select Weight on use item 63: " + err2);
                                    else {
                                        if (res2.length > 0) {
                                            res2.forEach(function(weight) {
                                                if (parseFloat(weight.weight) <= parseFloat(9)) {
                                                    gm.mysql.handle.query("UPDATE user_items SET itemId = ? WHERE id = ? AND charId = ?", [3, itemId, player.data.charId], function(err2, res2) {
                                                        if (err2) console.log("Error in Update Tasche on use item 63: " + err2);
                                                        else {
                                                            if (mp.players.exists(player)) {
                                                                gm.mysql.handle.query("UPDATE characters SET tasche = '0' WHERE id = ?",[player.data.charId],function(err3,res3) {
                                                                    if (err3) console.log("Error Tasche: "+err3);
                                                                    player.notify("~w~Tasche ~g~eingepackt");
                                                                    player.setClothes(5, 0, 0, 0);
                                                                    player.data.inventory = 10;
                                                                });                                                                 
                                                            }
                                                        }
                                                    });
                                                } else {
                                                    player.notify("Du hast noch zu viel bei dir!");
                                                }
                                            });
                                        }
                                    }
                                });
                            }
                        } else if (itemData.type == "fuel") {
                            if (parseInt(itemData.itemId) == 59 || parseInt(itemData.itemId) == 60) {
                                const pos = new mp.Vector3(player.position);
                                const veh = getVehicleFromPosition(pos, 2)[0];
                                if (mp.vehicles.exists(veh)) {   
                                    var countDownItem = true;                                 
                                    player.call('progress:start', [30, "Fülle auf"]);     
                                    setTimeout(_ => {
                                        try {
                                            if (mp.players.exists(player)) {
                                                var fuel = veh.getVariable("fuel");
                                                var newFuel = parseInt(parseInt(fuel) + parseInt(20));
                                                if (newFuel > 100) {
                                                    veh.setVariable("fuel",100);
                                                    player.notify("~g~Fahrzeug wurde aufgetankt");                                                    
                                                } else {
                                                    veh.setVariable("fuel",newFuel);
                                                    player.notify("~g~Fahrzeug wurde aufgetankt");
                                                }                                             
                                            }
                                        } catch (e) {
                                            console.log("ERROR - Inventory/index.js - useItem Timeout: " + e);
                                        }
                                    }, 30000);                               
                                }
                            }
                        } else if (itemData.type == "medic") {
                            if (parseInt(itemData.itemId) == 46) { 
                                var countDownItem = true;                                 
                                player.call('progress:start', [30, "Benutze Verbandskasten"]);     
                                player.playAnimation("amb@medic@standing@kneel@base","base",1,33);
                                setTimeout(_ => {
                                    try {
                                        if (mp.players.exists(player)) {
                                            player.stopAnimation();   
                                            if (player.health < 31) {
                                                player.health = 30;
                                                player.data.health = 30;       
                                            }                                                                               
                                        }
                                    } catch (e) {
                                        console.log("ERROR - Inventory/index.js - useItem Timeout: " + e);
                                    }
                                }, 30000);                              
                            }
                        
                        } else if (itemData.type == "drink") {
                                player.data.drink = parseInt(parseInt(player.data.drink) + parseInt(itemData.fillvalue));
                                player.playAnimation("amb@world_human_drinking@beer@male@idle_a","idle_c",1,49);
                                var countDownItem = true;
                            setTimeout(_ => {
                                try {
                                    if (mp.players.exists(player) && !player.vehicle) {
                                        player.stopAnimation();
                                    }
                                } catch (e) {
                                    console.log("ERROR - Inventory/index.js - useItem Timeout: " + e);
                                }
                            }, 5000);
                        } else if (itemData.type == "food") { 
                                player.data.food = parseInt(parseInt(player.data.food) + parseInt(itemData.fillvalue));
                                player.playAnimation("amb@code_human_wander_eating_donut@male@idle_a","idle_c",1,49);
                                var countDownItem = true;
                                setTimeout(_ => {
                                    try {
                                        if (mp.players.exists(player) && !player.vehicle) {
                                            player.stopAnimation();
                                        }
                                    } catch (e) {
                                        console.log("ERROR - Inventory/index.js - useFood: " + e);
                                    }
                                }, 5000);
                        } else if (itemData.type == "handy") {
                            var countDownItem = true;
                            gm.mysql.handle.query("UPDATE characters SET phone = '1' WHERE id = ?",[player.data.charId], function(err,res) {
                                if (err) console.log("Error in Update Phone: "+err);
                                player.notify("~g~Handy wurde aktiviert");
                                player.data.phone = 1;
                                player.setVariable("phone", 1);
                            });
                        } else if (itemData.type == "handysim") {  
                            var countDownItem = true;                          
                            gm.mysql.handle.query("DELETE FROM phone_contacts WHERE playerCharID = ? AND saved = '0'",[player.data.charId], function(err,res) {
                                if (err) console.log("Error in Delete phone contacts: "+err);
                                handynummer = "323" + Math.floor(Math.random() * 999999);
                                gm.mysql.handle.query("SELECT phoneNumber FROM characters WHERE phoneNumber = ?",[handynummer], function(err1,res10) {
                                    if (err1) console.log("Error in Select Characters Number: "+err1);
                                    if (res10.length > 0) {
                                        player.notify("~r~Die SIM Karte ist Kaputt");
                                    } else {
                                        gm.mysql.handle.query("UPDATE characters SET phoneNumber = ? WHERE id = ?",[handynummer,player.data.charId], function (err2,res2) {
                                            if (err2) console.log("Error in Updata characters Number: "+err2);
                                            player.notify("~g~Deine Telefonnummer lautet: "+handynummer);
                                            player.data.phoneNumber = handynummer;
                                        });
                                    }
                                });                                
                            });
                        }
                        if (mp.players.exists(player)) {
                            var health = parseInt(player.health);
                            if (player.data.food == 100 || player.data.food > 100) {
                               player.data.food = 100;
                            }
                            if (player.data.drink == 100 || player.data.drink > 100) {
                                player.data.drink = 100;
                             }
                            var food = parseInt(player.data.food);
                            var drink = parseInt(player.data.drink);
                            var inventory = parseInt(player.data.inventory);
                            player.call("changeValue", ['food', player.data.food]);
                            player.call("changeValue", ['drink', player.data.drink]);  
                            gm.mysql.handle.query("UPDATE `characters` SET health = ?, food = ?, drink = ? WHERE id = ?", [health, food, drink, player.data.charId], function(errUp, resUp) {
                                if (errUp) console.log("Error in Update User after use item: " + errUp);
                            });

                            if (countDownItem == true) {
                                if (itemData.amount > 1) {
                                    var newCount = parseInt(parseInt(itemData.amount) - 1);
                                    gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE id = ? AND charId = ?", [newCount, itemData.id, player.data.charId], function(err3, res3) {
                                        if (err3) console.log("Error in Countdown Item after use query: " + err3);
                                    });
                                } else {
                                    gm.mysql.handle.query("DELETE FROM user_items WHERE id = ? AND charId = ?", [itemData.id, player.data.charId], function(err2, res2) {
                                        if (err2) console.log("Error in Remove Item after use query: " + err2);
                                    });
                                }
                            }
                        }
                    });
                }
            }
        });
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

function getVehicleFromPosition(position, range) {
    const returnVehicles = [];

    mp.vehicles.forEachInRange(position, range,
        (vehicle) => {
            returnVehicles.push(vehicle);
        }
    );
    return returnVehicles;
}