var fs = require('fs');

function countLines(){
  fs.readFile(process.argv[2],function(err,response){
    var buffer = response.toString().split('\n').length;
    if (buffer>1) {
      buffer -= 1;
    }
    console.log(buffer);
  });
}
countLines();
