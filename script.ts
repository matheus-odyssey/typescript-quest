// 1 - Crie uma função chamada toNumber
// 2 - A função pode receber number | string
// 3 - Se a função receber um número, retorne um número
// 4 - Se a função receber uma string, retorne um número
// 5 - Se ela receber algo diferente, retorne um erro. (throw "value deve ser um número ou uma string")

function toNumber(value: string | number) {
  if (typeof value === 'number') {
    return value;
  }

  if (typeof value === 'string') {
    return Number(value);
  }

  throw new Error('value deve ser uma string ou number');
}

console.log(toNumber('150'));
console.log(toNumber(340));
// console.log(toNumber(true));
