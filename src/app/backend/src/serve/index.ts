// Server
// src\app\backend\src\serve\index.ts

const http = require('http');
const Koa = require('koa');
const cors = require('@koa/cors');
const Logger = require('koa-logger');
const WS = require('ws');

const app = new Koa();
const server = http.createServer(app.callback());

const wss = new WS.Server({ server });
const { appWebsockets: wsServer } = require('./wsServer');

app.use(Logger());
wsServer(wss, WS);

const PORT = process.env.PORT || 7070
console.log('[HOST]: ', process.env.HOST);
console.log('[PORT]: ', process.env.POST);
console.log('[HOST + PORT]: ', process.env);
server.listen(PORT, () => console.log("Server started"));
// https://www.youtube.com/watch?v=MZER_YiwA2w
