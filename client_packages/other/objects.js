const player = mp.players.local;

exports.checkLocalObjectsFirst = function (player) {

	// Drink Soda
	var drinkSoda02Obj = mp.game.joaat("prop_vend_soda_02");
	var drinkSoda01Obj = mp.game.joaat("prop_vend_soda_01");
	// Kaffe
	var drinkCoffeeObj = mp.game.joaat("prop_vend_coffe_01");
	// Wasserspender
	var drinkWater01Obj = mp.game.joaat("prop_watercooler");
	var drinkWater02Obj = mp.game.joaat("prop_watercooler_dark");
	// donutspender
	var donut01Obj = mp.game.joaat("v_ret_247_donuts");
	// Kaffee Automat
	var kaffeeObj = mp.game.joaat("prop_vend_coffe_01");

	var atm1 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, 3424098598, false, true, true);
	var atm2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, 3168729781, false, true, true);
	var atm3 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, 2930269768, false, true, true);
	var atm4 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1, 506770882, false, true, true);

	var drinkSoda1 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.5, drinkSoda01Obj, false, true, true);
	var drinkSoda2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.5, drinkSoda02Obj, false, true, true);
	var drinkSoda3 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.5, 992069095, false, true, true);
	var drinkSoda4 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.5, 1114264700, false, true, true);

	var wasser1 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, drinkWater01Obj, false, true, true);
	var wasser2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, drinkWater02Obj, false, true, true);
	var wasser3 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, 1099892058, false, true, true);
	var wasser4 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, -742198632, false, true, true);

	var donut = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, donut01Obj, false, true, true);
	var snack1 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, -1034034125, false, true, true);
	var snack2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, -654402915, false, true, true);

	var kaffee = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, kaffeeObj, false, true, true);
	var kaffee2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, 690372739, false, true, true);

	var kippen = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 0.8, 73774428, false, true, true);

	var tonne1 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, -58485588, false, true, true);
	var tonne2 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 666561306, false, true, true);
	var tonne3 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 1511880420, false, true, true);
	var tonne4 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, -206690185, false, true, true);
	var tonne5 = mp.game.object.getClosestObjectOfType(player.position.x, player.position.y, player.position.z, 1.5, 218085040, false, true, true);

	if (atm1 || atm2 || atm3 || atm4) {
		return "atm";
	} else if (drinkSoda1 || drinkSoda2 || drinkSoda3 || drinkSoda4) {
		return "drinks";
	} else if (kaffee || kaffee2) {
		return "coffee";
	} else if (wasser1 || wasser2 || wasser3 || wasser4) {
		return "water";
	} else if (donut) {
		return "donut";
	} else if (tonne1 || tonne2 || tonne3 || tonne4 || tonne5) {
		return "dump";
	} else if (snack1 || snack2) {
		return "snack";
	} 
	return false;
}
