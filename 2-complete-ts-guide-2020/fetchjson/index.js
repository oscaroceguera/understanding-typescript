"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __importDefault(require("axios"));
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(function (resp) {
    var todo = resp.data;
    var id = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logTodo(id, title, finished);
});
var logTodo = function (id, title, completed) {
    console.log("\n    The todo with ID: " + id + "\n    Has a title of: " + title + "\n    Is it finished? " + completed + "\n  ");
};
