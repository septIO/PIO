var express = require('express.io'),
    path = require('path'),
    server = express(),
    app = server.http().io();

var port = 1337;

server.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
    res.sendfile('index.html');
})

app.io.route('sendMessage', function (req) {

    req.io.broadcast('recieveMessage', req.data);

});

console.log('Listening on ' + port, new Date().toTimeString());
app.listen(port);