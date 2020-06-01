mp.events.add("phoneanim",(player,p1,p2,p3,p4) => {
  player.playAnimation(p1,p2,p3,p4);
});

mp.events.add("server:handy:sendGPS",(player) => {
  var number = parseInt(player.getVariable("smsnumber"));
  mp.players.forEach(
    (playerToSearch, id) => {
      if(mp.players.exists(player) && mp.players.exists(playerToSearch)) {
        if (playerToSearch.data.phoneNumber == number) {
         
         gm.mysql.handle.query("SELECT contactName FROM phone_contacts WHERE playerCharID = ? AND phoneNumber = ?",[playerToSearch.data.charId,player.data.phoneNumber],function(err,res) {
          if (err) console.log("Error in Select contacts: "+err);
          if (res.length > 0) {
            //Kontakt existiert
            gm.mysql.handle.query("INSERT INTO phone_gps SET x = ?,y = ?,charId = ?,send = ?",[player.position.x,player.position.y,playerToSearch.data.charId,res[0].contactName],function(err1,res1) {
              if (err1) console.log("Error in Insert GPS: "+err1);
              playerToSearch.notify("~g~Dir wurde ein Standort gesendet");
              player.notify("~g~Standort wurde gesendet");
            });
          } else {
            //Kontakt existiert nicht
            gm.mysql.handle.query("INSERT INTO phone_gps SET x = ?,y = ?,charId = ?,send = ?",[player.position.x,player.position.y,playerToSearch.data.charId,player.data.phoneNumber],function(err1,res1) {
              if (err1) console.log("Error in Insert GPS: "+err1);
              playerToSearch.notify("~g~Dir wurde ein Standort gesendet");
              player.notify("~g~Standort wurde gesendet");
            });
          }
         });          
        }
      }
    }
  );
});

mp.events.add("server:phone:getGPS", (player) => {
  if(mp.players.exists(player)) {
    gm.mysql.handle.query("SELECT * FROM phone_gps WHERE charId = ?", [player.data.charId], function(errUp, resUp) {
      if (errUp) {
        console.log("ERROR in phone getContacts db querry:");
        console.log("errUp = " + errUp);
        console.log("resUp = " + resUp);
        return;
      } else if (resUp.length > 0) {
        var c = 0;
        let names = [];
        resUp.forEach(function(contacts) {
            names.push(contacts.send);
            if (c+1 == resUp.length) {
                player.call("client:Handy:showGPS",[names]);
            }
            c++;
        });
      } else {
        if(mp.players.exists(player)) player.call("client:Handy:showGPS");
      }
    });
  }
});

mp.events.add("server:handy:markGPS",(player,number) => {
  if (mp.players.exists(player)) {
    gm.mysql.handle.query("SELECT * FROM phone_gps WHERE charId = ? AND send = ?",[player.data.charId,number],function(err,res) {
      if (res.length > 0) {
        player.call("client:lspd:markdispatch", [res[0].x, res[0].y]);
        player.notify("~g~Standort wurde eingestellt");
      } else {
        player.notify("~r~Standort konnte nicht gefunden werden");
      }
    });
  }
});

mp.events.add("server:handy:deleteGPS",(player,number) => {
  if (mp.players.exists(player)) {
    gm.mysql.handle.query("DELETE FROM phone_gps WHERE charId = ? AND send = ?",[player.data.charId,number],function(err,res) {
      player.notify("~g~Standort wurde gelöscht");
    });
  }
});

mp.events.add("server:Handy:OnOff",(player,status) => {
  if (mp.players.exists(player)) {
    if (status == 0) {
      gm.mysql.handle.query("UPDATE characters SET phoneOff = '0' WHERE id = ?",[player.data.charId], function(err,res) {
        if (err) console.log(err);
        player.setVariable("phoneoff", 0);
      });
    } else {
      gm.mysql.handle.query("UPDATE characters SET phoneOff = '1' WHERE id = ?",[player.data.charId], function(err,res) {
        if (err) console.log(err);
        player.setVariable("phoneoff", 1);
      });
    }
  }
});

