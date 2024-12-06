const express = require("express");
const multer = require("multer");
const path = require("path");

const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// 1. 뷰엔진 설정
app.set("view engine", "ejs");
app.set("views", "./views");

// 2. body-parser 설정
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 3. static 설정
app.use("/static", express.static(__dirname + "/public"));
app.use("/uploads", express.static(__dirname + "/uploads"));

// 4. multer 설정
const upload = multer({
  storage: multer.diskStorage({
    destination: (res, file, done) => {
      done(null, "uploads/");
    },
    // 아래처럼 바로 선언해도 됨
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, req.body.id + ext);
    },
  }),
  //   limits: { fileSize: 5 * 1024 * 1024 },
});

/* API 설정 */
app.get("/", (req, res) => {
  res.render("index");
});

app.post("/result", upload.single("profile"), (req, res) => {
  console.log(req.body);
  console.log(req.file);
  res.render("result", {
    userInfo: req.body,
    filepath: req.file.path,
  });
  //   res.render("result", {
  //     ...req.body,
  //     filepath: req.file.path,
  //   });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${8080}`);
});
