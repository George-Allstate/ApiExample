"use strict"

var http = require('http');


function Meetup() {
    this.statusCode = undefined
}

Meetup.prototype.makeRequest = function() {

    var options = {
        host: 'api.meetup.com',
        path: '/find/groups?&sign=true&photo-host=public&country=United%20Kingdon&location=Belfast&page=20&key=716b7eb3b707c1b1b2734a14431c47'
    };

    http.request(
        options,
        (response) => {
            var str = '';
            response.on('data', function(chunk) {
                str += chunk;
            });
            response.on('end', function() {
                // var obj = JSON.parse(str);
            });
            this.statusCode= response.statusCode
        }).end()
}

Meetup.prototype.getStatusCode = function(){
  return this.statusCode;
}


module.exports = Meetup
