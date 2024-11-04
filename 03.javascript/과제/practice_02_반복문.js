/*
for(i = 0; i <= 10000 ; i++){
    if(i%13===0 && i%2===1){
    console.log(i)
    }
}

// let num=Number(prompt('숫자를 입력하세요!'))
let num=30
for(index = 0 ; index <= num ; index++){
    if(index%13===0 && index%2===1){
        console.log(index)
    }
}
*/
for(n=2; n<=9 ; n++){
    console.log(`-------${n}단-------`)
    for(i=1; i<=9 ; i++){
        console.log(`${n} x ${i} = `+ n*i)
        }
    }

let sum=0
for(j = 0; j <= 100; j++){
    if(j%2===0 || j%5===0){
        sum+=j
    }
}
console.log(sum)