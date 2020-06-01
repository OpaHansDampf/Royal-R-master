let BarberShape = mp.colshapes.newSphere(-30.46, -151.82, 57.07, 3, 0);
//
mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(BarberShape.isPointWithin(player.position)) {
     gm.mysql.handle.query("SELECT hair,hairtext,hairtext2,data FROM characters WHERE id='" + player.data.charId + "'", function (err, res) {
        if (err){
          console.log("BARBER: Fehler beim Laden der characterModel.data aus Datenbank");
          return;
        } else if (res.length > 0){
          if (res[0].hair == null) {
            let data = JSON.parse(res[0].data);
            player.call("client:Barber:OpenMenu",[data.Hair[0], data.Hair[1], data.Hair[2]]);
          } else {
            player.call("client:Barber:OpenMenu",[res[0].hair,res[0].hairtext,res[0].hairtext2]);
          }
          
        }
      });      
    }
  }
});

mp.events.add("server:Barber:SetHair", (player, hairID,text) => {
  if (mp.players.exists(player)) {
    if (text == "Haare") {
      player.setClothes(2, hairID, 0, 2);
    } 
    if (text == "Bart") {
      player.setHeadOverlay(1, [hairID, 1.0, 0, 0]);
    }    
  }
});

mp.events.add("server:Barber:save", (player, hairID, colorID, highlightID, money) => {
  if (mp.players.exists(player)) {
    if (player.data.money > money) {
      var newMoney = parseFloat( parseFloat(player.data.money*1).toFixed(2) - parseFloat(money*1).toFixed(2) ).toFixed(2);
      gm.mysql.handle.query("UPDATE characters SET hair = ?, hairtext = ?, hairtext2 = ?, money = ? WHERE id = ?", [hairID, colorID, highlightID,newMoney,player.data.charId], function(err,res) {
        if (err) console.log("Error in Update Hair ID: "+err);
        player.data.money = newMoney;           
        player.notify("~g~Du hast dir die Haare geschnitten für: "+money+"$");     
        player.call("changeValue", ['money', player.data.money]);  
      });
    } else {
      player.notify("~r~Du hast nicht genügend Bargeld!");
    }    
  }
});



mp.events.add("server:Barber:SetColor", (player, p1, p2) => {
  if (mp.players.exists(player)) {
    player.setHairColor(p1, p2);
  }
});

// EXIT
function playerExitColshapeHandler(player, shape) {
  if(mp.players.exists(player)) {
    if(shape === BarberShape) {
      //Spieler hat colshape verlassen
      player.call("client:Barber:closeMenu")
    }
  }
}
