var arr = [1, 4, 2, 3, 5]
var arr2 = arr.sort(function (a, b) {
    //从小到大排序
    return a - b

    //从大到小排序
    //return b - a
})
console.log(arr2)