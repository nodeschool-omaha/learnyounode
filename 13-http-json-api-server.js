var http = require('http');
var url = require('url');

var port = process.argv[2];

var server = http.createServer(function(request, response) {
  parsedRequest = url.parse(request.url, true);
  var iso = parsedRequest.query.iso;

  if (iso) {
    var date = new Date(iso);

    if (parsedRequest.pathname === '/api/parsetime') {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
      }));
      response.end();
    }

    if (parsedRequest.pathname === '/api/unixtime') {
      response.writeHead(200, { 'Content-Type': 'application/json' });
      response.write(JSON.stringify({
        "unixtime": date.getTime()
      }));
      response.end()
    }
  }

}).on('error',console.error);
server.listen(port);
