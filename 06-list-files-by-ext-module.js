var fs = require('fs')
var path = require('path');

module.exports = function(dirname, ext, callback) {
  var filtered;
  fs.readdir(dirname, function(err, files) {
    if (err) {
      return callback(err);
    }
    filtered = files.filter(function(file) {
      if(path.extname(file).substr(1) === ext) {
        return true;
      }
    });
    return callback(null, filtered);
  });
};
