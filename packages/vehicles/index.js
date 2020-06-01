mp.events.add("server:vehicles:vehlist", (player) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT model,id,numberPlate FROM vehicles WHERE charId = ?",[player.data.charId], function (err,res) {
            if (err) console.log("Error in Select vehicles: "+err);
            if (res.length > 0) {
                var i = 1;
                let vehList = [];
                res.forEach(function(veh) {
                    let obj = {"model": String(veh.model), "id": String(veh.id), "kennzeichen": String(veh.numberPlate)};
                    vehList.push(obj);
                    if (parseInt(i) == parseInt(res.length)) {
                        if(mp.players.exists(player)) player.call("client:vehicles:vehlist", [JSON.stringify(vehList)]);
                    }
                    i++;
                });
            } else {
                player.notify("~r~Du besitzt keine Fahrzeuge");
            }
        });
    }
});

mp.events.add("server:vehicles:givevehicle", (player,id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("SELECT charId FROM vehicles WHERE id = ?", [id], function(err,res) {
            if (err) console.log("Error in Select vehicles: "+err);
            if (res.length > 0) {
                if (res[0].charId == player.data.charId) {
                    getNearestPlayer(player,2);
                    if (currentTarget !== null) {
                        gm.mysql.handle.query("UPDATE vehicles SET charId = ? WHERE id = ?", [currentTarget.data.charId,id],function(err1,res1) {
                            if (err1) console.log("Error in Update vehicle owner: "+err1);
                            player.notify("~g~Du hast dein Fahrzeug überschrieben");
                            currentTarget.notify("~g~Dir wurde das Fahrzeug überschrieben");
                        });
                    } else {
                        player.notify("~r~Keiner in deiner Nähe");
                    }
                } else {
                    player.notify("~r~Dieses Fahrzeug gehört dir nicht!");
                }
            } else {    
                player.notify("~r~Dieses Fahrzeug existiert nicht!");
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