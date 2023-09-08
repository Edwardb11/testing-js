const Person = require('./06-person');

describe('Person', () => {
  let person;
  //   create a new person before each test
  beforeEach(() => {
    person = new Person('pepe', 65, 1.7);
  });

  test('return down', () => {
    person.weight = 50;
    expect(person.calcIMC()).toBe('down');
  });

  test('return normal', () => {
    person.weight = 65;
    expect(person.calcIMC()).toBe('normal');
  });
});
