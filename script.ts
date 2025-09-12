{
  // Guard, Safety e Narrowing

  function typeGuard(value: unknown) {
    if (typeof value === 'string') {
      return value.toLowerCase()
    }

    if (typeof value === 'number') {
      return value.toFixed(1)
    }
  }

  console.log(typeGuard(39))
  console.log(typeGuard('HeLLo WOrlD'))

  const obj = {
    nome: 'João',
    msg: 'hello world',
  }

  if ('msg' in obj) {
    console.log('Existe')
  }

  interface Produto {
    nome: string
    preco: number
  }

  function handleProduto(data: Produto) {
    console.log(data)

    if ('preco' in data) {
      document.body.innerHTML += `
    <p>Nome: ${data.nome}</p>
    <p>Preço: ${data.preco + 100}</p>
  `
    }
  }

  async function fetchProduto() {
    const res = await fetch('https://api.origamid.dev/json/notebook.json')
    const json = await res.json()

    handleProduto(json)
  }

  fetchProduto()
}

// unknown
function typeGuard(value: unknown) {
  if (typeof value === 'string') {
    return value.toLowerCase()
  }

  if (typeof value === 'number') {
    return value.toFixed(1)
  }

  if (value instanceof HTMLElement) {
    return value.innerText
  }
}

// any desativa a verificação de tipos enquanto unknown exige fazer um Type Guard antes de manipular os dados

console.log(typeGuard('Olá, Mundo'))
console.log(typeGuard(34.678))
console.log(typeGuard(document.body))
