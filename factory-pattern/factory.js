var MobileToast = /** @class */ (function () {
    function MobileToast() {
        this.visible = false;
        this.position = "center";
        this.template = "\n  <div class=\"mobile-toast\">\n      <div class=\"mobile-toast--header\">\n        <h2>" + this.title + "</h2>\n        <span>" + this.duration + "</span>\n      </div>\n      <hr/>\n      <p class=\"mobile-toast--body\">\n        " + this.message + "\n      </p>\n  </div>\n";
    }
    MobileToast.prototype.hide = function () {
        this.visible = false;
    };
    MobileToast.prototype.render = function (title, body, duration, position) {
        (this.title = title), (this.body = body);
        this.visible = false;
        this.duration = duration;
        this.position = "center";
        return this.template;
    };
    return MobileToast;
}());
var DesktopToast = /** @class */ (function () {
    function DesktopToast() {
        this.visible = false;
        this.template = "\n      <div class=\"desktop-toast\">\n          <div class=\"desktop-toast--header\">\n            <h2>" + this.title + "</h2>\n            <span>" + this.duration + "</span>\n          </div>\n          <hr/>\n          <p class=\"mobile-toast--body\">\n            " + this.message + "\n          </p>\n      </div>\n  ";
    }
    DesktopToast.prototype.hide = function () {
        this.visible = false;
    };
    DesktopToast.prototype.render = function (title, body, duration, position) {
        (this.title = title), (this.body = body);
        this.visible = true;
        this.duration = duration;
        this.position = position;
        return this.template;
    };
    return DesktopToast;
}());
var ToastFactory = /** @class */ (function () {
    function ToastFactory() {
    }
    ToastFactory.prototype.createToast = function (type) {
        if (type === "mobile") {
            return new MobileToast();
        }
        else {
            return new DesktopToast();
        }
    };
    return ToastFactory;
}());
var App = /** @class */ (function () {
    function App() {
        this.factory = new ToastFactory();
    }
    App.prototype.render = function () {
        this.toast = this.factory.createToast(isMobile() ? "mobile" : "desktop");
        if (this.toast.visible) {
            this.toast.render("Toast Header", "Toast body");
        }
    };
    return App;
}());
