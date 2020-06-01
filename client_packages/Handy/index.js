var handyShown = false;
var handy;
var player = mp.players.local;

mp.events.add("client:Keybind:PageUp", (status) =>{
  if (status == 0) {
    if(handyShown === true && mp.gui.cursor.visible === false){
      mp.gui.cursor.visible = true;
    } else if (handyShown !== true) {
      handyShown = true;
      handy = mp.browsers.new("package://Handy/CEF/index.html");
      mp.gui.cursor.visible = false;   
    }
  } else {
    if(handyShown === true && mp.gui.cursor.visible === false){
      mp.gui.cursor.visible = true;
    } else if (handyShown !== true) {
      handyShown = true;
      handy = mp.browsers.new("package://Handy/CEF/handyoff.html");
      mp.gui.cursor.visible = false;
    }
  }    
});


mp.events.add("client:Keybind:PageDown", () =>{
    if(handyShown === true && mp.gui.cursor.visible === true){
        mp.gui.cursor.visible = false;
      } else if (handyShown === true && mp.gui.cursor.visible === false){
          handyShown = false;
        if (handy !== null) {
          handy.destroy();
          handy = null;
        }
        mp.gui.cursor.visible = false;
    }
});

mp.events.add("client:Handy:onPhone", (status) => {
  if (status == 0) {
    mp.events.callRemote("server:Handy:OnOff", 0);   
  } else {
    mp.events.callRemote("server:Handy:OnOff", 1);
    if (handy !== null) {
      handy.destroy();
      handy = null;
      mp.gui.cursor.visible = false;
    }
  }  
});

mp.events.add("client:Handy:sendDispatch", (value) => {
  var playerposx = player.position.x;
  var playerposy = player.position.y;
  var playerposz = player.position.z;
  mp.game.graphics.notify('Du hast einen Dispatch gesendet an: ' + value);
  mp.events.callRemote("server:Global:showDispatch", value, playerposx, playerposy, playerposz);
});

mp.events.add("client:Handy:callContact", (value) => {
  if(value != 911 && value != 912 && value != 913 && value != 914) {
    mp.events.callRemote("server:phone:callContact", value);
  } else {
    handy.execute("window.frames['content'].location.href='Phonecalling/phonecalling.html'");
    mp.events.call("client:Handy:onCall", value);
  }
});


mp.events.add("client:Handy:getSms", () => {
  mp.events.callRemote("server:phone:getSms");
});

mp.events.add("client:Handy:showContacts", () => {
    handy.execute("window.frames['content'].location.href='Contactlist/contactlist.html'");
    setTimeout(function() {
    var innerHTMLString = "";
    var names = player.getVariable("currentContacts");
    names = JSON.parse(names);
    handy.execute("window.frames['content'].addEmergencyContacts()");
    if(names != undefined) {
      names.forEach(function(contactName) {
        handy.execute("window.frames['content'].addContactDiv('" + contactName.contactName + "')");
      });
    }
  }, 500);
});

mp.events.add("client:Handy:showSms", (names) => {
  handy.execute("window.frames['content'].location.href='SmsList/smslist.html'");
  setTimeout(function() {
  var innerHTMLString = "";
  if(names != undefined) {
    names.forEach(function(contactName) {
      if (contactName.gelesen == 1) {
        handy.execute("window.frames['content'].addSmsDiv('" + contactName.number + "')");  
      } else {
        handy.execute("window.frames['content'].addNewDiv('" + contactName.number + "')");  
      } 

    });
  }
}, 500);
});

mp.events.add("sendSMS",(sms) => {
  mp.events.callRemote("server:phone:sendSMS",sms);
});

mp.events.add("client:Handy:gpsbutton",() => {
  mp.events.callRemote("server:handy:sendGPS");
});

mp.events.add("client:Handy:gpsbutton1",(number) => {
  mp.events.callRemote("server:handy:markGPS",number);
});

mp.events.add("client:Handy:getSingleGPS", (name) => {
  handy.execute("window.frames['content'].location.href='ShowGPS/shopgps.html'");
  setTimeout(function() {
    handy.execute("window.frames['content'].showContactName('" + name + "')");
  }, 100);
});


mp.events.add("client:Handy:showGPS", (names) => {
  handy.execute("window.frames['content'].location.href='GPSlist/gps.html'");
  setTimeout(function() {
  if(names != undefined) {
    names.forEach(function(contactName) {
      handy.execute("window.frames['content'].addContactDiv('" + contactName + "')");
    });
  }
}, 500);
});

