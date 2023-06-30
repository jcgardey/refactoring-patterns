const ToDoItem = require('./ToDoItem');

test('ToDo Item', () => {
  const item = new ToDoItem('Item de ejemplo');
  expect(() => {
    item.pausarReanudar();
  }).toThrow(
    new Error('No se puede pausar/reanudar un item que no esta en progreso')
  );

  expect(() => {
    item.finalizar();
  }).toThrow(new Error('no se puede finalizar'));

  expect(item.inicio).toBeUndefined();
  item.iniciar();
  expect(item.inicio).not.toBeUndefined();

  item.agregarComentario('comentario nuevo');
  expect(item.comentarios.length).toBe(1);

  expect(item.fin).toBeUndefined();
  item.finalizar();
  expect(item.fin).not.toBeUndefined();

  expect(() => {
    item.agregarComentario('otro comentario');
  }).toThrow(new Error('no se pueden agregar mas comentarios'));
});
