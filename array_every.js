var arr = [1, 2, 3]
var result = arr.every(function (item, index) {
    //  用来判断所有的数组元素，都满足一个条件
    if (item < 4) {
        return true
    }
})
console.log(result)