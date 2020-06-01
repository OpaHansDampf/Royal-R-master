function runBar(s, task, direction, evt, params) {
    var elem = document.getElementsByClassName('progress-bar')[0];
    document.getElementById('text-currentTask').innerHTML = task;
    var width = 0;
    var interval = setInterval(frame, s*10);
    function frame() {
        if (width >= 100) {
            clearInterval(interval);
            mp.trigger('progress:end', direction, evt, params);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById('text-currentProgress').innerHTML = width+'%';
        }
    }
}