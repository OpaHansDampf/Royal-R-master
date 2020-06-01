//Navigation in Fahrzeugen

mp.events.add("server:vehicle:navigationload",(player) => {
    if (mp.players.exists(player)) {
        if (player.vehicle) {
            gm.mysql.handle.query("SELECT id,name FROM user_navigation WHERE charId = ?",[player.data.charId],function(err,res) {
                if (err) console.log("Error in Select Navigations: "+err);
                if (res.lenght > 0) {
                    var i = 1;
                    let routeList = [];
                    res.forEach(function(route) {
                        let obj = {"id": String(route.id), "name": String(route.name)};
                        routeList.push(obj);
                        if (parseInt(i) == parseInt(res.length)) {
                            if(mp.players.exists(player)) player.call("client:vehicle:navigationlist", [JSON.stringify(routeList)]);
                        }
                        i++;
                    });
                } else {
                    player.notify("~r~Keine Routen gespeichert");
                }
            });
        } else {
            player.notify("~r~Das Navigationssystem Funktioniert nur im Fahrzeug");
        }
        
    }
});

mp.events.add("server:vehicle:navigationdelete",(player,id) => {
    if (mp.players.exists(player)) {
        gm.mysql.handle.query("DELETE FROM user_navigation WHERE id = ?",[id],function(err,res) {
            if (err) console.log("Error in Delete Navigations: "+err);
            player.notify("~g~Route wurde gelöscht");
        });
    } 
});

mp.events.add("server:vehicle:navigationsave",(player,name) => {
    if(name !== "") {
        gm.mysql.handle.query("INSERT INTO user_navigation SET posx = ?,posy = ?,name = ?,charId = ?",[player.position.x,player.position.y,name,player.data.charId],function(err,res){
            if (err) console.log("Error in Insert Navigation: "+err);
            player.notify("~g~Route wurde gespeichert");
        });
    } else {
        player.notify("~r~Du musst einen Namen angeben");
    }
});