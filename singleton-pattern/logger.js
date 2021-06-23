var Logger = /** @class */ (function () {
    function Logger() {
        this.logStore = [];
    }
    Logger.getInstance = function () {
        if (!Logger.instance) {
            Logger.instance = new Logger();
        }
        return Logger.instance;
    };
    Logger.prototype.log = function (item) {
        this.logStore.push(item);
    };
    Logger.prototype.getLog = function () {
        console.log(this.logStore);
    };
    return Logger;
}());
var useLogger = Logger.getInstance();
useLogger.log("Log 1");
var anotherLogger = Logger.getInstance();
anotherLogger.log("Log 2");
useLogger.getLog();
anotherLogger.getLog();
