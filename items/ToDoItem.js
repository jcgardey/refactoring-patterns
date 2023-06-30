class ToDoItem {
  constructor(nombre) {
    this.nombre = nombre;
    this.comentarios = [];
    this.estado = 'PENDIENTE';
  }

  iniciar() {
    if (this.estado == 'PENDIENTE') {
      this.inicio = new Date();
      this.estado = 'EN_PROGRESO';
    }
  }

  pausarReanudar() {
    if (this.estado == 'PENDIENTE' || this.estado == 'FINALIZADO') {
      throw new Error(
        'No se puede pausar/reanudar un item que no esta en progreso'
      );
    }
    if (this.estado == 'EN_PROGRESO') {
      this.estado == 'PAUSADO';
    } else {
      this.estado == 'EN_PROGRESO';
    }
  }

  finalizar() {
    if (this.estado == 'EN_PROGRESO' || this.estado == 'FINALIZADO') {
      this.fin = new Date();
      this.estado = 'FINALIZADO';
    } else {
      throw new Error('no se puede finalizar');
    }
  }

  agregarComentario(unString) {
    if (this.estado != 'FINALIZADO') {
      this.comentarios.push(unString);
    } else {
      throw new Error('no se pueden agregar mas comentarios');
    }
  }
}

module.exports = ToDoItem;
