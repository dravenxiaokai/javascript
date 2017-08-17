var a = 100
var b = a
a = 200
console.log(b) //100    值类型


var aa = { age: 20 }
var bb = aa
bb.age = 21
console.log(aa.age) //21    引用类型

console.log(typeof undefined)   //undefined
console.log(typeof 'abc')   //string
console.log(typeof 123) //number
console.log(typeof true)    //boolean

console.log(typeof [])  //object
console.log(typeof {})  //object
console.log(typeof null)    //object
console.log(typeof console.log) //function

console.log(100 == '100')   //true
console.log(0 == '')    //true  都强制类型转化为false
console.log(null == undefined)  //true

console.log(10 && 0)    //0
console.log('' || 'abc')    //abc
// console.log(!window.abc)    //true  测试时报错，window is notdefined

//判断一个变量会被当做true还是false
var num = 100
console.log(!!num)

var obj = {}
if(obj.a==null){
    //这里相当于obj.a===null || obj.a === undefined,简写形式
    // 这是jQuery源码中推荐的写法
}

/**
 * JS中哪些内置函数 —— 数据封装类对象
 * 
 * Object
 * Array
 * Boolean
 * Number
 * String
 * Function
 * Date
 * RegExp
 * Error
 */

//问题：如何理解JSON
//JSON 只不过是一个JS对象而已
//Math 也是js内置对象
console.log(JSON.stringify({ a: 10, b: 20 }))
console.log(JSON.parse('{"a":10,"b":20}'))

/**
 * 在if判断中转化为false的
 * 0
 * NaN
 * ''
 * ""
 * null
 * undefined
 * false
 */