mp.events.add("server:phone:phoneRing", (player, number) => {
  if(mp.players.exists(player)) {
    console.log("S: "+player.data.lphone);
    if (player.data.lphone == 1 && number.length > 3) {
      player.notify("~r~Dies ist vom Leitstellen Telefon aus nicht möglich");
      player.call("client:Handy:noNumber", [number]);
      return;
    } else {
      if(number != "") {
        if(number.length == 3) {
          gm.mysql.handle.query("SELECT targetnumber FROM phone_short WHERE shortnumber = " + number, function (errUp, resUp) {
            if (errUp) {
              console.log("ERROR in phone Leitstellen db querry:");
              console.log("errUp = " + errUp);
              console.log("resUp = " + resUp);
              return;
            } else if (resUp.length > 0) {
              if(resUp[0].targetnumber == null) {
                player.notify("~r~Die Leitstelle ist nicht besetzt!");
                player.call("client:Handy:noNumber", [number]);
              } else {
                mp.events.call("server:phone:phoneRing2", player, resUp[0].targetnumber, number);
              }
            }
          });
  
        } else if (number.length < 6){
          player.call("client:Handy:noNumber", [number]);
        } else if(number === player.data.phoneNumber) {
          player.call(`notification`, ["4", "Du kannst dich nicht selbst anrufen!"]);
          player.call("client:Handy:noNumber", [number]);
        } else {
          mp.events.call("server:phone:phoneRing2", player, number, null);
        }
      }
    }
    
  }
});

mp.events.add("server:phone:phoneRing2", (player, number, leitstelle) => {
  if(mp.players.exists(player)) {
    gm.mysql.handle.query("SELECT isOnline,phoneOff,onlineId,leitstellenPhone FROM characters WHERE phoneNumber = " + number, function (errUp, resUp) {
      if (errUp) {
        console.log("ERROR in phone ring commandName db querry:");
        console.log("errUp = " + errUp);
        console.log("resUp = " + resUp);
        return;
      } else if (resUp.length > 0) {
        if (resUp[0].isOnline == 1) {
          if (resUp[0].phoneOff == 0) {
            if (resUp[0].leitstellenPhone == 0) {
              var callPlayerName = JSON.stringify(resUp[0].onlineId);
              ////callPlayerName = callPlayerName.substring(1, callPlayerName.length -1);
              mp.players.forEach(
                (playerToSearch, id) => {
                  if (playerToSearch.data.phoneNumber == number) {
                    if(playerToSearch.getVariable("CALL_IS_STARTED") == true || playerToSearch.getVariable("phoneIsRinging") == true || playerToSearch.getVariable("phoneIsCalling") == true){
                      player.call("client:Handy:numberBusy", [number, leitstelle]);
                      return;
                    }
                    var phonenumber = player.data.phoneNumber.toString();
                    player.setVariable("phoneIsCalling", true);              
                    playerToSearch.setVariable("phoneIsRinging", true);
                    gm.mysql.handle.query("SELECT * FROM phone_contacts WHERE playerCharID = ? AND phoneNumber = ?",[player.data.charId, playerToSearch.data.phoneNumber], function (err1,res1) {
                      if (err1) console.log("ERrror: "+err1);
                      gm.mysql.handle.query("SELECT * FROM phone_contacts WHERE playerCharID = ? AND phoneNumber = ?",[playerToSearch.data.charId, phonenumber], function (err,res) {
                        if (err) console.log("Error in Select calling Name: "+err);
                        if (res.length > 0) {                        
                          playerToSearch.setVariable("callnumber",phonenumber);       
                          player.setVariable("callnumber",number);    
                          playerToSearch.setVariable("contactname",res1[0].contactName);       
                          player.setVariable("contactname",res[0].contactName);           
                          playerToSearch.call("client:Handy:phoneRing", [res[0].contactName, leitstelle, 1]);
                          let newTSName = "" + player.data.string + "-" + player.id;
                          let newOtherTSName = "" + playerToSearch.data.string + "-" + playerToSearch.id;
                          player.setVariable("CALLING_PLAYER_NAME", newOtherTSName);
                          player.setVariable("pstring", playerToSearch.data.string);
                          playerToSearch.setVariable("CALLING_PLAYER_NAME", newTSName);
                          playerToSearch.setVariable("pstring", player.data.string);
                        } else {
                          playerToSearch.setVariable("callnumber",phonenumber); 
                          player.setVariable("callnumber",number);
                          playerToSearch.setVariable("contactname",null);       
                          player.setVariable("contactname",null);     
                          playerToSearch.call("client:Handy:phoneRing", [phonenumber, leitstelle, 0]);
                          let newTSName = "" + player.data.string + "-" + player.id;
                          let newOtherTSName = "" + playerToSearch.data.string + "-" + playerToSearch.id;
                          player.setVariable("CALLING_PLAYER_NAME", newOtherTSName);
                          player.setVariable("pstring", playerToSearch.data.string);
                          playerToSearch.setVariable("CALLING_PLAYER_NAME", newTSName);
                          playerToSearch.setVariable("pstring", player.data.string);
                        }
                      });
                    });                                
                  }
                }
              );
            } else {
              player.notify("~r~Die Person hat das Handy ausgeschaltet.");
              player.call("client:Handy:numberBusy", [number, leitstelle]);
            }            
          } else {
            player.notify("~r~Die Person hat das Handy ausgeschaltet.");
            player.call("client:Handy:numberBusy", [number, leitstelle]);
          }          
        } else {
          player.notify("~r~Die Person hat das Handy ausgeschaltet.");
          player.call("client:Handy:numberBusy", [number, leitstelle]);
        }        
      } else {
        if(mp.players.exists(player)) player.call("client:Handy:noNumber", [number]);
        //Nummer nicht vergeben
      }
    });
  }
});


