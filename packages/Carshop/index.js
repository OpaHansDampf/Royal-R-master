require('./carshops.js');

mp.events.add("server:carshop:loadmarker", (player) => {
	gm.mysql.handle.query('SELECT * FROM carshops WHERE 1=1', [], function (error, results, fields) {
		for(let i = 0; i < results.length; i++) {
			if(mp.players.exists(player)) player.call("LoadCarShopMarkers",[results[i].posX,results[i].posY,results[i].posZ,results[i].posR,results[i].ped]);				
		}
	});	
});


mp.events.add("server:carshop:openShop",(player, id, type) => {
    gm.mysql.handle.query("SELECT price,model,id FROM carshop_cars WHERE type = ?",[type],function(err,res) {
        if (err) console.log("Error in Select Carshop Cars: "+err);
        if (res.length > 0) {
            gm.mysql.handle.query("SELECT name FROM carshops WHERE id = ?",[id], function (err1,res1) {
                if (err1) console.log("Error in Select Carshoüs: "+err1);
                var i = 1;
                let CarList = [];        
                res.forEach(function(shop) {
                    let obj = {"price": String(shop.price), "model": String(shop.model), "id": String(shop.id)};
                    CarList.push(obj);                
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:carshop:drawMenu", [JSON.stringify(CarList),res1[0].name]);
                    }
                    i++;
                });
            });            
        } else {
            if(mp.players.exists(player)) player.notify("~r~Der Shop hat keine Fahrzeuge");
        }
    });
});


