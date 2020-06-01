// Native UI
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

let uiMenu = []

const ui_Main = new Menu("Animationen", "Wähle deine Animation", MenuPoint);
ui_Main.AddItem(new UIMenuItem("Auswählen",""));
ui_Main.AddItem(new UIMenuItem("Shortcut Festlegen","Speicher die Shortcuts"));
ui_Main.AddItem(sitzen = new UIMenuItem("Sitzen", "Auswahl an sitz Animationen"));
ui_Main.AddItem(liegen = new UIMenuItem("Liegen", "Auswahl an liege Animationen"));
ui_Main.AddItem(stehen = new UIMenuItem("Stehen", "Auswahl an stand Animationen"));
ui_Main.AddItem(knien = new UIMenuItem("Knien", "Auswahl an knien Animationen"));
ui_Main.AddItem(zeichen = new UIMenuItem("Gangzeichen", "Auswahl an Gangzeichen"));
ui_Main.AddItem(tanzen = new UIMenuItem("Tänze", "Auswahl an Tanz Animationen"));
ui_Main.AddItem(jobs = new UIMenuItem("Jobs", "Auswahl an Job Animationen"));
ui_Main.AddItem(sport = new UIMenuItem("Sport", "Auswahl an Sport Animationen"));
ui_Main.AddItem(sonstiges = new UIMenuItem("Sonstiges", "Auswahl an sonstigen Animationen"));
// CLOSING
let ui_Close = new UIMenuItem("Schließen", "Schließt das Menü");
ui_Close.BackColor = new Color(138, 0, 0);
ui_Close.HighlightedBackColor = new Color(189, 189, 189);
ui_Main.AddItem(ui_Close);
ui_Main.Visible = false;
uiMenu.push(ui_Main);

// SITZEN
const ui_sitAnims = new Menu("Sitzen", "Auswahl an sitz Animationen", MenuPoint);
ui_sitAnims.AddItem(new UIMenuItem("Auswählen",""));
ui_sitAnims.AddItem(new UIMenuItem("Sitzen (Männl.)", ""));
ui_sitAnims.AddItem(new UIMenuItem("Sitzen (Weibl.)", ""));
ui_sitAnims.AddItem(new UIMenuItem("Sitzen (Stuhl)", ""));
ui_sitAnims.AddItem(new UIMenuItem("Sitzen (Stuhl) 2", ""));
ui_sitAnims.AddItem(new UIMenuItem("Sitzen (Stuhl Weibl.)", ""));
ui_sitAnims.AddItem(new UIMenuItem("Weinerlich Sitzen", ""));
ui_sitAnims.Visible = false;
uiMenu.push(ui_sitAnims);


// LIEGEN
const ui_lyingAnims = new Menu("Liegen", "Auswahl an liege Animationen", MenuPoint);
ui_lyingAnims.AddItem(new UIMenuItem("Auswählen",""));
ui_lyingAnims.AddItem(new UIMenuItem("Auf dem Rücken liegen", ""));
ui_lyingAnims.AddItem(new UIMenuItem("Auf dem Bauch liegen (Weibl.)", ""));
ui_lyingAnims.AddItem(new UIMenuItem("Seitlich liegen", ""));
ui_lyingAnims.AddItem(new UIMenuItem("Betrunken liegen", ""));
ui_lyingAnims.AddItem(new UIMenuItem("Liegen (Ohnmacht)"));
ui_lyingAnims.AddItem(new UIMenuItem("Schlafen", ""));
// VISIBILITY
ui_lyingAnims.Visible = false;
uiMenu.push(ui_lyingAnims);

