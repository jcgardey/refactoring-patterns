const Empleado = require('./Empleado');

class Temporario extends Empleado {
  constructor(cantidadHoras, cantidadHijos, esCasado) {
    super();
    this.cantidadHoras = cantidadHoras;
    this.cantidadHijos = cantidadHijos;
    this.esCasado = esCasado;
  }

  sueldo() {
    return (
      20000 +
      this.cantidadHoras * 300 +
      ((this.esCasado ? 5000 : 0) + 2000 * this.cantidadHijos) -
      (20000 + this.cantidadHoras * 300) * 0.05
    );
  }
}

module.exports = Temporario;
