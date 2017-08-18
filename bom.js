/**
 * BOM操作
 * Browser Object Model
 */

/**
 * 如何检测浏览器的类型
   拆解url的各部分
   navigator
   screen
   location
   history
 */

// navigator
// 检测浏览器类型
var ua = navigator.userAgent
var isChrome = ua.indexOf('Chrome')
console.log(isChrome)

// screen
console.log(screen.width)
console.log(screen.height)

// location
console.log(location.href)
console.log(location.protocol)  // 'http:' 'https:'
console.log(location.host)  // 域名
console.log(location.pathname)  // '/learn/199'
console.log(location.search)    // 参数
console.log(location.hash)  // '#'号

// history
history.back()
history.forward()