"use strict";
const frase = 'Front-end';
const preco = 200;
const condicao = preco > 100;
console.log(typeof frase);
console.log(typeof preco);
console.log(typeof []);
console.log(typeof {});
console.log(typeof document);
console.log(typeof window);
console.log(typeof null);
console.log(typeof undefined);
if (typeof frase === 'string') {
    console.log(frase.toLowerCase());
}
const txt = new String('Hello World');
const txtFunc = String('Fala dev');
console.log(txt.toUpperCase());
console.log(txtFunc.toUpperCase());
console.log(typeof String);
