let rathaus = mp.colshapes.newSphere(-544.93, -204.48, 38.21, 3, 0);
mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(rathaus.isPointWithin(player.position) && player.data.mainmenu == false) {
        gm.mysql.handle.query("SELECT * FROM acualitywahl ORDER BY id DESC LIMIT 1",[],function(err,res) {
            if (err) console.log("Error in Select wahl: "+err);
            if (res.length > 0) {
                player.call("client:burgermeister:open",[player.data.factionrang,player.data.faction,[res[0].auswertung]]);    
                player.data.mainmenu = true;
            } 
        });        
    }    
  }
});

mp.events.add("server:burgermeister:load",(player) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM acualitywahl WHERE open = '1' ORDER BY id DESC LIMIT 1",[],function(err,res) {
            if (err) console.log("Error in Select wahl: "+err);
            if (res.length > 0) {
                gm.mysql.handle.query("SELECT name,id FROM burgermeisterwahl WHERE wahl = ?",[res[0].id],function(err1,res1) {
                    if (err1) console.log("Error in Select Bürgermeisterwahl: "+err1);
                    if(res1.length > 0) {
                        var i = 1;
                        let nameList = [];
                        res1.forEach(function(name) {
                            let obj = {"name": String(name.name), "id": String(name.id)};
                            nameList.push(obj);
                            if (parseInt(i) == parseInt(res1.length)) {
                                if(mp.players.exists(player)) player.call("client:burgermeister:viewmember", [JSON.stringify(nameList)]);
                            }
                            i++;
                        });
                    } else {
                        player.notify("~r~Keine aktuellen Teilnehmer!")
                    }
                });
            }
        });        
    }
});

mp.events.add("server:burgermeister:stimme",(player,id) => {
    if(mp.players.exists(player)) {
        if (player.data.burgerwahl == 0) {
            gm.mysql.handle.query("SELECT * FROM burgermeisterwahl WHERE id = ?",[id],function(err,res){
                if (err) console.log("Error in Select stimmen: "+err);
                if (res.length > 0) {
                    var stimmen = parseFloat(res[0].stimmen + parseFloat(1)).toFixed(2);  
                    gm.mysql.handle.query("UPDATE burgermeisterwahl SET stimmen = ? WHERE id = ?",[stimmen,id],function(err2,res2) {
                        if (err2) console.log("error in update stimmen: "+err2);
                        gm.mysql.handle.query("UPDATE characters SET burgerwahl = '1' WHERE id = ?",[player.data.charId],function(err3,res3) {
                            if (err3) console.log("Error in update wahl: "+err3);
                            player.notify("~g~Stimme wurde abgegeben");
                            player.data.burgerwahl = 1;
                        });
                    });
                } else {
                    player.notify("~r~Stimme konnte nicht abgegeben werden");
                }
            });
        } else {
            player.notify("~r~Du hast schon eine Stimme abgegeben");
        }        
    }
});

mp.events.add("server:burgermeister:aufstellen",(player) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM acualitywahl WHERE open = '1' ORDER BY id DESC LIMIT 1",[],function(err,res) {
            if (err) console.log("Error in selct: "+err);
            if (res.length > 0) {   
                if (player.data.aufgestellt == 0) {
                    var name = ""+player.data.firstname+" "+player.data.lastname;
                    gm.mysql.handle.query("INSERT INTO burgermeisterwahl SET name = ?,charId = ?,stimmen = '0',wahl = ?",[name,player.data.charId,res[0].id],function(err2,res2) {
                        if (err2) console.log("Error in Insert burgermeister: "+err2);
                        gm.mysql.handle.query("UPDATE characters SET aufgestellt = '1' WHERE id = ?",[player.data.charId],function(err3,res3) {
                            if (err3) console.log("Error in Update aufgestellt: "+err3);
                            player.notify("~g~Du hast dich zur Wahl aufgestellt");
                            player.data.aufgestellt = 1;
                        });
                    });
                } else {
                    player.notify("~r~Du hast dich schon aufgestellt");
                }                
            } else {
                player.notify("~r~Aktuell ist keine Offene Wahl");
            }
        });
    }    
});

mp.events.add("server:burgermeister:auswerten",(player) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT * FROM acualitywahl WHERE open = '1' ORDER BY id DESC LIMIT 1",[],function(err,res) {
            if (err) console.log("Error in Select wahl: "+err);
            if (res.length > 0) {
                gm.mysql.handle.query("SELECT * FROM burgermeisterwahl WHERE wahl = ? ORDER BY stimmen DESC LIMIT 1",[res[0].id],function(err2,res2) {
                    if (err2) console.log("Error in Select: "+err2);
                    if (res2.length > 0) {
                        gm.mysql.handle.query("UPDATE acualitywahl SET open = '0',auswertung = ? WHERE id = ?",[res2[0].name,res[0].id],function(err3,res3) {
                            if (err3) console.log("Error in Update: "+err3);
                            gm.mysql.handle.query("UPDATE characters SET aufgestellt = '0', burgerwahl = '0' WHERE 1=1");
                            mp.players.forEach(
                                (player, id) => {
                                   player.call("ShowShardMessage", ["~b~Bürgermeisterwahl", "~b~Die aktuelle Bürgermeisterwahl hat ~w~"+res2[0].name+" ~b~gewonnen!"]);        
                               }
                           );
                        });
                    } else {
                        player.notify("~r~Fehler bei der auswertung");
                    }
                });                
            } else {
                player.notify("~r~Aktuell ist keine aktive Wahl");
            }
        });
    }
});