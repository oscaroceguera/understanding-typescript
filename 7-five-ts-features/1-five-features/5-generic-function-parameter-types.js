var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function mapById(array) {
    return array.reduce(function (map, item) {
        var _a;
        return (__assign(__assign({}, map), (_a = {}, _a[item.id] = item, _a)));
    }, {});
}
var books = [{ id: 1, author: "A" }];
var recipies = [{ id: 1, cookingtime: 10 }];
console.log(mapById(books));
console.log(mapById(recipies));
