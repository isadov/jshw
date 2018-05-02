var arr = [5, 7, 4, 8, 3, 0];
var filtered = filterRange(arr, 3, 5);

function filterRange(arr, a, b) {
    var newArray = [];

    for(i = 0; i < arr.length; i++){
        if(a <= arr[i] && arr[i] <= b) {
            newArray.push(arr[i]);
        }
    }
    return newArray;
}

console.log(filtered);