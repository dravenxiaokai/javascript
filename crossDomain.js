/**
 * 跨域
 * 什么是跨域
 * JSONP
 * 服务器设置http header
 * 浏览器有同源策略，不允许Ajax访问其他域接口
 * 跨域条件：协议、域名、端口，有一个不同就算跨域
 * 
 * 可以跨域的三个标签
 * <img src="xxx">
 * <link href="xxxx">
 * <script src="xxx">
 * 
 * 三个标签的场景
 * <img>用于打点统计，统计网站可能是其他域
 * <link><script>可以使用CDN，CDN也是其他域
 * <script>可以用于JSONP
 * 
 * 跨域注意事项
 * 所有的跨域请求都必须经过信息提供方允许
 * 如果未经允许即可获取，那是浏览器同源策略出现漏洞
 * 
 * JSONP实现原理
 * 加载http://baidu.com/classindex.html
 * 不一定服务器端真正有一个classindex.html文件
 * 服务器可以根据请求，动态生成一个文件，返回
 * 同理于<script src="http://baidu.com/api.js">
 * 
 * 例如你的网站要跨域访问百度的一个接口
 * 百度给你一个地址 http://baidu.com/api.js
 * 返回内容格式如callback({x:100,y:200})(可动态生成)
 */
/*
 <script>
     window.callback = function(data){
         //这是我们跨域得到信息
         console.log(data)
     }
 </script>
 <script src="http://baidu.com/api.js"></script>
 //以上将返回 callback({x:100,y:200})
 */

 /**
  * 服务器端设置 http header
     另外一个解决跨域的简介方法，需要服务器端来做
     但是作为交互方，我们必须知道这个方法
     是将来解决跨域的一个趋势

     // 注意：不同后端语言的写法可能不一样
     // 第二个参数填写允许跨域的域名称，不建议直接写*
     response.setHeader('Access-Control-Allow-Origin','http://a.com,http://b.com')
     response.setHeader('Access-Control-Allow-Headers','X-Requested-Width')
     response.setHeader('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS')

     // 接受跨域的cookie
     response.setHeader('Access-Control-Allow-Credentials','true')
  */