let zulassung = mp.colshapes.newSphere(337.7949523925781, -1562.512939453125, 30.298032760620117, 1, 0);
mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(zulassung.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:zulassung:mainMenu");    
        player.data.mainmenu = true;
    }    
  }
});

mp.events.add("server:zulassung:listanmelden",(player) => {
    gm.mysql.handle.query("SELECT model,id,numberPlate FROM vehicles WHERE charId = ? AND zugelassen = '0'",[player.data.charId], function (err,res) {
        if (err) console.log("Error in Select vehicles: "+err);
        if (res.length > 0) {
            var i = 1;
            let vehList = [];
            res.forEach(function(veh) {
                let obj = {"model": String(veh.model), "id": String(veh.id), "kennzeichen": String(veh.numberPlate)};
                vehList.push(obj);
                if (parseInt(i) == parseInt(res.length)) {
                    if(mp.players.exists(player)) player.call("client:zulassung:vehlistA", [JSON.stringify(vehList)]);
                }
                i++;
            });
        } else {
            player.notify("~r~Du besitzt keine Fahrzeuge");
        }
    });
});

mp.events.add("server:zulassung:listabmelden",(player) => {
    gm.mysql.handle.query("SELECT model,id,numberPlate FROM vehicles WHERE charId = ? AND zugelassen = '1'",[player.data.charId], function (err,res) {
        if (err) console.log("Error in Select vehicles: "+err);
        if (res.length > 0) {
            var i = 1;
            let vehList = [];
            res.forEach(function(veh) {
                let obj = {"model": String(veh.model), "id": String(veh.id), "kennzeichen": String(veh.numberPlate)};
                vehList.push(obj);
                if (parseInt(i) == parseInt(res.length)) {
                    if(mp.players.exists(player)) player.call("client:zulassung:vehlistB", [JSON.stringify(vehList)]);
                }
                i++;
            });
        } else {
            player.notify("~r~Du besitzt keine Fahrzeuge");
        }
    });
});

mp.events.add("server:zulassung:anmelden",(player,id) => {
    player.setVariable("vehZulassung",id);
});

mp.events.add("inputValueText", (player, trigger, output, text) => {
    if(mp.players.exists(player)) {
      if(trigger === "vehanmelden") {  
        var str = output.toUpperCase();
		var strTwo = str;
        if (str.length <= 8) {
                var result = str.match(/^([0-9]|[A-Z])+([0-9A-Z]+)$/i);
                if (result !== null) {			
                    var newplate = str;
                    var amount = 100;
                    gm.mysql.handle.query("SELECT numberPlate FROM vehicles WHERE numberPlate = ?", [newplate], function(err3, res3){
                        if (err3) console.log("ERROR in SELECT vehicles: "+err3);
                        if (res3.length > 0) {
                            player.notify("~r~Dieses Kennzeichen ist schon vergeben");
                        } else {
                            gm.mysql.handle.query("SELECT money FROM characters WHERE id = ?", [player.data.charId], function(err1, res1) {
                                if (err1) console.log("ERROR in SELECT money: "+err1);
                                if (res1.length > 0) {
                                    money = res1[0].money;
                                    amount = parseFloat(amount).toFixed(2);
                                    if ( (amount*1) > (money*1)) {
                                        player.notify("~r~Du hast nicht genügend Geld dabei");
                                        console.log("Zulassungsstelle - nicht genug Geld");
                                    } else {
                                        var newAm = parseFloat( player.data.money - parseFloat(amount*1).toFixed(2) ).toFixed(2);
                                        if (mp.players.exists(player)) player.call("updateHudMoney", [newAm]);
                                        gm.mysql.handle.query("UPDATE characters SET money = ? WHERE id = ?", [newAm, player.data.charId], function (err2, res2){
                                            if (err2) console.log("ERROR in Update Money: "+err2);
                                                else {
                                                    var vehId = player.getVariable("vehZulassung");
                                                    gm.mysql.handle.query("SELECT id FROM vehicles WHERE id = ?",[vehId],function(err4,res4) {
                                                    if (res4.length !== 1) return;
                                                    res4.forEach(function(veh) {
                                                        if (veh.firstRegistration == null || veh.firstRegistration == "") {
                                                            var date = new Date();
                                                            var month = parseInt(parseInt(date.getMonth()) + 1);
                                                            var erstZulassung = ""+date.getFullYear()+"-"+month+"-"+date.getDate()+"";                                                            
                                                            gm.mysql.handle.query("UPDATE vehicles SET numberPlate = ? , zugelassen = '1', firstRegistration = ? WHERE id = ?",[newplate, erstZulassung, vehId], function(err, res){
                                                                if (err) console.log("ERROR in UPDATE vehicle numberPlate: "+err);
                                                                else {
                                                                    player.notify("~g~Dein Fahrzeug wurde erstzugelassen");
                                                                    player.data.money = newAm;
                                                                    player.call("updateHudMoney",[newAm]);       
                                                                    player.call("changeValue", ['money', newAm]); 
                                                                    mp.vehicles.forEach(
                                                                        (vehicle, id) => {
                                                                            if (mp.vehicles.exists(vehicle) && vehicle.getVariable("vehId") == vehId) {
                                                                                vehicle.numberPlate = newplate;
                                                                            }
                                                                        }
                                                                    );
                                                                }
                                                            });
                                                        } else {
                                                            gm.mysql.handle.query("UPDATE vehicles SET numberPlate = ? , zugelassen = '1' WHERE id = ?",[newplate, vehId], function(err, res){
                                                                if (err) console.log("ERROR in UPDATE vehicle numberPlate: "+err);
                                                                else {
                                                                    player.notify("~g~Dein Fahrzeug wurde zugelassen")
                                                                    player.data.money = newAm;
                                                                    player.call("updateHudMoney",[newAm]);       
                                                                    player.call("changeValue", ['money', newAm]); 
                                                                    mp.vehicles.forEach(
                                                                        (vehicle, id) => {
                                                                            if (mp.vehicles.exists(vehicle) && vehicle.getVariable("vehId") == vehId) {
                                                                                vehicle.numberPlate = newplate;
                                                                            }
                                                                        }
                                                                    );
                                                                }
                                                            });
                                                        }
                                                    });
                                                });
                                            }                                                                                   
                                        });
                                    }
                                }
                            });
                            return;
                        }
                    });
                } else {
                    player.notify("~r~Es sind keine Sonderzeichen erlaubt!");
                }
        }	else {
            player.notify("~r~Es sind nur 8 Zeichen erlaubt");
        }
      }
    }
});

mp.events.add("server:zulassung:abmelden",(player, ids) => {
    gm.mysql.handle.query("UPDATE vehicles SET numberPlate = 'NOLIC', zugelassen = '0' WHERE id = ?",[ids],function(err,res) {
        if (err) console.log("Error in Update Vehicles");
        player.notify("~g~Dein Fahrzeug wurde abgemeldet");
        mp.vehicles.forEach(
            (vehicle, id) => {
                if (mp.vehicles.exists(vehicle) && vehicle.getVariable("vehId") == ids) {
                    vehicle.numberPlate = "NOLIC";
                }
            }
        );
    });
});