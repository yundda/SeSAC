const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// TODO : 쿠키 미들웨어 설정
app.use(cookieParser("secret"));
const cookieConfig = {
  maxAge: 24 * 60 * 60 * 1000,
  httpOnly: true,
  signed: true,
};

app.get("/", (req, res) => {
  // TODO : 쿠키값 가져오기 및 index.ejs에 보내기
  res.render("index", { popup: req.signedCookies.popup });
  console.log(req.signedCookies);
});

app.post("/set-cookie", (req, res) => {
  // TODO : 쿠키 생성하기
  res.cookie("popup", "hide", cookieConfig);
  console.log(req.signedCookies);
  // { popup: 'hide' }
  res.send("쿠키 생성 성공");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
