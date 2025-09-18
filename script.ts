// Indica que o dado é uma chave de uma Interface/Tipo.
interface Produto {
  nome: string
  preco: number
  lote: string
}

let chave: keyof Produto
// let chave: 'nome' | 'preco' | 'lote'

chave = "lote"

// Já vimos o typeof do JavaScript, responsável por retornar o tipo do dado. No TypeScript
// podemos utilizar ele para indicar que um dado possui o mesmo tipo que outro.
function coordenadas(x: number, y: number) {
  return { x, y, }
}

let coord: typeof coordenadas

coord = (x: number, y: number) => {
  return { x, y, }
}


interface Elements {
  a: HTMLAnchorElement
  div: HTMLDivElement
  video: HTMLVideoElement
  audio: HTMLAudioElement
  body: HTMLBodyElement
}

function selectElement<K extends keyof Elements>(selector: K): Elements[K] | null {
  return document.querySelector(selector)
}

const element = selectElement('body')
