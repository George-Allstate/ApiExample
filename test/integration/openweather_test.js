// http://api.openweathermap.org/data/2.5/forecast?q=Belfast&mode=json&appid=ce10648fb57731c2be61c72bdb94795a

const expect = require('chai').expect
const OpenWeather = require('../../src/openweather.js')
const http = require('http')

describe('OpenWeather', () => {
    it('should return all events from an input url', (done) => {
        const expectedResult = 200
        const openWeather = new OpenWeather();

        openWeather.makeRequest();
        setTimeout(function() {
          expect(openWeather.getStatusCode()).to.equal(expectedResult)
          done()}
          ,1800);
    })
})
