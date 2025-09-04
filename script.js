"use strict";
// Defina a interface da API: https://api.origamid.dev/json/cursos.json e mostre os dados na tela.
function mostrarCursos(cursos) {
    let color;
    cursos.forEach((curso) => {
        if (curso.nivel === 'iniciante') {
            color = 'blue';
        }
        if (curso.nivel === 'avancado') {
            color = 'red';
        }
        document.body.innerHTML += `
      <h1 style="color: ${color}";>${curso.nome}</h1>
      <p>Horas: ${curso.horas}</p>
      <p>Aulas: ${curso.aulas}</p>
      <p>Tipo: ${curso.gratuito ? 'Gratuito' : 'Pago'}</p>
      <p>Tags: ${curso.tags.join(', ')}</p>
      <p>Aulas: ${curso.idAulas.join(' | ')}</p>
    `;
    });
}
async function fetchCursos() {
    const response = await fetch('https://api.origamid.dev/json/cursos.json');
    const data = await response.json();
    mostrarCursos(data);
}
fetchCursos();