mp.events.add("server:phone:startCall", (player, number, leitstelle) => {
  if(mp.players.exists(player)) {
    var callnumber = player.getVariable("callnumber");
    if(callnumber != "") {
      gm.mysql.handle.query("SELECT isOnline,phoneOff,onlineId FROM characters WHERE phoneNumber = " + callnumber, function (errUp, resUp) {
        if (errUp) {
          console.log("ERROR in phone call db querry:");
          console.log("errUp = " + errUp);
          console.log("resUp = " + resUp);
          return;
        } else if (resUp.length > 0) {
          if (errUp) player.notify("Error: " + errUp);
          var callPlayerName = JSON.stringify(resUp[0].onlineId);
          //////callPlayerName = callPlayerName.substring(1, callPlayerName.length -1);
          mp.players.forEach(
            (playerToSearch, id) => {
              if(mp.players.exists(player) && mp.players.exists(playerToSearch)) {
                if (playerToSearch.data.phoneNumber == callnumber) {
                  if(playerToSearch.getVariable("state") === "INGAME") {                    
                    let newTSName = "" + player.data.string + "-" + player.id;
                    let newOtherTSName = "" + playerToSearch.data.string + "-" + playerToSearch.id;
                    player.setVariable("phoneIsCalling", false);
                    playerToSearch.setVariable("phoneIsRinging", false);
                    player.setVariable("CALLING_PLAYER_NAME", newOtherTSName);
                    player.setVariable("pstring", playerToSearch.data.string);
                    playerToSearch.setVariable("CALLING_PLAYER_NAME", newTSName);
                    playerToSearch.setVariable("pstring", player.data.string);
                    player.setVariable("CALL_IS_STARTED", true);
                    playerToSearch.setVariable("CALL_IS_STARTED", true);  
                    var kontakt = player.getVariable("contactname");
                    if (kontakt == null) {
                      playerToSearch.call("client:Handy:acceptCall", [player.data.phoneNumber, leitstelle]);
                    } else {
                      playerToSearch.call("client:Handy:acceptCall", [kontakt, leitstelle]);
                    }            
                    if(leitstelle != null) {
                      player.setVariable("CALLING_PLAYER_NUMBER", leitstelle);
                      playerToSearch.setVariable("CALLING_PLAYER_NUMBER", leitstelle);
                    } else {
                      player.setVariable("CALLING_PLAYER_NUMBER", callnumber);
                      playerToSearch.setVariable("CALLING_PLAYER_NUMBER", player.data.phoneNumber);
                    }
                  }
                }
              }
            }
          );
        }
      });
    }
  }
});

// Send client event to calling partner when rejected
mp.events.add("server:phone:rejectCall", (player, number, leitstelle) => {
  if(mp.players.exists(player)) {
    var callnumber = player.getVariable("callnumber");
    if(callnumber != "") {
      gm.mysql.handle.query("SELECT onlineId FROM `characters` WHERE phoneNumber = "+callnumber, function (errUp, resUp) {
        if (errUp) {
          console.log("ERROR in phone call reject db querry:");
          console.log("errUp = " + errUp);
          console.log("resUp = " + resUp);
          return;
        } else if (resUp.length > 0) {
          if (errUp) player.notify("Error: " + errUp);
          var callPlayerName = JSON.stringify(resUp[0].onlineId);
          ////callPlayerName = callPlayerName.substring(1, callPlayerName.length -1);
          mp.players.forEach(
            (playerToSearch, id) => {
              if (playerToSearch.data.phoneNumber == callnumber) {
                player.setVariable("phoneIsCalling", false);
                player.setVariable("phoneIsRinging", false);
                playerToSearch.setVariable("phoneIsRinging", false);
                playerToSearch.setVariable("phoneIsCalling", false);
                playerToSearch.call("client:Handy:callRejected");
                player.call("client:Handy:callRejected");
              }
            }
          );
        }
      });
    }
  }
});


