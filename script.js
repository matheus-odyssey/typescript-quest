"use strict";
// Crie uma função que arredonda um valor passado para cima.
// A função pode receber string ou number.
// A função deve retornar o mesmo tipo que ela receber.
function arredondarNumber(n) {
    if (typeof n === 'number') {
        return Math.ceil(n);
    }
    else {
        return Math.ceil(Number(n)).toString();
    }
}
console.log(arredondarNumber(2.3));
console.log(arredondarNumber('1.3'));
