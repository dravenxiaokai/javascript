/**
 * JS Web API
 * 但是W3C标准没有规定任何js基础相关的东西
 * 不管什么变量类型、原型、作用域和异步
 * 只管定义用于浏览器中JS操作页面的API和全局变量
 */

// DOM 是哪种基本的数据结构  树
// DOM 操作的常用API有哪些
// DOM 节点的attr和property呦呵区别

/**
 * DOM可以理解为：
 * 浏览器把拿到的html代码，结构化一个浏览器能识别的并且js可操作的一个模型而已
 */

/**
 * 获取DOM节点
 */
var div1 = document.getElementById('div1')    // 元素
var divList = document.getElementsByTagName('div')    // 集合
console.log(divList.length)
console.log(divList[0])

var containerList  = document.getElementsByClassName('.container')  // 集合
var pList = document.querySelectorAll('p')  // 集合