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

let uiMenu = []
let uiTuningWheels = []
const MenuPoint = new Point(50, 50);

// MAIN MENU
let ui_Main = new Menu("Tuning", "Tuning Teile", MenuPoint);
ui_Main.AddItem(primarycolor = new UIMenuItem("Primärfarben", "Auswahl an Primärfarben"));
ui_Main.AddItem(secondarycolor = new UIMenuItem("Sekundärfarbe", "Auswahl an Sekundärfarben"));
ui_Main.AddItem(pearlescentcolor = new UIMenuItem("Perlglanz", "Auswahl an Perlglanzfarben"));
ui_Main.AddItem(wheels = new UIMenuItem("Felgen", "Auswahl an Felgen"));
//ui_Main.AddItem(neon = new UIMenuItem("R", "Neon ein/ausbauen"));
ui_Main.AddItem(neoncolor = new UIMenuItem("Reifenfarbe", "Auswahl an Reifenfarben"));
ui_Main.AddItem(wheelcolor = new UIMenuItem("Felgenfarben", "Auswahl an Felgenfarben"));
ui_Main.AddItem(windowtint = new UIMenuItem("Scheibentönung", "Auswahl an Scheibentönungen"));
ui_Main.AddItem(design = new UIMenuItem("Design", "Auswahl an Designfolien"));
ui_Main.AddItem(spoiler = new UIMenuItem("Spoiler", "Auswahl an Spoilern"));
ui_Main.AddItem(hood = new UIMenuItem("Motorhauben", "Auswahl an Motorhauben"));
ui_Main.AddItem(frontbumper = new UIMenuItem("Frontstoßstangen", "Auswahl an Frontstoßstangen"));
ui_Main.AddItem(rearbumper = new UIMenuItem("Heckstoßstangen", "Auswahl an Heckstoßstangen"));
ui_Main.AddItem(sideskirt = new UIMenuItem("Seitenschürzen", "Auswahl an Seitenschürzen"));
ui_Main.AddItem(exhaust = new UIMenuItem("Auspuffe", "Auswahl an Auspuffen"));
ui_Main.AddItem(fenders = new UIMenuItem("Kotflügel", "Auswahl an Kotflügeln"));
ui_Main.AddItem(roof = new UIMenuItem("Dach", "Auswahl an Dächern"));
ui_Main.AddItem(engine = new UIMenuItem("Motor", "Auswahl an Motoren"));
ui_Main.AddItem(breaks = new UIMenuItem("Bremsen", "Auswahl an Bremsen"));
ui_Main.AddItem(transmission = new UIMenuItem("Getriebe", "Auswahl an Getrieben"));
ui_Main.AddItem(turbo = new UIMenuItem("Turbo", "Turbo ein/ausbauen"));
ui_Main.AddItem(suspension = new UIMenuItem("Federung", "Auswahl an Federungen"));
ui_Main.AddItem(frames = new UIMenuItem("Rahmen", "Auswahl an Rahmen"));
ui_Main.AddItem(grills = new UIMenuItem("Gitter", "Auswahl an Gittern"));
ui_Main.AddItem(lights = new UIMenuItem("Scheinwerfer", "Xenon ein/ausbauen"));
ui_Main.AddItem(schloss = new UIMenuItem("Schloss austauschen", "Wechselt dass Schloss aus"));
// VISIBILITY
ui_Main.Visible = false;
uiMenu.push(ui_Main);

// PRIMARY
const ui_Primarycolor = new Menu("Primärfarben", "Primärfarben", MenuPoint);
    ui_Primarycolor.AddItem(new UIMenuItem("Auswählen", ""));
    ui_Primarycolor.AddItem(new UIMenuItem("Schwarz", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Graphit", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Schwarzstahl", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Dunkelsilber", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Silber", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Blausilber", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Graustahl", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Schattensilber", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Steinsilber", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Mitternachtssilber", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Gunmetal", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Anthrazit", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Rot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Torinorot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Formularot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Blazerot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Anmutigesrot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Granatrot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Wüstenrot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Cabernet rot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Bonbon rot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Hellrot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Goldenes rot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Lavarot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Orange", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Orange 2", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Sunrise Orange", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Hellorange", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Dunkelgrün", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Grünstich", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Renngrün", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Meeresgrün", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Olivengrün", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Jägergrün", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Waldgrün", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Laubgrün", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Olivegrün", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Grün", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Grün 2", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Blaugrün", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Limettengrün", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Dunkelgrün 2", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Mitternachtsblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Dunkelblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Sächsischblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Blau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Blau 2", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Marineblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Hafenblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Diamantblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Surferblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Nautischblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Hellblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Violettblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Spinnakerblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Ultrablau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Hellblau 2", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Meerschaumblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Blitzblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Mauiblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Polizei Blau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Epsilonblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Taxigelb", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Renngelb", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Vogelgelb", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Bronze", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Citrusgelb", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Champagnier", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Beige", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Elfenbein", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Schokobraun", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Goldbraun", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Hellbraun", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Strohbeige", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Moosbraun", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Bostonbraun", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Wüstenbraun", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Wüstenbräune", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Buchenholz", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Dunkles Buchenholz", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Schoko Orange", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Sandfarbend", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Sonnengebleicht", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Cremefarbend", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Honigbeige", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Weiß", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Frostweiß", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Grauweiß", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Reines Weiß", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Heißes Pink", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Lachsrosa", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Vermillion Pink", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Schwarzlila", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Schwarzblau", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Schwarzrot", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Lila", "Kaufen für ~g~$1.250,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Schwarz", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Schwarz 2", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Silber", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Silber 2", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Gun Metal", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Schattensilber", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Rot", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Granatrot", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Grün", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Dunkelblau", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Mitternachtsblau", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Blau", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Hellblau", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Braun", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Mittelbraun", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Metallic Hellbraun", "Kaufen für ~g~$1.900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Schwarz", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Schwarz 2", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Grau", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Hellgrau", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Graphit", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Silbergrau", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Silber", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Blausilber", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Schattensilber", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Rot", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Dunkelrot", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Orange", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Gelb", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Blau", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Mitternachtsblau", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Grün", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Braun", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Weiß", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Lila", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Matt Dunkellila", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes rot", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Dunkelrot", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Grün", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Meeresgrün", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Dunkelblau", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Blau", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Hellblau", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Braun", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Strohbeige", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Orange", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Orange 2", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Taxigelb", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Weiß", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Abgenutztes Armeegrün", "Kaufen für ~g~$3.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Gebürsteter Stahl", "Kaufen für ~g~$900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Gebürsteter Schwarzstahl", "Kaufen für ~g~$900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Gebürstetes Aluminium", "Kaufen für ~g~$900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Gebürstetes Gold", "Kaufen für ~g~$900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Legierung", "Kaufen für ~g~$900,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Klassisches Gold", "Kaufen für ~g~$20.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Pures Gold", "Kaufen für ~g~$20.000,00"));
    ui_Primarycolor.AddItem(new UIMenuItem("Chrome", "Kaufen für ~g~$12.000,00"));
// VISIBILITY
ui_Primarycolor.Visible = false;
uiMenu.push(ui_Primarycolor);


// SECONDARY
const ui_Secondarycolor = new Menu("Sekundärfarben", "Sekundärfarben", MenuPoint);
    ui_Secondarycolor.AddItem(new UIMenuItem("Auswählen", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Schwarz", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Graphit", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Schwarzstahl", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Dunkelsilber", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Silber", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Blausilber", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Graustahl", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Schattensilber", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Steinsilber", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Mitternachtssilber", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Gunmetal", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Anthrazit", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Rot", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Torinorot", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Formularot", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Blazerot", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Anmutigesrot", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Granatrot", "~g~$1.250,00"));
    ui_Secondarycolor.AddItem(new UIMenuItem("Wüstenrot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Cabernet rot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Bonbon rot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Hellrot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Goldenes rot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Lavarot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Orange", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Orange 2", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Sunrise Orange", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Hellorange", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Dunkelgrün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Grünstich", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Renngrün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Meeresgrün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Olivengrün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Jägergrün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Waldgrün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Laubgrün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Olivegrün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Grün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Grün 2", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Blaugrün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Limettengrün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Dunkelgrün 2", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Mitternachtsblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Dunkelblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Sächsischblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Blau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Blau 2", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Marineblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Hafenblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Diamantblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Surferblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Nautischblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Hellblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Violettblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Spinnakerblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Ultrablau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Hellblau 2", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Meerschaumblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Blitzblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Mauiblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Polizei Blau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Epsilonblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Taxigelb", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Renngelb", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Vogelgelb", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Bronze", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Citrusgelb", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Champagnier", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Beige", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Elfenbein", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Schokobraun", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Goldbraun", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Hellbraun", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Strohbeige", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Moosbraun", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Bostonbraun", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Wüstenbraun", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Wüstenbräune", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Buchenholz", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Dunkles Buchenholz", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Schoko Orange", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Sandfarbend", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Sonnengebleicht", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Cremefarbend", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Honigbeige", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Weiß", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Frostweiß", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Grauweiß", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Reines Weiß", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Heißes Pink", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Lachsrosa", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Vermillion Pink", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Schwarzlila", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Schwarzblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Schwarzrot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Lila", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Schwarz", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Schwarz 2", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Silber", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Silber 2", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Gun Metal", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Schattensilber", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Rot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Granatrot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Grün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Dunkelblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Mitternachtsblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Blau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Hellblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Braun", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Mittelbraun", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Metallic Hellbraun", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Schwarz", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Schwarz 2", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Grau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Hellgrau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Graphit", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Silbergrau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Silber", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Blausilber", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Schattensilber", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Rot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Dunkelrot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Orange", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Gelb", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Blau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Mitternachtsblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Grün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Braun", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Weiß", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Lila", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Matt Dunkellila", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes rot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Dunkelrot", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Grün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Meeresgrün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Dunkelblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Blau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Hellblau", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Braun", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Strohbeige", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Orange", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Orange 2", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Taxigelb", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Weiß", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Abgenutztes Armeegrün", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Gebürsteter Stahl", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Gebürsteter Schwarzstahl", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Gebürstetes Aluminium", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Gebürstetes Gold", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Legierung", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Klassisches Gold", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Pures Gold", ""));
    ui_Secondarycolor.AddItem(new UIMenuItem("Chrome", ""));
// VISIBILITY SECONDARY
ui_Secondarycolor.Visible = false;
uiMenu.push(ui_Secondarycolor);

/*const ui_Pearl = new Menu("Perlglanz", "Perlglanz", MenuPoint);
    ui_Pearl.AddItem(new UIMenuItem("Auswählen", ""));
    ui_Pearl.AddItem(new UIMenuItem("Schwarz", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Graphit", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Schwarzstahl", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Dunkelsilber", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Silber", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Blausilber", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Graustahl", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Schattensilber", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Steinsilber", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Mitternachtssilber", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Gunmetal", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Anthrazit", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Rot", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Torinorot", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Formularot", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Blazerot", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Anmutigesrot", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Granatrot", "~g~$1.250,00"));
    ui_Pearl.AddItem(new UIMenuItem("Wüstenrot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Cabernet rot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Bonbon rot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Hellrot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Goldenes rot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Lavarot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Orange", ""));
    ui_Pearl.AddItem(new UIMenuItem("Orange 2", ""));
    ui_Pearl.AddItem(new UIMenuItem("Sunrise Orange", ""));
    ui_Pearl.AddItem(new UIMenuItem("Hellorange", ""));
    ui_Pearl.AddItem(new UIMenuItem("Dunkelgrün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Grünstich", ""));
    ui_Pearl.AddItem(new UIMenuItem("Renngrün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Meeresgrün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Olivengrün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Jägergrün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Waldgrün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Laubgrün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Olivegrün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Grün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Grün 2", ""));
    ui_Pearl.AddItem(new UIMenuItem("Blaugrün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Limettengrün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Dunkelgrün 2", ""));
    ui_Pearl.AddItem(new UIMenuItem("Mitternachtsblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Dunkelblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Sächsischblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Blau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Blau 2", ""));
    ui_Pearl.AddItem(new UIMenuItem("Marineblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Hafenblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Diamantblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Surferblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Nautischblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Hellblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Violettblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Spinnakerblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Ultrablau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Hellblau 2", ""));
    ui_Pearl.AddItem(new UIMenuItem("Meerschaumblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Blitzblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Mauiblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Polizei Blau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Epsilonblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Taxigelb", ""));
    ui_Pearl.AddItem(new UIMenuItem("Renngelb", ""));
    ui_Pearl.AddItem(new UIMenuItem("Vogelgelb", ""));
    ui_Pearl.AddItem(new UIMenuItem("Bronze", ""));
    ui_Pearl.AddItem(new UIMenuItem("Citrusgelb", ""));
    ui_Pearl.AddItem(new UIMenuItem("Champagnier", ""));
    ui_Pearl.AddItem(new UIMenuItem("Beige", ""));
    ui_Pearl.AddItem(new UIMenuItem("Elfenbein", ""));
    ui_Pearl.AddItem(new UIMenuItem("Schokobraun", ""));
    ui_Pearl.AddItem(new UIMenuItem("Goldbraun", ""));
    ui_Pearl.AddItem(new UIMenuItem("Hellbraun", ""));
    ui_Pearl.AddItem(new UIMenuItem("Strohbeige", ""));
    ui_Pearl.AddItem(new UIMenuItem("Moosbraun", ""));
    ui_Pearl.AddItem(new UIMenuItem("Bostonbraun", ""));
    ui_Pearl.AddItem(new UIMenuItem("Wüstenbraun", ""));
    ui_Pearl.AddItem(new UIMenuItem("Wüstenbräune", ""));
    ui_Pearl.AddItem(new UIMenuItem("Buchenholz", ""));
    ui_Pearl.AddItem(new UIMenuItem("Dunkles Buchenholz", ""));
    ui_Pearl.AddItem(new UIMenuItem("Schoko Orange", ""));
    ui_Pearl.AddItem(new UIMenuItem("Sandfarbend", ""));
    ui_Pearl.AddItem(new UIMenuItem("Sonnengebleicht", ""));
    ui_Pearl.AddItem(new UIMenuItem("Cremefarbend", ""));
    ui_Pearl.AddItem(new UIMenuItem("Honigbeige", ""));
    ui_Pearl.AddItem(new UIMenuItem("Weiß", ""));
    ui_Pearl.AddItem(new UIMenuItem("Frostweiß", ""));
    ui_Pearl.AddItem(new UIMenuItem("Grauweiß", ""));
    ui_Pearl.AddItem(new UIMenuItem("Reines Weiß", ""));
    ui_Pearl.AddItem(new UIMenuItem("Heißes Pink", ""));
    ui_Pearl.AddItem(new UIMenuItem("Lachsrosa", ""));
    ui_Pearl.AddItem(new UIMenuItem("Vermillion Pink", ""));
    ui_Pearl.AddItem(new UIMenuItem("Schwarzlila", ""));
    ui_Pearl.AddItem(new UIMenuItem("Schwarzblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Schwarzrot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Lila", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Schwarz", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Schwarz 2", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Silber", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Silber 2", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Gun Metal", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Schattensilber", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Rot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Granatrot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Grün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Dunkelblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Mitternachtsblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Blau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Hellblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Braun", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Mittelbraun", ""));
    ui_Pearl.AddItem(new UIMenuItem("Metallic Hellbraun", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Schwarz", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Schwarz 2", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Grau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Hellgrau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Graphit", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Silbergrau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Silber", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Blausilber", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Schattensilber", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Rot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Dunkelrot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Orange", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Gelb", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Blau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Mitternachtsblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Grün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Braun", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Weiß", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Lila", ""));
    ui_Pearl.AddItem(new UIMenuItem("Matt Dunkellila", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes rot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Dunkelrot", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Grün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Meeresgrün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Dunkelblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Blau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Hellblau", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Braun", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Strohbeige", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Orange", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Orange 2", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Taxigelb", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Weiß", ""));
    ui_Pearl.AddItem(new UIMenuItem("Abgenutztes Armeegrün", ""));
    ui_Pearl.AddItem(new UIMenuItem("Gebürsteter Stahl", ""));
    ui_Pearl.AddItem(new UIMenuItem("Gebürsteter Schwarzstahl", ""));
    ui_Pearl.AddItem(new UIMenuItem("Gebürstetes Aluminium", ""));
    ui_Pearl.AddItem(new UIMenuItem("Gebürstetes Gold", ""));
    ui_Pearl.AddItem(new UIMenuItem("Legierung", ""));
    ui_Pearl.AddItem(new UIMenuItem("Klassisches Gold", ""));
    ui_Pearl.AddItem(new UIMenuItem("Pures Gold", ""));
    ui_Pearl.AddItem(new UIMenuItem("Chrome", ""));
// VISIBILITY PEARL
ui_Pearl.Visible = false;
uiMenu.push(ui_Pearl);*/


// WHEELS
const ui_Tuning_Wheels = new Menu("Felgen", "Felgen", MenuPoint);
ui_Tuning_Wheels.AddItem(new UIMenuItem("Auswählen", ""));
ui_Tuning_Wheels.AddItem(sports = new UIMenuItem("Sport Felgen", "Sportlich."));
ui_Tuning_Wheels.AddItem(muscle = new UIMenuItem("Musclecar Felgen", "Für die harten."));
ui_Tuning_Wheels.AddItem(lowrider = new UIMenuItem("Lowrider Felgen", "Think low!"));
ui_Tuning_Wheels.AddItem(suv = new UIMenuItem("SUV Felgen", "Groß muss es sein."));
ui_Tuning_Wheels.AddItem(offroad = new UIMenuItem("Offroad Felgen", "Für hartes Terrain."));
ui_Tuning_Wheels.AddItem(tuning = new UIMenuItem("Tuning Felgen", "Für die extra Coolen."));
ui_Tuning_Wheels.AddItem(highend = new UIMenuItem("Highend Felgen", "Genug Geld?"));
ui_Tuning_Wheels.AddItem(bennys1 = new UIMenuItem("Bennys Originals", "Der look, der jedem gefällt."));
ui_Tuning_Wheels.AddItem(bennys2 = new UIMenuItem("Bennys Bespoke", "Glanz und Glamour."));
// VISIBILITY WHEELS
ui_Tuning_Wheels.Visible = false;
uiMenu.push(ui_Tuning_Wheels);

const ui_Tuning_Sportwheels = new Menu("Felgen", "Soll's sportlich sein?.", MenuPoint);
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Auswählen", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Standard Felge", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 1", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 2", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 3", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 4", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 5", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 6", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 7", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 8", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 9", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 10", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 11", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 12", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 13", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 14", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 15", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 16", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 17", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 18", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 19", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 20", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 21", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 22", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 23", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 24", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 25", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 26", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 27", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 28", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 29", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 30", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 31", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 32", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 33", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 34", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 35", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 36", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 37", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 38", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 39", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 40", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 41", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 42", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 43", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 44", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 45", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 46", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 47", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 48", ""));
	ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 49", ""));
    ui_Tuning_Sportwheels.AddItem(new UIMenuItem("Felge 50", ""));
    // VISIBILITY 
ui_Tuning_Sportwheels.Visible = false;
uiTuningWheels.push(ui_Tuning_Sportwheels);


const ui_Tuning_Musclewheels = new Menu("Felgen", "Für die harten.", MenuPoint);
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Auswählen", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Standard Felge", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 1", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 2", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 3", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 4", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 5", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 6", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 7", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 8", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 9", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 10", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 11", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 12", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 13", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 14", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 15", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 16", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 17", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 18", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 19", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 20", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 21", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 22", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 23", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 24", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 25", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 26", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 27", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 28", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 29", ""));
    ui_Tuning_Musclewheels.AddItem(new UIMenuItem("Felge 30", ""));
ui_Tuning_Musclewheels.Visible = false;
uiTuningWheels.push(ui_Tuning_Musclewheels);


const ui_Tuning_Lowrider = new Menu("Felgen", "Think Low!", MenuPoint);
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Auswählen", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Standard Felge", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 1", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 2", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 3", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 4", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 5", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 6", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 7", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 8", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 9", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 10", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 11", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 12", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 13", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 14", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 15", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 16", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 17", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 18", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 19", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 20", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 21", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 22", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 23", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 24", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 25", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 26", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 27", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 28", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 29", ""));
	ui_Tuning_Lowrider.AddItem(new UIMenuItem("Felge 30", ""));
ui_Tuning_Lowrider.Visible = false;
uiTuningWheels.push(ui_Tuning_Lowrider);


const ui_Tuning_Suv = new Menu("Felgen", "Groß muss es sein.", MenuPoint);
	ui_Tuning_Suv.AddItem(new UIMenuItem("Auswählen", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Standard Felge", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 1", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 2", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 3", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 4", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 5", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 6", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 7", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 8", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 9", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 10", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 11", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 12", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 13", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 14", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 15", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 16", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 17", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 18", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 19", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 20", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 21", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 22", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 23", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 24", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 25", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 26", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 27", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 28", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 29", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 30", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 31", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 32", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 33", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 34", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 35", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 36", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 37", ""));
	ui_Tuning_Suv.AddItem(new UIMenuItem("Felge 38", ""));
ui_Tuning_Suv.Visible = false;
uiTuningWheels.push(ui_Tuning_Suv);


const ui_Tuning_Offroad = new Menu("Felgen", "Für hartes Terrain", MenuPoint);
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Standard Felge" , ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 1", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 2", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 3", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 4", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 5", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 6", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 7", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 8", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 9", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 10", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 11", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 12", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 13", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 14", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 15", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 16", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 17", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 18", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 19", ""));
    ui_Tuning_Offroad.AddItem(new UIMenuItem("Felge 20", ""));
ui_Tuning_Offroad.Visible = false;
uiTuningWheels.push(ui_Tuning_Offroad);


