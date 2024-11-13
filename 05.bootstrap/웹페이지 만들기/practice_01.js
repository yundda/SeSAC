let form = document.querySelector('form')
// console.log(input)
form.addEventListener('submit',function(e){
    e.preventDefault()
    Swal.fire({
        title: "Thx!",
        text: "답변해드릴게요!",
        imageUrl: "../img/짱구하트.jpg",
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: "짱구 하트"
      }).then((result) => {
        if (result.isConfirmed) {
        let input = document.querySelector('.input-text')
        input.value=''
        }
      })
    })
