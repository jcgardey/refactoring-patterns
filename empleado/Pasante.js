const Empleado = require('./Empleado');

class Pasante extends Empleado {
  constructor(cantidadExamenesRendidos) {
    super();
    this.cantidadExamenesRendidos = cantidadExamenesRendidos;
  }

  sueldo() {
    return 20000 + 2000 * this.cantidadExamenesRendidos - 20000 * 0.05;
  }
}

module.exports = Pasante;
