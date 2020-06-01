// Keybinds
const keybindsVK = {
    Stage: 81, // Light stage modifier
}
const keybindsControls = {
    Horn: [13, 51] // Horn
}

// Siren tones
const sirenTones = {
    tone1: 'VEHICLES_HORNS_SIREN_1', // Siren tone 1
    tone2: 'VEHICLES_HORNS_SIREN_2', // Siren tone 2
    tone3: 'VEHICLES_HORNS_POLICE_WARNING', // Siren tone 3
    tone4: 'VEHICLES_HORNS_AMBULANCE_WARNING', // Siren tone 4
    aux: 'VEHICLES_HORNS_SIREN_1', // Auxiliary Siren
    horn: 'SIRENS_AIRHORN' // Horn
}

// Default timeout to prevent key spamming
const keyTimeout = 350 // Milliseconds

// Handle VK clicks
var wasSent = false
mp.events.add('render', () => {
    for (const key in keybindsVK) {
        if (mp.keys.isDown(keybindsVK[key]) === true && mp.keys.isDown(17) === false) {
            if (wasSent == false) {
                mp.events.call('input' + key)
                wasSent = true
                setTimeout(() => {
                    wasSent = false
                }, keyTimeout)
            }
        } else if (mp.keys.isDown(keybindsVK[key]) === true && mp.keys.isDown(17) === true) {
            if (wasSent == false) {
                mp.events.call('inputWithModif' + key)
                wasSent = true
                setTimeout(() => {
                    wasSent = false
                }, keyTimeout)
            }
        }
    }
})

// Sync lights to other players
mp.events.add('syncLight', (vehicle, siren, sound, code, sirenCode) => {
    vehicle.setSiren(siren)
    vehicle.setSirenSound(sound)
    vehicle.currentCode = code
    vehicle.currentSiren = sirenCode
})

mp.events.add('inputStage', _ => {    
    let entity = mp.players.local.vehicle
    if (entity && entity.type === 'vehicle' && entity.getClass() === 18) {

        entity.currentCode += 1
        if (!entity.currentCode) {
            entity.currentCode = 2
        }
        if (entity.currentCode > 2) {
            entity.currentCode = 1
        }
        switch (entity.currentCode) {
            case 1: {
                mp.events.callRemote('syncSiren', entity, false, '', entity.sirenID)
                mp.events.callRemote('syncSiren', entity, false, '', entity.auxSirenID)
                clearInterval(entity.scanSiren)
                entity.scanSiren = null
                mp.events.callRemote('syncLight', entity, false, false, entity.currentCode, 0)
                break
            }
            case 2: {
                mp.events.callRemote('syncSiren', entity, false, '', entity.sirenID)
                mp.events.callRemote('syncSiren', entity, false, '', entity.auxSirenID)
                clearInterval(entity.scanSiren)
                entity.scanSiren = null
                mp.events.callRemote('syncLight', entity, true, true, entity.currentCode, 0)
                break
            }
            case 3: {
                mp.events.callRemote('syncSiren', entity, false, '', entity.sirenID)
                mp.events.callRemote('syncSiren', entity, false, '', entity.auxSirenID)
                clearInterval(entity.scanSiren)
                entity.scanSiren = null
                mp.events.callRemote('syncLight', entity, false, false, entity.currentCode, 0)                
                break
            }
        }
    }
})

