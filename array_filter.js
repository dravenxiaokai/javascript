var arr = [1, 2, 3, 4]
var arr2 = arr.filter(function (item, index) {
    // 通过某一个条件过滤数组
    if (item >= 2) {
        return true
    }
})
console.log(arr2)