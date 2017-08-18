/**
 * 获取父元素和子元素
 */
var div1 = document.getElementById('div1')
var parent = div1.parentElement

var child = div1.childNodes
// 删除节点
div1.removeChild(child[0])