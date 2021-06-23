var Message = /** @class */ (function () {
    function Message(message) {
        this.message = message;
    }
    Message.prototype.getMessage = function () {
        return this.message + " from publication";
    };
    return Message;
}());
var User = /** @class */ (function () {
    function User(element) {
        this.element = element;
    }
    User.prototype.onMessage = function (message) {
        return (this.element.innerHTML += "<li>you have a new message - " + message.getMessage() + "</li>");
    };
    return User;
}());
var MailingList = /** @class */ (function () {
    function MailingList() {
        this.observers = [];
    }
    MailingList.prototype.notify = function (message) {
        this.observers.forEach(function (observer) {
            observer.onMessage(message);
        });
    };
    MailingList.prototype.subscribe = function (observer) {
        this.observers.push(observer);
    };
    MailingList.prototype.unsubscribe = function (observer) {
        this.observers = this.observers.filter(function (subscriber) { return subscriber !== observer; });
    };
    MailingList.prototype.sendMessage = function (message) {
        this.notify(message);
    };
    return MailingList;
}());
var messageInput = document.querySelector(".message-input");
var user1 = document.querySelector(".user1-messages");
var user2 = document.querySelector(".user2-messages");
var user3 = document.querySelector(".user3-messages");
var u1 = new User(user1);
var u2 = new User(user2);
var u3 = new User(user3);
var subscribeU1 = document.querySelector(".user1-subscribe");
var subscribeU2 = document.querySelector(".user2-subscribe");
var subscribeU3 = document.querySelector(".user3-subscribe");
var unSubscribeU1 = document.querySelector(".user1-unsubscribe");
var unSubscribeU2 = document.querySelector(".user2-unsubscribe");
var unSubscribeU3 = document.querySelector(".user3-unsubscribe");
var sendBtn = document.querySelector(".send-btn");
var mailingList = new MailingList();
mailingList.subscribe(u1);
mailingList.subscribe(u2);
mailingList.subscribe(u3);
subscribeU1.addEventListener("click", function () {
    mailingList.subscribe(u1);
});
subscribeU2.addEventListener("click", function () {
    mailingList.subscribe(u2);
});
subscribeU3.addEventListener("click", function () {
    mailingList.subscribe(u3);
});
unSubscribeU1.addEventListener("click", function () {
    mailingList.unsubscribe(u1);
});
unSubscribeU2.addEventListener("click", function () {
    mailingList.unsubscribe(u2);
});
unSubscribeU3.addEventListener("click", function () {
    mailingList.unsubscribe(u3);
});
sendBtn.addEventListener("click", function () {
    mailingList.sendMessage(new Message(messageInput.value));
});
