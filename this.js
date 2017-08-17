/**
 * this
 * this 要在执行时才能确定值，定义时无法确认
 */

var a = {
    name: 'A',
    fn: function () {
        console.log(this.name)
    }
}
a.fn()  //  this === a
a.fn.call({ name: 'B' })   //  this === {name:'B'}
var fnn = a.fn
fnn() //  this === window

/**
 * this
 * 作为构造函数执行
 * 作为对象属性执行
 * 作为普通函数执行
 * call apply bind
 */

 console.log('--------------------------------')

// call apply bin
function fn1(name, age) {
    console.log(name)
    console.log(this)  //  {x:100}
}
fn1.call({ x: 100 }, 'zhangsan', 20)

var fn2 = function (name, age) {
    console.log(name)
    console.log(this)
}.bind({ y: 200 })
fn2('zhangsan', 20)