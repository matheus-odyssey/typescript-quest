"use strict";
// Tuples são arrays que possuem dados em posições fixas
const produto1 = ['Notebook', 2500];
const produto2 = ['Televisão', 6500];
console.log(produto2[0].toLowerCase());
console.log(produto2[1].toFixed(2));
// Torna um dado readonly e infere o tipo de dado mais específico possível. Em métodos que
// retornam Array's, as mesmas são transformadas em Tuples.
// const getText = (element: string): [HTMLElement, string] | null => {
const getText = (element) => {
    const el = document.querySelector(element);
    if (el) {
        return [el, el.innerText];
    }
    else {
        return null;
    }
};
console.log(getText(('a')));
const handleVendas = (vendas) => {
    if (vendas) {
        let totalVendas = 0;
        vendas.forEach((venda) => {
            document.body.innerHTML += `
        <h2>${venda[0].toUpperCase()}</h2>
        <p>Vendas: R$ ${venda[1].toFixed(2)}</p>
      `;
            totalVendas += venda[1];
        });
        document.body.innerHTML += `Total de vendas: R$ ${totalVendas}`;
    }
};
const fetchVendas = async (url) => {
    const response = await fetch(url);
    const json = await response.json();
    handleVendas(json);
};
fetchVendas('https://api.origamid.dev/json/vendas.json');
