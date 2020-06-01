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
let selectedNumPlate = null;
player = mp.players.local;
const MenuPoint = new Point(50, 50);
let clothesLSPD = null;
let mainMenuLSPD = null;
let memberMenuLSPD = null;

// Main Menu
mp.events.add("client:lspd:openMainMenu", (factionrang) => {
  mainMenuLSPD = new Menu("LSPD","",MenuPoint);
  mainMenuLSPD.AddItem(new UIMenuItem("Dienstausweis zeigen","Du zeigst deinen Dienstausweis"));
  mainMenuLSPD.AddItem(new UIMenuItem("Tablet","Aktensystem"));
  mainMenuLSPD.AddItem(new UIMenuItem("Dispatches","Liste aller aktiven Dispatches"));
  mainMenuLSPD.AddItem(new UIMenuItem("Leitstellen Telefon geben",""));
  mainMenuLSPD.AddItem(new UIMenuItem("Leitstellen Telefon wegnehmen",""));
  mainMenuLSPD.AddItem(new UIMenuItem("Festnehmen","Du nimmst die Person fest"));
  mainMenuLSPD.AddItem(new UIMenuItem("Freilassen","Du lässt die Person frei"));
  mainMenuLSPD.AddItem(new UIMenuItem("Durchsuchen","Du durchsuchst die Person"));
  mainMenuLSPD.AddItem(new UIMenuItem("Waffen Durchsuchen","Du durchsuchst die Person nach Waffen"));
  mainMenuLSPD.AddItem(new UIMenuItem("Bußgeld ausstellen","Du stellst ein Bußgeld aus"));
  mainMenuLSPD.AddItem(new UIMenuItem("Fahrzeug Beschlagnahmen","Fahrzeug geht in die Impound"));
  mainMenuLSPD.AddItem(new UIMenuItem("Fahrzeug Abschleppen","Fahrzeug geht in die Garage"));
    if(factionrang > 10){
      mainMenuLSPD.AddItem(new UIMenuItem("Mitarbeiterverwaltung",""));
    }
    if(mainMenuLSPD.Visible == false && memberMenuLSPD.Visible == false)
    {
    mainMenuLSPD.Open();
    }
    mainMenuLSPD.ItemSelect.on((item, index) => {
      const nextMenu = index;    
      if (item.Text !== "Bußgeld ausstellen") {
        mp.events.callRemote("server:lspd:mainMenu",item.Text);
        mainMenuLSPD.Close();
      } else {
        mp.events.call("createInputShop", "LspdTicket");
        mainMenuLSPD.Close();
      }          
    });
    mainMenuLSPD.MenuClose.on(() => {
      mp.events.callRemote("server:playermenu:variable");
    });    
});
var rechnung = null;
mp.events.add("createInputTicket",(trigger) => {
  if (browser != null || rechnung != null) return;
  rechnung = mp.browsers.new("package://factions/lspd/rechnung/index.html");
  rechnung.execute('setTrigger("' + trigger + '")');
  mp.gui.cursor.show(true, true);
});

mp.events.add("sendInputTicket",(trigger,output) => {
if (rechnung !== null) {
  rechnung.destroy();
  rechnung = null;
}
mp.events.callRemote("inputValueRechung", trigger, output);
mp.gui.cursor.show(false, false);
});
mp.events.add("client:lspd:requestTicket", (cop, amount, accountamount, staatskonto) => {
  const   ui_ticket = new Menu("Ticket bezahlen", "Du sollst "+amount+"$ bezahlen", MenuPoint);
          ui_ticket.AddItem( new UIMenuItem("Bezahlen", "Bezahle das Ticket"));
          ui_ticket.AddItem( new UIMenuItem("Ablehnen", "Das Ticket nicht bezahlen"));
          ui_ticket.Visible = true;

  ui_ticket.ItemSelect.on((item, index, value) => {
      if (item.Text == 'Bezahlen') {
          mp.events.callRemote("server:lspd:payTicket",cop,amount,accountamount, staatskonto);
          ui_ticket.Close();
      } else if (item.Text == 'Ablehnen') {
          mp.events.callRemote("server:lspd:dontPayTicket",cop);
          ui_ticket.Close();
      }
  });
});

