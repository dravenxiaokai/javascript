/**
 * 原型规则和示例
 * 所有的引用类型（数组、对象、函数），都具有对象特性，即可自由扩展属性（除了null以外）
 * 所有的引用类型（数组、对象、函数），都有一个__proto__属性（隐式原型），属性值是一个普通的对象
 * 所有的函数，都有一个prototype属性（显式原型），属性值也是一个普通的对象
 * 所有的引用类型（数组、对象、函数），__proto__属性值指向他的构造函数的“prototype”的属性值
 * 当试图得到一个对象的某个属性时，如果这个对象本身没有这个属性，那么会去它的__proto__（及它的构造函数的prototype）中寻找
 */

var obj = {}; obj.a = 100;
var arr = []; arr.a = 100;
function fn() { }
fn.a = 100;

console.log(obj.__proto__)
console.log(arr.__proto__)
console.log(fn.__proto__)

console.log(fn.prototype)
console.log(obj.__proto__ === Object.prototype)

//  构造函数
function Foo(name, age) {
    this.name = name
}
Foo.prototype.alertName = function () {
    console.log(this.name)
}
//创建示例
var f = new Foo('zhangsan')
f.printName = function () {
    console.log(this.name)
}
// 测试
f.printName()
f.alertName()
f.toString()    //要去f.__prto__.__proto__中查找

var item
for (item in f) {
    // 高级浏览器已经在for in 中屏蔽了来自原型的属性
    // 但是这里建议还是加上这个判断，保证程序的健壮性
    if (f.hasOwnProperty(item)) {
        console.log(item)
    }
}

/**
 * instanceof
 * f instanceof Foo 的判断逻辑是：
 * f的__proto__一层一层往上，能否对应到Foo.prototype
 * 再试着判断f instanceof Object
 */

 //如何准确判断一个变量是数组类型
 var arr = []
 console.log(arr instanceof Array)   //true
 console.log(typeof arr) //object,typeof 是无法判断是否是数组的

