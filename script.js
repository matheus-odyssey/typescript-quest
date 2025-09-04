"use strict";
// arrays
const numeros = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const valores = [10, 20, 'Taxas', 40, 50, 'Produto', 70, 80, 'Descontos', 100];
function maioresQue50(data) {
    return data.filter((n) => n > 50);
}
// data: (string | number)[]
function filtrarValores(data) {
    return data.filter((item) => typeof item === 'number');
}
console.log(maioresQue50(numeros));
console.log(filtrarValores(valores));
const dados = [
    ['Guerra Ininita', 2019],
    ['Ultimato', 2019],
];
