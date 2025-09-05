class Produto {
  nome: string;
  preco: number;

  constructor(nome: string, preco: number) {
    this.nome = nome;
    this.preco = preco;
  }

  getPreco() {
    return `R$ ${this.preco}`;
  }
}

const sapatoNike = new Produto('Nike Air Force 1', 699);

console.log(sapatoNike.getPreco());

console.log(sapatoNike, sapatoNike.nome, sapatoNike.preco);

// instanceof verifica se um objeto é uma instância (foi construido ou herda) de uma função construtora (class)

console.log(sapatoNike instanceof Produto);
console.log(sapatoNike instanceof ArrayBuffer);

class Livro {
  autor: string;

  constructor(autor: string) {
    this.autor = autor;
  }
}

class Jogo {
  jogadores: number;

  constructor(jogadores: number) {
    this.jogadores = jogadores;
  }
}

function buscarProduto(busca: string) {
  if (busca === 'O Hobbit') {
    return new Livro('J. R. R. Tolkien');
  }

  if (busca === 'Dark Souls') {
    return new Jogo(1);
  }

  return null;
}

const produto = buscarProduto('O Hobbit');

if (produto instanceof Livro) {
  console.log(produto.autor);
}

if (produto instanceof Jogo) {
  console.log(produto.jogadores);
}