///////////// Hier müsste auch mit ForEach erst mal der SpielerHandle gefunden werden. Der Bloße Name aus der Var ist leider kein Handle.
mp.events.add("server:phone:endCall", (player) => {
  if(mp.players.exists(player)) {
    var callingPartnerName = player.getVariable("CALLING_PLAYER_NAME");
    var callingPartnerString = player.getVariable("pstring");    
    if (callingPartnerName !== null) {
      callingPartnerName = callingPartnerName.replace(''+callingPartnerString+'-', '');
      player.setVariable("CALL_IS_STARTED", false);
      player.setVariable("CALLING_PLAYER_NAME", "");
      player.setVariable("CALLING_PLAYER_NUMBER", "");
      mp.players.forEach(
        (playerToSearch, id) => {
          if (playerToSearch.id == callingPartnerName) {
            playerToSearch.setVariable("phoneIsRinging", false);
            playerToSearch.setVariable("phoneIsCalling", false);
            playerToSearch.setVariable("CALL_IS_STARTED", false);
            playerToSearch.setVariable("CALLING_PLAYER_NAME", "");
            playerToSearch.setVariable("CALLING_PLAYER_NAME", "");
          }
        }
      );
    }
  }
});


// eigene Nummer an Client senden
mp.events.add("server:phone:getOwnNumber", (player) => {
  if(mp.players.exists(player)) {
    var number = player.data.phoneNumber;
    player.call("client:Handy:showSettings", [number]);
  }
});

  // is in call?

mp.events.add("server:phone:isInCall", (player) => {
  if(mp.players.exists(player)) {
    var isInCall = player.getVariable("CALL_IS_STARTED");
    if(isInCall == true) {
      var name = player.getVariable("CALLING_PLAYER_NAME");
          gm.mysql.handle.query("SELECT phoneNumber FROM `characters` WHERE onlineId = ?", [name], function (errUp, resUp) {
            if (errUp) {
              console.log("ERROR in phone call db querry:");
              console.log("errUp = " + errUp);
              console.log("resUp = " + resUp);
              return;
            } else if (resUp.length > 0) {
              var number = resUp[0].phoneNumber;
              player.call("client:Handy:showPhonecall", [number])
            }
          });
    } else {
      player.call("client:Handy:showDialpad");
    }
  }
});


// Leitstelle schon meine?
mp.events.add("server:phone:getLeitstelle", (player, leitstelle) => {
  if(mp.players.exists(player)) {
    leitstelle = parseInt(leitstelle);
    gm.mysql.handle.query("SELECT targetnumber FROM phone_short WHERE shortnumber = " + leitstelle, function (errUp, resUp) {
      if (errUp) {
        console.log("ERROR in phone Leitstellen db querry:");
        console.log("errUp = " + errUp);
        console.log("resUp = " + resUp);
        return;
      } else if (resUp.length > 0) {
        var targetNumber = resUp[0].targetnumber;
        if (player.data.phoneNumber == targetNumber) {
          mp.events.call("server:phone:removeLeitstelle", player, leitstelle);
        } else {
          mp.events.call("server:phone:setLeitstelle", player, leitstelle);
        }
      }
    });
  }
});

mp.events.add("server:phone:leitstelleOffDuty", (player, leitstelle) => {
  if(mp.players.exists(player)) {
    leitstelle = parseInt(leitstelle);
    gm.mysql.handle.query("SELECT targetnumber FROM phone_short WHERE shortnumber = " + leitstelle, function (errUp, resUp) {
      if (errUp) {
        console.log("ERROR in phone Leitstellen db querry:");
        console.log("errUp = " + errUp);
        console.log("resUp = " + resUp);
        return;
      } else if (resUp.length > 0) {
        var targetNumber = resUp[0].targetnumber;
        if (player.data.phoneNumber == targetNumber) {
          mp.events.call("server:phone:removeLeitstelle", player, leitstelle);
        } else {
          return;
        }
      }
    });
  }
});

// Leitstellen setzen
mp.events.add("server:phone:setLeitstelle", (player, leitstelle) => {
  if(mp.players.exists(player)) {
    gm.mysql.handle.query("UPDATE phone_short SET targetnumber = '" + player.data.phoneNumber + "' WHERE shortnumber = " + leitstelle, function (errUp, resUp) {
      if (errUp) {
        console.log("ERROR in phone Leitstellen db querry:");
        console.log("errUp = " + errUp);
        console.log("resUp = " + resUp);
        return;
      } else {
        player.notify("~g~Leitstelle ~w~angenommen!");
      }
    });
  }
});

// Leitstellen entfernen
mp.events.add("server:phone:removeLeitstelle", (player, leitstelle) => {
  if(mp.players.exists(player)) {
    gm.mysql.handle.query("UPDATE phone_short SET targetnumber = NULL WHERE shortnumber = " + leitstelle, function (errUp, resUp) {
      if (errUp) {
        console.log("ERROR in phone Leitstellen db querry:");
        console.log("errUp = " + errUp);
        console.log("resUp = " + resUp);
        return;
      } else {
        player.notify("~g~Leitstelle ~r~abgelegt!");
      }
    });
  }
});

