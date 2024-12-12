const express = require("express");
const session = require("express-session");
const { sequelize } = require("./models");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      httpOnly: true,
      maxAge: 10 * 60 * 1000, //10분짜리 세션
    },
  })
);
/* 라우트 불러오기 */
const indexRouter = require("./routes");
app.use("/", indexRouter);

// 404 페이지
app.get("*", (req, res) => {
  res.render("404");
});
/* DB 연결 */
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db 연결 성공");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("db연결 에러", err);
  });
