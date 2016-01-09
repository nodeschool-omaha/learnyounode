var fs = require('fs')

var filename = process.argv[2];
fs.readFile(filename, function(err, contents) {
  if (err) {
    console.log(err);
    return;
  }
  var lines = contents.toString().split('\n');
  console.log(lines.length - 1);
});
