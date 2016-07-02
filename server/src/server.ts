/// <reference path="../typings/tsd.d.ts" />
var config:any = require('./config.json')
import * as Hapi from 'hapi'
import Routes from './routes'
import * as path from 'path'
import * as Sequelize from 'sequelize'
import mocks from './mocks'

const server:Hapi.Server = new Hapi.Server();
server.connection({port: 5000});

export default server.register([
  {
    register: require('hapi-sequelize'),
    options: [
      {
        name: 'market', // identifier
        models: ['./models/**/*.js'],  // paths/globs to model files
        sequelize: new Sequelize(config.dbConfig.url), // sequelize instance
        sync: true, // sync models - default false
        forceSync: true // force sync (drops tables) - default false
      }
    ]
  }
])
  .then(()=> {
    return server.register(require('inert'), (err) => {
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
  })
  .then(()=> {
    return server.register(require('vision'), (err) => {
      server.views({
        engines: {
          html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'views'
      });
    });
  })
  .then(()=> {
    new Routes(server);

    return Promise.resolve()
  })
  .then(()=> {
    return mocks(server.plugins['hapi-sequelize'].market)
  })
  .then(()=> {
    server.start((err)=> {
      if (err) throw err;

      console.log('Server running at:', server.info.uri);
    });
    
    return server
  })
  .catch((error)=> {
    console.log(error)

    return server
  });