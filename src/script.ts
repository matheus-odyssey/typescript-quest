const msg = 'Hello World'

const btn = document.querySelector('button')

interface Produto {
  nome: string
  preco: number
}

// btn.innerHTML = 'My name is Matheus'

const txt = 'My Github profile is matheushnt'

console.log(txt)

const handleProduto = (dados: any) => {
  return dados.toLowerCase()
}

function handleClick(this: HTMLElement) {
  console.log(this)
}

document.documentElement.addEventListener('click', handleClick)
