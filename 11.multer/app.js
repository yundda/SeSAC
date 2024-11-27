const express = require("express");
const multer = require("multer");
const path = require("path");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// 1. view 엔진 설정
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
  dest: "uploads/", // 어느 폴더로 올릴건지
});

const uploadDetail = multer({
  storage: multer.diskStorage({
    destination: function (res, file, done) {
      done(null, "uploads/"); // 어디에 저장될지 경로 설정
      // uplodas라는 폴더가 미리 만들어져 있어야 함
    },
    filename: function (req, file, done) {
      // const extension = path.extname(파일이름,확장자) >> 확장자만
      const extension = path.extname(file.originalname); // .png, .webp, ...
      done(
        null,
        // path.basename(파일이름.확장자, 확장자) >> 파일이름만 리턴
        path.basename(file.originalname, extension) + Date.now() + extension
      );
      // console.log("path.basename", path.basename(file.originalname, extension));
      // console.log("path.extname", path.extname(file.originalname));
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});
// // --------연습----------
// const up = multer({
//   storage: multer.diskStorage({
//     destination: function (res, file, done) {
//       done(null, "uploads");
//     },
//     filename: function (res, file, done) {
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   limits: { fieldSize: 5 * 1024 * 1024 },
// });

// const uplo = multer({
//   storage: multer.diskStorage({
//     destination: (res, file, done) => {
//       done(null, "uploads");
//     },
//     filename: (res, file, done) => {
//       const ext = path.extname(file.originalname);
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   limits: { fieldSize: 5 * 1024 * 1024 },
// });

/* API 설정 */
app.get("/", (req, res) => {
  res.render("index");
});
// 1. 파일 한 개 업로드
app.post("/upload", uploadDetail.single("userfile"), (req, res) => {
  // index에서 설정한 input의 name을 입력'userfile'
  console.log(req.body); // 파일 정보는 req.file에서 확인
  console.log(req.file);
  /*
 file = {
  fieldname: 'userfile', // foam 내부에 정의한 name 값
  originalname: 'á\x84\x80á\x85µá\x86ºá\x84\x92á\x85¥á\x84\x87á\x85³á\x84\x8Bá\x85¦ á\x84\x8Bá\x85©á\x86¯á\x84\x85á\x85µá\x84\x82á\x85³á\x86« á\x84\x87á\x85¡á\x86¼á\x84\x87á\x85¥á\x86¸.png',
  // 원본 파일명
  encoding: '7bit', // 파일 인코딩 타입
  mimetype: 'image/png', // 파일 저장 완료
  destination: 'uploads/', // 파일 저장 경로
  filename: '0300c42506d3a3a8f16923ca62ce88a6', // 저장된 파일명
  path: 'uploads/0300c42506d3a3a8f16923ca62ce88a6', // 업로드된 파일 전체 경로
  size: 231036 // 파일크기(byte)
}
   */
  res.send("응답");
});

// 2. 하나의 input에 파일 여러개 업로드
// .array() 사용
app.post("/uploads/array", uploadDetail.array("multifiles"), (req, res) => {
  // upload.array()로 받아주는 req.files 는 배열 형태로 들어옴
  console.log(req.body);
  // console.log(req.file); // undefined
  console.log(req.files);
  /*
    [{file1의 파일 정보},{file2의 파일 정보}]
  */
  res.send("업로드 완료");
});

// 3. 여러개 input에 파일 업로드
// .fields() 사용
// fields의 매개변수는 배열[{name : 'name값1'},...]
app.post(
  "/uploads/fields",
  uploadDetail.fields([
    { name: "file1" },
    { name: "file2" },
    { name: "file3" },
  ]),
  (req, res) => {
    // upload.fields()로 받아주는 req.files 는 객체형태로 들어옴
    console.log(req.body);
    /*
      {filename1:[{파일 정보}],filename2:[{파일 정보}], ...}
    */
    console.log(req.files);
    res.send("업로드 완료");
  }
);

// ------------dynamic form----------
// 동적 폼 파일 업로드
app.post("/dynamicUpload", uploadDetail.single("dynamicFile"), (req, res) => {
  console.log(req.file);
  console.log(req.body);

  // 하나의 객체에 합쳐서 보내는 방법
  // res.send(...req.file, ...req.body);
  res.send({ file: req.file, fileInfo: req.body });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
