global.gm = {};

gm.mysql = require('./mysql.js');
gm.auth = require('./auth.js');
gm.clothes = require("./Clothes/index.js");

gm.mysql.connect(function() { });

require("./Player/pushE.js");
require("./Other/better.js");
require("./Character");



//Commands
require("./Admin/coding-commands.js");


var conf = require("./config.js");



mp.events.add("playerChat", (player, text) =>
{
	//mp.players.broadcast(`${player.name}: ${text}`);
});

/*loadVehicles();
function loadVehicles()
{
    gm.mysql.handle.query('SELECT * FROM vehicles WHERE parked = ?', [0], function (error, results, fields) {
        for(let i = 0; i < results.length; i++) {
        if (results[i].inaktive < 1440) {
            conf.veh_params[i]['model'] = results[i].model;
            conf.veh_params[i]['id'] = results[i].id;
            conf.veh_params[i]['modelId'] = results[i].modelId;
            conf.veh_params[i]['numberPlate'] = results[i].numberplate;
            conf.veh_params[i]['posX'] = parseFloat(results[i].posX);
            conf.veh_params[i]['posY'] = parseFloat(results[i].posY);
            conf.veh_params[i]['posZ'] = parseFloat(results[i].posZ);
            conf.veh_params[i]['posR'] = parseFloat(results[i].posR);
            

            conf.sys_veh[i] = mp.vehicles.new(conf.veh_params[i]['model'], new mp.Vector3(parseFloat(conf.veh_params[i]['posX']), parseFloat(conf.veh_params[i]['posY']), parseFloat(conf.veh_params[i]['posZ'])),
            {
                    heading: conf.veh_params[i]['posR'],
                    numberPlate: conf.veh_params[i]['numberPlate'],
                    locked: true,
                    engine: false,
                    dimension: 0
            });
            conf.sys_veh[i].setVariable("vehId",conf.veh_params[i]['id']);
            conf.sys_veh[i].setVariable("fuel",results[i].fill);
            conf.sys_veh[i].setVariable("fuelart",results[i].fuelart);
            conf.sys_veh[i].setVariable("isDead",results[i].dead);
            conf.sys_veh[i].setVariable('Kilometer',results[i].km);
            conf.sys_veh[i].setVariable('tanken',"false");
            conf.sys_veh[i].neonEnabled = false;
            conf.sys_veh[i].setNeonColor(parseInt(results[i].neonr), parseInt(results[i].neong), parseInt(results[i].neonb));
            conf.sys_veh[i].setColor(results[i].pcolor, results[i].scolor);
            conf.sys_veh[i].setMod(48, results[i].design);
            conf.sys_veh[i].setMod(0, results[i].spoiler);
            conf.sys_veh[i].setMod(1, results[i].front);
            conf.sys_veh[i].setMod(2, results[i].heck);
            conf.sys_veh[i].setMod(3, results[i].seite);
            conf.sys_veh[i].setMod(4, results[i].auspuff);
            conf.sys_veh[i].setMod(5, results[i].rahmen);
            conf.sys_veh[i].setMod(6, results[i].gitter);
            conf.sys_veh[i].setMod(7, results[i].haube);
            conf.sys_veh[i].setMod(8, results[i].kotfl);
            conf.sys_veh[i].setMod(10, results[i].dach);
            conf.sys_veh[i].setMod(11, results[i].motor);
            conf.sys_veh[i].setMod(12, results[i].bremsen);
            conf.sys_veh[i].setMod(13, results[i].getriebe);
            conf.sys_veh[i].setMod(14, results[i].hupe);
            conf.sys_veh[i].setMod(15, results[i].feder);
            conf.sys_veh[i].setMod(18, results[i].turbo);
            conf.sys_veh[i].setMod(22, results[i].xenon);
            conf.sys_veh[i].setMod(23, results[i].felgen);
            conf.sys_veh[i].wheelColor = results[i].wheelColor;
            conf.sys_veh[i].windowTint = results[i].windowTint;
            conf.sys_veh[i].numberPlateType = 1;
            conf.sys_veh[i].numberPlate = String(results[i].numberPlate);
            conf.sys_veh[i].engine = false;
            } else {
                gm.mysql.handle.query("UPDATE vehicles SET inaktive = '0', parked = 1 WHERE id = ?",[results[i].id],function(err3,res3) {
                    if (err3) console.log("Error in Update vehicles Startup: "+err3);
                });
            }        

        }
    });
}*/

