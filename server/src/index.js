import DB from './db/';

require('@babel/polyfill');
const server = require('./server');
const express = require('express');
const restApi = require('./restApi');
const socketApi = require('./socketApi');
const cors = require('cors');

const db = new DB();
db.init();

const app = express();
app.use(cors());
const { httpServer } = server.createServer(app);

restApi(app);
socketApi({ httpServer });
