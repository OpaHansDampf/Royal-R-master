/*let gangshop = mp.colshapes.newSphere(186, -1035, 29, 2, 0);
mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(gangshop.isPointWithin(player.position)) {
        mp.events.call("server:gang:openShop",player);    
        //player.data.mainmenu = true;
    }    
  }
});*/


mp.events.add("inputValueText", (player, trigger, output, text) => {
    if(mp.players.exists(player)) {
      if(trigger === "ganggründung") { 
          if (output !== "") {
            var str = output.toUpperCase();
            var strTwo = str;
            if (str.length <= 12) {
                    var result = str.match(/^([0-9]|[A-Z])+([0-9A-Z]+)$/i);
                    if (result !== null) {			
                        var gangname = str;
                        gm.mysql.handle.query("SELECT gang FROM characters WHERE gang = ?",[gangname],function(err,res) {
                            if (err) console.log("Error in Select: "+err);
                            if (res.length > 0) {
                                player.notify("~r~Name schon vergeben");
                                return;
                            } else {
                                gm.mysql.handle.query("SELECT amount FROM bank_konten WHERE ownerId = ? AND firma = '0'",[player.data.charId],function(err2,res2) {
                                    if (err2) console.log("Error in slect bank amount: "+err2);
                                    if (res2.length > 0) {
                                        if (res2[0].amount >= 75000) {
                                            var newAm = parseFloat( res2[0].amount - parseFloat(75000*1).toFixed(2) ).toFixed(2);;
                                            gm.mysql.handle.query("UPDATE bank_konten SET amount = ? WHERE ownerId = ? AND firma = '0'",[newAm,player.data.charId],function(err3,res3) {
                                                if (err3) console.log("Error in Update Bankkonten: "+err);

                                                var bs_timestamp = Math.floor(Date.now() / 1000);
                                                var bs_description = "Ganggründung ("+gangname+")";
                                                gm.mysql.handle.query("INSERT INTO bank_statements (toCharId, `date`, category, description, amount) VALUES (?, ?, ?, ?, ?)", [player.data.charId, bs_timestamp, "Folgelastschrift", bs_description, "-75000"], function(err11, res11) {
                                                    if (err11) console.log("Error in Insert Bank Statements: "+err11);
                                                });

                                                gm.mysql.handle.query("UPDATE characters SET gang = ?, gangrang = '2' WHERE id = ?",[gangname,player.data.charId],function(err4,res4) {
                                                    if (err4) console.log("Error in update gangchayra: "+err4);
                                                    player.notify("~g~Gruppierung: ~w~"+gangname+"~g~ wurde erstellt");
                                                    player.data.gang = ""+gangname;
                                                    player.data.gangrang = 2;  
                                                });
                                            });
                                        } else {
                                            player.notify("~r~Du hast nicht genügend Geld!");
                                        }
                                    }
                                });
                            }
                        });
                    } else {
                        player.notify("~r~Es sind keine Sonderzeichen erlaubt");
                    }
                } else {
                    player.notify("~r~Es sind maximal 12 Zeichen erlaubt");
                }

          } else {
              player.notify("~r~Du musst einen Text eingeben");
          }
      }
    }
});

mp.events.add("server:gang:members",(player, gang) => {
    gm.mysql.handle.query("SELECT firstname,lastname,gangrang,id FROM characters WHERE gang = ?",[gang],function(err,res) {
        if (err) console.log("Error in Select Gang member: "+err);
        if (res.length > 0) {
            var MemberList = [];
            var i = 1;
            res.forEach(function(players) {
                let obj = { "firstname": String(players.firstname), "lastname": String(players.lastname), "rang": String(players.gangrang), "id": String(players.id)};
                MemberList.push(obj);
                if (parseInt(i) == parseInt(res.length)) {
                    if (mp.players.exists(player)) player.call("client:gang:memberlist", [JSON.stringify(MemberList)]);
                }
                i++;
            });
        } else {
            player.notify("~r~Die Gang hat keine Mitglieder");
        }
    });
});

mp.events.add("server:gang:markgang",(player,gang) => {
    gm.mysql.handle.query("UPDATE gangs SET marked = '1' WHERE gang = ?",[gang],function(err,res) {
        if (err) console.log("Error in Update Gangdatas: "+err);
        gm.mysql.handle.query("INSERT INTO blips SET posX = ?,posY = ?, name = ?, color = '1', blipid = '84', scale = '1'",[player.position.x,player.position.y,gang],function(err1,res1) {
            if (err1) console.log("Error in Update Gang marker: "+err1);
            player.notify("~g~Die Makierung ist ab nächsten Serverrestart aktiv!");
        });
    });
});

