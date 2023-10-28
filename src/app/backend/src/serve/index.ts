// Server
// src\app\backend\src\serve\index.ts

let postId = 0;
const http = require('http'), Koa = require('koa'), json = require('koa-json'), cors = require('@koa/cors');
const Logger = require('koa-logger');

const { koaBody } = require('koa-body');
const { v4 } = require('uuid');
const WS = require('ws');
const app = new Koa();
const server = http.createServer(app.callback);
const wss = new WS.Server({ server });
const { appWebsockets: wsServer } = require('./wsServer');
// app.use(async (ctx: any) => {
// 	ctx.body = 'Hello World';
// });



console.log('[wsServer]: ', wsServer);
wsServer(wss);

server.listen(7070, () => console.log("Server started"));

