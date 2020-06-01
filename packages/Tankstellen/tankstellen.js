let tanke1 = mp.colshapes.newSphere(264,-1260,29, 15, 0);
let tanke2 = mp.colshapes.newSphere(-71,-1761,30, 15, 0);
let tanke3 = mp.colshapes.newSphere(-320,-1472,31, 15, 0);
let tanke4 = mp.colshapes.newSphere(-2096,-320,13, 15, 0);
let tanke5 = mp.colshapes.newSphere(-2556,2334,33, 15, 0);
let tanke6 = mp.colshapes.newSphere(180,6603,32, 15, 0);
let tanke7 = mp.colshapes.newSphere(1702,6417,33, 15, 0);
let tanke8 = mp.colshapes.newSphere(2680,3264,55, 15, 0);
let tanke9 = mp.colshapes.newSphere(2581,362,108, 15, 0);
let tanke10 = mp.colshapes.newSphere(1209,-1402,35, 15, 0);
let tanke11 = mp.colshapes.newSphere(818,-1028,26, 15, 0);
let tanke12 = mp.colshapes.newSphere(-1437,-277,46, 15, 0);
let tanke13 = mp.colshapes.newSphere(1181,-331,69, 15, 0);
let tanke14 = mp.colshapes.newSphere(622,269,103, 15, 0);
let tanke15 = mp.colshapes.newSphere(2005,3775,32, 15, 0);
let tanke16 = mp.colshapes.newSphere(-1799,803,139, 15, 0);
let tanke17 = mp.colshapes.newSphere(-723,-934,19, 15, 0);
let tanke18 = mp.colshapes.newSphere(-525,-1211,18, 15, 0);
let tanke19 = mp.colshapes.newSphere(-94,6419,31, 15, 0);
let tanke20 = mp.colshapes.newSphere(48,2778,60, 15, 0);
let tanke21 = mp.colshapes.newSphere(264,2609,45, 15, 0);
let tanke22 = mp.colshapes.newSphere(1786,3331,41, 15, 0);
let tanke23 = mp.colshapes.newSphere(1209,2661,38, 15, 0);
let tanke24 = mp.colshapes.newSphere(175,-1562,29, 15, 0);


mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(tanke1.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,1);   
        player.data.mainmenu = true;
    } else if(tanke2.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,2);   
        player.data.mainmenu = true;
    } else if(tanke3.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,3);  
        player.data.mainmenu = true;
    } else if(tanke4.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,4);  
        player.data.mainmenu = true;
    } else if(tanke5.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,5);   
        player.data.mainmenu = true;
    } else if(tanke6.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,6);   
        player.data.mainmenu = true;
    } else if(tanke7.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,7);  
        player.data.mainmenu = true;
    } else if(tanke8.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,8);   
        player.data.mainmenu = true;
    } else if(tanke9.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,9);   
        player.data.mainmenu = true;
    } else if(tanke10.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,10);   
        player.data.mainmenu = true;
    } else if(tanke11.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,11);   
        player.data.mainmenu = true;
    } else if(tanke12.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,12);  
        player.data.mainmenu = true;
    } else if(tanke13.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,13);  
        player.data.mainmenu = true;
    } else if(tanke14.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,14);
        player.data.mainmenu = true;
    } else if(tanke15.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,15);  
        player.data.mainmenu = true;
    } else if(tanke16.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,16);   
        player.data.mainmenu = true;
    } else if(tanke17.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,17);  
        player.data.mainmenu = true;
    } else if(tanke18.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,18);    
        player.data.mainmenu = true;
    } else if(tanke19.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,19);   
        player.data.mainmenu = true;
    } else if(tanke20.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,20);    
        player.data.mainmenu = true;
    } else if(tanke21.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,21);   
        player.data.mainmenu = true;
    } else if(tanke22.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,22);   
        player.data.mainmenu = true;
    } else if(tanke23.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,23);    
        player.data.mainmenu = true;
    } else if(tanke24.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:tankstellen:openTanke",player,24);    
        player.data.mainmenu = true;
    }     
  }
});