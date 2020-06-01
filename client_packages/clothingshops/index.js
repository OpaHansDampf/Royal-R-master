const NativeUI = require("nativeui");
const UIMenu = NativeUI.Menu;
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

// https://wiki.rage.mp/index.php?title=Clothes
const categoryTitles = {
    clothes: {
        1: "Masken",
        2: "Frisuren",
        3: "Torsos",
        4: "Hosen",
        5: "Taschen und Fallschirme",
        6: "Schuhe",
        7: "Accessories",
        8: "Unterhemden",
        9: "Body Armors",
        10: "Decals",
        11: "Oberteile"
    },

    props: {
        0: "Hüte",
        1: "Brillen",
        2: "Ohrschmuck",
        6: "Uhren",
        7: "Armbänder"
    }
};

const localPlayer = mp.players.local;

let mainMenu = null;
let categoryMenus = [];
let clothingData = {};
let currentMenuIdx = -1;
let menuTransition = false; // workaround for ItemSelect event being called twice between menu transitions
let lastClothing = null;

function addClothingItems(type, bannerSprite, key, value) {
    mainMenu.AddItem(new UIMenuItem(categoryTitles[type][key], `${type === "props" ? "Prop Kategorie." : "Kleidungs Kategorie."}`));

    // Create category menu
    const categoryMenu = new UIMenu("", categoryTitles[type][key].toUpperCase(), new Point(0, 0), bannerSprite.library, bannerSprite.texture);
    categoryMenu.Visible = false;

    // Fill it
    const itemDescription = (type === "props" ? "Prop Item." : "Kleidungs Item.");

    for (const item of value) {
        const tempItem = new UIMenuItem(item.name, itemDescription);
        tempItem.SetRightLabel(`${Number.isInteger(item.price) ? `$${item.price}` : "GRATIS"}`);

        categoryMenu.AddItem(tempItem);
    }

    categoryMenus.push({
        menu: categoryMenu,
        type: type,
        slotIdx: Number(key)
    });
}

function submenuItemChangeHandler(newIndex) {
    const currentMenu = categoryMenus[currentMenuIdx];
    const currentItem = clothingData[currentMenu.type][currentMenu.slotIdx][newIndex];

    switch (currentMenu.type) {
        case "clothes":
            if (currentMenu.slotIdx !== 21 || currentMenu.slotIdx !== 22) {
                localPlayer.setComponentVariation(currentMenu.slotIdx, currentItem.drawable, currentItem.texture, 2);
             } else if (currentMenu.slotIdx == 21) {
                 mp.events.callRemote("setHairColor", currentItem.drawable);
             } else if (currentMenu.slotIdx == 22) {
                mp.events.callRemote("setHighlightColor", currentItem.drawable);
             }
            
        break;

        case "props":
            if (currentItem.drawable === -1) {
                localPlayer.clearProp(currentMenu.slotIdx);
            } else {
                localPlayer.setPropIndex(currentMenu.slotIdx, currentItem.drawable, currentItem.texture, true);
            }
        break;
    }
}

function resetPreview() {
    if (lastClothing) {
        switch (lastClothing.type) {
            case "clothes":
                localPlayer.setComponentVariation(lastClothing.slotIdx, lastClothing.drawable, lastClothing.texture, 2);
            break;

            case "props":
                if (lastClothing.drawable === -1) {
                    localPlayer.clearProp(lastClothing.slotIdx);
                } else {
                    localPlayer.setPropIndex(lastClothing.slotIdx, lastClothing.drawable, lastClothing.texture, true);
                }
            break;
        }

        lastClothing = null;
    }
}

