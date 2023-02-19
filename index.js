"use strict";
exports.__esModule = true;
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var http_1 = require("http");
var connect_timeout_1 = require("connect-timeout");
var app = (0, express_1["default"])();
// Enable all CORS requests
app.use((0, cors_1["default"])());
app.use((0, connect_timeout_1["default"])('60s'));
// parse application/x-www-form-urlencoded
app.use(body_parser_1["default"].urlencoded({ extended: false }));
// parse application/json
app.use(body_parser_1["default"].json());
app.get('/', function (req, res) {
    res.send('Hello World');
});
var server = http_1["default"].createServer(app);
server.listen(3000, function () {
    console.log('Server is listening on port 3000');
});