mp.events.add("client:lspd:createHeliMenu",(rang) => {
  let heli = new Menu("Helikopter", "Die Dienst Helikopter", MenuPoint);
  heli.AddItem(new UIMenuItem("Maverick","353883353"));
  heli.AddItem( new UIMenuItem("Schließen", ""));
  heli.Visible = true;

  heli.ItemSelect.on((item, index, value) => {
    if (item.Text !== "Schließen") {
      mp.events.callRemote("server:lspd:spawnHeli",item.Description);
      heli.Close();
    } else if (item.Text == "Schließen") {
      heli.Close();
    }
  });
  heli.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
});

//MemberMenu
mp.events.add("client:lspd:openMemberMenu", () => {
  memberMenuLSPD = new Menu("LSPD","Mitarbeiterverwaltung",MenuPoint);
  memberMenuLSPD.AddItem(new UIMenuItem("Einstellen","Person einstellen"));
  memberMenuLSPD.AddItem( new UIMenuListItem("Befördern","Befördere dein gegenüber", LSPDRanks =new ItemsCollection(["1", "2", "3","4","5","6","7","8","9","10","11","12"])));
  memberMenuLSPD.AddItem(new UIMenuItem("Dienstnummer zuweisen","Du weist die Dienstnummer zu"));
  memberMenuLSPD.AddItem(new UIMenuItem("Entlassen","Person entlassen"));
  memberMenuLSPD.Open();
  memberMenuLSPD.ItemSelect.on((item, index) => {  
     if (item.Text == "Einstellen") {
      mp.events.callRemote("server:lspd:einstellen");
      memberMenuLSPD.Close();
     }  
     if (item.Text == "Dienstnummer zuweisen") {
      mp.events.call("createInputShop", "dienstnummerpd");
      memberMenuLSPD.Close();
     }  
     if (item.Text == "Befördern") {
      mp.events.callRemote("server:lspd:befördern",item.SelectedItem.DisplayText);
      memberMenuLSPD.Close();
     }
     if (item.Text == "Entlassen") {
      mp.events.callRemote("server:lspd:entlassen");
      memberMenuLSPD.Close();
     }
  });
});
mp.events.add("client:lspd:closeMemberMenu", () => {
memberMenuLSPD.Close();
});

//MemberMenü Ende
//Cothes Menu
clothesLSPD = new Menu("LSPD", "Umkleide", MenuPoint);
clothesLSPD.AddItem(new UIMenuItem("Standard-Uniform","Die Standard Officer Uniform"));
clothesLSPD.AddItem(new UIMenuItem("Parade-Uniform","Die Parade-Freitag Uniform"));
clothesLSPD.AddItem(new UIMenuItem("Zivil","Deine Zivilkleidung"));
clothesLSPD.Visible = false;

mp.events.add("client:lspd:clothes", () => {
  clothesLSPD.Visible = true;
});

clothesLSPD.ItemSelect.on((item, index) => {      
    mp.events.callRemote("server:lspd:clothes",item.Text);
});
clothesLSPD.MenuClose.on(() => {
  mp.events.callRemote("server:playermenu:variable");
});

//Cothes Menu
// MAIN MENU anzeigen
function drawDipatch(disJSON){
  // Menu für Fahrzeugliste anlegen
  ui_Dispatchv = new Menu("Dispatches", "Liste aller Dispatches", MenuPoint);
  ui_Dispatchv.Visible = true;
  if (disJSON != "none"){
    disList = JSON.parse(disJSON);
    disList.forEach(dispatch => {
        let newItem = new UIMenuItem("Dispatch-"+dispatch.disid, ""+dispatch.id);
        ui_Dispatchv.AddItem(newItem);
    });
  } else{
    ui_Dispatchv.AddItem( new UIMenuItem("Keine Dispatches vorhanden", ""));
  }

  // Auswertung Menuauswahl ausparken
  ui_Dispatchv.ItemSelect.on((item, index) => {
      mp.events.call("client:lspd:dispatchsub", item.Description);
      ui_Dispatchv.Close();
  });
}
mp.events.add("client:lspd:dispatchvewer", drawDipatch);

