var progressBrowser;

mp.events.add('progress:start', (time, task, direction, event, params) => {
    if (progressBrowser == null) {
        progressBrowser = mp.browsers.new("package://progress/index.html");
        progressBrowser.execute(`runBar('${time}','${task}','${direction}','${event}','${params}');`);
    } else {
        // whatever you please here to handle a new progress bar during an already running one
    }
})

mp.events.add('progress:end', (direction, event, params) => {
    progressBrowser.destroy();
    progressBrowser = null;
    if (direction === 'server') {
        mp.events.callRemote(event, params);
    } else {
        mp.events.call(event, params);
    }
});