mp.events.add("client:handy:deleteGPS",(number) => {
  mp.events.callRemote("server:handy:deleteGPS",number);
});
mp.events.add("client:Handy:showSmsContact", (names,charId,id) => {
  handy.execute("window.frames['content'].location.href='Showsms/showsms.html'");
  setTimeout(function() {
  var innerHTMLString = "";
  if(names != undefined && names !== null) {
    names.forEach(function(contactName) {
      if (contactName.id == contactName.charId) {
        if (contactName.gelesen == 0) {
          handy.execute("window.frames['content'].addSmsDiv('" + contactName.sms + "')");
        } else {
          handy.execute("window.frames['content'].addSmsDivGelesen('" + contactName.sms + "')");
        }                 
      } else {
          handy.execute("window.frames['content'].addNewDiv('" + contactName.sms + "')");       
      }          
    });
  }
}, 500);
});

mp.events.add("client:Handy:showSmsContactWrite", (names) => {
  handy.execute("window.frames['content'].location.href='Showsms/showsms.html'");
});

mp.events.add("client:Handy:getSingleContact", (name) => {
  mp.events.callRemote("server:phone:getSingleContact", name);
});

mp.events.add("client:Handy:getSmsContact", (name) => {
  mp.events.callRemote("server:phone:getSmsContact", name);
});

mp.events.add("client:Handy:showSingleContact", (name, number) => {
  handy.execute("window.frames['content'].location.href='Showcontact/showcontact.html'");
  setTimeout(function() {
    handy.execute("window.frames['content'].showContactName('" + name + "')");
    handy.execute("window.frames['content'].showContactNumber('" + number + "')");
  }, 100);
});

mp.events.add("client:Handy:clickPhoneCallButton", () => {
      mp.events.callRemote("server:phone:isInCall");
});

mp.events.add("client:Handy:showPhonecall", (value) => {
  handy.execute("window.frames['content'].location.href='Phonecall/phonecall.html?phoneNumber=" + value + "'");
});

mp.events.add("client:Handy:showDialpad", () => {
  handy.execute("window.frames['content'].location.href='dialpad/dialpad.html'");
});

mp.events.add("client:Handy:showAddContact", (number) => {
  handy.execute("window.frames['content'].location.href='Addcontacts/addcontacts.html?number=" + number + "'");
});

mp.events.add("client:Handy:editContact", (name, number) => {
  handy.execute("window.frames['content'].location.href='Editcontact/editcontact.html'");
  setTimeout(function() {
    handy.execute("window.frames['content'].showContactName('" + name + "')");
    handy.execute("window.frames['content'].showContactNumber('" + number + "')");
  }, 100);
});

mp.events.add("client:Handy:saveContact", (name, number, old_name, old_number) => {
  mp.events.callRemote("server:phone:saveContact", name, number, old_name, old_number);
});

mp.events.add("client:Handy:deleteContact", (name) => {
  mp.events.callRemote("server:phone:deleteContact", name);
});

mp.events.add("client:Handy:gpsData", (value) => {
  mp.events.callRemote("server:phone:getGPS");
});

mp.events.add("client:Handy:bankData", (value) => {
  mp.events.callRemote("server:Global:GetBankMoney");
});

mp.events.add("client:Handy:ShowBankAmount",(ownerId, scode) => {
  handy.execute("window.frames['content'].location.href='Bank/fleeca.html?ownerId="+ownerId+"&scode="+scode+"'");
});

mp.events.add("client:Handy:getOwnNumber",() => {
      mp.events.callRemote("server:phone:getOwnNumber");
});

mp.events.add("client:Handy:showSettings", (number) => {
  handy.execute("window.frames['content'].location.href='Settings/settings.html?phoneNumber=" + number + "'");
});

mp.events.add("client:Handy:addContact",(name, number) => {
      mp.events.callRemote("server:phone:addContact", name, number);
});

