var browser = null;

mp.events.add("openDeathscreen",() => {
    if (browser !== null) browser.destroy();
    mp.game.player.setInvincible(true);
    mp.gui.cursor.visible = false;
    mp.game.controls.disableControlAction(0, 82, false);
    mp.game.gameplay.setFadeOutAfterDeath(false);
});

mp.events.add("closeDeathscreen",() => {
    if (browser !== null) {
        browser.destroy();
        browser = null;
        mp.gui.cursor.visible = false;
        mp.game.player.setInvincible(false);
    }
});