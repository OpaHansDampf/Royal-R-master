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
var inputShop = null;
var inputText = null;


const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(50,50);


mp.events.add("smokeJointEffect", () =>{

  mp.game.graphics.startScreenEffect("DrugsTrevorClownsFightIn", 60000, false);
  
  setTimeout(_ => {
      mp.game.graphics.stopScreenEffect("DrugsTrevorClownsFightIn");
      mp.game.graphics.startScreenEffect("DrugsTrevorClownsFightOut", 10000, false);
  }, 120000);

});

// INVENTORY
mp.events.add("client:inventory:showInventory", (inventory, weight,geld) => {
    const ui_inventory = new Menu("Inventar", "Inventar ("+weight+")kg", MenuPoint);
    ui_inventory.AddItem( new UIMenuItem("Bargeld: "+geld+"$", ""));
    ui_inventory.AddItem( new UIMenuItem("Waffen", "Ausgerüstete Waffen"));
    var invParsed = JSON.parse(inventory);
    for(var res in invParsed) {
      var newRes = invParsed[""+res];
      ui_inventory.AddItem( new UIMenuItem(""+newRes.itemName+" ("+newRes.amount+"x)", ""+newRes.id));
    }
          ui_inventory.AddItem( new UIMenuItem("Schließen", "Inventar schließen"));
          ui_inventory.Visible = true;
    ui_inventory.ItemSelect.on((item, index, value) => {
      if (item.Text !== "Schließen" && item.Text !== "Waffen") {
        mp.events.callRemote("server:inventory:openItemSubmenu",item.Description);
        ui_inventory.Close();
      } else if (item.Text == "Schließen") {
          ui_inventory.Close();
      } else if (item.Text == "Waffen") {
        mp.events.callRemote("server:weapons:weapons");
        ui_inventory.Close();
      }
      
    });
    ui_inventory.MenuClose.on(() => {
      ui_inventory.RefreshIndex();
    });
});


// SUBMENU
mp.events.add("client:inventory:openItemSubmenu", (inventory) => {
    res = JSON.parse(inventory);
    const ui_inventorysubmenu = new Menu("Inventar", res.amount+"x "+res.itemName, MenuPoint);
    if (res.usable == "Y") {
      ui_inventorysubmenu.AddItem( new UIMenuItem("Benutzen", ""));
    }
    ui_inventorysubmenu.AddItem( new UIMenuItem("Weitergeben", ""));
    ui_inventorysubmenu.AddItem( new UIMenuItem("Wegwerfen", ""));
    ui_inventorysubmenu.AddItem( new UIMenuItem("Schließen", ""));
    ui_inventorysubmenu.Visible = true;

    ui_inventorysubmenu.ItemSelect.on((item, index, value) => {
      let nearestPlayers = [];
      mp.players.forEachInRange(mp.players.local.position, 2, (nearPlayer) => {
          nearestPlayers.push(nearPlayer);
      });

      if (item.Text == "Benutzen") {
        mp.events.callRemote("server:inventory:useItem", res.id);
        ui_inventorysubmenu.Close();
      } else if (item.Text == "Weitergeben") {
        if(!nearestPlayers[1]){
          mp.game.graphics.notify("Keiner in der nähe");
          return;
        } else {
          mp.events.callRemote("server:inventory:setGiveItem", res.id);
          mp.events.call("createInputShop", "GiveItem");
        }
        //mp.events.callRemote("server:inventory:giveItem", res.id);
        ui_inventorysubmenu.Close();
      } else if (item.Text == "Wegwerfen") {
        mp.events.callRemote("server:inventory:setDestroyItem", res.id);
        mp.events.call("createInputShop", "DestroyItem");
        ui_inventorysubmenu.Close();
      } else if (item.Text == "Schließen") {
        ui_inventorysubmenu.Close();
      }
    });
});