mp.events.add("server:phone:sendSMS",(player,msg) => {
  if (mp.players.exists(player)) {
    var target = parseInt(player.getVariable("smsnumber"));
    if (player.data.lphone == 1) {
      player.notify("~r~Dies ist mit dem Leitstellen Telefon nicht möglich");
      return;
    }
    gm.mysql.handle.query("SELECT id, onlineId FROM characters WHERE phoneNumber = ?",[target],function(err1,res1) {
      if (err1) console.log(err1);
      if (res1.length > 0) {
        gm.mysql.handle.query("SELECT * FROM phone_contacts WHERE phoneNumber = ? AND playerCharID = ?",[player.data.phoneNumber,res1[0].id], function (errUp, res) {
          if (errUp) console.log(errUp);
          if (res.length > 0) {
            //Kontakt existiert
            gm.mysql.handle.query("SELECT * FROM phone_sms WHERE sendNummer = ? AND targetnumber = ?",[player.data.phoneNumber,target],function(err2,res2) {
              if (err2) console.log("Error: "+err2);
              if (res2.length > 0) {  
                if (res2[0].targetnumber == target) {
                  gm.mysql.handle.query("UPDATE phone_sms SET multi = '1' WHERE targetnumber = ? AND pnid = ?",[target,res2[0].pnid],function(err6,res6) {
                    if (err6) console.log("errir; "+err6);
                     //Nachrichten verlauf existiert
                    gm.mysql.handle.query("INSERT INTO phone_sms SET phonenumber = ?, targetnumber = ?, sms = ?, gelesen = '0',multi = '0',pnid = ?, targetId = ?, telefonnummer = ?,sendNummer = ?,sendId = ?",[res[0].contactName,target,msg,res2[0].pnid,res1[0].id,target,player.data.phoneNumber,player.data.charId],function(err3,res3) {
                      if (err3) console.log(err3);
                      mp.events.call("server:phone:getSmsContact");
                      mp.players.forEach(
                        (playerToSearch, id) => {
                          if (mp.players.exists(playerToSearch)) {
                            if (mp.players.exists(player)) {
                              player.notify("~g~SMS gesendet!");                     
                              if (playerToSearch.id == res1[0].onlineId) {                  
                                playerToSearch.notify("~g~Du hast eine SMS bekommen!");
                                playerToSearch.call("playSound", ["Goon_Paid_Small", "GTAO_Boss_Goons_FM_Soundset"]); 
                              }
                            }
                          }        
                        }
                      );
                    });
                  });                 
                } else {
                  //Nachrichten verlauf existiert
                gm.mysql.handle.query("INSERT INTO phone_sms SET phonenumber = ?, targetnumber = ?, sms = ?, gelesen = '0',multi = '0',pnid = ?, targetId = ?, telefonnummer = ?,sendNummer = ?,sendId = ?",[res[0].contactName,target,msg,res2[0].pnid,res1[0].id,target,player.data.phoneNumber,player.data.charId],function(err3,res3) {
                  if (err3) console.log(err3);
                  mp.events.call("server:phone:getSmsContact");
                  mp.players.forEach(
                    (playerToSearch, id) => {
                      if (mp.players.exists(playerToSearch)) {
                        if (mp.players.exists(player)) {
                          player.notify("~g~SMS gesendet!");                     
                          if (playerToSearch.id == res1[0].onlineId) {                  
                            playerToSearch.notify("~g~Du hast eine SMS bekommen!");
                            playerToSearch.call("playSound", ["Goon_Paid_Small", "GTAO_Boss_Goons_FM_Soundset"]); 
                          }
                        }
                      }        
                    }
                  );
                });
                }           
              } else {
                gm.mysql.handle.query("SELECT * FROM phone_sms WHERE sendNummer = ? AND targetnumber = ?",[target,player.data.phoneNumber],function(err5,res5) {
                  if (err5) console.log("Error: "+err5);
                  if (res5.length > 0) { 
                    if (res5[0].sendNummer == player.data.phoneNumber) {
                      //Nachrichten verlauf existiert
                    gm.mysql.handle.query("INSERT INTO phone_sms SET phonenumber = ?, targetnumber = ?, sms = ?, gelesen = '0',multi = '1',pnid = ?, targetId = ?, telefonnummer = ?,sendNummer = ?,sendId = ?",[res[0].contactName,target,msg,res5[0].pnid,res1[0].id,target,player.data.phoneNumber,player.data.charId],function(err3,res3) {
                      if (err3) console.log(err3);
                      mp.events.call("server:phone:getSmsContact");
                      mp.players.forEach(
                        (playerToSearch, id) => {
                          if (mp.players.exists(playerToSearch)) {
                            if (mp.players.exists(player)) {
                              player.notify("~g~SMS gesendet!");                     
                              if (playerToSearch.id == res1[0].onlineId) {                  
                                playerToSearch.notify("~g~Du hast eine SMS bekommen!");
                                playerToSearch.call("playSound", ["Goon_Paid_Small", "GTAO_Boss_Goons_FM_Soundset"]); 
                              }
                            }
                          }         
                        }
                      );
                    });
                    } else {
                      //Nachrichten verlauf existiert
                    gm.mysql.handle.query("INSERT INTO phone_sms SET phonenumber = ?, targetnumber = ?, sms = ?, gelesen = '0',multi = '0',pnid = ?, targetId = ?, telefonnummer = ?,sendNummer = ?,sendId = ?",[res[0].contactName,target,msg,res5[0].pnid,res1[0].id,target,player.data.phoneNumber,player.data.charId],function(err3,res3) {
                      if (err3) console.log(err3);
                      mp.events.call("server:phone:getSmsContact");
                      mp.players.forEach(
                        (playerToSearch, id) => {
                          if (mp.players.exists(playerToSearch)) {
                            if (mp.players.exists(player)) {
                              player.notify("~g~SMS gesendet!");                     
                              if (playerToSearch.id == res1[0].onlineId) {                  
                                playerToSearch.notify("~g~Du hast eine SMS bekommen!");
                                playerToSearch.call("playSound", ["Goon_Paid_Small", "GTAO_Boss_Goons_FM_Soundset"]); 
                              }
                            }
                          }        
                        }
                      );
                    });
                    }                     
                  } else {
                    //Nachrichten verlauf existiert nicht
                    pnid = "" + Math.floor(Math.random() * 9999999);
                    gm.mysql.handle.query("INSERT INTO phone_sms SET phonenumber = ?, targetnumber = ?, sms = ?, gelesen = '0',multi = '0',pnid = ?, targetId = ?,telefonnummer = ?,sendNummer = ?,sendId = ?",[res[0].contactName,target,msg,pnid,res1[0].id,target,player.data.phoneNumber,player.data.charId],function(err3,res3) {
                      if (err3) console.log(err3);
                      mp.events.call("server:phone:getSmsContact");
                      mp.players.forEach(
                        (playerToSearch, id) => {
                          if (mp.players.exists(playerToSearch)) {
                            if (mp.players.exists(player)) {
                              player.notify("~g~SMS gesendet!");                     
                              if (playerToSearch.id == res1[0].onlineId) {                  
                                playerToSearch.notify("~g~Du hast eine SMS bekommen!");
                                playerToSearch.call("playSound", ["Goon_Paid_Small", "GTAO_Boss_Goons_FM_Soundset"]); 
                              }
                            }
                          }        
                        }
                      );
                    });
                  }
                });                
              }
            });
          } else {
            //Kontakt existiert nicht
            gm.mysql.handle.query("SELECT * FROM phone_sms WHERE sendNummer = ? AND targetnumber = ?",[player.data.phoneNumber,target],function(err2,res2) {
              if (err2) console.log("Error: "+err2);
              if (res2.length > 0) {
                gm.mysql.handle.query("UPDATE phone_sms SET multi = '1' WHERE targetnumber = ? AND pnid = ?",[target,res2[0].pnid],function(err6,res6) {
                  if (err6) console.log("errir; "+err6);
                  //Nachrichten verlauf existiert
                  gm.mysql.handle.query("INSERT INTO phone_sms SET phonenumber = ?, targetnumber = ?, sms = ?, gelesen = '0',multi = '0',pnid = ?, targetId = ?,telefonnummer = ?,sendNummer = ?,sendId = ?",[player.data.phoneNumber,target,msg,res2[0].pnid,res1[0].id,target,player.data.phoneNumber,player.data.charId],function(err3,res3) {
                    if (err3) console.log(err3);
                    mp.events.call("server:phone:getSmsContact");
                    mp.players.forEach(
                      (playerToSearch, id) => {
                        if (mp.players.exists(playerToSearch)) {
                          if (mp.players.exists(player)) {
                            player.notify("~g~SMS gesendet!");                     
                            if (playerToSearch.id == res1[0].onlineId) {                  
                              playerToSearch.notify("~g~Du hast eine SMS bekommen!");
                              playerToSearch.call("playSound", ["Goon_Paid_Small", "GTAO_Boss_Goons_FM_Soundset"]); 
                            }
                          }
                        }        
                      }
                    );
                  });
                });                
              } else {                
                //Nachrichten verlauf existiert nicht
                pnid = "" + Math.floor(Math.random() * 9999999);
                gm.mysql.handle.query("INSERT INTO phone_sms SET phonenumber = ?, targetnumber = ?, sms = ?, gelesen = '0',multi = '0',pnid = ?,targetId = ?,telefonnummer = ?,sendNummer = ?,sendId = ?",[player.data.phoneNumber,target,msg,pnid,res1[0].id,target,player.data.phoneNumber,player.data.charId],function(err3,res3) {
                  if (err3) console.log(err3);
                  mp.events.call("server:phone:getSmsContact");
                  mp.players.forEach(
                    (playerToSearch, id) => {
                      if (mp.players.exists(playerToSearch)) {
                        if (mp.players.exists(player)) {
                          player.notify("~g~SMS gesendet!");                     
                          if (playerToSearch.id == res1[0].onlineId) {                  
                            playerToSearch.notify("~g~Du hast eine SMS bekommen!");
                            playerToSearch.call("playSound", ["Goon_Paid_Small", "GTAO_Boss_Goons_FM_Soundset"]); 
                          }
                        }
                      }                               
                    }
                  );
                });
              }
            });
          }
        });
      } else {
        player.notify("~r~Diese Nummer existiert nicht");
      }
    });    
  }
});

