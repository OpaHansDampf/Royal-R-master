const NativeUI = require("nativeui");
const Menu = NativeUI.Menu;
const UIMenuItem = NativeUI.UIMenuItem;
const UIMenuListItem = NativeUI.UIMenuListItem;
const UIMenuCheckboxItem = NativeUI.UIMenuCheckboxItem;
const UIMenuSliderItem = NativeUI.UIMenuSliderItem;
const BadgeStyle = NativeUI.BadgeStyle;
const Point = NativeUI.Point;
const ItemsCollection = NativeUI.ItemsCollection;
const Color = NativeUI.Color;
const ListItem = NativeUI.ListItem;
var checkHut = true;
var checkBrille = true;
var checkMaske = true;
var checkOberkoerper = true;
var checkHose = true;
var checkSchuhe = true;
var checkAcce  = true;
var checkArm = true;
var checkOhr = true;
var checkAtm = true;
var checkGaragen = false;
var checkJobs = false;
var checkOeffentlich = false;
var checkSecret = false;
var checkAccessoires = true;
let walkingStyles = null;
let currentItem = 0;

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(50,50);

mp.markers.new(30, new mp.Vector3( 2155,2921,-61.90, 6, 37.8293,), 1, 
{ 
  direction: new mp.Vector3( 2155,2921,-61.90, 6, 37.8293,), 
  rotation: 0, 
  color: [ 0, 0, 160, 255],
  visible: true,
  dimension: 0
});

mp.markers.new(30, new mp.Vector3(2110.570,2926.31,-61.90, 6, 37.8293,), 1, 
{ 
  direction: new mp.Vector3(2110.570,2926.31,-61.90, 6, 37.8293,), 
  rotation: 0, 
  color: [ 0, 0, 160, 255],
  visible: true,
  dimension: 0
});


function vehicleListDraw(vehJSON){
 const ui_vehicles = new Menu("Fahrzeugpapiere", "Liste aller Fahrzeuge", MenuPoint);
  ui_vehicles.Visible = true;
  vehList = JSON.parse(vehJSON);
    vehList.forEach(veh => {
        let newVehicle = new UIMenuItem("" + veh.model,""+veh.id);
        ui_vehicles.AddItem(newVehicle);
        newVehicle.SetRightLabel(""+veh.kennzeichen);
    });
  ui_vehicles.ItemSelect.on((item, index) => {
    mp.events.call("client:playermenu:vehsubMenu",item.Description);
    ui_vehicles.Close();
  });
}
mp.events.add("client:vehicles:vehlist", vehicleListDraw);

mp.events.add("client:playermenu:vehsubMenu", (id) => {
  let ui_vehSub = new Menu("Fahrzeugpapiere", "", MenuPoint);
  ui_vehSub.AddItem(new UIMenuItem("Fahrzeugpapiere Zeigen",""));
  ui_vehSub.AddItem(new UIMenuItem("Fahrzeugpapiere Sehen",""));
  ui_vehSub.AddItem(new UIMenuItem("Fahrzeugpapiere überschreiben",""+id));
  ui_vehSub.AddItem( new UIMenuItem("Schließen", ""));
  ui_vehSub.Visible = true;

  ui_vehSub.ItemSelect.on((item, index, value) => {
    if (item.Text == "Fahrzeugpapiere überschreiben") {
        mp.events.call("client:vehicles:givevehicle", item.Description);
        ui_vehSub.Close();              
    } else if (item.Text == "Schließen") {
      ui_vehSub.Close();
    }
  });
});

mp.events.add("client:vehicles:givevehicle", (id) => {
  let ui_vehSubsub = new Menu("Fahrzeugpapiere", "", MenuPoint);
  ui_vehSubsub.AddItem(new UIMenuItem("Fahrzeugpapiere überschreiben",""+id));
  ui_vehSubsub.AddItem(new UIMenuItem("Fahrzeugpapiere nicht überschreiben",""));
  ui_vehSubsub.Visible = true;

  ui_vehSubsub.ItemSelect.on((item, index, value) => {
    let nearestPlayers = [];
    mp.players.forEachInRange(mp.players.local.position, 2, (nearPlayer) => {
        nearestPlayers.push(nearPlayer);
    });
    if (item.Text == "Fahrzeugpapiere überschreiben") {
      if(!nearestPlayers[1]){
        mp.game.graphics.notify("Keiner in der Nähe");
        return;
      } else {
        mp.events.callRemote("server:vehicles:givevehicle", item.Description);
        ui_vehSubsub.Close(); 
      }        
    } else if (item.Text == "Fahrzeugpapiere nicht überschreiben") {
      ui_vehSubsub.Close();
    }
  });
});