// STEHEN
const ui_standAnims = new Menu("Stehen", "Auswahl an stand Animationen", MenuPoint);
ui_standAnims.AddItem(new UIMenuItem("Auswählen",""));
ui_standAnims.AddItem(new UIMenuItem("Arme Verschränken", ""));
ui_standAnims.AddItem(new UIMenuItem("Arme Verschränken Stehen", ""));
ui_standAnims.AddItem(new UIMenuItem("Arme Verschränken (Männl.)", ""));
ui_standAnims.AddItem(new UIMenuItem("Arme Verschränken (Weibl.)", ""));
ui_standAnims.AddItem(new UIMenuItem("Security", ""));
ui_standAnims.AddItem(new UIMenuItem("Security2", ""));
ui_standAnims.AddItem(new UIMenuItem("Anlehnen", ""));
ui_standAnims.AddItem(new UIMenuItem("Anlehnen 2", ""));
ui_standAnims.AddItem(new UIMenuItem("Arrogant", ""));
ui_standAnims.AddItem(new UIMenuItem("Eingebildet", ""));
ui_standAnims.AddItem(new UIMenuItem("Depressiv", ""));
ui_standAnims.AddItem(new UIMenuItem("Salutieren", ""));
// VISIBILITY
ui_standAnims.Visible = false;
uiMenu.push(ui_standAnims);

const ui_kneeAnims = new Menu("Knien", "Auswahl an knien Animationen", MenuPoint);
ui_kneeAnims.AddItem(new UIMenuItem("Auswählen", ""));
ui_kneeAnims.AddItem(new UIMenuItem("Knien", ""));
ui_kneeAnims.AddItem(new UIMenuItem("Auf die Knie", ""));
ui_kneeAnims.AddItem(new UIMenuItem("Auf die Knie 2", ""));
ui_kneeAnims.AddItem(new UIMenuItem("Verzweifelt Knien", ""));
// VISIBILITY
ui_kneeAnims.Visible = false;
uiMenu.push(ui_kneeAnims);

const ui_signsAnims = new Menu("Gangzeichen", "Auswahl an Gang Animationen", MenuPoint);
ui_signsAnims.AddItem(new UIMenuItem("Auswählen", ""));
ui_signsAnims.AddItem(new UIMenuItem("Gangzeichen 1", ""));
ui_signsAnims.AddItem(new UIMenuItem("Gangzeichen 2", ""));
// VISIBILITY
ui_signsAnims.Visible = false;
uiMenu.push(ui_signsAnims);

// TÄNZE
const ui_danceAnims = new Menu("Tänze", "Auswahl an Tanz Animationen", MenuPoint);
ui_danceAnims.AddItem(new UIMenuItem("Auswählen",""));
ui_danceAnims.AddItem(new UIMenuItem("Strip 1", ""));
ui_danceAnims.AddItem(new UIMenuItem("Strip 2", ""));
ui_danceAnims.AddItem(new UIMenuItem("Strip 3", ""));
ui_danceAnims.AddItem(new UIMenuItem("Strip 4", ""));
ui_danceAnims.AddItem(new UIMenuItem("Strip 5", ""));
ui_danceAnims.AddItem(new UIMenuItem("Strip 6", ""));
ui_danceAnims.AddItem(new UIMenuItem("Ghetto", ""));
ui_danceAnims.AddItem(new UIMenuItem("Tao 1", ""));
ui_danceAnims.AddItem(new UIMenuItem("Tao 2", ""));
ui_danceAnims.AddItem(new UIMenuItem("Stepptanz 1", ""));
ui_danceAnims.AddItem(new UIMenuItem("Po wackeln", ""));
ui_danceAnims.AddItem(new UIMenuItem("Po wackeln 2", ""));
ui_danceAnims.AddItem(new UIMenuItem("Zumba 1", ""));
ui_danceAnims.AddItem(new UIMenuItem("Zumba 2", ""));
ui_danceAnims.AddItem(new UIMenuItem("Zumba 3", ""));
ui_danceAnims.AddItem(new UIMenuItem("Zumba 4", ""));
ui_danceAnims.AddItem(new UIMenuItem("Zumba 5", ""));
ui_danceAnims.AddItem(new UIMenuItem("Geiles lied", ""));
ui_danceAnims.AddItem(new UIMenuItem("Feminines Tanzen"))
ui_danceAnims.AddItem(new UIMenuItem("Tanzfaul"));
ui_danceAnims.AddItem(new UIMenuItem("Luftgitarre", ""));
ui_danceAnims.AddItem(new UIMenuItem("Banging Tunes", ""));
ui_danceAnims.AddItem(new UIMenuItem("Onkel Disco", ""));
ui_danceAnims.AddItem(new UIMenuItem("Der Fisch", ""));
ui_danceAnims.AddItem(new UIMenuItem("Herzrasen", ""));
ui_danceAnims.AddItem(new UIMenuItem("Snap", ""));
ui_danceAnims.AddItem(new UIMenuItem("Raise", ""));
ui_danceAnims.AddItem(new UIMenuItem("Salsa", ""));
ui_danceAnims.AddItem(new UIMenuItem("Cats Cradle", ""));
// VISIBILITY
ui_danceAnims.Visible = false;
uiMenu.push(ui_danceAnims);

