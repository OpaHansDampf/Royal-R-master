var tsBrowser = null;
var refresh = 0;
var browserLoad = false;
var canBeRefreshed = true;
var currentUrl = '';
var RadioVolume = 2;
var RadioChannel = 0; // Funkchannel (0 bis 10)
var UsersInChannel = [];
var PTTpressed=false;
var StopAnimation = false;
let voiceRange = 'normal';

var channelName = "Ingame";
var channelPw = "RP4Life";
var userName = "";

//mp.events.callRemote("server:TS-VoiceChat:getUserNumber");

mp.events.add("client:TS-VoiceChat:recvUserNumber", (userNumber,userPrefix) => {
    userName = "" + userPrefix + "-" + userNumber;
})

// ZIRKUMFLEX ^^

mp.keys.bind(0xDC, true, function () {
    var player = mp.players.local;
    if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
    mp.events.callRemote("changeVoiceRange", player);
});

mp.events.add('client:voice:endConnection', () => {
    if (tsBrowser !== null) {
      tsBrowser.destroy();
      tsBrowser = null;
    }
});

mp.events.add('ConnectTeamspeak', (status) => {
    if (status) {
        tsBrowser = mp.browsers.new('');
        setTimeout(function () {
            refresh = 1;
            mp.game.audio.playSoundFrontend(-1, "Hack_Success", "DLC_HEIST_BIOLAB_PREP_HACKING_SOUNDS", true);
        }, 500);
    } else {
        refresh = 0;
        if (tsBrowser !== null) {
            tsBrowser.destroy();
            tsBrowser = null;
        }
        mp.game.audio.playSoundFrontend(-1, "Hack_Failed", "DLC_HEIST_BIOLAB_PREP_HACKING_SOUNDS", true);
    }
});

function distanceCalc(vector1, vector2) {
    return mp.game.system.vdist2(vector1.x, vector1.y, vector1.z, vector2.x, vector2.y, vector2.z);
}

function subtract(vector1, vector2) {
    vector1.x = vector1.x - vector2.x;
    vector1.y = vector1.y - vector2.y;
    vector1.z = vector1.z - vector2.z;
    return vector1;
}

mp.events.add('render', () => {
    mp.game.controls.disableControlAction(2, 243, true);
    if (tsBrowser != null && canBeRefreshed) {
        if (refresh == 1) {
            canBeRefreshed = false;
            var player = mp.players.local;
            var playerPos = player.position;
            var playerRot = player.getHeading();
            var rotation = Math.PI / 180 * (playerRot * -1);
            var playerNames = new Array();

            var callingPlayerName = player.getVariable("CALLING_PLAYER_NAME");
            if (callingPlayerName && player.getVariable("CALL_IS_STARTED")) {
                if (callingPlayerName != "") {
                    playerNames.push(callingPlayerName + "~10~0~0~3");
                }
            }

            mp.players.forEachInStreamRange((playerStreamed, id) => {
                var streamedPlayerPos = playerStreamed.position;
                var distance = distanceCalc(playerPos, streamedPlayerPos);
                var voiceRange = playerStreamed.getVariable("VOICE_RANGE");
                var volumeModifier = 0;
                var range = 0;
                if (voiceRange == "bruellen") {
                    range = 420;
                }
                if (voiceRange == "schreien") {
                    range = 70;
                }
                if (voiceRange == "normal") {
                    range = 15;
                }
                if (voiceRange == "fluestern") {
                    range = 3;
                }
                if (voiceRange == "stumm") {
                    range = 0;
                }


                if (distance > 55) {
                    volumeModifier = (distance * -0.5 / 10);
                }

                if (volumeModifier > 0) {
                    volumeModifier = 0;
                }

                if (distance < range) {
                    var subPos = subtract(streamedPlayerPos, playerPos);
                    var x = subPos.x * Math.cos(rotation) - subPos.y * Math.sin(rotation);
                    var y = subPos.x * Math.sin(rotation) + subPos.y * Math.cos(rotation);
                    x = x * 10 / range;
                    y = y * 10 / range;
                    var isDeath = playerStreamed.isDead();
                    var userPrefix = playerStreamed.getVariable("rstring");
                    if (isDeath == null || !isDeath) {
                        playerNames.push(( "" + userPrefix + "-" + playerStreamed.getVariable("TS-UserNumber")) + "~" + (Math.round(x * 1000) / 1000) + "~" + (Math.round(y * 1000) / 1000) + "~0~" + (Math.round(volumeModifier * 1000) / 1000));
                    }
                }
            });

            // PushToTalk Funk = X
            if (mp.keys.isDown(88) == true) {
              //  if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
                if (RadioChannel !== 0) {
                    if(!PTTpressed){
                        StopAnimation = true;
                        PTTpressed = true;
                        mp.events.callRemote("server:TS-VoiceChat:AddRadioUser", RadioChannel, userName);
                        mp.events.callRemote("playAnimationEvent", 'random@arrests', 'generic_radio_chatter', 1, 49);
                        player.playFacialAnim("mic_chatter", "mp_facial");
                        mp.game.graphics.notify("PTT aktiv" + (RadioChannel));
                    }
                }
            } else {
               // if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true) return;
                if(StopAnimation === true) {
                    player.playFacialAnim("mood_normal_1", "facials@gen_male@variations@normal");
                    mp.events.callRemote("stopAnimation", player);
                    StopAnimation = false;
                }
                PTTpressed = false;
                mp.events.callRemote("server:TS-VoiceChat:RemoveRadioUser", RadioChannel, userName);
            }

            // Voice Funk Code
            if (RadioChannel !== 0) {
                mp.events.callRemote("server:TS-VoiceChat:getRadioUsers", RadioChannel);
                let FinalList = playerNames.concat(UsersInChannel);
                playerNames = FinalList;
            }

            // URL zusammenbauen und Browser aufrufen bzw updaten
            // http://localhost:15555/custom_players2/Ingame/Passwort/Benutzername/Spieler 1~0~0~0~0;Spieler 2~0~0~0~0 
            var newUrl = "http://localhost:15555/custom_players2/" + channelName  + "/" + channelPw + "/" + userName + "/" + playerNames.join(";") + "/";
            if (currentUrl != newUrl) {
                tsBrowser.url = newUrl;
                currentUrl = newUrl;
                tsBrowser.execute(`document.getElementsByTagName("BODY")[0].style.display = "none";`);
            }
            setTimeout(function () {
                canBeRefreshed = true;
            }, 100);
        }
    }
});

