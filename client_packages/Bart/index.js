const Hairdata = require('Bart/hairdata.js')
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
let bartPed = mp.peds.new(mp.game.joaat('s_f_m_fembart'), new mp.Vector3(-812.7738037109375, -183.20370483398438, 37.568931579589844), 120, (streambart) => {}, 0);

// Vars to hold the settings
let price = 0;
let oldHairID = 0;
let oldHairColor= 0;
let oldHairHighlight = 0;
let actualHairID = 0;
let actualHairColor = 0;
let actualHairHightlight = 0;


// GENDER
let currentGender = 0

// ITEM
let bartNames = [];
let bartColors = [];
let bartItem = [];
let bartColorItem;
let bartHighlightItem;
// INDEX

// MAX COLOR
for (let i = 1; i <= Hairdata.maxHaircolor; i++) bartColors.push("" + i);

// MAIN MENU
let ui_Main = new Menu("Bärte", "Bock auf 'nen neuen Bart?", MenuPoint);
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
    bartItem = new UIMenuListItem("Bart", "Wähle deinen Look", new ItemsCollection(bartNames));
    ui_Main.AddItem(bartItem);

    bartColorItem = new UIMenuListItem("Bart Farbe", "Wähle deine Haar Farbe", new ItemsCollection(bartColors));
    ui_Main.AddItem(bartColorItem);

    bartHighlightItem = new UIMenuListItem("Bart Highlight Farbe", "Wähle deine Highlight Farbe.", new ItemsCollection(bartColors));
    ui_Main.AddItem(bartHighlightItem);

    ui_Main.AddItem(reset);

    ui_Main.AddItem(buy);

    mp.events.callRemote("server:bart:SetHair", 0);
    mp.events.callRemote("server:bart:SetColor", 0, 0);
}
fillHairMenu();

mp.events.add("client:bart:OpenMenu", (hairID, color, highlight) => {
    oldHairID = hairID;
    oldHairColor= color;
    oldHairHighlight = highlight;
    bartItem.index = hairID;
    bartColorItem.Index = color;
    bartHighlightItem.Index = highlight;
    ui_Main.Visible = true;
});


// FUNCTION RESET
function resetHairAndColorsMenu(refresh = false) {
    bartItem.index = 0;
    bartColorItem.Index = 0;
    bartHighlightItem.Index = 0;
    if (refresh) ui_Main.RefreshIndex();
}
// HAIRS
ui_Main.ListChange.on((item, listIndex) => {
    if (item == bartItem) {
        let hairStyle = Hairdata.bartList[currentGender][listIndex];
        mp.events.callRemote("server:bart:SetHair", hairStyle.ID);
        actualHairID = hairStyle.ID;
    } else {
        switch (ui_Main.CurrentSelection) {
            case 1: // HAIR COLOR
                // Client Side entfernt mp.players.local.setHairColor(listIndex, bartHighlightItem.Index);
                mp.events.callRemote("server:bart:SetColor", listIndex, bartHighlightItem.Index);
                actualHairColor = listIndex;
                break;
            
            case 2:
                // Client Side entfernt mp.players.local.setHairColor(bartColorItem.Index, listIndex);
                mp.events.callRemote("server:bart:SetColor",listIndex, bartColorItem.Index);
                actualHairHightlight = listIndex;
                break;
        }
    }
    price = 0;
    if (actualHairID !== oldHairID) price += 20;
    if (actualHairColor !== oldHairColor || actualHairHightlight !== oldHairHighlight) price +=30;
    buy.SetRightLabel("" + price +"$");
});



// RESET
ui_Main.ItemSelect.on((item, index) => {
    if (item.Text == 'nicht kaufen') {
        resetHairAndColorsMenu();
        mp.events.callRemote("server:bart:SetHair", oldHairID);
        mp.events.callRemote("server:bart:SetColor", oldHairColor, oldHairHighlight);
        mp.game.graphics.notify("~r~Dir wurden die Haare nicht geschnitten");
        mp.events.call("client:bart:closeMenu");
    } else
    if (item.Text == 'kaufen') {
    mp.events.callRemote("server:bart:save", actualHairID, actualHairColor, actualHairHightlight, price);
    mp.events.call("client:bart:closeMenu");
    }
});

mp.events.add("client:f:closeMenu", () => {
    if (ui_Main && ui_Main.Visible) ui_Main.Close();
});