const ui_Tuning_Tuner = new Menu("Felgen", "Für die extra Coolen", MenuPoint);
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Auswählen", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Standard Felge", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 1", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 2", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 3", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 4", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 5", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 6", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 7", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 8", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 9", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 10", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 11", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 12", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 13", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 14", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 15", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 16", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 17", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 18", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 19", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 20", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 21", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 22", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 23", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 24", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 25", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 26", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 27", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 28", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 29", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 30", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 31", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 32", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 33", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 34", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 35", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 36", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 37", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 38", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 39", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 40", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 41", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 42", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 43", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 44", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 45", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 46", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 47", ""));
    ui_Tuning_Tuner.AddItem(new UIMenuItem("Felge 48", ""));
ui_Tuning_Tuner.Visible = false;
uiTuningWheels.push(ui_Tuning_Tuner);


const ui_Tuning_Highend = new Menu("Felgen", "Genug Geld?", MenuPoint);
	ui_Tuning_Highend.AddItem(new UIMenuItem("Auswählen", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Standard Felge", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 1", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 2", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 3", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 4", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 5", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 6", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 7", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 8", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 9", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 10", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 11", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 12", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 13", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 14", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 15", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 16", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 17", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 18", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 19", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 20", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 21", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 22", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 23", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 24", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 25", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 26", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 27", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 28", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 29", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 30", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 31", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 32", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 33", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 33", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 34", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 35", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 36", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 37", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 38", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 39", ""));
	ui_Tuning_Highend.AddItem(new UIMenuItem("Felge 40", ""));
ui_Tuning_Highend.Visible = false;
uiTuningWheels.push(ui_Tuning_Highend);


const ui_Tuning_Bennys1 = new Menu("Felgen", "Der look, der jedem gefällt", MenuPoint);
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Auswählen", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Standard Felge", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 1", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 2", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 3", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 4", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 5", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 6", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 7", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 8", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 9", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 10", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 11", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 12", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 13", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 14", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 15", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 16", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 17", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 18", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 19", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 20", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 21", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 22", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 23", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 24", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 25", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 26", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 27", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 28", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 29", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 30", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 31", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 32", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 33", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 34", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 35", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 35", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 36", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 37", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 38", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 39", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 40", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 41", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 42", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 43", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 43", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 44", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 45", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 46", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 47", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 48", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 49", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 50", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 51", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 52", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 53", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 54", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 55", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 56", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 57", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 58", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 59", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 60", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 61", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 62", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 63", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 64", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 65", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 66", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 67", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 68", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 69", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 70", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 71", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 72", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 73", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 74", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 75", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 76", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 77", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 78", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 79", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 80", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 81", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 82", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 83", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 84", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 85", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 86", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 87", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 88", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 89", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 90", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 91", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 92", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 93", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 94", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 95", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 96", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 97", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 98", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 99", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 100", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 101", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 102", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 103", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 104", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 105", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 106", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 107", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 108", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 109", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 110", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 111", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 112", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 113", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 114", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 115", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 116", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 117", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 118", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 119", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 120", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 121", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 122", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 123", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 124", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 125", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 126", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 127", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 128", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 129", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 130", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 131", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 132", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 133", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 134", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 135", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 136", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 137", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 138", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 139", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 140", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 141", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 142", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 143", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 145", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 146", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 147", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 148", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 149", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 150", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 151", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 152", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 153", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 154", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 155", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 156", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 157", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 158", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 159", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 160", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 161", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 162", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 163", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 164", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 165", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 166", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 167", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 168", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 169", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 170", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 171", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 172", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 173", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 174", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 175", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 176", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 177", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 178", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 179", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 180", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 181", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 182", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 183", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 184", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 185", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 186", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 187", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 188", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 189", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 190", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 191", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 192", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 193", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 194", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 195", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 196", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 197", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 198", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 199", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 200", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 201", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 202", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 203", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 204", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 205", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 206", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 207", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 208", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 209", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 210", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 211", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 212", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 213", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 214", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 215", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 216", ""));
	ui_Tuning_Bennys1.AddItem(new UIMenuItem("Felge 217", ""));
ui_Tuning_Bennys1.Visible = false;
uiTuningWheels.push(ui_Tuning_Bennys1);


const ui_Tuning_Bennys2 = new Menu("Felgen", "Glanz und Glamour", MenuPoint);
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Auswählen", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Standard Felge", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 1", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 2", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 3", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 4", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 5", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 6", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 7", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 8", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 9", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 10", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 11", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 12", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 13", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 14", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 15", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 16", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 17", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 18", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 19", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 20", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 21", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 22", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 23", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 24", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 25", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 26", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 27", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 28", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 29", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 30", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 31", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 32", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 33", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 34", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 35", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 36", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 37", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 38", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 39", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 40", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 41", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 42", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 43", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 44", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 45", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 46", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 47", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 48", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 49", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 50", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 51", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 52", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 53", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 54", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 55", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 56", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 57", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 58", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 59", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 60", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 61", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 62", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 63", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 64", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 65", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 66", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 67", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 68", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 69", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 70", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 71", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 72", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 73", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 74", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 75", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 76", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 77", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 78", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 79", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 80", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 81", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 82", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 83", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 84", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 85", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 86", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 87", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 88", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 89", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 90", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 91", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 92", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 93", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 94", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 95", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 96", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 97", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 98", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 99", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 100", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 101", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 102", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 103", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 104", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 105", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 106", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 107", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 108", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 109", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 110", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 111", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 112", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 113", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 114", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 115", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 116", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 117", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 118", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 119", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 120", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 121", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 122", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 123", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 124", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 125", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 126", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 127", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 128", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 129", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 130", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 131", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 132", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 133", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 134", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 135", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 136", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 137", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 138", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 139", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 140", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 141", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 142", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 143", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 144", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 145", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 146", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 147", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 148", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 149", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 150", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 151", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 152", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 153", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 154", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 155", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 156", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 157", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 158", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 159", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 160", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 161", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 162", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 163", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 164", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 165", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 166", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 167", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 168", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 169", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 170", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 171", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 172", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 173", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 174", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 175", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 176", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 177", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 178", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 179", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 180", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 181", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 182", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 183", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 184", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 185", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 186", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 187", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 188", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 189", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 190", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 191", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 192", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 193", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 194", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 195", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 196", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 197", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 198", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 199", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 200", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 201", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 202", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 203", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 204", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 205", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 206", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 207", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 208", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 209", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 210", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 211", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 212", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 213", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 214", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 215", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 216", ""));
	ui_Tuning_Bennys2.AddItem(new UIMenuItem("Felge 217", ""));
ui_Tuning_Bennys2.Visible = false;
uiTuningWheels.push(ui_Tuning_Bennys2);


const ui_Wheelcolor = new Menu("Felgenfarbe", "Felgenfarbe", MenuPoint);
ui_Wheelcolor.AddItem(new UIMenuItem("Auswählen", ""));
ui_Wheelcolor.AddItem(new UIMenuItem("Metallic Schwarz", ""));
ui_Wheelcolor.AddItem(new UIMenuItem("Metallic Weiß", ""));
ui_Wheelcolor.AddItem(new UIMenuItem("Metallic Blau", ""));
ui_Wheelcolor.AddItem(new UIMenuItem("Metallic Grün", ""));
ui_Wheelcolor.AddItem(new UIMenuItem("Metallic Gelb", ""));
ui_Wheelcolor.AddItem(new UIMenuItem("Metallic Rot", ""));
ui_Wheelcolor.AddItem(new UIMenuItem("Metallic Lila", ""));
// VISIBILITY WHEELCOLOR
ui_Wheelcolor.Visible = false;
uiMenu.push(ui_Wheelcolor);


const ui_Windowtint = new Menu("Scheibentönung", "Scheibentönung", MenuPoint);
ui_Windowtint.AddItem(new UIMenuItem("Auswählen", ""));
ui_Windowtint.AddItem(new UIMenuItem("Standard Tönung", ""));
ui_Windowtint.AddItem(new UIMenuItem("Leichte Tönung", ""));
ui_Windowtint.AddItem(new UIMenuItem("Mittlere Tönung", ""));
ui_Windowtint.AddItem(new UIMenuItem("Starke Tönung", ""));
// VISIBILITY WINDOWTINT
ui_Windowtint.Visible = false;
uiMenu.push(ui_Windowtint);


const ui_Design = new Menu("Designfolien", "Designfolien", MenuPoint);
ui_Design.AddItem(new UIMenuItem("Auswählen", ""));
ui_Design.AddItem(new UIMenuItem("Kein Design", ""));
ui_Design.AddItem(new UIMenuItem("Design 1", ""));
ui_Design.AddItem(new UIMenuItem("Design 2", ""));
ui_Design.AddItem(new UIMenuItem("Design 3", ""));
ui_Design.AddItem(new UIMenuItem("Design 4", ""));
ui_Design.AddItem(new UIMenuItem("Design 5", ""));
ui_Design.AddItem(new UIMenuItem("Design 6", ""));
ui_Design.AddItem(new UIMenuItem("Design 7", ""));
ui_Design.AddItem(new UIMenuItem("Design 8", ""));
ui_Design.AddItem(new UIMenuItem("Design 9", ""));
ui_Design.AddItem(new UIMenuItem("Design 10", ""));
// VISIBILITY DESIGN
ui_Design.Visible = false;
uiMenu.push(ui_Design);


/*const ui_Neon = new Menu("", "Neon", MenuPoint, "shopui_title_supermod", "shopui_title_supermod");
ui_Neon.AddItem(new UIMenuItem("Auswählen", ""));
ui_Neon.AddItem(new UIMenuItem("Neon ausbauen", ""));
ui_Neon.AddItem(new UIMenuItem("Neon einbauen", ""));
// VISIBILITY NEON
ui_Neon.Visible = false;
uiMenu.push(ui_Neon);*/


const ui_Neoncolor = new Menu("", "Reifenrauch", MenuPoint, "shopui_title_supermod", "shopui_title_supermod");
ui_Neoncolor.AddItem(new UIMenuItem("Auswählen", ""));
ui_Neoncolor.AddItem(new UIMenuItem("Roter Reifenrauch", ""));
ui_Neoncolor.AddItem(new UIMenuItem("Pinker Reifenrauch", ""));
ui_Neoncolor.AddItem(new UIMenuItem("Lila Reifenrauch", ""));
ui_Neoncolor.AddItem(new UIMenuItem("Blauer Reifenrauch", ""));
ui_Neoncolor.AddItem(new UIMenuItem("Hellblauer Reifenrauch", ""));
ui_Neoncolor.AddItem(new UIMenuItem("Grüner Reifenrauch", ""));
ui_Neoncolor.AddItem(new UIMenuItem("Gelber Reifenrauch", ""));
ui_Neoncolor.AddItem(new UIMenuItem("Oranger Reifenrauch", ""));
ui_Neoncolor.AddItem(new UIMenuItem("Weißer Reifenrauch", ""));
// VISIBILITY NEONCOLOR
ui_Neoncolor.Visible = false;
uiMenu.push(ui_Neoncolor);


const ui_Spoiler = new Menu("Spoiler", "Spoiler", MenuPoint);
ui_Spoiler.AddItem(new UIMenuItem("Auswählen", ""));
ui_Spoiler.AddItem(new UIMenuItem("Kein Spoiler", ""));
ui_Spoiler.AddItem(new UIMenuItem("Spoiler 1", ""));
ui_Spoiler.AddItem(new UIMenuItem("Spoiler 2", ""));
ui_Spoiler.AddItem(new UIMenuItem("Spoiler 3", ""));
ui_Spoiler.AddItem(new UIMenuItem("Spoiler 4", ""));
ui_Spoiler.AddItem(new UIMenuItem("Spoiler 5", ""));
ui_Spoiler.AddItem(new UIMenuItem("Spoiler 6", ""));
ui_Spoiler.AddItem(new UIMenuItem("Spoiler 7", ""));
ui_Spoiler.AddItem(new UIMenuItem("Spoiler 8", ""));
ui_Spoiler.AddItem(new UIMenuItem("Spoiler 9", ""));
ui_Spoiler.AddItem(new UIMenuItem("Spoiler 10", ""));
// VISIBILITY SPOILER
ui_Spoiler.Visible = false;
uiMenu.push(ui_Spoiler);


const ui_Hoods = new Menu("Motorhauben", "Motorhauben", MenuPoint);
ui_Hoods.AddItem(new UIMenuItem("Auswählen", ""));
ui_Hoods.AddItem(new UIMenuItem("Standard Motorhaube", ""));
ui_Hoods.AddItem(new UIMenuItem("Motorhaube 1", ""));
ui_Hoods.AddItem(new UIMenuItem("Motorhaube 2", ""));
ui_Hoods.AddItem(new UIMenuItem("Motorhaube 3", ""));
ui_Hoods.AddItem(new UIMenuItem("Motorhaube 4", ""));
ui_Hoods.AddItem(new UIMenuItem("Motorhaube 5", ""));
ui_Hoods.AddItem(new UIMenuItem("Motorhaube 6", ""));
ui_Hoods.AddItem(new UIMenuItem("Motorhaube 7", ""));
ui_Hoods.AddItem(new UIMenuItem("Motorhaube 8", ""));
ui_Hoods.AddItem(new UIMenuItem("Motorhaube 9", ""));
ui_Hoods.AddItem(new UIMenuItem("Motorhaube 10", ""));
// VISIBILITY HOODS
ui_Hoods.Visible = false;
uiMenu.push(ui_Hoods);


const ui_Fbumper = new Menu("Fronstoßstangen", "Fronstoßstangen", MenuPoint);
ui_Fbumper.AddItem(new UIMenuItem("Auswählen", ""));
ui_Fbumper.AddItem(new UIMenuItem("Standard Frontstoßstange", ""));
ui_Fbumper.AddItem(new UIMenuItem("Frontstoßstange 1", ""));
ui_Fbumper.AddItem(new UIMenuItem("Frontstoßstange 2", ""));
ui_Fbumper.AddItem(new UIMenuItem("Frontstoßstange 3", ""));
ui_Fbumper.AddItem(new UIMenuItem("Frontstoßstange 4", ""));
ui_Fbumper.AddItem(new UIMenuItem("Frontstoßstange 5", ""));
ui_Fbumper.AddItem(new UIMenuItem("Frontstoßstange 6", ""));
ui_Fbumper.AddItem(new UIMenuItem("Frontstoßstange 7", ""));
ui_Fbumper.AddItem(new UIMenuItem("Frontstoßstange 8", ""));
ui_Fbumper.AddItem(new UIMenuItem("Frontstoßstange 9", ""));
ui_Fbumper.AddItem(new UIMenuItem("Frontstoßstange 10", ""));
// VISIBILITY FBUMPER
ui_Fbumper.Visible = false;
uiMenu.push(ui_Fbumper);


const ui_Rbumper = new Menu("Heckstoßstangen", "Heckstoßstangen", MenuPoint);
ui_Rbumper.AddItem(new UIMenuItem("Auswählen", ""));
ui_Rbumper.AddItem(new UIMenuItem("Standard Heckstoßstange", ""));
ui_Rbumper.AddItem(new UIMenuItem("Heckstoßstange 1", ""));
ui_Rbumper.AddItem(new UIMenuItem("Heckstoßstange 2", ""));
ui_Rbumper.AddItem(new UIMenuItem("Heckstoßstange 3", ""));
ui_Rbumper.AddItem(new UIMenuItem("Heckstoßstange 4", ""));
ui_Rbumper.AddItem(new UIMenuItem("Heckstoßstange 5", ""));
ui_Rbumper.AddItem(new UIMenuItem("Heckstoßstange 6", ""));
ui_Rbumper.AddItem(new UIMenuItem("Heckstoßstange 7", ""));
ui_Rbumper.AddItem(new UIMenuItem("Heckstoßstange 8", ""));
ui_Rbumper.AddItem(new UIMenuItem("Heckstoßstange 9", ""));
ui_Rbumper.AddItem(new UIMenuItem("Heckstoßstange 10", ""));
// VISIBILITY RBUMPER
ui_Rbumper.Visible = false;
uiMenu.push(ui_Rbumper);


const ui_Sideskirt = new Menu("Seitenschürzen", "Seitenschürzen", MenuPoint);
ui_Sideskirt.AddItem(new UIMenuItem("Auswählen", ""));
ui_Sideskirt.AddItem(new UIMenuItem("Standard Seitenschürze", ""));
ui_Sideskirt.AddItem(new UIMenuItem("Seitenschürze 1", ""));
ui_Sideskirt.AddItem(new UIMenuItem("Seitenschürze 2", ""));
ui_Sideskirt.AddItem(new UIMenuItem("Seitenschürze 3", ""));
ui_Sideskirt.AddItem(new UIMenuItem("Seitenschürze 4", ""));
ui_Sideskirt.AddItem(new UIMenuItem("Seitenschürze 5", ""));
ui_Sideskirt.AddItem(new UIMenuItem("Seitenschürze 6", ""));
ui_Sideskirt.AddItem(new UIMenuItem("Seitenschürze 7", ""));
ui_Sideskirt.AddItem(new UIMenuItem("Seitenschürze 8", ""));
ui_Sideskirt.AddItem(new UIMenuItem("Seitenschürze 9", ""));
ui_Sideskirt.AddItem(new UIMenuItem("Seitenschürze 10", ""));
ui_Sideskirt.AddItem(new UIMenuItem("Seitenschürze 11", ""));
// VISIBILITY SIDESKIRT
ui_Sideskirt.Visible = false;
uiMenu.push(ui_Sideskirt);


const ui_Exhaust = new Menu("Auspuffe", "Auspuffe", MenuPoint);
ui_Exhaust.AddItem(new UIMenuItem("Auswählen", ""));
ui_Exhaust.AddItem(new UIMenuItem("Standard Auspuff", ""));
ui_Exhaust.AddItem(new UIMenuItem("Auspuff 1", ""));
ui_Exhaust.AddItem(new UIMenuItem("Auspuff 2", ""));
ui_Exhaust.AddItem(new UIMenuItem("Auspuff 3", ""));
ui_Exhaust.AddItem(new UIMenuItem("Auspuff 4", ""));
ui_Exhaust.AddItem(new UIMenuItem("Auspuff 5", ""));
ui_Exhaust.AddItem(new UIMenuItem("Auspuff 6", ""));
// VISIBILITY EXHAUST
ui_Exhaust.Visible = false;
uiMenu.push(ui_Exhaust);


const ui_Fenders = new Menu("Kotflügel", "Kotflügel", MenuPoint);
ui_Fenders.AddItem(new UIMenuItem("Auswählen", ""));
ui_Fenders.AddItem(new UIMenuItem("Standard Kotflügel", ""));
ui_Fenders.AddItem(new UIMenuItem("Kotflügel 1", ""));
ui_Fenders.AddItem(new UIMenuItem("Kotflügel 2", ""));
ui_Fenders.AddItem(new UIMenuItem("Kotflügel 3", ""));
ui_Fenders.AddItem(new UIMenuItem("Kotflügel 4", ""));
ui_Fenders.AddItem(new UIMenuItem("Kotflügel 5", ""));
// VISIBILITY FENDERS
ui_Fenders.Visible = false;
uiMenu.push(ui_Fenders);


const ui_Roofs = new Menu("Dach", "Dach", MenuPoint);
ui_Roofs.AddItem(new UIMenuItem("Auswählen", ""));
ui_Roofs.AddItem(new UIMenuItem("Standard Dach", ""));
ui_Roofs.AddItem(new UIMenuItem("Dach 1", ""));
ui_Roofs.AddItem(new UIMenuItem("Dach 2", ""));
ui_Roofs.AddItem(new UIMenuItem("Dach 3", ""));
ui_Roofs.AddItem(new UIMenuItem("Dach 4", ""));
// VISIBILITY ROOFS
ui_Roofs.Visible = false;
uiMenu.push(ui_Roofs);

const ui_Engine = new Menu("Motor", "Motor", MenuPoint);
ui_Engine.AddItem(new UIMenuItem("Auswählen", ""));
ui_Engine.AddItem(new UIMenuItem("Standard Motor", ""));
ui_Engine.AddItem(new UIMenuItem("Motorstufe 1", ""));
ui_Engine.AddItem(new UIMenuItem("Motorstufe 2", ""));
ui_Engine.AddItem(new UIMenuItem("Motorstufe 3", ""));
ui_Engine.AddItem(new UIMenuItem("Motorstufe 4", ""));
// VISIBILITY ENGINE
ui_Engine.Visible = false;
uiMenu.push(ui_Engine)

const ui_Breaks = new Menu("Bremsen", "Bremsen", MenuPoint);
ui_Breaks.AddItem(new UIMenuItem("Auswählen", ""));
ui_Breaks.AddItem(new UIMenuItem("Standard Bremsen", ""));
ui_Breaks.AddItem(new UIMenuItem("Bremsen 1", ""));
ui_Breaks.AddItem(new UIMenuItem("Bremsen 2", ""));
ui_Breaks.AddItem(new UIMenuItem("Bremsen 3", ""));
// VISIBILITY BREAKS
ui_Breaks.Visible = false;
uiMenu.push(ui_Breaks);

const ui_Transmission = new Menu("Getriebe", "Getriebe", MenuPoint);
ui_Transmission.AddItem(new UIMenuItem("Auswählen", ""));
ui_Transmission.AddItem(new UIMenuItem("Standard Getriebe", ""));
ui_Transmission.AddItem(new UIMenuItem("Getriebe 1", ""));
ui_Transmission.AddItem(new UIMenuItem("Getriebe 2", ""));
ui_Transmission.AddItem(new UIMenuItem("Getriebe 3", ""));
// VISIBILITY TRANSMISSION
ui_Transmission.Visible = false;
uiMenu.push(ui_Transmission);

const ui_Turbo = new Menu("Turbolader", "Turbolader", MenuPoint);
ui_Turbo.AddItem(new UIMenuItem("Auswählen", ""));
ui_Turbo.AddItem(new UIMenuItem("Turbolader ausbauen", ""));
ui_Turbo.AddItem(new UIMenuItem("Turbolader einbauen", ""));
// VISIBLITY TURBO
ui_Turbo.Visible = false;
uiMenu.push(ui_Turbo);

