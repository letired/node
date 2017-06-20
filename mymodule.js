var fs = require('fs');
var path = require('path');

module.exports = function(filePath, extension, callback){
  fs.readdir(filePath, function(err, list){
    if (err) {
      return callback(err)
    }
    var myArray = []
    list.forEach(function(item){
      if (path.extname(item) === "." + extension) {
        myArray.push(item)
      }
    })
    callback(null, myArray)
  })
}
