"use strict";

require("@babel/polyfill");

var server = require("./server");

var express = require("express");

var restApi = require("./restApi");

var socketApi = require("./socketApi");

var cors = require("cors");

var app = express();
app.use(cors());

var _server$createServer = server.createServer(app),
    httpServer = _server$createServer.httpServer;

restApi(app);
socketApi({
  httpServer: httpServer
});
//# sourceMappingURL=index.js.map