// MAIN MENU anzeigen
function drawChief(disJSON,titel,faction,rang){
  // Menu für Fahrzeugliste anlegen
  ui_Chiefwahl = new Menu("Chiefwahl", ""+titel, MenuPoint);
  ui_Chiefwahl.Visible = true;
  if (disJSON != "none"){
    disList = JSON.parse(disJSON);
    disList.forEach(dispatch => {
        let newItem = new UIMenuItem(""+dispatch.punkt, ""+dispatch.id);
        ui_Chiefwahl.AddItem(newItem);
    });
    if (faction == "Justiz" && rang > 11) {
      ui_Chiefwahl.AddItem( new UIMenuItem("Wahl auswerten", ""));
    }
  } else{
    ui_Chiefwahl.AddItem( new UIMenuItem("Keine Chiefwahl aktiv", ""));
  }

  // Auswertung Menuauswahl ausparken
  ui_Chiefwahl.ItemSelect.on((item, index) => {
    if (item.Text !== "Wahl auswerten") {
      mp.events.callRemote("server:lspd:submitwahl", item.Description);
      ui_Chiefwahl.Close();
    } else {
      mp.events.callRemote("server:lspd:wahlausgabe");
      ui_Chiefwahl.Close();
    } 
     
  });
  ui_Chiefwahl.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
}
mp.events.add("client:lspd:chiefwahl", drawChief);

mp.events.add("client:lspd:dispatchsub", (position) => {
  const   ui_subdispatch = new Menu("Dipatch", "Wähle eine Aktion", MenuPoint);
  ui_subdispatch.AddItem( new UIMenuItem("Dispatch Makieren", ""+position));
  ui_subdispatch.AddItem( new UIMenuItem("Dispatch löschen", ""+position));
  ui_subdispatch.Visible = true;

  ui_subdispatch.ItemSelect.on((item) => {
      if (item.Text == 'Dispatch Makieren') {
          mp.events.callRemote("server:lspd:mark",item.Description)
          ui_subdispatch.Close();
      } else if (item.Text == 'Dispatch löschen') {
          mp.events.callRemote("server:lspd:deletedispatch",item.Description);
          ui_subdispatch.Close();
      }
  });
});

mp.events.add("client:lspd:markdispatch",(posx, posy) => {
  mp.game.ui.setNewWaypoint(posx, posy);
});


mp.events.add("client:lspd:openWeapon", (ausnahme) => {
  let weapon = new Menu("Waffenkammer", "Waffenkammer", MenuPoint);
  weapon.AddItem(new UIMenuItem("Waffen nehmen","")); 
  weapon.AddItem(new UIMenuItem("Waffen abgeben",""));     
  weapon.AddItem( new UIMenuItem("Schließen", ""));
  weapon.Visible = true;

  weapon.ItemSelect.on((item, index, value) => {
    if (item.Text == "Waffen nehmen") {
      mp.events.call("client:lspd:Weapons", ausnahme);
      weapon.Close();
    } else if (item.Text == "Waffen abgeben") {
      mp.events.call("client:lspd:deleteWeapons");
      weapon.Close();
    } else if (item.Text == "Schließen") {
      weapon.Close();
    }
  });
  weapon.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
});

mp.events.add("client:lspd:searchInvMenu", (inventory) => {
  const ui_search = new Menu("Durchsuchung", "Das hat diese Person dabei", MenuPoint);

  var invParsed = JSON.parse(inventory);
  invParsed.forEach((invItem) => {
        ui_search.AddItem( new UIMenuItem(""+invItem.itemName+" ("+invItem.amount+"x)", ""+invItem.id));
  });
        ui_search.AddItem( new UIMenuItem("Schließen", "Durchsuchung beenden"));
        ui_search.Visible = true;

  ui_search.ItemSelect.on((item, index, value) => {
    if (item.Text !== "Schließen") {
      mp.events.callRemote("server:lspd:removeItem",item.Description);
    } else {
      ui_search.Close();
    }
  });
});

mp.events.add("client:lspd:Weapons", (ausnahme) => {
  let weaponLSPD = new Menu("Waffenkammer", "Waffenkammer", MenuPoint);
  weaponLSPD.AddItem(new UIMenuItem("Schutzweste",""));
  weaponLSPD.AddItem(new UIMenuItem("Fallschirm",""));
  weaponLSPD.AddItem(new UIMenuItem("Taschenlampe",""));
  weaponLSPD.AddItem(new UIMenuItem("Schlagstock",""));
  weaponLSPD.AddItem(new UIMenuItem("Tazer",""));
  weaponLSPD.AddItem(new UIMenuItem("Pistole Kaliber .50",""));
  weaponLSPD.AddItem(new UIMenuItem("AP-Pistole",""));
  if (ausnahme == 1) {
    /*weaponLSPD.AddItem(new UIMenuItem("SMG",""));
    weaponLSPD.AddItem(new UIMenuItem("Karabiner",""));*/
  }    
  weaponLSPD.AddItem( new UIMenuItem("Schließen", ""));
  weaponLSPD.Visible = true;

  weaponLSPD.ItemSelect.on((item, index, value) => {
    if (item.Text !== "Schließen") {
      mp.events.callRemote("server:lspd:weapons",item.Text);
    } else if (item.Text == "Schließen") {
      weaponLSPD.Close();
    }
  });
  weaponLSPD.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
});

