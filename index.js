var express = require('express');
server = express();

server.get('/', function(req, res) {
    res.sendFile(__dirname+"/index.html");
});

server.get('/home', function(req, res) {
    res.send("hello world");
});

var port = 2000;
server.listen(port, function() {
    console.log("Listening on port ", port);
});