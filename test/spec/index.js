var expect = require('chai').expect;

describe('random-hour: ', function () {

  var randomHour = require('../../');

  it('common', function () {

    var count = 100;

    while (count--) {
      expect(randomHour({ twentyFour: true })).to.be.within(0, 23);
      expect(randomHour()).to.be.within(1, 12);

      expect(randomHour({ min: 10 })).to.be.within(10, 12);
      expect(randomHour({ max: 10 })).to.be.within(1, 10);

      expect(randomHour({ min: 10, twentyFour: true })).to.be.within(10, 23);
      expect(randomHour({ max: 10, twentyFour: true })).to.be.within(0, 10);
    }
  });
});
