const register = function (server, options, next) {
  server.route([
    {
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        reply.view('index', {title: 'ivoszz\'s App'});
      }
    }, {
      method: 'GET',
      path: '/assets/{param*}',
      handler: {
        directory: {
          path: '.',
          index: false
        }
      }
    }
  ]);

  next();
};

register.attributes = {
  name: 'homePage',
  version: '0.1.0'
};

export default register;
