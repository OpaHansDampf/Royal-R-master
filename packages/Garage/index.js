require('./garages.js');

mp.events.add("server:garage:loadmarker", (player) => {
	gm.mysql.handle.query('SELECT * FROM garage WHERE 1=1', [], function (error, results, fields) {
		for(let i = 0; i < results.length; i++) {
            player.call("LoadGaragenMarkers",[results[i].pedx,results[i].pedy,results[i].pedz, results[i].pedr,results[i].ped]);
            player.call("LoadGaragenParkInMarkers",[results[i].parkInX,results[i].parkInY,results[i].parkInZ]);					
		}
	});	
});

mp.events.add("server:garage:parkoutmenu",(player,id) => {
 gm.mysql.handle.query("SELECT numberPlate,model,id FROM vehicles WHERE charId = ? AND parked = '1' AND impounded = '0'",[player.data.charId],function(err,res) {
    if(err) console.log("Error in Select vehicles :"+err);
    if (res.length > 0) {
        var i = 1;
        let VehList = [];
        res.forEach(function(veh) {
            let obj = {"numberPlate": String(veh.numberPlate), "model": String(veh.model), "id": String(veh.id)};
            VehList.push(obj);
            if (parseInt(i) == parseInt(res.length)) {
                if(mp.players.exists(player)) player.call("client:garage:parkoutmenu", [JSON.stringify(VehList),id]);
            }
            i++;
        });
    } else {
        player.notify("~r~Du hast keine Fahrzeuge!");
    }
 });
});


