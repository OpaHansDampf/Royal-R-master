// Native UI
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




// Einladen
mp.events.add("client:kofferaum:einlagern", (inventory, weight, vehWeight) => {
  res = JSON.parse(inventory);
  const ui_einlagern = new Menu("Einlagern", "("+weight+"/"+vehWeight+")kg", MenuPoint);
    var invParsed = JSON.parse(inventory);
    for(var res in invParsed) {
      var newRes = invParsed[""+res];
      ui_einlagern.AddItem( new UIMenuItem(""+newRes.itemName+" ("+newRes.amount+"x)", ""+newRes.id));
    }
          ui_einlagern.AddItem( new UIMenuItem("Schließen", "Kofferaum schließen"));
          ui_einlagern.Visible = true;
          ui_einlagern.ItemSelect.on((item, index, value) => {
      if (item.Text !== "Schließen") {
        mp.events.call("createInputShop", "loadTrunkItem");
        mp.events.callRemote("server:kofferraum:loadItem", item.Description);
        ui_einlagern.Close();
      } else {
        ui_einlagern.Close();
      }
    });
    ui_einlagern.MenuClose.on(() => {
      ui_einlagern.RefreshIndex();
    });
});

// Main Menu
mp.events.add("client:kofferaum:openMenu", (vehicle) => {
  const ui_kofferaum = new Menu("Kofferraum", "", MenuPoint);
    ui_kofferaum.AddItem( new UIMenuItem("Gegenstand einladen", ""));
    ui_kofferaum.AddItem( new UIMenuItem("Gegenstand ausladen", ""));
    ui_kofferaum.AddItem( new UIMenuItem("Schließen", ""));
    ui_kofferaum.Visible = true;

    ui_kofferaum.ItemSelect.on((item, index, value) => {
      if (item.Text == "Gegenstand einladen") {
        mp.events.callRemote("server:kofferraum:einladen", vehicle);
        ui_kofferaum.Close();
      } else if (item.Text == "Gegenstand ausladen") {
        mp.events.callRemote("server:kofferaum:ausladen");
        ui_kofferaum.Close();
      } else if (item.Text == "Schließen") {
        ui_kofferaum.Close();
      }
    });
});

// Ausladen
mp.events.add("client:kofferaum:ausladen", (vehinventory, weight, vehWeight) => {
  const ui_ausladen = new Menu("Ausladen", "("+weight+"/"+vehWeight+")kg", MenuPoint);
  var vehinvParsed = JSON.parse(vehinventory);
  for(var res in vehinvParsed) {
    var newRes = vehinvParsed[""+res];
    ui_ausladen.AddItem( new UIMenuItem(""+newRes.itemName+" ("+newRes.amount+"x)", ""+newRes.id));
  }
    ui_ausladen.AddItem( new UIMenuItem("Schließen", "Kofferaum schließen"));
    ui_ausladen.Visible = true;
    ui_ausladen.ItemSelect.on((item, index, value) => {
    if (item.Text !== "Schließen") {
      mp.events.call("createInputShop", "unloadTrunkItem");
      mp.events.callRemote("server:kofferraum:unloadItem", item.Description);
      ui_ausladen.Close();
    } else {
      ui_ausladen.Close();
    }
  });
  ui_ausladen.MenuClose.on(() => {
    ui_ausladen.RefreshIndex();
  });
});