// SPORT
const ui_sportAnims = new Menu("Sport", "Auswahl an Sport Animationen", MenuPoint);
ui_sportAnims.AddItem(new UIMenuItem("Auswählen",""));
ui_sportAnims.AddItem(new UIMenuItem("Yoga 1", ""));
ui_sportAnims.AddItem(new UIMenuItem("Yoga 2", ""));
ui_sportAnims.AddItem(new UIMenuItem("Yoga 3", ""));
ui_sportAnims.AddItem(new UIMenuItem("Yoga 4", ""));
ui_sportAnims.AddItem(new UIMenuItem("Yoga 5", ""));
ui_sportAnims.AddItem(new UIMenuItem("Liegestütze 1", ""));
ui_sportAnims.AddItem(new UIMenuItem("Liegestütze 2", ""));
ui_sportAnims.AddItem(new UIMenuItem("Situps", ""));
ui_sportAnims.AddItem(new UIMenuItem("Flex", ""));
ui_sportAnims.AddItem(new UIMenuItem("Flex 2", ""));
ui_sportAnims.AddItem(new UIMenuItem("Klimmzüge", ""));
// VISIBILITY
ui_sportAnims.Visible = false;
uiMenu.push(ui_sportAnims);

// JOBS
const ui_jobAnims = new Menu("Jobs", "Auswahl an Job Animationen", MenuPoint);
ui_jobAnims.AddItem(new UIMenuItem("Auswählen",""));
ui_jobAnims.AddItem(new UIMenuItem("Begutachten", ""));
ui_jobAnims.AddItem(new UIMenuItem("Reparieren", ""));
ui_jobAnims.AddItem(new UIMenuItem("Putzen", ""));
// VISIBILITY
ui_jobAnims.Visible = false;
uiMenu.push(ui_jobAnims);


// SONSTIGES
const ui_otherAnims = new Menu("Sonstiges", "Auswahl an Sonstigen Animationen", MenuPoint);
ui_otherAnims.AddItem(new UIMenuItem("Auswählen",""));
ui_otherAnims.AddItem(new UIMenuItem("Pfeifen", ""));
ui_otherAnims.AddItem(new UIMenuItem("Ironisches Klatschen", ""));
ui_otherAnims.AddItem(new UIMenuItem("Peace", ""));
ui_otherAnims.AddItem(new UIMenuItem("2 Bier", ""));
ui_otherAnims.AddItem(new UIMenuItem("Double Peace", ""));
ui_otherAnims.AddItem(new UIMenuItem("Luftküssen", ""));
ui_otherAnims.AddItem(new UIMenuItem("Fuck you", ""));
ui_otherAnims.AddItem(new UIMenuItem("Daumen hoch", ""));
ui_otherAnims.AddItem(new UIMenuItem("Winken", ""));
ui_otherAnims.AddItem(new UIMenuItem("Facepalm", ""));
ui_otherAnims.AddItem(new UIMenuItem("Ausrasten", ""));
ui_otherAnims.AddItem(new UIMenuItem("Pinkeln", ""));
ui_otherAnims.AddItem(new UIMenuItem("Notieren", ""));
// VISIBILITY
ui_otherAnims.Visible = false;
uiMenu.push(ui_otherAnims);


ui_Main.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Schließen') {
        ui_Main.Close();
    } else if (item.Text == "Shortcut Festlegen") {
      mp.events.callRemote("server:shortcut:openMenu");
      ui_Main.Close();
    }
});

// SITANIMS
ui_sitAnims.MenuClose.on(() => {
    ui_sitAnims.RefreshIndex();
});

