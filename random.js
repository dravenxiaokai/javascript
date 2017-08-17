/**
 * 获取随机数，要求是长度一致的字符串格式
 */
var random = Math.random()
var random = random + '0000000000' // 后面加上10个零
var random = random.slice(0, 10)
console.log(random)