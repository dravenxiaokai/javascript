function formateDate(dt) {
    if (!dt) {
        dt = new Date()
    }
    var year = dt.getFullYear()
    var month = dt.getMonth() + 1
    var date = dt.getDate()
    if (month < 10) {
        // 强制类型转换 
        month = '0' + month
    }
    if (date < 10) {
        // 强制类型转换
        date = '0' + date
    }
    // 强制类型转换
    return year + '-' + month + '-' + date
}
var dt = new Date()
var formateDate = formateDate(dt)
console.log(formateDate)