ui_sitAnims.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Sitzen (Männl.)') {
        mp.events.callRemote("playAnimationEvent", 'anim@heists@fleeca_bank@ig_7_jetski_owner', 'owner_idle', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Sitzen (Männl.)");
    } else
    if (item.Text == 'Sitzen (Weibl.)') {
        mp.events.callRemote("playAnimationEvent", 'amb@lo_res_idles@', 'world_human_picnic_female_lo_res_base', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Sitzen (Weibl.)");
    } else
    if (item.Text == 'Sitzen (Stuhl)') {
        mp.events.callRemote("playAnimationEvent",  'switch@michael@sitting', 'idle', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Sitzen (Stuhl)");
    } else
    if (item.Text == 'Sitzen (Stuhl) 2') {
        mp.events.callRemote("playAnimationEvent",  'missfam2leadinoutmcs3', 'onboat_leadin_pornguy_a', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Sitzen (Stuhl) 2");
    } else
    if (item.Text == 'Sitzen (Stuhl Weibl.)') {
        mp.events.callRemote("playAnimationEvent",  'timetable@reunited@ig_10', 'base_amanda', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Sitzen (Stuhl Weibl.)");
    } else 
    if (item.Text == 'Weinerlich Sitzen') {
        mp.events.callRemote("playAnimationEvent",  'switch@trevor@floyd_crying', 'console_end_loop_floyd', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Weinerliches Sitzen");
    } 
});


// LYINGANIMS
ui_lyingAnims.MenuClose.on(() => {
    ui_sitAnims.RefreshIndex();
});

ui_lyingAnims.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Auf dem Rücken liegen') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_sunbathe@male@back@base', 'base', 1, 35);
        mp.game.graphics.notify("~w~Animation: ~g~Auf dem Rücken liegen");
    } else
    if (item.Text == 'Auf dem Bauch liegen (Weibl.)') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_sunbathe@male@front@base', 'base', 1, 35);
        mp.game.graphics.notify("~w~Animation: ~g~Auf dem Bauch liegen (Weibl.)");
    } else
    if (item.Text == 'Auf dem Bauch liegen (Männl.)') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_sunbathe@male@front@idle_a', 'idle', 1, 35);
        mp.game.graphics.notify("~w~Animation: ~g~Auf dem Bauch liegen (Männl.)");
    } else
    if (item.Text == 'Seitlich liegen') {
        mp.events.callRemote("playAnimationEvent",  'amb@lo_res_idles@', 'world_human_bum_slumped_right_lo_res_base', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Seitlich liegen");
    } else
    if (item.Text == 'Betrunken liegen') {
        mp.events.callRemote("playAnimationEvent",  'timetable@amanda@drunk@idle_a', 'idle_pinot', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Betrunken liegen");
    } else
    if (item.Text == 'Liegen (Ohnmacht)') {
        mp.events.callRemote("playAnimationEvent",  'misssolomon_5@end', 'dead_black_ops', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Liegen (Ohnmacht)");
    } else
    if (item.Text == 'Schlafen') {
        mp.events.callRemote("playAnimationEvent",  'missfinale_c1@', 'lying_dead_player0', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Schlafen");
    }
});


// STANDANIMS
ui_standAnims.MenuClose.on(() => {
    ui_standAnims.RefreshIndex();
});

ui_standAnims.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Arme Verschränken (Männl.)') {
        mp.events.callRemote("playAnimationEvent",  'anim@heists@heist_corona@single_team', 'single_team_loop_boss', 1, 49);
        mp.game.graphics.notify("~w~Animation: ~gArme Verschränken (Männl.)");
    } else if (item.Text == 'Arme Verschränken Stehen') {
        mp.events.callRemote("playAnimationEvent",  'anim@heists@heist_corona@single_team', 'single_team_loop_boss', 1, 35);
        mp.game.graphics.notify("~w~Animation: ~g~Arme Verschränken Stehen");
    } else if (item.Text == 'Arme Verschränken') {
            mp.events.callRemote("playAnimationEvent",  'anim@heists@heist_corona@single_team', 'single_team_intro_boss', 1, 35);
            mp.game.graphics.notify("~w~Animation: ~g~Arme Verschränken");
    } else
    if (item.Text == 'Arme Verschränken (Weibl.)') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_hang_out_street@female_arms_crossed@base', 'base', 1, 49);
        mp.game.graphics.notify("~w~Animation: ~g~Arme Verschränken (Weibl.)");
    } else
    if (item.Text == 'Security') {
        mp.events.callRemote("playAnimationEvent",  'mini@strip_club@idles@bouncer@idle_a', 'idle_a', 1, 49);
        mp.game.graphics.notify("~w~Animation: ~g~Security");
    } else
    if (item.Text == 'Security2') {
        mp.events.callRemote("playAnimationEvent",  'mini@strip_club@idles@bouncer@idle_a', 'idle_a', 1, 35);
        mp.game.graphics.notify("~w~Animation: ~g~Security");
    } else
    if (item.Text == 'Anlehnen') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_leaning@male@wall@back@foot_up@base', 'base', 1, 35);
        mp.game.graphics.notify("~w~Animation: ~g~Anlehnen");
    } else
    if (item.Text == 'Anlehnen 2') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_leaning@male@wall@back@legs_crossed@idle_a', 'idle_c', 1, 35);
        mp.game.graphics.notify("~w~Animation: ~g~Anlehnen 2");
    } else
    if (item.Text == 'Arrogant') {
        mp.events.callRemote("playAnimationEvent",  'missmic_3_ext@leadin@mic_3_ext', '_leadin_trevor', 1, 49);
        mp.game.graphics.notify("~w~Animation: ~g~Arrogant");
    } else
    if (item.Text == 'Eingebildet') {
        mp.events.callRemote("playAnimationEvent",  'mp_move@prostitute@m@hooker', 'idle', 1, 49);
        mp.game.graphics.notify("~w~Animation: ~g~Eingebildet");
    } else
    if (item.Text == 'Salutieren') {
        mp.events.callRemote("playAnimationEvent", 'anim@mp_player_intuppersalute', 'idle_a', 1, 49, -1);
    } else
    if (item.Text == 'Depressiv') {
        mp.events.callRemote("playAnimationEvent", 'amb@world_human_bum_standing@depressed@idle_a', 'idle_c', 1, 49);
    }
});


