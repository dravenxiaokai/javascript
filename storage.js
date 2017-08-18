/**
 * 请描述一下 cookie,sessionStorage,localStorage 的区别
 * 容量
 * 是否会携带到Ajax中
 * API易用性
 * 
 * cookie
 * 本身用于客户端和服务器端通信
 * 但是它有本地存储的功能，于是就被“借用”
 * 使用document.cookie = 。。。 获取和修改
 * 
 * cookie用于存储的缺点
 * 存储量太小,只有4KB
 * 所有http请求都带着，会影响获取资源的效率
 * API简单，需要封装才能用 document.cookie = ...
 * 
 * localStorage 和 sessionStorage
 * HTML5 专门为存储而设计，最大容量 5M
 * API简答易用
 * localStorage.setItem(key,value);localStorage.getItem(key)
 * 
 * IOS safari 隐藏模式下
 * localStorage.getItem 会报错
 * 建议统一使用 try-catch封装
 */