## <a name='task1'>Задание 1 (из класса)<a>
В объекте есть свойство className, которое содержит список «классов» – слов, разделенных пробелом. 
Создайте функцию addClass(obj, cls), которая добавляет в список класс cls, но только если его там еще нет. 
Ваша функция не должна добавлять лишних пробелов.
```javascript
var obj = {
	className: 'open menu'  
}; 
addClass(obj, 'new'); // obj.className='open menu new'  addClass(obj, 'open'); // без изменений 
addClass(obj, 'me'); // obj.className='open menu new me'   
console.log( obj.className ); // "open menu new me"
```

## <a name='task1'>Задание 1 (Удаление css классов)<a>
У объекта есть свойство className, которое хранит список css класов – слов, разделенных пробелами:
```javascript
var obj = {
	className: 'open menu'
};
```
Напишите функцию removeClass(obj, cls), которая удаляет класс cls, если он есть:
```javascript
removeClass(obj, 'open'); // obj.className='menu'
removeClass(obj, 'blabla'); // без изменений
```
P.S. Дополнительное усложнение. Функция должна корректно обрабатывать дублирование класса в строке:
```javascript
obj = {
	className: 'my menu menu'
};

removeClass(obj, 'menu');

console.log( obj.className ); // 'my'
```
Лишних пробелов после функции образовываться не должно.

## <a name='task2'>Задание 2 (Сортировка массива строк)<a>
Есть массив строк arr. Создайте массив arrSorted — из тех же элементов, но отсортированный.
Исходный массив не должен меняться.
```javascript
var arr = ['HTML', 'JavaScript', 'CSS'];

// ... ваш код ...

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)

```

## <a name='task3'>Задание 3 (Random sort)<a>
Необходимо отсортировать массив в случайном порядке используя метод sort.
```javascript
var arr = [1, 2, 3, 4, 5];

arr.sort(ваша функция);

console.log( arr ); // элементы в случайном порядке, например [3,5,1,2,4]
```

## <a name='task4'>Задание 4 (Object sort)<a>
Напишите код, который отсортирует массив объектов people по полю age.
Например:
```javascript
var vasya = { name: 'Вася', age: 23 };
var masha = { name: 'Маша', age: 18 };
var vovochka = { name: 'Вовочка', age: 6 };

var people = [ vasya , masha , vovochka ];

... ваш код ...

// теперь people: [vovochka, masha, vasya]
console.log(people[0].age) // 6
```
Выведите список имён в массиве после сортировки.

## <a name='task5'>Задание 5 (Проверка на палиндром)<a>
Палиндром - это строка которая читается с обоих сторон одинаково. Например: Анна, оно, А роза упала на лапу Азора.
Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли строка палиндромом или нет.
```javascript
console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
```

## <a name='task6'>Задание 6 (Уникальные элементы массива)<a>
Напишите функцию unique(arr), которая возвращает массив, содержащий только уникальные элементы arr (arr — массив строк).
```javascript
var strings = ['кришна', 'кришна', 'харе', 'харе', 'харе', 'харе', 'кришна', 'кришна', '8-()' ];
console.log( unique(strings) ); // кришна, харе, 8-()
```

## <a name='task7'>Задание 7 (Анаграммы)<a>
Анаграммы — слова, состоящие из одинакового количества одинаковых букв, но в разном порядке. Например:
воз - зов киборг - гробик корсет - костер - сектор Напишите функцию anClean(arr), которая возвращает массив слов, очищенный от анаграмм.
```javascript
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];

console.log( anClean(arr) ); // 'воз,киборг,корсет' или 'ЗОВ,гробик,сектор'

```
Из каждой группы анаграмм должно остаться только одно слово, не важно какое.

Codewars

1. http://www.codewars.com/kata/add-property-to-every-object-in-array