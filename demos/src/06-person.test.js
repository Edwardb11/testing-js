const Person = require('./06-person');
// AAA

describe('Person', () => {
  let person;
  // Arrange / Given

  //   create a new person before each test
  beforeEach(() => {
    person = new Person('pepe', 65, 1.7);
  });

  test('return down', () => {
    // Arrange / Given

    person.weight = 50;
    // Act / When

    expect(person.calcIMC()).toBe('down');
    // Assert / Then
  });

  test('return normal', () => {
    person.weight = 65;
    expect(person.calcIMC()).toBe('normal');
  });
});