// SMS auslesen
mp.events.add("server:phone:getSms", (player) => {
  if(mp.players.exists(player)) {
    gm.mysql.handle.query("SELECT * FROM phone_sms WHERE targetnumber = ? AND multi = '0' ORDER BY id DESC", [player.data.phoneNumber], function(errUp, resUp) {
      if (errUp) {
        console.log("ERROR in phone getContacts db querry:");
        console.log("errUp = " + errUp);
        console.log("resUp = " + resUp);
        return;
      } else if (resUp.length > 0) {
        var c = 0;
        let names = [];
        resUp.forEach(function(contacts) {
          let obj = {"number": String(contacts.phonenumber), "gelesen": String(contacts.gelesen)};
            names.push(obj);
            if (c+1 == resUp.length) {
                player.call("client:Handy:showSms",[names]);
            }
            c++;
        });
      } else {
        if(mp.players.exists(player)) player.call("client:Handy:showSms");
      }
    });
  }
});

// SMS Einzel auslesen
mp.events.add("server:phone:getSmsContact", (player,number) => {
  if(mp.players.exists(player)) {
    gm.mysql.handle.query("SELECT * FROM phone_sms WHERE targetnumber = ? AND phonenumber = ?",[player.data.phoneNumber,number],function(err,res) {
      if (err) console.log("E."+err);
      gm.mysql.handle.query("SELECT * FROM phone_sms WHERE pnid = ? ORDER BY id DESC", [res[0].pnid], function(errUp, resUp) {
        if (errUp) {
          console.log("ERROR in phone getContacts db querry:");
          console.log("errUp = " + errUp);
          console.log("resUp = " + resUp);
          return;
        } else if (resUp.length > 0) {
          player.setVariable("pnid",res[0].pnid);
          gm.mysql.handle.query("SELECT * FROM phone_sms WHERE pnid = ?",[resUp[0].pnid],function(errUp1,resUp1) {
            if (errUp1) console.log(errUp1);
            var c = 0;
            let names = [];
            let charId = [];
            player.setVariable("smsnumber",res[0].sendNummer);
            gm.mysql.handle.query("UPDATE phone_sms SET gelesen = '1' WHERE pnid = ? AND targetId = ?",[resUp[0].pnid,player.data.charId],function(err1,res1) {
              if (err1) console.log("Error in Update gelesen: "+err1);
               resUp1.forEach(function(contacts) {
                let obj = {"sms": String(contacts.sms), "id": String(contacts.sendId), "charId": String(player.data.charId),"gelesen": String(contacts.gelesen)};
                names.push(obj);
                if (c+1 == resUp1.length) {
                    player.call("client:Handy:showSmsContact",[names]);
                }
                c++;
            });
            });
           
          });        
        } else {
          if(mp.players.exists(player)) player.call("client:Handy:showSmsContact");
        }
      });
    });    
  }
});

