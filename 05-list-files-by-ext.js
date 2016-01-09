var fs = require('fs')
var path = require('path');

var dirname = process.argv[2];
var ext = process.argv[3];

fs.readdir(dirname, function(err, files) {
  if (err) {
    console.log(err);
    return;
  }
  var filtered = files.filter(function(file) {
    if(path.extname(file).substr(1) === ext) {
      console.log(file);
      return true;
    }
  });
});
