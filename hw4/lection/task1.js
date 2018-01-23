function fib(n) {
    var a = 0, b = 1;
    for(i = 1; i <= n; i++) {
        b = a + (a = b);
        // console.log('Step #' + i + '\na = ' + a + ', b = ' + b );
    }
    return a;
}

console.log(fib(3));
console.log(fib(7));
console.log(fib(77));