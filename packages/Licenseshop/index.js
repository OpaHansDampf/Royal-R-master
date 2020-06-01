mp.events.add("server:license:openShop", (player) => {
  if (mp.players.exists(player)) {
    player.call("client:licenseshop:mainMenu",[player.data.pkw, player.data.lkw, player.data.pilot, player.data.job]);       
  }
});

mp.events.add("server:licenseshop:buyLicense",(player,item) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT money FROM characters WHERE id = ?", [player.data.charId], function(err5,res5) {
            if (err5) console.log("error im lizenzshop: "+err5);
            if (item == "[1500$] PKW Führerschein kaufen") {
                if (res5[0].money > 1500) {
                    gm.mysql.handle.query("UPDATE licenses SET pkw = '1' WHERE charId = ?", [player.data.charId], function(err,res) {
                        if (err) console.log("Error in Update pkw: "+err);
                        var newAm = parseFloat(res5[0].money - parseFloat(1500*1).toFixed(2)).toFixed(2);
                        gm.mysql.handle.query("UPDATE characters SET money = ? WHERE id = ?", [newAm, player.data.charId], function(err2,res2) {
                            if (err2) console.log("Error in Update characters: "+err2);
                            player.data.pkw = 1;
                            player.notify("~g~PKW Führerschein gekauft");
                            player.call("client:licenseshop:mainMenu",[player.data.pkw, player.data.lkw, player.data.pilot, player.data.job]);
                        });
                    });
                } else {
                    player.notify("~r~Du hast nicht genügend Bargeld!");
                }
                
            } else
            if (item == "[4500$] LKW Führschein kaufen") {
                if (res5[0].money > 4500) {
                    gm.mysql.handle.query("UPDATE licenses SET lkw = '1' WHERE charId = ?", [player.data.charId], function(err,res) {
                        if (err) console.log("Error in Update lkw: "+err);
                        var newAm = parseFloat(res5[0].money - parseFloat(4500*1).toFixed(2)).toFixed(2);
                        gm.mysql.handle.query("UPDATE characters SET money = ? WHERE id = ?", [newAm, player.data.charId], function(err2,res2) {
                            if (err2) console.log("Error in Update characters: "+err2);
                            player.data.lkw = 1;
                            player.notify("~g~LKW Führerschein gekauft");
                            player.call("client:licenseshop:mainMenu",[player.data.pkw, player.data.lkw, player.data.pilot, player.data.job]);
                        });
                    });
                } else {
                    player.notify("~r~Du hast nicht genügend Bargeld!");
                }
                
            } else
            if (item == "[5000$] Piloten Lizenz kaufen") {
                if (res5[0].money > 5000) {
                    gm.mysql.handle.query("UPDATE licenses SET pilot = '1' WHERE charId = ?", [player.data.charId], function(err,res) {
                        if (err) console.log("Error in Update pilot: "+err);
                        var newAm = parseFloat(res5[0].money - parseFloat(5000*1).toFixed(2)).toFixed(2);
                        gm.mysql.handle.query("UPDATE characters SET money = ? WHERE id = ?", [newAm, player.data.charId], function(err2,res2) {
                            if (err2) console.log("Error in Update characters: "+err2);
                            player.data.pilot = 1;
                            player.notify("~g~Pilotenlizenz gekauft");
                            player.call("client:licenseshop:mainMenu",[player.data.pkw, player.data.lkw, player.data.pilot, player.data.job]);
                        });
                    });
                } else {
                    player.notify("~r~Du hast nicht genügend Bargeld!");
                }                
            } else
            if (item == "Job Lizenz kaufen") {
                gm.mysql.handle.query("UPDATE licenses SET job = '1' WHERE charId = ?", [player.data.charId], function(err,res) {
                    if (err) console.log("Error in Update job: "+err);
                    player.data.job = 1;
                    player.notify("~g~Joblizenz gekauft");
                    player.call("client:licenseshop:mainMenu",[player.data.pkw, player.data.lkw, player.data.pilot, player.data.job]);
                });
            }
        });
    }    
});