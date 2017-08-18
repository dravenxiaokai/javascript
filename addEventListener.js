/**
 * 通用事件绑定
 */
var btn = document.getElementById('btn1')
btn.addEventListener('click', function (e) {
    console.log('clicked')
})

function bindEvent(elem, type, fn) {
    elem.addEventListener(type, fn)
}
// 不适用代理
var a = document.getElementById('link1')
bindEvent(a, 'click', function (e) {
    e.preventDefault(); // 阻止默认行为
    alert('clicked')
})

/**
 * 关于IE低版本的兼容性
 * IE低版本使用attachEvent绑定事件，和W3C标准不一样
 * IE低版本使用量已经非常少，很多网站都早已不支持
 * IE低版本的兼容性：了解即可，无需深究
 */

/**
 * 事件冒泡
 */
var p1 = document.getElementById('p1')
var body = document.body
bindEvent(p1, 'click', function (e) {
    e.stopPropagation();
    alert('激活')
})
bindEvent(body, 'click', function (e) {
    alert('取消')
})

/**
 * 代理
 * 代码简介
 * 减少浏览器内存占用
 */
var div1 = document.getElementById('div1')
div1.addEventListener('click', function (e) {
    var target = e.target
    if (target.nodeName === 'A') {
        alert(target.innerHTML)
    }
})

/**
 * 完善通用绑定事件的函数
 */
function bindEvent(elem, type, selector, fn) {
    if (fn == null) {
        fn = selector
        selector = null
    }
    elem.addEventListener(type, function (e) {
        var target
        if (selector) {
            target = e.target
            if (target.matches(selector)) {
                fn.call(target, e)
            }
        } else {
            fn(e)
        }
    })
}
// 使用代理
var div1 = document.getElementById('div1')
bindEvent(div1, 'click', 'a', function (e) {
    console.log(this.innerHTML)
})
// 不使用代理
var a = document.getElementById('a1')
bindEvent(div1, 'click', function (e) {
    console.log(a.innerHTML)
})