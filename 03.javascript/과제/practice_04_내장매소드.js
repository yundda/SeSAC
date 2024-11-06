let fruits1 = ['사과','딸기','파인애플','수박','참외','오렌지','자두','망고']
let fruits2 = ['수박','사과','참외','오렌지','파인애플','망고']

let same = fruits1.filter(function(fruit){
    return fruits2.includes(fruit)
})
console.log(same)

let diff = fruits1.filter(function(fruit){
    return !fruits2.includes(fruit)
})
// 화살표함수
// let diff = fruits1.filter((fruit)=> !fruits2.includes(fruit))
console.log(diff)




console.log('-----혼자 해본 방식(for of문과 if문 사용-----')
let same1 = []
for(let fruit of fruits1){
    if(fruits2.includes(fruit)){
    same1.push(fruit)
}
}
console.log(same1)

let diff1 = []
for(let fruit of fruits1){
    if(!fruits2.includes(fruit)){
        diff1.push(fruit)
    }
}
console.log(diff1)

console.log('------평일 주말 출력--------')
let today = new Date()
let day=today.getDay
// if문 사용
if(day===0 || day===6){
    console.log('주말')
} else{
    console.log('평일')
}
// switch문 사용
switch(day){
    case 0:
    case 6:
        console.log('주말')
    break
    default:
        console.log('평일')
}
// 삼항 연산자 사용
day===0 || day===6 ? console.log('주말') : console.log('평일')

console.log('----랜덤 숫자 뽑기-----')
// 0 <= x < 1
// 0 <= x < 11
console.log(Math.round(Math.random()*10))
console.log(Math.floor(Math.random()*11))


