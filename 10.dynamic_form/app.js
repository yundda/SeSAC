const express = require("express");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// 1. 뷰 폴더 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* API */
app.get("/", (req, res) => {
  res.render("index");
});

// aJax get
app.get("/ajax", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// aJax post
app.post("/ajax", (req, res) => {
  // body-parser 설정을 해야 req.body 읽을 수 있음
  console.log(req.body);
  res.send(req.body);
});

// axios get
app.get("/axios", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

// axios post
app.post("/axios", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

/* fetch 요청 */
// fetch get
app.get("/fetch", (req, res) => {
  console.log(req.query);
  // res.send("응답 완료"); // 클라이언트에서 text() 사용해야 출력 가능
  res.send(req.query); // 클라이언트에서 json() 사용해야 출력 가능
});

// fetch post
app.post("/fetch", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

//------------Open AI 사용----------
//외부 api 사용
app.get("/api", (req, res) => {
  res.render("api");
});

// -----실습 문제2 전역 변수 -----
const realID = "banana";
const realPw = "4321";

// -------실습-----------
app.get("/practice1", (req, res) => {
  res.render("practice/practice1");
});

app.get("/practice2", (req, res) => {
  res.render("practice/practice2");
});

app.get("/practice_axiosGet", (req, res) => {
  res.send(req.query);
});

app.post("/practice_axiosPost", (req, res) => {
  console.log(req.body);
  // { userid: 'sdf', userpw: 'asdf' }
  const { userid, userpw } = req.body;
  if (realID === userid && realPw === userpw) {
    res.send({ isSuccess: true, userid: req.body.userid });
  } else {
    res.send({ isSuccess: false });
  }
});
// 서버 시작
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