mp.events.add("client:playermenu:mainMenu", (admin,ergeben,first,last,gang,gangrang,paycheck,money) => {
   let main = new Menu(""+first+" "+last,"",  MenuPoint);   
   if (ergeben == 0){
    main.AddItem(new UIMenuItem("Animationen","Animationen"));
    main.AddItem(new UIMenuItem("Inventar","Öffnet dein Inventar"));
    //main.AddItem(new UIMenuItem("Emails","Deine Emails"));
    main.AddItem(new UIMenuItem("Kleidung","Kleidung an/ausziehen"));
    main.AddItem(new UIMenuItem("Interaktionen","Interaktionen mit anderen Spielern"));
    main.AddItem(new UIMenuItem("Laufstile","Laufstile deines Characters"));
    main.AddItem(new UIMenuItem("Schlüsselverwaltung","Alle Schlüssel die du besitzt"));
    main.AddItem(new UIMenuItem("Ergeben","Ergebe dich"));
    main.AddItem(new UIMenuItem("Fahrzeugpapiere","Deine Fahrzeugpapiere"));
    main.AddItem(new UIMenuItem("Gangverwaltung","Verwalte die Gang: "+gang));  
    main.AddItem(new UIMenuItem("Adventskalender","Öffne jeden Tag ein Törchen"));  
   }
   if (ergeben == 1) {
    main.AddItem(new UIMenuItem("Nicht mehr Ergeben","Ergebe dich nicht mehr"));
   }
   if (paycheck == 0) {
    main.AddItem(new UIMenuItem("PayCheck Deaktivieren",""));
   }
   if (paycheck == 1) {
    main.AddItem(new UIMenuItem("PayCheck Aktivieren",""));
   }
    if (admin > 0) {
      main.AddItem(new UIMenuItem("Admin","Abuse mich und ich Fick Dich!"));
    }  
    main.AddItem( new UIMenuItem("Schließen", ""));
    main.Visible = true;
    
    main.MenuClose.on(() => {
      mp.events.callRemote("server:playermenu:variable");
    });

    main.ItemSelect.on((item, index, value) => {
    if (item.Text == "Kleidung") {
      mp.events.callRemote("server:clothes:showKleidung");
      main.Close();
    } else if (item.Text == "Admin") {
      mp.events.callRemote("server:admin:openAdmin",admin);
      main.Close();   
    } else if (item.Text == "Emails") {
      mp.events.callRemote("server:email:openEmailMain");
      main.Close(); 
    } else if (item.Text == "Inventar") {
      mp.events.callRemote("server:inventory:prepareMenu");
      main.Close();  
    } else if (item.Text == "Gangverwaltung") {
      mp.events.call("client:gang:openMenu",gang,gangrang);
      main.Close();
    } else if (item.Text == "Laufstile") {
        mp.events.callRemote("requestWalkingStyles");
        main.Close();  
    } else if (item.Text == "Animationen") {
      mp.events.call("client:animation:openMenu");
      main.Close();   
    } else if (item.Text == "Schlüsselverwaltung") {
      mp.events.call("client:playermenu:openKeys");
      main.Close(); 
    } else if (item.Text == "Einstellungen") {
      mp.events.call("client:playermenu:settings");
      main.Close(); 
    } else if (item.Text == "Interaktionen") {
      mp.events.callRemote("server:playermenu:interaction");
      main.Close(); 
    } else if (item.Text == "Ergeben") {
      mp.events.callRemote("server:Keybind:ergeben");
      main.Close();
    } else if (item.Text == "Nicht mehr Ergeben") {
      mp.events.callRemote("server:Keybind:notergeben");
      main.Close();
    } else if (item.Text == "Fahrzeugpapiere") {
      mp.events.callRemote("server:vehicles:vehlist");
      main.Close();
    } else if (item.Text == "PayCheck Aktivieren") {
      mp.events.callRemote("server:paycheck:on");
      main.Close();
    } else if (item.Text == "PayCheck Deaktivieren") {
      mp.events.callRemote("server:paycheck:off");
      main.Close(); 
    } else if (item.Text == "Adventskalender") {
      mp.events.call("client:playermenu:openAdvent");
      main.Close();
    } else if (item.Text == "Schließen") {
      main.Close();
    }
  });
});
function setWalkingStyle(player, style) {
  if (!style) {
      player.resetMovementClipset(0.0);
  } else {
      if (!mp.game.streaming.hasClipSetLoaded(style)) {
          mp.game.streaming.requestClipSet(style);
          while(!mp.game.streaming.hasClipSetLoaded(style)) mp.game.wait(0);
      }

      player.setMovementClipset(style, 0.0);
  }
}

