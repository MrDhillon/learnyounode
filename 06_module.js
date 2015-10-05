var fs = require('fs');
var path = require('path');

module.exports = function(folder,ext,callback){
  fs.readdir(folder,function(err,list){
    return_array = [];
    if (err) return callback(err);
    list.forEach(function(v){
      if (path.extname(v) === "."+ext){
        return_array.push(v);
      }
    });
  return callback(null,return_array);
  });
};