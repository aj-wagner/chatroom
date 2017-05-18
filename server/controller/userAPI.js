var fs = require('fs');

module.exports = (function(req, res){
	return {
		chatroom:function(req, res){
			var name = {};
			name[req.body.username] = 0;

			var useObj = [];
			useObj.push(name);

			
			if(!fs.existsSync('userObjects.json')){

				fs.writeFile('userObjects.json', JSON.stringify(useObj), function(err){console.log(err)});
			}
			else{
				var fileData;

				fs.readFile('userObjects.json', 'utf8', function(err, data){
				var arrUserObjs = JSON.parse(data);
//console.log(typeof arrUserObjs[0]);

				for(var i=0; i<arrUserObjs.length; i++){
					if(Object.keys(arrUserObjs[i]) == req.body.username){
						res.render('chatroom', {username: req.body.username});
				console.log(arrUserObjs[i]);

					}
				}
			

				});

			//	fs.writeFile('userObjects.json', JSON.stringify(useObj), function(err){console.log(err)});
	
			}
			
			res.render('chatroom');
		}
	}
})()