/**
 * 作用域链
 */
/*
var a = 100
function fn() {
    var b = 200

    //  当前作用域没有定义的变量，即‘自由变量’
    console.log(a)

    console.log(b)
}
fn()
*/

var a = 100
function F1() {
    var b = 200
    function F2(){
        var c = 300
        console.log(a)  //  a 是自由变量
        console.log(b)  //  b 自由变量
        console.log(c)
    }
    F2()
}
F1()