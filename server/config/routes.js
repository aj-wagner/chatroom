var api = require('./../controller/userAPI.js');


module.exports = function(app){
	app.get('/login', function(req, res){
		res.render('index')
	})

	app.post('/login/submit', function(req, res){
		api.chatroom(req, res);
	})

	app.get('/', function(req, res){
		res.render('chatroom')
	})

}