// 1-1. 배열의 구조 분해 문법
const arr1 = ['tomato','kiwi','orange']
// 기존 방식
console.log(arr1[0])
const tomato = arr1[0]
console.log(tomato)
// 배열 구조 분해 할당
const [a,b,c] = arr1
console.log(a)

const arr2 = ['red','orange','pink','yellow']
// 빈 칸으로 냅두면 알아서 변수로 지정 안 됨
const [red, orange, , yellow] = arr2
console.log(red,orange,yellow)
// 변수의 수가 배열의 수보다 많으면 알아서 undefined 처리
// const[a1, b1] = arr2 // 맨 끝에 있는 요소는 빈칸 말고 그냥 생략 가능
const [v1,v2,v3,v4,v5] = arr2
console.log(v1,v2,v3,v4,v5)

// 변수 교환
let value1 = 'second'
let value2 = 'first'

let temp; // 값을 저장하기 위하 임시 변수
temp = value1 // temp = second
value1 = value2 // value1 = value2 = first
value2 = temp

console.log(value1,value2)

value1 = 'second';
value2 = 'first';
[value1, value2] = [value2, value1]
console.log(value1,value2)

// 1-2. 객체의 구조 분해 할당 문법
const obj = {
    title : '제목',
    content: '내용',
    num : 10
}

// 값에 접근할 때는 점, 대괄호 접근법 이용
console.log(obj.title)
console.log(obj['content'])

// console.log(title)
const {num,title,content} = obj
console.log(title)

// const {n1,t1,c1} = obj
// console.log(n1) // undefined

const {title : t1, content : c1} = obj
console.log(t1, c1)


// 2. spared와 rest ...
const arr3 = [1,2,3,4,5]
const arr4 = ['a','b','c']
console.log(arr3)

for(let el of arr3){
    console.log(el)
}

console.log(...arr3)
console.log(...arr4)

// arr3, arr4 합치기 >> 1차원 배열로
const arr5 = arr3.concat(arr4)
console.log(arr5)
const arr6 = [...arr3,...arr4]
console.log(arr6)

// 2-2. string
const str = 'alliehigh'
let strToArr = [...str]
console.log(strToArr)
// +) 메소드로 해보기
let strToArr2 = str.split('')
console.log(strToArr2)

// 2-3. object
let obj1 = {
    name: 'dda',
    height: 164,
    friend: null,
    married: false
}
let obj2 = {
    name: '다선',
    greeting:function(){
        console.log(`안녕하세요, 저는 ${this.name}이고요..
            키는 ${this.height}입니다..`)
    }
}
obj2.greeting()

let me = {...obj1,...obj2}
// me = {...obj2,...obj1}
// 같은 key를 가졌을 경우, 뒤에 선언 된 것이 적용 ; 첫번째 경우는, name이 '다선'으로 나오고 두 번째경우는 'dda'로 나옴 
me.greeting()
console.log(me)

// object에 추가하기
me = {
    ...obj1,
    ...obj2,
    gender:'Female'
}

console.log(me)

// ...rest
console.log('-----rest-----')
function test(a,b){
    console.log(a)
    console.log(b)
}
test(1, 2)
test('안녕')

function test2(...val){
    console.log(val) // rest로 받아준 결과는 배열임
    const [a,b,c,...rest] = val//[2,3,4,5,6,7,8]
    console.log(a)
    console.log(b)
    console.log(c)
    console.log(rest)
}
test2(2,3,4,5,6,7,8)

// quiz
// 매개변수가 몇 개가 들어오든 합해서 반환하는 함수

function addNumber(...val){
    console.log(val)
    // const [a,b,c,...rest] = val
    // console.log(rest)

    let sum = 0;
    val.forEach(function(number){
        sum+=number;
    })

    // let sum2 = 0;
    // for(i of val){
    //     sum2+=i;
    // }

    return sum;
}

let sumResult = addNumber(1,2,3,4,5)
console.log(sumResult)
