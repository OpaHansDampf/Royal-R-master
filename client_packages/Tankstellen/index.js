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

function drawMenu(tankeJSON, job){
  ui_List = new Menu("Tankstelle", "", MenuPoint);
  ui_List.Visible = true;
  TankList = JSON.parse(tankeJSON);
  TankList.forEach(tanke => {
    let newbItem = new UIMenuItem("Benzin" , ""+tanke.id);
    ui_List.AddItem(newbItem);
    newbItem.SetRightLabel(""+tanke.bprice+"$");
    let newdItem = new UIMenuItem("Diesel" , ""+tanke.id);
    ui_List.AddItem(newdItem);
    newdItem.SetRightLabel(""+tanke.dprice+"$");
    let newsItem = new UIMenuItem("Strom" , ""+tanke.id);
    ui_List.AddItem(newsItem);
    newsItem.SetRightLabel(""+tanke.sprice+"$");
  });

  if (job == true) {
    ui_List.AddItem(new UIMenuItem("Befüllen",""));
  }      
  
  // Auswertung Menuauswahl ausparken
  ui_List.ItemSelect.on((item, index) => {
    mp.events.callRemote("server:tankstellen:tanken", item.Description, item.Text);
    ui_List.Close();
  });
  ui_List.MenuClose.on(() => {
    mp.events.callRemote("server:playermenu:variable");
  });
}

mp.events.add("client:tankstellen:drawMenu", drawMenu);

mp.events.add("client:tankstellen:showDispatch", () => {
  var value = "TankstellenRob";
  var playerposx = player.position.x;
  var playerposy = player.position.y;
  var playerposz = player.position.z;
  mp.events.callRemote("server:Global:showDispatch",value,playerposx,playerposy,playerposz);   
});

mp.events.add("client:tankstellen:tankstellenrob", (posX, posY, posZ) => {
  var dispatchTime = new Date().getTime();
  var tankstellenRob = "tankstellenRob_";
  mp.game.graphics.notify("Ein neuer Tankstellen Raub (nicht gezahlt)");

  global[tankstellenRob +  "_" + dispatchTime] = mp.blips.new(60, new mp.Vector3(parseFloat(posX), parseFloat(posY), parseFloat(posZ)),
  {
    name: "Tankstellen Raub",
    scale: 1.00,
    color: 1,
    alpha: 255,
    drawDistance: 10,
    shortRange: false,
    rotation: 0.00,
    dimension: 0,
  });
  setTimeout(() => {
    global[tankstellenRob +  "_" + dispatchTime].destroy();
  }, 300000)
  // 300000 = 5 min
  // 600000 = 10 min
});