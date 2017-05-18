var express = require('express');
var app = express();
var bp = require('body-parser');
var path = require('path');
var port = 8000;
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(bp.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname + '/client')));
app.set('views', path.join(__dirname + '/client/view'));
app.set('view engine', 'ejs');

require('./server/config/routes.js')(app);

// app.listen(port, function(){
// 	console.log('server is up and running');
// })

io.on('connection', function(socket){
	console.log('socket listening');
	socket.on('disconnect', function(){
    	console.log('user disconnected');
  	});

  	socket.on('chat message', function(msg){
  		io.emit(`chatmsg`, msg);
  	})
})



http.listen(port, function(){
  console.log('listening on *:3000');
});