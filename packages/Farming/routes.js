//Stein
let farm1 = mp.colshapes.newSphere(-587.975,2051.38, 40, 0);
//Holz
let farm2 = mp.colshapes.newSphere(-572,5893,30.39, 40, 0);
//Öl
let farm3 = mp.colshapes.newSphere(583.893,2907.85,30.91, 40, 0);
//Sand
let farm4 = mp.colshapes.newSphere(2945.69,2796.56,40.73, 40, 0);
//Wein
let farm5 = mp.colshapes.newSphere(-1872,2098,139, 40, 0);
//Weizen
let farm6 = mp.colshapes.newSphere(2617,4489.14,37.33, 40, 0);
//Weed
//let farm7 = mp.colshapes.newSphere(2223,5576,53, 40, 0);


mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(farm3.isPointWithin(player.position)) {
      mp.events.call("server:farming:farm",player,3,17);
    } else if(farm2.isPointWithin(player.position)) {
      mp.events.call("server:farming:farm",player,2,13);
    } else if(farm1.isPointWithin(player.position)) {
      mp.events.call("server:farming:farm",player,1,5);
    } else if(farm4.isPointWithin(player.position)) {
      mp.events.call("server:farming:farm",player,4,19);
    } else if(farm5.isPointWithin(player.position)) {
      mp.events.call("server:farming:farm",player,5,15);
    } else if(farm6.isPointWithin(player.position)) {
      mp.events.call("server:farming:farm",player,6,21);
    }/* else if(farm7.isPointWithin(player.position)) {
      mp.events.call("server:farming:farm",player,7,25);
    }      */
  }
});


//Stein
let process1 = mp.colshapes.newSphere(2707,2777,37.87, 7, 0);
//Holz
let process2 = mp.colshapes.newSphere(-567.7,5274.7,70.24, 7, 0);
//Öl
let process3 = mp.colshapes.newSphere(2714,1414.99,24.61, 7, 0);
//Sand
let process4 = mp.colshapes.newSphere(1087.94,-2001.8,30.88, 7, 0);
//Wein
let process5 = mp.colshapes.newSphere(148.576,1669.44,228.71, 7, 0);
//Weizen
let process6 = mp.colshapes.newSphere(2899.31,4399.24,50.234, 7, 0);
//Weed
//let process7 = mp.colshapes.newSphere(-102.42,2807.19,53.153, 7, 0);


mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(process3.isPointWithin(player.position)) {
      mp.events.call("server:farming:processing",player,3,17,18);
    } else if(process5.isPointWithin(player.position)) {
      mp.events.call("server:farming:processing",player,5,15,16);
    /*} else if(process7.isPointWithin(player.position)) {
      mp.events.call("server:farming:processing",player,7,25,26);*/
    }  else if(process1.isPointWithin(player.position)) {
      mp.events.call("server:farming:processing",player,1,5,6);
    } else if(process2.isPointWithin(player.position)) {
      mp.events.call("server:farming:processing",player,2,13,14);
    }else if(process4.isPointWithin(player.position)) {
      mp.events.call("server:farming:processing",player,4,19,20);
    } else if(process6.isPointWithin(player.position)) {
      mp.events.call("server:farming:processing",player,6,21,22);
    }    
  }
});

//Stein
let sell1 = mp.colshapes.newSphere(1055,2453,50, 4, 0);
//Holz
let sell2 = mp.colshapes.newSphere(-50.011,1907.77,195.361, 4, 0);
//Öl
let sell3 = mp.colshapes.newSphere(507.007,-2279.57,6, 4, 0);
//Sand
let sell4 = mp.colshapes.newSphere(838.968,-1923.64,30.314, 4, 0);
//Wein
let sell5 = mp.colshapes.newSphere(807.334,-1076.69,28, 4, 0);
//Weizen
let sell6 = mp.colshapes.newSphere(-302.,6211,29, 4, 0);
//Weed
//let sell7 = mp.colshapes.newSphere(-3195.05,1283.11,12.66, 4, 0);


mp.events.add("PushE", (player) => {
  if (mp.players.exists(player)) {
    if(sell3.isPointWithin(player.position)) {
      mp.events.call("server:farming:selling",player,3,18);
    } else if(sell5.isPointWithin(player.position)) {
      mp.events.call("server:farming:selling",player,5,16);
   /* } else if(sell7.isPointWithin(player.position)) {
      mp.events.call("server:farming:selling",player,7,26);*/
    } else if(sell1.isPointWithin(player.position)) {
      mp.events.call("server:farming:selling",player,1,6);
    } else if(sell2.isPointWithin(player.position)) {
      mp.events.call("server:farming:selling",player,2,14);
    } else if(sell4.isPointWithin(player.position)) {
      mp.events.call("server:farming:selling",player,4,20);
    } else if(sell6.isPointWithin(player.position)) {
      mp.events.call("server:farming:selling",player,6,22);
    }
  }
});