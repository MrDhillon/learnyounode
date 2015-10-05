var fs = require('fs');
var mymodule = require("./06_module.js");
var folder = process.argv[2];
var ext = process.argv[3];

mymodule(folder,ext,function(err,list){
  if (err) return console.error(err);
  list.forEach(function(file){
    console.log(file);
  });
});