// Kontakt hinzufügen
mp.events.add("server:phone:addContact", (player, name, number) => {
  if(mp.players.exists(player)) {
    gm.mysql.handle.query("INSERT INTO phone_contacts (playerCharID, phoneNumber, contactName) VALUES (?,?,?)", [player.data.charId, number, name], function (errUp, resUp) {
      if (errUp) {
        console.log("ERROR in phone add contact db querry:");
        console.log("errUp = " + errUp);
        console.log("resUp = " + resUp);
        return;
      } else {
        if(mp.players.exists(player)) {
          gm.mysql.handle.query("SELECT * FROM phone_contacts WHERE playerCharID = ? ORDER BY contactName asc", [player.data.charId], function (err99, res99) {
            if (err99) console.log("Error in Select Vehicle Keys on Login"+err99);
            let contactList = [];
            res99.forEach(function(contact) {
                let obj = {"contactName": contact.contactName};
                contactList.push(obj);
            });
            contactList = JSON.stringify(contactList);
            player.setVariable("currentContacts",contactList); 
            player.notify("~g~Kontakt wurde hinzugefügt!");
          });
        }
      }
    });
  }
});

mp.events.add("server:phone:getSingleContact", (player, name) => {
  if(mp.players.exists(player)) {    
    gm.mysql.handle.query('SELECT phoneNumber from phone_contacts WHERE contactName = ? AND playerCharID = ?', [name, player.data.charId], function(errUp, resUp) {
      if (errUp) {
        console.log("ERROR in phone getSingleContacts db querry:");
        console.log("errUp = " + errUp);
        console.log("resUp = " + resUp);
        return;
      } else if (resUp.length > 0) {
        var number = resUp[0].phoneNumber;
        player.setVariable("smsnumber",number);
        if(mp.players.exists(player)) player.call("client:Handy:showSingleContact", [name, number]);
      }
    });
  }
});

