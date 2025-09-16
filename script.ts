const { body }: { body: HTMLElement } = document

interface Produto {
  nome: string
  preco?: number
}

//function handleData({ nome, preco }: { nome: string; preco: number })
function handleData({ nome, preco }: Produto) {
  nome.includes('book')
  preco?.toFixed(2)
}

handleData({
  nome: 'Notebook',
  preco: 234.67
})

function handleClick({
  currentTarget,
  pageX,
}: {
  currentTarget: EventTarget | null;
  pageX: number;
}) {
  if (currentTarget instanceof HTMLElement) {
    currentTarget.innerHTML = `<h1>Mouse Click em x:${pageX}</h1>`;
  }
}

document.documentElement.addEventListener('click', handleClick);