const ui_Suspension = new Menu("Federung", "Federung", MenuPoint);
ui_Suspension.AddItem(new UIMenuItem("Auswählen", ""));
ui_Suspension.AddItem(new UIMenuItem("Standard Federung", ""));
ui_Suspension.AddItem(new UIMenuItem("Federung 1", ""));
ui_Suspension.AddItem(new UIMenuItem("Federung 2", ""));
ui_Suspension.AddItem(new UIMenuItem("Federung 3", ""));
ui_Suspension.AddItem(new UIMenuItem("Federung 4", ""));
// VISIBILITY SUSPENSION
ui_Suspension.Visible = false;
uiMenu.push(ui_Suspension);

const ui_Frames = new Menu("Rahmen", "Rahmen", MenuPoint);
ui_Frames.AddItem(new UIMenuItem("Auswählen", ""));
ui_Frames.AddItem(new UIMenuItem("Standard Rahmen", ""));
ui_Frames.AddItem(new UIMenuItem("Rahmen 1", ""));
ui_Frames.AddItem(new UIMenuItem("Rahmen 2", ""));
ui_Frames.AddItem(new UIMenuItem("Rahmen 3", ""));
ui_Frames.AddItem(new UIMenuItem("Rahmen 4", ""));
ui_Frames.AddItem(new UIMenuItem("Rahmen 5", ""));
// VISIBILITY FRAMES
ui_Frames.Visible = false;
uiMenu.push(ui_Frames);

const ui_Grills = new Menu("Gitter", "Gitter", MenuPoint);
ui_Grills.AddItem(new UIMenuItem("Auswählen", ""));
ui_Grills.AddItem(new UIMenuItem("Standard Gitter", ""));
ui_Grills.AddItem(new UIMenuItem("Gitter 1", ""));
ui_Grills.AddItem(new UIMenuItem("Gitter 2", ""));
ui_Grills.AddItem(new UIMenuItem("Gitter 3", ""));
ui_Grills.AddItem(new UIMenuItem("Gitter 4", ""));
ui_Grills.AddItem(new UIMenuItem("Gitter 5", ""));
// VISIBILITY GRILLS
ui_Grills.Visible = false;
uiMenu.push(ui_Grills);

const ui_Lights = new Menu("Xenon", "Xenon", MenuPoint);
ui_Lights.AddItem(new UIMenuItem("Auswählen", ""));
ui_Lights.AddItem(new UIMenuItem("Xenon ausbauen", ""));
ui_Lights.AddItem(new UIMenuItem("Xenon einbauen", ""));
ui_Lights.AddItem(new UIMenuItem("Standart Farbe", ""));
ui_Lights.AddItem(new UIMenuItem("Weiß", ""));
ui_Lights.AddItem(new UIMenuItem("Blau", ""));
ui_Lights.AddItem(new UIMenuItem("Hell Blau", ""));
ui_Lights.AddItem(new UIMenuItem("Grün", ""));
ui_Lights.AddItem(new UIMenuItem("Hell Grün", ""));
ui_Lights.AddItem(new UIMenuItem("Gelb", ""));
ui_Lights.AddItem(new UIMenuItem("Hell Gelb", ""));
ui_Lights.AddItem(new UIMenuItem("Orange", ""));
ui_Lights.AddItem(new UIMenuItem("Rot", ""));
ui_Lights.AddItem(new UIMenuItem("Pink", ""));
ui_Lights.AddItem(new UIMenuItem("Hell Pink", ""));
ui_Lights.AddItem(new UIMenuItem("Lila", ""));
ui_Lights.AddItem(new UIMenuItem("Hell Lila", ""));
// VISIBILITY LIGHTS
ui_Lights.Visible = false;
uiMenu.push(ui_Lights);



ui_Main.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    // REPAIR
	if (item.Text == 'Schloss austauschen') {
        mp.events.callRemote("server:vehKeys:schloss", vehicle);
    }
});


    // PRIMARY RESET
ui_Primarycolor.MenuClose.on(() => {
    ui_Primarycolor.RefreshIndex();
});

    // PRIMARY
ui_Primarycolor.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if (item.Text == 'Schwarz') {
        mp.events.callRemote("modcolor1", vehicle, 0);
    } else
    if (item.Text == 'Graphit') {
        mp.events.callRemote("modcolor1", vehicle, 1);
    } else
    if (item.Text == 'Schwarzstahl') {
        mp.events.callRemote("modcolor1", vehicle, 2);
    } else
    if (item.Text == 'Dunkelsilber') {
        mp.events.callRemote("modcolor1", vehicle, 3);
    } else
    if (item.Text == 'Silber') {
        mp.events.callRemote("modcolor1", vehicle, 4);
    } else
    if (item.Text == 'Blausilber') {
        mp.events.callRemote("modcolor1", vehicle, 5);
    } else
    if (item.Text == 'Graustahl') {
        mp.events.callRemote("modcolor1", vehicle, 6);
    } else
    if (item.Text == 'Schattensilber') {
        mp.events.callRemote("modcolor1", vehicle, 7);
    } else
    if (item.Text == 'Steinsilber') {
        mp.events.callRemote("modcolor1", vehicle, 8);
    } else
    if (item.Text == 'Mitternachtssilber') {
        mp.events.callRemote("modcolor1", vehicle, 9);
    } else
    if (item.Text == 'Gunmetal') {
        mp.events.callRemote("modcolor1", vehicle, 10);
    } else
    if (item.Text == 'Anthrazit') {
        mp.events.callRemote("modcolor1", vehicle, 11);
    } else
    if (item.Text == 'Rot') {
        mp.events.callRemote("modcolor1", vehicle, 27);
    } else
    if (item.Text == 'Torinorot') {
        mp.events.callRemote("modcolor1", vehicle, 28);
    } else
    if (item.Text == 'Formularot') {
        mp.events.callRemote("modcolor1", vehicle, 29);
    } else
    if (item.Text == 'Blazerot') {
        mp.events.callRemote("modcolor1", vehicle, 30);
    } else
    if (item.Text == 'Anmutigesrot') {
        mp.events.callRemote("modcolor1", vehicle, 31);
    } else
    if (item.Text == 'Granatrot') {
        mp.events.callRemote("modcolor1", vehicle, 32);
    } else
    if (item.Text == 'Wüstenrot') {
        mp.events.callRemote("modcolor1", vehicle, 33);
    } else
    if (item.Text == 'Cabernet rot') {
        mp.events.callRemote("modcolor1", vehicle, 34);
    } else
    if (item.Text == 'Bonbon rot') {
        mp.events.callRemote("modcolor1", vehicle, 35);
    } else
    if (item.Text == 'Hellrot') {
        mp.events.callRemote("modcolor1", vehicle, 44);
    } else
    if (item.Text == 'Goldenes rot') {
        mp.events.callRemote("modcolor1", vehicle, 47);
    } else
    if (item.Text == 'Lavarot') {
        mp.events.callRemote("modcolor1", vehicle, 150);
    } else
    if (item.Text == 'Orange') {
        mp.events.callRemote("modcolor1", vehicle, 38);
    } else
    if (item.Text == 'Orange 2') {
        mp.events.callRemote("modcolor1", vehicle, 138);
    } else
    if (item.Text == 'Sunrise Orange') {
        mp.events.callRemote("modcolor1", vehicle, 36);
    } else
    if (item.Text == 'Hellorange') {
        mp.events.callRemote("modcolor1", vehicle, 124);
    } else
    if (item.Text == 'Dunkelgrün') {
        mp.events.callRemote("modcolor1", vehicle, 49);
    } else
    if (item.Text == 'Grünstich') {
        mp.events.callRemote("modcolor1", vehicle, 125);
    } else
    if (item.Text == 'Renngrün') {
        mp.events.callRemote("modcolor1", vehicle, 50);
    } else
    if (item.Text == 'Meeresgrün') {
        mp.events.callRemote("modcolor1", vehicle, 51);
    } else
    if (item.Text == 'Olivengrün') {
        mp.events.callRemote("modcolor1", vehicle, 52);
    } else
    if (item.Text == 'Jägergrün') {
        mp.events.callRemote("modcolor1", vehicle, 144);
    } else
    if (item.Text == 'Waldgrün') {
        mp.events.callRemote("modcolor1", vehicle, 151);
    } else
    if (item.Text == 'Laubgrün') {
        mp.events.callRemote("modcolor1", vehicle, 155);
    } else
    if (item.Text == 'Olivegrün') {
        mp.events.callRemote("modcolor1", vehicle, 152);
    } else
    if (item.Text == 'Grün') {
        mp.events.callRemote("modcolor1", vehicle, 53);
    } else
    if (item.Text == 'Grün 2') {
        mp.events.callRemote("modcolor1", vehicle, 139);
    } else
    if (item.Text == 'Blaugrün') {
        mp.events.callRemote("modcolor1", vehicle, 54);
    } else
    if (item.Text == 'Limettengrün') {
        mp.events.callRemote("modcolor1", vehicle, 55);
    } else
    if (item.Text == 'Dunkelgrün 2') {
        mp.events.callRemote("modcolor1", vehicle, 56);
    } else
    if (item.Text == 'Mitternachtsblau') {
        mp.events.callRemote("modcolor1", vehicle, 61);
    } else
    if (item.Text == 'Dunkelblau') {
        mp.events.callRemote("modcolor1", vehicle, 62);
    } else
    if (item.Text == 'Sächsischblau') {
        mp.events.callRemote("modcolor1", vehicle, 63);
    } else
    if (item.Text == 'Blau') {
        mp.events.callRemote("modcolor1", vehicle, 64);
    } else
    if (item.Text == 'Blau 2') {
        mp.events.callRemote("modcolor1", vehicle, 140);
    } else
    if (item.Text == 'Marineblau') {
        mp.events.callRemote("modcolor1", vehicle, 65);
    } else
    if (item.Text == 'Hafenblau') {
        mp.events.callRemote("modcolor1", vehicle, 66);
    } else
    if (item.Text == 'Diamantblau') {
        mp.events.callRemote("modcolor1", vehicle, 67);
    } else
    if (item.Text == 'Surferblau') {
        mp.events.callRemote("modcolor1", vehicle, 68);
    } else
    if (item.Text == 'Nautischblau') {
        mp.events.callRemote("modcolor1", vehicle, 69);
    } else
    if (item.Text == 'Hellblau') {
        mp.events.callRemote("modcolor1", vehicle, 70);
    } else
    if (item.Text == 'Violettblau') {
        mp.events.callRemote("modcolor1", vehicle, 71);
    } else
    if (item.Text == 'Spinnakerblau') {
        mp.events.callRemote("modcolor1", vehicle, 72);
    } else
    if (item.Text == 'Ultrablau') {
        mp.events.callRemote("modcolor1", vehicle, 73);
    } else
    if (item.Text == 'Hellblau 2') {
        mp.events.callRemote("modcolor1", vehicle, 74);
    } else
    if (item.Text == 'Meerschaumblau') {
        mp.events.callRemote("modcolor1", vehicle, 78);
    } else
    if (item.Text == 'Blitzblau') {
        mp.events.callRemote("modcolor1", vehicle, 79);
    } else
    if (item.Text == 'Mauiblau') {
        mp.events.callRemote("modcolor1", vehicle, 80);
    } else
    if (item.Text == 'Polizei Blau') {
        mp.events.callRemote("modcolor1", vehicle, 127);
    } else
    if (item.Text == 'Epsilonblau') {
        mp.events.callRemote("modcolor1", vehicle, 157);
    } else
    if (item.Text == 'Taxigelb') {
        mp.events.callRemote("modcolor1", vehicle, 88);
    } else
    if (item.Text == 'Renngelb') {
        mp.events.callRemote("modcolor1", vehicle, 89);
    } else
    if (item.Text == 'Vogelgelb') {
        mp.events.callRemote("modcolor1", vehicle, 91);
    } else
    if (item.Text == 'Bronze') {
        mp.events.callRemote("modcolor1", vehicle, 90);
    } else
    if (item.Text == 'Citrusgelb') {
        mp.events.callRemote("modcolor1", vehicle, 92);
    } else
    if (item.Text == 'Champagnier') {
        mp.events.callRemote("modcolor1", vehicle, 93);
    } else
    if (item.Text == 'Beige') {
        mp.events.callRemote("modcolor1", vehicle, 94);
    } else
    if (item.Text == 'Elfenbein') {
        mp.events.callRemote("modcolor1", vehicle, 95);
    } else
    if (item.Text == 'Schokobraun') {
        mp.events.callRemote("modcolor1", vehicle, 96);
    } else
    if (item.Text == 'Goldbraun') {
        mp.events.callRemote("modcolor1", vehicle, 97);
    } else
    if (item.Text == 'Hellbraun') {
        mp.events.callRemote("modcolor1", vehicle, 98);
    } else
    if (item.Text == 'Strohbeige') {
        mp.events.callRemote("modcolor1", vehicle, 99);
    } else
    if (item.Text == 'Moosbraun') {
        mp.events.callRemote("modcolor1", vehicle, 100);
    } else
    if (item.Text == 'Bostonbraun') {
        mp.events.callRemote("modcolor1", vehicle, 101);
    } else
    if (item.Text == 'Wüstenbraun') {
        mp.events.callRemote("modcolor1", vehicle, 153);
    } else
    if (item.Text == 'Wüstenbräune') {
        mp.events.callRemote("modcolor1", vehicle, 154);
    } else
    if (item.Text == 'Buchenholz') {
        mp.events.callRemote("modcolor1", vehicle, 102);
    } else
    if (item.Text == 'Dunkles Buchenholz') {
        mp.events.callRemote("modcolor1", vehicle, 103);
    } else
    if (item.Text == 'Schoko Orange') {
        mp.events.callRemote("modcolor1", vehicle, 104);
    } else
    if (item.Text == 'Sandfarbend') {
        mp.events.callRemote("modcolor1", vehicle, 105);
    } else
    if (item.Text == 'Sonnengebleicht') {
        mp.events.callRemote("modcolor1", vehicle, 106);
    } else
    if (item.Text == 'Cremefarbend') {
        mp.events.callRemote("modcolor1", vehicle, 107);
    } else
    if (item.Text == 'Honigbeige') {
        mp.events.callRemote("modcolor1", vehicle, 113);
    } else
    if (item.Text == 'Weiß') {
        mp.events.callRemote("modcolor1", vehicle, 111);
    } else
    if (item.Text == 'Frostweiß') {
        mp.events.callRemote("modcolor1", vehicle, 112);
    } else
    if (item.Text == 'Grauweiß') {
        mp.events.callRemote("modcolor1", vehicle, 121);
    } else
    if (item.Text == 'Reines Weiß') {
        mp.events.callRemote("modcolor1", vehicle, 134);
    }  else
    if (item.Text == 'Heißes Pink') {
        mp.events.callRemote("modcolor1", vehicle, 135);
    }  else
    if (item.Text == 'Lachsrosa') {
        mp.events.callRemote("modcolor1", vehicle, 136);
    }  else
    if (item.Text == 'Vermillion Pink') {
        mp.events.callRemote("modcolor1", vehicle, 137);
    }  else
    if (item.Text == 'Schwarzlila') {
        mp.events.callRemote("modcolor1", vehicle, 142);
    }  else
    if (item.Text == 'Schwarzblau') {
        mp.events.callRemote("modcolor1", vehicle, 141);
    }  else
    if (item.Text == 'Schwarzrot') {
        mp.events.callRemote("modcolor1", vehicle, 143);
    }  else
    if (item.Text == 'Lila') {
        mp.events.callRemote("modcolor1", vehicle, 145);
    }  else
    if (item.Text == 'Metallic Schwarz') {
        mp.events.callRemote("modcolor1", vehicle, 15);
    }  else
    if (item.Text == 'Metallic Schwarz 2') {
        mp.events.callRemote("modcolor1", vehicle, 16);
    }  else
    if (item.Text == 'Metallic Silber') {
        mp.events.callRemote("modcolor1", vehicle, 17);
    }  else
    if (item.Text == 'Metallic Silber 2') {
        mp.events.callRemote("modcolor1", vehicle, 18);
    }  else
    if (item.Text == 'Metallic Gun Metal') {
        mp.events.callRemote("modcolor1", vehicle, 19);
    }  else
    if (item.Text == 'Metallic Schattensilber') {
        mp.events.callRemote("modcolor1", vehicle, 20);
    }  else
    if (item.Text == 'Metallic Rot') {
        mp.events.callRemote("modcolor1", vehicle, 43);
    }  else
    if (item.Text == 'Metallic Granatrot') {
        mp.events.callRemote("modcolor1", vehicle, 45);
    }  else
    if (item.Text == 'Metallic Grün') {
        mp.events.callRemote("modcolor1", vehicle, 57);
    }  else
    if (item.Text == 'Metallic Dunkelblau') {
        mp.events.callRemote("modcolor1", vehicle, 75);
    }  else
    if (item.Text == 'Metallic Mitternachtsblau') {
        mp.events.callRemote("modcolor1", vehicle, 76);
    }  else
    if (item.Text == 'Metallic Blau') {
        mp.events.callRemote("modcolor1", vehicle, 77);
    }  else
    if (item.Text == 'Metallic Hellblau') {
        mp.events.callRemote("modcolor1", vehicle, 81);
    }  else
    if (item.Text == 'Metallic Braun') {
        mp.events.callRemote("modcolor1", vehicle, 108);
    }  else
    if (item.Text == 'Metallic Mittelbraun') {
        mp.events.callRemote("modcolor1", vehicle, 109);
    }  else
    if (item.Text == 'Metallic Hellbraun') {
        mp.events.callRemote("modcolor1", vehicle, 110);
    }
    if (item.Text == 'Matt Schwarz') {
        mp.events.callRemote("modcolor1", vehicle, 12);
    }  else
    if (item.Text == 'Matt Schwarz 2') {
        mp.events.callRemote("modcolor1", vehicle, 21);
    }  else
    if (item.Text == 'Matt Grau') {
        mp.events.callRemote("modcolor1", vehicle, 13);
    }  else
    if (item.Text == 'Matt Hellgrau') {
        mp.events.callRemote("modcolor1", vehicle, 14);
    }  else
    if (item.Text == 'Matt Graphit') {
        mp.events.callRemote("modcolor1", vehicle, 22);
    }  else
    if (item.Text == 'Matt Silbergrau') {
        mp.events.callRemote("modcolor1", vehicle, 23);
    }  else
    if (item.Text == 'Matt Silber') {
        mp.events.callRemote("modcolor1", vehicle, 24);
    }  else
    if (item.Text == 'Matt Blausilber') {
        mp.events.callRemote("modcolor1", vehicle, 25);
    }  else
    if (item.Text == 'Matt Schattensilber') {
        mp.events.callRemote("modcolor1", vehicle, 26);
    }  else
    if (item.Text == 'Matt Rot') {
        mp.events.callRemote("modcolor1", vehicle, 39);
    }  else
    if (item.Text == 'Matt Dunkelrot') {
        mp.events.callRemote("modcolor1", vehicle, 40);
    }  else
    if (item.Text == 'Matt Orange') {
        mp.events.callRemote("modcolor1", vehicle, 41);
    }  else
    if (item.Text == 'Matt Gelb') {
        mp.events.callRemote("modcolor1", vehicle, 42);
    }  else
    if (item.Text == 'Matt Blau') {
        mp.events.callRemote("modcolor1", vehicle, 83);
    }  else
    if (item.Text == 'Matt Mitternachtsblau') {
        mp.events.callRemote("modcolor1", vehicle, 84);
    }  else
    if (item.Text == 'Matt Grün') {
        mp.events.callRemote("modcolor1", vehicle, 128);
    }  else
    if (item.Text == 'Matt Braun') {
        mp.events.callRemote("modcolor1", vehicle, 129);
    }  else
    if (item.Text == 'Matt Weiß') {
        mp.events.callRemote("modcolor1", vehicle, 131);
    }  else
    if (item.Text == 'Matt Lila') {
        mp.events.callRemote("modcolor1", vehicle, 148);
    }  else
    if (item.Text == 'Matt Dunkellila') {
        mp.events.callRemote("modcolor1", vehicle, 149);
    }  else
    if (item.Text == 'Abgenutztes rot') {
        mp.events.callRemote("modcolor1", vehicle, 46);
    }  else
    if (item.Text == 'Abgenutztes Dunkelrot') {
        mp.events.callRemote("modcolor1", vehicle, 48);
    }  else
    if (item.Text == 'Abgenutztes Grün') {
        mp.events.callRemote("modcolor1", vehicle, 59);
    }  else
    if (item.Text == 'Abgenutztes Meeresgrün') {
        mp.events.callRemote("modcolor1", vehicle, 60);
    }  else
    if (item.Text == 'Abgenutztes Dunkelblau') {
        mp.events.callRemote("modcolor1", vehicle, 85);
    }  else
    if (item.Text == 'Abgenutztes Blau') {
        mp.events.callRemote("modcolor1", vehicle, 86);
    }  else
    if (item.Text == 'Abgenutztes Hellblau') {
        mp.events.callRemote("modcolor1", vehicle, 87);
    }  else
    if (item.Text == 'Abgenutztes Braun') {
        mp.events.callRemote("modcolor1", vehicle, 114);
    }  else
    if (item.Text == 'Abgenutztes Strohbeige') {
        mp.events.callRemote("modcolor1", vehicle, 116);
    }  else
    if (item.Text == 'Abgenutztes Orange') {
        mp.events.callRemote("modcolor1", vehicle, 123);
    }  else
    if (item.Text == 'Abgenutztes Orange 2') {
        mp.events.callRemote("modcolor1", vehicle, 130);
    }  else
    if (item.Text == 'Abgenutztes Taxigelb') {
        mp.events.callRemote("modcolor1", vehicle, 126);
    }  else
    if (item.Text == 'Abgenutztes Weiß') {
        mp.events.callRemote("modcolor1", vehicle, 132);
    }  else
    if (item.Text == 'Abgenutztes Armeegrün') {
        mp.events.callRemote("modcolor1", vehicle, 133);
    }  else
    if (item.Text == 'Gebürsteter Stahl') {
        mp.events.callRemote("modcolor1", vehicle, 117);
    }  else
    if (item.Text == 'Gebürsteter Schwarzstahl') {
        mp.events.callRemote("modcolor1", vehicle, 118);
    }  else
    if (item.Text == 'Gebürstetes Aluminium') {
        mp.events.callRemote("modcolor1", vehicle, 119);
    }  else
    if (item.Text == 'Gebürstetes Gold') {
        mp.events.callRemote("modcolor1", vehicle, 159);
    }  else
    if (item.Text == 'Legierung') {
        mp.events.callRemote("modcolor1", vehicle, 156);
    }  else
    if (item.Text == 'Klassisches Gold') {
        mp.events.callRemote("modcolor1", vehicle, 37);
    }  else
    if (item.Text == 'Pures Gold') {
        mp.events.callRemote("modcolor1", vehicle, 158);
    }  else
    if (item.Text == 'Chrome') {
        mp.events.callRemote("modcolor1", vehicle, 120);
    }
});


    // SECONDARY RESET
