
mp.Vector3.Distance = function (v1, v2){
	return Math.abs(Math.sqrt(Math.pow((v2.x - v1.x),2) +
									Math.pow((v2.y - v1.y),2)+
									Math.pow((v2.z - v1.z),2)));
}	
mp.Vector3.Distance2D = function (v1, v2){
	return Math.abs(Math.sqrt(Math.pow((v2.x - v1.x),2) +
									Math.pow((v2.y - v1.y),2)));
}
mp.events.add("PushE", (player) => {
   /* if(player.data.faction != "Civillian") {
    gm.mysql.handle.query('SELECT * FROM faction WHERE name = ?', [player.data.faction], function (error, results, fields) {
	for(let i = 0; i < results.length; i++) {
		if(player.data.faction == results[i].name)
		{
            let distance = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].dutyX), parseFloat(results[i].dutyY), parseFloat(results[i].dutyZ)));
            let distance2 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].clothesX), parseFloat(results[i].clothesY), parseFloat(results[i].clothesZ)));
            let distance3 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].equipX), parseFloat(results[i].equipY), parseFloat(results[i].equipZ)));
			let distance4 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].pcX), parseFloat(results[i].pcY), parseFloat(results[i].pcZ)));
			let distance5 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].chiefX), parseFloat(results[i].chiefY), parseFloat(results[i].chiefZ)));
			let distance6 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].vehicleX), parseFloat(results[i].vehicleY), parseFloat(results[i].vehicleZ)));
			let distance7 = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].parkX), parseFloat(results[i].parkY), parseFloat(results[i].parkZ)));
             
            if(distance <= 1)
            {
                mp.events.call("server:faction:duty", player);
            }
            else if(distance2 <=1)
            {
				if (player.data.faction == "LSPD" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:lspd:clothes");
				} else
                if (player.data.faction == "Medic" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:lsmc:clothes");
				} else
                if (player.data.faction == "FIB" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:fib:clothes");
				}
            }
            else if(distance3 <=3)
            {
				if (player.data.faction == "LSPD" && player.data.mainmenu == false) {
					if (player.data.factionDuty == 1) {
						player.data.mainmenu = true;
						player.call("client:lspd:openWeapon",[results[i].ausnahme]);
					} else {
						player.notify("~r~Du musst im Dienst sein!");
					}				
				} else
                if (player.data.faction == "Medic" && player.data.factionDuty == 1 && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:lsmc:openWeapon");
				} else
				if (player.data.faction == "TattooBrooks" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:tattoo:openMenu");
				} else
				if (player.data.faction == "FIB" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:fib:openWeapon",[results[i].ausnahme]);
				}                
			}
			else if(distance4 <=1)
			{
				if (player.data.faction == "LSPD" && player.data.factionDuty == 1 && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:lspd:createOfficeComputer",[player.data.factionrang]);
				} else
                if (player.data.faction == "Medic" && player.data.factionDuty == 1 && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:lsmc:createOfficeComputer",[player.data.factionrang]);
				} else
				if (player.data.faction == "Justiz" && player.data.factionDuty == 1 && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:justiz:createOfficeComputer",[player.data.factionrang]);
				} else
				if (player.data.faction == "TattooBrooks" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:tb:createOfficeComputer",[player.data.factionrang]);
				} else
				if (player.data.faction == "Fahrschule" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:fs:createOfficeComputer",[player.data.factionrang]);
				} else
				if (player.data.faction == "PSConstructions" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:ps:createOfficeComputer",[player.data.factionrang]);
				} else
				if (player.data.faction == "VanillaUnicorn" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:vu:createOfficeComputer",[player.data.factionrang]);
				} else
				if (player.data.faction == "FIB" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:fib:createOfficeComputer",[player.data.factionrang]);
				}
				
			}
			else if(distance5 <=1)
			{
				if (player.data.faction == "LSPD" && player.data.factionDuty == 1 && player.data.mainmenu == false) {
					if (player.data.factionrang >= 11) {
						player.data.mainmenu = true;
						player.call("client:lspd:createChiefMenu",[player.data.factionrang]);
					}
				} else
                if (player.data.faction == "Medic" && player.data.factionDuty == 1 && player.data.mainmenu == false) {
					if (player.data.factionrang >= 10) {
						player.data.mainmenu = true;
						player.call("client:lsmc:createChiefMenu",[player.data.factionrang]);
					}
				} else
				if (player.data.faction == "Justiz" && player.data.factionDuty == 1 && player.data.mainmenu == false) {
					if (player.data.factionrang >= 10) {
						player.data.mainmenu = true;
						player.call("client:justiz:createChiefMenu",[player.data.factionrang]);
					}
				} else	
				if (player.data.faction == "LSC") {
					if (player.data.factionrang >= 2 && player.data.mainmenu == false) {
						player.data.mainmenu = true;
						player.call("client:lsc:createChiefMenu",[player.data.factionrang]);
					}
				} else	
				if (player.data.faction == "FIB") {
					if (player.data.factionrang >= 7 && player.data.mainmenu == false) {
						player.data.mainmenu = true;
						player.call("client:fib:createChiefMenu",[player.data.factionrang]);
					}
				}
			}
			else if(distance6 <=1)
			{
				if (player.data.faction == "LSPD" && player.data.factionDuty == 1 && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:lspd:createVeichleMenu",[player.data.factionrang]);
				} else
                if (player.data.faction == "Medic" && player.data.factionDuty == 1 && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:lsmc:createVeichleMenu",[player.data.factionrang]);
				} else
				if (player.data.faction == "Fahrschule" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:fs:createVeichleMenu",[player.data.factionrang]);
				} else 
				if (player.data.faction == "PSConstructions" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:ps:createVeichleMenu",[player.data.factionrang]);
				} else 
				if (player.data.faction == "FIB" && player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:fib:createVeichleMenu",[player.data.factionrang]);
				}
				
			}
			else if(distance7 <=3)
			{
				if (player.data.faction == "LSPD") {
					mp.events.call("server:lspd:parkin",(player));
				} else
                if (player.data.faction == "Medic") {
					mp.events.call("server:lsmc:parkin",(player));
				} else 
				if (player.data.faction == "Fahrschule") {
					mp.events.call("server:fs:parkin",(player));
				} else 
				if (player.data.faction == "PSConstructions") {
					mp.events.call("server:ps:parkin",(player));
				}  else 
				if (player.data.faction == "FIB") {
					mp.events.call("server:fib:parkin",(player));
				}
				
			}	
        }
    }
	});	
	} */
	/*gm.mysql.handle.query('SELECT * FROM garage WHERE 1=1', [], function (error, results, fields) {
	for(let i = 0; i < results.length; i++) {
		let distance = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].pedx), parseFloat(results[i].pedy), parseFloat(results[i].pedz),parseInt(results[i].id)));				
		if(distance <= 3)
		{
				var garageid = results[i].id;
				if (player.data.mainmenu == false) {
					player.data.mainmenu = true;
					player.call("client:garage:openmenu",[garageid]);	
				}					
		}		
	}	
	});	*/

	/*gm.mysql.handle.query('SELECT * FROM atms WHERE 1=1', [], function (error, results, fields) {
	for(let i = 0; i < results.length; i++) {
		let distance = mp.Vector3.Distance2D(player.position,new mp.Vector3(parseFloat(results[i].posX), parseFloat(results[i].posY), parseFloat(results[i].posZ),parseInt(results[i].id)));				
		if(distance <= 1.5)
		{
			if (results[i].usable == 0) {
				if (player.data.mainmenu == false) {
					player.data.mainmenu = true;
					mp.events.call("server:bank:konten",player,results[i].id);
				}				
			} else {
				 if (player.data.faction == "LSPD" && player.data.factionDuty == 1) {					
					mp.events.call("server:bank:repair",player,results[i].id);
				 } else {
					player.notify("~r~Der ATM ist kaputt!");
				 }				
			}
		}		
	}	
	});	  */
	/*gm.mysql.handle.query("SELECT * FROM shops WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Shops: "+err);
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].posX), parseFloat(res[i].posY), parseFloat(res[i].posZ), parseInt(res[i].id), parseInt(res[i].type)));
			if (distance <= 2) {
				if (player.data.mainmenu == false) {
					if (res[i].firma == "none") {
						player.data.mainmenu = true;
						player.call("client:shop:openShop",[res[i].id]);
					} else if (player.data.faction == res[i].firma) {
						player.data.mainmenu = true;
						player.call("client:shop:openShop",[res[i].id]);
					}						
				}								
			}
		}
	});*/

	/*gm.mysql.handle.query("SELECT * FROM savedclothes WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Shops: "+err);
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].posX), parseFloat(res[i].posY), parseFloat(res[i].posZ)));
			if (distance <= 2) {					
					if (player.data.mainmenu == false) {
						player.data.mainmenu = true;
						player.call("client:clothes:openMainMenu");		
					}			
			}
		}
	});*/

	/*gm.mysql.handle.query("SELECT * FROM carshops WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Shops: "+err);
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].posX), parseFloat(res[i].posY), parseFloat(res[i].posZ), parseInt(res[i].id)));
			if (distance <= 4) {
				if (player.data.mainmenu == false) {
					player.data.mainmenu = true;
					mp.events.call("server:carshop:openShop",player,res[i].id,res[i].type);	
				}				
			}
		}
	});*/

	/*gm.mysql.handle.query("SELECT * FROM tankstellen WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Tankstellen: "+err);
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].posX), parseFloat(res[i].posY), parseFloat(res[i].posZ), parseInt(res[i].id)));
			if (distance <= 15) {
				if (player.data.mainmenu == false) {
					player.data.mainmenu = true;
					mp.events.call("server:tankstellen:openTanke",player,res[i].id);	
				}				
			}
		}
	});*/
	
	gm.mysql.handle.query("SELECT * FROM teleporter WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Shops: "+err);
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].pos1X), parseFloat(res[i].pos1Y), parseFloat(res[i].pos1Z), parseInt(res[i].id)));
			let distance2 = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].pos2X), parseFloat(res[i].pos2Y), parseFloat(res[i].pos2Z), parseInt(res[i].id)));
			if (distance <= 2) {
				mp.events.call("server:teleporter:port1",player,res[i].id);
			} else
			if (distance2 <= 2) {
				mp.events.call("server:teleporter:port2",player,res[i].id);
			}
		}
	});
	gm.mysql.handle.query("SELECT * FROM housing WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Shops: "+err);	
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].outX), parseFloat(res[i].outY), parseFloat(res[i].outZ), parseInt(res[i].id)));
			let distance1 = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].inX), parseFloat(res[i].inY), parseFloat(res[i].inZ), parseInt(res[i].id)));
			let distance2 = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].outfitX), parseFloat(res[i].outfitY), parseFloat(res[i].outfitZ), parseInt(res[i].id)));
			if (distance <= 2) {
				mp.events.call("server:housing:openMenu",player,res[i].id);
			} else
			if (distance1 <= 2) {
				mp.events.call("server:housing:openInMenu",player,res[i].id);
			} else
			if (distance2 <= 2) {
				player.call("client:housing:outfit");
			}
		}
	});

	gm.mysql.handle.query("SELECT * FROM housing_garages WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Shops: "+err);	
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].outX), parseFloat(res[i].outY), parseFloat(res[i].outZ), parseInt(res[i].id)));
			let distance1 = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].inX), parseFloat(res[i].inY), parseFloat(res[i].inZ), parseInt(res[i].id)));
			if (distance <= 2) {
				mp.events.call("server:housing:garageout",player);
			} else
			if (distance1 <= 2) {
				mp.events.call("server:housing:garagein",player,player.dimension);
			} 
		}
	});
	/*gm.mysql.handle.query("SELECT * FROM farming WHERE 1=1",[],function(err,res) {
		if (err) console.log("Error in Select Shops: "+err);
		for(let i = 0; i < res.length; i++) {
			let distance = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].farmX), parseFloat(res[i].farmY), parseFloat(res[i].farmZ), parseInt(res[i].id), parseInt(res[i].farmItem)));
			let distance2 = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].processorsX), parseFloat(res[i].processorsY), parseFloat(res[i].processorsZ), parseInt(res[i].id), parseInt(res[i].processorsneedItem), parseInt(res[i].processorsgiveItem)));
			let distance3 = mp.Vector3.Distance2D(player.position, new mp.Vector3(parseFloat(res[i].sellX), parseFloat(res[i].sellY), parseFloat(res[i].sellZ), parseInt(res[i].id), parseInt(res[i].sellneedItem), parseInt(res[i].sellPrice)));			
			if (distance <= 40) {
				mp.events.call("server:farming:farm",player,res[i].id,res[i].farmItem);					
			} else
			if (distance2 <= 5) {
				mp.events.call("server:farming:processing",player,res[i].id,res[i].processorsneedItem,res[i].processorsgiveItem);			
			} else
			if (distance3 <= 5) {
				mp.events.call("server:farming:selling",player,res[i].id,res[i].sellneedItem,res[i].sellPrice);							
			}
		}
	});*/
});



