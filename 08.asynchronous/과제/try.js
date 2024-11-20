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

// promise 과제
function call(name) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log(name);
      res(name);
    }, 1000);
  });
}

function back() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("back");
      res("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("callback hell");
    }, 1000);
  });
}

// .then 체이닝
call("kim")
  .then((result) => {
    console.log(result + "반가워");
    return back("back");
  })
  .then((result) => {
    console.log(result + "을 실행했구나");
    return hell();
  })
  .then((result) => {
    console.log("여기는 " + result);
  });

// async await
async function exec() {
  let user = await call("kim");
  console.log(user + "반가워");
  let txt = await back();
  console.log(txt + "을 실행했구나");
  let msg = await hell();
  console.log("여기는 " + msg);
}

exec();

function add(n1, n2) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(n1 + n2);
    }, 1000);
  });
}
function mull(n) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(n * 2);
    }, 1000);
  });
}
function sub(n) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(n - 1);
    }, 1000);
  });
}

add(3, 4)
  .then((result) => {
    console.log(result);
    return mull(result);
  })
  .then((result) => {
    console.log(result);
    return sub(result);
  })
  .then((result) => {
    console.log(result);
  });

async function calc(n1, n2) {
  let culc1 = await add(n1, n2);
  console.log(culc1);
  let culc2 = await mull(culc1);
  console.log(culc2);
  let culc3 = await sub(culc2);
  console.log(culc3);
}

calc(4, 3);
