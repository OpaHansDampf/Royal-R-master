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


mp.events.add("client:email:openEmail",(mail,ungelesen,gelesen) => {
    const ui_sub = new Menu("Emails", "Email: "+mail, MenuPoint);
    let newItem = new UIMenuItem("Gelesene Mails", "");
    ui_sub.AddItem(newItem);
    newItem.SetRightLabel(""+gelesen+"x");
    let ungel = new UIMenuItem("Ungelesene Mails", "");
    ui_sub.AddItem(ungel);
    ungel.SetRightLabel(""+ungelesen+"x")
    ui_sub.AddItem( new UIMenuItem("Email senden", ""));
    ui_sub.AddItem( new UIMenuItem("Schließen", ""));

    ui_sub.ItemSelect.on((item, index, value) => {
        if (item.Text == "Gelesene Mails") {
          mp.events.callRemote("server:email:openGelEmail");   
          ui_sub.Close();          
        } else if (item.Text == "Ungelesene Mails") {
            mp.events.callRemote("server:email:unGelEmail");  
            ui_sub.Close(); 
        } else if (item.Text == "Email senden") {
            mp.events.call("createInputEmail", "message");
            ui_sub.Close();
        } else if (item.Text == "Schließen") {
            ui_sub.Close();
        } else {            
            ui_sub.Close();
        }      
    });
});

function drawEmails(mailJSON){
    // Menu für Fahrzeugliste anlegen
    ui_List = new Menu("Emails", "Welches Email willst du Lesen?", MenuPoint);
    ui_List.Visible = true;
    if (mailJSON != "none"){
        mailList = JSON.parse(mailJSON);
        mailList.forEach(mail => {
          let newItem = new UIMenuItem(""+mail.sendMail, ""+mail.text);
          ui_List.AddItem(newItem);
          newItem.SetRightLabel("");
      });
    } else{
      ui_List.AddItem( new UIMenuItem("Du hast eine Emails!", ""));
    }  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:email:lesen", item.Description);
        ui_List.Close();
    });
  }
  mp.events.add("client:email:listEmails", drawEmails);

mp.events.add("sendInputEmail",(trigger,output,text) => {
  if (inputShop !== null) {
    inputShop.destroy();
    inputShop = null;
  }
  mp.events.callRemote("inputValueEmail", trigger, output,text);
  mp.gui.cursor.show(false, false);
});

mp.events.add("sendInputEmail",(trigger) => {
  if (inputShop !== null) {
    inputShop.destroy();
    inputShop = null;
  }
  mp.gui.cursor.show(false, false);
});
var mailBlatt = null;
mp.events.add("client:email:gelesen",() => {
  if (mailBlatt !== null) {
    mailBlatt.destroy();
    mailBlatt = null;
  }
  mp.gui.cursor.show(false, false);
});

mp.events.add("client:email:lesen",(trigger) => {
  if (browser != null || mailBlatt != null) return;
  mailBlatt = mp.browsers.new("package://email/index.html");
  mailBlatt.execute('setText("' + trigger + '")');
  mp.gui.cursor.show(true, true);
});


var sendMail = null;
mp.events.add("createInputEmail",() => {
  if (browser != null || sendMail != null) return;
  sendMail = mp.browsers.new("package://email/sendmail.html");
  mp.gui.cursor.show(true, true);
});

mp.events.add("client:email:sendmail",(output,text) => {
  if (sendMail !== null) {
    sendMail.destroy();
    sendMail = null;
  }
  mp.events.callRemote("inputValueEmail", output,text);
  mp.gui.cursor.show(false, false);
});


var inputHouse = null;
mp.events.add("createInputHouse",(trigger) => {
  if (browser != null || inputHouse != null) return;
  inputHouse = mp.browsers.new("package://inputHouse/input.html");
  inputHouse.execute('setTrigger("' + trigger + '")');
  mp.gui.cursor.show(true, true);
});

mp.events.add("sendInputHouse",(trigger,output) => {
  if (inputHouse !== null) {
    inputHouse.destroy();
    inputHouse = null;
}
  mp.events.callRemote("inputValueHouse", trigger, output);
  mp.gui.cursor.show(false, false);
});

mp.events.add("closeInputHouse",(trigger) => {
  if (inputHouse !== null) {
    inputHouse.destroy();
    inputHouse = null;
}
mp.gui.cursor.show(false, false);
});