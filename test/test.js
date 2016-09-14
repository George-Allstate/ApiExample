var http = require('http');
var options = {
  host: 'jsonplaceholder.typicode.com',
  path: '/posts/1'
};
callback = function(response) {
  var str = '';
  response.on('data', function (chunk) {  str += chunk; });
  response.on('end', function () {
      var obj = JSON.parse(str);
      console.log(obj.title);
  });
}
http.request(options, callback).end();
