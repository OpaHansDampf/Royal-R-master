const Hairdata = require('Makeup/hairdata.js')
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

// PED
let bartPed = mp.peds.new(mp.game.joaat('s_f_m_fembart'), new mp.Vector3(134.73683166503906, -1707.9097900390625, 29.291601181030273), 225, (streambart) => {}, 0);

// Vars to hold the settings
let price = 0;
let oldHairID = 0;
let actualHairID = 0;


// GENDER
let currentGender = 0

// ITEM
let bartNames = [];
let bartItem = [];
// INDEX


// MAIN MENU
let ui_Main = new Menu("Makeup", "Bock auf 'nen neuen Style?", MenuPoint);
ui_Main.Visible = false;

// BUTTONS
let reset = new UIMenuItem("nicht kaufen", "");
    reset.BackColor = new Color(138, 0, 0);
    reset.HighlightedBackColor = new Color(189, 189, 189);
let buy = new UIMenuItem("kaufen", "");
    buy.SetRightLabel("0$");
    buy.BackColor = new Color(0, 138, 0);
    buy.HighlightedBackColor = new Color(189, 189, 189);

// FUNCTION HAIRS
function fillHairMenu() {
    bartNames = Hairdata.bartList[currentGender].map(h => h.Name);
    bartItem = new UIMenuListItem("Makeup", "Wähle deinen Look", new ItemsCollection(bartNames));
    ui_Main.AddItem(bartItem);

    ui_Main.AddItem(reset);

    ui_Main.AddItem(buy);

    mp.events.callRemote("server:makeup:SetHair", 0);
    mp.events.callRemote("server:makeup:SetColor", 0, 0);
}
fillHairMenu();

mp.events.add("client:makeup:OpenMenu", (hairID, color, highlight) => {
    oldHairID = hairID;
    bartItem.index = hairID;
    ui_Main.Visible = true;
});


// FUNCTION RESET
function resetHairAndColorsMenu(refresh = false) {
    bartItem.index = 0;
    if (refresh) ui_Main.RefreshIndex();
}
// HAIRS
ui_Main.ListChange.on((item, listIndex) => {
    if (item == bartItem) {
        let hairStyle = Hairdata.bartList[currentGender][listIndex];
        mp.events.callRemote("server:makeup:SetHair", hairStyle.ID);
        actualHairID = hairStyle.ID;
    } else {
        switch (ui_Main.CurrentSelection) {
            
        }
    }
    price = 0;
    if (actualHairID !== oldHairID) price += 50;
    buy.SetRightLabel("" + price +"$");
});



// RESET
ui_Main.ItemSelect.on((item, index) => {
    if (item.Text == 'nicht kaufen') {
        resetHairAndColorsMenu();
        mp.events.callRemote("server:makeup:SetHair", oldHairID);
        mp.events.callRemote("server:makeup:SetColor");
        mp.game.graphics.notify("~r~Du wurdest nicht geschminkt");
        mp.events.call("client:makeup:closeMenu");
    } else
    if (item.Text == 'kaufen') {
    mp.events.callRemote("server:makeup:save", actualHairID, price);
    mp.events.call("client:makeup:closeMenu");
    }
});

mp.events.add("client:f:closeMenu", () => {
    if (ui_Main && ui_Main.Visible) ui_Main.Close();
});