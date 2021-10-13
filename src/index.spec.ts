import teste from ".";

describe('Teste', () => {
  test('should be return true', () => {
    const returnedValue = teste.test();

    expect(returnedValue).toBeTruthy();
  })
})