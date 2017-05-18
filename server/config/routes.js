var api = require('./../controller/user.js');
var stat = require('./../controller/api.js');


module.exports = function(app){
	app.get('/login', function(req, res){
		res.render('index')
	})

	app.post('/login/submit', function(req, res){
		api.chatroom(req, res);
	})

	app.get("/stat/:name", function(req, res) {
		stat.stats(req, res)
	});

	app.get('/', function(req, res){
		res.render('chatroom')
	})

}