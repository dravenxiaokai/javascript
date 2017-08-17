/**
 * 作用域
 */

// 无块级作用域
if (true) {
    var name = 'zhansgan'
}
console.log(name)

//  函数和全局作用域
var a = 100
function fn() {
    var a = 200
    console.log('fn', a)
}
console.log('global', a)
fn()