loadStatus();
function loadStatus()
{
    gm.mysql.handle.query("UPDATE characters SET isOnline = '0', onlineId = NULL WHERE 1=1",[], function(err,res) {
        if(err) console.log("Error in Startup Onlinestatus; "+err);          
        gm.mysql.handle.query("UPDATE characters SET health = '100' WHERE dead = '1'",[], function(err1,res1) {
            if(err1) console.log("Error in Startup Onlinestatus; "+err1); 
            gm.mysql.handle.query("UPDATE serverblock SET free = '1' WHERE 1=1",function(err2,res2) {
                if (err2) console.log("Error in Update Startup vehicles: "+err2);
                gm.mysql.handle.query("UPDATE vehicles SET parked = '1' WHERE 1=1",function(err4,res4) {
                    if (err4) console.log("Error: "+err4);
                });
                setTimeout(_ => {
                    gm.mysql.handle.query("UPDATE serverblock SET free = '1' WHERE 1=1",function(err2,res2) {
                        if (err2) console.log("Error in Update Startup vehicles: "+err2);
                        var date = new Date();
                        var month = parseInt(parseInt(date.getMonth()) + 1);
                        var Startup = ""+date.getFullYear()+"-"+month+"-"+date.getDate()+"";    
                        console.log("Server gestartet!: "+Startup);
                       /* mp.players.forEach((player) => {
                            player.call("autoLogin");		
                        });*/
                    });
                  }, 120000);                  
            });                   
        });     
    });
}

loadGarage();
function loadGarage()
{
    gm.mysql.handle.query("SELECT * FROM garage", [], function (error, results, fields) {
        if(error) console.log("Error in Load Garage: "+error);
        for(let i=0; i<results.length; i++) {
            conf.garage_params[i]['id'] = results[i].id;

            conf.garage_params[i]['id'] = results[i].id;
            conf.garage_params[i]['pedX'] = results[i].pedx;
            conf.garage_params[i]['pedY'] = results[i].pedy;
            conf.garage_params[i]['pedZ'] = results[i].pedz;
            conf.garage_params[i]['pedR'] = results[i].pedr;

           conf.garage_params[i] = mp.blips.new(50, new mp.Vector3(conf.garage_params[i]['pedX'],conf.garage_params[i]['pedY'],conf.garage_params[i]['pedZ']),
            {
                name: "Garage",
                color: 0,
                scale: 1,
                shortRange: true,
            });
            
        }
            
    })
}
/*loadAtm();
function loadAtm()
{
    gm.mysql.handle.query("SELECT * FROM atms", [], function (error, results, fields) {
        if(error) console.log("Error in Load Atm's: "+error);
        for(let i=0; i<results.length; i++) {
            conf.atms_params[i]['id'] = results[i].id;
            conf.atms_params[i]['posX'] = results[i].posX;
            conf.atms_params[i]['posY'] = results[i].posY;
            conf.atms_params[i]['posZ'] = results[i].posZ;
            conf.atms_params[i]['usable'] = results[i].usable;     
            conf.atms_params[i]  = mp.colshapes.newSphere(conf.atms_params[i]['posX'], conf.atms_params[i]['posY'], conf.atms_params[i]['posZ'], 3, 0);        
        }        
    });
}*/

