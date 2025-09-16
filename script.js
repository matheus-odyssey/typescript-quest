"use strict";
const video = document.querySelector('.player');
console.log(video.volume);
async function fetchProduto() {
    const response = await fetch('https://api.origamid.dev/json/notebook.json');
    return response.json();
}
// Podemos usar o as em diferentes locais.
async function handleProduto1() {
    const produto = await fetchProduto();
    produto.nome;
}
async function handleProduto2() {
    const produto = (await fetchProduto());
    produto.nome;
}
async function handleProduto3() {
    const produto = await fetchProduto();
    produto.nome;
}
// Non-null operator, só existe no TS
const link = document.querySelector('a');
console.log(link.href);
document.querySelector('a').href = 'https://';
const v1 = document.querySelector('.player');
const v2 = document.querySelector('.player');
const v3 = document.querySelector('.player');
