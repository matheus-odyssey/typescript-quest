const produto: string = 'Livro';
const preco: number = 200;

const carro: {
  marca: string;
  cv: number;
} = {
  marca: 'Audi',
  cv: 450,
};

const barato = 200 < 400 ? true : 'Caro demais, slk não compensa';

function somar(x: number, y: number) {
  return x + y;
}

somar(8, 10);

const nintendo = {
  nome: 'Nintendo',
  ano: '2000',
};

function transformarPreco(produto: { nome: string; ano: string }) {
  console.log(produto);
}

transformarPreco(nintendo);