loadShop();
function loadShop()
{
    gm.mysql.handle.query("SELECT * FROM shops", [], function (error, results, fields) {
        if(error) console.log("Error in Load Garage: "+error);
        for(let i=0; i<results.length; i++) {
            conf.shop_params[i]['id'] = results[i].id;

            conf.shop_params[i]['id'] = results[i].id;
            conf.shop_params[i]['posX'] = results[i].posX;
            conf.shop_params[i]['posY'] = results[i].posY;
            conf.shop_params[i]['posZ'] = results[i].pedZ;
            if (results[i].type == 0) {
                conf.shop_params[i] = mp.blips.new(52, new mp.Vector3(conf.shop_params[i]['posX'],conf.shop_params[i]['posY'],conf.shop_params[i]['posZ']),
                {
                    name: "Shop",
                    color: 4,
                    scale: 1,
                    shortRange: true,
                }); 
            } 
            if (results[i].type == 1) {
                conf.shop_params[i] = mp.blips.new(110, new mp.Vector3(conf.shop_params[i]['posX'],conf.shop_params[i]['posY'],conf.shop_params[i]['posZ']),
                {
                    name: "Ammunation",
                    color: 1,
                    scale: 1,
                    shortRange: true,
                }); 
            }                           
        }
            
    })
}

loadCarShop();
function loadCarShop()
{
    gm.mysql.handle.query("SELECT * FROM carshops", [], function (error, results, fields) {
        if(error) console.log("Error in Load Carshops: "+error);
        for(let i=0; i<results.length; i++) {
            conf.carshop_params[i]['id'] = results[i].id;
            conf.carshop_params[i]['posX'] = results[i].posX;
            conf.carshop_params[i]['posY'] = results[i].posY;
            conf.carshop_params[i]['posZ'] = results[i].posZ;
            conf.carshop_params[i]['name'] = results[i].name;
            conf.carshop_params[i] = mp.blips.new(225, new mp.Vector3(conf.carshop_params[i]['posX'],conf.carshop_params[i]['posY'],conf.carshop_params[i]['posZ']),
            {
                name: ""+conf.carshop_params[i]['name'],
                color: 4,
                scale: 1,
                shortRange: true,
            });                 
        }
            
    })
}

loadBlip();
function loadBlip()
{
    gm.mysql.handle.query("SELECT * FROM blips", [], function (error, results, fields) {
        if(error) console.log("Error in Load Blips: "+error);
        for(let i=0; i<results.length; i++) {
            conf.blip_params[i]['posX'] = results[i].posX;
            conf.blip_params[i]['posY'] = results[i].posY;
            conf.blip_params[i]['name'] = results[i].name;
            conf.blip_params[i]['color'] = results[i].color;
            conf.blip_params[i]['blipid'] = results[i].blipid;
            conf.blip_params[i]['scale'] = results[i].scale;
            conf.blip_params[i] = mp.blips.new(conf.blip_params[i]['blipid'], new mp.Vector3(conf.blip_params[i]['posX'],conf.blip_params[i]['posY']),
            {
                name: conf.blip_params[i]['name'],
                color: conf.blip_params[i]['color'],
                shortRange: true,
                scale: 1,
                scale: conf.blip_params[i]['scale']
            });                 
        }
            
    })
}
/*loadTanke();
function loadTanke()
{
    gm.mysql.handle.query("SELECT * FROM tankstellen", [], function (error, results, fields) {
        if(error) console.log("Error in Load Blips: "+error);
        for(let i=0; i<results.length; i++) {
            conf.tank_params[i]['posX'] = results[i].posX;
            conf.tank_params[i]['posY'] = results[i].posY;
            conf.tank_params[i] = mp.blips.new(361, new mp.Vector3(conf.tank_params[i]['posX'],conf.tank_params[i]['posY']),
            {
                name: "Tankstelle",
                color: 5,
                scale: 1,
                shortRange: true
            });                 
        }    
    })
}*/

mp.events.add({
    "sqlLog" : async (player, logfile) => {
        try {
            if(!player) return;
            if(!logfile) return;
            var charname = ""+player.data.firstname+" "+player.data.lastname;
             gm.mysql.handle.query("INSERT INTO logs (playername, log, socialclub, ip) VALUES (?,?,?,?)", [charname, logfile, player.socialClub, player.ip], function(err, res) {
                    if(err) console.log("FILE: ERROR on sqlLog for player " + player.data.charId + ": " + err);
            });
        } catch(ex) {
            return console.log("FILE: ERROR on sqlLog for player " + player.data.charId + ": " + ex);
        }
    }
});