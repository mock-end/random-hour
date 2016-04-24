var expect = require('chai').expect;

describe('random-hour: ', function () {

  var randomHour = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(randomHour(true)).to.be.within(0, 23);
      expect(randomHour()).to.be.within(1, 12);
    }
  });
});
