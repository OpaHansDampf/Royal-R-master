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
mp.events.add("client:taxi:openMainMenu", (factionrang) => {
  mainMenujustiz = new Menu("Downtown Cab. Co.","",MenuPoint);  
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
      mp.events.callRemote("server:taxi:mainMenu",nextMenu, item.Text);
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
mp.events.add("client:taxi:closeMainMenu", () => {
  mainMenujustiz.Close();
});

//MemberMenu
mp.events.add("client:taxi:openMemberMenu", () => {
  memberMenujustiz = new Menu("Downtown Cab. Co.","Mitarbeiterverwaltung",MenuPoint);
  memberMenujustiz.AddItem(new UIMenuItem("Einstellen","Person einstellen"));
  memberMenujustiz.AddItem( new UIMenuListItem("Befördern","Befördere dein gegenüber", LSPDRanks =new ItemsCollection(["1", "2"])));
  memberMenujustiz.AddItem(new UIMenuItem("Entlassen","Person entlassen"));
  memberMenujustiz.Open();
  memberMenujustiz.ItemSelect.on((item, index) => {  
     if (item.Text == "Einstellen") {
      mp.events.callRemote("server:taxi:einstellen");
      memberMenujustiz.Close();
     } else if (item.Text == "Entlassen") {
       mp.events.callRemote("server:taxi:entlassen");
       memberMenujustiz.Close();
     } else if (item.Text == "Befördern") {
      mp.events.callRemote("server:taxi:befördern",item.SelectedItem.DisplayText);
      memberMenujustiz.Close();
     }
  });
});
mp.events.add("client:taxi:closeMemberMenu", () => {
memberMenujustiz.Close();
});

mp.events.add("client:taxi:openMain",(factionrang) => {
  let main = new Menu("Downtown", "", MenuPoint);
    main.AddItem(new UIMenuItem("Fahrzeuge","Fahrzeuge ausparken!"));
    main.AddItem(new UIMenuItem("Leitstelle","Leitstelle übernehmen/abgeben Nummer: 666"));
    if (factionrang > 1) {
      main.AddItem(new UIMenuItem("Mitarbeiter","")); 
    }      
    main.AddItem( new UIMenuItem("Schließen", ""));
    main.Visible = true;

    main.ItemSelect.on((item, index, value) => {
    if (item.Text == "Mitarbeiter") {
      mp.events.callRemote("server:taxi:mitarbeiter");
      main.Close();
    } else if (item.Text == "Leitstelle") {
      mp.events.callRemote("server:phone:getLeitstelle",666);
      main.Close(); 
    } else if (item.Text == "Fahrzeuge") {
      mp.events.call("client:taxi:createVeichleMenu");
      main.Close(); 
    } else if (item.Text == "Schließen") {
      main.Close();
    }
  });
  main.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
});

mp.events.add("client:taxi:createVeichleMenu",() => {
  let vehicles = new Menu("Dienstfahrzeuge", "Die Dienstfahrzeuge", MenuPoint);
  vehicles.AddItem(new UIMenuItem("Taxi","3338918751‬")); 
  vehicles.AddItem(new UIMenuItem("Bus","3581397346‬"));
  vehicles.AddItem( new UIMenuItem("Schließen", ""));
  vehicles.Visible = true;

  vehicles.ItemSelect.on((item, index, value) => {
    if (item.Text !== "Schließen") {
      mp.events.callRemote("server:taxi:spawnVehicle",item.Description);
      vehicles.Close();
    } else if (item.Text == "Schließen") {
      vehicles.Close();
    }
  });
  vehicles.MenuClose.on(() => {
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
      mp.events.call("client:taxi:memberSub",item.Description);
      ui_List.Close();
  });
}
mp.events.add("client:taxi:Memberlist", drawMenu);

mp.events.add("client:taxi:memberSub",(id) => {
  let memberSub = new Menu("Chef PC", "Chef Computer", MenuPoint);
  memberSub.AddItem(new UIMenuItem("Kündigen",""));   
  memberSub.AddItem( new UIMenuItem("Schließen", ""));
  memberSub.Visible = true;

    memberSub.ItemSelect.on((item, index, value) => {
    if (item.Text == "Kündigen") {
      mp.events.callRemote("server:taxi:mitarbeiterentl",id);
      memberSub.Close();
    } else if (item.Text == "Schließen") {
      memberSub.Close();
    }
  });
});

mp.events.add("client:rechnung:requestTicket", (cop, amount, accountamount, staatskonto) => {
  const   ui_ticket = new Menu("Rechnung bezahlen", "Du sollst "+amount+"$ bezahlen", MenuPoint);
          ui_ticket.AddItem( new UIMenuItem("Bezahlen", "Bezahle die Rechnung"));
          ui_ticket.AddItem( new UIMenuItem("Ablehnen", "Die Rechnung nicht bezahlen"));
          ui_ticket.Visible = true;

  ui_ticket.ItemSelect.on((item, index, value) => {
      if (item.Text == 'Bezahlen') {
          mp.events.callRemote("server:rechnung:payTicket",cop,amount,accountamount, staatskonto);
          ui_ticket.Close();
      } else if (item.Text == 'Ablehnen') {
          mp.events.callRemote("server:rechnung:dontPayTicket",cop);
          ui_ticket.Close();
      }
  });
});