ui_Secondarycolor.MenuClose.on(() => {
    ui_Secondarycolor.RefreshIndex();
});

    // SECONDARY
ui_Secondarycolor.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if (item.Text == 'Schwarz') {
        mp.events.callRemote("modcolor2", vehicle, 0);
    } else
    if (item.Text == 'Graphit') {
        mp.events.callRemote("modcolor2", vehicle, 1);
    } else
    if (item.Text == 'Schwarzstahl') {
        mp.events.callRemote("modcolor2", vehicle, 2);
    } else
    if (item.Text == 'Dunkelsilber') {
        mp.events.callRemote("modcolor2", vehicle, 3);
    } else
    if (item.Text == 'Silber') {
        mp.events.callRemote("modcolor2", vehicle, 4);
    } else
    if (item.Text == 'Blausilber') {
        mp.events.callRemote("modcolor2", vehicle, 5);
    } else
    if (item.Text == 'Graustahl') {
        mp.events.callRemote("modcolor2", vehicle, 6);
    } else
    if (item.Text == 'Schattensilber') {
        mp.events.callRemote("modcolor2", vehicle, 7);
    } else
    if (item.Text == 'Steinsilber') {
        mp.events.callRemote("modcolor2", vehicle, 8);
    } else
    if (item.Text == 'Mitternachtssilber') {
        mp.events.callRemote("modcolor2", vehicle, 9);
    } else
    if (item.Text == 'Gunmetal') {
        mp.events.callRemote("modcolor2", vehicle, 10);
    } else
    if (item.Text == 'Anthrazit') {
        mp.events.callRemote("modcolor2", vehicle, 11);
    } else
    if (item.Text == 'Rot') {
        mp.events.callRemote("modcolor2", vehicle, 27);
    } else
    if (item.Text == 'Torinorot') {
        mp.events.callRemote("modcolor2", vehicle, 28);
    } else
    if (item.Text == 'Formularot') {
        mp.events.callRemote("modcolor2", vehicle, 29);
    } else
    if (item.Text == 'Blazerot') {
        mp.events.callRemote("modcolor2", vehicle, 30);
    } else
    if (item.Text == 'Anmutigesrot') {
        mp.events.callRemote("modcolor2", vehicle, 31);
    } else
    if (item.Text == 'Granatrot') {
        mp.events.callRemote("modcolor2", vehicle, 32);
    } else
    if (item.Text == 'Wüstenrot') {
        mp.events.callRemote("modcolor2", vehicle, 33);
    } else
    if (item.Text == 'Cabernet rot') {
        mp.events.callRemote("modcolor2", vehicle, 34);
    } else
    if (item.Text == 'Bonbon rot') {
        mp.events.callRemote("modcolor2", vehicle, 35);
    } else
    if (item.Text == 'Hellrot') {
        mp.events.callRemote("modcolor2", vehicle, 44);
    } else
    if (item.Text == 'Goldenes rot') {
        mp.events.callRemote("modcolor2", vehicle, 47);
    } else
    if (item.Text == 'Lavarot') {
        mp.events.callRemote("modcolor2", vehicle, 150);
    } else
    if (item.Text == 'Orange') {
        mp.events.callRemote("modcolor2", vehicle, 38);
    } else
    if (item.Text == 'Orange 2') {
        mp.events.callRemote("modcolor2", vehicle, 138);
    } else
    if (item.Text == 'Sunrise Orange') {
        mp.events.callRemote("modcolor2", vehicle, 36);
    } else
    if (item.Text == 'Hellorange') {
        mp.events.callRemote("modcolor2", vehicle, 124);
    } else
    if (item.Text == 'Dunkelgrün') {
        mp.events.callRemote("modcolor2", vehicle, 49);
    } else
    if (item.Text == 'Grünstich') {
        mp.events.callRemote("modcolor2", vehicle, 125);
    } else
    if (item.Text == 'Renngrün') {
        mp.events.callRemote("modcolor2", vehicle, 50);
    } else
    if (item.Text == 'Meeresgrün') {
        mp.events.callRemote("modcolor2", vehicle, 51);
    } else
    if (item.Text == 'Olivengrün') {
        mp.events.callRemote("modcolor2", vehicle, 52);
    } else
    if (item.Text == 'Jägergrün') {
        mp.events.callRemote("modcolor2", vehicle, 144);
    } else
    if (item.Text == 'Waldgrün') {
        mp.events.callRemote("modcolor2", vehicle, 151);
    } else
    if (item.Text == 'Laubgrün') {
        mp.events.callRemote("modcolor2", vehicle, 155);
    } else
    if (item.Text == 'Olivegrün') {
        mp.events.callRemote("modcolor2", vehicle, 152);
    } else
    if (item.Text == 'Grün') {
        mp.events.callRemote("modcolor2", vehicle, 53);
    } else
    if (item.Text == 'Grün 2') {
        mp.events.callRemote("modcolor2", vehicle, 139);
    } else
    if (item.Text == 'Blaugrün') {
        mp.events.callRemote("modcolor2", vehicle, 54);
    } else
    if (item.Text == 'Limettengrün') {
        mp.events.callRemote("modcolor2", vehicle, 55);
    } else
    if (item.Text == 'Dunkelgrün 2') {
        mp.events.callRemote("modcolor2", vehicle, 56);
    } else
    if (item.Text == 'Mitternachtsblau') {
        mp.events.callRemote("modcolor2", vehicle, 61);
    } else
    if (item.Text == 'Dunkelblau') {
        mp.events.callRemote("modcolor2", vehicle, 62);
    } else
    if (item.Text == 'Sächsischblau') {
        mp.events.callRemote("modcolor2", vehicle, 63);
    } else
    if (item.Text == 'Blau') {
        mp.events.callRemote("modcolor2", vehicle, 64);
    } else
    if (item.Text == 'Blau 2') {
        mp.events.callRemote("modcolor2", vehicle, 140);
    } else
    if (item.Text == 'Marineblau') {
        mp.events.callRemote("modcolor2", vehicle, 65);
    } else
    if (item.Text == 'Hafenblau') {
        mp.events.callRemote("modcolor2", vehicle, 66);
    } else
    if (item.Text == 'Diamantblau') {
        mp.events.callRemote("modcolor2", vehicle, 67);
    } else
    if (item.Text == 'Surferblau') {
        mp.events.callRemote("modcolor2", vehicle, 68);
    } else
    if (item.Text == 'Nautischblau') {
        mp.events.callRemote("modcolor2", vehicle, 69);
    } else
    if (item.Text == 'Hellblau') {
        mp.events.callRemote("modcolor2", vehicle, 70);
    } else
    if (item.Text == 'Violettblau') {
        mp.events.callRemote("modcolor2", vehicle, 71);
    } else
    if (item.Text == 'Spinnakerblau') {
        mp.events.callRemote("modcolor2", vehicle, 72);
    } else
    if (item.Text == 'Ultrablau') {
        mp.events.callRemote("modcolor2", vehicle, 73);
    } else
    if (item.Text == 'Hellblau 2') {
        mp.events.callRemote("modcolor2", vehicle, 74);
    } else
    if (item.Text == 'Meerschaumblau') {
        mp.events.callRemote("modcolor2", vehicle, 78);
    } else
    if (item.Text == 'Blitzblau') {
        mp.events.callRemote("modcolor2", vehicle, 79);
    } else
    if (item.Text == 'Mauiblau') {
        mp.events.callRemote("modcolor2", vehicle, 80);
    } else
    if (item.Text == 'Polizei Blau') {
        mp.events.callRemote("modcolor2", vehicle, 127);
    } else
    if (item.Text == 'Epsilonblau') {
        mp.events.callRemote("modcolor2", vehicle, 157);
    } else
    if (item.Text == 'Taxigelb') {
        mp.events.callRemote("modcolor2", vehicle, 88);
    } else
    if (item.Text == 'Renngelb') {
        mp.events.callRemote("modcolor2", vehicle, 89);
    } else
    if (item.Text == 'Vogelgelb') {
        mp.events.callRemote("modcolor2", vehicle, 91);
    } else
    if (item.Text == 'Bronze') {
        mp.events.callRemote("modcolor2", vehicle, 90);
    } else
    if (item.Text == 'Citrusgelb') {
        mp.events.callRemote("modcolor2", vehicle, 92);
    } else
    if (item.Text == 'Champagnier') {
        mp.events.callRemote("modcolor2", vehicle, 93);
    } else
    if (item.Text == 'Beige') {
        mp.events.callRemote("modcolor2", vehicle, 94);
    } else
    if (item.Text == 'Elfenbein') {
        mp.events.callRemote("modcolor2", vehicle, 95);
    } else
    if (item.Text == 'Schokobraun') {
        mp.events.callRemote("modcolor2", vehicle, 96);
    } else
    if (item.Text == 'Goldbraun') {
        mp.events.callRemote("modcolor2", vehicle, 97);
    } else
    if (item.Text == 'Hellbraun') {
        mp.events.callRemote("modcolor2", vehicle, 98);
    } else
    if (item.Text == 'Strohbeige') {
        mp.events.callRemote("modcolor2", vehicle, 99);
    } else
    if (item.Text == 'Moosbraun') {
        mp.events.callRemote("modcolor2", vehicle, 100);
    } else
    if (item.Text == 'Bostonbraun') {
        mp.events.callRemote("modcolor2", vehicle, 101);
    } else
    if (item.Text == 'Wüstenbraun') {
        mp.events.callRemote("modcolor2", vehicle, 153);
    } else
    if (item.Text == 'Wüstenbräune') {
        mp.events.callRemote("modcolor2", vehicle, 154);
    } else
    if (item.Text == 'Buchenholz') {
        mp.events.callRemote("modcolor2", vehicle, 102);
    } else
    if (item.Text == 'Dunkles Buchenholz') {
        mp.events.callRemote("modcolor2", vehicle, 103);
    } else
    if (item.Text == 'Schoko Orange') {
        mp.events.callRemote("modcolor2", vehicle, 104);
    } else
    if (item.Text == 'Sandfarbend') {
        mp.events.callRemote("modcolor2", vehicle, 105);
    } else
    if (item.Text == 'Sonnengebleicht') {
        mp.events.callRemote("modcolor2", vehicle, 106);
    } else
    if (item.Text == 'Cremefarbend') {
        mp.events.callRemote("modcolor2", vehicle, 107);
    } else
    if (item.Text == 'Honigbeige') {
        mp.events.callRemote("modcolor2", vehicle, 113);
    } else
    if (item.Text == 'Weiß') {
        mp.events.callRemote("modcolor2", vehicle, 111);
    } else
    if (item.Text == 'Frostweiß') {
        mp.events.callRemote("modcolor2", vehicle, 112);
    } else
    if (item.Text == 'Grauweiß') {
        mp.events.callRemote("modcolor2", vehicle, 121);
    } else
    if (item.Text == 'Reines Weiß') {
        mp.events.callRemote("modcolor2", vehicle, 134);
    }  else
    if (item.Text == 'Heißes Pink') {
        mp.events.callRemote("modcolor2", vehicle, 135);
    }  else
    if (item.Text == 'Lachsrosa') {
        mp.events.callRemote("modcolor2", vehicle, 136);
    }  else
    if (item.Text == 'Vermillion Pink') {
        mp.events.callRemote("modcolor2", vehicle, 137);
    }  else
    if (item.Text == 'Schwarzlila') {
        mp.events.callRemote("modcolor2", vehicle, 142);
    }  else
    if (item.Text == 'Schwarzblau') {
        mp.events.callRemote("modcolor2", vehicle, 141);
    }  else
    if (item.Text == 'Schwarzrot') {
        mp.events.callRemote("modcolor2", vehicle, 143);
    }  else
    if (item.Text == 'Lila') {
        mp.events.callRemote("modcolor2", vehicle, 145);
    }  else
    if (item.Text == 'Metallic Schwarz') {
        mp.events.callRemote("modcolor2", vehicle, 15);
    }  else
    if (item.Text == 'Metallic Schwarz 2') {
        mp.events.callRemote("modcolor2", vehicle, 16);
    }  else
    if (item.Text == 'Metallic Silber') {
        mp.events.callRemote("modcolor2", vehicle, 17);
    }  else
    if (item.Text == 'Metallic Silber 2') {
        mp.events.callRemote("modcolor2", vehicle, 18);
    }  else
    if (item.Text == 'Metallic Gun Metal') {
        mp.events.callRemote("modcolor2", vehicle, 19);
    }  else
    if (item.Text == 'Metallic Schattensilber') {
        mp.events.callRemote("modcolor2", vehicle, 20);
    }  else
    if (item.Text == 'Metallic Rot') {
        mp.events.callRemote("modcolor2", vehicle, 43);
    }  else
    if (item.Text == 'Metallic Granatrot') {
        mp.events.callRemote("modcolor2", vehicle, 45);
    }  else
    if (item.Text == 'Metallic Grün') {
        mp.events.callRemote("modcolor2", vehicle, 57);
    }  else
    if (item.Text == 'Metallic Dunkelblau') {
        mp.events.callRemote("modcolor2", vehicle, 75);
    }  else
    if (item.Text == 'Metallic Mitternachtsblau') {
        mp.events.callRemote("modcolor2", vehicle, 76);
    }  else
    if (item.Text == 'Metallic Blau') {
        mp.events.callRemote("modcolor2", vehicle, 77);
    }  else
    if (item.Text == 'Metallic Hellblau') {
        mp.events.callRemote("modcolor2", vehicle, 81);
    }  else
    if (item.Text == 'Metallic Braun') {
        mp.events.callRemote("modcolor2", vehicle, 108);
    }  else
    if (item.Text == 'Metallic Mittelbraun') {
        mp.events.callRemote("modcolor2", vehicle, 109);
    }  else
    if (item.Text == 'Metallic Hellbraun') {
        mp.events.callRemote("modcolor2", vehicle, 110);
    }
    if (item.Text == 'Matt Schwarz') {
        mp.events.callRemote("modcolor2", vehicle, 12);
    }  else
    if (item.Text == 'Matt Schwarz 2') {
        mp.events.callRemote("modcolor2", vehicle, 21);
    }  else
    if (item.Text == 'Matt Grau') {
        mp.events.callRemote("modcolor2", vehicle, 13);
    }  else
    if (item.Text == 'Matt Hellgrau') {
        mp.events.callRemote("modcolor2", vehicle, 14);
    }  else
    if (item.Text == 'Matt Graphit') {
        mp.events.callRemote("modcolor2", vehicle, 22);
    }  else
    if (item.Text == 'Matt Silbergrau') {
        mp.events.callRemote("modcolor2", vehicle, 23);
    }  else
    if (item.Text == 'Matt Silber') {
        mp.events.callRemote("modcolor2", vehicle, 24);
    }  else
    if (item.Text == 'Matt Blausilber') {
        mp.events.callRemote("modcolor2", vehicle, 25);
    }  else
    if (item.Text == 'Matt Schattensilber') {
        mp.events.callRemote("modcolor2", vehicle, 26);
    }  else
    if (item.Text == 'Matt Rot') {
        mp.events.callRemote("modcolor2", vehicle, 39);
    }  else
    if (item.Text == 'Matt Dunkelrot') {
        mp.events.callRemote("modcolor2", vehicle, 40);
    }  else
    if (item.Text == 'Matt Orange') {
        mp.events.callRemote("modcolor2", vehicle, 41);
    }  else
    if (item.Text == 'Matt Gelb') {
        mp.events.callRemote("modcolor2", vehicle, 42);
    }  else
    if (item.Text == 'Matt Blau') {
        mp.events.callRemote("modcolor2", vehicle, 83);
    }  else
    if (item.Text == 'Matt Mitternachtsblau') {
        mp.events.callRemote("modcolor2", vehicle, 84);
    }  else
    if (item.Text == 'Matt Grün') {
        mp.events.callRemote("modcolor2", vehicle, 128);
    }  else
    if (item.Text == 'Matt Braun') {
        mp.events.callRemote("modcolor2", vehicle, 129);
    }  else
    if (item.Text == 'Matt Weiß') {
        mp.events.callRemote("modcolor2", vehicle, 131);
    }  else
    if (item.Text == 'Matt Lila') {
        mp.events.callRemote("modcolor2", vehicle, 148);
    }  else
    if (item.Text == 'Matt Dunkellila') {
        mp.events.callRemote("modcolor2", vehicle, 149);
    }  else
    if (item.Text == 'Abgenutztes rot') {
        mp.events.callRemote("modcolor2", vehicle, 46);
    }  else
    if (item.Text == 'Abgenutztes Dunkelrot') {
        mp.events.callRemote("modcolor2", vehicle, 48);
    }  else
    if (item.Text == 'Abgenutztes Grün') {
        mp.events.callRemote("modcolor2", vehicle, 59);
    }  else
    if (item.Text == 'Abgenutztes Meeresgrün') {
        mp.events.callRemote("modcolor2", vehicle, 60);
    }  else
    if (item.Text == 'Abgenutztes Dunkelblau') {
        mp.events.callRemote("modcolor2", vehicle, 85);
    }  else
    if (item.Text == 'Abgenutztes Blau') {
        mp.events.callRemote("modcolor2", vehicle, 86);
    }  else
    if (item.Text == 'Abgenutztes Hellblau') {
        mp.events.callRemote("modcolor2", vehicle, 87);
    }  else
    if (item.Text == 'Abgenutztes Braun') {
        mp.events.callRemote("modcolor2", vehicle, 114);
    }  else
    if (item.Text == 'Abgenutztes Strohbeige') {
        mp.events.callRemote("modcolor2", vehicle, 116);
    }  else
    if (item.Text == 'Abgenutztes Orange') {
        mp.events.callRemote("modcolor2", vehicle, 123);
    }  else
    if (item.Text == 'Abgenutztes Orange 2') {
        mp.events.callRemote("modcolor2", vehicle, 130);
    }  else
    if (item.Text == 'Abgenutztes Taxigelb') {
        mp.events.callRemote("modcolor2", vehicle, 126);
    }  else
    if (item.Text == 'Abgenutztes Weiß') {
        mp.events.callRemote("modcolor2", vehicle, 132);
    }  else
    if (item.Text == 'Abgenutztes Armeegrün') {
        mp.events.callRemote("modcolor2", vehicle, 133);
    }  else
    if (item.Text == 'Gebürsteter Stahl') {
        mp.events.callRemote("modcolor2", vehicle, 117);
    }  else
    if (item.Text == 'Gebürsteter Schwarzstahl') {
        mp.events.callRemote("modcolor2", vehicle, 118);
    }  else
    if (item.Text == 'Gebürstetes Aluminium') {
        mp.events.callRemote("modcolor2", vehicle, 119);
    }  else
    if (item.Text == 'Gebürstetes Gold') {
        mp.events.callRemote("modcolor2", vehicle, 159);
    }  else
    if (item.Text == 'Legierung') {
        mp.events.callRemote("modcolor2", vehicle, 156);
    }  else
    if (item.Text == 'Klassisches Gold') {
        mp.events.callRemote("modcolor2", vehicle, 37);
    }  else
    if (item.Text == 'Pures Gold') {
        mp.events.callRemote("modcolor2", vehicle, 158);
    }  else
    if (item.Text == 'Chrome') {
        mp.events.callRemote("modcolor2", vehicle, 120);
    }
});

    /*// SECONDARY RESET
    ui_Pearl.MenuClose.on(() => {
        ui_Pearl.RefreshIndex();
    });

    // PEARL
ui_Pearl.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if (item.Text == 'Schwarz') {
        mp.events.callRemote("modpearl", vehicle, 0);
    } else
    if (item.Text == 'Graphit') {
        mp.events.callRemote("modpearl", vehicle, 1);
    } else
    if (item.Text == 'Schwarzstahl') {
        mp.events.callRemote("modpearl", vehicle, 2);
    } else
    if (item.Text == 'Dunkelsilber') {
        mp.events.callRemote("modpearl", vehicle, 3);
    } else
    if (item.Text == 'Silber') {
        mp.events.callRemote("modpearl", vehicle, 4);
    } else
    if (item.Text == 'Blausilber') {
        mp.events.callRemote("modpearl", vehicle, 5);
    } else
    if (item.Text == 'Graustahl') {
        mp.events.callRemote("modpearl", vehicle, 6);
    } else
    if (item.Text == 'Schattensilber') {
        mp.events.callRemote("modpearl", vehicle, 7);
    } else
    if (item.Text == 'Steinsilber') {
        mp.events.callRemote("modpearl", vehicle, 8);
    } else
    if (item.Text == 'Mitternachtssilber') {
        mp.events.callRemote("modpearl", vehicle, 9);
    } else
    if (item.Text == 'Gunmetal') {
        mp.events.callRemote("modpearl", vehicle, 10);
    } else
    if (item.Text == 'Anthrazit') {
        mp.events.callRemote("modpearl", vehicle, 11);
    } else
    if (item.Text == 'Rot') {
        mp.events.callRemote("modpearl", vehicle, 27);
    } else
    if (item.Text == 'Torinorot') {
        mp.events.callRemote("modpearl", vehicle, 28);
    } else
    if (item.Text == 'Formularot') {
        mp.events.callRemote("modpearl", vehicle, 29);
    } else
    if (item.Text == 'Blazerot') {
        mp.events.callRemote("modpearl", vehicle, 30);
    } else
    if (item.Text == 'Anmutigesrot') {
        mp.events.callRemote("modpearl", vehicle, 31);
    } else
    if (item.Text == 'Granatrot') {
        mp.events.callRemote("modpearl", vehicle, 32);
    } else
    if (item.Text == 'Wüstenrot') {
        mp.events.callRemote("modpearl", vehicle, 33);
    } else
    if (item.Text == 'Cabernet rot') {
        mp.events.callRemote("modpearl", vehicle, 34);
    } else
    if (item.Text == 'Bonbon rot') {
        mp.events.callRemote("modpearl", vehicle, 35);
    } else
    if (item.Text == 'Hellrot') {
        mp.events.callRemote("modpearl", vehicle, 44);
    } else
    if (item.Text == 'Goldenes rot') {
        mp.events.callRemote("modpearl", vehicle, 47);
    } else
    if (item.Text == 'Lavarot') {
        mp.events.callRemote("modpearl", vehicle, 150);
    } else
    if (item.Text == 'Orange') {
        mp.events.callRemote("modpearl", vehicle, 38);
    } else
    if (item.Text == 'Orange 2') {
        mp.events.callRemote("modpearl", vehicle, 138);
    } else
    if (item.Text == 'Sunrise Orange') {
        mp.events.callRemote("modpearl", vehicle, 36);
    } else
    if (item.Text == 'Hellorange') {
        mp.events.callRemote("modpearl", vehicle, 124);
    } else
    if (item.Text == 'Dunkelgrün') {
        mp.events.callRemote("modpearl", vehicle, 49);
    } else
    if (item.Text == 'Grünstich') {
        mp.events.callRemote("modpearl", vehicle, 125);
    } else
    if (item.Text == 'Renngrün') {
        mp.events.callRemote("modpearl", vehicle, 50);
    } else
    if (item.Text == 'Meeresgrün') {
        mp.events.callRemote("modpearl", vehicle, 51);
    } else
    if (item.Text == 'Olivengrün') {
        mp.events.callRemote("modpearl", vehicle, 52);
    } else
    if (item.Text == 'Jägergrün') {
        mp.events.callRemote("modpearl", vehicle, 144);
    } else
    if (item.Text == 'Waldgrün') {
        mp.events.callRemote("modpearl", vehicle, 151);
    } else
    if (item.Text == 'Laubgrün') {
        mp.events.callRemote("modpearl", vehicle, 155);
    } else
    if (item.Text == 'Olivegrün') {
        mp.events.callRemote("modpearl", vehicle, 152);
    } else
    if (item.Text == 'Grün') {
        mp.events.callRemote("modpearl", vehicle, 53);
    } else
    if (item.Text == 'Grün 2') {
        mp.events.callRemote("modpearl", vehicle, 139);
    } else
    if (item.Text == 'Blaugrün') {
        mp.events.callRemote("modpearl", vehicle, 54);
    } else
    if (item.Text == 'Limettengrün') {
        mp.events.callRemote("modpearl", vehicle, 55);
    } else
    if (item.Text == 'Dunkelgrün 2') {
        mp.events.callRemote("modpearl", vehicle, 56);
    } else
    if (item.Text == 'Mitternachtsblau') {
        mp.events.callRemote("modpearl", vehicle, 61);
    } else
    if (item.Text == 'Dunkelblau') {
        mp.events.callRemote("modpearl", vehicle, 62);
    } else
    if (item.Text == 'Sächsischblau') {
        mp.events.callRemote("modpearl", vehicle, 63);
    } else
    if (item.Text == 'Blau') {
        mp.events.callRemote("modpearl", vehicle, 64);
    } else
    if (item.Text == 'Blau 2') {
        mp.events.callRemote("modpearl", vehicle, 140);
    } else
    if (item.Text == 'Marineblau') {
        mp.events.callRemote("modpearl", vehicle, 65);
    } else
    if (item.Text == 'Hafenblau') {
        mp.events.callRemote("modpearl", vehicle, 66);
    } else
    if (item.Text == 'Diamantblau') {
        mp.events.callRemote("modpearl", vehicle, 67);
    } else
    if (item.Text == 'Surferblau') {
        mp.events.callRemote("modpearl", vehicle, 68);
    } else
    if (item.Text == 'Nautischblau') {
        mp.events.callRemote("modpearl", vehicle, 69);
    } else
    if (item.Text == 'Hellblau') {
        mp.events.callRemote("modpearl", vehicle, 70);
    } else
    if (item.Text == 'Violettblau') {
        mp.events.callRemote("modpearl", vehicle, 71);
    } else
    if (item.Text == 'Spinnakerblau') {
        mp.events.callRemote("modpearl", vehicle, 72);
    } else
    if (item.Text == 'Ultrablau') {
        mp.events.callRemote("modpearl", vehicle, 73);
    } else
    if (item.Text == 'Hellblau 2') {
        mp.events.callRemote("modpearl", vehicle, 74);
    } else
    if (item.Text == 'Meerschaumblau') {
        mp.events.callRemote("modpearl", vehicle, 78);
    } else
    if (item.Text == 'Blitzblau') {
        mp.events.callRemote("modpearl", vehicle, 79);
    } else
    if (item.Text == 'Mauiblau') {
        mp.events.callRemote("modpearl", vehicle, 80);
    } else
    if (item.Text == 'Polizei Blau') {
        mp.events.callRemote("modpearl", vehicle, 127);
    } else
    if (item.Text == 'Epsilonblau') {
        mp.events.callRemote("modpearl", vehicle, 157);
    } else
    if (item.Text == 'Taxigelb') {
        mp.events.callRemote("modpearl", vehicle, 88);
    } else
    if (item.Text == 'Renngelb') {
        mp.events.callRemote("modpearl", vehicle, 89);
    } else
    if (item.Text == 'Vogelgelb') {
        mp.events.callRemote("modpearl", vehicle, 91);
    } else
    if (item.Text == 'Bronze') {
        mp.events.callRemote("modpearl", vehicle, 90);
    } else
    if (item.Text == 'Citrusgelb') {
        mp.events.callRemote("modpearl", vehicle, 92);
    } else
    if (item.Text == 'Champagnier') {
        mp.events.callRemote("modpearl", vehicle, 93);
    } else
    if (item.Text == 'Beige') {
        mp.events.callRemote("modpearl", vehicle, 94);
    } else
    if (item.Text == 'Elfenbein') {
        mp.events.callRemote("modpearl", vehicle, 95);
    } else
    if (item.Text == 'Schokobraun') {
        mp.events.callRemote("modpearl", vehicle, 96);
    } else
    if (item.Text == 'Goldbraun') {
        mp.events.callRemote("modpearl", vehicle, 97);
    } else
    if (item.Text == 'Hellbraun') {
        mp.events.callRemote("modpearl", vehicle, 98);
    } else
    if (item.Text == 'Strohbeige') {
        mp.events.callRemote("modpearl", vehicle, 99);
    } else
    if (item.Text == 'Moosbraun') {
        mp.events.callRemote("modpearl", vehicle, 100);
    } else
    if (item.Text == 'Bostonbraun') {
        mp.events.callRemote("modpearl", vehicle, 101);
    } else
    if (item.Text == 'Wüstenbraun') {
        mp.events.callRemote("modpearl", vehicle, 153);
    } else
    if (item.Text == 'Wüstenbräune') {
        mp.events.callRemote("modpearl", vehicle, 154);
    } else
    if (item.Text == 'Buchenholz') {
        mp.events.callRemote("modpearl", vehicle, 102);
    } else
    if (item.Text == 'Dunkles Buchenholz') {
        mp.events.callRemote("modpearl", vehicle, 103);
    } else
    if (item.Text == 'Schoko Orange') {
        mp.events.callRemote("modpearl", vehicle, 104);
    } else
    if (item.Text == 'Sandfarbend') {
        mp.events.callRemote("modpearl", vehicle, 105);
    } else
    if (item.Text == 'Sonnengebleicht') {
        mp.events.callRemote("modpearl", vehicle, 106);
    } else
    if (item.Text == 'Cremefarbend') {
        mp.events.callRemote("modpearl", vehicle, 107);
    } else
    if (item.Text == 'Honigbeige') {
        mp.events.callRemote("modpearl", vehicle, 113);
    } else
    if (item.Text == 'Weiß') {
        mp.events.callRemote("modpearl", vehicle, 111);
    } else
    if (item.Text == 'Frostweiß') {
        mp.events.callRemote("modpearl", vehicle, 112);
    } else
    if (item.Text == 'Grauweiß') {
        mp.events.callRemote("modpearl", vehicle, 121);
    } else
    if (item.Text == 'Reines Weiß') {
        mp.events.callRemote("modpearl", vehicle, 134);
    }  else
    if (item.Text == 'Heißes Pink') {
        mp.events.callRemote("modpearl", vehicle, 135);
    }  else
    if (item.Text == 'Lachsrosa') {
        mp.events.callRemote("modpearl", vehicle, 136);
    }  else
    if (item.Text == 'Vermillion Pink') {
        mp.events.callRemote("modpearl", vehicle, 137);
    }  else
    if (item.Text == 'Schwarzlila') {
        mp.events.callRemote("modpearl", vehicle, 142);
    }  else
    if (item.Text == 'Schwarzblau') {
        mp.events.callRemote("modpearl", vehicle, 141);
    }  else
    if (item.Text == 'Schwarzrot') {
        mp.events.callRemote("modpearl", vehicle, 143);
    }  else
    if (item.Text == 'Lila') {
        mp.events.callRemote("modpearl", vehicle, 145);
    }  else
    if (item.Text == 'Metallic Schwarz') {
        mp.events.callRemote("modpearl", vehicle, 15);
    }  else
    if (item.Text == 'Metallic Schwarz 2') {
        mp.events.callRemote("modpearl", vehicle, 16);
    }  else
    if (item.Text == 'Metallic Silber') {
        mp.events.callRemote("modpearl", vehicle, 17);
    }  else
    if (item.Text == 'Metallic Silber 2') {
        mp.events.callRemote("modpearl", vehicle, 18);
    }  else
    if (item.Text == 'Metallic Gun Metal') {
        mp.events.callRemote("modpearl", vehicle, 19);
    }  else
    if (item.Text == 'Metallic Schattensilber') {
        mp.events.callRemote("modpearl", vehicle, 20);
    }  else
    if (item.Text == 'Metallic Rot') {
        mp.events.callRemote("modpearl", vehicle, 43);
    }  else
    if (item.Text == 'Metallic Granatrot') {
        mp.events.callRemote("modpearl", vehicle, 45);
    }  else
    if (item.Text == 'Metallic Grün') {
        mp.events.callRemote("modpearl", vehicle, 57);
    }  else
    if (item.Text == 'Metallic Dunkelblau') {
        mp.events.callRemote("modpearl", vehicle, 75);
    }  else
    if (item.Text == 'Metallic Mitternachtsblau') {
        mp.events.callRemote("modpearl", vehicle, 76);
    }  else
    if (item.Text == 'Metallic Blau') {
        mp.events.callRemote("modpearl", vehicle, 77);
    }  else
    if (item.Text == 'Metallic Hellblau') {
        mp.events.callRemote("modpearl", vehicle, 81);
    }  else
    if (item.Text == 'Metallic Braun') {
        mp.events.callRemote("modpearl", vehicle, 108);
    }  else
    if (item.Text == 'Metallic Mittelbraun') {
        mp.events.callRemote("modpearl", vehicle, 109);
    }  else
    if (item.Text == 'Metallic Hellbraun') {
        mp.events.callRemote("modpearl", vehicle, 110);
    }
    if (item.Text == 'Matt Schwarz') {
        mp.events.callRemote("modpearl", vehicle, 12);
    }  else
    if (item.Text == 'Matt Schwarz 2') {
        mp.events.callRemote("modpearl", vehicle, 21);
    }  else
    if (item.Text == 'Matt Grau') {
        mp.events.callRemote("modpearl", vehicle, 13);
    }  else
    if (item.Text == 'Matt Hellgrau') {
        mp.events.callRemote("modpearl", vehicle, 14);
    }  else
    if (item.Text == 'Matt Graphit') {
        mp.events.callRemote("modpearl", vehicle, 22);
    }  else
    if (item.Text == 'Matt Silbergrau') {
        mp.events.callRemote("modpearl", vehicle, 23);
    }  else
    if (item.Text == 'Matt Silber') {
        mp.events.callRemote("modpearl", vehicle, 24);
    }  else
    if (item.Text == 'Matt Blausilber') {
        mp.events.callRemote("modpearl", vehicle, 25);
    }  else
    if (item.Text == 'Matt Schattensilber') {
        mp.events.callRemote("modpearl", vehicle, 26);
    }  else
    if (item.Text == 'Matt Rot') {
        mp.events.callRemote("modpearl", vehicle, 39);
    }  else
    if (item.Text == 'Matt Dunkelrot') {
        mp.events.callRemote("modpearl", vehicle, 40);
    }  else
    if (item.Text == 'Matt Orange') {
        mp.events.callRemote("modpearl", vehicle, 41);
    }  else
    if (item.Text == 'Matt Gelb') {
        mp.events.callRemote("modpearl", vehicle, 42);
    }  else
    if (item.Text == 'Matt Blau') {
        mp.events.callRemote("modpearl", vehicle, 83);
    }  else
    if (item.Text == 'Matt Mitternachtsblau') {
        mp.events.callRemote("modpearl", vehicle, 84);
    }  else
    if (item.Text == 'Matt Grün') {
        mp.events.callRemote("modpearl", vehicle, 128);
    }  else
    if (item.Text == 'Matt Braun') {
        mp.events.callRemote("modpearl", vehicle, 129);
    }  else
    if (item.Text == 'Matt Weiß') {
        mp.events.callRemote("modpearl", vehicle, 131);
    }  else
    if (item.Text == 'Matt Lila') {
        mp.events.callRemote("modpearl", vehicle, 148);
    }  else
    if (item.Text == 'Matt Dunkellila') {
        mp.events.callRemote("modpearl", vehicle, 149);
    }  else
    if (item.Text == 'Abgenutztes rot') {
        mp.events.callRemote("modpearl", vehicle, 46);
    }  else
    if (item.Text == 'Abgenutztes Dunkelrot') {
        mp.events.callRemote("modpearl", vehicle, 48);
    }  else
    if (item.Text == 'Abgenutztes Grün') {
        mp.events.callRemote("modpearl", vehicle, 59);
    }  else
    if (item.Text == 'Abgenutztes Meeresgrün') {
        mp.events.callRemote("modpearl", vehicle, 60);
    }  else
    if (item.Text == 'Abgenutztes Dunkelblau') {
        mp.events.callRemote("modpearl", vehicle, 85);
    }  else
    if (item.Text == 'Abgenutztes Blau') {
        mp.events.callRemote("modpearl", vehicle, 86);
    }  else
    if (item.Text == 'Abgenutztes Hellblau') {
        mp.events.callRemote("modpearl", vehicle, 87);
    }  else
    if (item.Text == 'Abgenutztes Braun') {
        mp.events.callRemote("modpearl", vehicle, 114);
    }  else
    if (item.Text == 'Abgenutztes Strohbeige') {
        mp.events.callRemote("modpearl", vehicle, 116);
    }  else
    if (item.Text == 'Abgenutztes Orange') {
        mp.events.callRemote("modpearl", vehicle, 123);
    }  else
    if (item.Text == 'Abgenutztes Orange 2') {
        mp.events.callRemote("modpearl", vehicle, 130);
    }  else
    if (item.Text == 'Abgenutztes Taxigelb') {
        mp.events.callRemote("modpearl", vehicle, 126);
    }  else
    if (item.Text == 'Abgenutztes Weiß') {
        mp.events.callRemote("modpearl", vehicle, 132);
    }  else
    if (item.Text == 'Abgenutztes Armeegrün') {
        mp.events.callRemote("modpearl", vehicle, 133);
    }  else
    if (item.Text == 'Gebürsteter Stahl') {
        mp.events.callRemote("modpearl", vehicle, 117);
    }  else
    if (item.Text == 'Gebürsteter Schwarzstahl') {
        mp.events.callRemote("modpearl", vehicle, 118);
    }  else
    if (item.Text == 'Gebürstetes Aluminium') {
        mp.events.callRemote("modpearl", vehicle, 119);
    }  else
    if (item.Text == 'Gebürstetes Gold') {
        mp.events.callRemote("modpearl", vehicle, 159);
    }  else
    if (item.Text == 'Legierung') {
        mp.events.callRemote("modpearl", vehicle, 156);
    }  else
    if (item.Text == 'Klassisches Gold') {
        mp.events.callRemote("modpearl", vehicle, 37);
    }  else
    if (item.Text == 'Pures Gold') {
        mp.events.callRemote("modpearl", vehicle, 158);
    }  else
    if (item.Text == 'Chrome') {
        mp.events.callRemote("modpearl", vehicle, 120);
    }
});*/

