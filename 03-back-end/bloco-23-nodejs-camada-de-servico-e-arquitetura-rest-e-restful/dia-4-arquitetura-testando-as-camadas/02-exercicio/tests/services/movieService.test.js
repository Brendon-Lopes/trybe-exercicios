const sinon = require('sinon');
const { expect } = require('chai');

const MoviesModel = require('../../models/movieModel');
const MoviesService = require('../../services/movieService');

describe('Insere um novo filme no BD', () => {
  describe('quando o payload informado não é válido', async () => {
    const payloadMovie = {};

    it('retorna um boolean', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('boolean');
    });

    it('o boolean contém "false"', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.equal(false);
    });
  });

  describe('quando é inserido com sucesso', async () => {
    const payloadMovie = {
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      const ID_EXAMPLE = 1;

      sinon.stub(MoviesModel, 'create')
        .resolves({ id: ID_EXAMPLE });
    });

    after(() => {
      MoviesModel.create.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.be.a('object');
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesService.create(payloadMovie);

      expect(response).to.have.a.property('id');
    });

  });
});

describe('Busca um filme por ID', () => {
  describe('Quando o id informado não é valido', () => {
    const INVALID_ID = '';

    it('retorna um boolean', async () => {
      const response = await MoviesService.getById(INVALID_ID);

      expect(response).to.be.a('boolean');
    });

    it('o boolean é "false"', async () => {
      const response = await MoviesService.getById(INVALID_ID);

      expect(response).to.be.equal(false);
    });
  });

  describe('Quando o id informado é válido', async () => {
    const MOVIE_ID = 1;

    const exampleReturnedMovie = {
      id: 1,
      title: 'Example Movie',
      directedBy: 'Jane Dow',
      releaseYear: 1999,
    };

    before(() => {
      sinon.stub(MoviesModel, 'getById').resolves(exampleReturnedMovie);
    });

    after(() => {
      MoviesModel.getById.restore();
    });

    it('retorna um objeto', async () => {
      const response = await MoviesService.getById(MOVIE_ID);

      expect(response).to.be.a('object');
    });

    it('o objeto contém as informações do filme', async () => {
      const response = await MoviesService.getById(MOVIE_ID);

      expect(response).to.deep.equal(exampleReturnedMovie);
    });
  });
});
