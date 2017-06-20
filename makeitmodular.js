var mymodule = require('./mymodule.js')

var filePath = process.argv[2];

var extension = process.argv[3];

var callback = function(error, list){
  if (error){
    console.log(error)
  }
  list.forEach(function(item){
    console.log(item);
  })
}

mymodule(filePath, extension, callback);
