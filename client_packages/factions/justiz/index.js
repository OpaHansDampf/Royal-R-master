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
let clothesjustiz = null;
let mainMenujustiz = null;
let memberMenujustiz = null;

// Main Menu
mp.events.add("client:justiz:openMainMenu", (factionrang) => {
  mainMenujustiz = new Menu("Justiz","",MenuPoint);
  mainMenujustiz.AddItem(new UIMenuItem("Dienstausweis zeigen","Du zeigst deinen Dienstausweis"));
  mainMenujustiz.AddItem(new UIMenuItem("Leitstelle","Übernehmen der Leitstelle 914"));
  if(factionrang > 9){
    mainMenujustiz.AddItem(new UIMenuItem("Mitarbeiterverwaltung",""));
  }
  if(mainMenujustiz.Visible == false && memberMenujustiz.Visible == false)
  {
  mainMenujustiz.Open();
  }
  mainMenujustiz.ItemSelect.on((item, index) => {
    const nextMenu = index;    
    mp.events.callRemote("server:justiz:mainMenu",nextMenu, item.Text);
    mainMenujustiz.Close();
  });
  mainMenujustiz.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
});
mp.events.add("client:justiz:closeMainMenu", () => {
  mainMenujustiz.Close();
});

//MemberMenu
mp.events.add("client:justiz:openMemberMenu", () => {
  memberMenujustiz = new Menu("Justiz","Mitarbeiterverwaltung",MenuPoint);
  memberMenujustiz.AddItem(new UIMenuItem("Einstellen","Person einstellen"));
  memberMenujustiz.AddItem( new UIMenuListItem("Befördern","Befördere dein gegenüber", LSPDRanks =new ItemsCollection(["1", "2", "3","4","5","6","7","8","9","10","11"])));
  memberMenujustiz.AddItem(new UIMenuItem("Dienstnummer zuweisen","Du weist die Dienstnummer zu"));
  memberMenujustiz.AddItem(new UIMenuItem("Entlassen","Person entlassen"));
  memberMenujustiz.Open();
  memberMenujustiz.ItemSelect.on((item, index) => {  
     if (item.Text == "Einstellen") {
      mp.events.callRemote("server:justiz:einstellen");
      memberMenujustiz.Close();
     } else if (item.Text == "Entlassen") {
       mp.events.callRemote("server:justiz:entlassen");
       memberMenujustiz.Close();
     } else if (item.Text == "Dienstnummer zuweisen") {
      mp.events.call("createInputShop", "dienstnummerjustiz");
      memberMenujustiz.Close();
     } else if (item.Text == "Befördern") {
      mp.events.callRemote("server:justiz:befördern",item.SelectedItem.DisplayText);
      memberMenujustiz.Close();
     }
  });
});
mp.events.add("client:justiz:closeMemberMenu", () => {
memberMenujustiz.Close();
});

let dismissjustiz = null;
mp.events.add("client:justiz:askedForDismiss", () => {
  dismissjustiz = new Menu("Justiz","Willst du den Mitarbeiter wirklich entlassen?",MenuPoint);
  dismissjustiz.AddItem(new UIMenuItem("Ja","Der Mitarbeiter wird entlassen."));
  dismissjustiz.AddItem(new UIMenuItem("Nein","Aktion abbrechen"));
  dismissjustiz.Open();

  dismissjustiz.ItemSelect.on((item, index) => {      
    mp.events.callRemote("server:justiz:dismissMember",item.Text);
  });
});
mp.events.add("client:justiz:closeDismissMenu", () => {
  dismissjustiz.Close();
});

let officeComputer = null;
let activeMemberMenu = null;
mp.events.add("client:justiz:createOfficeComputer", (factionrang) => {
  if(activeMemberMenu == null && officeComputer == null) {
  officeComputer = new Menu("Justiz","Computer",MenuPoint);
  officeComputer.AddItem(new UIMenuItem("Aktive Mitarbeiter","Du siehst alle Justizbeamten die im Dienst sind!"));
  officeComputer.Visible = false;
  

  officeComputer.ItemSelect.on((item, index) => {
    mp.events.callRemote("server:justiz:officeComputer",item.Text);
  });
}
});
mp.events.add("client:justiz:openofficeComputer", () => {
  if(activeMemberMenu == null && officeComputer.Visible == false)
  officeComputer.Open();
});
function activejustizMemberList(playerJSON,id){
  officeComputer.Close();
  officeComputer = null;
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
  activeMemberMenu.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
  activeMemberMenu.MenuClose.on(() => {
    activeMemberMenu = null;
    mp.events.call("client:justiz:createOfficeComputer");
    mp.events.call("client:justiz:openofficeComputer");
  });
}
mp.events.add("client:justiz:activeMemberList", activejustizMemberList);

mp.events.add("client:justiz:createChiefMenu",() => {
  let main = new Menu("Chief PC", "Chief Computer", MenuPoint);
    main.AddItem(new UIMenuItem("Mitarbeiter",""));   
    main.AddItem( new UIMenuItem("Schließen", ""));
    main.Visible = true;

    main.ItemSelect.on((item, index, value) => {
    if (item.Text == "Mitarbeiter") {
      mp.events.callRemote("server:justiz:mitarbeiter");
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
      mp.events.call("client:justiz:memberSub",item.Description);
      ui_List.Close();
  });
}
mp.events.add("client:justiz:Memberlist", drawMenu);

mp.events.add("client:justiz:memberSub",(id) => {
  let memberSub = new Menu("Chief PC", "Chief Computer", MenuPoint);
  memberSub.AddItem(new UIMenuItem("Kündigen",""));   
  memberSub.AddItem( new UIMenuItem("Schließen", ""));
  memberSub.Visible = true;

    memberSub.ItemSelect.on((item, index, value) => {
    if (item.Text == "Kündigen") {
      mp.events.callRemote("server:justiz:mitarbeiterentl",id);
      memberSub.Close();
    } else if (item.Text == "Schließen") {
      memberSub.Close();
    }
  });
});




