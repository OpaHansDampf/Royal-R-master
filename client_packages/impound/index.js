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

const MenuPoint = new Point(50,50);

function drawVehicles(vehJSON){
    // Menu für Fahrzeugliste anlegen
    ui_List = new Menu("Impound", "Welches Fahrzeug soll ausgelöst werden", MenuPoint);
    ui_List.Visible = true;
    if (vehJSON != "none"){
        vehList = JSON.parse(vehJSON);
        vehList.forEach(veh => {
          let newItem = new UIMenuItem(""+veh.model+" "+veh.kennzeichen, ""+veh.id);
          ui_List.AddItem(newItem);
          newItem.SetRightLabel(""+veh.firstname+" "+veh.lastname);
      });
    } else{
      ui_List.AddItem( new UIMenuItem("Die Impound ist leer!", ""));
    }  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:impound:parkout", item.Description);
        ui_List.Close();
    });
    ui_List.MenuClose.on(() => {
      mp.events.callRemote("server:playermenu:variable");
    });
  }
  mp.events.add("client:impound:openMenu", drawVehicles);