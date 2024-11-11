// jQuery 요소 선택 방법
// $('CSS 선택자')
console.log($('#div1'))

//여러 요소에 한 번에 적용됨
$('button').css('color','red')

// let btn = document.querySelectorAll('button')
// for(let btns of btn){
//     btns.style.color='blue'
// }

function submitjs(){
    // <div id = 'div1'></div>
    document.getElementById('div1').innerText = '반갑습니다!!'
    document.getElementById('div1').setAttribute('style','border:2px solid red')
}
function submitjQ(){
    $('#div1').text('hello jQuery')
    $('#div1').css('border','2px solid red')
}