mp.events.add("server:gang:demark",(player,gang) => {
    gm.mysql.handle.query("UPDATE gangs SET marked = '0' WHERE name = ?",[gang],function(err,res) {
        if (err) console.log("Error in Update Gangdatas: "+err);
        gm.mysql.handle.query("DELETE FROM blips WHERE gang = ?",[gang],function(err1,res1) {
            if (err1) console.log("Error in Update Gang marker: "+err1);
            player.notify("~g~Die Makierung ist ab nächsten Serverrestart deaktiviert!");
        });
    });
});

mp.events.add("server:gang:garwart",(player,gang) => {
    gm.mysql.handle.query("UPDATE gangs SET garx = ?,gary = ?,garz = ? WHERE gang = ?",[player.position.x,player.position.y,player.position.z,gang],function(err,res) {
        if (err) console.log("Error in Update Garwart: "+err);
        player.notify("~g~Die Garage ist ab nächsten Serverrestart aktiv!");
    });
});

mp.events.add("server:gang:parkout",(player,gang) => {
    gm.mysql.handle.query("UPDATE gangs SET garparkoutx = ?,garparkouty = ?,garparkoutz = ? WHERE gang = ?",[player.position.x,player.position.y,player.position.z,gang],function(err,res) {
        if (err) console.log("Error in Update Garwart: "+err);
        player.notify("~g~Der Garagenspawn wurde geändert!");
    });
});

mp.events.add("server:gang:parkin",(player,gang) => {
    gm.mysql.handle.query("UPDATE gangs SET garparkinx = ?,garparkiny = ?,garparkinz = ? WHERE gang = ?",[player.position.x,player.position.y,player.position.z,gang],function(err,res) {
        if (err) console.log("Error in Update Garwart: "+err);
        player.notify("~g~Die Garageneinfahrt wurde geändert!");
    });
});

mp.events.add("server:gang:settings",(player,gang) => {
    gm.mysql.handle.query("SELECT * FROM gangs WHERE gang = ?",[gang],function(err,res) {
        if (err) console.log("Error in Select Gangdates: "+err);
        player.call("client:gang:settings",[gang,res[0].marked]);
    });
});

mp.events.add("server:gang:leavegang",(player,gang) => {
    gm.mysql.handle.query("UPDATE characters SET gang = 'none', gangrang = '0' WHERE id = ?",[player.data.charId],function(err,res) {
        if (err) console.log("Error in Update characters: "+err);
        player.data.gang = "none";
        player.data.gangrang = 0;
        player.notify("~r~Du hast die "+gang+" verlassen!");
    });
});

mp.events.add("server:gang:invite",(player,gang) => {
    getNearestPlayer(player, 2);
    if (currentTarget !== null) {
        if (currentTarget.data.gang == "none") {
            currentTarget.call("client:gang:invitemenu",[player,gang]);
            player.notify("~g~Du hast der Person eine Einladung gegeben!");
        } else {
            player.notify("~r~Die Person befindet sich schon in einer Gang!");
        }
    } else {
        player.notify("~r~Keiner in deiner Nähe");
    }
});

mp.events.add("server:gang:accept",(player,gang,gangleader) => {
    if (mp.players.exists(player)) {
        if (mp.players.exists(gangleader)) {
            gm.mysql.handle.query("UPDATE characters SET gang = ?, gangrang = 1 WHERE id = ?",[gang,player.data.charId], function(err,res) {
                if (err) console.log("Error in Update characters: "+err);
                player.notify("~g~Du bist der Gang beigetreten!");
                gangleader.notify("~g~Die Person ist der Gang beigetreten");
                player.data.gang = gang;
                player.data.gangrang = 1;
            });        
        }
    }    
});

mp.events.add("server:gang:deny",(player,gang,gangleader) => {
    player.notify("~g~Du hast die Einladung abgelehnt!");
    gangleader.notify("~r~Die Person hat die Einladung abgelehnt!");
});

