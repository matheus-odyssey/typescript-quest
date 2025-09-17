"use strict";
console.log(document.constructor);
// public -> padrão, pode ser acessável de qualquer lugar
// readonly -> apenas leitura, "impede" que eu faça modificações
// private -> impede que eu acesse a propriedade fora da classe pai
// protected -> impede que eu acesse a propriedade fora da classe pai, mas, é possível acessar de dentro de subclasses
// static (JS) ->
class Produto {
    tipo = 'produto';
    nome;
    preco;
    cor;
    constructor(nome, preco) {
        this.nome = nome;
        this.preco = preco;
    }
    static getDate() {
        return new Date();
    }
}
const ps5 = new Produto('PlayStation 5');
console.log(Produto.getDate());
console.log(ps5.tipo = 'animal');
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = Math.PI;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach((forma) => {
    if (forma instanceof Quadrado) {
        console.log(forma.getArea());
    }
    if (forma instanceof Circulo) {
        console.log(forma.getPerimetro());
    }
});
