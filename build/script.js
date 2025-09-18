"use strict";
const msg = 'Hello World';
const btn = document.querySelector('button');
const txt = 'My Github profile is matheushnt';
console.log(txt);
const handleProduto = (dados) => {
    return dados.toLowerCase();
};
function handleClick() {
    console.log(this);
}
document.documentElement.addEventListener('click', handleClick);
//# sourceMappingURL=script.js.map