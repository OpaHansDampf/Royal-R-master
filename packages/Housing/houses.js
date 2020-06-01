let out2 = mp.colshapes.newSphere(287.81,-920,29, 2, 0);
let out3 = mp.colshapes.newSphere(-47.32,-585.56,37, 2, 0);
let out4 = mp.colshapes.newSphere(-658.56,887,229, 2, 0);


mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(out2.isPointWithin(player.position) && player.data.mainmenu == false) {
      player.data.mainmenu = true;
        mp.events.call("server:housing:openMenu",player,2);   
    } else if(out3.isPointWithin(player.position) && player.data.mainmenu == false) {
      player.data.mainmenu = true;
        mp.events.call("server:housing:openMenu",player,3);   
    } else if(out4.isPointWithin(player.position) && player.data.mainmenu == false) {
      player.data.mainmenu = true;
        mp.events.call("server:housing:openMenu",player,4);  
    }      
  }
});

let in2 = mp.colshapes.newSphere(266.08,-1007.34,-101, 2, 0);
let in3 = mp.colshapes.newSphere(-18.36,-591.059,90, 2, 0);
let in4 = mp.colshapes.newSphere(-860.101,690.32,152.86, 2, 0);


mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(in2.isPointWithin(player.position) && player.data.mainmenu == false) {
      player.data.mainmenu = true;
        mp.events.call("server:housing:openInMenu",player,2);   
    } else if(in3.isPointWithin(player.position) && player.data.mainmenu == false) {
      player.data.mainmenu = true;
        mp.events.call("server:housing:openInMenu",player,3);   
    } else if(in4.isPointWithin(player.position) && player.data.mainmenu == false) {
      player.data.mainmenu = true;
        mp.events.call("server:housing:openInMenu",player,4);  
    }      
  }
});

let outfit2 = mp.colshapes.newSphere(260,-1004,-99, 2, 0);
let outfit3 = mp.colshapes.newSphere(-38,-583,83.91, 2, 0);
let outfit4 = mp.colshapes.newSphere(0,0,0, 2, 0);


mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(outfit2.isPointWithin(player.position) && player.data.mainmenu == false) {
      player.data.mainmenu = true;
        player.call("client:housing:outfit");   
    } else if(outfit3.isPointWithin(player.position) && player.data.mainmenu == false) {
      player.data.mainmenu = true;
        player.call("client:housing:outfit");   
    } else if(outfit4.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.data.mainmenu = true;
        player.call("client:housing:outfit");
    }      
  }
});