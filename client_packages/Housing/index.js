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

const MenuPoint = new Point(50, 50);


mp.events.add("client:housing:openMenu",(id,price) => {
    const ui_sub = new Menu("Housing", "", MenuPoint);
    ui_sub.AddItem( new UIMenuItem("Bewohner", ""+id));
    let newItem = new UIMenuItem("Preis", ""+id);
    ui_sub.AddItem(newItem);
    newItem.SetRightLabel(""+price);
    ui_sub.AddItem( new UIMenuItem("Haus kaufen", ""+id));

    ui_sub.ItemSelect.on((item, index, value) => {
        if (item.Text == "Haus kaufen") {
          mp.events.callRemote("server:housing:buyhouse",item.Description);   
          ui_sub.Close();   
        } else if (item.Text == "Bewohner") {
            mp.events.callRemote("server:housing:resident",item.Description);
            ui_sub.Close();
        } else {            
            ui_sub.Close();
        }      
    });
    ui_sub.MenuClose.on(() => {
        mp.events.callRemote("server:playermenu:variable");
      });
});

mp.events.add("client:housing:outfit",() => {
    const ui_sub1 = new Menu("Outfits", "", MenuPoint);
    ui_sub1.AddItem( new UIMenuItem("Outfit anziehen", ""));
    ui_sub1.AddItem( new UIMenuItem("Outfit Speichern", ""));
    ui_sub1.AddItem( new UIMenuItem("Outfit Löschen", ""));
    ui_sub1.AddItem( new UIMenuItem("Gekaufte Kleidung",""));

    ui_sub1.ItemSelect.on((item, index, value) => {
        if (item.Text == "Outfit anziehen") {
          mp.events.callRemote("server:housing:outfitload");   
          ui_sub1.Close();   
        } else if (item.Text == "Outfit Speichern") {
            mp.events.call("createInputText", "outfitsave");
            ui_sub1.Close();
        } else if (item.Text == "Outfit Löschen") {
            mp.events.callRemote("server:housing:deleteoutfits"); 
            ui_sub1.Close();   
        } else if (item.Text == "Gekaufte Kleidung") {
            mp.events.call("client:clothes:openMainMenu");
            ui_sub1.Close();     
        } else {            
            ui_sub1.Close();
        }      
    });
    ui_sub1.MenuClose.on(() => {
        mp.events.callRemote("server:playermenu:variable");
      });
});

function drawOutfits(outfitJSON){
    // Menu für Fahrzeugliste anlegen
    ui_List = new Menu("Outfits", "Welches Outfit willst du Anziehen?", MenuPoint);
    ui_List.Visible = true;
    if (outfitJSON != "none"){
        OutfitList = JSON.parse(outfitJSON);
        OutfitList.forEach(outfit => {
          let newItem = new UIMenuItem(""+outfit.name, ""+outfit.id);
          ui_List.AddItem(newItem);
          newItem.SetRightLabel("");
      });
    } else{
      ui_List.AddItem( new UIMenuItem("Du besitzt keine Outfits!", ""));
    }  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:housing:anziehen", item.Description);
        ui_List.Close();
    });
  }
  mp.events.add("client:housing:outfits", drawOutfits);
  
  function deleteOutfits(outfitJSON){
    // Menu für Fahrzeugliste anlegen
    ui_List = new Menu("Outfits", "Drücke Enter zum Löschen", MenuPoint);
    ui_List.Visible = true;
    if (outfitJSON != "none"){
        OutfitList = JSON.parse(outfitJSON);
        OutfitList.forEach(outfit => {
          let newItem = new UIMenuItem(""+outfit.name, ""+outfit.id);
          ui_List.AddItem(newItem);
          newItem.SetRightLabel("");
      });
    } else{
      ui_List.AddItem( new UIMenuItem("Du besitzt keine Outfits!", ""));
    }  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:housing:deleteoutfit", item.Description);
        ui_List.Close();
    });
  }
  mp.events.add("client:housing:deleteoutfits", deleteOutfits);




