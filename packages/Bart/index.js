let bartShape = mp.colshapes.newSphere(-812.7738037109375, -183.20370483398438, 37.568931579589844, 3, 0);
//
mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(bartShape.isPointWithin(player.position)) {
     gm.mysql.handle.query("SELECT bart,barttext,barttext2,data FROM characters WHERE id='" + player.data.charId + "'", function (err, res) {
        if (err){
          console.log("bart: Fehler beim Laden der characterModel.data aus Datenbank");
          return;
        } else if (res.length > 0){
          if (res[0].hair == null) {
            let data = JSON.parse(res[0].data);
            player.call("client:bart:OpenMenu",[data.Hair[0], data.Hair[1], data.Hair[2]]);
          } else {
            player.call("client:bart:OpenMenu",[res[0].bart,res[0].barttext,res[0].barttext2]);
          }
          
        }
      });      
    }
  }
});

mp.events.add("server:bart:SetHair", (player, hairID) => {
  if (mp.players.exists(player)) {
      player.setHeadOverlay(1, [hairID, 1.0, 0, 0]); 
      player.data.bart = hairID;
  }
});

mp.events.add("server:bart:save", (player, hairID, colorID, highlightID, money) => {
  if (mp.players.exists(player)) {
    if (player.data.money > money) {
      var newMoney = parseFloat( parseFloat(player.data.money*1).toFixed(2) - parseFloat(money*1).toFixed(2) ).toFixed(2);
      gm.mysql.handle.query("UPDATE characters SET bart = ?, barttext = ?, barttext2 = ?, money = ? WHERE id = ?", [hairID, colorID, highlightID,newMoney,player.data.charId], function(err,res) {
        if (err) console.log("Error in Update Hair ID: "+err);
        player.data.money = newMoney;           
        player.notify("~g~Du hast dir den Bart geschnitten für: "+money+"$");     
        player.call("changeValue", ['money', player.data.money]);  
      });
    } else {
      player.notify("~r~Du hast nicht genügend Bargeld!");
    }    
  }
});



mp.events.add("server:bart:SetColor", (player, p1, p2) => {
  if (mp.players.exists(player)) {
      player.setHeadOverlay(1, [player.data.bart, 1.0, p1, p2]); 
  }
});

// EXIT
function playerExitColshapeHandler(player, shape) {
  if(mp.players.exists(player)) {
    if(shape === bartShape) {
      //Spieler hat colshape verlassen
      player.call("client:bart:closeMenu")
    }
  }
}
