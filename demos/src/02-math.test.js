const {
  sum, divide, multiply, substract, power,
} = require('./02-math');

describe('Test for math', () => {
  describe('tests for sum', () => {
    test('adds 1 + 3 should be 4', () => {
      const rta = sum(1, 3);
      expect(rta).toBe(4);
    });
  });
  describe('tests for multiply', () => {
    test('should be 4', () => {
      const rta = multiply(1, 4);
      expect(rta).toBe(4);
    });
  });
  describe('tests for divide', () => {
    test('should divide', () => {
      const rta = divide(6, 3);
      expect(rta).toBe(2);
      const rta2 = divide(5, 2);
      expect(rta2).toBe(2.5);
    });
    test('should divide for zero', () => {
      const rta = divide(6, 0);
      expect(rta).toBeNull();
      const rta2 = divide(5, 0);
      expect(rta2).toBeNull();
    });
  });
  describe('tests for substract', () => {
    test('should substract', () => {
      const rta = substract(6, 3);
      expect(rta).toBe(3);
      const rta2 = substract(5, 2);
      expect(rta2).toBe(3);
    });
  });
  describe('tests for power', () => {
    test('should power', () => {
      const rta = power(2, 3);
      expect(rta).toBe(8);
      const rta2 = power(5, 2);
      expect(rta2).toBe(25);
    });
  });
});