mp.events.add("client:Handy:onCall", (value) => {
  if(handyShown != true) {
      handyShown = true;
      handy = mp.browsers.new("package://Handy/CEF/index.html");
      mp.gui.cursor.visible = true;
  }
  if(value == "" || value.length < 3) {
    mp.events.call("client:Handy:noNumber", value);
  }
  handy.execute("window.frames['content'].document.getElementById('callingPartner').value = " + value);
  mp.events.callRemote("server:phone:phoneRing", value);
  mp.events.callRemote("phoneanim", 'amb@world_human_stand_mobile@male@standing@call@base', 'base', 1, 49, -1);
  mp.gui.cursor.visible = false;
});

mp.events.add("client:Handy:noNumber", (value) => {
  handy.execute("window.frames['content'].location.href='Nonumber/nonumber.html?phonenumber= " + value + "'");
});

mp.events.add("client:Handy:numberBusy", (value, leitstelle) => {
  if(leitstelle != null) {
    handy.execute("window.frames['content'].location.href='Numberbusy/numberbusy.html?phonenumber= " + value + "&leitstelle= " + leitstelle + "'");
  } else {
    handy.execute("window.frames['content'].location.href='Numberbusy/numberbusy.html?phonenumber= " + value + "&leitstelle=false'");
  }
});

mp.events.add("client:Handy:phoneRing", (value, leitstelle) => {
  if(handyShown != true) {
      handyShown = true;
      handy = mp.browsers.new("package://Handy/CEF/index.html");
      mp.gui.cursor.visible = false;
  }
  if(leitstelle !== null) {
    if (leitstelle == 911) {
      handy.execute("window.frames['content'].location.href='Receivecall/receivecall.html?phonenumber= " + value + "&leitstelle=1'"); 
    } else if (leitstelle == 912) {
      handy.execute("window.frames['content'].location.href='Receivecall/receivecall.html?phonenumber= " + value + "&leitstelle=2'"); 
    } else if (leitstelle == 913) {
      handy.execute("window.frames['content'].location.href='Receivecall/receivecall.html?phonenumber= " + value + "&leitstelle=3'"); 
    } else if (leitstelle == 914) {
      handy.execute("window.frames['content'].location.href='Receivecall/receivecall.html?phonenumber= " + value + "&leitstelle=4'"); 
    } else if (leitstelle !== 914 && leitstelle !== 913 && leitstelle !== 912 && leitstelle !== 911) {
      handy.execute("window.frames['content'].location.href='Receivecall/receivecall.html?phonenumber= " + value + "&leitstelle=5'"); 
    }   
  } else {
    handy.execute("window.frames['content'].location.href='Receivecall/receivecall.html?phonenumber= " + value + "&leitstelle=0'");
  }   
});

mp.events.add("client:Handy:startCall", (value, leitstelle) =>{
  mp.events.callRemote("phoneanim", 'amb@world_human_stand_mobile@male@standing@call@base', 'base', 1, 49, -1);
  mp.gui.cursor.visible = false;
  mp.events.callRemote("server:phone:startCall", value, leitstelle);
});

mp.events.add("client:Handy:acceptCall", (value, leitstelle) => {
  if(handyShown != true) {
      handyShown = true;
      handy = mp.browsers.new("package://Handy/CEF/index.html");
      mp.gui.cursor.visible = true;
  }
  if(leitstelle == false) {
    handy.execute("window.frames['content'].location.href='Phonecall/phonecall.html?phonenumber= " + value + "&leitstelle=false'");
  } else {
    handy.execute("window.frames['content'].location.href='Phonecall/phonecall.html?phonenumber= " + value + "&leitstelle=" + leitstelle + "'");
  }
});

// ask server to send client event to calling partner
mp.events.add("client:Handy:rejectCall", (value, leitstelle) => {
  mp.events.callRemote("server:phone:rejectCall", value, leitstelle);
  mp.events.callRemote("server:phone:endCall");
});

// remove ringing or dialing pages
mp.events.add("client:Handy:callRejected", () =>{
  if(handyShown != true) {
      handyShown = true;
      handy = mp.browsers.new("package://Handy/CEF/index.html");
      mp.gui.cursor.visible = false;
  }
  handy.execute("window.frames['content'].location.href='Main/main.html'");
});

mp.events.add("client:Handy:HomeClick", () =>{
    mp.game.graphics.notify("Homebutton clicked");
});

mp.events.add("client:Handy:MenuClick", () =>{
    mp.game.graphics.notify("Menubutton clicked");
});

mp.events.add("client:Handy:BackClick", () =>{
    mp.game.graphics.notify("Backbutton clicked");
});