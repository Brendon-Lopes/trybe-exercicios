const { expect } = require('chai');
const { identifySign } = require('../index');

describe('The function identifySign', () => {
  describe('returns the sign of a number correctly', () => {
    it('returns "negative" for a negative number', () => {
      expect(identifySign(-1)).to.be.equal('negative');
    });
    it('returns "positive" for a positive number', () => {
      expect(identifySign(1)).to.be.equal('positive');
    });
    it('returns "neutral" for 0', () => {
      expect(identifySign(0)).to.be.equal('neutral')
    });
  });

  describe('receives an argument different from a number', () => {
    it('throw an error', () => {
      expect(() => identifySign('a')).to.throw('Invalid input, insert a number');
    });
  });
});
