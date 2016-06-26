/// <reference path="../typings/tsd.d.ts" />
import * as Hapi from 'hapi'
import Routes from './routes'
import * as path from 'path'

const server = new Hapi.Server();
server.connection({port: 5000});

new Routes(server);

server.register(require('vision'), (err) => {
  server.views({
    engines: {
      html: require('handlebars')
    },
    relativeTo: __dirname,
    path: 'views'
  });
});

server.register(require('inert'), (err) => {
  if (err) throw err;

  server.route({
    method: 'GET',
    path: '/public/{param*}',
    handler: {
      directory: {
        path: path.join(__dirname, 'public')
      }
    }
  });
});


server.start((err)=> {
  if (err) throw err;

  console.log('Server running at:', server.info.uri);
});