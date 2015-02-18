var express    = require('express');
var app        = express();
var server     = require('http').Server(app);
var io         = require('socket.io')(server);
var ejs        = require('ejs');
var portNumber = process.env.PORT || 1234;
var tomReady   = false;
var jerryReady = false;

app.set('views', __dirname); //????????????

app.engine('.html', ejs.__express);
app.set('view engine', 'html');

app.use(express.static(__dirname + '/public'));

server.listen(portNumber);

// console.log(portNumber);

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/home.html');
});
