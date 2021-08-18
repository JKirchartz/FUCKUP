const weather = require('openweather-apis');
module.exports = new Promise((resolve, reject) => {
  weather.setCityId(2895992); // Ingolstadt, Bavaria
  weather.setUnits('imperial');
  weather.setAPPID(process.env.OPENWEATHERAPI)
  weather.getAllWeather(function(err, JSONObj){
    if (err) return reject(err);
    try {
      resolve(JSONObj);
    } catch(e) {
      reject(e);
    }
  });
});