mp.events.add("server:carshop:buy",(player, id, name) => {
    gm.mysql.handle.query("SELECT * FROM carshop_cars WHERE id = ?", [id], function (err,res) {
        if (err) console.log("Error in Select Vehicle Cars: "+err);
        if (res.length > 0) {
            gm.mysql.handle.query("SELECT amount FROM bank_konten WHERE ownerId = ? AND firma = '0'",[player.data.charId], function(err1,res1) {
                if (err1) console.log("error in select bank_konten on carshop: "+err1);
                if (res1.length > 0) {
                    if (res1[0].amount > res[0].price) {
                        gm.mysql.handle.query("SELECT * FROM carshops WHERE type = ?",[res[0].type], function (err2,res2) {
                            if (err2) console.log("Error in Select Carshop Type: "+err2);
                            const one = new mp.Vector3(res2[0].spawnX, res2[0].spawnY, res2[0].spawnZ);
                             const onehead = res2[0].spawnR; 
                                if (getVehicleFromPosition(one, 3).length > 0) {
                                    player.notify("~r~Der Spawn ist nicht Frei deshalb wurde dein Fahrzeug in die ~w~Garage ~r~geschickt"); 
                                    var newAm = parseFloat(res1[0].amount - parseFloat(res[0].price)).toFixed(2);
                                    gm.mysql.handle.query("UPDATE bank_konten SET amount = ? WHERE ownerId = ? AND firma = '0'",[newAm,player.data.charId],function(err3,res3) {
                                        if (err3) console.log("Error in Update bank: "+err3);

                                        var bs_timestamp = Math.floor(Date.now() / 1000);
                                        var bs_description = "Fahrzeugkauf ("+name+")";
                                        gm.mysql.handle.query("INSERT INTO bank_statements (toCharId, `date`, category, description, amount) VALUES (?, ?, ?, ?, ?)", [player.data.charId, bs_timestamp, "Folgelastschrift", bs_description, "-"+res[0].price], function(err11, res11) {
                                            if (err11) console.log("Error in Insert Bank Statements: "+err11);
                                        });

                                        player.data.bank = newAm;
                                        gm.mysql.handle.query("INSERT INTO vehicles SET model = ?, charId = ?, numberPlate = 'NOLIC', parked = '1', impounded = '0', fill = '100', km = '0', fuelart = ?, kofferraum = ?, dead = 'false'",[name, player.data.charId,res[0].tankart,res[0].kofferraum], function (err4,res4) {
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
                                                    player.notify("~g~Du hast ein "+name+" für "+res[0].price+"$ gekauft");
                                                    mp.events.call("sqlLog", player, player.data.firstname+" "+player.data.lastname+" hat ein "+name+" für "+res[0].price+"$ gekauft.");
                                                });
                                            });                                    
                                        });
                                    }); 
                                    return;
                                } else {
                                    if (mp.players.exists(player)) {
                                        var newAm = parseFloat(res1[0].amount - parseFloat(res[0].price)).toFixed(2);  
                                        gm.mysql.handle.query("UPDATE bank_konten SET amount = ? WHERE ownerId = ? AND firma = '0'",[newAm,player.data.charId],function(err3,res3) {
                                            if (err3) console.log("Error in Update bank: "+err3);

                                            var bs_timestamp = Math.floor(Date.now() / 1000);
                                            var bs_description = "Fahrzeugkauf ("+name+")";
                                            gm.mysql.handle.query("INSERT INTO bank_statements (toCharId, `date`, category, description, amount) VALUES (?, ?, ?, ?, ?)", [player.data.charId, bs_timestamp, "Folgelastschrift", bs_description, "-"+res[0].price], function(err12, res12) {
                                                if (err12) console.log("Error in Insert Bank Statements: "+err12);
                                            });

                                            player.data.bank = newAm;
                                            gm.mysql.handle.query("INSERT INTO vehicles SET model = ?, charId = ?, numberPlate = 'NOLIC', parked = '0', impounded = '0', fill = '100', km = '0', fuelart = ?, kofferraum = ?, dead = 'false'",[name, player.data.charId,res[0].tankart,res[0].kofferraum], function (err4,res4) {
                                                if (err4) console.log("Error in Insert Vehicles: "+err4);
                                                var veh = mp.vehicles.new(name, one, {
                                                    heading: onehead,
                                                    numberPlate: "NOLIC",
                                                    locked: true,
                                                    engine: false,
                                                    dimension: 0
                                                });                                             
                                                gm.mysql.handle.query("SELECT id FROM vehicles WHERE charID = ? ORDER BY id DESC LIMIT 1;",[player.data.charId],function(err5,res5) {
                                                    if (err5) console.log("Error in Select last ID: "+err5);                                                
                                                    gm.mysql.handle.query("INSERT INTO vehiclekeys (vehID, keyOwner, amount, isActive) VALUES (?,?,'2','Y')", [res5[0].id, player.data.charId], function(err6, res6) {
                                                        if (err3) console.log("Error in Insert Vehiclekeys: "+err3);
                                                        if (mp.vehicles.exists(veh)) {
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
                                                            veh.setVariable("fuel",100);
                                                            veh.setVariable("fuelart",res[0].tankart);
                                                            veh.setVariable("isDead","false");
                                                            veh.setVariable('Kilometer',0);
                                                            veh.setVariable("tanken","false");
                                                            veh.numberPlateType = 1;
                                                            veh.numberPlate = "NOLIC";
                                                            veh.engine = false;
                                                            veh.setVariable("vehId", res5[0].id);
                                                            player.notify("~g~Du hast ein "+name+" für "+res[0].price+"$ gekauft");
                                                            mp.events.call("sqlLog", player, player.data.firstname+" "+player.data.lastname+" hat ein "+name+" für "+res[0].price+"$ gekauft.");
                                                        }                                                        
                                                    });
                                                });                                    
                                            });
                                        }); 
                                        return;  
                                    }                                                                                             
                                }
                            });
                    } else {
                        if (mp.players.exists(player)) player.notify("~r~Du hast nicht genügend Geld auf der Bank");
                    }
            
                } else {
                    if (mp.players.exists(player)) player.notify("~r~Du besitzt kein Bank Konto");
                }
            });
        }
    });
});

function getVehicleFromPosition(position, range) {
    const returnVehicles = [];

    mp.vehicles.forEachInRange(position, range,
        (vehicle) => {
            returnVehicles.push(vehicle);
        }
    );
    return returnVehicles;
}