"use strict";
let total = 200;
total = '400';
function isNumber(value) {
    if (typeof value === 'number') {
        return true;
    }
    return 'Não é um number';
}
console.log(isNumber(200));
console.log(isNumber('Hello World'));
if (isNumber('200')) {
    console.log('É um número');
}
// O ideal é sempre retornar um valor de apenas um tipo
const button = document.querySelector('button');
button?.click();
