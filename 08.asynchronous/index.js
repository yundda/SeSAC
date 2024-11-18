function goMart() {
  console.log("마트에 갑니다");
}
// 콜백 함수를 이용해서,
// pickDrink 작업이 끝난 후 pay가 실행되도록
function pickDrink(callback) {
  //3초 동안 고민하는 함수
  setTimeout(function () {
    console.log("고민 끝");
    product = "콜라";
    price = 1500;
    callback();
  }, 3000);
}

function pay() {
  console.log(`상품 ${product}에 대한 가격 ${price}지불`);
}

let product, price;
goMart();
//pickDrink 이후에 pay함수가 실행되도록 콜백으로 넘겨줌
pickDrink(pay); // 맨 마지막에 실행됨(시간이 걸리는 작업)
// pay();