// create menu
let stylesMenu = new Menu("Laufstile", "", MenuPoint);
stylesMenu.Visible = false;

stylesMenu.ItemSelect.on((item, index) => {
  mp.events.callRemote("setWalkingStyle", index);

  stylesMenu.MenuItems[currentItem].SetRightLabel("");
  item.SetRightLabel("Aktuell");

  currentItem = index;
});

// events
mp.events.add("receiveWalkingStyles", (namesJSON) => {
  walkingStyles = JSON.parse(namesJSON);
  for (let i = 0; i < walkingStyles.length; i++) stylesMenu.AddItem(new UIMenuItem(walkingStyles[i], ""));

  stylesMenu.MenuItems[0].SetRightLabel("Aktuell");
  stylesMenu.Visible = true;
});

mp.events.add("entityStreamIn", (entity) => {
  if (entity.type !== "player") return;
  setWalkingStyle(entity, entity.getVariable("walkingStyle"));
});

mp.events.addDataHandler("walkingStyle", (entity, value) => {
  if (entity.type === "player") setWalkingStyle(entity, value);
});

mp.events.add("client:playermenu:interaction", (waffena, waffenb, pkw, lkw, pilot, job,ergeben,fesseln) => {
  let ui_interaction = new Menu("Interaktionen", "", MenuPoint);
  ui_interaction.AddItem(new UIMenuItem("Ausweis zeigen",""));
  if (waffena == 1) {
    ui_interaction.AddItem(new UIMenuItem("Waffenschein A zeigen",""));
  }
  if (waffenb == 1) {
    ui_interaction.AddItem(new UIMenuItem("Waffenschein B zeigen",""));
  } 
  if (pkw == 1) {
    ui_interaction.AddItem(new UIMenuItem("PKW Führerschein zeigen","")); 
  }
  if (lkw == 1) {
    ui_interaction.AddItem(new UIMenuItem("LKW Führerschein zeigen","")); 
  }
  if (pilot == 1) {
    ui_interaction.AddItem(new UIMenuItem("Piloten Lizenz zeigen","")); 
  }
  if (job == 1) {
    ui_interaction.AddItem(new UIMenuItem("Job Lizenz zeigen","")); 
  }  
  ui_interaction.AddItem(new UIMenuItem("Geld geben",""));
  if (ergeben == 1) {
    ui_interaction.AddItem(new UIMenuItem("Handy abnehmen",""));  
    ui_interaction.AddItem(new UIMenuItem("Ausrauben",""));  
  }
  ui_interaction.AddItem( new UIMenuItem("Schließen", ""));
  ui_interaction.Visible = true;

  ui_interaction.ItemSelect.on((item, index, value) => {
    if (item.Text == "Ausweis zeigen") {
      mp.events.callRemote("server:playermenu:givedokument",item.Text);
      ui_interaction.Close();
    } else if (item.Text == "Waffenschein A zeigen") {
      mp.events.callRemote("server:playermenu:givedokument",item.Text);
      ui_interaction.Close();  
    } else if (item.Text == "Waffenschein B zeigen") {
      mp.events.callRemote("server:playermenu:givedokument",item.Text);
      ui_interaction.Close();    
    } else if (item.Text == "PKW Führerschein zeigen") {
      mp.events.callRemote("server:playermenu:givedokument",item.Text);
      ui_interaction.Close();  
    } else if (item.Text == "LKW Führerschein zeigen") {
      mp.events.callRemote("server:playermenu:givedokument",item.Text);
      ui_interaction.Close();  
    } else if (item.Text == "Piloten Lizenz zeigen") {
      mp.events.callRemote("server:playermenu:givedokument",item.Text);
      ui_interaction.Close(); 
    } else if (item.Text == "Job Lizenz zeigen") {
      mp.events.callRemote("server:playermenu:givedokument",item.Text);
      ui_interaction.Close();   
    } else if (item.Text == "Geld geben") {
      mp.events.call("createInputShop", "giveMoneyToTarget");
      ui_interaction.Close();  
    } else if (item.Text == "Handy abnehmen") {
      mp.events.callRemote("server:playermenu:removephone");
      ui_interaction.Close();  
    } else if (item.Text == "Fesseln") {
      mp.events.callRemote("server:playermenu:giveweapona");
      ui_interaction.Close(); 
    } else if (item.Text == "Entfesseln") {
      mp.events.callRemote("server:playermenu:giveweapona");
      ui_interaction.Close(); 
    } else if (item.Text == "Ausrauben") {
      mp.events.callRemote("server:bank:playerrob");
      ui_interaction.Close();   
    } else if (item.Text == "Schließen") {
      ui_interaction.Close();
    }
  });
});

