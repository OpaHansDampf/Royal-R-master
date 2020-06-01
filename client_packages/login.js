var loginBrowser = mp.browsers.new("package://login/index.html");
mp.gui.cursor.show(true, true);
mp.events.callRemote("server:login:autologin");

mp.events.add("loginDataToServer", (user, pass, state) => {
    mp.events.callRemote("sendDataToServer", user, pass, state);  
});

mp.events.add("autoLogin", () => {
    mp.events.callRemote("server:login:autologin");  
});


mp.events.add("client:login:banned", (state,day) => {
    loginBrowser.execute("Banned('" + state + "','" + "Dein Account ist noch bis zum " + day+ " gesperrt!" + "');");
    mp.events.call("loginHandler", "banned");
});
mp.events.add("loginHandler", (handle) => {
    switch(handle){
        case "success":
        {
            mp.gui.cursor.show(false, false);
            mp.events.callRemote("getDoors", mp.players.local);
            mp.game.controls.disableControlAction(2, 243, true);
            break;
        }
        case "destroy":
        {
            loginBrowser.destroy();
            mp.events.callRemote("getDoors", mp.players.local);
            mp.game.controls.disableControlAction(2, 243, true);
            break;
        }
        case "banned":
        {
            mp.events.callRemote("server:login:banned");
            mp.gui.cursor.show(false, false);
            mp.events.callRemote("getDoors", mp.players.local);
            mp.game.controls.disableControlAction(2, 243, true);
            break;
        }
        case "bannedFromServer":
        {
            loginBrowser.execute(`swal({ type: "error", title: "Error!", text: "Du wurdest vom Projekt ausgeschlossen!" })`);
            break;
        }
        case "incorrectUsername":
        {
            loginBrowser.execute(`swal({ type: "error", title: "Error!", text: "Dein Benutzername ist falsch!" })`);
            break;
        }
        case "incorrectPassword":
        {
            loginBrowser.execute(`swal({ type: "error", title: "Error!", text: "Dein Passwort ist falsch!" })`);
            break;
        }
        case "incorrectHardwareID":
        {
            loginBrowser.execute(`swal({ type: "error", title: "Error!", html: "Deine Hardware ID ist falsch!<br>Bitte melde dich damit im TeamSpeak Support." })`);
            mp.gui.cursor.show(true, true);
            break;
        }
        case "nonWhitelistet":
        {
            loginBrowser.execute(`swal({ type: "error", title: "Error!", html: "Dein Account ist noch nicht gewhitelisted!<br>Lasse dich jetzt Whitelisten!" })`);
            mp.gui.cursor.show(true, true);
            break;
        }
        case "nonCharsListed":
        {
            loginBrowser.execute(`swal({ type: "error", title: "Error!", html: "Du hast keinen Whitelisted Character!<br>Lasse dich jetzt Whitelisten!" })`);
            mp.gui.cursor.show(true, true);
            break;
        }
        case "serverBlocked":
        {
            loginBrowser.execute(`swal({ type: "info", title: "Geschlossen!", html: "Der Server-Login ist noch gesperrt.<br>Versuche es gleich noch einmal!" })`);
            break;
        }
        case "blockedLogin":
            {
                loginBrowser.execute(`swal({ type: "error", title: "Error!", text: "Dein Login wurde vom Support gesperrt! Finde dich im Support ein!" })`);
                break;
            }
        case "tooshort":
        {
            loginBrowser.execute(`swal({ type: "error", title: "Error!", text: "Dein Benutzername oder Passwort scheinen zu kurz zu sein." })`);
            break;
        }
        case "logged":
        {
            //loginBrowser.execute(`swal({ type: "success", title: "Erfolg!", text: "logged" })`);
            break;
        }
        default:
        {
            break;
        }
    }
});