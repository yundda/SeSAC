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

/* API 설정 */
app.get("/", (req, res) => {
  res.render("index(try)");
});

// axios get
app.get("/axios", (req, res) => {
  res.send(req.query);
});
// axios post
app.post("/axios", (req, res) => {
  res.send(req.body);
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
