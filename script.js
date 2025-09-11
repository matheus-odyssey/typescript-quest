"use strict";
function somar(a, b, c) {
    return a + b + (c ? c : 0);
}
console.log(somar(0.2, 0.8));
const subtrair = (a, b) => a + b;
console.log(subtrair(0.2, 0.8));
function pintarTela(cor) {
    document.body.style.backgroundColor = cor;
}
console.log(pintarTela('tomato'));
const btn = document.querySelector('button');
btn?.click();
function isString(value) {
    if (typeof value === 'string') {
        return true;
    }
}
console.log(isString('oi'));
console.log(isString(12));