mp.events.add("server:garage:parkout",(player,vehid,id) => {
    gm.mysql.handle.query("SELECT * FROM garage WHERE id = ?",[id], function (err,res) {
        if (err) console.log("Error in Select Garage: "+err);
        gm.mysql.handle.query("SELECT * FROM vehicles WHERE id = ?",[vehid],function(err1,res1) {
            if (err1) console.log("Error in Select Vehicles on Garage: "+err);
            if (res.length > 0) {
                    const one = new mp.Vector3(res[0].spawn1x, res[0].spawn1y, res[0].spawn1z);
                    const onehead = res[0].spawn1r;
                    const two = new mp.Vector3(res[0].spawn2x, res[0].spawn2y, res[0].spawn2z);
                    const twohead = res[0].spawn2r;  
                    gm.mysql.handle.query("SELECT * FROM vehicle_block WHERE model = ?",[res1[0].model],function(err3,res3) {
                    if (err3) console.log("Error in Select vehicleblock: "+err3);
                    if (res3.length > 0) {
                        if (res3[0].block == 1) {
                            player.notify("~r~Dieses Fahrzeug befindet sich in Winterwartung");
                        } else {
                            if (getVehicleFromPosition(one, 3).length > 0) {    
                                if (getVehicleFromPosition(two, 3).length > 0) {
                                    player.notify("~r~Parkplätze sind blockiert!");
                                } else {
                                    var veh = mp.vehicles.new(res1[0].model, two, {
                                        heading: twohead,
                                        numberPlate: res1[0].numberPlate,
                                        locked: true,
                                        engine: false,
                                        dimension: 0
                                    });                               
                                    gm.mysql.handle.query("UPDATE vehicles SET parked = '0' WHERE id = ?",[vehid],function (err2,res2) {
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
                                            veh.setVariable("neoneingebaut",true);   
                                        } else {
                                            veh.neonEnabled = false;
                                            veh.setVariable("neon",false);
                                            veh.setVariable("neoneingebaut",false);   
                                        }                    
                                        veh.setNeonColor(parseInt(res1[0].neonr), parseInt(res1[0].neong), parseInt(res1[0].neonb));
                                        veh.setVariable("neonColorR", parseInt(res1[0].neonr));
                                        veh.setVariable("neonColorG", parseInt(res1[0].neong));
                                        veh.setVariable("neonColorB", parseInt(res1[0].neonb));*/
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
                                        veh.windowTint = res1[0].windowTint;
                                        veh.numberPlateType = 1;
                                        veh.numberPlate = String(res1[0].numberPlate);
                                        veh.engine = false;
                                        veh.dimension = player.dimension;
                                        player.notify("~g~Dein Fahrzeug wurde ausgeparkt");  
                                    });                        
                                }
                            } else {
                                var veh = mp.vehicles.new(res1[0].model, one, {
                                    heading: onehead,
                                    numberPlate: res1[0].numberPlate,
                                    locked: true,
                                    engine: false,
                                    dimension: 0                     
                            });  
                            gm.mysql.handle.query("UPDATE vehicles SET parked = '0' WHERE id = ?",[vehid],function (err2,res2) {
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
                                player.notify("~g~Dein Fahrzeug wurde ausgeparkt");  
                            });                    
                        }                    
                    }
                    } else {
                        if (getVehicleFromPosition(one, 3).length > 0) {    
                            if (getVehicleFromPosition(two, 3).length > 0) {
                                player.notify("~r~Parkplätze sind blockiert!");
                            } else {
                                var veh = mp.vehicles.new(res1[0].model, two, {
                                    heading: twohead,
                                    numberPlate: res1[0].numberPlate,
                                    locked: true,
                                    engine: false,
                                    dimension: 0
                                });                               
                                gm.mysql.handle.query("UPDATE vehicles SET parked = '0' WHERE id = ?",[vehid],function (err2,res2) {
                                    if (err2) console.log("Error in Update vehicles: "+err);                            
                                    veh.setVariable("vehId",res1[0].id);
                                    veh.setVariable("fuel",res1[0].fill);
                                    veh.setVariable("fuelart",res1[0].fuelart);
                                    veh.setVariable("isDead",res1[0].dead);
                                    veh.setVariable('Kilometer',res1[0].km);
                                    if (res1[0].hlight !== 999) {
                                        veh.data.headlightColor = Number(res1[0].hlight);
                                    }
                                    veh.setTyreSmokeColor(Number(res1[0].wheelr), Number(res1[0].wheelg), Number(res1[0].wheelb));
                                    veh.setVariable("tanken","false");
                                    /*if(res1[0].neonEnabled == 1) {
                                        veh.neonEnabled = true;
                                        veh.setVariable("neon",true);
                                        veh.setVariable("neoneingebaut",true);   
                                    } else {
                                        veh.neonEnabled = false;
                                        veh.setVariable("neon",false);
                                        veh.setVariable("neoneingebaut",false);   
                                    }                    
                                    veh.setNeonColor(parseInt(res1[0].neonr), parseInt(res1[0].neong), parseInt(res1[0].neonb));
                                    veh.setVariable("neonColorR", parseInt(res1[0].neonr));
                                    veh.setVariable("neonColorG", parseInt(res1[0].neong));
                                    veh.setVariable("neonColorB", parseInt(res1[0].neonb));*/
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
                                    veh.windowTint = res1[0].windowTint;
                                    veh.numberPlateType = 1;
                                    veh.numberPlate = String(res1[0].numberPlate);
                                    veh.engine = false;
                                    veh.dimension = player.dimension;
                                    player.notify("~g~Dein Fahrzeug wurde ausgeparkt");  
                                });                        
                            }
                        } else {
                            var veh = mp.vehicles.new(res1[0].model, one, {
                                heading: onehead,
                                numberPlate: res1[0].numberPlate,
                                locked: true,
                                engine: false,
                                dimension: 0                       
                        });  
                        gm.mysql.handle.query("UPDATE vehicles SET parked = '0' WHERE id = ?",[vehid],function (err2,res2) {
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
                            player.notify("~g~Dein Fahrzeug wurde ausgeparkt");  
                        });                    
                    } 
                    }                     
                });                                          
            }             
        });
        
    });
});

mp.events.add("server:garage:parkin", (player,id) => {
    gm.mysql.handle.query("SELECT * FROM garage WHERE id = ?",[id], function (err,res) {
        if (err) console.log("Error in Select garages: "+err);
        garage = res[0];
        const pos = new mp.Vector3(garage.parkInX, garage.parkInY, garage.parkInZ);
        const veh = getVehicleFromPosition(pos, 2)[0];
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
});
});

mp.events.add("server:lspd:parkin",(player,x,y,z) => {
    const pos = new mp.Vector3(player.position);
    const veh = getVehicleFromPosition(pos, 2)[0];
    veh.destroy();
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