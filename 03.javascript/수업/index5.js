/* for문
 for(변수 선언과 초기화;조건식(어디까지 증감할건지);증감식{
    반복 실행 코드
}
 */

// 증감식 : i++, i=i+1, i+=1

for(let i=0;i<10;i++){
    console.log('안녕',i)
}

for(let i=0;i<10;i=i+2){
    console.log(`안녕${i}`)
}

// 1 ~ 5까지 출력하는 방법!
for(let i = 1; i <= 5; i++){
    console.log(i)
}
for(let i = 1; i < 6; i++){
    console.log(i)
}
for(let i = 0; i<5 ; i++){
    console.log(i+1)
}
// 5 ~ 1까지 출력하는 방법!
for(let i = 5; i>=1 ; i--){
    console.log(i)
}

let fruits = ['apple','banana','orange','mango']
for(let i = 0; i < 4; i++){
    console.log(fruits[i])
}

let fruits1 = ['apple','banana','orange','mango']
for(let i = 0; i < fruits1.length; i++){
    console.log(fruits1[i])
}

// 1 ~ n 까지 더하기
let n =11
//!!!!누적시킬 때 숫자에 영향을 주지 않기 위해서 임의로 선언 후 0 넣기!!!!!
let sum =0;
// 반복문 사용해서 덧셈 만들기
/*
sum=0
sum = sum + 1 > 1
sum = sum + 2 > 3
sum = sum + 3 > 6
*/

for(let i=1; i <= n ; i++){
    sum=sum+i
}
console.log(sum)

let arr = [99, 98, 85, 77, 100, 50]
let sum1=0

for(i = 0; i < arr.length ; i++){
//    sum1+=arr[i]
   sum1=sum1+arr[i]
}

console.log(sum1)

// 1이상 20이하의 수 중에서 짝수만 더한 값 출력

let sum2=0
for( i = 0 ; i <= 20 ; i+=2){
    
    sum2=sum2+i // sum2+=i
}
console.log(sum2)
//!!!! += i : i씩 증가 !!!!



// if문 사용 방법( 위 방법이 더 좋지요)
let sum3=0
for(i = 1; i<=20; i++){
    if(i%2===0){
        sum3+=i
    }
}
console.log(sum3)

//홀수의 합 구하기
let sum5=0
for(i = 0; i < 10; i++ ){
    // if(i%2 === 1) sum5 += i // if가 한 줄일 때는 {} 생략해도 가능
    if(i%2 === 0) continue;
    sum5 += i
}
console.log(sum5)

for(let i=0; i<5; i++){
    console.log('------')
    console.log(i)
    for(let j=0; j<5 ; j++){
        console.log('j:',j)
    }
}

// 구구단
for(let i=2 ; i <10 ; i++){
    console.log(i+'단')
    for(let j=1; j<10 ; j++){
        console.log(i+' X '+j+' = '+i*j)
    }
}

/* while문 */
let n1 = 1
while(n1 <= 5){
    console.log(n1)
    n1++
}

let n2 = 9
while(n2 >= 5){
    console.log(n2)
    n2--
}

console.log('-------')

//while문 이용해서 10부터 1까지 홀수만 출력
//
let n3 = 10
while(n3 >= 1){
    if(n3%2===1) console.log(n3)
    
    n3--
}


//혼자 해본 거
// let n3 = 10
// while(n3 >= 1){
//     console.log(2*n3-1)
//     n3--
// }

let a=0
while(true){
    console.log(a)
    a++
    if(a>10)
        break
}

let a2=0
while(confirm('계속 진행하시겠습니까?')){
    //확인 > true, 취소 > false 반환
    alert(`${a2}번째 alert창`)
    a2++

}