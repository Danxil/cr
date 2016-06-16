/// <reference path="../typings/index.d.ts" />
import * as Hapi from 'hapi';
import Router from './router';


const server = new Hapi.Server();
server.connection({ port: 3000 });

new Router(server);

server.start((err) => {
    if (err) {
        throw err;
    }

    console.log('Server running at:', server.info.uri);
});