ui_Tuning_Wheels.MenuClose.on(() => {
    ui_Tuning_Wheels.RefreshIndex();
});

    // WHEELS RESET
ui_Tuning_Sportwheels.MenuClose.on(() => {
    ui_Tuning_Sportwheels.RefreshIndex();
});

ui_Tuning_Sportwheels.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if(item.Text == "Standard Felge"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, -1);
    } else
    if(item.Text == "Felge 1"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 1);
    } else
    if(item.Text == "Felge 2"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 2);
    } else
    if(item.Text == "Felge 3"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 3);
    } else
    if(item.Text == "Felge 4"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 4);
    } else
    if(item.Text == "Felge 5"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 5);
    } else
    if(item.Text == "Felge 6"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 6);
    } else
    if(item.Text == "Felge 7"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 7);
    } else
    if(item.Text == "Felge 8"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 8);
    } else
    if(item.Text == "Felge 9"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 9);
    } else
    if(item.Text == "Felge 10"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 10);
    } else
    if(item.Text == "Felge 11"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 11);
    } else
    if(item.Text == "Felge 12"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 12);
    } else
    if(item.Text == "Felge 13"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 13);
    } else
    if(item.Text == "Felge 14"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 14);
    } else
    if(item.Text == "Felge 15"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 15);
    } else
    if(item.Text == "Felge 16"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 16);
    } else
    if(item.Text == "Felge 17"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 17);
    } else
    if(item.Text == "Felge 18"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 18);
    } else
    if(item.Text == "Felge 19"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 19);
    } else
    if(item.Text == "Felge 20"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 20);
    } else
    if(item.Text == "Felge 21"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 21);
    } else
    if(item.Text == "Felge 22"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 22);
    } else
    if(item.Text == "Felge 23"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 23);
    } else
    if(item.Text == "Felge 24"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 24);
    } else
    if(item.Text == "Felge 25"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 25);
    } else
    if(item.Text == "Felge 26"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 26);
    } else
    if(item.Text == "Felge 27"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 27);
    } else
    if(item.Text == "Felge 28"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 28);
    } else
    if(item.Text == "Felge 29"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 29);
    } else
    if(item.Text == "Felge 30"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 30);
    } else
    if(item.Text == "Felge 31"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 31);
    } else
    if(item.Text == "Felge 32"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 32);
    } else
    if(item.Text == "Felge 33"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 33);
    } else
    if(item.Text == "Felge 34"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 34);
    } else
    if(item.Text == "Felge 35"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 35);
    } else
    if(item.Text == "Felge 36"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 36);
    } else
    if(item.Text == "Felge 37"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 37);
    } else
    if(item.Text == "Felge 38"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 38);
    } else
    if(item.Text == "Felge 39"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 39);
    } else
    if(item.Text == "Felge 40"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 40);
    } else
    if(item.Text == "Felge 41"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 41);
    } else
    if(item.Text == "Felge 42"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 42);
    } else
    if(item.Text == "Felge 43"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 43);
    } else
    if(item.Text == "Felge 44"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 44);
    } else
    if(item.Text == "Felge 45"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 45);
    } else
    if(item.Text == "Felge 46"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 46);
    } else
    if(item.Text == "Felge 47"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 47);
    } else
    if(item.Text == "Felge 48"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 48);
    } else
    if(item.Text == "Felge 49"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 49);
    } else
    if(item.Text == "Felge 50"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 0, 50);
    }
});


ui_Tuning_Musclewheels.MenuClose.on(() => {
    ui_Tuning_Musclewheels.RefreshIndex();
});

ui_Tuning_Musclewheels.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if(item.Text == "Standard Felge"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, -1);
    } else
    if(item.Text == "Felge 1"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 1);
    } else
    if(item.Text == "Felge 2"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 2);
    } else
    if(item.Text == "Felge 3"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 3);
    } else
    if(item.Text == "Felge 4"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 4);
    } else
    if(item.Text == "Felge 5"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 5);
    } else
    if(item.Text == "Felge 6"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 6);
    } else
    if(item.Text == "Felge 7"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 7);
    } else
    if(item.Text == "Felge 8"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 8);
    } else
    if(item.Text == "Felge 9"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 9);
    } else
    if(item.Text == "Felge 10"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 10);
    } else
    if(item.Text == "Felge 11"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 11);
    } else
    if(item.Text == "Felge 12"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 12);
    } else
    if(item.Text == "Felge 13"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 13);
    } else
    if(item.Text == "Felge 14"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 14);
    } else
    if(item.Text == "Felge 15"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 15);
    } else
    if(item.Text == "Felge 16"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 16);
    } else
    if(item.Text == "Felge 17"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 17);
    } else
    if(item.Text == "Felge 18"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 18);
    } else
    if(item.Text == "Felge 19"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 19);
    } else
    if(item.Text == "Felge 20"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 20);
    } else
    if(item.Text == "Felge 21"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 21);
    } else
    if(item.Text == "Felge 22"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 22);
    } else
    if(item.Text == "Felge 23"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 23);
    } else
    if(item.Text == "Felge 24"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 24);
    } else
    if(item.Text == "Felge 25"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 25);
    } else
    if(item.Text == "Felge 26"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 26);
    } else
    if(item.Text == "Felge 27"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 27);
    } else
    if(item.Text == "Felge 28"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 28);
    } else
    if(item.Text == "Felge 29"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 29);
    } else
    if(item.Text == "Felge 30"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 1, 30);
    }
});



