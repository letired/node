var fs = require('fs');
var filePath = process.argv[2];
fs.readFile(filePath, function(err, data){
  if (err) {
    return console.log(err)
  }
  var str = data.toString()
  var ary = str.split('\n')
  console.log(ary.length - 1)
});
