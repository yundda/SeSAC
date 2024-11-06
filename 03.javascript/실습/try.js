
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
