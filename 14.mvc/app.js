const express = require("express");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 라우터 분리한 거 가져오기
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

const userRouter = require("./routes/user");
app.use("/user", userRouter);

// [404] error
// listen 바로 위에 하면서 젤 마지막에 처리해야함
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
