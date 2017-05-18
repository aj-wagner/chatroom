var fs = require('fs');

module.exports = (function(req, res){
	return {
		chatroom:function(req, res){
			var name = {};
			name[req.body.username] = 0;			

			
			if(!fs.existsSync('userObjects.json')){
				var useObj = [];
				useObj.push(name);

				fs.writeFile('userObjects.json', JSON.stringify(useObj), function(err){console.log(err)});
			}
			else{
				var fileData;

				fs.readFile('userObjects.json', 'utf8', function(err, data){
				var arrUserObjs = JSON.parse(data);

				for(var i=0; i<arrUserObjs.length; i++){
					if(Object.keys(arrUserObjs[i]) == req.body.username){
						//don't update the file
						res.render('chatroom');
					}
				}
				//user isn't found in the data file
				arrUserObjs.push(name);

				//push a new obj on the array from the file
				fs.writeFile('userObjects.json', JSON.stringify(arrUserObjs), function(err){console.log(err)});

				res.render('chatroom');
			});


			}
			
		}
	}
})()