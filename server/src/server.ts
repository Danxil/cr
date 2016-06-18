/// <reference path="../typings/tsd.d.ts" />
import * as Hapi from 'hapi';
import Router from './router';

const server = new Hapi.Server();
server.connection({port: 5000});

new Router(server);

server.register(require('vision'), (err) => {
    server.views({
        engines: {
            html: require('handlebars')
        },
        relativeTo: __dirname,
        path: 'views'
    });
})

server.start((err)=> {
    if (err) throw err;

    console.log('Server running at:', server.info.uri);
});