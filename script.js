"use strict";
let total = 20;
total = '10';
function preencherDados(dados) {
    document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui Webcam: ${dados.webcam ? 'sim' : 'não'}</p>
  </div>
  `;
}
const notebook = { nome: 'Notebook', preco: 3000, webcam: true };
preencherDados(notebook);
preencherDados({ nome: 'Computador', preco: 3000, webcam: false });
function imprimirStack(stack) {
    console.log(stack);
}
imprimirStack('back-end');
imprimirStack('front-end');
imprimirStack('fullstack');