function updateRadioUsers(json) {
    UsersInChannel = [];
    list = JSON.parse(json);
    list.forEach(function(UserToAdd) {
        UsersInChannel.push(UserToAdd + "~0~0~0~" + RadioVolume);
    });
}
mp.events.add("client:TS-VoiceChat:updateRadioUsers", updateRadioUsers);

mp.events.add("client:TS-VoiceChat:removeFromRadio", () => {
  RadioChannel = 0;
});

mp.events.add("client:TS-VoiceChat:addToRadio", () => {
      var player = mp.players.local;
    var fractionData = player.getVariable('faction');
  if(fractionData === "LSPD") {
    RadioChannel = 0;
  } else if (fractionData === "Medic") {
    RadioChannel = 0;
  } else if (fractionData === "ACLS") {
    RadioChannel = 0;
  }
});

let RadioChannelNames = ["","LSPD 1", "LSPD 2", "LSPD 3", "LSMC 1", "LSMC 2", "LSMC 3", "ACLS 1","ACLS 2","ACLS 3"];

// Tastendruck Num+ Taste (Funk Kanal +)
mp.keys.bind(0x6B, true, function () {
    var fractionData = player.getVariable('faction');
    var fractionDuty = player.getVariable('factionDuty');
    var currentChannel = RadioChannel;
    //mp.game.graphics.notify("S: "+RadioChannel);
    if (fractionDuty == 1 && fractionData === "LSPD" || fractionDuty == 1 && fractionData === "Medic" || fractionDuty == 1 && fractionData === "ACLS") {
        if (RadioChannel >= 9){
            RadioChannel = 0;
        } else {
            RadioChannel++;
            mp.game.graphics.notify("Funkkanal:" + (RadioChannelNames[RadioChannel]));
        }
    }
    if (fractionDuty === 0 || fractionData === "Civillian") {
        RadioChannel = 0;
    } else {
        mp.game.graphics.notify("Funkkanal:" + (RadioChannelNames[RadioChannel]));
    }
});

// Tastendruck Num- Taste (Funk Kanal -)
mp.keys.bind(0x6D, true, function () {
    var fractionData = player.getVariable('faction');
    var fractionDuty = player.getVariable('factionDuty');
    var currentChannel = RadioChannel;
   
    if (fractionDuty == 1 && fractionData === "LSPD" || fractionDuty == 1 && fractionData === "Medic" || fractionDuty == 1 && fractionData === "ACLS") {
        if (RadioChannel === 0 || RadioChannel < 1){
            RadioChannel = 0;
        } else {
            RadioChannel--;
        }
    }
    if (fractionDuty === 0 || fractionData === "Civillian") {
        RadioChannel = 0;
    } else {
        mp.game.graphics.notify("Funkkanal:" + (RadioChannelNames[RadioChannel]));
    }
});
