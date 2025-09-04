// Defina a interface da API: https://api.origamid.dev/json/notebook.json e mostre os dados na tela.

interface Empresa {
  nome: string;
  fundacao: number;
  pais: string;
}

interface Produto {
  nome: string;
  preco: 2000;
  descricao: string;
  garantia: string;
  seguroAcidente: boolean;
  empresaFabricante: Empresa;
  empresaMontadora: Empresa;
}

function showProduct(data: Produto) {
  document.body.innerHTML = `
    <div>
      <h2>${data.nome}</h2>
    </div>
  `;
}

async function fetchProduct() {
  const response = await fetch('https://api.origamid.dev/json/notebook.json');
  const data = await response.json();

  showProduct(data);
}

fetchProduct();
