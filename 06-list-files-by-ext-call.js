var listFilesByExt = require('./list-files-by-ext-module');

var dirname = process.argv[2];
var ext = process.argv[3];

listFilesByExt(dirname, ext, function(err, files) {
  if(err)
    console.log(err);

  files.forEach(function(file) {
    console.log(file);
  });
});