mp.events.add("client:playermenu:openAdvent", () => {
  let ui_Advent = new Menu("Adventskalender", "", MenuPoint);
  ui_Advent.AddItem(new UIMenuItem("Tor 1","1"));
  ui_Advent.AddItem(new UIMenuItem("Tor 2","2"));
  ui_Advent.AddItem(new UIMenuItem("Tor 3","3"));
  ui_Advent.AddItem(new UIMenuItem("Tor 4","4"));
  ui_Advent.AddItem(new UIMenuItem("Tor 5","5"));
  ui_Advent.AddItem(new UIMenuItem("Tor 6","6"));
  ui_Advent.AddItem(new UIMenuItem("Tor 7","7"));
  ui_Advent.AddItem(new UIMenuItem("Tor 8","8"));
  ui_Advent.AddItem(new UIMenuItem("Tor 9","9"));
  ui_Advent.AddItem(new UIMenuItem("Tor 10","10"));
  ui_Advent.AddItem(new UIMenuItem("Tor 11","11"));
  ui_Advent.AddItem(new UIMenuItem("Tor 12","12"));
  ui_Advent.AddItem(new UIMenuItem("Tor 13","13"));
  ui_Advent.AddItem(new UIMenuItem("Tor 14","14"));
  ui_Advent.AddItem(new UIMenuItem("Tor 15","15"));
  ui_Advent.AddItem(new UIMenuItem("Tor 16","16"));
  ui_Advent.AddItem(new UIMenuItem("Tor 17","17"));
  ui_Advent.AddItem(new UIMenuItem("Tor 18","18"));
  ui_Advent.AddItem(new UIMenuItem("Tor 19","19"));
  ui_Advent.AddItem(new UIMenuItem("Tor 20","20"));
  ui_Advent.AddItem(new UIMenuItem("Tor 21","21"));
  ui_Advent.AddItem(new UIMenuItem("Tor 22","22"));
  ui_Advent.AddItem(new UIMenuItem("Tor 23","23"));
  ui_Advent.AddItem(new UIMenuItem("Tor 24","24"));
  ui_Advent.AddItem( new UIMenuItem("Schließen", ""));
  ui_Advent.Visible = true;

  ui_Advent.ItemSelect.on((item, index, value) => {
    if (item.Text !== "Schließen") {
      mp.events.callRemote("server:advent:opendoor",item.Description);
      ui_Advent.Close();
    } else {
      ui_Advent.Close();
    }   
  });
});

