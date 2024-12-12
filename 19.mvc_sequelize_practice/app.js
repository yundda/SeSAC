const express = require("express");
const { sequelize } = require("./models");
const app = express();
const PORT = 8000;

app.set("view engine", "ejs");
app.set("views", "./views");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: 라우팅 분리
// 기본 주소: localhost:PORT/user <- 주의!!
const getIndex = require("./routes/user");
app.use("/user", getIndex);

// TODO: 404 에러 처리
app.get("*", (req, res) => {
  res.render("404");
});

// sync()
sequelize
  .sync({ force: true })
  .then(() => {
    console.log("db 연결 성공");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}/user`);
    });
  })
  .catch((err) => {
    console.error("db 연결 에러 : ", err);
  });
