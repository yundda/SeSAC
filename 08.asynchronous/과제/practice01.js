function call(name) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

// promise
call("kim")
  .then((name) => {
    console.log(name + "반가워");
    return back("back");
  })
  .then((txt) => {
    console.log(txt + "을 실행했구나");
    return hell();
  })
  .then((msg) => {
    console.log("여기는" + msg);
  });

// async 와 await
async function exec() {
  let user = await call("kim");
  console.log(user + "반가워");
  let text = await back("back");
  console.log(text + "을 실행했구나");
  let message = await hell("callback hell");
  console.log("여기는" + message);
}
exec();
