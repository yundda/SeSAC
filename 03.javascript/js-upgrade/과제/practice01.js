const word1 = "abc";
const word2 = "xyz";

// spread 사용
const word3 = [...word1,...word2]
console.log(word3)

// split 사용
let word4 = (word1+word2).split('')
console.log(word4)

// 실습2
class Shape{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }

    getArea(width,height){
        return this.width*this.height
    }
}

let rec1 = new Shape(3,4)
console.log(rec1.getArea())

// 실습2-1
class Rectangle extends Shape{
    constructor(width,height){
        super(width,height)
    }
    getDiagonal(){
        return Math.sqrt(this.width**2 + this.height**2)
    }
}
let rec2 = new Rectangle(3,4)
console.log(rec2.getDiagonal())

// 실습2-2
class Triangle {
    constructor(base,height){
        this.base = base
        this.height = height
    }
    getArea(){
        return this.base*this.height*0.5
    }
}
let tri1 = new Triangle(4,4)
console.log(tri1.getArea())

// 실습2-3
class Circle extends Shape{
    constructor(radius,width,height){
        super(width,height)
        this.radius = radius
    }
    getArea(){
        return Math.PI*(this.radius**2)
    }
}
let cir1 = new Circle(2)
console.log(cir1.getArea())