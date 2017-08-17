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