mp.events.add("client:playermenu:openKeys", () => {
  let ui_Key = new Menu("Schlüsselverw.", "", MenuPoint);
  ui_Key.AddItem(new UIMenuItem("Fahrzeugschlüssel",""));
  ui_Key.AddItem( new UIMenuItem("Schließen", ""));
  ui_Key.Visible = true;

  ui_Key.ItemSelect.on((item, index, value) => {
    if (item.Text == "Fahrzeugschlüssel") {
      mp.events.callRemote("server:vehKeys:openKeys");
      ui_Key.Close();
    } else if (item.Text == "Haustürschlüssel") {
      mp.events.callRemote("server:vehKeys:openKeys");
      ui_Key.Close();    
    } else if (item.Text == "Schließen") {
      ui_Key.Close();
    }
  });
});

mp.events.add("client:dead:respawnmenu", () => {
  let ui_respawn = new Menu("Respawn", "", MenuPoint);
  ui_respawn.AddItem(new UIMenuItem("Jetzt Respawnen",""));
  ui_respawn.AddItem( new UIMenuItem("Auf Medic warten", "Du respawnst nach 10 Minuten dann automatisch"));
  ui_respawn.Visible = true;

  ui_respawn.ItemSelect.on((item, index, value) => {
    if (item.Text == "Jetzt Respawnen") {
      mp.events.callRemote("server:dead:respawn");
      ui_respawn.Close();
    } else if (item.Text == "Auf Medic warten") {
      mp.events.callRemote("server:dead:waiting");
      ui_respawn.Close();    
    } 
  });
});



mp.events.add("client:admin:openAdmin", (admin) => {
  let ui_admin = new Menu("Admin", "Abuse mich und ich Fick Dich!", MenuPoint);
  ui_admin.AddItem(new UIMenuItem("Spielerliste","Wir sind die NSA!"));
  ui_admin.AddItem(new UIMenuItem("Spieler Whitelisten","Staatsbürgerschaft geben"));
  ui_admin.AddItem(new UIMenuItem("Einreise Büro","Bringt dich ins Büro"));
  ui_admin.AddItem(new UIMenuItem("Heilen","Heilwasser ist Beste!"));
  ui_admin.AddItem(new UIMenuItem("Weste","Heilwasser ist Beste!"));
  ui_admin.AddItem(new UIMenuItem("Unsichtbar","Der Harry Potter umhang"));
  ui_admin.AddItem(new UIMenuItem("Chat aktivieren","Chat an"));
  ui_admin.AddItem(new UIMenuItem("Chat deaktivieren","Chat aus"));
  ui_admin.AddItem(new UIMenuItem("Fahrzeug Beschlagnahmen","Despawnt dass Fahrzeug"));

   if (admin > 3) {
    ui_admin.AddItem(new UIMenuItem("Godmode an","Bin ich HULK?"));
    ui_admin.AddItem(new UIMenuItem("Godmode aus","Bin ich HULK?"));
   }   
   if (admin > 5) {
    ui_admin.AddItem(new UIMenuItem("Banwetter","Ich bin ZEUS!"));
    ui_admin.AddItem(new UIMenuItem("Banwetter aus","Ich bin GOTT!"));
   }  
   ui_admin.AddItem( new UIMenuItem("Schließen", ""));
   ui_admin.Visible = true;

   ui_admin.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
    let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
      let vehicle = mp.vehicles.atHandle(vehHandle);
   if (item.Text == "Spielerliste") {
     mp.events.callRemote("server:admin:playerlist");
     ui_admin.Close();
   } else if (item.Text == "Admin") {
     mp.events.callRemote("server:admin:openAdmin",admin);
     ui_admin.Close();  
    } else if (item.Text == "Spieler Whitelisten") {
      mp.events.callRemote("server:admin:listPlayer");
      ui_admin.Close();  
    } else if (item.Text == "Einreise Büro") {
      mp.events.callRemote("server:admin:portBüro");
      ui_admin.Close(); 
   } else if (item.Text == "Banwetter") {
      mp.events.callRemote("server:admin:banwetter");      
      ui_admin.Close();   
   } else if (item.Text == "Banwetter aus") {
      mp.events.callRemote("server:admin:banwetteraus");
      ui_admin.Close();   
    } else if (item.Text == "Heilen") {
      mp.events.callRemote("server:admin:heal");
      ui_admin.Close();   
    } else if (item.Text == "Weste") {
      mp.events.callRemote("server:admin:armor");
      ui_admin.Close(); 
    } else if (item.Text == "Chat aktivieren") {
      mp.gui.chat.show(true);
      ui_admin.Close(); 
    } else if (item.Text == "Chat deaktivieren") {
      mp.gui.chat.show(false);
      ui_admin.Close(); 
    } else if (item.Text == "Chat deaktivieren") {
      mp.gui.chat.show(false);
      ui_admin.Close(); 
    } else if (item.Text == "Fahrzeug Beschlagnahmen") {
      mp.events.callRemote("server:lspd:mainMenu",item.Text);
      ui_admin.Close();
    } else if (item.Text == "Godmode an") {
      mp.game.player.setInvincible(true);
      ui_admin.Close(); 
    } else if (item.Text == "Godmode aus") {
      mp.game.player.setInvincible(false);
      ui_admin.Close(); 
   } else if (item.Text == "Schließen") {
    ui_admin.Close();

    
   }
 });
});

