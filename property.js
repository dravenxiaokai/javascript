/**
 * property
 * JS对应的一个属性
 */
var pList = document.querySelectorAll('p')
var p = pList[0]
console.log(p.style.width)  // 获取样式
p.style.width = '100px' // 修改样式
console.log(p.className)    // 获取class
p.className = 'p1'

// 获取 nodeName 和 nodeType
console.log(p.nodeName)
console.log(p.nodeType)