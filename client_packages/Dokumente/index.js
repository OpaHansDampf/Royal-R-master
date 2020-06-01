let intro = null;
mp.events.add("startintro", () => {
    /*if (intro == null) {
      intro = mp.browsers.new('package://Dokumente/intro.html');
      mp.game.controls.disableAllControlActions(0);
      setTimeout(function() {
        if (intro !== null) {          
            intro.destroy();
            intro = null;
            //ToDo Servercall für speichern des Intros
            //mp.events.callRemote("introSave");
           // mp.game.controls.enableAllControlActions(0);
        }
      }, 180000
      );
    }*/
});

let ausweis = null;
mp.events.add("client:dokumente:showAusweis", (firstName,lastName,dateOfBirth) => {
    if (ausweis == null) {
        ausweis = mp.browsers.new('package://Dokumente/ausweis.html');
        ausweis.execute("setFirstName('"+firstName+" "+lastName+"')");
        ausweis.execute("setDateOfBirth('"+dateOfBirth+"')");
  
      setTimeout(function() {
        if (ausweis !== null) {
            ausweis.destroy();
            ausweis = null;
        }
      }, 10000);
    }
});
let weapona = null;
mp.events.add("client:dokumente:showweapona", (firstName,lastName) => {
    if (weapona == null) {
        weapona = mp.browsers.new('package://Dokumente/weapona.html');
        weapona.execute("setFirstName('"+firstName+" "+lastName+"')");
  
      setTimeout(function() {
        if (weapona !== null) {
            weapona.destroy();
            weapona = null;
        }
      }, 10000);
    }
});
let weaponb = null;
mp.events.add("client:dokumente:showweaponb", (firstName,lastName) => {
    if (weaponb == null) {
        weaponb = mp.browsers.new('package://Dokumente/weaponb.html');
        weaponb.execute("setFirstName('"+firstName+" "+lastName+"')");
  
      setTimeout(function() {
        if (weaponb !== null) {
            weaponb.destroy();
            weaponb = null;
        }
      }, 10000);
    }
});
let driver = null;
mp.events.add("client:dokumente:showdriver", (firstName,lastName) => {
    if (driver == null) {
        driver = mp.browsers.new('package://Dokumente/driver.html');
        driver.execute("setFirstName('"+firstName+" "+lastName+"')");
  
      setTimeout(function() {
        if (driver !== null) {
            driver.destroy();
            driver = null;
        }
      }, 10000);
    }
});
let lkw = null;
mp.events.add("client:dokumente:showlkw", (firstName,lastName) => {
    if (lkw == null) {
        lkw = mp.browsers.new('package://Dokumente/lkw.html');
        lkw.execute("setFirstName('"+firstName+" "+lastName+"')");
  
      setTimeout(function() {
        if (lkw !== null) {
            lkw.destroy();
            lkw = null;
        }
      }, 10000);
    }
});
let pilot = null;
mp.events.add("client:dokumente:showpilot", (firstName,lastName) => {
    if (pilot == null) {
        pilot = mp.browsers.new('package://Dokumente/pilot.html');
        pilot.execute("setFirstName('"+firstName+" "+lastName+"')");
  
      setTimeout(function() {
        if (pilot !== null) {
            pilot.destroy();
            pilot = null;
        }
      }, 10000);
    }
});
let job = null;
mp.events.add("client:dokumente:showjob", (firstName,lastName) => {
    if (job == null) {
        job = mp.browsers.new('package://Dokumente/job.html');
        job.execute("setFirstName('"+firstName+" "+lastName+"')");
  
      setTimeout(function() {
        if (job !== null) {
            job.destroy();
            job = null;
        }
      }, 10000);
    }
});

let police = null;
mp.events.add("client:dokumente:showpolice", (firstName,lastName,rang,dn) => {
    if (police == null) {
      police = mp.browsers.new('package://Dokumente/police.html');
      police.execute("setRang('"+rang+"')");
      police.execute("setDienstnummer('"+dn+"')");
  
      setTimeout(function() {
        if (police !== null) {
          police.destroy();
          police = null;
        }
      }, 10000);
    }
});

let fib = null;
mp.events.add("client:dokumente:showfib", (firstName,lastName,rang,dn) => {
    if (fib == null) {
        fib = mp.browsers.new('package://Dokumente/fib.html');
        fib.execute("setFirstName('"+firstName+" "+lastName+"')");
        fib.execute("setRang('"+rang+"')");
        fib.execute("setDienstnummer('"+dn+"')");
  
      setTimeout(function() {
        if (fib !== null) {
            fib.destroy();
            fib = null;
        }
      }, 10000);
    }
});

let acls = null;
mp.events.add("client:dokumente:showacls", (firstName,lastName,rang,dn) => {
    if (acls == null) {
        acls = mp.browsers.new('package://Dokumente/acls.html');
        acls.execute("setFirstName('"+firstName+" "+lastName+"')");
        acls.execute("setRang('"+rang+"')");
        acls.execute("setDienstnummer('"+dn+"')");
  
      setTimeout(function() {
        if (acls !== null) {
            acls.destroy();
            acls = null;
        }
      }, 10000);
    }
});




let medic = null;
mp.events.add("client:dokumente:showmedic", (firstName,lastName,rang,dn) => {
    if (medic == null) {
        medic = mp.browsers.new('package://Dokumente/medic.html');
        medic.execute("setFirstName('"+firstName+" "+lastName+"')");
        medic.execute("setRang('"+rang+"')");
        medic.execute("setDienstnummer('"+dn+"')");
  
      setTimeout(function() {
        if (medic !== null) {
            medic.destroy();
            medic = null;
        }
      }, 10000);
    }
});

let justiz = null;
mp.events.add("client:dokumente:showjustiz", (firstName,lastName,rang) => {
    if (justiz == null) {
      justiz = mp.browsers.new('package://Dokumente/justiz.html');
      justiz.execute("setFirstName('"+firstName+" "+lastName+"')");
      justiz.execute("setRang('"+rang+"')");
  
      setTimeout(function() {
        if (justiz !== null) {
          justiz.destroy();
          justiz = null;
        }
      }, 10000);
    }
});

let tablet = null;
mp.events.add("client:tablet:openPD", () => {
    if (tablet == null) {
      tablet = mp.browsers.new('package://factions/lspd/tablet/index.html');  
      mp.gui.cursor.visible = true;
      mp.events.callRemote("phoneanim", 'amb@world_human_stand_mobile@male@text@base', 'base', 1, 49, -1);
    }
});

mp.keys.bind(116, true, function() { 
	if (tablet !== null) {
    tablet.destroy();
    tablet = null;
    mp.gui.cursor.visible = false;
    mp.events.callRemote("phoneanim", 'cellphone@', 'cellphone_horizontal_exit', 1, 40, -1);
  }
 });