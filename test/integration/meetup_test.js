const expect = require('chai').expect
const Meetup = require('../../src/meetup.js')
const http = require('http')
var request = require('supertest');

describe('Meetup', () => {
    it('should return all events from an input url', (done) => {
        const expectedResult = '200'
        const meetup = new Meetup();
        function log(i){
          console.log('inside', i)
        }

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

        var actual = ''

        console.log('start');
        actual = meetup.getStatusCode();
        setTimeout(function() {
          console.log('test1');
          expect(actual).to.equal(expectedResult)
          done()},500);
          console.log('test2');

            // request(app).get('/twitter').expect(200, done);

    })
})
