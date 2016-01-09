var http = require('http');

var urls = process.argv.slice(2);
var urlsData = [urls.length];

function httpGet(url, callback) {
  var allData = '';

  http.get(url, function(response) {
    response.setEncoding('utf8');

    response.on('error', callback); 

    response.on('data', function(data) {
      allData += data;
    });

    response.on('end', function() {
      callback(null, allData);
    });
  });
}

urls.forEach(function(url, index) {
  httpGet(url, function(err, data) {
    if (err)
      return console.error(err);

    urlsData[index] = data;

    var finalData = urlsData.filter(function(data) { return data.length > 0; });
    if (finalData.length === urlsData.length) {
      finalData.forEach(function(data) {
        console.log(data);
      });
    }
  });
});

