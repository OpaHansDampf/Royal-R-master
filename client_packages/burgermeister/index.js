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

function memberListDraw(memberJSON){
    const ui_member = new Menu("Wahlteilnehmer", "Liste aller Mitglieder", MenuPoint);
    ui_member.Visible = true;
     memberList = JSON.parse(memberJSON); 
     memberList.forEach(char => {
           let newMember = new UIMenuItem(""+char.name,""+char.id);
           ui_member.AddItem(newMember);
           newMember.SetRightLabel("");
       });
       ui_member.ItemSelect.on((item, index) => {
       mp.events.callRemote("server:burgermeister:stimme",item.Description);
       ui_member.Close();
     });
   }
   mp.events.add("client:burgermeister:viewmember", memberListDraw);

   mp.events.add("client:burgermeister:open", (rang,fraktion,name) => {
    let ui_wahl = new Menu("Rathaus", "Aktueller Bürgermeister: "+name, MenuPoint);    
    ui_wahl.AddItem(new UIMenuItem("Kanidaten",""));
    ui_wahl.AddItem(new UIMenuItem("Aufstellen",""));
    if(rang > 12 && fraktion == "Justiz") {
        ui_wahl.AddItem( new UIMenuItem("Wahl öffen", ""));
        ui_wahl.AddItem( new UIMenuItem("Wahl auswerten", ""));
    }    
    ui_wahl.Visible = true;
  
    ui_wahl.ItemSelect.on((item, index, value) => {
      if (item.Text == "Kanidaten") {
            mp.events.callRemote("server:burgermeister:load");
            ui_wahl.Close();
        } else if (item.Text == "Aufstellen") {
            mp.events.callRemote("server:burgermeister:aufstellen");
            ui_wahl.Close();   
        } else if (item.Text == "Wahl auswerten") {
            mp.events.callRemote("server:burgermeister:auswerten");
            ui_wahl.Close();  
        } else if (item.Text == "Schließen") {
            ui_wahl.Close();
      }
    });
    ui_wahl.MenuClose.on(() => {
      mp.events.callRemote("server:playermenu:variable");
    });
  });