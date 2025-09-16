type Produto = {
  preco: number;
};

type Carro = {
  rodas: number;
  portas: number;
};

function handleProdutoCarro(dados: Carro & Produto) {
  dados.rodas;
  dados.portas;
  dados.preco;
}

type Pessoa = {
  nome: string,
  idade: number,
}

type PessoaComCPF = Pessoa & {
  cpf: string,
}

interface InterfacePessoa {
  nome: string
  idade: number
}

interface InterfacePessoa {
  cpf: string
}

interface Window {
  userId: number;
}

window.userId = 200;
console.log(window.userId);
