exports.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply('Home Page');
    }
  });

  next();
};

exports.register.attributes = {
  name: 'homePage',
  version: '0.1.0'
};
