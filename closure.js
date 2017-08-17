/**
 * 闭包
 * 1. 函数作为返回值
 * 2. 函数作为参数来传递
 */

function F1() {
    var a = 100
    // 返回一个函数 （函数作为返回值）
    return function () {
        console.log(a) //  自由变量，父作用域找
    }
}

// f1 得到一个函数
var f1 = F1()
var a = 200
f1()    //  100

console.log('---------------------')

function F3() {
    var a = 100
    return function () {
        console.log(a)
    }
}
var f3 = F3()

function F4(fn) {
    var a = 200
    fn()
}
F4(f3)