// input value 설정 및 가져오기
// val()
function getValue(){
    let value = $('input').val()
    alert(value)
}
function setValue(){
    $('input').val('다른 글자로 설정!')
}

// css()
function changeCssJS(){
    let span = document.querySelector('span')
    span.style = 'font-size:20px; color:red'
}
function changeCssJQ(){
    $('span').css('font-size','40px')
    $('span').css('color','blue')

}
// attr()
function changeAttrJS(){
    let a = document.querySelector('a')
    a.setAttribute('href','http://www.naver.com')
}
function changeAttrJQ(){
    $('a').attr('href','http://www.daum.net')
}

// text()
function changeTextJS(){
    let p = document.querySelector('.p-text')
    p.innerText = 'js로 바꾼 내용입니다.'
}
function changeTextJQ(){
    $('.p-text').text('jQuery로 바꾼 내용입니다.')
}

// html()
function changeHtmlJS(){
    let p = document.querySelector('.p-html')
    p.innerHTML = '<em>javascript</em'

}
function changeHtmlJQ(){
    $('.p-html').html('<h2>jQuery</h2>')
}

// append()
function appendJS(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerText = '마지막 자식으로 추가된 li(js)'
    ul.append(li)
}
function appendJQ(){
    $('.colors').append('<li>마지막 자식으로 추가된 li(jQuery)</li>')
}

// prepend()
function prependJS(){
    let ul = document.querySelector('.colors')
    let li = document.createElement('li')
    li.innerText = '첫번째 자식으로 추가된 li(js)'
    ul.prepend(li)
}
function prependJQ(){
    $('.colors').prepend('<li>첫번째 자식으로 추가된 li(jQuery)</li>')
}

// after()
function afterJS(){
    let green = document.querySelector('.green')
    let li = document.createElement('li')
    li.innerText = 'green의 다음 형제 요소로 추가된 li(js)'
    green.after(li)
}
function afterJQ(){
    $('.green').after('<li>green의 다음 형제 요소로 추가된 li(jQuery)</li>')
}

// before()
function beforeJS(){
    let green = document.querySelector('.green')
    let li = document.createElement('li')
    li.innerText = 'green의 이전 형제 요소로 추가된 li(js)'
    green.before(li)
}
function beforeJQ(){
    $('.green').before('<li>green의 이전 형제 요소로 추가된 li(jQuery)</li>')
}

// remove()
function removeJS(){
    let li2 = document.querySelector('.li2')
    li2.remove()
}
function removeJQ(){
    $('.li2').remove()
}

// empty()
function emptyJS(){
    let num = document.querySelector('ul.nums')
    num.innerHTML=''
    

    //🤔
    // num은 ul 그 자체로 후손 li가 있어서 유사 배열처럼 보이지만 그냥 요소임! 따라서 for문 사용 불가!
    // li'들'을 가져와야 요소가 여러개라서 유사배열 -> for문 사용 가능
    // let nums = document.querySelectorAll('.nums li')
    // for( let li of nums){
    //     li.remove()
    // }
}
function emptyJQ(){
    $('ul.nums').empty()
}

// 요소 찾기
function findParent(){
    console.log($('.child2').parent())

}
function findParents(){
    console.log($('.child2').parents())

}
function findNext(){
    console.log($('.child2').next())

}
function findPrev(){
    console.log($('.child2').prev())

}
function findChildren(){   
    console.log($('.parent').children())
}

// class 조작하기
function addClass(){
    $('#hi').addClass('fs-50')
}
function removeClass(){
    $('#hi').removeClass('color-blue')
    $('#hi').removeClass() // class 모두 제거
}
function hasClass(){
    console.log($('#hi').hasClass('fs-50'))
}
function toggleClass(){
    $('#hi').toggleClass('bg-pink')
}

