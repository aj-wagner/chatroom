var fs = require('fs');

module.exports = (function(req, res){

    return {
        chatroom: function (req, res) {
            var oUsers, found;
            if(req.body) {
                if(fs.existsSync("userObjects.json")) {
                    fs.readFile("userObjects.json", "utf8", (err, data)=> {
                        if(err) {
                            console.log("file read error")
                        }
                        else {
                            // console.log(JSON.stringify(data, null, 2));
                            oUsers = JSON.parse(data);
                            for (let i=0; i<oUsers.length; i++) {
                                if(oUsers[i].name === req.body.username) {
                                    oUsers[i].count = oUsers[i].count+1
                                    fs.writeFile("userObjects.json", JSON.stringify(oUsers, null, 2), function(err) {
                                        if(err) console.log("error reading file")
                                        console.log("ll")
                                    })                                          
                                    found = true
                                    break
                                }
                                else {
                                    found = false
                                }
                            }
                            if(!found) {
                                var newUser = {}
                                newUser.name = req.body.username
                                newUser.count = 1
                                oUsers.push(newUser)
                                fs.writeFile("userObjects.json", JSON.stringify(oUsers, null, 2), function(err) {
                                    if(err) console.log("error reading file")
                                })      
                            }
                        }
                    });
                }
                else {
                    var newUser = {}
                    newUser.name = req.body.username
                    newUser.count = 1
                    oUsers =[];
                    oUsers.push(newUser)
                    fs.writeFile("userObjects.json", JSON.stringify(oUsers, null, 2), function(err) {
                        if(err) console.log("error reading file")
                    })                          
                }
               
            }
          
        }
    }


}) ();