var fs = require('fs');

module.exports = (function(req, res){

    return {
        stats: function (req, res) {
            var oUsers, found;
            if(req.params) {
                if(fs.existsSync("userObjects.json")) {

                    fs.readFile("userObjects.json", "utf8", (err, data)=> {
                        if(err) {
                            console.log("file read error")
                        }
                        else {
                            // console.log(JSON.stringify(data, null, 2));
                            oUsers = JSON.parse(data);

                            for (let i=0; i<oUsers.length; i++) {
                                if(oUsers[i].name === req.params.name) {
                                    res.json(oUsers[i])
                                    break
                                }
                            }

                        }
                    });
                }
               
            }
        }
    }


}) ();