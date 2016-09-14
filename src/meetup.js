"use strict"

var http = require('http');

function Meetup() {
    this.statusCode = 0
}

Meetup.prototype.getStatusCode = function() {

        var options = {
            // host: 'api.meetup.com',
            // path: '/find/groups?&sign=true&photo-host=public&country=United%20Kingdon&location=Belfast&page=20&key=716b7eb3b707c1b1b2734a14431c47'
            host: 'jsonplaceholder.typicode.com',
            path: '/posts/1'
        };

        callback = function(response) {
            var str = '';
            console.log('statusCode')
            response.on('data', function(chunk) {
                str += chunk;
            });
            response.on('end', function() {
                var obj = JSON.parse(str);
                console.log(obj.title);
            });

            console.log('test line');
            
        }

        console.log('1',http.request(options, callback).end())

        return '200'
}
        module.exports = Meetup
