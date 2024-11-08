/*
동작의 종류: click, dbclick, scroll, change, submit, ...
- 방법 1) js에서 제어 ; addEventListner(동작의 종류, function(){})
- 방법 2) html에서 제어하는 방법 ; <태그 onchange="함수의 이름()" onclick="함수의 이름()"></태그>
- on[동작의 종류] 속성으로 이벤트 제어 가능
*/

const btn1 = document.querySelector('.btn--black')
const btn2 = document.querySelector('.btn--green')
const btn3 = document.querySelector('.btn--blue')
const btn4 = document.querySelector('.btn--red')
// const btn5 = document.querySelector('.btn--yellow')

// btn1.addEventListner("동작이름",function(){동작})
btn1.addEventListener("click",function(){
    console.log('버튼1이 클릭되었습니다!')
    alert('버튼1이 클릭되었습니다!')

})

btn1.addEventListener("mouseover",function(){
    // btn1.style.backgroundColor="aqua"
    // this는 자기 자신을 가리킴
    this.style.backgroundColor="aqua"

})

// ** btn2를 눌렀을 때, div를 자식으로 붙이기
const container = document.getElementById('container')
btn2.addEventListener('click',()=>{
    let div = document.createElement('div')
    div.innerText = 'hi'
    div.style.backgroundColor = 'pink'

    container.append(div)
})

// ** btn3
// 만들어진 div의 배경색 변경
// 함수 호출 시 괄호 필수적으로 생략해야함 > 괄호가 들어가면 즉시 호출 됨. 이벤트가 일어났을 때만 호출됐으면 좋겠기 때문에 
btn3.addEventListener('click', changeColor)

function changeColor(){
    const divs = document.querySelectorAll('#container div') // > (#container>div)도 가능
    // [div, div, div]
    for(let div of divs){
        div.style.backgroundColor = "skyblue"
    }
    divs[divs.length-1].style.backgroundColor = "yellow"
}

// ** btn4
// 배경색 노란색으로 변경, 글자색 검정색으로 변경
btn3.addEventListener("click", changeBtnColor)
btn4.addEventListener("click", changeBtnColor)
function changeBtnColor(){
    this.style.backgroundColor = "yellow"
    this.style.color = "#000"
}

// ** btn5 > html에서 이벤트 제어, 함수만 js에서 제어
function sayHi(){
    alert('안녕하세용 버튼5 입니다')
}

// ======================================
const btn = document.querySelector('button')
const input = document.querySelector('input')

/* 1. [클릭이벤트] */
btn.addEventListener('click',function(event){ //(event)에 아무거나 (ddd) 이런 거 넣어도 상관없음
   // 클릭 이벤트에 관한 정보 (event 객체)
    console.log(event)

    // 어떤 요소가 클릭되었는지 확인 가능
    console.log(event.target)

})
/* 2. [키보드이벤트] */
input.addEventListener("keydown",function(event){
    console.log(event)

    // 방향키 아래, 위, 왼쪽, 오른쪽
    // console.log(event.code)
    // console.log(event.key)
    // console.log(event.keyCode) > 거의 안 씀
    if(event.code==="ArrowLeft"){
        console.log('왼쪽 방향키 눌렸습니다')
    } else if(event.code==="ArrowRight"){
        console.log('오른쪽 방향키 눌렸습니다')
    } else if(event.code==="ArrowDown"){
            console.log('아래쪽 방향키 눌렸습니다')
    } else if(event.code==="ArrowUp"){
        console.log('위 방향키 눌렸습니다')
    }  else {
        console.log('방향키가 아닌 키보드 누르는 중...')
    }
})

// ====================================================
/* 3. [scroll] 이벤트 */
//console.log(window) 
window.addEventListener('scroll',(event)=>{
    // console.log(event)
    // console.log(event.target)
    // console.log(scrollY)
    
    // scrollY가 600에서 div opacity가 1이 되도록
    if(scrollY>600){
        document.querySelector('.pos').style.opacity='1'
    }
})

// ====================많이 쓰임=============================
// 폼 이벤트
/* 4. [submit] */
const todoForm = document.querySelector('#todo-form') //form 태그 
const todos = document.querySelector('.todos') // ul 태그

todoForm.addEventListener('submit',function(e){
    e.preventDefault();
    // 폼이 제출되는 것을 취소! 이벤트 전달을 막는 방법 
    // --> (원래 submit 되면 새로고침 되는데)새로고침 막음
    
    console.log('submit')
    
    // 폼 내부의 input 창 선택
    const todoInput = document.querySelector('input[name="todo"]')
    console.dir(todoInput) // 요소가 가지고 있는 데이터를 출력
    // console.log(todoInput.value)

    //(!!!) 공백으로 들어오는 문자는 추가되지 않도록
    const todo = todoInput.value.trim() // 공백을 없애서 공백까지 막아버리기
    console.log('todo:',todo)
    //선택된 ul 태그의 자식으로 <li>todo</li> 붙이기
    if(todo !==''){
        const Li = document.createElement('li')
        Li.innerText = todo
        todos.append(Li)
    } else{
        alert('오늘의 할 일을 작성해주세요!')
    }
    todoInput.value='' // 'submit' 후에는 빈 창이 되도록
    })
    
    // // if(todoInput.value===''){
    // //     alert('내용을 입력해주세요')
    // // } else{
    // //     todos.append(Li)
    // // }

// ====================================
/* 5. [change 이벤트 */
const chgInput = document.querySelector('#change-input')

chgInput.addEventListener('change',function(){
    console.log('changed!!!')
})

chgInput.addEventListener('input',function(){
    console.log('changing!!!')
    // input 창의 value에 변경이 발생되면 일어나는 이벤트

    let intro = document.querySelector('.intro')
    intro.innerHTML = this.value
})

    