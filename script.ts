function somar(a: number, b: number, c?: number): number {
  return a + b + (c ? c : 0)
}

console.log(somar(0.2, 0.8))

const subtrair = (a: number, b: number) => a + b

console.log(subtrair(0.2, 0.8))

type Callback = (event: MouseEvent) => void


function pintarTela(cor: string): void {
  document.body.style.backgroundColor = cor
}

console.log(pintarTela('tomato'))

const btn = document.querySelector('button')

btn?.click()


function isString(value: any) {
  if (typeof value === 'string') {
    return true
  }
}

console.log(isString('oi'));
console.log(isString(12));


function abortar(msg: string): never {
  throw new Error(msg)
}

// abortar('Um erro ocorreu!')
// console.log('Esse código não executa')

interface Quadrado {
  lado: 4;
  perimetro(lado: number): number;
}

function calcular(forma: Quadrado) {
  forma.perimetro(4)
}

// Overloads

function normalizar(arg: string[]): string[];
function normalizar(arg: string): string;
function normalizar(arg: string | string[]) {
  if (typeof arg === 'string') {
    return arg.trim().toLowerCase()
  }

  return arg.map((item) => item.trim().toLowerCase())
}

console.log(normalizar('    HEllO woRLd  '))
console.log(normalizar(['   BAnaNA', '  AbAcAxI         ']))

function $(selector: 'a'): HTMLAnchorElement | null;
function $(selector: 'video'): HTMLVideoElement | null;
function $(selector: string): Element | null {
  return document.querySelector(selector)
}

$('a')?.href
$('video')?.volume
