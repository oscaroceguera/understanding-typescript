"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var router = express_1.Router();
function requireAuth(req, res, next) {
    if (req.session && req.session.loggedIn) {
        next();
        return;
    }
    res.status(403);
    res.send("Not permitted");
}
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.prototype.getLogin = function (req, res) {
        res.send("form");
    };
    LoginController.prototype.postLogin = function (req, res) {
        var _a = req.body, email = _a.email, password = _a.password;
        if (email && password && email === "hi@hi.com" && password === "password") {
            // mark this person as logged in
            req.session = { loggedIn: true };
            // redirect them to the root route
            res.redirect("/");
        }
        else {
            res.send("Invalid email or password");
        }
    };
    __decorate([
        get("/login")
    ], LoginController.prototype, "getLogin", null);
    __decorate([
        postMessage("/login"),
        validateBody("email", "password"),
        use(requireAuth)
    ], LoginController.prototype, "postLogin", null);
    LoginController = __decorate([
        controller("/auth")
    ], LoginController);
    return LoginController;
}());
