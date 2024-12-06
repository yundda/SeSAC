const express = require("express");
const app = express();
const PORT = 8080;
// const db = require('./models')
// 우리가 필요한 건 sequelize 이기 때문에 객체 구조 분해로 가져올 수 있음
// db={sequelize:~~~,Sequelize:~~~}
// const {sequelize} = db
const { sequelize } = require("./models"); // 한 줄로 가능

// 미들웨어
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// router 설정
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// sync()
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("db connection success");
    app.listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("db 커넥션 Err", err);
  });
