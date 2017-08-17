var arr = [1, 2, 3, 4]
var arr2 = arr.map(function (item, index) {
    // 将元素重新组装，并返回
    return '<b>' + item + '</b>'
})
console.log(arr2)