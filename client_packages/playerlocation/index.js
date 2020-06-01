/*
    Forum   : https://rage.mp/files/file/38-location-speed-display/
    Author  : https://rage.mp/profile/17917-rootcause/
*/

const useSpeedo = true;
const updateInterval = 500; // milliseconds, lower value = more accurate, at the cost of performance

const Natives = {
    IS_RADAR_HIDDEN: "0x157F93B036700462",
    IS_RADAR_ENABLED: "0xAF754F20EB5CD51A",
    SET_TEXT_OUTLINE: "0x2513DFB0FB8400FE"
};

let streetName = null;
let zoneName = null;
let isMetric = false;
let minimap = {};

// https://github.com/glitchdetector/fivem-minimap-anchor
function getMinimapAnchor() {
    let sfX = 1.0 / 20.0;
    let sfY = 1.0 / 20.0;
    let safeZone = mp.game.graphics.getSafeZoneSize();
    let aspectRatio = mp.game.graphics.getScreenAspectRatio(false);
    let resolution = mp.game.graphics.getScreenActiveResolution(0, 0);
    let scaleX = 1.0 / resolution.x;
    let scaleY = 1.0 / resolution.y;

    let minimap = {
        width: scaleX * (resolution.x / (4 * aspectRatio)),
        height: scaleY * (resolution.y / 5.674),
        scaleX: scaleX,
        scaleY: scaleY,
        leftX: scaleX * (resolution.x * (sfX * (Math.abs(safeZone - 1.0) * 10))),
        bottomY: 1.0 - scaleY * (resolution.y * (sfY * (Math.abs(safeZone - 1.0) * 10))),
    };

    minimap.rightX = minimap.leftX + minimap.width;
    minimap.topY = minimap.bottomY - minimap.height;
    return minimap;
}

function drawText(text, drawXY, font, color, scale, alignRight = false) {
    mp.game.ui.setTextEntry("STRING");
    mp.game.ui.addTextComponentSubstringPlayerName(text);
    mp.game.ui.setTextFont(font);
    mp.game.ui.setTextScale(scale, scale);
    mp.game.ui.setTextColour(color[0], color[1], color[2], color[3]);
    mp.game.invoke(Natives.SET_TEXT_OUTLINE);

    if (alignRight) {
        mp.game.ui.setTextRightJustify(true);
        mp.game.ui.setTextWrap(0, drawXY[0]);
    }

    mp.game.ui.drawText(drawXY[0], drawXY[1]);
}

setInterval(() => {
    // only do stuff if radar is enabled and visible
    if (mp.game.invoke(Natives.IS_RADAR_ENABLED) && !mp.game.invoke(Natives.IS_RADAR_HIDDEN)) {
        isMetric = mp.game.gameplay.getProfileSetting(227) == 1;
        minimap = getMinimapAnchor();

        const position = mp.players.local.position;
        let getStreet = mp.game.pathfind.getStreetNameAtCoord(position.x, position.y, position.z, 0, 0);
        zoneName = mp.game.ui.getLabelText(mp.game.zone.getNameOfZone(position.x, position.y, position.z));
        streetName = mp.game.ui.getStreetNameFromHashKey(getStreet.streetName);
        if (getStreet.crossingRoad && getStreet.crossingRoad != getStreet.streetName) streetName += ` / ${mp.game.ui.getStreetNameFromHashKey(getStreet.crossingRoad)}`;
    } else {
        streetName = null;
        zoneName = null;
    }
}, updateInterval);

mp.events.add("render", () => {
    if (streetName && zoneName) {

        //Speed, Fuel and Km
        let vehicle = mp.players.local.vehicle;
        if (useSpeedo && vehicle) {

            //Speed
            drawText(`~b~${(vehicle.getSpeed() * (isMetric ? 3.9 : 2.236936)).toFixed(0)}`, [minimap.rightX + 0.01, minimap.bottomY - 0.095], 4, [255, 255, 255, 255], 0.6);
            drawText(`${(isMetric) ? "km/h" : "mph"}`, [minimap.rightX + 0.03, minimap.bottomY - 0.086], 4, [255, 255, 255, 255], 0.4);

            //Fuel
            var fuel = round(vehicle.getVariable('fuel'), 1);
            if(!isNaN(fuel)){
                drawText(`~b~${fuel}`, [minimap.rightX + 0.055, minimap.bottomY - 0.095], 4, [255, 255, 255, 255], 0.6); 
                drawText(`%`, [minimap.rightX + 0.08, minimap.bottomY - 0.086], 4, [255, 255, 255, 255], 0.4);  
            }
            //Km
            var km = round(vehicle.getVariable('Kilometer'), 1);
            if(!isNaN(km)){
                var width = getWidth(km);
                drawText(`~b~${km}`, [minimap.rightX + 0.10, minimap.bottomY - 0.095], 4, [255, 255, 255, 255], 0.6); 
                drawText(`Km`, [minimap.rightX + width, minimap.bottomY - 0.086], 4, [255, 255, 255, 255], 0.4);  
            }
        }

        //Zone and Street Name
        drawText(zoneName +' | ' +streetName, [minimap.rightX + 0.01, minimap.bottomY - 0.055], 4, [255, 255, 255, 255], 0.4);

        //Servername + Version
        drawText('Royal-Roleplay 2.0', [minimap.rightX + 0.01, minimap.bottomY - 0.03], 4, [255, 255, 255, 255], 0.4);
    }
});

function round(value, decimals) {
    return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

function getWidth(km) {
    if(km > 10000){
        return 0.145;
    } else if (km > 1000) {
        return 0.138;
    } else if (km > 100) {
        return 0.131;
    } else if (km > 10) {
        return 0.125;
    } else {
        return 0.12;
    }
}