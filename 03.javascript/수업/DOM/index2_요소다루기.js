/* 1. 태그 내부 내용 */
/*
- innerText
- textContent
- innerHTML
 */

let div1 = document.getElementById('div1')
div1.innerText='    여기는 <b>첫번째</b> 태그입니다.&hearts;    /'
// 2칸이상의 공백문자 제거, 앞뒤로 공백문자 제거
console.log(div1.innerText)

div1.innerHTML='여기는 <b>첫번째</b> 태그입니다.&hearts;'

div1.textContent='     여기는 <b>첫번째</b> 태그입니다.&hearts;     /'
console.log(div1.textContent)

/* 2. 속성에 접근 */
/*
- 요소.속성명
- getAttribute(): 속성값 가져오기
- setAttribute(): 속성값 설정하기
*/

// pooh, naver id
let naver = document.getElementById('naver')
console.log(naver)
// naver.setAttribute("속성이름","바꿔줄 속성 값")
naver.setAttribute("href","http://www.google.com")
console.log(naver.href) // naver의 href 값을 가져오는 방법
console.log(naver.getAttribute("href")) // naver의 href 값을 가져오는 방법
naver.innerText = '구글로 이동'

console.log(document.querySelector('#pooh').src)
document.querySelector('#pooh').alt = '푸사진'

/* 3. CSS 변경 */
let h1 = document.querySelector('h1')
let list = document.querySelectorAll('li')

//배경색을 분홍색, 글자색 흰색, 글씨크기 1.3rem
for(let el of list){
    // el.style.color='#fff'
    // el.style.backgroundColor='pink' // camelCase 표기법으로 작성해야 함! '-'가 안 통해요오
    // el.style.fontSize='1.3rem'
    el.classList.add('friends') // html에서 style 태그 내부에 작성 해 둔 friends클래스에 대한 css를 적용시키기 위함
}

h1.classList.add('add-h1')
h1.classList.remove('add-h1')
h1.classList.toggle('add-h1') // 있으면 빼고 없으면 넣고
console.log(h1.classList.contains('add-h1'))
console.log(h1.classList.contains('add-h2'))
console.log(h1.classList) // 선택된 요소의 클래스 목록 확인

/* 4. 부모, 자식, 형제 노드 찾기 */
let friends = document.querySelector('#friends')
let tigger = document.querySelector('#tigger')

console.log('--자식 노드 접근--')
// 배열 형태로 가져옴
console.log(friends.children)
console.log(friends.children[0])

console.log('--부모 노드 접근--')
// 배열 형태가 아닌 요소 자체를 가져 옴
console.log(tigger.parentNode)

console.log('--형제 노드 접근--')
// 배열 형태가 아닌 요소 자체를 가져 옴
console.log('이전 형제',tigger.previousElementSibling)
console.log('다음 형제',tigger.nextElementSibling)

/* 5. 노드 생성, 추가, 삭제 */
let contatiner = document.querySelector('.contatiner')
console.log(contatiner)

// 요소 생성
let p = document.createElement('p')
p.innerText = '새로 추가된 p'
p.style.fontWeight = '700'
p.style.background = 'red'

console.log(p)
// 요소 추가
// 선택된 요소(container)의 맨 뒤 자식요소로 추가
contatiner.append(p)


let p2 = document.createElement('p')
let p3 = document.createElement('p')
// 각 p2, p3에 글자 요소 추가, 클래스(p-2, p-3) 추가
p2.innerText = 'p2'
p3.innerText = 'p3'
p2.classList.add('p-2')
p3.classList.add('p-3')

contatiner.append(p2)
// contatiner.appendchild(p3)

/* !!!!요게 중요!!! */
contatiner.append(p2,p3,"안녕하세요") // appendchild는 이렇게 한 번에 못 씀!

// prepend(): 선택된 요소의 맨 앞 자식으로 추가
// let friends = document.querySelector('#friends') 아까 위에서 선언함
// li 태그를 만들고, "캉가", friends 클래스 추가

let Li = document.createElement('li')
Li.innerText = '캉가'
Li.classList.add('friends')

friends.prepend(Li)

//before()
let h3 = document.createElement('h3')
h3.innerText = "h3태그"
h1.before(h3)
//after()
let h2 = document.createElement('h2')
h2.innerText = "h2태그"
h1.after(h2)

// 요소 삭제! > remove(), removeChild()
//let firstLi = document.querySelector('li')
//let ul = firstLi.parentElement

// 삭제할 요소.remove()
// firstLi.remove()

//부모요소.removeChild(삭제할 자식 요소)
//ul.removeChild(firstLi)

// 실습
const parentDiv = document.querySelector('.contatiner')
console.log(parentDiv)
let div = document.createElement('div')
let img = document.createElement('img')
img.setAttribute("src","./img/이요르.jpeg")
img.setAttribute("alt","이요르 사진")

let span = document.createElement('span')
span.innerText="이요르"
parentDiv.append(div)
div.append(img,span)

console.log(parentDiv)