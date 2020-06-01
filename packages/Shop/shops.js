let shop1 = mp.colshapes.newSphere(24.47,-1347.1,29.497, 4, 0);
let shop4 = mp.colshapes.newSphere(-47.693,-1759,29.42, 4, 0);
let shop5 = mp.colshapes.newSphere(-709,-915,19, 4, 0);
let shop6 = mp.colshapes.newSphere(-1222, -908.482, 12.32, 4, 0);
let shop7 = mp.colshapes.newSphere(1728,6415,35, 4, 0);
let shop8 = mp.colshapes.newSphere(1697,4923,42, 4, 0);
let shop9 = mp.colshapes.newSphere(1959,3741,32, 4, 0);
let shop10 = mp.colshapes.newSphere(2676,3280,55, 4, 0);
let shop11 = mp.colshapes.newSphere(549,2669,42, 4, 0);
let shop12 = mp.colshapes.newSphere(-3243,1000,12, 4, 0);
let shop13 = mp.colshapes.newSphere(-3040,584,7.9, 4, 0);
let shop14 = mp.colshapes.newSphere(372,328,103,4, 0);
let shop15 = mp.colshapes.newSphere(1164,-322.856,69.20, 4, 0);
let shop16 = mp.colshapes.newSphere(1134,-982,46, 4, 0);
let shop17 = mp.colshapes.newSphere(-85,37,71, 4, 0);
let shop18 = mp.colshapes.newSphere(23,-1105,29, 4, 0);
let shop19 = mp.colshapes.newSphere(129,-1284,29, 4, 0);


/*let shopArray = [];
// X, Y, Z, Range, Dimension
shopArray.push(mp.colshapes.newSphere(24.47,-1347.1,29.497, 2, 0), 1);
shopArray.push(mp.colshapes.newSphere(-47.693,-1759,29.42, 2, 0), 3);
shopArray.push(mp.colshapes.newSphere(-709,-915,19, 2, 0), 4);*/

mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {

    // shopArray.forEach((shape, id, index) => {
    //     console.log(`${shopArray[shape]} + ${shopArray[index]}`);
    //     if(shape.isPointWithin(player.position) && player.data.mainmenu == false) {
    //         if(id == 19 && !player.data.faction == "VanillaUnicorn") { continue; }
    //         player.call("client:shop:openShop", index);
    //         player.data.mainmenu = true;
    //         return;
    //     }
    // });



    if(shop1.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[1]);    
        player.data.mainmenu = true;
    } else if(shop4.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[4]);    
        player.data.mainmenu = true;
    } else if(shop5.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[5]);    
        player.data.mainmenu = true;
    } else if(shop6.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[6]);    
        player.data.mainmenu = true;
    } else if(shop7.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[7]);    
        player.data.mainmenu = true;
    } else if(shop8.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[8]);    
        player.data.mainmenu = true;
    } else if(shop9.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[9]);    
        player.data.mainmenu = true;
    } else if(shop10.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[10]);    
        player.data.mainmenu = true;
    } else if(shop11.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[11]);    
        player.data.mainmenu = true;
    } else if(shop12.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[12]);    
        player.data.mainmenu = true;
    } else if(shop13.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[13]);    
        player.data.mainmenu = true;
    } else if(shop14.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[14]);    
        player.data.mainmenu = true;
    } else if(shop15.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[15]);    
        player.data.mainmenu = true;
    } else if(shop16.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[16]);    
        player.data.mainmenu = true;
    } else if(shop17.isPointWithin(player.position) && player.data.mainmenu == false) {
        player.call("client:shop:openShop",[17]);    
        player.data.mainmenu = true;
    } else if(shop18.isPointWithin(player.position) && player.data.mainmenu == false) {
        mp.events.call("server:shop:openShop",player,18);    
        player.data.mainmenu = true;
    } else if(shop19.isPointWithin(player.position) && player.data.mainmenu == false && player.data.faction == "VanillaUnicorn") {
        player.call("client:shop:openShop",[19]);    
        player.data.mainmenu = true;
    }     
  }
});