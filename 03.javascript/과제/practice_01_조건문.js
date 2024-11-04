// let age = Number(prompt('나이를 입력하세요'))
let age=20
if(age>=20){
    console.log('성인')
}else if(age>=17){
    console.log('고등학생')
}else if(age>=14){
    console.log('중학생')
}else if(age>=8){
    console.log('초등학생')
}else if(age>=0){
    console.log('유아')
}


let now = new Date().getHours()
now >= 12 ? console.log('오후') : console.log('오전')

if(now===0){
    console.log('자정')
} else if(now===12){
    console.log('정오')
} else if(now > 12 && now < 24){
    console.log('오후')
} else {
    console.log('오전')
}
