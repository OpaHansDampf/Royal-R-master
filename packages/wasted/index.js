const hospitalCoords = [
    new mp.Vector3(340.6430969238281, -1396.09228515625, 32.50926971435547),
    new mp.Vector3(-450.0058288574219, -340.5953369140625, 34.50172805786133),
    new mp.Vector3(360.2090148925781, -585.2518920898438, 28.821245193481445),
    new mp.Vector3(1839.369140625, 3672.39794921875, 34.27670669555664),
    new mp.Vector3(-242.74436950683594, 6325.830078125, 32.426185607910156)
];

const respawnTime = 300000; // milliseconds
const spawnTime = 600000; // milliseconds

function respawnAtHospital(player) {
    if (mp.players.exists(player)) {  
    player.call("client:dead:respawnmenu");
    player.spawnTimer = setTimeout(respawnGo, spawnTime, player);
    }
}
function respawnGo(player) {
    if(mp.players.exists(player)) {
        let closestHospital = 0;
        let minDist = 9999.0;

        for (let i = 0, max = hospitalCoords.length; i < max; i++) {
            let dist = player.dist(hospitalCoords[i]);
            if (dist < minDist) {
                minDist = dist;
                closestHospital = i;
                player.call("closeDeathscreen");
                player.setVariable("isDead", false);
            }
        }

        if (player.data.iclist == 1) {
            player.spawn(hospitalCoords[closestHospital]);
        } else {
            player.position = new mp.Vector3(-797.3433227539062, 332.110595703125, 153.8050079345703);
        }
        
        player.health = 100;
        gm.mysql.handle.query("UPDATE characters SET dead = '0', money = '0' WHERE id = ?", [player.data.charId], function(err,res) {
            if (err) console.log("Error in Update Dead: "+err);
            gm.mysql.handle.query("DELETE FROM user_items WHERE charId = ?",[player.data.charId],function(err1,res1) {
                if (err1) console.log("Error: "+err1);
                gm.mysql.handle.query("UPDATE user_weapons SET taser = '0',pistol = '0',fivepistol = '0',schwerepistol = '0',appistol = '0',smg = '0',pdw = '0',karabiner = '0',taschenlampe = '0',schlagstock = '0',messer = '0',bat = '0',pump = '0' WHERE charId = ?",[player.data.charId],function(err1,res1) {
                    if (err1) console.log("Error: "+err1);
                    player.removeWeapon(0x3656C8C1);
                    player.removeWeapon(0x1B06D571);
                    player.removeWeapon(0x99AEEB3B);
                    player.removeWeapon(0xD205520E);
                    player.removeWeapon(0x22D8FE39);
                    player.removeWeapon(0x2BE6766B);
                    player.removeWeapon(0x0A3D4D34);
                    player.removeWeapon(0x83BF0278);
                    player.removeWeapon(0x1D073A89);
                    player.removeWeapon(0x8BB05FD7);    
                    player.removeWeapon(0x678B81B1);
                    player.removeWeapon(0x99B507EA);
                    player.removeWeapon(0x958A4A8F);
                    clearTimeout(player.spawnTimer);
                    player.spawnTimer = null;
                    player.notify("~b~Du wurdest Not Behandelt. Deine Gegenstände sind beim Transport verloren gegangen");
                });
            });            
        });
    } 
}

mp.events.add("server:dead:respawn",(player) => {
    if(mp.players.exists(player)) {
        let closestHospital = 0;
        let minDist = 9999.0;

        for (let i = 0, max = hospitalCoords.length; i < max; i++) {
            let dist = player.dist(hospitalCoords[i]);
            if (dist < minDist) {
                minDist = dist;
                closestHospital = i;
                player.call("closeDeathscreen");
                player.setVariable("isDead", false);
            }
        }

        if (player.data.iclist == 1) {
            player.spawn(hospitalCoords[closestHospital]);
        } else {
            player.position = new mp.Vector3(-797.3433227539062, 332.110595703125, 153.8050079345703);
        }
        player.health = 100;
        gm.mysql.handle.query("UPDATE characters SET dead = '0', money = '0' WHERE id = ?", [player.data.charId], function(err,res) {
            if (err) console.log("Error in Update Dead: "+err);
            gm.mysql.handle.query("DELETE FROM user_items WHERE charId = ?",[player.data.charId],function(err1,res1) {
                if (err1) console.log("Error: "+err1);
                gm.mysql.handle.query("UPDATE user_weapons SET taser = '0',pistol = '0',fivepistol = '0',schwerepistol = '0',appistol = '0',smg = '0',pdw = '0',karabiner = '0',taschenlampe = '0',schlagstock = '0',messer = '0',bat = '0',pump = '0' WHERE charId = ?",[player.data.charId],function(err1,res1) {
                    if (err1) console.log("Error: "+err1);
                    player.removeWeapon(0x3656C8C1);
                    player.removeWeapon(0x1B06D571);
                    player.removeWeapon(0x99AEEB3B);
                    player.removeWeapon(0xD205520E);
                    player.removeWeapon(0x22D8FE39);
                    player.removeWeapon(0x2BE6766B);
                    player.removeWeapon(0x0A3D4D34);
                    player.removeWeapon(0x83BF0278);
                    player.removeWeapon(0x1D073A89);
                    player.removeWeapon(0x8BB05FD7);    
                    player.removeWeapon(0x678B81B1);
                    player.removeWeapon(0x99B507EA);
                    player.removeWeapon(0x958A4A8F);
                    clearTimeout(player.respawnTimer);
                    player.respawnTimer = null;
                    clearTimeout(player.spawnTimer);
                    player.spawnTimer = null;
                    player.notify("~b~Du wurdest Not Behandelt. Deine Gegenstände sind beim Transport verloren gegangen");
                });
            });            
        });
    }
});

