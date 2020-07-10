"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var loginRouter_1 = require("./routes/loginRouter");
var app = express_1.default();
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(loginRouter_1.router);
app.listen(3000, function () {
    console.log('Listening on port 3000');
});
