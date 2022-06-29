const sinon = require('sinon');
const { expect } = require('chai');
const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  };

  before(async () => {
    const execute = [{ insertId: 1 }];

    sinon.stub(connection, 'execute').resolves(execute);
  });

  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', async () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Busca por um filme por ID', () => {
  const exampleMovie = [[{
    id: 1,
    title: 'Example Movie',
    directed_by: 'Jane Dow',
    release_year: 1999,
  }]];

  const exampleReturnedMovie = {
    id: 1,
    title: 'Example Movie',
    directed_by: 'Jane Dow',
    release_year: 1999,
  };

  const MOVIE_ID = 1;

  before(async () => {
    sinon.stub(connection, 'execute').resolves(exampleMovie);
  });

  after(() => {
    connection.execute.restore();
  });

  describe('quando o ID existe', () => {

    it('retorna um objeto', async () => {
      const [response] = await MoviesModel.getById(MOVIE_ID);

      expect(response).to.be.a('object');
    });

    it('o objeto contém as informações corretas do filme', async () => {
      const [response] = await MoviesModel.getById(MOVIE_ID);

      expect(response).to.deep.equal(exampleReturnedMovie);
    });

  });
});