// Kontakt anrufen
mp.events.add("server:phone:callContact", (player, name) => {
  if(mp.players.exists(player)) {
    gm.mysql.handle.query(`SELECT phoneNumber FROM phone_contacts WHERE contactName = ? AND playerCharID = ?`, [name, player.data.charId], function(errUp, resUp) {
      if (errUp) {
        console.log("ERROR in phone getContacts db querry:");
        console.log("errUp = " + errUp);
        console.log("resUp = " + resUp);
        return;
      } else if (resUp.length > 0) {
        var number = resUp[0].phoneNumber;        
        if(mp.players.exists(player)) player.call("client:Handy:onCall", [number]);
      }
    });
  }
});


// Kontakt löschen
mp.events.add("server:phone:deleteContact", (player, name) => {
  if(mp.players.exists(player)) {
    gm.mysql.handle.query('DELETE FROM phone_contacts WHERE contactName = ? AND playerCharID = ?', [name, player.data.charId], function (errUp, resUp) {
      if (errUp) {
        console.log("ERROR in phone deleteContact db querry:");
        console.log("errUp = " + errUp);
        console.log("resUp = " + resUp);
        return;        
      } else {
        if(mp.players.exists(player)) {
          gm.mysql.handle.query("SELECT * FROM phone_contacts WHERE playerCharID = ? ORDER BY contactName asc", [player.data.charId], function (err99, res99) {
            if (err99) console.log("Error in Select Vehicle Keys on Login"+err99);
            let contactList = [];
            res99.forEach(function(contact) {
                let obj = {"contactName": contact.contactName};
                contactList.push(obj);
            });
            contactList = JSON.stringify(contactList);
            player.setVariable("currentContacts",contactList); 
            player.notify("~r~Kontakt wurde gelöscht!");
          });
        }
      }
    });
  }
});


// Kontakt bearbeiten
mp.events.add("server:phone:saveContact", (player, name, number, old_name, old_number) => {
  if(mp.players.exists(player)) {
    gm.mysql.handle.query('UPDATE phone_contacts SET contactName = ?, phoneNumber = ? WHERE contactName = ? AND phoneNumber = ? AND playerCharID = ?', [name, number, old_name, old_number, player.data.charId], function (errUp, resUp) {
      if (errUp) {
        console.log("ERROR in phone saveContact db querry:");
        console.log("errUp = " + errUp);
        console.log("resUp = " + resUp);
        return;
      } else {
        if(mp.players.exists(player)) {
          gm.mysql.handle.query("SELECT * FROM phone_contacts WHERE playerCharID = ? ORDER BY contactName asc", [player.data.charId], function (err99, res99) {
            if (err99) console.log("Error in Select Vehicle Keys on Login"+err99);
            let contactList = [];
            res99.forEach(function(contact) {
                let obj = {"contactName": contact.contactName};
                contactList.push(obj);
            });
            contactList = JSON.stringify(contactList);
            player.setVariable("currentContacts",contactList); 
            player.notify("~g~Kontakt wurde bearbeitet!");
          });
        }
      }
    });
  }
});

// Konto
mp.events.add("server:Global:GetBankMoney",(player) => {
  if(mp.players.exists(player)) {
    gm.mysql.handle.query("SELECT * FROM bank_konten WHERE ownerId = ? AND firma = '0'",[player.data.charId],function(err,res) {
      if (err) console.log("Error in Select: "+err);
      var ownerId = res[0].ownerId;
      var scode = "(SAHDJSAHD4)";
      player.call("client:Handy:ShowBankAmount", [ownerId, scode]);
    });
  }
});