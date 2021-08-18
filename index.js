const iChing = require('i-ching');
const weather = require('./lib/weather.js');
const astrology = require('./lib/astrology.js');
const ddate = require('./lib/ddate.js');

weather.then((x)=> {
  astrology.then((y) => {
    console.log(x, y, ddate());
  }).catch((e) => { throw e });
}).catch((e) => { throw e });


