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




function drawMenu(shopJSON, id){
    ui_List = new Menu("Shop", "", MenuPoint);
    ui_List.Visible = true;
      itemList = JSON.parse(shopJSON);
      itemList.forEach(shop => {
          let newItem = new UIMenuItem("" + shop.name, ""+shop.id);
          ui_List.AddItem(newItem);
          newItem.SetRightLabel(""+shop.price+"$");
      });
  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:shop:buy", item.Description, item.Text, id);
        mp.events.call("createInputShop", "shopBuy");
    });
    ui_List.MenuClose.on(() => {
      mp.events.callRemote("server:playermenu:variable");
    });
  }
  mp.events.add("client:shop:drawMenu", drawMenu);

  mp.events.add("client:shop:openShop", (id) => {
    let ui_shop = new Menu("Shop", "", MenuPoint);
    ui_shop.AddItem(new UIMenuItem("Einkaufen",""));
    ui_shop.AddItem(new UIMenuItem("Ausrauben",""));
    ui_shop.AddItem( new UIMenuItem("Schließen", ""));
    ui_shop.Visible = true;
  
    ui_shop.ItemSelect.on((item, index, value) => {
      if (item.Text == "Einkaufen") {
        mp.events.callRemote("server:shop:openShop",id);
        ui_shop.Close();
      } else if (item.Text == "Ausrauben") {
        var playerposx = player.position.x;
        var playerposy = player.position.y;
        var playerposz = player.position.z;
        mp.events.callRemote("server:shop:ausrauben",id, playerposx,playerposy,playerposz);
        ui_shop.Close();    
      } else if (item.Text == "Schließen") {
        ui_shop.Close();
      }
    });
    ui_shop.MenuClose.on(() => {
      mp.events.callRemote("server:playermenu:variable");
    });
  });

  mp.events.add("client:shop:showDispatch", () => {
    var value = "ShopRob";
      var playerposx = player.position.x;
        var playerposy = player.position.y;
        var playerposz = player.position.z;
        mp.events.callRemote("server:Global:showDispatch",value,playerposx,playerposy,playerposz);   
  });

  // Shop Rob
mp.events.add("client:shop:shoprob", (posX, posY, posZ) => {
  var dispatchTime = new Date().getTime();
  var shopRob = "shopRob_";
  mp.game.graphics.notify("Ein neuer Shop Raub");

  global[shopRob +  "_" + dispatchTime] = mp.blips.new(60, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
  {
      name: "Shop Raub",
      scale: 1.00,
      color: 1,
      alpha: 255,
      drawDistance: 10,
      shortRange: false,
      rotation: 0.00,
      dimension: 0,
  });
  setTimeout(() => {
    global[shopRob +  "_" + dispatchTime].destroy();
  }, 300000)
  // 300000 = 5 min
  // 600000 = 10 min
});