//for 문으로 1~100까지 배열 만들기
let arr = []
for (i=1; i<=100; i++){
    arr.push(i)
}

console.log(arr)

// for 문으로 합 구하기
let sum1 = 0
for( i= 0; i < arr.length; i++){
    sum1 += arr[i]
}
console.log(sum1)

// for of 문으로 합 구하기
let sum2 = 0

for( j of arr){
    sum2 += j
}
console.log(sum2)

// forEach 문으로 합 구하기
let sum3 = 0

arr.forEach(function(m){
    sum3 += m
})
console.log(sum3)

