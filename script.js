"use strict";
let chave;
// let chave: 'nome' | 'preco' | 'lote'
chave = "lote";
// Já vimos o typeof do JavaScript, responsável por retornar o tipo do dado. No TypeScript
// podemos utilizar ele para indicar que um dado possui o mesmo tipo que outro.
function coordenadas(x, y) {
    return { x, y, };
}
let coord;
coord = (x, y) => {
    return { x, y, };
};
function selectElement(selector) {
    return document.querySelector(selector);
}
const element = selectElement('body');
