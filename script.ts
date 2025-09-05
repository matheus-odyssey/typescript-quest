// Selecione o link utilizando o método getElementById.
// Substitua o href do link (HTMLAnchorElement) de http:// para https://.

const link = document.getElementById('origamid');

if (link instanceof HTMLAnchorElement) {
  link.href = link.href.replace('http://', 'https://');
  console.log(link.href);
}
