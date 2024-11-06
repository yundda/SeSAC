// 문자열에서 사용하는 속성과 메소드
// length
// toUpperCase, toLowerCase, trim, indexOf, slice
// replace, replaceALL, repeat, split

let str1= 'Strawberry Moon'
let str2= '   Strawberry Moon  '

// 문자열 인덱싱
console.log(str1[0])
console.log(str1[0]+str1[11])
// Sonny 단어 만들기
console.log(str1[0]+str1[13]+str1[14]+str1[14]+str1[9])


// length 속성 확인
console.log(str1.length)
console.log(str2.length)

// method 사용해보기
// trim, toUpperCase, toLowercase
// 문자열.method()의 형태로 사용
console.log(str1)
console.log(str2)
console.log(str2.trim())
console.log(str2.trim().length) //trim은 함수니까 ()는 필수!

console.log(str1.toLowerCase())
console.log(str1.toUpperCase())

// indexOf, charAt, slice
let fruit = "applemango"
console.log(fruit.indexOf('e')) // 4
console.log(fruit.indexOf('a')) // 0
console.log(fruit.indexOf('apple')) // 0 = 'a'와 같은 값
console.log(fruit.indexOf('mango')) // 5 = 'm'과 같은 값
// 없는 문자를 찾으려고 하면 -1 반환
console.log(fruit.indexOf('x')) // -1

console.log(fruit.charAt(0)) // a
console.log(fruit.charAt(8)) // g
console.log(fruit.charAt(10)) // ''

console.log(fruit.slice(5)) // mango
console.log(fruit.slice(3,6)) // lem > 앞 숫자는 포함, 뒷 숫자는 포함 x
console.log(fruit.slice(-1)) // o
console.log(fruit.slice(-4)) // ango

// replace, replaceAll
let msg1 = "Wow~ It is so amazing"
console.log(msg1.replace("Wow","Hey~~"))
console.log(msg1.replaceAll("o","OO"))

let date = "2024.11.06"
// YYYY-MM-DD
date = date.replaceAll(".","-")
console.log(date)

//split

let hello = 'hello'
console.log(typeof hello)
console.log(hello.split())

hello2 = hello.split('') // 
console.log(hello2)

hello2 = hello.split('e')
console.log(hello2)
console.log(typeof hello2) // object => 배열

//['2024', '11', '06']
date = date.split('-')
console.log(date)

//---------------배열---------------
console.log('--------array method-------------')
let arr1 = [1,2,3,4,5]
let arr2 = ["quakka","rabbit","puppy","hamster"]

arr1[5]=6
console.log(arr1)

arr1 = [1,2,3,4,5]
arr1.push(6)
arr1.push(7)
arr1.push(8)
arr1.push(9)
console.log(arr1)
console.log(arr1.pop()) // 제거하는 값 반환
arr1.pop()
arr1.pop()
arr1.pop()
arr1.pop()
console.log(arr1)
arr2.unshift("cat")
console.log(arr2)
arr2.shift()
// console.log(arr2.shift()) // 제거하는 값 반환
console.log(arr2)

// 배열.includes(요소) : 배열에 요소가 있는지 없는지 확인 > true, false 반호나
console.log(arr2.includes("cat"))
console.log(arr2.includes("quaka"))

arr1=[1,2,3,4,5]
console.log(arr1.length)
console.log(arr1.indexOf(4)) // 3 > 4 요소가 가 몇 번 인덱스인지

//reverse()
arr1.reverse() // 기존 배열 자체가 변경됨. arr1=arr1.reverse() 를 하지 않아도 됨
console.log(arr1)

//join('') : split이 문자>배열 이었다면, join은 ()것으로 배열을 구분한 후 >문자로 병합
str1 = arr1.join() // 5,4,3,2,1 > join에 아무것도 안 쓰면 배열 안의 콤마까지 같이 문자열로 반환
console.log(str1) 
str1 = arr1.join('') // 54321 
console.log(str1)
str1 = arr1.join('-') // 5-4-3-2-1
console.log(str1)

// for of, forEach
let arr3 = [1,5,3,4,5]
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f']

// 기본 for문
for( let i=0; i < arr3.length; i++){
    console.log(arr3[i])
}

// for of 문 // 배열에서만 사용할 수 있음

for( let el of arr3){
    // el = arr3[i]
    console.log(el)
}

// forEach 문
console.log('-----forEach문-------')
//forEach(익명함수)
//배열이름.forEach(function(a,b,c){}) // b,c는 생략 가능 a : 요소, b : index,  c: 해당 배열을 배열 상태로 보여줌
arr3.forEach(function(num,i,arr){
    console.log("num",num)
    console.log("i",i)
    console.log("arr3",arr)
    console.log('-------')
})




arr3.forEach((n)=>{
    console.log(n)
})



// filter, map, find
// forEach와 마찬가지로;  배열명.filter(fucntion(요소에 할당할 매개변수명){수행코드})
// 매개변수로 들어가는 익명함수에 리턴값이 필수
arr2 = ["quakka","rabbit","puppy","hamster"]
// return 이후의 조건에 만족하는 요소를 찾아서
// 새로운 배열로 반환

console.log('-----filter------')
let six=arr2.filter(function(el){
    return el.length === 6
})
console.log(arr2)
console.log(six) // quakka, rabbit

console.log('-----find------')
let six2 = arr2.find(function(word){
    return word.length === 6
})
console.log(six2) // quakka > 만족하는 거 하나만 반환

console.log('------map------')
let arr4 = [1,2,3,4,5]

let multiArr = arr4.map(function(number){
    return number *3
})
//화살표 사용 시 return까지 생략 가능
multiArr = arr4.map((number)=>number *3)
console.log(multiArr)


// 오브젝트 반복
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
for(let area in areaNum){ // of가 아닌 in 사용!!
    console.log(area) // key를 문자열로 반환 중
    // 값에 접근? 대괄호 접근법으로만 사용 가능
    console.log(areaNum[area])
        //console.log(areaNum["area"])는 문자로 인식 후 area라는 키를 찾으려고 함 > "" 없이 작성할 것!
         //console.log(areaNum["Ulsan"]) ""는 진짜 key를 지정할 때!
}


