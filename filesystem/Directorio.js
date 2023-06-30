class Directorio {
  constructor() {
    this.elementos = [];
  }

  agregar(elemento) {
    this.elementos.push(elemento);
  }

  tamanio() {
    return this.elementos.reduce((acc, elem) => elem.tamanio() + acc, 0);
  }

  altura() {
    const altura = this.elementos
      .sort((elem, otroElem) => otroElem.altura() - elem.altura())[0]
      .altura();
    return altura + 1;
  }
}

module.exports = Directorio;
