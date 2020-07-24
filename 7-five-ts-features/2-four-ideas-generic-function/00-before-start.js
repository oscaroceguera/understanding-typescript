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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var books = [
    { id: 1, author: "A" },
    { id: 1, author: "Z" },
    { id: 2, author: "A" },
    { id: 3, author: "C" },
];
var recipes = [
    { id: 1, cookingTime: 32, ingredients: ["salad", "pastel", "sal"] },
    { id: 2, cookingTime: 24, ingredients: ["salad", "pasta"] },
];
function mapByKey(array, key) {
    return array.reduce(function (map, item) {
        var _a;
        return (__assign(__assign({}, map), (_a = {}, _a[item[key]] = item, _a)));
    }, {});
}
console.log("<<< Map by key >>>");
// mapByKey(books, "wrongKey") // error. Not keyof T -> (not key of Book)
console.log(mapByKey(books, "id")); // {"1":{"id":1,"author":"A"},"2":{"id":2,"author":"A"},"3":{"id":3,"author":"C"}}
console.log(mapByKey(books, "author")); // { A: { id: 2, author: 'A' }, C: { id: 3, author: 'C' } }
function groupByKey(array, key) {
    return array.reduce(function (map, item) {
        var itemKey = item[key];
        if (map[itemKey]) {
            map[itemKey].push(item);
        }
        else {
            map[itemKey] = [item];
        }
        return map;
    }, {});
}
console.log("<<< Group by key >>>");
//groupByKey(books, "randomString") // error. Not keyof T -> (not key of Book)
console.log(groupByKey(books, "author")); // {"A":[{"id":1,"author":"A"},{"id":2,"author":"A"}],"C":[{"id":3,"author":"C"}]}
console.log(groupByKey(books, "id")); // {"A":[{"id":1,"author":"A"},{"id":2,"author":"A"}],"C":[{"id":3,"author":"C"}]}
// TODO Merge
console.log("<<< Merge >>>");
function merge(a, b) {
    return __assign(__assign({}, a), b);
}
var result = merge(books[0], recipes[0]); // {"id":1,"author":"A","cookingTime":10,"ingredients":["bread"]}
console.log("result", result);
console.log("author", result.author); // "A"
console.log("cookingTime", result.cookingTime);
function sortBy(array, key, order) {
    if (order === void 0) { order = "ascending"; }
    if (order === "ascending") {
        return __spreadArrays(array).sort(function (a, b) { return key(a) > key(b) ? 1 : -1; });
    }
    return __spreadArrays(array).sort(function (a, b) { return key(a) > key(b) ? -1 : 1; });
}
// Sort by author
var sortByAuthor = sortBy(books, function (item) { return item.author; }, "descending");
console.log("sortByAuthor", sortByAuthor);
// Sort by number of ingredients
var sortByNumberOfIngredients = sortBy(recipes, function (item) { return item.ingredients.length; });
console.log("sortByNumberOfIngredients", sortByNumberOfIngredients);
// Sort very nested objects
var arrayOfNestedObjects = [{ level1: { level2: { name: "A" } } }];
sortBy(arrayOfNestedObjects, function (item) { return item.level1.level2.name; });
