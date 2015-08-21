exports.register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('index', {name: 'ivoszz', title: 'ivoszz\'s App'});
    }
  });

  next();
};

exports.register.attributes = {
  name: 'homePage',
  version: '0.1.0'
};
