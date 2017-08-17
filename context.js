fn('zhangsan')
function fn(name){
    console.log(this)   //在浏览器中是Window
    console.log(arguments)
}

/**
 * 执行上下文
 * 范围：一段<script>或者一个函数内
 * 全局：变量定义、函数声明     一段<script>
 * 函数：变量定义、函数声明、this、arguments    函数
 */