import Hapi from 'hapi';
import Good from 'good';
import GoodConsole from 'good-console';
import Vision from 'vision';
import HapiReactViews from 'hapi-react-views';

import HomePage from './plugins/homePage';

const server = new Hapi.Server();
server.connection({port: 5200});

server.register([{
  register: Good,
  options: {
    reporters: [{
      reporter: GoodConsole,
      events: {
        response: '*',
        log: '*'
      }
    }]
  }
}, {
  register: Vision
}, {
  register: HomePage
}], function (err) {
  if (err) {
    throw err;
  }

  server.views({
    engines: {
      js: HapiReactViews
    },
    compileOptions: {
      useNodeJsx: false
    },
    relativeTo: __dirname,
    path: 'templates'
  });

  server.start(function () {
    server.log(['info'], `Server running at ${server.info.uri}`);
  });
});
