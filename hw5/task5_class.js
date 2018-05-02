var someArray = ['1', '2', '3', '4'];

function find(arr, value) {
  for (i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return 'Position: ' + i;
    }
  }
  return -1;
}

console.log(find(someArray, '10'));