const input = document.querySelector('input');

const total = localStorage.getItem('total');

if (input && total) {
  const totalMudou = () => {
    const value = input.value;

    localStorage.setItem('total', value);
  };

  const calcularGanho = (value: number) => {
    const p = document.querySelector('p');

    if (p) {
      p.innerText = `Ganho Total: R$ ${value + 100 - value * 0.2}`;
    }
  };

  input.value = total;

  calcularGanho(Number(input.value));

  input.addEventListener('keyup', totalMudou);
}
