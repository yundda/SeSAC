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