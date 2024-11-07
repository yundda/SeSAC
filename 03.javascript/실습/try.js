
// for, for of, forEach 연습
let arr3=[1,5,4,5,2]
console.log('////////')
console.log('-----for문-----')
for(i = 0; i < arr3.length; i++){
    console.log(arr3[i])
}
console.log('-----for of문-----')

for( i of arr3){
    console.log(i)
}
console.log('-----forEach문-----')

arr3.forEach(function(i){
    console.log(i)
})
console.log('-----forEach문 > 화살표-----')

arr3.forEach((i)=>console.log(i))

console.log('///////////')


//왜 안 돼!!
// let n4 = 10
// while(n4 >= 1){
//     if(n4%2 === 0 ) continue;
//     console.log(n4)
//     n4 --
// }

let n4 = 10
while(n4 >= 1){
    if(n4%2 === 0 ){
    n4--;
    continue;}
    console.log(n4)
    n4--
}
console.log('for문 사용')
for( n =10; n >= 1; n-- ){
	if(n%2 === 0) continue;
	console.log(n)
    }

// 1~100까지 배열 for문 사용해서 만들기
let arr=[]
for( let i = 1; i <= 100; i++){
    arr.push(i)
}
console.log(arr)
// for 문 사용해서 합 구하기
let sum1 = 0
for ( i = 0; i < arr.length; i++ ){
    sum1+=arr[i]
}
console.log(sum1)

// for of 사용
let sum2 = 0
for ( let el of arr){
    sum2+=el
}
console.log(sum2)

// forEach사용
let sum3 = 0
arr.forEach(function(el){
    sum3+=el
})
console.log(sum3)

//화살표 사용
let sum4 = 0
arr.forEach((el) => {
    sum4 += el
})
console.log(sum4)

//내장 메소드

let fruits1 = ["사과", "딸기", "파인애플", "수박", "참외", "오렌지", "자두", "망고"]
let fruits2 = ["수박", "사과", "참외", "오렌지", "파인애플", "망고"]

let same = fruits1.filter(function(fruit){
    return fruits2.includes(fruit)
})
console.log(same)

let same1 = fruits1.filter((fruit)=>fruits2.includes(fruit))
console.log(same1)


let diff = fruits1.filter(function(fruit){
    return !fruits2.includes(fruit)
})
console.log(diff)

let diff1 = fruits1.filter((fruit) => !fruits2.includes(fruit))
console.log(diff1)


let two = fruits1.filter(function(fruit){
    return fruit.length===2
})
console.log(two)

let two1 = fruits1.filter((fruit) => fruit.length===2)
console.log(two1)

//객체와 반복문
const areaNum = {
	Seoul: "02",
	Incheon: "032",
	Daejeon: "042",
	Busan: "051",
	Ulsan: "052",
	Daegu: "053",
	Gwangju: "062",
	Jeju: "064",
};

console.log('---(k)---') // 객체 내 모든 key 반환
for(let k in areaNum){
    console.log(k)}

console.log('---"k"----') // k 반환 * 객체의 key 수만큼
for(let k in areaNum){
console.log("k")}

console.log('-----areaNum[k]-----') // 객체 내 모든 value 반환
for(let k in areaNum){
console.log(areaNum[k])}

console.log('----areaNum["k"]------') // undefined * 8번 > 객체 내 k라는 key 찾아서 해당 value 반환
for(let k in areaNum){
console.log(areaNum["k"])}

console.log('-----areaNum["Busan"]------') // 051 * 8번 > 객체 내 Busan의 value 반환
for(let k in areaNum){
console.log(areaNum["Busan"])
}