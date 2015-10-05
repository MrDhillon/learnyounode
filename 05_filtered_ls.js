var fs = require('fs');
var path = require('path');
var folder = process.argv[2];
var extension = "."+process.argv[3];

function findByExt(){
  fs.readdir(process.argv[2],function(err,list){
    list.forEach(function(v){
      if (path.extname(v) === extension){
        console.log(v);
      }
    });
  });
}
findByExt();