ui_Tuning_Lowrider.MenuClose.on(() => {
    ui_Tuning_Lowrider.RefreshIndex();
});

ui_Tuning_Lowrider.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if(item.Text == "Standard Felge"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, -1);
    } else
    if(item.Text == "Felge 1"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 1);
    } else
    if(item.Text == "Felge 2"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 2);
    } else
    if(item.Text == "Felge 3"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 3);
    } else
    if(item.Text == "Felge 4"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 4);
    } else
    if(item.Text == "Felge 5"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 5);
    } else
    if(item.Text == "Felge 6"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 6);
    } else
    if(item.Text == "Felge 7"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 7);
    } else
    if(item.Text == "Felge 8"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 8);
    } else
    if(item.Text == "Felge 9"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 9);
    } else
    if(item.Text == "Felge 10"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 10);
    } else
    if(item.Text == "Felge 11"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 11);
    } else
    if(item.Text == "Felge 12"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 12);
    } else
    if(item.Text == "Felge 13"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 13);
    } else
    if(item.Text == "Felge 14"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 14);
    } else
    if(item.Text == "Felge 15"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 15);
    } else
    if(item.Text == "Felge 16"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 16);
    } else
    if(item.Text == "Felge 17"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 17);
    } else
    if(item.Text == "Felge 18"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 18);
    } else
    if(item.Text == "Felge 19"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 19);
    } else
    if(item.Text == "Felge 20"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 20);
    } else
    if(item.Text == "Felge 21"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 21);
    } else
    if(item.Text == "Felge 22"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 22);
    } else
    if(item.Text == "Felge 23"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 23);
    } else
    if(item.Text == "Felge 24"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 24);
    } else
    if(item.Text == "Felge 25"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 25);
    } else
    if(item.Text == "Felge 26"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 26);
    } else
    if(item.Text == "Felge 27"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 27);
    } else
    if(item.Text == "Felge 28"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 28);
    } else
    if(item.Text == "Felge 29"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 29);
    } else
    if(item.Text == "Felge 30"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 2, 30);
    }
});


ui_Tuning_Suv.MenuClose.on(() => {
    ui_Tuning_Suv.RefreshIndex();
});

ui_Tuning_Suv.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if(item.Text == "Standard Felge"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, -1);
    } else
    if(item.Text == "Felge 1"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 1);
    } else
    if(item.Text == "Felge 2"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 2);
    } else
    if(item.Text == "Felge 3"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 3);
    } else
    if(item.Text == "Felge 4"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 4);
    } else
    if(item.Text == "Felge 5"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 5);
    } else
    if(item.Text == "Felge 6"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 6);
    } else
    if(item.Text == "Felge 7"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 7);
    } else
    if(item.Text == "Felge 8"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 8);
    } else
    if(item.Text == "Felge 9"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 9);
    } else
    if(item.Text == "Felge 10"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 10);
    } else
    if(item.Text == "Felge 11"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 11);
    } else
    if(item.Text == "Felge 12"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 12);
    } else
    if(item.Text == "Felge 13"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 13);
    } else
    if(item.Text == "Felge 14"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 14);
    } else
    if(item.Text == "Felge 15"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 15);
    } else
    if(item.Text == "Felge 16"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 16);
    } else
    if(item.Text == "Felge 17"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 17);
    } else
    if(item.Text == "Felge 18"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 18);
    } else
    if(item.Text == "Felge 19"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 19);
    } else
    if(item.Text == "Felge 20"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 20);
    } else
    if(item.Text == "Felge 21"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 21);
    } else
    if(item.Text == "Felge 22"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 22);
    } else
    if(item.Text == "Felge 23"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 23);
    } else
    if(item.Text == "Felge 24"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 24);
    } else
    if(item.Text == "Felge 25"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 25);
    } else
    if(item.Text == "Felge 26"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 26);
    } else
    if(item.Text == "Felge 27"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 27);
    } else
    if(item.Text == "Felge 28"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 28);
    } else
    if(item.Text == "Felge 29"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 29);
    } else
    if(item.Text == "Felge 30"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 30);
    } else
    if(item.Text == "Felge 31"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 31);
    } else
    if(item.Text == "Felge 32"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 32);
    } else
    if(item.Text == "Felge 33"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 33);
    } else
    if(item.Text == "Felge 34"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 34);
    } else
    if(item.Text == "Felge 35"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 35);
    } else
    if(item.Text == "Felge 36"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 36);
    } else
    if(item.Text == "Felge 37"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 37);
    } else
    if(item.Text == "Felge 38"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 3, 38);
    } 
});


ui_Tuning_Offroad.MenuClose.on(() => {
    ui_Tuning_Offroad.RefreshIndex();
});

ui_Tuning_Offroad.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if(item.Text == "Standard Felge"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, -1);
    } else
    if(item.Text == "Felge 1"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 1);
    } else
    if(item.Text == "Felge 2"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 2);
    } else
    if(item.Text == "Felge 3"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 3);
    } else
    if(item.Text == "Felge 4"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 4);
    } else
    if(item.Text == "Felge 5"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 5);
    } else
    if(item.Text == "Felge 6"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 6);
    } else
    if(item.Text == "Felge 7"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 7);
    } else
    if(item.Text == "Felge 8"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 8);
    } else
    if(item.Text == "Felge 9"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 9);
    } else
    if(item.Text == "Felge 10"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 10);
    } else
    if(item.Text == "Felge 11"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 11);
    } else
    if(item.Text == "Felge 12"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 12);
    } else
    if(item.Text == "Felge 13"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 13);
    } else
    if(item.Text == "Felge 14"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 14);
    } else
    if(item.Text == "Felge 15"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 15);
    } else
    if(item.Text == "Felge 16"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 16);
    } else
    if(item.Text == "Felge 17"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 17);
    } else
    if(item.Text == "Felge 18"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 18);
    } else
    if(item.Text == "Felge 19"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 19);
    } else
    if(item.Text == "Felge 20"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 4, 20);
    }
});


ui_Tuning_Tuner.MenuClose.on(() => {
    ui_Tuning_Tuner.RefreshIndex();
});

ui_Tuning_Tuner.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if(item.Text == "Standard Felge"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, -1);
    } else
    if(item.Text == "Felge 1"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 1);
    } else
    if(item.Text == "Felge 2"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 2);
    } else
    if(item.Text == "Felge 3"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 3);
    } else
    if(item.Text == "Felge 4"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 4);
    } else
    if(item.Text == "Felge 5"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 5);
    } else
    if(item.Text == "Felge 6"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 6);
    } else
    if(item.Text == "Felge 7"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 7);
    } else
    if(item.Text == "Felge 8"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 8);
    } else
    if(item.Text == "Felge 9"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 9);
    } else
    if(item.Text == "Felge 10"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 10);
    } else
    if(item.Text == "Felge 11"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 11);
    } else
    if(item.Text == "Felge 12"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 12);
    } else
    if(item.Text == "Felge 13"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 13);
    } else
    if(item.Text == "Felge 14"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 14);
    } else
    if(item.Text == "Felge 15"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 15);
    } else
    if(item.Text == "Felge 16"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 16);
    } else
    if(item.Text == "Felge 17"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 17);
    } else
    if(item.Text == "Felge 18"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 18);
    } else
    if(item.Text == "Felge 19"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 19);
    } else
    if(item.Text == "Felge 20"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 20);
    } else
    if(item.Text == "Felge 21"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 21);
    } else
    if(item.Text == "Felge 22"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 22);
    } else
    if(item.Text == "Felge 23"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 23);
    } else
    if(item.Text == "Felge 24"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 24);
    } else
    if(item.Text == "Felge 25"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 25);
    } else
    if(item.Text == "Felge 26"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 26);
    } else
    if(item.Text == "Felge 27"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 27);
    } else
    if(item.Text == "Felge 28"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 28);
    } else
    if(item.Text == "Felge 29"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 29);
    } else
    if(item.Text == "Felge 30"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 30);
    } else
    if(item.Text == "Felge 31"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 31);
    } else
    if(item.Text == "Felge 32"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 32);
    } else
    if(item.Text == "Felge 33"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 33);
    } else
    if(item.Text == "Felge 34"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 34);
    } else
    if(item.Text == "Felge 35"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 35);
    } else
    if(item.Text == "Felge 36"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 36);
    } else
    if(item.Text == "Felge 37"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 37);
    } else
    if(item.Text == "Felge 38"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 38);
    } else
    if(item.Text == "Felge 39"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 39);
    } else
    if(item.Text == "Felge 40"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 40);
    } else
    if(item.Text == "Felge 41"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 41);
    } else
    if(item.Text == "Felge 42"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 42);
    } else
    if(item.Text == "Felge 43"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 43);
    } else
    if(item.Text == "Felge 44"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 44);
    } else
    if(item.Text == "Felge 45"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 45);
    } else
    if(item.Text == "Felge 46"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 46);
    } else
    if(item.Text == "Felge 47"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 47);
    } else
    if(item.Text == "Felge 48"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 5, 48);
    }
});


ui_Tuning_Highend.MenuClose.on(() => {
    ui_Tuning_Highend.RefreshIndex();
});

ui_Tuning_Highend.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if(item.Text == "Standard Felge"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, -1);
    } else
    if(item.Text == "Felge 1"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 1);
    } else
    if(item.Text == "Felge 2"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 2);
    } else
    if(item.Text == "Felge 3"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 3);
    } else
    if(item.Text == "Felge 4"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 4);
    } else
    if(item.Text == "Felge 5"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 5);
    } else
    if(item.Text == "Felge 6"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 6);
    } else
    if(item.Text == "Felge 7"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 7);
    } else
    if(item.Text == "Felge 8"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 8);
    } else
    if(item.Text == "Felge 9"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 9);
    } else
    if(item.Text == "Felge 10"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 10);
    } else
    if(item.Text == "Felge 11"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 11);
    } else
    if(item.Text == "Felge 12"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 12);
    } else
    if(item.Text == "Felge 13"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 13);
    } else
    if(item.Text == "Felge 14"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 14);
    } else
    if(item.Text == "Felge 15"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 15);
    } else
    if(item.Text == "Felge 16"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 16);
    } else
    if(item.Text == "Felge 17"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 17);
    } else
    if(item.Text == "Felge 18"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 18);
    } else
    if(item.Text == "Felge 19"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 19);
    } else
    if(item.Text == "Felge 20"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 20);
    } else
    if(item.Text == "Felge 21"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 21);
    } else
    if(item.Text == "Felge 22"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 22);
    } else
    if(item.Text == "Felge 23"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 23);
    } else
    if(item.Text == "Felge 24"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 24);
    } else
    if(item.Text == "Felge 25"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 25);
    } else
    if(item.Text == "Felge 26"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 26);
    } else
    if(item.Text == "Felge 27"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 27);
    } else
    if(item.Text == "Felge 28"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 28);
    } else
    if(item.Text == "Felge 29"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 29);
    } else
    if(item.Text == "Felge 30"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 30);
    } else
    if(item.Text == "Felge 31"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 31);
    } else
    if(item.Text == "Felge 32"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 32);
    } else
    if(item.Text == "Felge 33"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 33);
    } else
    if(item.Text == "Felge 34"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 34);
    } else
    if(item.Text == "Felge 35"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 35);
    } else
    if(item.Text == "Felge 36"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 36);
    } else
    if(item.Text == "Felge 37"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 37);
    } else
    if(item.Text == "Felge 38"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 38);
    } else
    if(item.Text == "Felge 39"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 39);
    } else
    if(item.Text == "Felge 40"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 7, 40);
    }
});


ui_Tuning_Bennys1.MenuClose.on(() => {
    ui_Tuning_Bennys1.RefreshIndex();
});

ui_Tuning_Bennys1.ItemSelect.on( item => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);

    if(item.Text == "Standard Felge"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, -1);
    } else
    if(item.Text == "Felge 1"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 1);
    } else
    if(item.Text == "Felge 2"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 2);
    } else
    if(item.Text == "Felge 3"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 3);
    } else
    if(item.Text == "Felge 4"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 4);
    } else
    if(item.Text == "Felge 5"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 5);
    } else
    if(item.Text == "Felge 6"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 6);
    } else
    if(item.Text == "Felge 7"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 7);
    } else
    if(item.Text == "Felge 8"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 8);
    } else
    if(item.Text == "Felge 9"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 9);
    } else
    if(item.Text == "Felge 10"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 10);
    } else
    if(item.Text == "Felge 11"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 11);
    } else
    if(item.Text == "Felge 12"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 12);
    } else
    if(item.Text == "Felge 13"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 13);
    } else
    if(item.Text == "Felge 14"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 14);
    } else
    if(item.Text == "Felge 15"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 15);
    } else
    if(item.Text == "Felge 16"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 16);
    } else
    if(item.Text == "Felge 17"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 17);
    } else
    if(item.Text == "Felge 18"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 18);
    } else
    if(item.Text == "Felge 19"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 19);
    } else
    if(item.Text == "Felge 20"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 20);
    } else
    if(item.Text == "Felge 21"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 21);
    } else
    if(item.Text == "Felge 22"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 22);
    } else
    if(item.Text == "Felge 23"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 23);
    } else
    if(item.Text == "Felge 24"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 24);
    } else
    if(item.Text == "Felge 25"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 25);
    } else
    if(item.Text == "Felge 26"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 26);
    } else
    if(item.Text == "Felge 27"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 27);
    } else
    if(item.Text == "Felge 28"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 28);
    } else
    if(item.Text == "Felge 29"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 29);
    } else
    if(item.Text == "Felge 30"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 30);
    } else
    if(item.Text == "Felge 31"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 31);
    } else
    if(item.Text == "Felge 32"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 32);
    } else
    if(item.Text == "Felge 33"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 33);
    } else
    if(item.Text == "Felge 34"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 34);
    } else
    if(item.Text == "Felge 35"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 35);
    } else
    if(item.Text == "Felge 36"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 36);
    } else
    if(item.Text == "Felge 37"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 37);
    } else
    if(item.Text == "Felge 38"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 38);
    } else
    if(item.Text == "Felge 39"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 39);
    } else
    if(item.Text == "Felge 40"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 40);
    } else
    if(item.Text == "Felge 41"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 41);
    } else
    if(item.Text == "Felge 42"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 42);
    } else
    if(item.Text == "Felge 43"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 43);
    } else
    if(item.Text == "Felge 44"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 44);
    } else
    if(item.Text == "Felge 45"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 45);
    } else
    if(item.Text == "Felge 46"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 46);
    } else
    if(item.Text == "Felge 47"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 47);
    } else
    if(item.Text == "Felge 48"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 48);
    } else
    if(item.Text == "Felge 49"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 49);
    } else
    if(item.Text == "Felge 50"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 50);
    } else
    if(item.Text == "Felge 51"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 51);
    } else
    if(item.Text == "Felge 52"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 52);
    } else
    if(item.Text == "Felge 53"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 53);
    } else
    if(item.Text == "Felge 54"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 54);
    } else
    if(item.Text == "Felge 55"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 55);
    } else
    if(item.Text == "Felge 56"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 56);
    } else
    if(item.Text == "Felge 57"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 57);
    } else
    if(item.Text == "Felge 58"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 58);
    } else
    if(item.Text == "Felge 59"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 59);
    } else
    if(item.Text == "Felge 60"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 60);
    } else
    if(item.Text == "Felge 61"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 61);
    } else
    if(item.Text == "Felge 62"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 62);
    } else
    if(item.Text == "Felge 63"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 63);
    } else
    if(item.Text == "Felge 64"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 64);
    } else
    if(item.Text == "Felge 65"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 65);
    } else
    if(item.Text == "Felge 66"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 66);
    } else
    if(item.Text == "Felge 67"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 67);
    } else
    if(item.Text == "Felge 68"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 68);
    } else
    if(item.Text == "Felge 69"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 69);
    } else
    if(item.Text == "Felge 70"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 70);
    } else
    if(item.Text == "Felge 71"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 71);
    } else
    if(item.Text == "Felge 72"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 72);
    } else
    if(item.Text == "Felge 73"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 73);
    } else
    if(item.Text == "Felge 74"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 74);
    } else
    if(item.Text == "Felge 75"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 75);
    } else
    if(item.Text == "Felge 76"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 76);
    } else
    if(item.Text == "Felge 77"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 77);
    } else
    if(item.Text == "Felge 78"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 78);
    } else
    if(item.Text == "Felge 79"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 79);
    } else
    if(item.Text == "Felge 80"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 80);
    } else
    if(item.Text == "Felge 81"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 81);
    } else
    if(item.Text == "Felge 82"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 82);
    } else
    if(item.Text == "Felge 83"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 83);
    } else
    if(item.Text == "Felge 84"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 84);
    } else
    if(item.Text == "Felge 85"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 85);
    } else
    if(item.Text == "Felge 86"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 86);
    } else
    if(item.Text == "Felge 87"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 87);
    } else
    if(item.Text == "Felge 88"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 88);
    } else
    if(item.Text == "Felge 89"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 89);
    } else
    if(item.Text == "Felge 90"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 90);
    } else
    if(item.Text == "Felge 91"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 91);
    } else
    if(item.Text == "Felge 92"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 92);
    } else
    if(item.Text == "Felge 93"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 93);
    } else
    if(item.Text == "Felge 94"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 94);
    } else
    if(item.Text == "Felge 95"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 95);
    } else
    if(item.Text == "Felge 96"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 96);
    } else
    if(item.Text == "Felge 97"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 97);
    } else
    if(item.Text == "Felge 98"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 98);
    } else
    if(item.Text == "Felge 99"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 99);
    } else
    if(item.Text == "Felge 100"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 100);
    } else
    if(item.Text == "Felge 101"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 101);
    } else
    if(item.Text == "Felge 102"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 102);
    } else
    if(item.Text == "Felge 103"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 103);
    } else
    if(item.Text == "Felge 104"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 104);
    } else 
    if(item.Text == "Felge 105"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 105);
    } else
    if(item.Text == "Felge 106"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 106);
    } else
    if(item.Text == "Felge 107"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 107);
    } else
    if(item.Text == "Felge 108"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 108);
    } else
    if(item.Text == "Felge 109"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 109);
    } else
    if(item.Text == "Felge 110"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 110);
    } else
    if(item.Text == "Felge 111"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 111);
    } else
    if(item.Text == "Felge 112"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 112);
    } else
    if(item.Text == "Felge 113"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 113);
    } else
    if(item.Text == "Felge 114"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 114);
    } else
    if(item.Text == "Felge 115"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 115);
    } else
    if(item.Text == "Felge 116"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 116);
    } else
    if(item.Text == "Felge 117"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 117);
    } else
    if(item.Text == "Felge 118"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 118);
    } else
    if(item.Text == "Felge 119"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 119);
    } else
    if(item.Text == "Felge 120"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 120);
    } else
    if(item.Text == "Felge 121"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 121);
    } else
    if(item.Text == "Felge 122"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 122);
    } else
    if(item.Text == "Felge 123"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 123);
    } else
    if(item.Text == "Felge 124"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 124);
    } else
    if(item.Text == "Felge 125"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 125);
    } else
    if(item.Text == "Felge 126"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 126);
    } else
    if(item.Text == "Felge 127"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 127);
    } else
    if(item.Text == "Felge 128"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 128);
    } else
    if(item.Text == "Felge 129"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 129);
    } else
    if(item.Text == "Felge 130"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 130);
    } else
    if(item.Text == "Felge 131"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 131);
    } else
    if(item.Text == "Felge 132"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 132);
    } else
    if(item.Text == "Felge 133"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 133);
    } else
    if(item.Text == "Felge 134"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 134);
    } else
    if(item.Text == "Felge 135"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 135);
    } else
    if(item.Text == "Felge 136"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 136);
    } else
    if(item.Text == "Felge 137"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 137);
    } else
    if(item.Text == "Felge 138"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 138);
    } else
    if(item.Text == "Felge 139"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 139);
    } else
    if(item.Text == "Felge 140"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 140);
    } else
    if(item.Text == "Felge 141"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 141);
    } else
    if(item.Text == "Felge 142"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 142);
    } else
    if(item.Text == "Felge 143"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 143);
    } else
    if(item.Text == "Felge 144"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 144);
    } else
    if(item.Text == "Felge 145"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 145);
    } else
    if(item.Text == "Felge 146"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 146);
    } else
    if(item.Text == "Felge 147"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 147);
    } else
    if(item.Text == "Felge 148"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 148);
    } else
    if(item.Text == "Felge 149"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 149);
    } else
    if(item.Text == "Felge 150"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 150);
    } else 
    if(item.Text == "Felge 151"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 151);
    } else
    if(item.Text == "Felge 152"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 152);
    } else
    if(item.Text == "Felge 153"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 153);
    } else
    if(item.Text == "Felge 154"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 154);
    } else
    if(item.Text == "Felge 155"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 155);
    } else
    if(item.Text == "Felge 156"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 156);
    } else
    if(item.Text == "Felge 157"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 157);
    } else
    if(item.Text == "Felge 158"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 158);
    } else
    if(item.Text == "Felge 159"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 159);
    } else
    if(item.Text == "Felge 160"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 160);
    } else
    if(item.Text == "Felge 161"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 161);
    } else
    if(item.Text == "Felge 162"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 162);
    } else
    if(item.Text == "Felge 163"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 163);
    } else
    if(item.Text == "Felge 164"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 164);
    } else
    if(item.Text == "Felge 165"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 165);
    } else
    if(item.Text == "Felge 166"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 166);
    } else
    if(item.Text == "Felge 167"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 167);
    } else
    if(item.Text == "Felge 168"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 168);
    } else
    if(item.Text == "Felge 169"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 169);
    } else
    if(item.Text == "Felge 170"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 170);
    } else
    if(item.Text == "Felge 171"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 171);
    } else
    if(item.Text == "Felge 172"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 172);
    } else
    if(item.Text == "Felge 173"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 173);
    } else
    if(item.Text == "Felge 174"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 174);
    } else
    if(item.Text == "Felge 175"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 175);
    } else
    if(item.Text == "Felge 176"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 176);
    } else
    if(item.Text == "Felge 177"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 177);
    } else
    if(item.Text == "Felge 178"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 178);
    } else
    if(item.Text == "Felge 179"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 179);
    } else
    if(item.Text == "Felge 180"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 180);
    } else
    if(item.Text == "Felge 181"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 181);
    } else
    if(item.Text == "Felge 182"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 182);
    } else
    if(item.Text == "Felge 183"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 183);
    } else
    if(item.Text == "Felge 184"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 184);
    } else
    if(item.Text == "Felge 185"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 185);
    } else
    if(item.Text == "Felge 186"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 186);
    } else
    if(item.Text == "Felge 187"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 187);
    } else
    if(item.Text == "Felge 188"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 188);
    } else
    if(item.Text == "Felge 189"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 189);
    } else
    if(item.Text == "Felge 190"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 190);
    } else
    if(item.Text == "Felge 191"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 191);
    } else
    if(item.Text == "Felge 192"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 192);
    } else
    if(item.Text == "Felge 193"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 193);
    } else
    if(item.Text == "Felge 194"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 194);
    } else
    if(item.Text == "Felge 195"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 195);
    } else
    if(item.Text == "Felge 196"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 196);
    } else 
    if(item.Text == "Felge 197"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 197);
    } else
    if(item.Text == "Felge 198"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 198);
    } else
    if(item.Text == "Felge 199"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 199);
    } else
    if(item.Text == "Felge 200"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 200);
    } else
    if(item.Text == "Felge 201"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 201);
    } else
    if(item.Text == "Felge 202"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 202);
    } else
    if(item.Text == "Felge 203"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 203);
    } else
    if(item.Text == "Felge 204"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 204);
    } else
    if(item.Text == "Felge 205"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 205);
    } else
    if(item.Text == "Felge 206"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 206);
    } else
    if(item.Text == "Felge 207"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 207);
    } else
    if(item.Text == "Felge 208"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 208);
    } else
    if(item.Text == "Felge 209"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 209);
    } else
    if(item.Text == "Felge 210"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 210);
    } else
    if(item.Text == "Felge 211"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 211);
    } else
    if(item.Text == "Felge 212"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 212);
    } else
    if(item.Text == "Felge 213"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 213);
    } else
    if(item.Text == "Felge 214"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 214);
    } else
    if(item.Text == "Felge 215"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 215);
    } else
    if(item.Text == "Felge 216"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 216);
    } else
    if(item.Text == "Felge 217"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 8, 217);
    }
});


