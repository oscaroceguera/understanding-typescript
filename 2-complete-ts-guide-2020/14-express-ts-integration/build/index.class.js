"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var loginRouter_1 = require("./routes/loginRouter");
var cookie_session_1 = __importDefault(require("cookie-session"));
var Server = /** @class */ (function () {
    function Server() {
        this.app = express_1.default();
        this.app.use(body_parser_1.urlencoded({ extended: true }));
        this.app.use(cookie_session_1.default({ keys: ["laskdjf"] }));
        this.app.use(loginRouter_1.router);
    }
    Server.prototype.start = function () {
        this.app.listen(5088, function () {
            console.log("Listening on port 5088");
        });
    };
    return Server;
}());
new Server().start();
