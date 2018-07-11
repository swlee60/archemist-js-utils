System.register("index", [], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function moveToAt(array, index, predicate) {
        var movingItems = array.filter(predicate);
        if (movingItems.length === 0)
            return array;
        var filteredArray = array.filter(function (item) { return !predicate(item); });
        return filteredArray.slice(0, index).concat(movingItems, filteredArray.slice(index + movingItems.length));
    }
    exports_1("moveToAt", moveToAt);
    return {
        setters: [],
        execute: function () {
        }
    };
});
