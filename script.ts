interface Produto {
  nome: string
  preco: number
}

// Com o Partial<Tipo>, podemos indicar que todas as propriedades da interface passada em Tipo, são opcionais.
function exibirProduto(produto: Partial<Produto>) {
  if (produto.nome) {
    console.log(produto.nome)
  }
}

const prod1 = {
  nome: 'Notebook',
  preco: 3000,
  memoria: '256GB'
}

const prod2 = {
  nome: 'Monitor',
  preco: 1400,
  tipoTela: 'IPS'
}

exibirProduto(prod1)
exibirProduto(prod2)

// Podemos definir que um objeto poderá conter propriedades/métodos além dos que foram definidos inicialmente.
interface Post {
  titulo: string
  visualizacoes: number
  tags: string[]
  [chave: string]: unknown
}

const artigo: Post = {
  titulo: 'Como aprender TypeScript',
  visualizacoes: 3475,
  tags: ['TypeScript', 'Front-end', 'TS'],
  autor: 'Matheus'
}

console.log(artigo.titulo)
console.log(artigo.tags)

if (typeof artigo.autor === 'string') {
  console.log(artigo.autor.toUpperCase())
}

// Podemos definir que um objeto poderá conter propriedades / métodos além dos que foram definidos inicialmente.
interface ObjetoLiteral {
  [chave: string]: unknown
}

// O Record define a interface de um Objeto que possui <chave, tipo>. Pode ser usado para definir a interface de um Objeto Literal genérico.
type ObjetoLiteral2 = Record<string, unknown>

const mostrarTitulo = (obj: ObjetoLiteral2) => {
  if ('titulo' in obj) {
    console.log(obj.titulo)
  }
}

mostrarTitulo({})
mostrarTitulo({ titulo: 'Hello World' })
mostrarTitulo({ nome: 'John Doe' })
