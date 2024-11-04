console.log('"',typeof(1),'"isn\'t ',typeof("문자")," data type.")
console.log(`"${typeof(1)}" isn't "${typeof("문자")}" data type`)
console.log(typeof(123)+' isn\'t '+ typeof("문자")+' data type')

console.log('----연습----')
// “number” isn’t “string” data type.
// typeof 를 array 이나 null 에 사용하면, “object” 결과를 얻을 수 있습니다.
console.log(`"${typeof 1}" isn't "${typeof"문자"}" data type.`)
// let fruit=['apple','banana']
console.log('typeof 를 array 이나 null 에 사용하면, "'+ typeof null + '" 결과를 얻을 수 있습니다.')


console.log('------실습-------')

function multifly(n1,n2){
    return n1*n2
}
console.log(multifly(3,7))

const square = function(num){
    console.log(num**2)
}
square(4)



//혼자 해보기
console.log('---------------------')

function aa(n1){
    console.log(n1**2)
}
aa(3)

const bb = function(n1){
    console.log(n1**2)
}
bb(4)

const cc=(n1) => {
    console.log(n1**2)

}
cc(5)


function abc(n1,n2){
    console.log(n1*n2)
}
abc(2,3)

const bcd= function(n1,n2){
    console.log(n1*n2)
}
bcd(3,3)

const de=(n1,n2) => {
    console.log(n1*n2)

}
de(5,4)