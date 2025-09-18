declare global {
  interface Usuario {
    nome: string
    id: string
  }
}

interface Produto {
  nome: string
  preco: string
  cor: string
}

export const livro: Produto = {
  nome: 'PlayStation 5',
  preco: '4700',
  cor: 'branco'
}
