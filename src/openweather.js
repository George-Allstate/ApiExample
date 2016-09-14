var http = require('http');

function OpenWeather(){
  this.statusCode

}

OpenWeather.prototype.makeRequest = function (){
  var options = {
      host: 'api.openweathermap.org',
      path: '/data/2.5/forecast?q=Belfast&mode=json&appid=ce10648fb57731c2be61c72bdb94795a'
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

OpenWeather.prototype.getStatusCode = function (){
  return this.statusCode
}

module.exports = OpenWeather
