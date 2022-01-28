const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

it('Deve retornar a string em letras maiúsculas', (done) => {
  const expected = 'ISSO É UM TESTE';
  uppercase('isso é um teste', (str) => {
    try {
      expect(str).toBe(expected);
      done();
    } catch (error) {
      done(error);
    }
  });
});