ui_Tuning_Bennys2.MenuClose.on(() => {
    ui_Tuning_Bennys2.RefreshIndex();
});

ui_Tuning_Bennys2.ItemSelect.on( item => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);

    if(item.Text == "Standard Felge"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, -1);
    } else
    if(item.Text == "Felge 1"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 1);
    } else
    if(item.Text == "Felge 2"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 2);
    } else
    if(item.Text == "Felge 3"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 3);
    } else
    if(item.Text == "Felge 4"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 4);
    } else
    if(item.Text == "Felge 5"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 5);
    } else
    if(item.Text == "Felge 6"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 6);
    } else
    if(item.Text == "Felge 7"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 7);
    } else
    if(item.Text == "Felge 8"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 8);
    } else
    if(item.Text == "Felge 9"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 9);
    } else
    if(item.Text == "Felge 10"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 10);
    } else
    if(item.Text == "Felge 11"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 11);
    } else
    if(item.Text == "Felge 12"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 12);
    } else
    if(item.Text == "Felge 13"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 13);
    } else
    if(item.Text == "Felge 14"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 14);
    } else
    if(item.Text == "Felge 15"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 15);
    } else
    if(item.Text == "Felge 16"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 16);
    } else
    if(item.Text == "Felge 17"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 17);
    } else
    if(item.Text == "Felge 18"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 18);
    } else
    if(item.Text == "Felge 19"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 19);
    } else
    if(item.Text == "Felge 20"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 20);
    } else
    if(item.Text == "Felge 21"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 21);
    } else
    if(item.Text == "Felge 22"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 22);
    } else
    if(item.Text == "Felge 23"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 23);
    } else
    if(item.Text == "Felge 24"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 24);
    } else
    if(item.Text == "Felge 25"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 25);
    } else
    if(item.Text == "Felge 26"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 26);
    } else
    if(item.Text == "Felge 27"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 27);
    } else
    if(item.Text == "Felge 28"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 28);
    } else
    if(item.Text == "Felge 29"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 29);
    } else
    if(item.Text == "Felge 30"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 30);
    } else
    if(item.Text == "Felge 31"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 31);
    } else
    if(item.Text == "Felge 32"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 32);
    } else
    if(item.Text == "Felge 33"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 33);
    } else
    if(item.Text == "Felge 34"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 34);
    } else
    if(item.Text == "Felge 35"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 35);
    } else
    if(item.Text == "Felge 36"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 36);
    } else
    if(item.Text == "Felge 37"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 37);
    } else
    if(item.Text == "Felge 38"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 38);
    } else
    if(item.Text == "Felge 39"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 39);
    } else
    if(item.Text == "Felge 40"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 40);
    } else
    if(item.Text == "Felge 41"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 41);
    } else
    if(item.Text == "Felge 42"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 42);
    } else
    if(item.Text == "Felge 43"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 43);
    } else
    if(item.Text == "Felge 44"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 44);
    } else
    if(item.Text == "Felge 45"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 45);
    } else
    if(item.Text == "Felge 46"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 46);
    } else
    if(item.Text == "Felge 47"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 47);
    } else
    if(item.Text == "Felge 48"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 48);
    } else
    if(item.Text == "Felge 49"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 49);
    } else
    if(item.Text == "Felge 50"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 50);
    } else
    if(item.Text == "Felge 51"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 51);
    } else
    if(item.Text == "Felge 52"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 52);
    } else
    if(item.Text == "Felge 53"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 53);
    } else
    if(item.Text == "Felge 54"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 54);
    } else
    if(item.Text == "Felge 55"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 55);
    } else
    if(item.Text == "Felge 56"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 56);
    } else
    if(item.Text == "Felge 57"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 57);
    } else
    if(item.Text == "Felge 58"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 58);
    } else
    if(item.Text == "Felge 59"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 59);
    } else
    if(item.Text == "Felge 60"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 60);
    } else
    if(item.Text == "Felge 61"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 61);
    } else
    if(item.Text == "Felge 62"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 62);
    } else
    if(item.Text == "Felge 63"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 63);
    } else
    if(item.Text == "Felge 64"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 64);
    } else
    if(item.Text == "Felge 65"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 65);
    } else
    if(item.Text == "Felge 66"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 66);
    } else
    if(item.Text == "Felge 67"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 67);
    } else
    if(item.Text == "Felge 68"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 68);
    } else
    if(item.Text == "Felge 69"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 69);
    } else
    if(item.Text == "Felge 70"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 70);
    } else
    if(item.Text == "Felge 71"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 71);
    } else
    if(item.Text == "Felge 72"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 72);
    } else
    if(item.Text == "Felge 73"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 73);
    } else
    if(item.Text == "Felge 74"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 74);
    } else
    if(item.Text == "Felge 75"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 75);
    } else
    if(item.Text == "Felge 76"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 76);
    } else
    if(item.Text == "Felge 77"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 77);
    } else
    if(item.Text == "Felge 78"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 78);
    } else
    if(item.Text == "Felge 79"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 79);
    } else
    if(item.Text == "Felge 80"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 80);
    } else
    if(item.Text == "Felge 81"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 81);
    } else
    if(item.Text == "Felge 82"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 82);
    } else
    if(item.Text == "Felge 83"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 83);
    } else
    if(item.Text == "Felge 84"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 84);
    } else
    if(item.Text == "Felge 85"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 85);
    } else
    if(item.Text == "Felge 86"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 86);
    } else
    if(item.Text == "Felge 87"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 87);
    } else
    if(item.Text == "Felge 88"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 88);
    } else
    if(item.Text == "Felge 89"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 89);
    } else
    if(item.Text == "Felge 90"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 90);
    } else
    if(item.Text == "Felge 91"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 91);
    } else
    if(item.Text == "Felge 92"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 92);
    } else
    if(item.Text == "Felge 93"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 93);
    } else
    if(item.Text == "Felge 94"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 94);
    } else
    if(item.Text == "Felge 95"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 95);
    } else
    if(item.Text == "Felge 96"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 96);
    } else
    if(item.Text == "Felge 97"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 97);
    } else
    if(item.Text == "Felge 98"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 98);
    } else
    if(item.Text == "Felge 99"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 99);
    } else
    if(item.Text == "Felge 100"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 100);
    } else
    if(item.Text == "Felge 101"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 101);
    } else
    if(item.Text == "Felge 102"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 102);
    } else
    if(item.Text == "Felge 103"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 103);
    } else
    if(item.Text == "Felge 104"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 104);
    } else 
    if(item.Text == "Felge 105"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 105);
    } else
    if(item.Text == "Felge 106"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 106);
    } else
    if(item.Text == "Felge 107"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 107);
    } else
    if(item.Text == "Felge 108"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 108);
    } else
    if(item.Text == "Felge 109"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 109);
    } else
    if(item.Text == "Felge 110"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 110);
    } else
    if(item.Text == "Felge 111"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 111);
    } else
    if(item.Text == "Felge 112"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 112);
    } else
    if(item.Text == "Felge 113"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 113);
    } else
    if(item.Text == "Felge 114"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 114);
    } else
    if(item.Text == "Felge 115"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 115);
    } else
    if(item.Text == "Felge 116"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 116);
    } else
    if(item.Text == "Felge 117"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 117);
    } else
    if(item.Text == "Felge 118"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 118);
    } else
    if(item.Text == "Felge 119"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 119);
    } else
    if(item.Text == "Felge 120"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 120);
    } else
    if(item.Text == "Felge 121"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 121);
    } else
    if(item.Text == "Felge 122"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 122);
    } else
    if(item.Text == "Felge 123"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 123);
    } else
    if(item.Text == "Felge 124"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 124);
    } else
    if(item.Text == "Felge 125"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 125);
    } else
    if(item.Text == "Felge 126"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 126);
    } else
    if(item.Text == "Felge 127"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 127);
    } else
    if(item.Text == "Felge 128"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 128);
    } else
    if(item.Text == "Felge 129"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 129);
    } else
    if(item.Text == "Felge 130"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 130);
    } else
    if(item.Text == "Felge 131"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 131);
    } else
    if(item.Text == "Felge 132"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 132);
    } else
    if(item.Text == "Felge 133"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 133);
    } else
    if(item.Text == "Felge 134"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 134);
    } else
    if(item.Text == "Felge 135"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 135);
    } else
    if(item.Text == "Felge 136"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 136);
    } else
    if(item.Text == "Felge 137"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 137);
    } else
    if(item.Text == "Felge 138"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 138);
    } else
    if(item.Text == "Felge 139"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 139);
    } else
    if(item.Text == "Felge 140"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 140);
    } else
    if(item.Text == "Felge 141"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 141);
    } else
    if(item.Text == "Felge 142"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 142);
    } else
    if(item.Text == "Felge 143"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 143);
    } else
    if(item.Text == "Felge 144"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 144);
    } else
    if(item.Text == "Felge 145"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 145);
    } else
    if(item.Text == "Felge 146"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 146);
    } else
    if(item.Text == "Felge 147"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 147);
    } else
    if(item.Text == "Felge 148"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 148);
    } else
    if(item.Text == "Felge 149"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 149);
    } else
    if(item.Text == "Felge 150"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 150);
    } else 
    if(item.Text == "Felge 151"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 151);
    } else
    if(item.Text == "Felge 152"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 152);
    } else
    if(item.Text == "Felge 153"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 153);
    } else
    if(item.Text == "Felge 154"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 154);
    } else
    if(item.Text == "Felge 155"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 155);
    } else
    if(item.Text == "Felge 156"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 156);
    } else
    if(item.Text == "Felge 157"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 157);
    } else
    if(item.Text == "Felge 158"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 158);
    } else
    if(item.Text == "Felge 159"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 159);
    } else
    if(item.Text == "Felge 160"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 160);
    } else
    if(item.Text == "Felge 161"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 161);
    } else
    if(item.Text == "Felge 162"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 162);
    } else
    if(item.Text == "Felge 163"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 163);
    } else
    if(item.Text == "Felge 164"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 164);
    } else
    if(item.Text == "Felge 165"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 165);
    } else
    if(item.Text == "Felge 166"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 166);
    } else
    if(item.Text == "Felge 167"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 167);
    } else
    if(item.Text == "Felge 168"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 168);
    } else
    if(item.Text == "Felge 169"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 169);
    } else
    if(item.Text == "Felge 170"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 170);
    } else
    if(item.Text == "Felge 171"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 171);
    } else
    if(item.Text == "Felge 172"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 172);
    } else
    if(item.Text == "Felge 173"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 173);
    } else
    if(item.Text == "Felge 174"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 174);
    } else
    if(item.Text == "Felge 175"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 175);
    } else
    if(item.Text == "Felge 176"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 176);
    } else
    if(item.Text == "Felge 177"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 177);
    } else
    if(item.Text == "Felge 178"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 178);
    } else
    if(item.Text == "Felge 179"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 179);
    } else
    if(item.Text == "Felge 180"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 180);
    } else
    if(item.Text == "Felge 181"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 181);
    } else
    if(item.Text == "Felge 182"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 182);
    } else
    if(item.Text == "Felge 183"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 183);
    } else
    if(item.Text == "Felge 184"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 184);
    } else
    if(item.Text == "Felge 185"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 185);
    } else
    if(item.Text == "Felge 186"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 186);
    } else
    if(item.Text == "Felge 187"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 187);
    } else
    if(item.Text == "Felge 188"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 188);
    } else
    if(item.Text == "Felge 189"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 189);
    } else
    if(item.Text == "Felge 190"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 190);
    } else
    if(item.Text == "Felge 191"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 191);
    } else
    if(item.Text == "Felge 192"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 192);
    } else
    if(item.Text == "Felge 193"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 193);
    } else
    if(item.Text == "Felge 194"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 194);
    } else
    if(item.Text == "Felge 195"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 195);
    } else
    if(item.Text == "Felge 196"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 196);
    } else 
    if(item.Text == "Felge 197"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 197);
    } else
    if(item.Text == "Felge 198"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 198);
    } else
    if(item.Text == "Felge 199"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 199);
    } else
    if(item.Text == "Felge 200"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 200);
    } else
    if(item.Text == "Felge 201"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 201);
    } else
    if(item.Text == "Felge 202"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 202);
    } else
    if(item.Text == "Felge 203"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 203);
    } else
    if(item.Text == "Felge 204"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 204);
    } else
    if(item.Text == "Felge 205"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 205);
    } else
    if(item.Text == "Felge 206"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 206);
    } else
    if(item.Text == "Felge 207"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 207);
    } else
    if(item.Text == "Felge 208"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 208);
    } else
    if(item.Text == "Felge 209"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 209);
    } else
    if(item.Text == "Felge 210"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 210);
    } else
    if(item.Text == "Felge 211"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 211);
    } else
    if(item.Text == "Felge 212"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 212);
    } else
    if(item.Text == "Felge 213"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 213);
    } else
    if(item.Text == "Felge 214"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 214);
    } else
    if(item.Text == "Felge 215"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 215);
    } else
    if(item.Text == "Felge 216"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 216);
    } else
    if(item.Text == "Felge 217"){
        mp.events.callRemote("Server:CarTuner:setWheels", vehicle, 9, 217);
    }
});



/*ui_Wheelcolor.MenuClose.on(() => {
    ui_Wheelcolor.RefreshIndex();
});

ui_Wheelcolor.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);

    if (item.Text == 'Metallic Schwarz') {
        mp.events.callRemote("modwheelcolor", vehicle, 0, 0);
    } else
    if (item.Text == 'Metallic Weiß') {
        mp.events.callRemote("modwheelcolor", vehicle, 111, 111);
    } else
    if (item.Text == 'Metallic Blau') {
        mp.events.callRemote("modwheelcolor", vehicle, 64, 64);
    } else
    if (item.Text == 'Metallic Grün') {
        mp.events.callRemote("modwheelcolor", vehicle, 53, 53);
    } else
    if (item.Text == 'Metallic Gelb') {
        mp.events.callRemote("modwheelcolor", vehicle, 91, 91);
    } else
    if (item.Text == 'Metallic Rot') {
        mp.events.callRemote("modwheelcolor", vehicle, 27, 27);
    } else
    if (item.Text == 'Metallic Lila') {
        mp.events.callRemote("modwheelcolor", vehicle, 145, 145);
    }
});*/

    // WINDOWTINT RESET
ui_Windowtint.MenuClose.on(() => {
    ui_Windowtint.RefreshIndex();
});

ui_Windowtint.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if (item.text == 'Standard Tönung') {
        mp.events.callRemote("modwindowtint", vehicle, -1);
    } else
    if (item.Text == 'Leichte Tönung') {
        mp.events.callRemote("modwindowtint", vehicle, 3);
    } else
    if (item.Text == 'Mittlere Tönung') {
        mp.events.callRemote("modwindowtint", vehicle, 2);
    } else
    if (item.Text == 'Starke Tönung') {
        mp.events.callRemote("modwindowtint", vehicle, 1);
    }
});

    // DESIGN RESET
ui_Design.MenuClose.on(() => {
    ui_Design.RefreshIndex();
});

ui_Design.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);

    if (item.Text == 'Kein Design') {
        mp.events.callRemote("mod", vehicle, 48, -1);
    } else
    if (item.Text == 'Design 1') {
        mp.events.callRemote("mod", vehicle, 48, 0);
    } else
    if (item.Text == 'Design 2') {
        mp.events.callRemote("mod", vehicle, 48, 1);
    } else
    if (item.Text == 'Design 3') {
        mp.events.callRemote("mod", vehicle, 48, 2);
    } else
    if (item.Text == 'Design 4') {
        mp.events.callRemote("mod", vehicle, 48, 3);
    } else
    if (item.Text == 'Design 5') {
        mp.events.callRemote("mod", vehicle, 48, 4);
    } else
    if (item.Text == 'Design 6') {
        mp.events.callRemote("mod", vehicle, 48, 5);
    } else
    if (item.Text == 'Design 7') {
        mp.events.callRemote("mod", vehicle, 48, 6);
    } else
    if (item.Text == 'Design 8') {
        mp.events.callRemote("mod", vehicle, 48, 7);
    } else
    if (item.Text == 'Design 9') {
        mp.events.callRemote("mod", vehicle, 48, 8);
    } else
    if (item.Text == 'Design 10') {
        mp.events.callRemote("mod", vehicle, 48, 9);
    }
});

  /*  // NEON RESET
ui_Neon.MenuClose.on(() => {
    ui_Neon.RefreshIndex();
});*/

/*ui_Neon.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if (item.Text == 'Neon ausbauen') {
        mp.events.callRemote("modneon", vehicle, false);
    } else
    if (item.Text == 'Neon einbauen') {
        mp.events.callRemote("modneon", vehicle, true);
    }
});*/

    // NEONCOLOR RESET
ui_Neoncolor.MenuClose.on(() => {
    ui_Neoncolor.RefreshIndex();
});

ui_Neoncolor.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if (item.Text == 'Roter Reifenrauch') {
        mp.events.callRemote("modwheelcolor2", vehicle, 255, 0, 0);
    } else
    if (item.Text == 'Pinker Reifenrauch') {
        mp.events.callRemote("modwheelcolor2", vehicle, 255, 0, 255);
    } else
    if (item.Text == 'Lila Reifenrauch') {
        mp.events.callRemote("modwheelcolor2", vehicle, 153, 51, 255);
    } else
    if (item.Text == 'Blauer Reifenrauch') {
        mp.events.callRemote("modwheelcolor2", vehicle, 0, 0, 255);
    } else
    if (item.Text == 'Hellblauer Reifenrauch') {
        mp.events.callRemote("modwheelcolor2", vehicle, 0, 153, 255);
    } else
    if (item.Text == 'Grüner Reifenrauch') {
        mp.events.callRemote("modwheelcolor2", vehicle, 51, 204, 51);
    } else
    if (item.Text == 'Gelber Reifenrauch') {
        mp.events.callRemote("modwheelcolor2", vehicle, 255, 255, 0);
    } else
    if (item.Text == 'Oranger Reifenrauch') {
        mp.events.callRemote("modwheelcolor2", vehicle, 255, 102, 0);
    } else
    if (item.Text == 'Weißer Reifenrauch') {
        mp.events.callRemote("modwheelcolor2", vehicle, 255, 255, 255);
    }
});

    // SPOILER RESET
ui_Spoiler.MenuClose.on(() => {
    ui_Spoiler.RefreshIndex();
});

ui_Spoiler.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);

    if (item.Text == 'Kein Spoiler') {
        mp.events.callRemote("mod", vehicle, 0, -1);
    } else
    if (item.Text == 'Spoiler 1') {
        mp.events.callRemote("mod", vehicle, 0, 0);
    } else
    if (item.Text == 'Spoiler 2') {
        mp.events.callRemote("mod", vehicle, 0, 1);
    } else
    if (item.Text == 'Spoiler 3') {
        mp.events.callRemote("mod", vehicle, 0, 2);
    } else
    if (item.Text == 'Spoiler 4') {
        mp.events.callRemote("mod", vehicle, 0, 3);
    } else
    if (item.Text == 'Spoiler 5') {
        mp.events.callRemote("mod", vehicle, 0, 4);
    } else
    if (item.Text == 'Spoiler 6') {
        mp.events.callRemote("mod", vehicle, 0, 5);
    } else
    if (item.Text == 'Spoiler 7') {
        mp.events.callRemote("mod", vehicle, 0, 6);
    } else
    if (item.Text == 'Spoiler 8') {
        mp.events.callRemote("mod", vehicle, 0 ,7);
    } else
    if (item.Text == 'Spoiler 9') {
        mp.events.callRemote("mod", vehicle, 0, 8);
    } else
    if (item.Text == 'Spoiler 10') {
        mp.events.callRemote("mod", vehicle, 0 , 9);
    }
});

    // HOODS RESET
    ui_Hoods.MenuClose.on(() => {
        ui_Hoods.RefreshIndex();
    });

