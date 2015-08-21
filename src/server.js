var Hapi = require('hapi');

var server = new Hapi.Server();
server.connection({port: 5200});

server.register({
  register: require('./plugins/homePage')
}, function (err) {
  if (err) {
    throw err;
  }

  server.start(function () {
    console.log(`Server running at ${server.info.uri}`);
  });
});
