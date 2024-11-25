const express = require("express");
const app = express();
const PORT = 8080;
/* 미들 웨어 설정 */
// 1. 뷰 엔진 설정
app.set("view engine", "ejs");
app.set("views", "./views");
// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// 3. static 설정
app.use("/static", express.static(__dirname + "/public"));
// 4. multer 설정

/* API 설정 */
app.get("/", (req, res) => {
  res.render("index2");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
