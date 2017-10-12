console.log('Calling EOD');
const proxyquire = require('proxyquire');

//With the help of proxyquire the eod disarms the bomb
const eod = proxyquire.noCallThru()('./eod.js', {
  './bomb.js': 'DISARMED'
});
