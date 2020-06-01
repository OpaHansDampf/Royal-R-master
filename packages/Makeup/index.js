let bartShape = mp.colshapes.newSphere(134.73683166503906, -1707.9097900390625, 29.291601181030273, 3, 0);
//
mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(bartShape.isPointWithin(player.position)) {
     gm.mysql.handle.query("SELECT makeup,data FROM characters WHERE id='" + player.data.charId + "'", function (err, res) {
        if (err){
          console.log("makeup: Fehler beim Laden der characterModel.data aus Datenbank");
          return;
        } else if (res.length > 0){
          if (res[0].hair == null) {
            let data = JSON.parse(res[0].data);
            player.call("client:makeup:OpenMenu",[data.Hair[0], data.Hair[1], data.Hair[2]]);
          } else {
            player.call("client:makeup:OpenMenu",[res[0].bart,res[0].barttext,res[0].barttext2]);
          }
          
        }
      });      
    }
  }
});

mp.events.add("server:makeup:SetHair", (player, hairID) => {
  if (mp.players.exists(player)) {
      player.setHeadOverlay(4, [hairID, 1.0, 0, 0]); 
      player.data.makeup = hairID;
  }
});

mp.events.add("server:makeup:save", (player, hairID, money) => {
  if (mp.players.exists(player)) {
    if (player.data.money > money) {
      var newMoney = parseFloat( parseFloat(player.data.money*1).toFixed(2) - parseFloat(money*1).toFixed(2) ).toFixed(2);
      gm.mysql.handle.query("UPDATE characters SET makeup = ?, money = ? WHERE id = ?", [hairID,newMoney,player.data.charId], function(err,res) {
        if (err) console.log("Error in Update Hair ID: "+err);
        player.data.money = newMoney;           
        player.notify("~g~Du hast dich Geschminkt für: "+money+"$");     
        player.call("changeValue", ['money', player.data.money]);  
      });
    } else {
      player.notify("~r~Du hast nicht genügend Bargeld!");
    }    
  }
});

// EXIT
function playerExitColshapeHandler(player, shape) {
  if(mp.players.exists(player)) {
    if(shape === bartShape) {
      //Spieler hat colshape verlassen
      player.call("client:makeup:closeMenu")
    }
  }
}
