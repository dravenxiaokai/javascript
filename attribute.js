var pList = document.querySelectorAll('p')
var p = pList[0]
p.getAttribute('data-name')
p.setAttribute('data-name', 'email')
p.getAttribute('style')
p.setAttribute('style', 'font-size:30px;')


/**
 * DOM节点的Attribute和property有何区别
 * property只是一个JS对象的属性的修改
 * Attribute是对html标签属性的修改
 */