mp.events.add("server:email:openGelEmail",(player) => {
    gm.mysql.handle.query("SELECT * FROM phone_email WHERE empfId = ? AND gelesen = '1'",[player.data.charId],function (err,res) {
        if (err) console.log("Error in Select sms: "+err);
        if (res.length > 0) {
            var i = 1;
            let EmailList = [];          
            res.forEach(function(mail) {
                let obj = {"sendMail": String(mail.sendMail), "text": String(mail.id)};
                EmailList.push(obj);                
                if (parseInt(i) == parseInt(res.length)) {
                    if(mp.players.exists(player)) player.call("client:email:listEmails", [JSON.stringify(EmailList)]);
                }
                i++;
            });
        } else {
            player.notify("~r~Du hast keine Gelesenen Emails")
        }
    });
});

mp.events.add("server:email:unGelEmail",(player) => {
    gm.mysql.handle.query("SELECT * FROM phone_email WHERE empfId = ? AND gelesen = '0'",[player.data.charId],function (err,res) {
        if (err) console.log("Error in Select sms: "+err);
        if (res.length > 0) {
            var i = 1;
            let EmailList = [];          
            res.forEach(function(mail) {
                let obj = {"sendMail": String(mail.sendMail), "text": String(mail.id)};
                EmailList.push(obj);                
                if (parseInt(i) == parseInt(res.length)) {
                    if(mp.players.exists(player)) player.call("client:email:listEmails", [JSON.stringify(EmailList)]);
                }
                i++;
            });
        } else {
            player.notify("~r~Du hast keine ungelesenen Emails")
        }
    });
});


mp.events.add("inputValueEmail", (player, output, text) => {
    if(mp.players.exists(player)) { 
        gm.mysql.handle.query("SELECT isOnline,onlineId FROM characters WHERE email = ?",[output],function(err,res) {
            if (err) console.log("Error in Send Email: "+err);
            if (res.length > 0) {
                gm.mysql.handle.query("INSERT INTO phone_email SET sendId = ?,sendMail = ?, empfId = ?, email = ?, gelesen = '0'",[player.data.charId,player.data.mail,res[0].id,text],function (err1,res1) {
                    if (err1) console.log(err1);
                    if (res[0].isOnline == 1) {
                        mp.players.forEach(
                            (playerToSearch, id) => {
                                if (playerToSearch.id == res[0].onlineId) {
                                    playerToSearch.notify("~g~Du hast eine neue Mail erhalten!");
                                    player.notify("~g~Mail gesendet");
                                }                      
                            }
                        );
                    } else {
                        player.notify("~g~Mail gesendet");
                    }
                });
            } else {
                player.notify("~r~Diese Email Existiert nicht!");
            }
        });      
    }
});

mp.events.add("server:email:lesen",(player,id) => {
    gm.mysql.handle.query("SELECT * FROM phone_email WHERE id = ?",[id],function(err,res) {
        if (err) console.log(err);
        gm.mysql.handle.query("UPDATE phone_email SET gelesen = '1' WHERE id = ?",[id],function(err1,res1) {
            if (err1) console.log(err1);
            player.call("client:email:lesen",[res[0].email]);
        });        
    });
});

mp.events.add("server:email:openEmailMain",(player) => {
    gm.mysql.handle.query("SELECT COUNT(id) AS counter FROM phone_email WHERE gelesen = '0' AND empfId = ?",[player.data.charId],function(err1,res1) {
        gm.mysql.handle.query("SELECT COUNT(id) AS counter FROM phone_email WHERE gelesen = '1' AND empfId = ?",[player.data.charId],function(err2,res2) {
            player.call("client:email:openEmail",[player.data.mail,res1[0].counter,res2[0].counter]);
        });
    });    
});