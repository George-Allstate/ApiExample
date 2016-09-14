const expect = require('chai').expect
const Meetup = require('../../src/meetup.js')
const http = require('http')
var request = require('supertest');

describe('Meetup', () => {
    it('should return all events from an input url', (done) => {
        const expectedResult = 200
        const meetup = new Meetup();
        function log(i){
          console.log('inside', i)
        }

        var actual = ''

        console.log('start exercise');
        meetup.makeRequest();
        console.log('first: ', meetup)
        setTimeout(function() {
          console.log('second: ', meetup)
          expect(meetup.getStatusCode()).to.equal(expectedResult)
          console.log('actual: ', actual, 'expectedResult: ', expectedResult)
          done()}
          ,500);
        console.log('test: line 42');

            // request(app).get('/twitter').expect(200, done);

    })
})
