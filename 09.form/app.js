const express = require("express");
const app = express();
const PORT = 8080;

// ejs views 미들웨어 설정
app.set("view engine", "ejs"); // 템플릿 엔진 설정
app.set("views", "./views"); // 뷰 파일 폴더 경로 설정

// 미들웨어 설정 ; static ; 정적 파일 관리
// app.use('/static',express.static(__dirname+'/public'))

// 미들웨어 설정 ; body-perser
app.use(express.urlencoded({ extended: false })); // true, false 크게 상관없음 다만 필수로 적어줘야 함
app.use(express.json());

/* 요청 > 응답 */
app.get("/", function (req, res) {
  res.render("index");
});

// form get 요청
// index에서 설정한 action(/getForm)과 하단 app.get의 라우트,  method(get)과 app.~ 맞춰야 함
app.get("/getForm", function (req, res) {
  console.log(req.query);
  res.render("result", {
    title: "GET",
    userInfo: req.query,
  });
  //   res.send("form data get 요청 성공!");
});

// form post 요청
app.post("/getPost", function (req, res) {
  console.log(req.body);
  res.render("result", {
    title: "POST",
    userInfo: req.body,
  });
  //   res.send("form data post 요청 성공!");
});

// form validation post 요청
app.post("/js-form-check", function (req, res) {
  console.log(req.body);
  res.send("js 유효성 검사");
});
/* 실습 문제! */
// practice1으로 들어갔을 때, practice1.ejs를 화면에 보여줘야 함
// practice2으로 들어갔을 때, practice2.ejs를 화면에 보여줘야 함
// practice1, practice2.ejs에는 각각 get, post를 통한 폼 요청이 있고
// 결과 페이지는 practice_result.ejs를 공통으로 사용

// 1. /practice1에 대한 GET 요청
app.get("/practice1", (req, res) => {
  res.render("practice/practice1");
});

// 2. /practice2에 대한 GET 요청
app.get("/practice2", (req, res) => {
  res.render("practice/practice2", {});
});
// 3. 주소 지정 form GET 요청
app.get("/practice1-get", (req, res) => {
  // console.log(req.query);
  /*
  {
    name: 'dda',
    gender: '여자',
    year: '1970',
    month: '1',
    date: '1',
    interest: '패션'
  }
  */
  res.render("practice/practice_result", {
    userInfo: req.query,
    // ❗️
    addInfo: false,
  });
});
// 4. 주소 지정 form POST 요청
app.post("/practice2-post", (req, res) => {
  res.render("practice/practice_result", {
    userInfo: req.body,
    addInfo: true,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
