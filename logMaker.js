'use strict';
//setup
const LogMaker = (prefix) => {

  return function (...args) {

    console.log.apply(null, [prefix].concat(...args));
  };
};

let _logger = null;

const myModule = {

  initialize: (prefix) => {
    _logger = LogMaker(prefix);
    return myModule;
  },

  log: function (thingToLog) {
    if (!_logger) {
      _logger = LogMaker(':');  
    } 
    _logger.call(null, thingToLog);
  }
};

module.exports = myModule;

//example usage
// console.log(myModule.initialize('with a prefix:').log('I logged the first thing')); //prints "​​​​​with a prefix: I logged the first thing​​​​​"
// console.log(myModule.log('hello')); //prints "​​​​​with a prefix: hello​​​​​"

//task: make initialization automatic, with a default prefix of ':', so that the following works
//without calling `.initialize()` first
console.log(myModule.log('I didn\'t initialize!')); //should print ": I didn't initialize!​​​​​"
