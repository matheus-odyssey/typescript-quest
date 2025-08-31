"use strict";
const produto = 'Livro';
const preco = 200;
const carro = {
    marca: 'Audi',
    cv: 450,
};
const barato = 200 < 400 ? true : 'Caro demais, slk não compensa';
function somar(x, y) {
    return x + y;
}
somar(8, 10);
const nintendo = {
    nome: 'Nintendo',
    ano: '2000',
};
function transformarPreco(produto) {
    console.log(produto);
}
transformarPreco(nintendo);