mp.events.add("client:admin:subMenu", (id) => {
  let ui_admin = new Menu("Admin", "Abuse mich und ich Fick Dich!", MenuPoint);
  ui_admin.AddItem(new UIMenuItem("Zum Spieler Teleportieren",""));
  ui_admin.AddItem(new UIMenuItem("Spieler her Teleportieren","Heilwasser ist Beste!"));
  ui_admin.AddItem(new UIMenuItem("Kicken","Der Harry Potter umhang"));
  ui_admin.AddItem(new UIMenuItem("Perma Bannen","Der Harry Potter umhang"));
  ui_admin.AddItem(new UIMenuItem("Heilen","Der Harry Potter umhang"));
  ui_admin.AddItem(new UIMenuItem("Tracken","Ich weiß wo du bist :)"));

   ui_admin.AddItem( new UIMenuItem("Schließen", ""));
   ui_admin.Visible = true;

   ui_admin.ItemSelect.on((item, index, value) => {
   if (item.Text == "Zum Spieler Teleportieren") {
     mp.events.callRemote("server:admin:tpto",id);
     ui_admin.Close();
   } else if (item.Text == "Spieler her Teleportieren") {
     mp.events.callRemote("server:admin:tphere",id);
     ui_admin.Close();    
  } else if (item.Text == "Perma Bannen") {
      mp.events.callRemote("server:admin:permban",id);
      ui_admin.Close(); 
    } else if (item.Text == "Kicken") {
      mp.events.callRemote("server:admin:kick",id);
      ui_admin.Close(); 
    } else if (item.Text == "Tracken") {
      mp.events.callRemote("server:admin:track",id);
      ui_admin.Close(); 
   } else if (item.Text == "Schließen") {
    ui_admin.Close();
   }
 });
});

function playerListDraw(playerJSON,id){
  ui_playerlist = new Menu("Spielerliste", "Liste aller Spieler", MenuPoint);
  ui_playerlist.Visible = true;
  if (playerJSON != "none") {
    playerJSON = JSON.parse(playerJSON);
    playerJSON.forEach(players => {
        let newItem = new UIMenuItem("" + players.firstname+" "+players.lastname, ""+players.onlineid);
        ui_playerlist.AddItem(newItem);
        newItem.SetRightLabel("");
    });
  } else {
    ui_playerlist.AddItem( new UIMenuItem("Keine Spieler Online!", ""));
  }


  ui_playerlist.ItemSelect.on((item, index) => {
    mp.events.call("client:admin:subMenu",item.Description);
      ui_playerlist.Close();
  });
}
mp.events.add("client:admin:playerlist", playerListDraw);

