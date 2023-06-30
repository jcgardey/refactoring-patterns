const Empleado = require('./Empleado');

class Planta extends Empleado {
  constructor(antiguedad, cantidadHijos, esCasado) {
    super();
    this.cantidadHijos = cantidadHijos;
    this.esCasado = esCasado;
    this.antiguedad = antiguedad;
  }

  sueldo() {
    return (
      50000 +
      ((this.esCasado ? 5000 : 0) +
        2000 * this.cantidadHijos +
        2000 * this.antiguedad) -
      50000 * 0.05
    );
  }
}

module.exports = Planta;
