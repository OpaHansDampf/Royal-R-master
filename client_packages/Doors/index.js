var doors = [];
var doorStates = [];



mp.events.add("receiveDoors", (namesJSON, statesJSON) => {
    doors = JSON.parse(namesJSON);
    doorStates = JSON.parse(statesJSON); 
   
    doors.forEach((door) =>
    {
        mp.game.object.doorControl(door.hash, door.position.x, door.position.y, door.position.z, doorStates[door.id], 0.0, 0.0, 0);
    });
});

mp.events.add("changeDoorState", (door) => {
    var doorObj = JSON.parse(door);
    mp.game.object.doorControl(doorObj.hash, doorObj.position.x, doorObj.position.y, doorObj.position.z, doorObj.locked, 0.0, 0.0, 0.0);
    mp.events.callRemote("getDoors", mp.players.local);
});

mp.keys.bind(0x45, true, () =>
{
    doors.forEach((door) =>
    {
        if(mp.game.gameplay.getDistanceBetweenCoords(door.controlposition.x, door.controlposition.y, door.controlposition.z, mp.players.local.position.x, mp.players.local.position.y, mp.players.local.position.z, true) < 2.1)
        {
            mp.events.callRemote("checkDoorPermission", JSON.stringify(door));
        }
    });
});