// KNEEANIMS 
ui_kneeAnims.MenuClose.on(() => {
    ui_kneeAnims.RefreshIndex();
});

ui_kneeAnims.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Knien') {
        mp.events.callRemote("playAnimationEvent",  'amb@medic@standing@kneel@base', 'base', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Knien");
    } else 
    if (item.Text == 'Auf die Knie') {
        mp.events.callRemote("playAnimationEvent",  'missheist_jewel', 'manageress_kneel_loop', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Auf die Knie");
    } else
    if (item.Text == 'Auf die Knie 2') {
        mp.events.callRemote("playAnimationEvent",  'random@arrests', 'kneeling_arrest_idle', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Auf die Knie 2");
    } else
    if (item.Text == 'Verzweifelt Knien') {
        mp.events.callRemote("playAnimationEvent",  'missfra2', 'lamar_base_idle', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Verzweifelt Knien");
    }
});


// GANGANIMS
ui_signsAnims.MenuClose.on(() => {
    ui_signsAnims.RefreshIndex();
});

ui_signsAnims.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Gangzeichen 1') {
        mp.events.callRemote("playAnimationEvent",  'mp_player_int_uppergang_sign_b', 'mp_player_int_gang_sign_b_exit', 1, 49);
        mp.game.graphics.notify("~w~Animation: ~g~Gangzeichen 1");
    } else
    if (item.Text == 'Gangzeichen 2') {
        mp.events.callRemote("playAnimationEvent",  'mp_player_int_uppergang_sign_a', 'mp_player_int_gang_sign_a', 1, 49);
        mp.game.graphics.notify("~w~Animation: ~g~Gangzeichen 2");
    }
});


// DANCEANIMS
ui_danceAnims.MenuClose.on(() => {
    ui_danceAnims.RefreshIndex();
});

