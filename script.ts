// A palavra chave type cria um alias para um tipo customizado
type NumberOrString = string | number;

let total: NumberOrString = 20;

total = '10';

type Produto = {
  nome: string;
  preco: number;
  webcam: boolean;
};

function preencherDados(dados: Produto) {
  document.body.innerHTML += `
  <div>
    <h2>${dados.nome}</h2>
    <p>R$ ${dados.preco}</p>
    <p>Inclui Webcam: ${dados.webcam ? 'sim' : 'não'}</p>
  </div>
  `;
}

const notebook: Produto = { nome: 'Notebook', preco: 3000, webcam: true };

preencherDados(notebook);

preencherDados({ nome: 'Computador', preco: 3000, webcam: false });

type Stacks = 'back-end' | 'front-end' | 'fullstack';

function imprimirStack(stack: Stacks) {
  console.log(stack);
}

imprimirStack('back-end');
imprimirStack('front-end');
imprimirStack('fullstack');