mp.events.add("client:lspd:deleteWeapons", () => {
  let weaponDLSPD = new Menu("Waffenkammer", "Waffenkammer", MenuPoint);
  weaponDLSPD.AddItem(new UIMenuItem("Schutzweste",""));
  weaponDLSPD.AddItem(new UIMenuItem("Fallschirm",""));
  weaponDLSPD.AddItem(new UIMenuItem("Taschenlampe",""));
  weaponDLSPD.AddItem(new UIMenuItem("Schlagstock",""));
  weaponDLSPD.AddItem(new UIMenuItem("Tazer",""));
  weaponDLSPD.AddItem(new UIMenuItem("Pistole Kaliber .50",""));
  weaponDLSPD.AddItem(new UIMenuItem("AP-Pistole",""));
  /*weaponDLSPD.AddItem(new UIMenuItem("SMG",""));
  weaponDLSPD.AddItem(new UIMenuItem("Karabiner",""));*/ 
  weaponDLSPD.AddItem( new UIMenuItem("Schließen", ""));

  weaponDLSPD.Visible = true;

  weaponDLSPD.ItemSelect.on((item, index, value) => {
    if (item.Text !== "Schließen") {
      mp.events.callRemote("server:lspd:weaponsdelete",item.Text);
    } else if (item.Text == "Schließen") {
      weaponDLSPD.Close();
    }
  });
});

let dismissLSPD = null;
mp.events.add("client:lspd:askedForDismiss", () => {
  dismissLSPD = new Menu("LSPD","Willst du den Mitarbeiter wirklich entlassen?",MenuPoint);
  dismissLSPD.AddItem(new UIMenuItem("Ja","Der Mitarbeiter wird entlassen."));
  dismissLSPD.AddItem(new UIMenuItem("Nein","Aktion abbrechen"));
  dismissLSPD.Open();

  dismissLSPD.ItemSelect.on((item, index) => {      
    mp.events.callRemote("server:lspd:dismissMember",item.Text);
  });
});
mp.events.add("client:lspd:closeDismissMenu", () => {
  dismissLSPD.Close();
});

mp.events.add("client:lspd:createOfficeComputer", (factionrang) => {
   const officeComputer = new Menu("LSPD","Computer",MenuPoint);
  officeComputer.AddItem(new UIMenuItem("Leitstelle","Leitstelle übernehmen/abgeben"));
  officeComputer.AddItem(new UIMenuItem("Aktive Mitarbeiter","Du siehst alle Officer die im Dienst sind!"));
  officeComputer.AddItem(new UIMenuItem("Handy Ortung","Hier kannst du Handys orten"));
  officeComputer.AddItem(new UIMenuItem("Fahrzeug Ortung","Hier kannst du Handys orten"));
  if (factionrang > 10) {
    officeComputer.AddItem(new UIMenuItem("Ausnahmezustand","Ausnahmezustand aktivieren/deaktivieren"));
  }  
  officeComputer.Visible = true;
  

  officeComputer.ItemSelect.on((item, index) => {
    if (item.Text == "Aktive Mitarbeiter" || item.Text == "Ausnahmezustand") {
      mp.events.callRemote("server:lspd:officeComputer",item.Text);
      officeComputer.Close();
    } else if (item.Text == "Handy Ortung") {
      mp.events.call("createInputText", "lspdHandy");
      officeComputer.Close(); 
    } else if (item.Text == "Fahrzeug Ortung") {
      mp.events.call("createInputText", "lspdFahrzeug");
      officeComputer.Close();      
    } else if (item.Text == "Leitstelle") {
      mp.events.callRemote("server:phone:getLeitstelle",911);
      officeComputer.Close();      
    }
    
  });
  officeComputer.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
  
});
function activeLSPDMemberList(playerJSON,id){  
  activeMemberMenu = new Menu("Aktive Mitarbeiter", "Liste aller Mitarbeiter im Dienst", MenuPoint);
  activeMemberMenu.Visible = true;
  if (playerJSON != "none") {
    playerJSON = JSON.parse(playerJSON);
    playerJSON.forEach(players => {
        let newItem = new UIMenuItem("" + players.firstname+" "+players.lastname, ""+players.onlineid);
        activeMemberMenu.AddItem(newItem);
        newItem.SetRightLabel("Rang: "+players.factionrang);
    });
  } else {
    activeMemberMenu.AddItem( new UIMenuItem("Keine Mitarbeiter sind im Dienst!", ""));
  }

  activeMemberMenu.ItemSelect.on((item, index) => {
    activeMemberMenu.Close();
    
    
  });
}
mp.events.add("client:lspd:activeMemberList", activeLSPDMemberList);


