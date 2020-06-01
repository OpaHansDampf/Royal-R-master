mp.events.add("fpsync.update", (player, camPitch, camHeading) => {
  if(mp.players.exists(player)) {
    mp.players.call(player.streamedPlayers, "fpsync.update", [player.id, camPitch, camHeading]);
  }
});

mp.events.add("pointingStop", (player) => {
  if(mp.players.exists(player)) {
    if (player.vehicle) return;
    player.stopAnimation();
  }
});
