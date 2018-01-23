function upperFirst(str) {
    var firstLetter = str.charAt(0).toUpperCase();
    var sentence = str.substring(1);
    return firstLetter + sentence;
}
  
console.log(upperFirst('first upper case'));