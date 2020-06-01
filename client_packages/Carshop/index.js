
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




function drawMenu(shopJSON,name){
    ui_List = new Menu(""+name, "", MenuPoint);
    ui_List.Visible = true;
      itemList = JSON.parse(shopJSON);
      itemList.forEach(shop => {
          let newItem = new UIMenuItem("" + shop.model, ""+shop.id);
          ui_List.AddItem(newItem);
          newItem.SetRightLabel(""+shop.price+"$");
      });
  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:carshop:buy", item.Description, item.Text);
    });
    ui_List.MenuClose.on(() => {
      mp.events.callRemote("server:playermenu:variable");
    });
  }
  mp.events.add("client:carshop:drawMenu", drawMenu);