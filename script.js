"use strict";
// Fora do modo estrito, o TypeScript permitirá o uso de parâmetros sem especificarmos o tipo. Esses parâmetros terão o tipo implícito de any.
function normalizarTexto(texto) {
    return texto.trim().toLowerCase();
}
console.log(normalizarTexto('       BaCK-ENd      '));
// console.log(normalizarTexto(200));
// Em alguns casos o any faz sentido, como no caso da função json() onde qualquer tipo de dado pode ser retornado, dependendo da API que acessarmos.
function manipularData(data) {
    console.log(data.nome);
}
async function fetchJSON(url) {
    const response = await fetch(url);
    const data = await response.json();
    manipularData(data);
}
fetchJSON('https://api.origamid.dev/json/cursos.json');
function mostrarCursos(cursos) {
    cursos.forEach((curso) => {
        document.body.innerHTML += `
      <div>
        <h2>${curso.nome}</h2>
        <p>Horas: ${curso.horas}</p>
      </div>
    `;
    });
}
const dados = 'o any gera problemas';
mostrarCursos(dados);
