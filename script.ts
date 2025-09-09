// function retorno<variavel>(a: variavel): variavel {
//   return a
// }

// console.log(retorno(2.567).toFixed(2))
// console.log(retorno('Hello World').toLowerCase())
// console.log(retorno(true).valueOf())


const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const frutas = ['Banana', 'Pêra', 'Morango', 'Maçã', 'Uva', 'Abacaxi', 'Mamão', 'Melão', 'Kiwi', 'Limão']

function firstFive<T>(arr: T[]): T[] {
  return arr.slice(0, 5)
}

console.log(firstFive(numeros))
console.log(firstFive(frutas))

function notNull<T>(arg: T) {
  if (arg !== null) {
    return arg
  } else {
    return null
  }
}

console.log(notNull(200)?.toFixed(2))
console.log(notNull('Hello World')?.toLowerCase())


function tipoDado<T>(data: T) {
  return {
    data,
    type: typeof data,
  }
}

console.log(tipoDado(300).type)
console.log(tipoDado('Hello World').type)
console.log(tipoDado(true).type)
console.log(tipoDado(1e19).data)
