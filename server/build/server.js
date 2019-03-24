"use strict";

var https = require("https");

var http = require("http");

var bodyParser = require("body-parser");

var path = require("path");

var fs = require("fs");

var chalk = require("chalk");

var express = require("express");

module.exports.createServer = function (app) {
  app.use(express.static(path.join(__dirname, "./")));
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json()); // const privateKey = fs.readFileSync(path.join(`${__dirname}/sslcert/key.pem`));
  // const certificate = fs.readFileSync(path.join(`${__dirname}/sslcert/server.crt`));
  // const credentials = { key: privateKey, cert: certificate };

  var DEFAULT_PORT_HTTP = 4444; // const DEFAULT_PORT_HTTPS = 4445;

  var httpServer = http.createServer(app);
  var portHttp = process.env.PORT_HTTP || DEFAULT_PORT_HTTP; // const portHttps = process.env.PORT_HTTPS || DEFAULT_PORT_HTTPS;
  // app.set('portHttps', portHttps);

  app.set("portHttp", portHttp); // const httpsServer = https.createServer(credentials, app);
  // httpsServer.listen(app.get('portHttps'), () =>
  //   console.log(chalk.magenta(`Dev api server listening on https://localhost:${portHttps}`)),
  // );

  httpServer.listen(app.get("portHttp"), function () {
    return console.log(chalk.green("Dev api server listening on http://localhost:".concat(portHttp)));
  });
  return {
    httpServer: httpServer // httpsServer,

  };
};
//# sourceMappingURL=server.js.map