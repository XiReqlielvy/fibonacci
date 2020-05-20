'use strict';
const len = process.argv[2] || 40;
function fib(n){
    if (n === 0){
        return 0;
    }
    else if (n === 1){
        return 1;
    }
    return fib(n -1) + fib(n - 2);
}

for (let i = 0; i <= len; i++){
    console.log(fib(i));
}