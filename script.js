"use strict";
// Com o Partial<Tipo>, podemos indicar que todas as propriedades da interface passada em Tipo, são opcionais.
function exibirProduto(produto) {
    if (produto.nome) {
        console.log(produto.nome);
    }
}
const prod1 = {
    nome: 'Notebook',
    preco: 3000,
    memoria: '256GB'
};
const prod2 = {
    nome: 'Monitor',
    preco: 1400,
    tipoTela: 'IPS'
};
exibirProduto(prod1);
exibirProduto(prod2);
const artigo = {
    titulo: 'Como aprender TypeScript',
    visualizacoes: 3475,
    tags: ['TypeScript', 'Front-end', 'TS'],
    autor: 'Matheus'
};
console.log(artigo.titulo);
console.log(artigo.tags);
if (typeof artigo.autor === 'string') {
    console.log(artigo.autor.toUpperCase());
}
const mostrarTitulo = (obj) => {
    if ('titulo' in obj) {
        console.log(obj.titulo);
    }
};
mostrarTitulo({});
mostrarTitulo({ titulo: 'Hello World' });
mostrarTitulo({ nome: 'John Doe' });
