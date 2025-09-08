"use strict";
// Selecione os elementos com a classe link.
// Crie uma função que deve ser executada para cada elemento.
// Modificar através da função o estilo da color e border.
const links = document.querySelectorAll('.link');
function styleLink(link) {
    link.style.color = 'tomato';
    link.style.border = '1px solid #222';
}
links.forEach((item) => {
    if (item instanceof HTMLElement) {
        styleLink(item);
    }
});