mp.events.add("server:gang:kickMember",(player,id) => {
    if (mp.players.exists(player)) {
        if (id == player.data.charId) {
            player.notify("~r~Du kannst dich nicht selbst kicken!");
            return;
        } else {
            if (player.data.gangrang > 1) {
                gm.mysql.handle.query("SELECT onlineId FROM characters WHERE id = ?",[id],function(err1,res1) {
                    if (err1) console.log("error in select chars: "+err);
                    if (res1.length > 0) {
                        res1.forEach(function(lspd) {
                            if (lspd.isOnline == 1) {
                                gm.mysql.handle.query("UPDATE characters SET gang = 'none', gangrang = '0' WHERE id = ?",[id],function(err2,res2) {
                                    if (err2) console.log("Error in Update gang Char: "+err2);
                                    mp.players.forEach(
                                        (playerToSearch, id) => {
                                            if (playerToSearch.id == lspd.onlineId) {   
                                                playerToSearch.data.gang = "none";
                                                playerToSearch.data.gangrang = 0;     
                                                playerToSearch.notify("~r~Du wurdest aus deiner Gang geworfen");    
                                            }                      
                                        }                        
                                    );
                                    player.notify("~g~Der Gangmember wurde gekickt!");
                                });
                            } else {
                                gm.mysql.handle.query("UPDATE characters SET gang = 'none', gangrang = '0' WHERE id = ?",[id],function(err,res) {
                                    if (err) console.log("Erroe in Update kick gang: "+err);
                                });
                            }   
                        });            
                    }
                });
            }   
        }
    }     
});

mp.events.add("server:gang:openShop",(player) => {
    if(mp.players.exists(player)) {
        if (player.data.gang !== "none") {
            gm.mysql.handle.query("SELECT * FROM gangshop WHERE 1=1",[],function(err,res) {
                if (err) console.log("Error in Select Shop Items: "+err);
                if (res.length > 0) {
                    var i = 1;
                    let ItemList = [];          
                    res.forEach(function(shop) {
                        let obj = {"name": String(shop.name), "price": String(shop.price), "id": String(shop.itemId)};
                        ItemList.push(obj);                
                        if (parseInt(i) == parseInt(res.length)) {
                            if(mp.players.exists(player)) player.call("client:gang:drawShopMenu", [JSON.stringify(ItemList)]);
                        }
                        i++;
                    });
                } else {
                    player.notify("~r~Der Shop hat keine Items");
                }
            });
        } else {
            player.notify("~r~Verpiss dich mit dir rede ich nicht!");
        }        
    }    
});

mp.events.add("server:gang:buy",(player,itemId) => {
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
            gm.mysql.handle.query("SELECT * FROM gangshop WHERE itemId = ?", [itemId], function (err3,res3) {
                if (err3) console.log("Error in Select Shop Items: "+err3);
                if (res3.length > 0) {
                    if (res3[0].amount > 0) {
                        if (player.data.money > res3[0].price) {
                            var newMoney = parseFloat( parseFloat(player.data.money*1).toFixed(2) - parseFloat(res3[0].price*1).toFixed(2) ).toFixed(2);
                            gm.mysql.handle.query("UPDATE characters SET money = ? WHERE id = ?", [newMoney,player.data.charId], function (err4,res4) {
                                if (err4) console.log("Error in Update characters on Shop: "+err4);
                                gm.mysql.handle.query("SELECT * FROM user_items WHERE itemId = ? AND charId = ?",[itemId, player.data.charId],function (err,res) {
                                    if (res.length > 0) {
                                        //User hat das Item
                                        var newAm = parseInt(parseInt(res[0].amount) + parseInt(1));
                                        gm.mysql.handle.query("UPDATE user_items SET amount = ? WHERE itemId = ? AND charId = ?",[newAm, itemId, player.data.charId],function(err1,res1) {
                                            if (err1) console.log("Error in Update user_items: "+err1);
                                            player.notify("~g~Du hast 1x "+res3[0].name+" gekauft für "+res3[0].price+"$");           
                                            player.data.money = newMoney;    
                                            player.call("updateHudMoney",[newMoney]);       
                                            player.call("changeValue", ['money', newMoney]);   
                                            mp.events.call("sqlLog", player, player.data.firstname+" "+player.data.lastname+" hat 1x"+res3[0].name+"gekauft.");                  
                                        });
                                    } else {
                                        //User hat das Item Nicht!
                                        gm.mysql.handle.query("INSERT INTO user_items SET amount = '1', itemId = ?, charId = ?", [itemId, player.data.charId], function (err2,res2) {
                                            if (err2) console.log("Error in Inser user_items: "+err2); 
                                            player.notify("~g~Du hast 1x "+res3[0].name+" gekauft für "+res3[0].price+"$");           
                                            player.data.money = newMoney;    
                                            player.call("updateHudMoney",[newMoney]);       
                                            player.call("changeValue", ['money', newMoney]);          
                                            mp.events.call("sqlLog", player, player.data.firstname+" "+player.data.lastname+" hat 1x"+res3[0].name+"gekauft.");         
                                        });
                                    }
                                });                                                      
                            });
                        } else {
                            player.notify("~r~Du hast nicht genügend Bargeld");
                        } 
                    } else {
                        player.notify("~r~Davon habe ich nichts mehr sry man");
                    }                                   
                }
            });        
        }
    });
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