//  动物
function Animal(){
    this.eat = function(){
        console.log('animal eat')
    }
}

//  狗
function Dog(){
    this.bark = function(){
        console.log('dog bark')
    }
}

Dog.prototype = new Animal()

//  哈士奇
var hashiqi = new Dog()

/**
 * 描述new 一个对象的过程
 * 创建一个新对象
 * this指向这个新对象
 * 执行代码，即对this赋值
 * 返回this
 */