const service = require('./service');
jest.mock('./service');

describe('Testa as funções', () => {
  it('A função numberGen é chamada', () => {
    numberGen = jest.fn();
    numberGen();
    expect(numberGen).toHaveBeenCalled();
  });
  it('A função numberGen retorna um número aleatório', () => {
    numberGen = jest.fn().mockReturnValue(8);
    expect(numberGen()).toBe(8);
  });
  it('Verifica quantas vezes a função foi chamada', () => {
    numberGen = jest.fn();
    numberGen();
    numberGen();
    numberGen();
    expect(numberGen).toHaveBeenCalledTimes(3);
  });
  it('Testa mudanças na implementação da função numberGen', () => {
    service.numberGen.mockImplementation((a, b) => a / b);
    expect(service.numberGen(4, 2)).toBe(2);
    expect(service.numberGen).toHaveBeenCalled();
    expect(service.numberGen).toHaveBeenCalledTimes(1);
    expect(service.numberGen).toHaveBeenCalledWith(4, 2);
    service.numberGen.mockReset();
    expect(service.numberGen(4, 2)).toBeUndefined();
  })
});