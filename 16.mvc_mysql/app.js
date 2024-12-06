const express = require("express");
const app = express();
const PORT = 8080;

/* 미들웨어 */
app.set("view engine", "ejs");
app.set("views", "./views"); // 생략 가능

app.use("/static", express.static(__dirname + "/static"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

/* 라우터 */
const indexRouter = require("./routes/index"); // 파일명이 index이면 생략 가능
app.use("/", indexRouter);

//404 설정
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
