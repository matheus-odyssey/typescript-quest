"use strict";
const button = document.querySelector('button');
const config = localStorage.getItem('config');
if (button)
    button.click();
config?.toLowerCase();
console.log(typeof null);
let total;
console.log(total);
console.log(typeof undefined);
total = 10;
const jogo = { nome: 'Ragnarok' };
const livro = {};
jogo.nome;
livro.nome?.toLowerCase();
// Sem o strictNullChecks como true, o TypeScript assume que qualquer valor pode incluir null | undefined e consequentemente para de checar casos onde realmente o null | undefined podem ser retornados.
// {
//   "compilerOptions": {
//     "target": "ESNext",
//     "strict": true, // já incluso no strict
//     "strictNullChecks": true
//   }
// }
