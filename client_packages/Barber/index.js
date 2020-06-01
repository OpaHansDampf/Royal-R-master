const Hairdata = require('Barber/hairdata.js')
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
let barberPed = mp.peds.new(mp.game.joaat('s_f_m_fembarber'), new mp.Vector3(-30.46, -151.82, 57.07), 64, (streamBarber) => {}, 0);

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
let hairItem;
let hairColorItem;
let hairHighlightItem;
let hairColors = [];
let bartNames = [];
let bartColors = [];
let bartItem = [];
// INDEX

// MAX COLOR
for (let i = 1; i <= Hairdata.maxHaircolor; i++) hairColors.push("" + i);

// MAIN MENU
let ui_Main = new Menu("Friseur", "Bock auf 'nen neuen Look?", MenuPoint);
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
    hairNames = Hairdata.hairList[currentGender].map(h => h.Name);
    hairItem = new UIMenuListItem("Haare", "Wähle deinen Look", new ItemsCollection(hairNames));
    ui_Main.AddItem(hairItem);

    /*bartNames = Hairdata.bartList[currentGender].map(h => h.Name);
    bartItem = new UIMenuListItem("Bart", "Wähle deinen Look", new ItemsCollection(bartNames));
    ui_Main.AddItem(bartItem);*/

    hairColorItem = new UIMenuListItem("Haar Farbe", "Wähle deine Haar Farbe", new ItemsCollection(hairColors));
    ui_Main.AddItem(hairColorItem);

    hairHighlightItem = new UIMenuListItem("Haar Highlight Farbe", "Wähle deine Highlight Farbe.", new ItemsCollection(hairColors));
    ui_Main.AddItem(hairHighlightItem);

    ui_Main.AddItem(reset);

    ui_Main.AddItem(buy);

    mp.events.callRemote("server:Barber:SetHair", 0);
    mp.events.callRemote("server:Barber:SetColor", 0, 0);
}
fillHairMenu();

mp.events.add("client:Barber:OpenMenu", (hairID, color, highlight) => {
    oldHairID = hairID;
    oldHairColor= color;
    oldHairHighlight = highlight;
    hairItem.index = hairID;
    hairColorItem.Index = color;
    hairHighlightItem.Index = highlight;
    ui_Main.Visible = true;
});


// FUNCTION RESET
function resetHairAndColorsMenu(refresh = false) {
    hairItem.index = 0;
    hairColorItem.Index = 0;
    hairHighlightItem.Index = 0;
    if (refresh) ui_Main.RefreshIndex();
}
// HAIRS
ui_Main.ListChange.on((item, listIndex) => {
    if (item == hairItem || item == bartItem) {
        let hairStyle = Hairdata.hairList[currentGender][listIndex];
        mp.events.callRemote("server:Barber:SetHair", hairStyle.ID,item.Text);
        actualHairID = hairStyle.ID;
    } else {
        switch (ui_Main.CurrentSelection) {
            case 1: // HAIR COLOR
                // Client Side entfernt mp.players.local.setHairColor(listIndex, hairHighlightItem.Index);
                mp.events.callRemote("server:Barber:SetColor", listIndex, hairHighlightItem.Index);
                actualHairColor = listIndex;
                break;
            
            case 2:
                // Client Side entfernt mp.players.local.setHairColor(hairColorItem.Index, listIndex);
                mp.events.callRemote("server:Barber:SetColor", hairColorItem.Index, listIndex);
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
        mp.events.callRemote("server:Barber:SetHair", oldHairID);
        mp.events.callRemote("server:Barber:SetColor", oldHairColor, oldHairHighlight);
        mp.game.graphics.notify("~r~Dir wurden die Haare nicht geschnitten");
        mp.events.call("client:Barber:closeMenu");
    } else
    if (item.Text == 'kaufen') {
    mp.events.callRemote("server:Barber:save", actualHairID, actualHairColor, actualHairHightlight, price);
    mp.events.call("client:Barber:closeMenu");
    }
});

mp.events.add("client:Barber:closeMenu", () => {
    if (ui_Main && ui_Main.Visible) ui_Main.Close();
});