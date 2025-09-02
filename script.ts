function normalizarTexto(txt: string) {
  return txt.trim().toLowerCase();
}

const textoBruto = normalizarTexto(
  '        Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, COMO também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. se popularizou na dÉcaDA de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais RECENTEMENTE quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.       ',
);

console.log(textoBruto);
