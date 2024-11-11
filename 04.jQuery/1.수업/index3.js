console.log(window)
console.log(document)

console.log($(window))
console.log($(document))

// click() : 클릭했을 때
// jQuery에서는 이벤트 이름으로 메서드가 존재
// 요소.click(function(){}), 요소.hover(function(){마우스가 올라갔을 때 코드}, function{}(마우스가 빠졌을 때 코드))
$('.p-msg').click(function(){
    $('.p-msg').css('color','red')
})

$('.num').click(function(){
    $('.num').css('color','blue')
    $(this).css('color','green') // 자기 자신을 가리킴
})

$('.num').on('click',function(){
    $(this).css('color','pink') // 자기 자신을 가리킴
})
let num = document.querySelectorAll('.num')

for( i=0; i<num.length; i++){
    num[i].addEventListener('click',function(){
        this.style.color ='purple'
    })
}

// 🤔
// for(let nums of num){
//     nums.addEventListener('click',function(){
//         this.style='color:purple'

//     })
// }

// hover() : 마우스를 올렸을 때, 마우스를 떼었을 때 정의
$('.div-hover').hover(
    function(){
        $(this).addClass('hover')
    },
    function(){
        $(this).removeClass('hover')
    }

)

// $(window).scroll(function(){

// })

// js-addEventListner 방식
// input.addEventListener("keydown",function(event){}

$('.input-key').keydown(function(e){
    if(e.code==="ArrowLeft"){
        console.log('왼쪽 방향키 눌렸습니다')
    } else if(e.code==="ArrowRight"){
        console.log('오른쪽 방향키 눌렸습니다')
    } else if(e.code==="ArrowDown"){
            console.log('아래쪽 방향키 눌렸습니다')
    } else if(e.code==="ArrowUp"){
        console.log('위 방향키 눌렸습니다')
    }  else {
        console.log('방향키가 아닌 키보드 누르는 중...')
    }
})

$('#todo-form').submit(function(e){
    // 기본동작 막기(새로고침 방지)
    e.preventDefault();
    // input 태그에 작성한 글자 가져오기
    let inputValue = $('input[name=todo]').val()
    // li 태그를 만듦과 동시에 for 아래의 ul태그에 붙여넣기
    $('.todos').append(`<li>${inputValue}</li>`)

    // input 초기화
    $('input[name=todo]').val('')
})
