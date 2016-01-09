var net = require('net');
var moment = require('moment');

var port = process.argv[2];

var net = require('net')  
var server = net.createServer(function (socket) {  
  socket.end(moment().format('YYYY-MM-DD HH:mm') + '\n'); 
});
server.listen(port);
