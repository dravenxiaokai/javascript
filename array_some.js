var arr = [1, 2, 3]
var result = arr.some(function (item, index) {
    //  用来判断所有的数组元素，只要一个满足条件即可
    if (item < 2) {
        return true
    }
})
console.log(result)