ui_Hoods.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if (item.Text == 'Standard Motorhaube') {
        mp.events.callRemote("mod", vehicle, 7, -1);
    } else
    if (item.Text == 'Motorhaube 1') {
        mp.events.callRemote("mod", vehicle, 7, 0);
    } else
    if (item.Text == 'Motorhaube 2') {
        mp.events.callRemote("mod", vehicle, 7, 1);
    } else
    if (item.Text == 'Motorhaube 3') {
        mp.events.callRemote("mod", vehicle, 7, 2);
    } else
    if (item.Text == 'Motorhaube 4') {
        mp.events.callRemote("mod", vehicle, 7, 3);
    } else
    if (item.Text == 'Motorhaube 5') {
        mp.events.callRemote("mod", vehicle, 7, 4);
    } else
    if (item.Text == 'Motorhaube 6') {
        mp.events.callRemote("mod", vehicle, 7, 5);
    } else
    if (item.Text == 'Motorhaube 7') {
        mp.events.callRemote("mod", vehicle, 7, 6);
    } else
    if (item.Text == 'Motorhaube 8') {
        mp.events.callRemote("mod", vehicle, 7, 7);
    } else
    if (item.Text == 'Motorhaube 9') {
        mp.events.callRemote("mod", vehicle, 7, 8);
    } else
    if (item.Text == 'Motorhaube 10') {
        mp.events.callRemote("mod", vehicle, 7, 9);
    } else
    if (item.Text == 'Motorhaube 11') {
        mp.events.callRemote("mod", vehicle, 7, 10);
    }
});

    // FBUMPER RESET
    ui_Fbumper.MenuClose.on(() => {
        ui_Fbumper.RefreshIndex();
    });

ui_Fbumper.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if (item.Text == 'Standard Heckstoßstange') {
        mp.events.callRemote("mod", vehicle, 1, -1);
    } else
    if (item.Text == 'Frontstoßstange 1') {
        mp.events.callRemote("mod", vehicle, 1, 0);
    } else
    if (item.Text == 'Frontstoßstange 2') {
        mp.events.callRemote("mod", vehicle, 1, 1);
    } else
    if (item.Text == 'Frontstoßstange 3') {
        mp.events.callRemote("mod", vehicle, 1, 2);
    } else
    if (item.Text == 'Frontstoßstange 4') {
        mp.events.callRemote("mod", vehicle, 1, 3);
    } else
    if (item.Text == 'Frontstoßstange 5') {
        mp.events.callRemote("mod", vehicle, 1, 4);
    } else
    if (item.Text == 'Frontstoßstange 6') {
        mp.events.callRemote("mod", vehicle, 1, 5);
    } else
    if (item.Text == 'Frontstoßstange 7') {
        mp.events.callRemote("mod", vehicle, 1, 6);
    } else
    if (item.Text == 'Frontstoßstange 8') {
        mp.events.callRemote("mod", vehicle, 1, 7);
    } else
    if (item.Text == 'Frontstoßstange 9') {
        mp.events.callRemote("mod", vehicle, 1, 8);
    } else
    if (item.Text == 'Frontstoßstange 10') {
        mp.events.callRemote("mod", vehicle, 1, 9);
    } else
    if (item.Text == 'Frontstoßstange 11') {
        mp.events.callRemote("mod", vehicle, 1, 10);
    }
});

    // RBUMPER RESET
    ui_Rbumper.MenuClose.on(() => {
        ui_Rbumper.RefreshIndex();
    });

ui_Rbumper.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if (item.Text == 'Standard Heckstoßstange') {
        mp.events.callRemote("mod", vehicle, 2, -1);
    } else
    if (item.Text == 'Heckstoßstange 1') {
        mp.events.callRemote("mod", vehicle, 2, 0);
    } else
    if (item.Text == 'Heckstoßstange 2') {
        mp.events.callRemote("mod", vehicle, 2, 1);
    } else
    if (item.Text == 'Heckstoßstange 3') {
        mp.events.callRemote("mod", vehicle, 2, 2);
    } else
    if (item.Text == 'Heckstoßstange 4') {
        mp.events.callRemote("mod", vehicle, 2, 3);
    } else
    if (item.Text == 'Heckstoßstange 5') {
        mp.events.callRemote("mod", vehicle, 2, 4);
    } else
    if (item.Text == 'Heckstoßstange 6') {
        mp.events.callRemote("mod", vehicle, 2, 5);
    } else
    if (item.Text == 'Heckstoßstange 7') {
        mp.events.callRemote("mod", vehicle, 2, 6);
    } else
    if (item.Text == 'Heckstoßstange 8') {
        mp.events.callRemote("mod", vehicle, 2, 7);
    } else
    if (item.Text == 'Heckstoßstange 9') {
        mp.events.callRemote("mod", vehicle, 2, 8);
    } else
    if (item.Text == 'Heckstoßstange 10') {
        mp.events.callRemote("mod", vehicle, 2, 9);
    } else
    if (item.Text == 'Heckstoßstange 11') {
        mp.events.callRemote("mod", vehicle, 2, 10);
    }
});

    // SIDESKIRT RESET
    ui_Sideskirt.MenuClose.on(() => {
        ui_Sideskirt.RefreshIndex();
    });

ui_Sideskirt.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);


    if (item.Text == 'Standard Seitenschürze') {
        mp.events.callRemote("mod", vehicle, 3, -1);
    } else
    if (item.Text == 'Seitenschürze 1') {
        mp.events.callRemote("mod", vehicle, 3, 0);
    } else
    if (item.Text == 'Seitenschürze 2') {
        mp.events.callRemote("mod", vehicle, 3, 1);
    } else
    if (item.Text == 'Seitenschürze 3') {
        mp.events.callRemote("mod", vehicle, 3, 2);
    } else
    if (item.Text == 'Seitenschürze 4') {
        mp.events.callRemote("mod", vehicle, 3, 3);
    } else
    if (item.Text == 'Seitenschürze 5') {
        mp.events.callRemote("mod", vehicle, 3, 4);
    } else
    if (item.Text == 'Seitenschürze 6') {
        mp.events.callRemote("mod", vehicle, 3, 5);
    } else
    if (item.Text == 'Seitenschürze 7') {
        mp.events.callRemote("mod", vehicle, 3, 6);
    } else
    if (item.Text == 'Seitenschürze 8') {
        mp.events.callRemote("mod", vehicle, 3, 7);
    } else
    if (item.Text == 'Seitenschürze 9') {
        mp.events.callRemote("mod", vehicle, 3, 8);
    } else
    if (item.Text == 'Seitenschürze 10') {
        mp.events.callRemote("mod", vehicle, 3, 9);
    } else
    if (item.Text == 'Seitenschürze 11') {
        mp.events.callRemote("mod", vehicle, 3, 10);
    }
});

    // EXHAUST RESET
    ui_Exhaust.MenuClose.on(() => {
        ui_Exhaust.RefreshIndex();
    });

ui_Exhaust.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);

    if (item.Text == 'Standard Auspuff') {
        mp.events.callRemote("mod", vehicle, 4, -1);
    } else
    if (item.Text == 'Auspuff 1') {
        mp.events.callRemote("mod", vehicle, 4, 0);
    } else
    if (item.Text == 'Auspuff 2') {
        mp.events.callRemote("mod", vehicle, 4, 1);
    } else
    if (item.Text == 'Auspuff 3') {
        mp.events.callRemote("mod", vehicle, 4, 2);
    } else
    if (item.Text == 'Auspuff 4') {
        mp.events.callRemote("mod", vehicle, 4, 3);
    } else
    if (item.Text == 'Auspuff 5') {
        mp.events.callRemote("mod", vehicle, 4, 4);
    }
    if (item.Text == 'Auspuff 6') {
        mp.events.callRemote("mod", vehicle, 4, 5);
    }
});

    // FENDERS RESET
    ui_Fenders.MenuClose.on(() => {
        ui_Fenders.RefreshIndex();
    });

ui_Fenders.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);

    if (item.Text == 'Standard Kotflügel') {
        mp.events.callRemote("mod", vehicle, 8, -1);
    } else
    if (item.Text == 'Kotflügel 1') {
        mp.events.callRemote("mod", vehicle, 8, 0);
    } else
    if (item.Text == 'Kotflügel 2') {
        mp.events.callRemote("mod", vehicle, 8, 1);
    } else
    if (item.Text == 'Kotflügel 3') {
        mp.events.callRemote("mod", vehicle, 8, 2);
    } else
    if (item.Text == 'Kotflügel 4') {
        mp.events.callRemote("mod", vehicle, 8, 3);
    } else
    if (item.Text == 'Kotflügel 5') {
        mp.events.callRemote("mod", vehicle, 8, 4);
    }
});

    // ROOFS RESET
    ui_Roofs.MenuClose.on(() => {
        ui_Roofs.RefreshIndex();
    });

ui_Roofs.ItemSelect.on((item, index, value) => {
    let position = mp.players.local.position;
	let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
    let vehicle = mp.vehicles.atHandle(vehHandle);

    if (item.Text == 'Standard Dach') {
        mp.events.callRemote("mod", vehicle, 10, -1);
    } else
    if (item.Text == 'Dach 1') {
        mp.events.callRemote("mod", vehicle, 10, 0);
    } else
    if (item.Text == 'Dach 2') {
        mp.events.callRemote("mod", vehicle, 10, 1);
    } else
    if (item.Text == 'Dach 3') {
        mp.events.callRemote("mod", vehicle, 10, 2);
    } else
    if (item.Text == 'Dach 4') {
        mp.events.callRemote("mod", vehicle, 10, 3);
    }
});


    // ENGINE RESET
    ui_Engine.MenuClose.on(() => {
        ui_Engine.RefreshIndex();
    });

    ui_Engine.ItemSelect.on((item, index, value) => {
        let position = mp.players.local.position;
        let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
        let vehicle = mp.vehicles.atHandle(vehHandle);

    if (item.Text == 'Standard Motor') {
        mp.events.callRemote("mod", vehicle, 11, -1);
    } else
    if (item.Text == 'Motorstufe 1') {
        mp.events.callRemote("mod", vehicle, 11, 0);
    } else
    if (item.Text == 'Motorstufe 2') {
        mp.events.callRemote("mod", vehicle, 11, 1);
    } else
    if (item.Text == 'Motorstufe 3') {
        mp.events.callRemote("mod", vehicle, 11, 2);
    } else
    if (item.Text == 'Motorstufe 4') {
        mp.events.callRemote("mod", vehicle, 11, 3);
    }
});

    // Breaks RESET
    ui_Breaks.MenuClose.on(() => {
        ui_Breaks.RefreshIndex();
    });

    ui_Breaks.ItemSelect.on((item, index, value) => {
        let position = mp.players.local.position;
        let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
        let vehicle = mp.vehicles.atHandle(vehHandle);

    if (item.Text == 'Standard Bremsen') {
        mp.events.callRemote("mod", vehicle, 12, -1);
    } else
    if (item.Text == 'Bremsen 1') {
        mp.events.callRemote("mod", vehicle, 12, 0);
    } else
    if (item.Text == 'Bremsen 2') {
        mp.events.callRemote("mod", vehicle, 12, 1);
    } else
    if (item.Text == 'Bremsen 3') {
        mp.events.callRemote("mod", vehicle, 12, 2);
    }
});

    // TRANSMISSION RESET
    ui_Transmission.MenuClose.on(() => {
        ui_Transmission.RefreshIndex();
    });

    ui_Transmission.ItemSelect.on((item, index, value) => {
        let position = mp.players.local.position;
        let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
        let vehicle = mp.vehicles.atHandle(vehHandle);

    if (item.Text == 'Standard Getriebe') {
        mp.events.callRemote("mod", vehicle, 13, -1);
    } else
    if (item.Text == 'Getriebe 1') {
        mp.events.callRemote("mod", vehicle, 13, 0);
    } else
    if (item.Text == 'Getriebe 2') {
        mp.events.callRemote("mod", vehicle, 13, 1);
    } else
    if (item.Text == 'Getriebe 3') {
        mp.events.callRemote("mod", vehicle, 13, 2);
    }
});

    // TURBO RESET
    ui_Turbo.MenuClose.on(() => {
        ui_Turbo.RefreshIndex();
    });

    ui_Turbo.ItemSelect.on((item, index, value) => {
        let position = mp.players.local.position;
        let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
        let vehicle = mp.vehicles.atHandle(vehHandle);


    if (item.Text == 'Turbolader ausbauen') {
        mp.events.callRemote("mod", vehicle, 18, -1);
    } else
    if (item.Text == 'Turbolader einbauen') {
        mp.events.callRemote("mod", vehicle, 18, 0);
    }
});

    // SUSPENSION RESET
    ui_Suspension.MenuClose.on(() => {
        ui_Suspension.RefreshIndex();
    });

    ui_Suspension.ItemSelect.on((item, index, value) => {
        let position = mp.players.local.position;
        let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
        let vehicle = mp.vehicles.atHandle(vehHandle);


    if (item.Text == 'Standard Federung') {
        mp.events.callRemote("mod", vehicle, 15, -1);
    } else
    if (item.Text == 'Federung 1') {
        mp.events.callRemote("mod", vehicle, 15, 0);
    } else
    if (item.Text == 'Federung 2') {
        mp.events.callRemote("mod", vehicle, 15, 1);
    } else
    if (item.Text == 'Federung 3') {
        mp.events.callRemote("mod", vehicle, 15, 2);
    } else
    if (item.Text == 'Federung 4') {
        mp.events.callRemote("mod", vehicle, 15, 3);
    }
});

    // FRAMES RESET
    ui_Frames.MenuClose.on(() => {
        ui_Frames.RefreshIndex();
    });

    ui_Frames.ItemSelect.on((item, index, value) => {
        let position = mp.players.local.position;
        let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
        let vehicle = mp.vehicles.atHandle(vehHandle);

    if (item.Text == 'Standard Rahmen') {
        mp.events.callRemote("mod", vehicle, 5, -1);
    } else
    if (item.Text == 'Rahmen 1') {
        mp.events.callRemote("mod", vehicle, 5, 0);
    } else
    if (item.Text == 'Rahmen 2') {
        mp.events.callRemote("mod", vehicle, 5, 1);
    } else
    if (item.Text == 'Rahmen 3') {
        mp.events.callRemote("mod", vehicle, 5, 2);
    } else
    if (item.Text == 'Rahmen 4') {
        mp.events.callRemote("mod", vehicle, 5, 3);
    } else
    if (item.Text == 'Rahmen 5') {
        mp.events.callRemote("mod", vehicle, 5, 4);
    }
});

    // GRILLS RESET
    ui_Grills.MenuClose.on(() => {
        ui_Grills.RefreshIndex();
    });

    ui_Grills.ItemSelect.on((item, index, value) => {
        let position = mp.players.local.position;
        let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
        let vehicle = mp.vehicles.atHandle(vehHandle);

    if (item.Text == 'Standard Gitter') {
        mp.events.callRemote("mod", vehicle, 6, -1);
    } else
    if (item.Text == 'Gitter 1') {
        mp.events.callRemote("mod", vehicle, 6, 0);
    } else
    if (item.Text == 'Gitter 2') {
        mp.events.callRemote("mod", vehicle, 6, 1);
    } else
    if (item.Text == 'Gitter 3') {
        mp.events.callRemote("mod", vehicle, 6, 2);
    } else
    if (item.Text == 'Gitter 4') {
        mp.events.callRemote("mod", vehicle, 6, 3);
    } else
    if (item.Text == 'Gitter 5') {
        mp.events.callRemote("mod", vehicle, 6, 4);
    }
})

    // LIGHTS RESET
    ui_Lights.MenuClose.on(() => {
        ui_Lights.RefreshIndex();
    });

    ui_Lights.ItemSelect.on((item, index, value) => {
        let position = mp.players.local.position;
        let vehHandle = mp.game.vehicle.getClosestVehicle(position.x, position.y, position.z, 5, 0, 70);
        let vehicle = mp.vehicles.atHandle(vehHandle);

    if (item.Text == 'Xenon ausbauen') {
        mp.events.callRemote("mod", vehicle, 22, -1);
    } else
    if (item.Text == 'Xenon einbauen') {
        mp.events.callRemote("mod", vehicle, 22, 0);
    }else
    if (item.Text == 'Standart Farbe') {
        mp.events.callRemote("hlight", vehicle, 0, 0);
    }else
    if (item.Text == 'Weiß') {
        mp.events.callRemote("hlight", vehicle, 1, 0);
    }else
    if (item.Text == 'Blau') {
        mp.events.callRemote("hlight", vehicle, 1, 1);
    }else
    if (item.Text == 'Hell Blau') {
        mp.events.callRemote("hlight", vehicle, 1, 2);
    }else
    if (item.Text == 'Grün') {
        mp.events.callRemote("hlight", vehicle, 1, 3);
    }else
    if (item.Text == 'Hell Grün') {
        mp.events.callRemote("hlight", vehicle, 1, 4);
    }else
    if (item.Text == 'Gelb') {
        mp.events.callRemote("hlight", vehicle, 1, 6);
    }else
    if (item.Text == 'Hell Gelb') {
        mp.events.callRemote("hlight", vehicle, 1, 5);
    }else
    if (item.Text == 'Orange') {
        mp.events.callRemote("hlight", vehicle, 1, 7);
    }else
    if (item.Text == 'Rot') {
        mp.events.callRemote("hlight", vehicle, 1, 8);
    }else
    if (item.Text == 'Pink') {
        mp.events.callRemote("hlight", vehicle, 1, 10);
    }else
    if (item.Text == 'Hell Pink') {
        mp.events.callRemote("hlight", vehicle, 1, 9);
    }else
    if (item.Text == 'Lila') {
        mp.events.callRemote("hlight", vehicle, 1, 11);
    }else
    if (item.Text == 'Hell Lila') {
        mp.events.callRemote("hlight", vehicle, 1, 12);
    }
});

// MAINBINDINGS
ui_Main.BindMenuToItem(ui_Primarycolor, primarycolor);
ui_Main.BindMenuToItem(ui_Secondarycolor, secondarycolor);
ui_Main.BindMenuToItem(ui_Tuning_Wheels, wheels);
ui_Main.BindMenuToItem(ui_Windowtint, windowtint);
ui_Main.BindMenuToItem(ui_Design, design);
ui_Main.BindMenuToItem(ui_Spoiler, spoiler);
ui_Main.BindMenuToItem(ui_Hoods, hood);
ui_Main.BindMenuToItem(ui_Fbumper, frontbumper);
ui_Main.BindMenuToItem(ui_Rbumper, rearbumper);
ui_Main.BindMenuToItem(ui_Sideskirt, sideskirt);
ui_Main.BindMenuToItem(ui_Exhaust, exhaust);
ui_Main.BindMenuToItem(ui_Fenders, fenders);
ui_Main.BindMenuToItem(ui_Roofs, roof);
ui_Main.BindMenuToItem(ui_Engine, engine);
ui_Main.BindMenuToItem(ui_Breaks, breaks);
ui_Main.BindMenuToItem(ui_Transmission, transmission);
ui_Main.BindMenuToItem(ui_Turbo, turbo);
ui_Main.BindMenuToItem(ui_Suspension, suspension);
ui_Main.BindMenuToItem(ui_Frames, frames);
ui_Main.BindMenuToItem(ui_Grills, grills);
ui_Main.BindMenuToItem(ui_Lights, lights);
//ui_Main.BindMenuToItem(ui_Pearl, pearlescentcolor);
//ui_Main.BindMenuToItem(ui_Neon, neon);
ui_Main.BindMenuToItem(ui_Neoncolor, neoncolor);
//ui_Main.BindMenuToItem(ui_Wheelcolor, wheelcolor);
// WHEELSBINDINGS
ui_Tuning_Wheels.BindMenuToItem(ui_Tuning_Sportwheels, sports);
ui_Tuning_Wheels.BindMenuToItem(ui_Tuning_Musclewheels, muscle);
ui_Tuning_Wheels.BindMenuToItem(ui_Tuning_Lowrider, lowrider);
ui_Tuning_Wheels.BindMenuToItem(ui_Tuning_Suv, suv);
ui_Tuning_Wheels.BindMenuToItem(ui_Tuning_Offroad, offroad);
ui_Tuning_Wheels.BindMenuToItem(ui_Tuning_Tuner, tuning);
ui_Tuning_Wheels.BindMenuToItem(ui_Tuning_Highend, highend);
ui_Tuning_Wheels.BindMenuToItem(ui_Tuning_Bennys1, bennys1);
ui_Tuning_Wheels.BindMenuToItem(ui_Tuning_Bennys2, bennys2);



mp.events.add("client:tuning:openTuningMenu", () => {
    if (ui_Main.Visible | ui_Primarycolor.Visible |
        ui_Secondarycolor.Visible | ui_Tuning_Wheels |
        ui_Windowtint | ui_Design | ui_Spoiler | ui_Hoods |
        ui_Fbumper | ui_Rbumper | ui_Sideskirt | ui_Exhaust |
        ui_Fenders | ui_Roofs | ui_Engine | ui_Breaks |
        ui_Transmission | ui_Turbo | ui_Suspension | ui_Frames |
        ui_Grills | ui_Lights | ui_Tuning_Sportwheels | 
        ui_Tuning_Musclewheels | ui_Tuning_Lowrider | ui_Tuning_Suv |
        ui_Tuning_Offroad | ui_Tuning_Tuner | ui_Tuning_Bennys1 |
        ui_Tuning_Bennys2) {
        uiMenu.forEach(function(element, index, array){element.Close()});
    } else {

        ui_Main.Open();
    }
});


mp.events.add("modpearl", (veh, pearlescentColor) => {
    //veh.setModColor1(2, parseInt(primcolor), parseInt(pearlescentColor));
    veh.setExtraColours(parseInt(pearlescentColor), parseInt(wheelColor));
    //Update aller anderen Spieler in Streaming Range - calle den server, damit er die anderen clients called
    mp.players.forEachInStreamRange((player, id) => {
            mp.events.callRemote("updatePearlForPlayer", player, veh, wheelColor, pearlescentColor);
    });
});