mp.events.add("clothesMenu:updateData", (bannerSprite, data) => {
    // Default menu banner
    if (bannerSprite == null) {
        bannerSprite = {
            library: "commonmenu",
            texture: "interaction_bgd"
        };
    }

    // Hide the chat

    // Reset some variables
    categoryMenus = [];
    currentMenuIdx = -1;
    menuTransition = false;
    lastClothing = null;

    // Create a new main menu
    mainMenu = new UIMenu("", "Wähle eine Kategorie aus", new Point(0, 0), bannerSprite.library, bannerSprite.texture);
    mainMenu.Visible = true;

    // Update clothingData
    clothingData = data;

    // Add clothes
    for (const [key, value] of Object.entries(clothingData.clothes)) addClothingItems("clothes", bannerSprite, key, value);

    // Add props
    for (const [key, value] of Object.entries(clothingData.props)) addClothingItems("props", bannerSprite, key, value);
    
    mainMenu.AddItem(new UIMenuItem("Texturen",""));

    // Submenu events
    for (const item of categoryMenus) {
        // Preview hovering item
        item.menu.IndexChange.on(submenuItemChangeHandler);

        // Buy hovering item
        item.menu.ItemSelect.on((selectedItem, itemIndex) => {
            if (menuTransition) {
                menuTransition = false;
                return;
            }

            const currentMenu = categoryMenus[currentMenuIdx];
            const currentItem = clothingData[currentMenu.type][currentMenu.slotIdx][itemIndex];
            mp.events.callRemote("buyClothingItem", currentMenu.type, currentMenu.slotIdx, currentItem.texture, currentItem.drawable, currentItem.name, currentItem.price);
            lastClothing = false;
            mainMenu.Visible = false;
        });
        mainMenu.MenuClose.on(() => {
            mp.events.callRemote("server:playermenu:variable");
          });

        // Reset preview when player backs out of category menu
        item.menu.MenuClose.on(() => {
            resetPreview();

            currentMenuIdx = -1;
            mainMenu.Visible = true;
        });
    }

    // Main menu events
    mainMenu.ItemSelect.on((selectedItem, itemIndex) => {
        if (selectedItem.Text == "Texturen") {
            mp.events.call("client:clothesShop:textures");
            mainMenu.Close();
        } else {
            const nextMenu = categoryMenus[itemIndex];
        const slot = Number(nextMenu.slotIdx);

        lastClothing = {
            type: nextMenu.type,
            slotIdx: slot,
            drawable: (nextMenu.type === "props" ? localPlayer.getPropIndex(slot) : localPlayer.getDrawableVariation(slot)),
            texture: (nextMenu.type === "props" ? localPlayer.getPropTextureIndex(slot) : localPlayer.getTextureVariation(slot))
        };

        currentMenuIdx = itemIndex;
        mainMenu.Visible = false;
        nextMenu.menu.Visible = true;
        menuTransition = true;

        submenuItemChangeHandler(nextMenu.menu.CurrentSelection);
        }
        
    });

    mainMenu.MenuClose.on(() => {

        currentMenuIdx = -1;
        lastClothing = null;
    });
});

mp.events.add("clothesMenu:updateLast", (drawable, texture) => {
    if (lastClothing) {
        lastClothing.drawable = drawable;
        lastClothing.texture = texture;
    }
});

mp.events.add("clothesMenu:close", () => {
    if (currentMenuIdx !== -1) categoryMenus[currentMenuIdx].menu.Close();
    if (mainMenu && mainMenu.Visible) mainMenu.Close();
});

