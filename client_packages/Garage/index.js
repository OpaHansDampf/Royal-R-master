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


mp.events.add("client:garage:openmenu",(id) => {
    const ui_sub = new Menu("Garage", "Park in or Out", MenuPoint);
    ui_sub.AddItem( new UIMenuItem("Fahrzeug ausparken", ""+id));
    ui_sub.AddItem( new UIMenuItem("Fahrzeug einparken", ""+id));

    ui_sub.ItemSelect.on((item, index, value) => {
        if (item.Text == "Fahrzeug ausparken") {
          mp.events.callRemote("server:garage:parkoutmenu",item.Description);   
          ui_sub.Close();          
        } else if (item.Text == "Fahrzeug einparken") {
            mp.events.callRemote("server:garage:parkin",id);  
            ui_sub.Close(); 
        } else {            
            ui_sub.Close();
        }      
    });
    ui_sub.MenuClose.on(() => {
        mp.events.callRemote("server:playermenu:variable");
      });
});

function drawMenu(vehJSON,id){
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
        mp.events.callRemote("server:garage:parkout", item.Description,id);
        ui_List.Close();
    });
  }
  mp.events.add("client:garage:parkoutmenu", drawMenu);