mp.events.add("server:dead:waiting",(player) => {
    if(mp.players.exists(player)) {
        if (player.spawnTimer) clearTimeout(player.spawnTimer);
        player.spawnTimer = setTimeout(respawnGo, spawnTime, player);
        //player.call("openDeathscreen");
        player.call('progress:start', [600, "Du bist bewusstlos"]);
        player.setVariable("isDead", true);
        gm.mysql.handle.query("UPDATE characters SET dead = '1' WHERE id = ?", [player.data.charId], function (err,res) {
            if (err) console.log("Error in Update Dead: "+err);
        });
    }
});

mp.events.add("playerReady", (player) => {
    if(mp.players.exists(player)) player.respawnTimer = null;
});

mp.events.add("playerDeath", (player,reason,killer) => {
    if(mp.players.exists(player)) {
        if (killer !== undefined) {
            mp.events.call("sqlLog", player, killer.data.firstname+" "+killer.data.lastname+" hat "+player.data.firstname+" "+player.data.lastname+" getötet! "+reason);  
        } else {
            mp.events.call("sqlLog", player, player.data.firstname+" "+player.data.lastname+" hat sich selbst getötet!");  
        }
       
        gm.mysql.handle.query("SELECT permaDead,killerid FROM characters WHERE id = ?",[player.data.charId],function(err,res) {
            if (err) console.log("Error in Select Character where Dead: "+err);
            if (res[0].permaDead == 0) {
                if (res[0].killerid == killer.data.charId) {
                    player.call("openDeathscreen");
                    player.health = 100;
                    player.data.health = 100;
                    player.setVariable("isDead", 'true');
                    player.setVariable("permaDead", 1);
                    player.call("changeValue", ['micro', 0]);
                    player.setVariable("VOICE_RANGE","stumm");
                    gm.mysql.handle.query("UPDATE characters SET dead = '1',permaDead = '1' WHERE id = ?", [player.data.charId], function (err,res) {
                        if (err) console.log("Error in Update Dead: "+err);
                    });                    
                } else {
                    if (player.respawnTimer) clearTimeout(player.respawnTimer);
                    player.respawnTimer = setTimeout(respawnAtHospital, respawnTime, player);
                    player.call("openDeathscreen");
                    player.call('progress:start', [300, "Du bist bewusstlos"]);
                    player.health = 100;
                    player.data.health = 100;
                    player.setVariable("isDead", 'true');
                    player.call("changeValue", ['micro', 0]);
                    player.setVariable("VOICE_RANGE","stumm");
                    gm.mysql.handle.query("UPDATE characters SET dead = '1' WHERE id = ?", [player.data.charId], function (err,res) {
                        if (err) console.log("Error in Update Dead: "+err);
                    });                   
                } 
            } else {
                player.call("openDeathscreen");
                player.health = 100;
                player.data.health = 100;
                player.setVariable("isDead", 'true');
                player.setVariable("permaDead", 1);
                player.call("changeValue", ['micro', 0]);
                player.setVariable("VOICE_RANGE","stumm");
                gm.mysql.handle.query("UPDATE characters SET dead = '1',permaDead = '1' WHERE id = ?", [player.data.charId], function (err,res) {
                    if (err) console.log("Error in Update Dead: "+err);
                });           
            }
        });        
    }    
});

mp.events.add("playerQuit", (player) => {
    if (player.respawnTimer) clearTimeout(player.respawnTimer);
    if (player.spawnTimer) clearTimeout(player.spawnTimer);
});