mp.events.add("client:housing:ownedHouse",(id,sellprice,id2,locked) => {
    const ui_owner = new Menu("Housing", "", MenuPoint);
    ui_owner.AddItem( new UIMenuItem("Bewohner", ""+id2));
    ui_owner.AddItem( new UIMenuItem("Haus betreten", ""+id));
    ui_owner.AddItem( new UIMenuItem("PIN ändern", ""+id));
    if (locked == 0) {
        ui_owner.AddItem( new UIMenuItem("Haus aufschließen", ""+id));
    }    
    if (locked == 1) {
        ui_owner.AddItem( new UIMenuItem("Haus zuschließen", ""+id));
    }
    let newItem = new UIMenuItem("Haus verkaufen", ""+id);
    ui_owner.AddItem(newItem);
    newItem.SetRightLabel(""+sellprice+"$");

    ui_owner.ItemSelect.on((item, index, value) => {
        if (item.Text == "Haus verkaufen") {
          mp.events.callRemote("server:housing:sellhouse",item.Description);   
          ui_owner.Close();   
        } else if (item.Text == "Haus betreten") {
            mp.events.callRemote("server:housing:enterHouse",item.Description);
        ui_owner.Close(); 
    } else if (item.Text == "PIN ändern") {    
        mp.events.callRemote("server:housing:id",item.Description);    
        mp.events.call("createInputHouse", "housingPin");
        ui_owner.Close(); 
        } else if (item.Text == "Bewohner") {
        mp.events.callRemote("server:housing:resident",item.Description);  
        ui_owner.Close(); 
        } else if (item.Text == "Haus aufschließen" || item.Text == "Haus zuschließen") {
        mp.events.callRemote("server:housing:lock",item.Description);  
        ui_owner.Close(); 
        } else {            
            ui_owner.Close();
        }      
    });
    ui_owner.MenuClose.on(() => {
        mp.events.callRemote("server:playermenu:variable");
      });
});

mp.events.add("client:housing:innen",(id) => {
    const ui_owner = new Menu("Housing", "", MenuPoint);
    ui_owner.AddItem( new UIMenuItem("Haus verlassen", ""+id));

    ui_owner.ItemSelect.on((item, index, value) => {
        if (item.Text == "Haus verlassen") {
          mp.events.callRemote("server:housing:leave",item.Description);   
          ui_owner.Close();   
        } else {            
            ui_owner.Close();
        }      
    });
});


function drawMenu(houseJSON){
    ui_List = new Menu("Bewohner", "", MenuPoint);
    ui_List.Visible = true;
      itemList = JSON.parse(houseJSON);
      itemList.forEach(house => {
          let newItem = new UIMenuItem("" + house.name, ""+house.id);
          ui_List.AddItem(newItem);
      });
  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:housing:subMenu", item.Description);
        ui_List.Close();
    });
  }
  mp.events.add("client:housing:resident", drawMenu);


  mp.events.add("client:housing:subMenu",(id,locked) => {
    const ui_subMenu = new Menu("Housing", "", MenuPoint);
    ui_subMenu.AddItem( new UIMenuItem("Haus betreten PIN", ""+id));
    if (locked == 1) {
        ui_subMenu.AddItem( new UIMenuItem("Haus betreten", ""+id));
    }    
    ui_subMenu.AddItem( new UIMenuItem("Close", ""));

    ui_subMenu.ItemSelect.on((item, index, value) => {   
        if (item.Text == "Haus betreten") {
            mp.events.callRemote("server:housing:enterHouse",item.Description);
            ui_subMenu.Close(); 
        } else if (item.Text == "Close") { 
        ui_subMenu.Close(); 
        } else if (item.Text == "Haus betreten PIN") { 
            mp.events.callRemote("server:housing:id",item.Description);    
            mp.events.call("createInputHouse", "housingEnterPin");
            ui_subMenu.Close(); 
        } else {            
            ui_owner.Close();
        }      
    });
  });

  function drawVehicleMenu(vehJSON){
    // Menu für Fahrzeugliste anlegen
    ui_List = new Menu("Vehicles", "Deine Fahrzeuge", MenuPoint);
    ui_List.Visible = true;
      vehList = JSON.parse(vehJSON);
      vehList.forEach(veh => {
          let newItem = new UIMenuItem("" + veh.model, ""+veh.id);
          ui_List.AddItem(newItem);
          newItem.SetRightLabel(""+veh.numberPlate);
      });
  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:housing:parkout", item.Description);
        ui_List.Close();
    });
    ui_List.MenuClose.on(() => {
        mp.events.callRemote("server:playermenu:variable");
    });
  }
  mp.events.add("client:housing:parkoutmenu", drawVehicleMenu);