mp.events.add("client:inventory:weapons", (taser,pistol,fivepistol,schwerepistol,appistol,smg,pdw,karabiner,pump,taschenlampe,schlagstock,messer,bat,ak47,micro,abgesägte,revolver) => {
    const ui_weapon = new Menu("Waffen", "", MenuPoint);
    if (taser == 1) {
      ui_weapon.AddItem( new UIMenuItem("Taser", ""));
    }
    if (pistol == 1) {
      ui_weapon.AddItem( new UIMenuItem("Pistole", ""));
    }
    if (fivepistol == 1) {
      ui_weapon.AddItem( new UIMenuItem("50. Kaliber", ""));
    }
    if (schwerepistol == 1) {
      ui_weapon.AddItem( new UIMenuItem("Schwere Pistole", ""));
    }
    if (appistol == 1) {
      ui_weapon.AddItem( new UIMenuItem("AP Pistole", ""));
    }
    if (smg == 1) {
      ui_weapon.AddItem( new UIMenuItem("SMG", ""));
    }
    if (pdw == 1) {
      ui_weapon.AddItem( new UIMenuItem("PDW", ""));
    }
    if (karabiner == 1) {
      ui_weapon.AddItem( new UIMenuItem("Karabiner", ""));
    }
    if (pump == 1) {
      ui_weapon.AddItem( new UIMenuItem("Pump Schrotflinte", ""));
    }
    if (taschenlampe == 1) {
      ui_weapon.AddItem( new UIMenuItem("Taschenlampe", ""));
    }
    if (schlagstock == 1) {
      ui_weapon.AddItem( new UIMenuItem("Schlagstock", ""));
    }
    if (messer == 1) {
      ui_weapon.AddItem( new UIMenuItem("Messer", ""));
    }
    if (bat == 1) {
      ui_weapon.AddItem( new UIMenuItem("Baseballschläger", ""));
    }
    if (ak47 == 1) {
      ui_weapon.AddItem( new UIMenuItem("AK47", ""));
    }
    if (micro == 1) {
      ui_weapon.AddItem( new UIMenuItem("Micro Uzi", ""));
    }
    if (abgesägte == 1) {
      ui_weapon.AddItem( new UIMenuItem("Schrotflinte", ""));
    }
    if (revolver == 1) {
      ui_weapon.AddItem( new UIMenuItem("Revolver", ""));
    }
    ui_weapon.AddItem( new UIMenuItem("Schließen", ""));
    ui_weapon.Visible = true;

    ui_weapon.ItemSelect.on((item, index, value) => {
      let nearestPlayers = [];
      mp.players.forEachInRange(mp.players.local.position, 2, (nearPlayer) => {
          nearestPlayers.push(nearPlayer);
      });

      if (item.Text !== "Schließen") {
        mp.events.callRemote("server:inventory:weaponsub", item.Text);
        ui_weapon.Close();
      } 
    });
});

mp.events.add("createInputShop",(trigger) => {
    if (browser != null || inputShop != null) return;
    inputShop = mp.browsers.new("package://inputShop/input.html");
    inputShop.execute('setTrigger("' + trigger + '")');
    mp.gui.cursor.show(true, true);
});

mp.events.add("sendInputShop",(trigger,output) => {
  if (inputShop !== null) {
    inputShop.destroy();
    inputShop = null;
  }
  mp.events.callRemote("inputValueShop", trigger, output);
  mp.gui.cursor.show(false, false);
});

mp.events.add("createInputText",(trigger) => {
  if (browser != null || inputText != null) return;
  inputText = mp.browsers.new("package://InputText/input.html");
  inputText.execute('setTrigger("' + trigger + '")');
  mp.gui.cursor.show(true, true);
});

mp.events.add("sendInputText",(trigger,output) => {
if (inputText !== null) {
  inputText.destroy();
  inputText = null;
}
mp.events.callRemote("inputValueText", trigger, output);
mp.gui.cursor.show(false, false);
});

mp.events.add("sendInputText",(trigger) => {
if (inputText !== null) {
  inputText.destroy();
  inputText = null;
}
mp.gui.cursor.show(false, false);
});


