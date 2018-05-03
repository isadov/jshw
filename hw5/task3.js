var numbers = [];
var summ = 0;

while(true) {
  var arr = prompt('Введите число', 0);
  
  if(arr === "" || arr === null || isNaN(arr)) break;
  
  numbers.push(+arr);
  
}

for(var i = 0; i < numbers.length; i++) {
  summ += numbers[i];
}

console.log(summ);