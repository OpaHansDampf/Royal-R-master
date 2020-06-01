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
mp.events.add("client:bennys:openMainMenu", (factionrang) => {
  mainMenujustiz = new Menu("Bennys","",MenuPoint);  
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
      mp.events.callRemote("server:bennys:mainMenu",nextMenu, item.Text);
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
mp.events.add("client:bennys:closeMainMenu", () => {
  mainMenujustiz.Close();
});

//MemberMenu
mp.events.add("client:bennys:openMemberMenu", () => {
  memberMenujustiz = new Menu("Bennys","Mitarbeiterverwaltung",MenuPoint);
  memberMenujustiz.AddItem(new UIMenuItem("Einstellen","Person einstellen"));
  memberMenujustiz.AddItem( new UIMenuListItem("Befördern","Befördere dein gegenüber", LSPDRanks =new ItemsCollection(["1", "2"])));
  memberMenujustiz.AddItem(new UIMenuItem("Entlassen","Person entlassen"));
  memberMenujustiz.Open();
  memberMenujustiz.ItemSelect.on((item, index) => {  
     if (item.Text == "Einstellen") {
      mp.events.callRemote("server:bennys:einstellen");
      memberMenujustiz.Close();
     } else if (item.Text == "Entlassen") {
       mp.events.callRemote("server:bennys:entlassen");
       memberMenujustiz.Close();
     } else if (item.Text == "Befördern") {
      mp.events.callRemote("server:bennys:befördern",item.SelectedItem.DisplayText);
      memberMenujustiz.Close();
     }
  });
});
mp.events.add("client:bennys:closeMemberMenu", () => {
memberMenujustiz.Close();
});

mp.events.add("client:bennys:createChiefMenu",() => {
  let main = new Menu("Chef PC", "Chef Computer", MenuPoint);
    main.AddItem(new UIMenuItem("Mitarbeiter",""));   
    main.AddItem( new UIMenuItem("Schließen", ""));
    main.Visible = true;

    main.ItemSelect.on((item, index, value) => {
    if (item.Text == "Mitarbeiter") {
      mp.events.callRemote("server:bennys:mitarbeiter");
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
      mp.events.call("client:bennys:memberSub",item.Description);
      ui_List.Close();
  });
}
mp.events.add("client:bennys:Memberlist", drawMenu);

mp.events.add("client:bennys:memberSub",(id) => {
  let memberSub = new Menu("Chef PC", "Chef Computer", MenuPoint);
  memberSub.AddItem(new UIMenuItem("Kündigen",""));   
  memberSub.AddItem( new UIMenuItem("Schließen", ""));
  memberSub.Visible = true;

    memberSub.ItemSelect.on((item, index, value) => {
    if (item.Text == "Kündigen") {
      mp.events.callRemote("server:bennys:mitarbeiterentl",id);
      memberSub.Close();
    } else if (item.Text == "Schließen") {
      memberSub.Close();
    }
  });
});

