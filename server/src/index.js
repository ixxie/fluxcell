import DB from './db/';
import { createServer } from './apolloServer';
import express from 'express';

require('@babel/polyfill');
const server = require('./server');
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

const apolloServer = createServer(app);
