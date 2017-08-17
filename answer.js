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
    })(i)
}