mp.events.add("client:clothesShop:textures",() => {
    const ui_texture = new Menu("Kleidungsladen", "Kaufe deine Kleidung", MenuPoint);
    ui_texture.AddItem( new UIMenuListItem("Oberteile", "", Texture =new ItemsCollection(["0","1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"])));
    ui_texture.AddItem( new UIMenuListItem("Tshirt", "", Texture =new ItemsCollection(["0","1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"])));
    ui_texture.AddItem( new UIMenuListItem("Hosen", "", Texture =new ItemsCollection(["0","1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"])));
    ui_texture.AddItem( new UIMenuListItem("Schuhe", "", Texture =new ItemsCollection(["0","1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"])));
    ui_texture.AddItem( new UIMenuListItem("Hut", "", Texture =new ItemsCollection(["0","1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"])));
    ui_texture.AddItem( new UIMenuListItem("Brille", "", Texture =new ItemsCollection(["0","1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"])));
    ui_texture.AddItem( new UIMenuListItem("Maske", "", Texture =new ItemsCollection(["0","1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"])));
    ui_texture.AddItem( new UIMenuListItem("Accessories", "", Texture =new ItemsCollection(["0","1", "2", "3", "4", "5", "6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30"])));
    ui_texture.AddItem( new UIMenuItem("Schließen", ""));
    ui_texture.Visible = true;
    
    ui_texture.ItemSelect.on((item, index, value) => {
        mp.events.callRemote("server:clothesShop:savetexture");
        ui_texture.Close();
    });
    ui_texture.MenuClose.on( () => {
        mp.events.callRemote("server:clothesShop:savetexture");
    });
    ui_texture.ListChange.on(item => {
        if(item.Text == "Oberteile") {
            mp.events.callRemote("server:clothesShop:setTexture", item.SelectedItem.DisplayText, item.Text);
        } else if(item.Text == "Tshirt") {
            mp.events.callRemote("server:clothesShop:setTexture", item.SelectedItem.DisplayText, item.Text);
        } else if(item.Text == "Hosen") {
            mp.events.callRemote("server:clothesShop:setTexture", item.SelectedItem.DisplayText, item.Text);
        } else if(item.Text == "Schuhe") {
            mp.events.callRemote("server:clothesShop:setTexture", item.SelectedItem.DisplayText, item.Text);
        }else if(item.Text == "Hut") {
            mp.events.callRemote("server:clothesShop:setTexture", item.SelectedItem.DisplayText, item.Text);
        }else if(item.Text == "Brille") {
            mp.events.callRemote("server:clothesShop:setTexture", item.SelectedItem.DisplayText, item.Text);
        }else if(item.Text == "Maske") {
            mp.events.callRemote("server:clothesShop:setTexture", item.SelectedItem.DisplayText, item.Text);
        }else if(item.Text == "Accessories") {
            mp.events.callRemote("server:clothesShop:setTexture", item.SelectedItem.DisplayText, item.Text);
        }
      });
});

mp.events.add("client:clothes:openMainMenu",() => {
    const ui_sub = new Menu("Kleidung", "Bereits gekaufte Kleidung", MenuPoint);
    ui_sub.AddItem( new UIMenuItem("Torsos", ""));
    ui_sub.AddItem( new UIMenuItem("Tops", ""));
    ui_sub.AddItem( new UIMenuItem("Tshirts", ""));
    ui_sub.AddItem( new UIMenuItem("Hosen", ""));
    ui_sub.AddItem( new UIMenuItem("Schuhe", ""));
    ui_sub.AddItem( new UIMenuItem("Hüte", ""));
    ui_sub.AddItem( new UIMenuItem("Brillen", ""));
    ui_sub.AddItem( new UIMenuItem("Masken", ""));
    ui_sub.AddItem( new UIMenuItem("Uhren", ""));
    ui_sub.AddItem( new UIMenuItem("Accessoires", ""));
    ui_sub.AddItem( new UIMenuItem("Armbänder", ""));
    ui_sub.AddItem( new UIMenuItem("Ohren", ""));
    ui_sub.AddItem( new UIMenuItem("Texturen", ""));

    ui_sub.ItemSelect.on((item, index, value) => {
        if (item.Text !== "Texturen") {
          mp.events.callRemote("server:clothes:loadClothes",item.Text);   
          ui_sub.Close();          
        } else {
            mp.events.call("client:clothesShop:textures");
            ui_sub.Close();
        }      
    });
    ui_sub.MenuClose.on(() => {
      mp.events.callRemote("server:playermenu:variable");
    });
});

function buyedMenu(clothJSON){
    // Menu für Kleidung anlegen
    ui_List = new Menu("Kleidung", "Bereits gekaufte Kleidung", MenuPoint);
    ui_List.Visible = true;
    if (clothJSON != "none"){
        clothList = JSON.parse(clothJSON);
        clothList.forEach(cloth => {
          let newItem = new UIMenuItem(""+cloth.name, ""+cloth.id);
          ui_List.AddItem(newItem);
          newItem.SetRightLabel("");
      });
    } else{
      ui_List.AddItem( new UIMenuItem("Du besitzt keine Kleidung!", ""));
    }  
    // Auswertung Menuauswahl ausparken
    ui_List.ItemSelect.on((item, index) => {
        mp.events.callRemote("server:clothes:anziehen", item.Description);
    });
    ui_List.MenuClose.on(() => {
      mp.events.callRemote("server:playermenu:variable");
      mp.events.callRemote("server:clothes:save");
    });
  }
  mp.events.add("client:clothes:buyedMenu", buyedMenu);
