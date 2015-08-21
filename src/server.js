var Hapi = require('hapi');
var Good = require('good');

var server = new Hapi.Server();
server.connection({port: 5200});

server.register([{
  register: Good,
  options: {
    reporters: [{
      reporter: require('good-console'),
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, {
  register: require('vision')
}, {
  register: require('./plugins/homePage')
}], function (err) {
  if (err) {
    throw err;
  }

  server.views({
    engines: {
      js: require('hapi-react-views')
    },
    relativeTo: __dirname,
    path: 'templates'
  });
  console.log(__dirname);
  server.start(function () {
    server.log(['info'], `Server running at ${server.info.uri}`);
  });
});
