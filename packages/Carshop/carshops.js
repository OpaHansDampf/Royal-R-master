let shop7 = mp.colshapes.newSphere(-55.97,-1088.314,26.42, 2, 0);
let shop20 = mp.colshapes.newSphere(-1013,-2691,13.97, 2, 0);


mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {

     if(shop7.isPointWithin(player.position) && player.data.mainmenu == false && player.data.faction == "PDM") {//Taylor
        mp.events.call("server:carshop:openShop",player,7,"PDM");	   
        player.data.mainmenu = true;
    } else if(shop20.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:carshop:openShop",player,20,"Fahrräder");  
        player.data.mainmenu = true;
    }   
  }
});