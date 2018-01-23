function checkLength(str) {
    var wordLimit = 21;

    if(str.length <= wordLimit) {
        return str;
    } else {
        return str.substring(0, wordLimit) + '...';
    }

}

console.log(checkLength('Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов. Если длинна больше 20, то обрезает строку и добавляет в конец строки'));