mp.events.add("client:lspd:createChiefMenu",() => {
  let main = new Menu("Chief PC", "Chief Computer", MenuPoint);
    main.AddItem(new UIMenuItem("Mitarbeiter",""));   
    main.AddItem( new UIMenuItem("Schließen", ""));
    main.Visible = true;

    main.ItemSelect.on((item, index, value) => {
    if (item.Text == "Mitarbeiter") {
      mp.events.callRemote("server:lspd:mitarbeiter");
      main.Close();
    } else if (item.Text == "Schließen") {
      main.Close();
    }
  });
  main.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
});

function drawMenu(charJSON){
  mp.gui.cursor.visible = false;
  // Menu für Fahrzeugliste anlegen
  ui_List = new Menu("Charakter", "Liste aller Charakter", MenuPoint);
  ui_List.Visible = true;
  if (charJSON != "none"){
    charList = JSON.parse(charJSON);
    charList.forEach(char => {
        let newItem = new UIMenuItem(""+char.firstname+" "+char.lastname, ""+char.id);
        ui_List.AddItem(newItem);
        newItem.SetRightLabel("Rang: "+char.factionrang);
    });
  } else{
    ui_List.AddItem(new UIMenuItem("Du besitzt keine Charaktere!", ""));
  }


  ui_List.ItemSelect.on((item, index) => {      
      mp.events.call("client:lspd:memberSub",item.Description);
      ui_List.Close();
  });
}
mp.events.add("client:lspd:Memberlist", drawMenu);

mp.events.add("client:lspd:memberSub",(id) => {
  let memberSub = new Menu("Chief PC", "Chief Computer", MenuPoint);
  memberSub.AddItem(new UIMenuItem("Kündigen",""));   
  memberSub.AddItem( new UIMenuItem("Schließen", ""));
  memberSub.Visible = true;

    memberSub.ItemSelect.on((item, index, value) => {
    if (item.Text == "Kündigen") {
      mp.events.callRemote("server:lspd:mitarbeiter",id);
      memberSub.Close();
    } else if (item.Text == "Schließen") {
      memberSub.Close();
    }
  });
});


mp.events.add("client:lspd:createVeichleMenu",(rang) => {
  let vehicles = new Menu("Dienstfahrzeuge", "Die Dienstfahrzeuge", MenuPoint);
  vehicles.AddItem(new UIMenuItem("Stanier","2046537925‬"));  
  vehicles.AddItem(new UIMenuItem("Interceptor","1912215274‬"));   
  if (rang > 1) {
    vehicles.AddItem(new UIMenuItem("Police Buffalo","2667966721‬"));
    vehicles.AddItem(new UIMenuItem("Sheriff Granger","1922257928‬"));
    //vehicles.AddItem(new UIMenuItem("Baller","1878062887‬"));    
  }  
  if (rang > 3) {
    vehicles.AddItem(new UIMenuItem("FIB Buffalo","1127131465"));
    vehicles.AddItem(new UIMenuItem("Police Bus","2287941233‬"));
    //vehicles.AddItem(new UIMenuItem("FIB Stanier","2321795001‬"));
    vehicles.AddItem(new UIMenuItem("SWAT Granger","2647026068‬"));
  }
  if (rang > 9) {
    vehicles.AddItem(new UIMenuItem("Revolter","3884762073‬"));
  }
  if (rang > 5) {
    //vehicles.AddItem(new UIMenuItem("Schafter V12","2809443750‬"));
  }
  if (rang > 6) {
    vehicles.AddItem(new UIMenuItem("Riot","3089277354‬"));
  }
  vehicles.AddItem( new UIMenuItem("Schließen", ""));
  vehicles.Visible = true;

  vehicles.ItemSelect.on((item, index, value) => {
    if (item.Text !== "Schließen") {
      mp.events.callRemote("server:lspd:spawnVehicle",item.Description);
      vehicles.Close();
    } else if (item.Text == "Schließen") {
      vehicles.Close();
    }
  });
  vehicles.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
});

