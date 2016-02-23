var assert = require('assert'),
    config = require('./../lib/config');

var units = {
        props1: 1,
        props2: 2
    },
    ip = '8908';

var Config = config(units, ip);


describe('Config', function () {
    it('has 3 props', function()
    {
      assert(Object.keys(Config).length === 3); //if we have 3 args expressions on the terminal
    });


    it('after construction, 2 props are populated')

    it('has correct key types')
});
