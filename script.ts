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
