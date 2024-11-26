const express = require("express");
const multer = require("multer");
const path = require("path");
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
app.use("/uploads", express.static(__dirname + "/uploads"));

// 4. multer 설정
const upload = multer({
  storage: multer.diskStorage({
    destination: (res, file, done) => {
      done(null, "uploads/");
    },
    filename: (res, file, done) => {
      const extension = path.extname(file.originalname);
      done(
        null,
        path.basename(file.originalname, extension) + Date.now() + extension
      );
    },
  }),
  limits: { fieldSize: 5 * 1024 * 1024 },
});

/* API 설정 */
app.get("/", (req, res) => {
  res.render("index2");
});

// 1. 파일 한개 업로드
app.post("/upload1", upload.single("userfile"), (req, res) => {
  console.log(req.file);
  res.send("응답");
});

// 2. 하나의 input 여러개 파일 업로드
app.post("/upload2", upload.array("multifiles"), (req, res) => {
  console.log(req.files);
  res.send("응답");
});

// 3. 여러 input에 각 한개씩 파일 업로드
app.post(
  "/upload3",
  upload.fields([{ name: "file1" }, { name: "file2" }, { name: "file3" }]),
  (req, res) => {
    console.log(req.files);
    res.send("응답");
  }
);

// 4. 동적 폼 파일 업로드
app.post("/upload4", upload.single("File"), (req, res) => {
  res.send(req.file);
});

app.get("/upload", (req, res) => {
  res.render("upload");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
