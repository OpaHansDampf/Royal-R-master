let garage5 = mp.colshapes.newSphere(-955,-2700,14, 3, 0);
let garage6 = mp.colshapes.newSphere(214, -808, 31, 3, 0);
let garage7 = mp.colshapes.newSphere(264,-1518,29, 3, 0);
let garage8 = mp.colshapes.newSphere(-823,-1269,6, 3, 0);
let garage9 = mp.colshapes.newSphere(-1658,-948,8, 3, 0);
let garage10 = mp.colshapes.newSphere(-1721,67,67, 3, 0);
let garage11 = mp.colshapes.newSphere(-946,-185,42, 3, 0);
let garage12 = mp.colshapes.newSphere(-341,266,86, 3, 0);
let garage13 = mp.colshapes.newSphere(363,299,104, 3, 0);
let garage14 = mp.colshapes.newSphere(871,12,79, 3, 0);
let garage15 = mp.colshapes.newSphere(1037,-764,58, 3, 0);
let garage16 = mp.colshapes.newSphere(1695,4785,42, 3, 0);
let garage17 = mp.colshapes.newSphere(2691,4324,46, 3, 0);
let garage18 = mp.colshapes.newSphere(67,6412,31, 3, 0);
let garage19 = mp.colshapes.newSphere(-3146,1119,21, 3, 0);
let garage20 = mp.colshapes.newSphere(-3057,115,12, 3, 0);
let garage21 = mp.colshapes.newSphere(68,12,69, 3, 0);
let garage22 = mp.colshapes.newSphere(1181,-1533,39, 3, 0);
let garage23 = mp.colshapes.newSphere(-188,-1925,27, 3, 0);
let garage24 = mp.colshapes.newSphere(633,2723,42, 3, 0);
let garage25 = mp.colshapes.newSphere(782,-2988,6, 3, 0);
let garage26 = mp.colshapes.newSphere(-317,-714,33, 3, 0);
let garage27 = mp.colshapes.newSphere(-425,1208,326, 3, 0);
let garage28 = mp.colshapes.newSphere(901,3659,33, 3, 0);
let garage29 = mp.colshapes.newSphere(1971,3768,32, 3, 0);
let garage30 = mp.colshapes.newSphere(2555,2612,38, 3, 0);
let garage31 = mp.colshapes.newSphere(-1910,2024,141, 3, 0);
let garage32 = mp.colshapes.newSphere(-72,912,236, 3, 0);
let garage33 = mp.colshapes.newSphere(221,-975,-99, 3, 0);
let garage34 = mp.colshapes.newSphere(191,-994,-99, 3, 0);


mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(garage5.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[5]);    
        player.data.mainmenu = true;
    } else if(garage6.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[6]);    
        player.data.mainmenu = true;
    } else if(garage7.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[7]);    
        player.data.mainmenu = true;
    } else if(garage8.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[8]);    
        player.data.mainmenu = true;
    } else if(garage9.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[9]);    
        player.data.mainmenu = true;
    } else if(garage10.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[10]);    
        player.data.mainmenu = true;
    } else if(garage11.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[11]);    
        player.data.mainmenu = true;
    } else if(garage12.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[12]);    
        player.data.mainmenu = true;
    } else if(garage13.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[13]);    
        player.data.mainmenu = true;
    } else if(garage14.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[14]);    
        player.data.mainmenu = true;
    } else if(garage15.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[15]);    
        player.data.mainmenu = true;
    } else if(garage16.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[16]);    
        player.data.mainmenu = true;
    } else if(garage17.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[17]);    
        player.data.mainmenu = true;
    } else if(garage18.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[18]);    
        player.data.mainmenu = true;
    } else if(garage19.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[19]);    
        player.data.mainmenu = true;
    } else if(garage20.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[20]);    
        player.data.mainmenu = true;
    } else if(garage21.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[21]);    
        player.data.mainmenu = true;
    } else if(garage22.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[22]);    
        player.data.mainmenu = true;
    } else if(garage23.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[23]);    
        player.data.mainmenu = true;
    } else if(garage24.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[24]);    
        player.data.mainmenu = true;
    } else if(garage25.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[25]);    
        player.data.mainmenu = true;
    } else if(garage26.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[26]);    
        player.data.mainmenu = true;
    } else if(garage27.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[27]);    
        player.data.mainmenu = true;
    } else if(garage28.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[28]);    
        player.data.mainmenu = true;
    } else if(garage29.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[29]);    
        player.data.mainmenu = true;
    } else if(garage30.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[30]);    
        player.data.mainmenu = true;
    } else if(garage31.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[31]);    
        player.data.mainmenu = true;
    } else if(garage32.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[32]);    
        player.data.mainmenu = true;
    } else if(garage33.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[33]);    
        player.data.mainmenu = true;
    } else if(garage34.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:garage:openmenu",[34]);    
        player.data.mainmenu = true;
    } 
  }
});