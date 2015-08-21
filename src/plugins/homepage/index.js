const register = function (server, options, next) {
  server.route({
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply.view('index', {name: 'ivoszz', title: 'ivoszz\'s App'});
    }
  });

  next();
};

register.attributes = {
  name: 'homePage',
  version: '0.1.0'
};

export default register;
