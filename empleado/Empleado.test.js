const Pasante = require('./Pasante');
const Planta = require('./Planta');
const Temporario = require('./Temporario');

test('Empleado Temporario', () => {
  const temporario = new Temporario(5, 2, true); // casado 21500 + 9000 - 1075 =
  expect(temporario.sueldo()).toBe(29425);
});

test('Empleado Pasante', () => {
  const pasante = new Pasante(4); // examenes rendidos
  expect(pasante.sueldo()).toBe(27000);
});

test('Empleado Planta', () => {
  const planta = new Planta(5, 2, false);
  expect(planta.sueldo()).toBe(61500);
});
