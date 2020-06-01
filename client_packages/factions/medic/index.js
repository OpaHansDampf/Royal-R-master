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
let clotheslsmc = null;
let mainMenulsmc = null;
let memberMenulsmc = null;

// Main Menu
mp.events.add("client:lsmc:openMainMenu", (factionrang) => {
  mainMenulsmc = new Menu("Medic","",MenuPoint);
  mainMenulsmc.AddItem(new UIMenuItem("Dienstausweis zeigen","Du zeigst deinen Dienstausweis"));
  mainMenulsmc.AddItem(new UIMenuItem("Heilen","Du heilst die Person"));
  mainMenulsmc.AddItem(new UIMenuItem("Wiederbeleben","Du belebst die Person wieder"));
  //mainMenulsmc.AddItem(new UIMenuItem("Handschuhe anziehen",""));
  //mainMenulsmc.AddItem(new UIMenuItem("Handschuhe ausziehen",""));
  if(factionrang > 9){
    mainMenulsmc.AddItem(new UIMenuItem("Mitarbeiterverwaltung",""));
  }
  if(mainMenulsmc.Visible == false && memberMenulsmc.Visible == false)
  {
  mainMenulsmc.Open();
  }
  mainMenulsmc.ItemSelect.on((item, index) => {
    const nextMenu = index;    
    mp.events.callRemote("server:lsmc:mainMenu",nextMenu, item.Text);
    mainMenulsmc.Close();
  });
  mainMenulsmc.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
});
mp.events.add("client:lsmc:closeMainMenu", () => {
  mainMenulsmc.Close();
});