ui_danceAnims.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Strip 1') {
        mp.events.callRemote("playAnimationEvent",  'oddjobs@assassinate@multi@yachttarget@lapdance', 'yacht_ld_f', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Strip 1");
    } else
    if (item.Text == 'Strip 2') {
        mp.events.callRemote("playAnimationEvent",  'mini@strip_club@private_dance@idle', 'priv_dance_idle', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Strip 2");
    } else
    if (item.Text == 'Strip 3') {
        mp.events.callRemote("playAnimationEvent",  'mini@strip_club@private_dance@part1', 'priv_dance_p1', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Strip 3");
    } else
    if (item.Text == 'Strip 4') {
        mp.events.callRemote("playAnimationEvent",  'mini@strip_club@private_dance@part2', 'priv_dance_p2', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Strip 4");
    } else
    if (item.Text == 'Strip 5') {
        mp.events.callRemote("playAnimationEvent",  'mini@strip_club@private_dance@part3', 'priv_dance_p3', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Strip 5");
    } else 
    if (item.Text == 'Strip 6') {
        mp.events.callRemote("playAnimationEvent",  'mp_am_stripper', 'lap_dance_girl', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Strip 6");
    } else
    if (item.Text == 'Ghetto') {
        mp.events.callRemote("playAnimationEvent",  'missfbi3_sniping', 'dance_m_default', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Ghetto");
    } else
    if (item.Text == 'Tao 1') {
        mp.events.callRemote("playAnimationEvent",  'misschinese2_crystalmazemcs1_cs', 'dance_loop_tao', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Tao 1");
    } else
    if (item.Text == 'Tao 2') {
        mp.events.callRemote("playAnimationEvent",  'misschinese2_crystalmazemcs1_ig', 'dance_loop_tao', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Tao 2");
    } else
    if (item.Text == 'Stepptanz 1') {
        mp.events.callRemote("playAnimationEvent",  'special_ped@mountain_dancer@base', 'base', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Stepptanz 1");
    } else
    if (item.Text == 'Po wackeln') {
        mp.events.callRemote("playAnimationEvent",  'switch@trevor@mocks_lapdance', '001443_01_trvs_28_idle_stripper', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Po wackeln");
    } else
    if (item.Text == 'Po wackeln 2') {
        mp.events.callRemote("playAnimationEvent",  'switch@trevor@mocks_lapdance', '001443_01_trvs_28_exit_stripper', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Po wackeln 2");
    } else
    if (item.Text == 'Zumba 1') {
        mp.events.callRemote("playAnimationEvent",  'timetable@tracy@ig_5@idle_a', 'idle_a', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Zumba 1");
    } else
    if (item.Text == 'Zumba 2') {
        mp.events.callRemote("playAnimationEvent",  'timetable@tracy@ig_5@idle_a', 'idle_b', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Zumba 2");
    } else
    if (item.Text == 'Zumba 3') {
        mp.events.callRemote("playAnimationEvent",  'timetable@tracy@ig_5@idle_a', 'idle_c', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Zumba 3");
    } else
    if (item.Text == 'Zumba 4') {
        mp.events.callRemote("playAnimationEvent",  'timetable@tracy@ig_5@idle_b', 'idle_d', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Zumba 4");
    } else 
    if (item.Text == 'Zumba 5') {
        mp.events.callRemote("playAnimationEvent",  'timetable@tracy@ig_5@idle_b', 'idle_e', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Zumba 5");
    } else
    if (item.Text == 'Geiles lied') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_cheering@female_b', 'base', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Geiles lied");
    } else
    if (item.Text == 'Feminines Tanzen') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_jog_standing@female@idle_a', 'idle_a', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Feminines Tanzen");
    } else
    if (item.Text == 'Tanzfaul') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_partying@female@partying_beer@base', 'base', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Tanzfaul");
    } else
    if (item.Text == 'Luftgitarre') {
        mp.events.callRemote("playAnimationEvent",  'anim@mp_player_intcelebrationfemale@air_guitar', 'air_guitar', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Luftgitarre");
    } else
    if (item.Text == 'Banging Tunes') { 
        mp.events.callRemote("playAnimationEvent", 'anim@mp_player_intcelebrationmale@banging_tunes', 'banging_tunes', 1, 47, -1);
        mp.game.graphics.notify("~w~Animation: ~g~Banging Tunes");
    } else
    if (item.Text == 'Onkel Disco') {
        mp.events.callRemote("playAnimationEvent", 'anim@mp_player_intcelebrationmale@uncle_disco', 'uncle_disco', 1, 47, -1);
        mp.game.graphics.notify("~w~Animation: ~g~Onkel Disco");
    } else
    if (item.Text == 'Der Fisch') {
        mp.events.callRemote("playAnimationEvent", 'anim@mp_player_intcelebrationmale@find_the_fish', 'find_the_fish', 1, 47, -1);
        mp.game.graphics.notify("~w~Animation: ~g~Der Fisch");
    } else
    if (item.Text == 'Herzrasen') {
        mp.events.callRemote("playAnimationEvent", 'anim@mp_player_intcelebrationmale@heart_pumping', 'heart_pumping', 1, 47, -1);
        mp.game.graphics.notify("~w~Animation: ~g~Herzrasen");
    } else 
    if (item.Text == 'Snap') {
        mp.events.callRemote("playAnimationEvent", 'anim@mp_player_intcelebrationmale@oh_snap', 'oh_snap', 1, 47, -1);
        mp.game.graphics.notify("~w~Animation: ~g~Snap");
    } else
    if (item.Text == 'Raise') {
        mp.events.callRemote("playAnimationEvent", 'anim@mp_player_intcelebrationmale@raise_the_roof', 'raise_the_roof', 1, 47, -1);
        mp.game.graphics.notify("~w~Animation: ~g~Raise");
    } else
    if (item.Text == 'Salsa') {
        mp.events.callRemote("playAnimationEvent", 'anim@mp_player_intcelebrationmale@salsa_roll', 'salsa_roll', 1, 47, -1);
        mp.game.graphics.notify("~w~Animation: ~g~Salsa");
    } else
    if (item.Text == 'Cats Cradle') {
        mp.events.callRemote("playAnimationEvent", 'anim@mp_player_intcelebrationmale@cats_cradle', 'cats_cradle', 1, 47, -1);
        mp.game.graphics.notify("~w~Animation: ~g~Cats Cradle");
    } 
});


// SPORTANIMS
ui_sportAnims.MenuClose.on(() => {
    ui_sportAnims.RefreshIndex();
});

ui_sportAnims.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Yoga 1') {
        mp.events.callRemote("playAnimationEvent",  'rcmepsilonism3', 'ep_3_rcm_marnie_meditating', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Yoga 1");
    } else
    if (item.Text == 'Yoga 2') {
        mp.events.callRemote("playAnimationEvent",  'rcmepsilonism3', 'base_loop', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Yoga 2");
    } else
    if (item.Text == 'Yoga 3') {
        mp.events.callRemote("playAnimationEvent",  'rcmfanatic1maryann_stretchidle_b', 'idle_e', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Yoga 3");
    } else
    if (item.Text == 'Yoga 4') {
        mp.events.callRemote("playAnimationEvent",  'timetable@amanda@ig_4', 'ig_4_idle', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Yoga 4");
    } else
    if (item.Text == 'Yoga 5') {
        mp.events.callRemote("playAnimationEvent", 'amb@world_human_yoga@female@base', 'base_c', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Yoga 5");
    }
    if (item.Text == 'Liegestütze 1') {
        mp.events.callRemote("playAnimationEvent",  'rcmfanatic3', 'ef_3_rcm_loop_maryann', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Liegestütze 1");
    } else
    if (item.Text == 'Liegestütze 2') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_push_ups@male@base', 'base', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Liegestütze 2");
    } else
    if (item.Text == 'Situps') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_sit_ups@male@base', 'base', 1, 33);
        mp.game.graphics.notify("~w~Animation: ~g~Situps");
    } else
    if (item.Text == 'Flex') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_muscle_flex@arms_at_side@base', 'base', 1, 49);
        mp.game.graphics.notify("~w~Animation: ~g~Flex");
    } else
    if (item.Text == 'Flex 2') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_muscle_flex@arms_in_front@idle_a', 'idle_b', 1, 49);
        mp.game.graphics.notify("~w~Animation: ~g~Flex 2");
    } else
    if (item.Text == 'Klimmzüge') {
        mp.events.callRemote("playAnimationEvent", 'amb@prop_human_muscle_chin_ups@male@base', 'base', 1, 49);
        mp.game.graphics.notify("~w~Animation: ~g~Klimmzüge");
    }
});



// JOBANIMS
ui_jobAnims.MenuClose.on(() => {
    ui_jobAnims.RefreshIndex();
});

ui_jobAnims.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Begutachten') {
        mp.events.callRemote("playAnimationEvent",  'oddjobs@taxi@gyn@', 'idle_b_ped', 1, 33);
    } else
    if (item.Text == 'Reparieren') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_vehicle_mechanic@male@base', 'base', 1, 33);
    } else
    if (item.Text == 'Putzen') {
        mp.events.callRemote("playAnimationEvent",  'timetable@maid@cleaning_window@base', 'base', 1, 33);
    }
});



// OTHERANIMS
ui_otherAnims.MenuClose.on(() => {
    ui_otherAnims.RefreshIndex();
});

ui_otherAnims.ItemSelect.on((item, index, value) => {
    if (item.Text == 'Pfeifen') {
        mp.events.callRemote("playAnimationEvent",  'rcmnigel1c', 'hailing_whistle_waive_a', 1, 49);
    } else
    if (item.Text == 'Ironisches Klatschen') {
        mp.events.callRemote("playAnimationEvent",  'amb@world_human_cheering@male_e', 'base', 1, 49);
    } else
    if (item.Text == 'Peace') {
        mp.events.callRemote("playAnimationEvent",  'anim@mp_player_intincarpeacestd@ds@', 'idle_a', 1, 49);
    } else
    if (item.Text == '2 Bier') {
        mp.events.callRemote("playAnimationEvent",  'amb@code_human_in_car_mp_actions@v_sign@bodhi@rps@base', 'idle_a', 1, 49);
    } else
    if (item.Text == 'Double Peace') {
        mp.events.callRemote("playAnimationEvent",  'anim@mp_player_intcelebrationmale@peace', 'peace', 1, 49);
    } else
    if (item.Text == 'Luftküssen') {
        mp.events.callRemote("playAnimationEvent",  'anim@mp_player_intcelebrationfemale@blow_kiss', 'blow_kiss', 1, 33);
    } else
    if (item.Text == 'Fuck you') {
        mp.events.callRemote("playAnimationEvent",  'anim@mp_player_intselfiethe_bird', 'idle_a', 1, 49);
    } else
    if (item.Text == 'Daumen hoch') {
        mp.events.callRemote("playAnimationEvent",  'anim@mp_player_intupperthumbs_up', 'idle_a', 1, 49);
    } else
    if (item.Text == 'Winken') {
        mp.events.callRemote("playAnimationEvent",  'anim@mp_player_intupperwave', 'idle_a', 1, 49);
    } else
    if (item.Text == 'Facepalm') {
        mp.events.callRemote("playAnimationEvent", 'anim@mp_player_intupperface_palm', 'idle_a', 1, 49, 7000);
    } else
    if (item.Text == 'Ausrasten') {
        mp.events.callRemote("playAnimationEvent", 'anim@mp_player_intcelebrationmale@freakout', 'freakout', 1, 49);
    } else
    if (item.Text == 'Pinkeln') {
        mp.events.callRemote("playAnimationEvent", 'missbigscore1switch_trevor_piss', 'piss_loop', -1, 33);
    } else
    if (item.Text == 'Notieren') {
        mp.events.callRemote("playAnimationEvent", 'amb@world_human_clipboard@male@idle_a', 'idle_c', 1, 49);
    }
});


// BINDINGS
ui_Main.BindMenuToItem(ui_sitAnims, sitzen);
ui_Main.BindMenuToItem(ui_lyingAnims, liegen);
ui_Main.BindMenuToItem(ui_standAnims, stehen);
ui_Main.BindMenuToItem(ui_kneeAnims, knien);
ui_Main.BindMenuToItem(ui_signsAnims, zeichen);
ui_Main.BindMenuToItem(ui_danceAnims, tanzen);
ui_Main.BindMenuToItem(ui_sportAnims, sport);
ui_Main.BindMenuToItem(ui_jobAnims, jobs);
ui_Main.BindMenuToItem(ui_otherAnims, sonstiges);



// KEYBIND
mp.events.add("client:animation:openMenu", (player) => {
    if (ui_Main.Visible | ui_sitAnims.Visible | ui_lyingAnims.Visible |
        ui_standAnims.Visible | ui_kneeAnims.Visible | ui_signsAnims.Visible |
        ui_danceAnims.Visible | ui_sportAnims.Visible | ui_jobAnims.Visible |
        ui_otherAnims.Visible) {
        uiMenu.forEach(function(element, index, array){element.Close()});
        } else {
            ui_Main.Open();
        }
});