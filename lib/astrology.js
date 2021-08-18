const fetch = require('node-fetch');
const cheerio = require('cheerio');


module.exports = new Promise((resolve, reject) => {
  fetch('https://astrology.tv/horoscope/daily/').then((res, err) => {
    if (err) return reject(err);
    return res.text();
  }).then((html, err)=>{
    if (err) return reject(err);
    const $ = cheerio.load(html);
    resolve({
      overview: $('.horoscope_overview').text(),
      signs: $('.horoscopes__sign-content').map((el) => el.text()),
    }).catch((e) => reject(e));
  });
});
