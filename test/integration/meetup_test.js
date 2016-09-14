const expect = require('chai').expect
const Meetup = require('../../src/meetup.js')
const http = require('http')
var request = require('supertest');

describe('Meetup', () => {
    it('should return all events from an input url', (done) => {
        const expectedResult = '200'
        const meetup = new Meetup();

        // var options = {
        //     host: 'jsonplaceholder.typicode.com',
        //     path: '/posts/1'
        // };
        // callback = function(response) {
        //     var str = '';
        //     console.log('statusCode')
        //     response.on('data', function(chunk) {
        //         str += chunk;
        //     });
        //     response.on('end', function() {
        //         var obj = JSON.parse(str);
        //         console.log(obj.title);
        //     });
        //     done();
        // }

        // http.request(options, callback).end();

        const actual = meetup.getStatusCode();
        // request(app).get('/twitter').expect(200, done);
        expect(actual).to.equal(expectedResult)
    })
})