// Kleidungssmenu
mp.events.add("client:playermenu:settings", (gender) => {
  ui_Kleidung = new Menu("Einstellungen", "", MenuPoint);
  ui_Kleidung.AddItem(new UIMenuItem("Auswählen", ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("ATM Blips", checked = checkAtm, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Garagen Blips", checked = checkGaragen, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Job Blips", checked = checkJobs, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Öffentliche Blips", checked = checkOeffentlich, Description = ""));
  ui_Kleidung.AddItem(new UIMenuCheckboxItem("Secret Blips", checked = checkSecret, Description = ""));

  ui_Kleidung.Visible = true;

  ui_Kleidung.MenuClose.on(() => {
    ui_Kleidung.RefreshIndex();
  });

  ui_Kleidung.CheckboxChange.on((checkbox, value) => {
    if (checkbox.Text === "ATM Blips"){
      if (value === true){
          checkAtm = true;
      } else {
          checkAtm = false;
      }
    } else if (checkbox.Text === "Garagen Blips"){
      if (value === true){
        checkGaragen = true;
      } else {
        checkGaragen = false;
      }
    } else if (checkbox.Text === "Job Blips"){
      if (value === true){        
        checkJobs = true;
      } else {
        checkJobs = false;
      }
    } else if (checkbox.Text === "Öffentliche Blips"){
      if (value === true){            
        checkOeffentlich = true;
      } else {
        checkOeffentlich = false;
      }
    } else if (checkbox.Text === "Secret Blips") {
      if (value === true){
        checkSecret = true;
      } else {
        checkSecret = false;
      }
    }
  });
});

// Kleidungssmenu
mp.events.add("client:clothes:showKleidung", (gender) => {
    ui_Kleidung = new Menu("Kleidung", "", MenuPoint);
    ui_Kleidung.AddItem(new UIMenuItem("Auswählen", ""));
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Hut", checked = checkHut, Description = ""));
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Brille", checked = checkBrille, Description = ""));
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Maske", checked = checkMaske, Description = ""));
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Oberkörper", checked = checkOberkoerper, Description = ""));
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Hose", checked = checkHose, Description = ""));
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Schuhe", checked = checkSchuhe, Description = ""));  
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Ohrringe", checked = checkSchuhe, Description = "")); 
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Arme", checked = checkSchuhe, Description = "")); 
    ui_Kleidung.AddItem(new UIMenuCheckboxItem("Accessior", checked = checkSchuhe, Description = "")); 
    ui_Kleidung.AddItem(new UIMenuItem("Kleidungsset 1 speichern","Speicher Set 1"));
    ui_Kleidung.AddItem(new UIMenuItem("Kleidungsset 2 speichern","Speicher Set 1"));
    ui_Kleidung.AddItem(new UIMenuItem("Kleidungsset 1 anziehen","Ziehe Set 1 an"));
    ui_Kleidung.AddItem(new UIMenuItem("Kleidungsset 2 anziehen","Ziehe Set 2 an"));
    ui_Kleidung.Visible = true;
  
    ui_Kleidung.MenuClose.on(() => {
      ui_Kleidung.RefreshIndex();
    });
    
    ui_Kleidung.ItemSelect.on((item, index, value) => {
      if (item.Text == "Kleidungsset 1 speichern") {
        mp.events.callRemote("server:playermenu:save1");
        ui_Kleidung.Close();
      } else if (item.Text == "Kleidungsset 2 speichern") {
        mp.events.callRemote("server:playermenu:save2");
        ui_Kleidung.Close();    
     } else if (item.Text == "Kleidungsset 1 anziehen") {
         mp.events.callRemote("server:playermenu:clothon1");
         ui_Kleidung.Close(); 
       } else if (item.Text == "Kleidungsset 2 anziehen") {
         mp.events.callRemote("server:playermenu:clothon2");
         ui_Kleidung.Close(); 
      }
    });
  
    ui_Kleidung.CheckboxChange.on((checkbox, value) => {
      if (checkbox.Text === "Hut"){
        if (value === true){
            mp.events.callRemote("server:playermenu:setexistHut");
            checkHut = true;
        } else {
          if (gender == 0) {
            mp.events.callRemote("server:playermenu:setHut", 0, 121, 0);
          } else {
            mp.events.callRemote("server:playermenu:setHut", 0, 120, 0);
          }
          checkHut = false;
        }
      } else if (checkbox.Text === "Brille"){
        if (value === true){
          mp.events.callRemote("server:playermenu:setexistEye");
          checkBrille = true;
        } else {
          if (gender == 0) {
            mp.events.callRemote("server:playermenu:setEye", 1, 0, 0);
          } else {
            mp.events.callRemote("server:playermenu:setEye", 1, 5, 0);
          }
          checkBrille = false;
        }
      } else if (checkbox.Text === "Maske"){
        if (value === true){        
          mp.events.callRemote("server:playermenu:setexistMask");
          checkMaske = true;
        } else {
          if (gender == 0) {
            mp.events.callRemote("server:playermenu:setMask", 1, 0, 0);
          } else {
            mp.events.callRemote("server:playermenu:setMask", 1, 0, 0);
          }
          checkMaske = false;
        }
      } else if (checkbox.Text === "Oberkörper"){
        if (value === true){         
            mp.events.callRemote("server:playermenu:setexistTorso");     
          checkOberkoerper = true;
        } else {
          if (gender == 0) {
            mp.events.callRemote("server:playermenu:setOberkörper", 11, 91, 0,8,15,0,3,15,0,9,0,0);
          } else {
            mp.events.callRemote("server:playermenu:setOberkörper", 11, 274, 2,8,14,0,3,15,0,9,0,0);
          }
          checkOberkoerper = false;
        }
      } else if (checkbox.Text === "Hose") {
        if (value === true){
          mp.events.callRemote("server:playermenu:setexistLeg");
          checkHose = true;
        } else {
          if (gender == 0) {
            mp.events.callRemote("server:playermenu:setLeg", 4, 21, 0);
          } else {
            mp.events.callRemote("server:playermenu:setLeg", 4, 17, 2);
          }
          checkHose = false;
        }
      } else if (checkbox.Text === "Schuhe"){
        if (value === true){
            mp.events.callRemote("server:playermenu:setexistShoe");  
          checkSchuhe = true;
        } else {
          if (gender == 0) {
            mp.events.callRemote("server:playermenu:setShoe", 6, 34, 0);
          } else {
            mp.events.callRemote("server:playermenu:setShoe", 6, 35, 0);
          }
          checkSchuhe = false;
        }
    } else if (checkbox.Text === "Ohrringe"){
      if (value === true){
          mp.events.callRemote("server:playermenu:setexistEar");  
        checkOhr = true;
      } else {
        if (gender == 0) {
          mp.events.callRemote("server:playermenu:setEar", 2, 255, 0);
        } else {
          mp.events.callRemote("server:playermenu:setEar", 2, 255, 0);
        }
        checkOhr = false;
      } 
    } else if (checkbox.Text === "Arme"){
      if (value === true){
          mp.events.callRemote("server:playermenu:setexistArm");  
          checkArm = true;
      } else {
        if (gender == 0) {
          mp.events.callRemote("server:playermenu:setArm", 6, 255, 0,7,255,255);
        } else {
          mp.events.callRemote("server:playermenu:setArm", 6, 255, 0,7,255,255);
        }
        checkArm = false;
      }
    } else if (checkbox.Text === "Accessior"){
      if (value === true){
          mp.events.callRemote("server:playermenu:setexistAcce");  
          checkAcce = true;
      } else {
        if (gender == 0) {
          mp.events.callRemote("server:playermenu:setAcce", 7, 0, 0);
        } else {
          mp.events.callRemote("server:playermenu:setAcce", 7, 0, 0);
        }
        checkSchuhe = false;
      }
    }
    });
  });
  mp.keys.bind(0x5A, true, function() {
    if (mp.gui.chat.enabled === true || player.getVariable("isDead") == 'true' || player.getVariable('state') !== 'INGAME' || player.getVariable('arresting') == 'true' || mp.gui.cursor.visible === true ||  player.getVariable('mainMenu') == true) return;
     mp.events.callRemote("server:playermenu:mainMenu");
 });

 mp.events.add('entityStreamIn', (entity) => {
  if (entity.getType() == 4 || entity.getType() == 5) {
    mp.events.callRemote("server:syncedPlayer:syncClothes", entity);
    mp.events.callRemote("getDoors", mp.players.local);
  }
});

var noosesound = null;
mp.events.add("noosesound",(trigger) => {
  if (browser != null || noosesound != null) return;
  noosesound = mp.browsers.new("package://factions/index.html");
});

var weensound = null;
mp.events.add("weensound",(trigger) => {
  if (browser != null || weensound != null) return;
  weensound = mp.browsers.new("package://factions/ween.html");
});

mp.events.add("weensoundoff",(output,text) => {
  if (weensound !== null) {
    weensound.destroy();
    weensound = null;
  }
});

mp.events.add("noosesoundoff",(output,text) => {
  if (noosesound !== null) {
    noosesound.destroy();
    noosesound = null;
  }
});