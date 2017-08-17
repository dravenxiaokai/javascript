/*说一下对变量提升的理解
变量定义
函数声明（注意和函数表达式的区别）*/

//创建10个<a>标签 点击的时候弹出来对应的序号
//正确写法
var i
for (i = 0; i < 10; i++) {
    (function (i) {
        var a = document.createElement('a')
        a.innerHTML = i + '<br>'
        a.addEventListener('click', function (e) {
            e.preventDefault()
            alert(i)
        })
        document.body.appendChild(a)
    })(i)
}

/**
 * 如果理解作用域
 * 自由变量
 * 作用域链，即自由变量的查找
 * 闭包的两个场景
 */
//  闭包实际应用中主要用于封装变量，收敛权限
function isFirstLoad() {
    var _list = []
    return function (id) {
        if (_list.indexOf(id) >= 0) {
            return false
        } else {
            _list.push(id)
            return true
        }
    }
}
var firstLoad = isFirstLoad()
firstLoad(10)   //  true
firstLoad(10)   //  false
firstLoad(20)   // true
firstLoad(20)   //  false