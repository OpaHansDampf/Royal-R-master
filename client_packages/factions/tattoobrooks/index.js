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
mp.events.add("client:tb:openMainMenu", (factionrang) => {
  mainMenujustiz = new Menu("Tattoo Brooks","",MenuPoint);  
  mainMenujustiz.AddItem(new UIMenuItem("Rechnung austellen",""));
  if(factionrang > 1){
    mainMenujustiz.AddItem(new UIMenuItem("Mitarbeiterverwaltung",""));
  }
  mainMenujustiz.AddItem(new UIMenuItem("Schließen",""));
  if(mainMenujustiz.Visible == false && memberMenujustiz.Visible == false)
  {
  mainMenujustiz.Open();
  }
  mainMenujustiz.ItemSelect.on((item, index) => {
    if (item.Text !== "Rechnung austellen") {
      const nextMenu = index;    
      mp.events.callRemote("server:tb:mainMenu",nextMenu, item.Text);
      mainMenujustiz.Close();
    } else {
      mp.events.call("createInputShop", "Rechnung");
      mainMenujustiz.Close();
    }    
  });
  mainMenujustiz.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
});
mp.events.add("client:tb:closeMainMenu", () => {
  mainMenujustiz.Close();
});

mp.events.add("client:tb:createOfficeComputer", (factionrang) => {
  const officeComputer = new Menu("Tattoo Brooks","Computer",MenuPoint);
 officeComputer.AddItem(new UIMenuItem("Leitstelle","Leitstelle übernehmen/abgeben Nummer: 930"));
 if (factionrang > 1) {
  officeComputer.AddItem(new UIMenuItem("Mitarbeiter","Mitarbeiter von Tattoo Brooks"));
 } 
 officeComputer.Visible = true; 

 officeComputer.ItemSelect.on((item, index) => {
   if (item.Text == "Leitstelle") {
     mp.events.callRemote("server:phone:getLeitstelle",930);
     officeComputer.Close();      
   } else if (item.Text == "Mitarbeiter") {
     mp.events.callRemote("server:tb:mitarbeiter");
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


//MemberMenu
mp.events.add("client:tb:openMemberMenu", () => {
  memberMenujustiz = new Menu("Tattoo Brooks","Mitarbeiterverwaltung",MenuPoint);
  memberMenujustiz.AddItem(new UIMenuItem("Einstellen","Person einstellen"));
  memberMenujustiz.AddItem( new UIMenuListItem("Befördern","Befördere dein gegenüber", LSPDRanks =new ItemsCollection(["1", "2"])));
  memberMenujustiz.AddItem(new UIMenuItem("Entlassen","Person entlassen"));
  memberMenujustiz.Open();
  memberMenujustiz.ItemSelect.on((item, index) => {  
     if (item.Text == "Einstellen") {
      mp.events.callRemote("server:tb:einstellen");
      memberMenujustiz.Close();
     } else if (item.Text == "Entlassen") {
       mp.events.callRemote("server:tb:entlassen");
       memberMenujustiz.Close();
     } else if (item.Text == "Befördern") {
      mp.events.callRemote("server:tb:befördern",item.SelectedItem.DisplayText);
      memberMenujustiz.Close();
     }
  });
});
mp.events.add("client:tb:closeMemberMenu", () => {
memberMenujustiz.Close();
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
      mp.events.call("client:tb:memberSub",item.Description);
      ui_List.Close();
  });
}
mp.events.add("client:tb:Memberlist", drawMenu);

mp.events.add("client:tb:memberSub",(id) => {
  let memberSub = new Menu("Chef PC", "Chef Computer", MenuPoint);
  memberSub.AddItem(new UIMenuItem("Kündigen",""));   
  memberSub.AddItem( new UIMenuItem("Schließen", ""));
  memberSub.Visible = true;

    memberSub.ItemSelect.on((item, index, value) => {
    if (item.Text == "Kündigen") {
      mp.events.callRemote("server:tb:mitarbeiterentl",id);
      memberSub.Close();
    } else if (item.Text == "Schließen") {
      memberSub.Close();
    }
  });
});




