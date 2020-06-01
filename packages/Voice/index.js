// 2D Array zum halten der aktuell redenden Spieler im Funk (Users sind dann RadioUsers[0][0], RadioUsers[0][1], RadioUsers[0][2], usw.)
let RadioUsers = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];

let usedUserNumbers = [];

// Event zum Ändern der VoiceRange im Client
mp.events.add("changeVoiceRange", (player) => {
  if(mp.players.exists(player)) {
    var curr = player.getVariable("VOICE_RANGE");
    var newRange = "stumm";
    var hudValue = 0;
    if (curr == "stumm") {
      newRange = "fluestern";
      hudValue = 1;
    }
    if (curr == "fluestern") {
      newRange = "normal";
      hudValue = 2;
    }
    if (curr == "normal") {
      newRange = "schreien";
      hudValue = 3;
    }
    if (curr == "schreien") {
      newRange = "bruellen";
      hudValue = 4;
    }
    if (curr == "bruellen") {
      newRange = "stumm";
      hudValue = 0;
    }

    if (player.health != 0) {
      player.setVariable("VOICE_RANGE",newRange);
      player.call("changeValue", ['micro', hudValue]);
    }
  }
});

mp.events.add("server:TS-VoiceChat:getUserNumber", (player) => {
  if(mp.players.exists(player)) {
    userNumber = player.id;
    player.setVariable("TS-UserNumber", userNumber);
    player.call("client:TS-VoiceChat:recvUserNumber", [userNumber,player.data.string]);
  }
});

function getRadioUsers(player, channel) {
  if(mp.players.exists(player)) {
    // Array von Spielern in derzeitigem Channel einlesen ( 2D-Array - Users sind dann RadioUsers[0][0], RadioUsers[0][1], RadioUsers[0][2], usw.)
    let UsersInChannel = RadioUsers[channel];
    player.call("client:TS-VoiceChat:updateRadioUsers", [JSON.stringify(UsersInChannel)]); // Array von Spielern übergeben
  }
}
mp.events.add("server:TS-VoiceChat:getRadioUsers", getRadioUsers);

function AddRadioUser(player, channel, name) {
  if(mp.players.exists(player)) {
    RadioUsers[channel].push(name);
  }
}
mp.events.add("server:TS-VoiceChat:AddRadioUser", AddRadioUser);


function RemoveRadioUser(player, channel, name) {
  if(mp.players.exists(player)) {
    let indexToRemove=RadioUsers[channel].indexOf(name);
    if(indexToRemove > -1){
      RadioUsers[channel].splice([indexToRemove], 1 );
    }
  }
}
mp.events.add("server:TS-VoiceChat:RemoveRadioUser", RemoveRadioUser);
