/**
 * 写一个能遍历对象和数组的forEach函数
 * @param {*} obj 
 * @param {*} fn 
 */
function forEach(obj, fn) {
    var key
    if (obj instanceof Array) {
        //准确判断是不是数组
        obj.forEach(function (item, index) {
            fn(item, index)
        })
    } else {
        //不是数组就是对象
        for (key in obj)[
            fn(key, obj[key])
        ]
    }
}

var arr = [1, 2, 3]
forEach(arr, function (item, index) {
    console.log(index, item)
})

var obj = { x: 100, y: 200 }
forEach(obj, function (key, value) {
    console.log(key, value)
})