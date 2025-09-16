const video = document.querySelector('.player') as HTMLVideoElement

console.log(video.volume)

interface Produto {
  nome: string;
  preco: number;
}

async function fetchProduto() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  return response.json() as Promise<Produto>;
}

// Podemos usar o as em diferentes locais.
async function handleProduto1() {
  const produto = await fetchProduto();
  produto.nome;
}

async function handleProduto2() {
  const produto = (await fetchProduto()) as Produto;
  produto.nome;
}

async function handleProduto3() {
  const produto = await fetchProduto();
  (produto as Produto).nome;
}

// Non-null operator, só existe no TS

const link = document.querySelector('a')!

console.log(link.href)

document.querySelector('a')!.href = 'https://'

const v1 = document.querySelector('.player') as HTMLVideoElement
const v2 = <HTMLVideoElement>document.querySelector('.player')
const v3 = document.querySelector<HTMLVideoElement>('.player')
