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

mp.events.add("client:tattoo:openMenu",() => {
    const ui_main = new Menu("Tattoo stechen", "Wähle das Körperteil", MenuPoint);
    ui_main.AddItem( new UIMenuItem("Kopf", ""));
    ui_main.AddItem( new UIMenuItem("Brust", ""));
    ui_main.AddItem( new UIMenuItem("Bauch", ""));
    ui_main.AddItem( new UIMenuItem("Ruecken", ""));
    ui_main.AddItem( new UIMenuItem("Linker Arm", ""));
    ui_main.AddItem( new UIMenuItem("Rechter Arm", ""));
    ui_main.AddItem( new UIMenuItem("Linkes Bein", ""));
    ui_main.AddItem( new UIMenuItem("Rechtes Bein", ""));
    ui_main.AddItem( new UIMenuItem("Schließen", "Menü schließen"));
    ui_main.Visible = true;

    ui_main.ItemSelect.on((item, index, value) => {
        if (item.Text !== 'Schließen') {
            mp.events.callRemote("server:tattoo:openSubMenu", item.Text);
            ui_main.Close();
        } else {
        ui_main.Close();
        }
    });
    ui_main.MenuClose.on(() => {
      mp.events.callRemote("server:playermenu:variable");
    });
});

mp.events.add("client:tattoo:openSubMenu",(json) => {
  var parsed = JSON.parse(json);
  const ui_sub = new Menu("Tattoo stechen", "Wähle das Tattoo", MenuPoint);
  parsed.forEach(function(tattoo) {
      let newItem = new UIMenuItem(""+tattoo.name, ""+tattoo.id);
      ui_sub.AddItem(newItem);
      newItem.SetRightLabel("" +tattoo.price);
  });
  ui_sub.AddItem( new UIMenuItem("Schließen", "Menü schließen"));
  ui_sub.Visible = true;

  ui_sub.ItemSelect.on((item, index, value) => {
      if (item.Text !== 'Schließen') {
          mp.events.callRemote("server:tattoo:setTattoo", item.Description);
          ui_sub.Close();
      } else {
          ui_sub.Close();
          mp.events.callRemote("server:tattoo:dontSaveTattoos");
      }
  });

  ui_sub.IndexChange.on(index => {
      mp.events.callRemote("server:tattoo:preview", index);
  });
});

mp.events.add("client:tattoo:checkMenu", () => {
  const ui_check = new Menu ("Tattoo stechen", "Bestätige dein Tattoo", MenuPoint);
  ui_check.AddItem( new UIMenuItem("Ich möchte dass Tattoo!", "Tattoo wird bestätigt"));
  ui_check.AddItem( new UIMenuItem("Ich will nicht!", "Tattoo wird nicht gestochen!"));
  ui_check.Visible = true;

  ui_check.ItemSelect.on((item, index, value) => {
    if (item.Text == "Ich möchte dass Tattoo!") {
      mp.events.callRemote("server:tattoo:save");
      ui_check.Close();
    } else {
      if (item.Text == "Ich will nicht!") {
        mp.events.callRemote("server:tattoo:dontSave");
        ui_check.Close();
      }
    }
  });
});
