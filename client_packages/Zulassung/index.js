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
const MenuPoint = new Point(50, 50);


mp.events.add("client:zulassung:mainMenu",() => {
    const ui_main = new Menu("Zulassungsstelle", "", MenuPoint);
    ui_main.AddItem( new UIMenuItem("Fahrzeug anmelden", ""));
    ui_main.AddItem( new UIMenuItem("Fahrzeug abmelden", ""));
    ui_main.AddItem( new UIMenuItem("Lizenzen kaufen",""));

    ui_main.ItemSelect.on((item, index, value) => {
        if (item.Text == "Fahrzeug anmelden") {
          mp.events.callRemote("server:zulassung:listanmelden",);   
          ui_main.Close();          
        } else if (item.Text == "Fahrzeug abmelden") {
            mp.events.callRemote("server:zulassung:listabmelden");  
            ui_main.Close();
          } else if (item.Text == "Lizenzen kaufen") {
            mp.events.callRemote("server:license:openShop");  
            ui_main.Close();  
        } else {            
            ui_main.Close();
        }     
    });
    ui_main.MenuClose.on(() => {
      mp.events.callRemote("server:playermenu:variable");
    });
});

function drawMenuA(vehJSON){
    ui_List = new Menu("Zulassungsstelle", "", MenuPoint);
    ui_List.Visible = true;
      vehList = JSON.parse(vehJSON);
      vehList.forEach(veh => {
          let newItem = new UIMenuItem("" + veh.model, ""+veh.id);
          ui_List.AddItem(newItem);
          newItem.SetRightLabel(""+veh.kennzeichen);
      });
  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.call("createInputText", "vehanmelden");
        mp.events.callRemote("server:zulassung:anmelden", item.Description);
        ui_List.Close();
    });
  }
  mp.events.add("client:zulassung:vehlistA", drawMenuA);

  function drawMenuB(vehJSON){
    ui_ListB = new Menu("Zulassungsstelle", "", MenuPoint);
    ui_ListB.Visible = true;
      vehList = JSON.parse(vehJSON);
      vehList.forEach(veh => {
          let newItem = new UIMenuItem("" + veh.model, ""+veh.id);
          ui_ListB.AddItem(newItem);
          newItem.SetRightLabel(""+veh.kennzeichen);
      });
  
    // Auswertung Menuauswahl ausparken
    ui_ListB.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:zulassung:abmelden", item.Description);
        ui_ListB.Close();
    });
  }
  mp.events.add("client:zulassung:vehlistB", drawMenuB);