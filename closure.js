/**
 * 闭包
 */

 function F1(){
     var a = 100
     // 返回一个函数 （函数作为返回值）
     return function(){
         console.log(a)
     }
 }

 // f1 得到一个函数
var f1 = F1()
var a = 200
f1()