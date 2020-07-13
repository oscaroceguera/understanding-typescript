"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = require("body-parser");
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRoutes_1 = require("./AppRoutes");
require("./controllers/LoginController");
require("./controllers/RootControllers");
var app = express_1.default();
app.use(body_parser_1.urlencoded({ extended: true }));
app.use(cookie_session_1.default({ keys: ['laskdjf'] }));
app.use(AppRoutes_1.AppRouter.getInstance());
app.listen(5088, function () {
    console.log('Listening on port 5088');
});
