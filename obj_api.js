var obj = {
    x: 100,
    y: 200,
    z: 300
}
var key
for (key in obj) {
    // 注意这里的 hasOwnProperty,再讲原型链时候讲过了
    if (obj.hasOwnProperty(key)) {
        console.log(key, obj[key])
    }
}