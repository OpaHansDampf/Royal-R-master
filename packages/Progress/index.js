mp.events.add('check', (player, params) => {
    console.log('event triggered with params:', params);
});

mp.events.addCommand('progress', (player) => {
    if(mp.players.exists(player)) {
        player.call('progress:start', [1, 'Runs Progress Bar', 'server', 'check', JSON.stringify({
            somedata: 'right here'
        })]);
    }    
});