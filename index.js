'use strict';

var randomNatural = require('random-natural');

module.exports = function (twentyFour) {
  return twentyFour ? randomNatural(0, 23) : randomNatural(1, 12);
};
