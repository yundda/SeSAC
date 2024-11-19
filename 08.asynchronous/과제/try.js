function mainFunc(pram1, pram2, callbackFunc) {
  callbackFunc(pram1 + pram2);
}

function callbackFunc(param) {
  console.log(`${param}출력하는 콜백함수입니다.`);
}

mainFunc(1, 2, callbackFunc); // 3출력하는 콜백함수입니다.

// promoise
function promise() {
  return new Promise(function (resolve, reject) {
    console.log();
    resolve();
  });
}

const promi = new Promise(function (res, rej) {});

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("데이터를 성공적으로 가져옴!");
  }, 2000);
});

promise1
  .then((result) => {
    console.log("성공:", result);
  })
  .catch((error) => {
    console.error("실패:", error);
  });

new Promise((resolve, reject) => {
  resolve(10);
})
  .then((result) => {
    console.log(result); // 10
    return result * 2;
  })
  .then((result) => {
    console.log(result); // 20
    return result + 5;
  });
