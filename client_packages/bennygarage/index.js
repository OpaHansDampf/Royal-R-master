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
        mp.events.callRemote("server:bennygarage:parkout", item.Description);
        ui_List.Close();
    });
  }
  mp.events.add("client:bennygarage:openMenu", drawVehicles);

  mp.events.add("client:bennygarage:openMainMenu",() => {
    const ui_sub = new Menu("bennygarage", "Park in or Out", MenuPoint);
    ui_sub.AddItem( new UIMenuItem("Fahrzeug ausparken", ""));
    ui_sub.AddItem( new UIMenuItem("Fahrzeug einparken", ""));

    ui_sub.ItemSelect.on((item, index, value) => {
        if (item.Text == "Fahrzeug ausparken") {
          mp.events.callRemote("server:bennygarage:openMenu");   
          ui_sub.Close();          
        } else if (item.Text == "Fahrzeug einparken") {
            mp.events.callRemote("server:bennygarage:parkin");  
            ui_sub.Close(); 
        } else {            
            ui_sub.Close();
        }      
    });
    ui_sub.MenuClose.on(() => {
      mp.events.callRemote("server:playermenu:variable");
    });
});

mp.game.ped.createPed(1, 0xFBF98469, -192, -1287, 31, 200);


mp.markers.new(30, new mp.Vector3(-190, -1290, 31, 80,), 1, 
	{ 
		direction: new mp.Vector3(-190, -1290, 31, 80,), 
		rotation: 0, 
		color: [ 0, 0, 160, 255],
		visible: true,
		dimension: 0
	});