mp.events.add("client:lspd:vehicleblip", (posX, posY, posZ) => {
  var vehicle = "vehicle_";
  global[vehicle + "_"] = mp.blips.new(56, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
  {
      name: "Streifenwagen",
      scale: 1.00,
      color: 70,
      alpha: 255,
      drawDistance: 10,
      shortRange: false,
      rotation: 0.00,
      dimension: 0,
  });
});

// Dispatch blips
mp.events.add("client:lspd:showDispatch", (posX, posY, posZ, id) => {
  var dispatchTime = new Date().getTime();
  var policeDispatch = "policeDispatch_";
  mp.game.graphics.notify("Neuer Dispatch eingegangen.");

  global[policeDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime] = mp.blips.new(60, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
  {
      name: "Notruf Standort: "+id,
      scale: 1.00,
      color: 1,
      alpha: 255,
      drawDistance: 10,
      shortRange: false,
      rotation: 0.00,
      dimension: 0,
  });
  setTimeout(() => {
    global[policeDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime].destroy();
  }, 600000)
});

mp.events.add("client:lspd:showOrtung", (posX, posY, posZ) => {
  var dispatchTime = new Date().getTime();
  var ortungDispatch = "ortungDispatch_";
  mp.game.graphics.notify("Neue Ortung eingegangen.");

  global[ortungDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime] = mp.blips.new(398, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
  {
      name: "Ortung Standort: ",
      scale: 1.00,
      color: 38,
      alpha: 255,
      drawDistance: 10,
      shortRange: false,
      rotation: 0.00,
      dimension: 0,
  });
  setTimeout(() => {
    global[ortungDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime].destroy();
  }, 600000)
});

mp.events.add("client:lspd:weaponssee", (taser,pistol,fivepistol,schwerepistol,appistol,smg,pdw,karabiner,pump,taschenlampe,schlagstock,messer,bat,target,ak47,micro,abgesägte,revolver) => {
  const ui_weapon = new Menu("Waffen", "", MenuPoint);
  if (taser == 1) {
    ui_weapon.AddItem( new UIMenuItem("Taser", ""));
  }
  if (pistol == 1) {
    ui_weapon.AddItem( new UIMenuItem("Pistole", ""));
  }
  if (fivepistol == 1) {
    ui_weapon.AddItem( new UIMenuItem("50. Kaliber", ""));
  }
  if (schwerepistol == 1) {
    ui_weapon.AddItem( new UIMenuItem("Schwere Pistole", ""));
  }
  if (appistol == 1) {
    ui_weapon.AddItem( new UIMenuItem("AP Pistole", ""));
  }
  if (smg == 1) {
    ui_weapon.AddItem( new UIMenuItem("SMG", ""));
  }
  if (pdw == 1) {
    ui_weapon.AddItem( new UIMenuItem("PDW", ""));
  }
  if (karabiner == 1) {
    ui_weapon.AddItem( new UIMenuItem("Karabiner", ""));
  }
  if (pump == 1) {
    ui_weapon.AddItem( new UIMenuItem("Pump Schrotflinte", ""));
  }
  if (taschenlampe == 1) {
    ui_weapon.AddItem( new UIMenuItem("Taschenlampe", ""));
  }
  if (schlagstock == 1) {
    ui_weapon.AddItem( new UIMenuItem("Schlagstock", ""));
  }
  if (messer == 1) {
    ui_weapon.AddItem( new UIMenuItem("Messer", ""));
  }
  if (bat == 1) {
    ui_weapon.AddItem( new UIMenuItem("Baseballschläger", ""));
  }
  if (ak47 == 1) {
    ui_weapon.AddItem( new UIMenuItem("AK47", ""));
  }
  if (micro == 1) {
    ui_weapon.AddItem( new UIMenuItem("Micro Uzi", ""));
  }
  if (abgesägte == 1) {
    ui_weapon.AddItem( new UIMenuItem("Schrotflinte", ""));
  }
  if (revolver == 1) {
    ui_weapon.AddItem( new UIMenuItem("Revolver", ""));
  }
  ui_weapon.AddItem( new UIMenuItem("Schließen", ""));
  ui_weapon.Visible = true;

  ui_weapon.ItemSelect.on((item, index, value) => {
    let nearestPlayers = [];
    mp.players.forEachInRange(mp.players.local.position, 2, (nearPlayer) => {
        nearestPlayers.push(nearPlayer);
    });

    if (item.Text !== "Schließen") {
      mp.events.callRemote("server:lspd:weaponbesch", item.Text,target);
      ui_weapon.Close();
    } else {
      ui_weapon.Close();
    }
  });
});



