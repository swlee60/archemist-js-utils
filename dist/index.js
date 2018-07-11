"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function moveToAt(array, index, predicate) {
    var movingItems = array.filter(predicate);
    if (movingItems.length === 0)
        return array;
    var filteredArray = array.filter(function (item) { return !predicate(item); });
    return filteredArray.slice(0, index).concat(movingItems, filteredArray.slice(index + movingItems.length));
}
exports.moveToAt = moveToAt;
