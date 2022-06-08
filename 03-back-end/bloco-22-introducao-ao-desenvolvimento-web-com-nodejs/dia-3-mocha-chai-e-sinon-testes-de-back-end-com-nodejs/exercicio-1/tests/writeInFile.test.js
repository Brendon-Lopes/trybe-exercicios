const { expect } = require('chai');
const { writeInFile } = require('../index');
const fs = require('fs').promises;
const { stub } = require('sinon');

describe('The function writeInFile', () => {
  describe('works correctly', () => {
    before(() => {
      stub(fs, 'writeFile').returns('ok');
    });

    after(() => {
      fs.writeFile.restore();
    });

    it('returns "ok"', async () => {
      expect(await writeInFile('test', 'text to write')).to.be.equal('ok');
    });
  });
});
