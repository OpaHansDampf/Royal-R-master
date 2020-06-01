mp.events.add("server:teleport:loadmarker", (player) => {
    if(mp.players.exists(player)) {
        gm.mysql.handle.query('SELECT * FROM teleporter WHERE 1=1', [], function (error, results, fields) {
            for(let i = 0; i < results.length; i++) {
                player.call("LoadTeleportMarkers",[results[i].pos1X,results[i].pos1Y,results[i].pos1Z]);	
                player.call("LoadTeleport1Markers",[results[i].pos2X,results[i].pos2Y,results[i].pos2Z]);				
            }
        });	
    }	
});



mp.events.add("server:teleporter:port1", (player, id) => {
    if(mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT pos2X,pos2Y,pos2Z FROM teleporter WHERE id = ?",[id], function(err,res) {
            if (err) console.log("Error in Select Teleporter1: "+err);
            player.position = new mp.Vector3(res[0].pos2X,res[0].pos2Y,res[0].pos2Z);
            player.dimension = res[0].pos2D;
        });
    }    
});

mp.events.add("server:teleporter:port2", (player, id) => {
    if(mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT pos1X,pos1Y,pos1Z FROM teleporter WHERE id = ?",[id], function(err,res) {
            if (err) console.log("Error in Select Teleporter1: "+err);        
            player.position = new mp.Vector3(res[0].pos1X,res[0].pos1Y,res[0].pos1Z);
            player.dimension = res[0].pos1D;
        });
    }    
});