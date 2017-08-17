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

