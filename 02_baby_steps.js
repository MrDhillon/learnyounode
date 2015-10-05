var sum = 0;
var array = process.argv.slice(2);
array.forEach(function(val,index,array){
  sum += Number(val);
});
console.log(sum);