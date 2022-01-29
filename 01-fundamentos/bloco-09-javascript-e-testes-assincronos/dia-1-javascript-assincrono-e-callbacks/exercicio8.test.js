// Verifique se a importação do arquivo correto está sendo feita.
const { getPokemonDetails } = require("./exercicio8.js");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    const expectedError = new Error('Não temos esse pokémon para você :(');

    const callback = (error, message) => {
      expect(error).toEqual(expectedError);
      done();
    }

    getPokemonDetails(({ name }) => name === 'Pikachu', callback);
  });

  it("retorna um pokemon que existe no banco de dados", (done) => {
    const expectedResult = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';

    const callback = (error, message) => {
      expect(message).toBe(expectedResult);
      done();
    }

    getPokemonDetails(({ name }) => name === 'Charmander', callback);
  });
});