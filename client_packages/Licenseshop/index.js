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

mp.events.add("client:licenseshop:mainMenu", (pkw, lkw, pilot, job) => {
  let main = new Menu("Licenseshop", "Spielermenü", MenuPoint);
    if (pkw == 0) {
      main.AddItem(new UIMenuItem("[1500$] PKW Führerschein kaufen",""));
    }
    if (lkw == 0) {
      main.AddItem(new UIMenuItem("[4500$] LKW Führschein kaufen",""));
    }
    if (pilot == 0) {
      main.AddItem(new UIMenuItem("[5000$] Piloten Lizenz kaufen",""));
    }
    if (job == 0) {
      main.AddItem(new UIMenuItem("Job Lizenz kaufen",""));
    }
    main.AddItem( new UIMenuItem("Schließen", ""));
    main.Visible = true;

    main.ItemSelect.on((item, index, value) => {
    if (item.Text !== "Schließen") {
      mp.events.callRemote("server:licenseshop:buyLicense",item.Text);
      main.Close();
    } else if (item.Text == "Schließen") {
      main.Close();
    }
  });
  main.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
});