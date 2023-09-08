// Podemos encerrar varios test() dentro de este describe()
/* Esto nos sirve para cosas como mejorar la lectura y el
encapsulamiento */
describe('conjuto', () => {
  beforeAll(() => {
    // se ejecuta antes de todas las pruebas.
    console.log('subida de bd');
  });

  afterAll( () => {
    // se ejecuta despues de todas las pruebas.
    console.log('bajada de bd');
  });

  beforeEach(() => {
    // se ejecuta antes de cada prueba.
    console.log('subida antes de cada test');
  });

  afterEach(() => {
    // se ejecuta despues de cada prueba.
    console.log('bajada  despues de cada test');
  });
  test('case 1', () => {
    // console.log("case 1")

    expect(1 + 1).toBe(2);
  });

  test('case 2', () => {
    // console.log("case 2")

    expect(2 + 2).toBe(4);
  });

  // Inlcuso podemos tener conjuntos de test unos dentro de otros
  describe('conjunto dentro de conjunto', () => {
    test('case 3', () => {
      // console.log("case 3")

      expect(3 + 3).toBe(6);
    });

    test('case 4', () => {
      // console.log("case 4")
      expect(4 + 4).toBe(8);
    });
  });
});