mp.events.add("client:lsmc:createHeliMenu",(rang) => {
  let heli = new Menu("Helikopter", "Die Dienst Helikopter", MenuPoint);
  heli.AddItem(new UIMenuItem("Maverick","2634305738‬"));
  heli.AddItem( new UIMenuItem("Schließen", ""));
  heli.Visible = true;

  heli.ItemSelect.on((item, index, value) => {
    if (item.Text !== "Schließen") {
      mp.events.callRemote("server:lsmc:spawnHeli",item.Description);
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
mp.events.add("client:lsmc:openMemberMenu", () => {
  memberMenulsmc = new Menu("Medic","Mitarbeiterverwaltung",MenuPoint);
  memberMenulsmc.AddItem(new UIMenuItem("Einstellen","Person einstellen"));
  memberMenulsmc.AddItem( new UIMenuListItem("Befördern","Befördere dein gegenüber", LSPDRanks =new ItemsCollection(["1", "2", "3","4","5","6","7","8","9","10","11"])));
  memberMenulsmc.AddItem(new UIMenuItem("Dienstnummer zuweisen","Du weist die Dienstnummer zu"));
  memberMenulsmc.AddItem(new UIMenuItem("Entlassen","Person entlassen"));
  memberMenulsmc.Open();
  memberMenulsmc.ItemSelect.on((item, index) => {  
     if (item.Text == "Einstellen") {
      mp.events.callRemote("server:lsmc:einstellen");
      memberMenulsmc.Close();
     } else if (item.Text == "Entlassen") {
       mp.events.callRemote("server:lsmc:entlassen");
       memberMenulsmc.Close();
     } else if (item.Text == "Dienstnummer zuweisen") {
      mp.events.call("createInputShop", "dienstnummerlsmc");
      memberMenulsmc.Close();
     } else if (item.Text == "Befördern") {
      mp.events.callRemote("server:lsmc:befördern",item.SelectedItem.DisplayText);
      memberMenulsmc.Close();
     }
  });
});
mp.events.add("client:lsmc:closeMemberMenu", () => {
memberMenulsmc.Close();
});

//MemberMenü Ende
//Cothes Menu
clotheslsmc = new Menu("lsmc", "Umkleide", MenuPoint);
clotheslsmc.AddItem(new UIMenuItem("OP-Uniform","Die OP Uniform"));
clotheslsmc.AddItem(new UIMenuItem("Rettungs-Uniform","Die Paradauniform"));
clotheslsmc.AddItem(new UIMenuItem("Zivil","Deine Zivilkleidung"));
clotheslsmc.Visible = false;

mp.events.add("client:lsmc:clothes", () => {
  clotheslsmc.Visible = true;
});
clotheslsmc.MenuClose.on(() => {
  mp.events.callRemote("server:playermenu:variable");
});

clotheslsmc.ItemSelect.on((item, index) => {      
    mp.events.callRemote("server:lsmc:clothes",item.Text);
});
//Cothes Menu


//Waffenkammer
let weaponlsmc = null;
weaponlsmc = new Menu("Medizinschrank","Medizinschrank",MenuPoint);
weaponlsmc.AddItem(new UIMenuItem("Taschenlampe",""));
weaponlsmc.AddItem(new UIMenuItem("Fallschirm",""));
weaponlsmc.AddItem(new UIMenuItem("Tabletten",""));
weaponlsmc.Visible = false;

mp.events.add("client:lsmc:openWeapon", () => {
  weaponlsmc.Visible = true;
});
mp.events.add("client:lsmc:closeWeapon", () => {
  weaponlsmc.Visible = false;
});
weaponlsmc.MenuClose.on(() => {
  mp.events.callRemote("server:playermenu:variable");
});

weaponlsmc.ItemSelect.on((item, index) => {      
    mp.events.callRemote("server:lsmc:weapons",item.Text);
});

let dismisslsmc = null;
mp.events.add("client:lsmc:askedForDismiss", () => {
  dismisslsmc = new Menu("LSMC","Willst du den Mitarbeiter wirklich entlassen?",MenuPoint);
  dismisslsmc.AddItem(new UIMenuItem("Ja","Der Mitarbeiter wird entlassen."));
  dismisslsmc.AddItem(new UIMenuItem("Nein","Aktion abbrechen"));
  dismisslsmc.Open();

  dismisslsmc.ItemSelect.on((item, index) => {      
    mp.events.callRemote("server:lsmc:dismissMember",item.Text);
  });
});
mp.events.add("client:lsmc:closeDismissMenu", () => {
  dismisslsmc.Close();
});


mp.events.add("client:lsmc:createOfficeComputer", (factionrang) => {
  const officeComputer = new Menu("LSMC","Computer",MenuPoint);
 officeComputer.AddItem(new UIMenuItem("Leitstelle","Leitstelle übernehmen/abgeben"));
 officeComputer.AddItem(new UIMenuItem("Aktive Mitarbeiter","Du siehst alle Medics die im Dienst sind!")); 
 officeComputer.Visible = true; 

 officeComputer.ItemSelect.on((item, index) => {
   if (item.Text == "Aktive Mitarbeiter") {
     mp.events.callRemote("server:lsmc:officeComputer",item.Text);
     officeComputer.Close();     
   } else if (item.Text == "Leitstelle") {
     mp.events.callRemote("server:phone:getLeitstelle",912);
     officeComputer.Close();      
   }   
 });
 officeComputer.MenuClose.on(() => {
  mp.events.callRemote("server:playermenu:variable");
});
 
});
mp.events.add("client:lsmc:openofficeComputer", () => {
  if(activeMemberMenu == null && officeComputer.Visible == false)
  officeComputer.Open();
});
function activelsmcMemberList(playerJSON,id){
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
mp.events.add("client:lsmc:activeMemberList", activelsmcMemberList);

mp.events.add("client:lsmc:createChiefMenu",() => {
  let main = new Menu("Chief PC", "Chief Computer", MenuPoint);
    main.AddItem(new UIMenuItem("Mitarbeiter",""));   
    main.AddItem( new UIMenuItem("Schließen", ""));
    main.Visible = true;

    main.ItemSelect.on((item, index, value) => {
    if (item.Text == "Mitarbeiter") {
      mp.events.callRemote("server:lsmc:mitarbeiter");
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
  ui_List = new Menu("Mitarbeiter", "Liste aller Mitarbeiter", MenuPoint);
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
      mp.events.call("client:lsmc:memberSub",item.Description);
      ui_List.Close();
  });
}
mp.events.add("client:lsmc:Memberlist", drawMenu);

mp.events.add("client:lsmc:memberSub",(id) => {
  let memberSub = new Menu("Chief PC", "Chief Computer", MenuPoint);
  memberSub.AddItem(new UIMenuItem("Kündigen",""));   
  memberSub.AddItem( new UIMenuItem("Schließen", ""));
  memberSub.Visible = true;

    memberSub.ItemSelect.on((item, index, value) => {
    if (item.Text == "Kündigen") {
      mp.events.callRemote("server:lsmc:mitarbeiter",id);
      memberSub.Close();
    } else if (item.Text == "Schließen") {
      memberSub.Close();
    }
  });
});


mp.events.add("client:lsmc:createVeichleMenu",(rang) => {
  let vehicles = new Menu("Dienstfahrzeuge", "Die Dienstfahrzeuge", MenuPoint);
  vehicles.AddItem(new UIMenuItem("Ambulance","")); 
  vehicles.AddItem(new UIMenuItem("NEF",""));
  vehicles.AddItem( new UIMenuItem("Schließen", ""));
  vehicles.Visible = true;

  vehicles.ItemSelect.on((item, index, value) => {
    if (item.Text !== "Schließen") {
      mp.events.callRemote("server:lsmc:spawnVehicle",item.Text);
      vehicles.Close();
    } else if (item.Text == "Schließen") {
      vehicles.Close();
    }
  });
  vehicles.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
});

// Dispatch blips
mp.events.add("client:medic:showDispatch", (posX, posY, posZ, id) => {
  var dispatchTime = new Date().getTime();
  var medicDispatch = "medicDispatch_";
  mp.game.graphics.notify("Neuer Dispatch eingegangen.");

  global[medicDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime] = mp.blips.new(60, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
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
    global[medicDispatch + mp.players.local.getVariable("ingameName") + "_" + dispatchTime].destroy();
  }, 600000)
});




