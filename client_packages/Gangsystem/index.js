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

const ScreenRes = mp.game.graphics.getScreenResolution(0,0);
const MenuPoint = new Point(50,50);



mp.events.add("client:gang:openMenu", (gang,gangrang) => {
    let ui_main = new Menu("Gangverwaltung", "Gang: "+gang, MenuPoint);
    if (gang !== "none") {
        ui_main.AddItem(new UIMenuItem("Mitglieder",""));
        if (gangrang > 1) {
            ui_main.AddItem(new UIMenuItem("Gegenüber Einladen",""));
            //ui_main.AddItem(new UIMenuItem("Einstellungen",""));
        }    
        ui_main.AddItem(new UIMenuItem("Gang verlassen",""));
    } else {
        ui_main.AddItem(new UIMenuItem("Gang gründen(75000$)",""));
    }       
    ui_main.AddItem( new UIMenuItem("Schließen", ""));
    ui_main.Visible = true;
  
    ui_main.ItemSelect.on((item, index, value) => {
      if (item.Text == "Mitglieder") {
          mp.events.callRemote("server:gang:members", gang);
          ui_main.Close();      
      } else if (item.Text == "Einstellungen") {
          mp.events.callRemote("server:gang:settings",gang);
          ui_main.Close();
        } else if (item.Text == "Gang verlassen") {
            mp.events.callRemote("server:gang:leavegang",gang);
            ui_main.Close();   
        } else if (item.Text == "Gegenüber Einladen") {
            mp.events.callRemote("server:gang:invite",gang);
            ui_main.Close();  
            } else if (item.Text == "Gang gründen (75000$)") {
                mp.events.call("createInputText", "ganggründung");
                ui_main.Close();    
      } else if (item.Text == "Schließen") {
        ui_main.Close();
      }
    });
});

mp.events.add("client:gang:settings", (gang,marked) => {
    let ui_settings = new Menu(""+gang, "", MenuPoint);
    ui_settings.AddItem(new UIMenuItem("Garagenwart setzen",""));
    ui_settings.AddItem(new UIMenuItem("Garagen ausparkpunkt setzen",""));
    ui_settings.AddItem(new UIMenuItem("Garagen einparkpunkt setzen","")); 
    if (marked == 0) {
        ui_settings.AddItem(new UIMenuItem("Gang auf Karte Makieren",""));    
    }
    if (marked == 1) {
        ui_settings.AddItem(new UIMenuItem("Gang nicht mehr Makieren",""));  
    }       
    ui_settings.AddItem( new UIMenuItem("Schließen", ""));
    ui_settings.Visible = true;
  
    ui_settings.ItemSelect.on((item, index, value) => {
      if (item.Text == "Garagenwart setzen") {
          mp.events.callRemote("server:gang:garwart", gang);
          ui_settings.Close();      
      } else if (item.Text == "Garagen ausparkpunkt setzen") {
          mp.events.callRemote("server:gang:parkout",gang);
          ui_settings.Close(); 
      } else if (item.Text == "Garagen einparkpunkt setzen") {
          mp.events.callRemote("server:gang:parkin",gang);
          ui_settings.Close();     
      } else if (item.Text == "Gang auf Karte Makieren") {
          mp.events.callRemote("server:gang:markgang",gang);
          ui_settings.Close();      
      } else if (item.Text == "Gang nicht mehr Makieren") {
          mp.events.callRemote("server:gang:demark",gang);
          ui_settings.Close();   
      } else if (item.Text == "Schließen") {
        ui_settings.Close();
      }
      
    });
});

mp.events.add("client:gang:invitemenu", (player,gang) => {
    let ui_invite = new Menu(""+gang, "Du wurdest in eine Gang eingeladen!", MenuPoint);
    ui_invite.AddItem(new UIMenuItem("Gang beitreten",""));
    ui_invite.AddItem(new UIMenuItem("Ich will nicht in die Gang",""));  
    ui_invite.AddItem( new UIMenuItem("Schließen", ""));
    ui_invite.Visible = true;
  
    ui_invite.ItemSelect.on((item, index, value) => {
      if (item.Text == "Gang beitreten") {
          mp.events.callRemote("server:gang:accept", gang, player);
          ui_invite.Close();      
      } else if (item.Text == "Ich will nicht in die Gang") {
          mp.events.callRemote("server:gang:deny",gang,player);
          ui_invite.Close();   
      } else if (item.Text == "Schließen") {
        ui_invite.Close();
      }
      
    });
});


function memberListDraw(memberJSON){
    const ui_member = new Menu("Gangmitglieder", "Liste aller Mitglieder", MenuPoint);
    ui_member.Visible = true;
     memberList = JSON.parse(memberJSON); 
     memberList.forEach(char => {
           let newMember = new UIMenuItem(""+char.firstname+" "+char.lastname,""+char.id);
           ui_member.AddItem(newMember);
           newMember.SetRightLabel("Rang: "+char.rang);
       });
       ui_member.ItemSelect.on((item, index) => {
       mp.events.callRemote("server:gang:kickMember",item.Description);
       ui_member.Close();
     });
   }
   mp.events.add("client:gang:memberlist", memberListDraw);

   function drawMenu(shopJSON){
    ui_List = new Menu("Gangshop", "", MenuPoint);
    ui_List.Visible = true;
      itemList = JSON.parse(shopJSON);
      itemList.forEach(shop => {
          let newItem = new UIMenuItem("" + shop.name, ""+shop.id);
          ui_List.AddItem(newItem);
          newItem.SetRightLabel(""+shop.price+"$");
      });
  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:gang:buy", item.Description);
    });
    ui_List.MenuClose.on(() => {
        mp.events.callRemote("server:playermenu:variable");
    });
  }
  mp.events.add("client:gang:drawShopMenu", drawMenu);