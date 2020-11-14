"use strict";
exports.__esModule = true;
var express_1 = require("express");
var app = express_1["default"]();
app.get('/', function (req, res) {
    return res.json({ message: 'Ola Docker' });
});
app.listen(3000, function () { return console.log('Rodando container'); });
