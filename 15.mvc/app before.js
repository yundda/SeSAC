const express = require("express");
const app = express();
const PORT = 8080;

/* 미들웨어 설정 */
// 1. 뷰엔진 설정
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const comments = [
  {
    id: 1,
    userid: "apple",
    date: "2024-10-23",
    comments: "안녕하세요~~~~~~~~~",
  },
  {
    id: 2,
    userid: "banana",
    date: "2024-09-23",
    comments: "방가방가아아아아",
  },
  {
    id: 3,
    userid: "cocoa",
    date: "2024-11-23",
    comments: "밥먹짜아 배고프다~~~~",
  },
  {
    id: 4,
    userid: "donut",
    date: "2024-08-23",
    comments: "단비꼬오오오야아아~~~~~",
  },
];

/* API 설정 */
app.get("/", (req, res) => {
  res.render("index");
});

app.get("/comments", (req, res) => {
  console.log(comments);
  res.render("comments", { commentsInfos: comments });
});

app.get("/comments/:id", (req, res) => {
  console.log(req.params);
  const commentId = req.params.id;
  console.log("commentId :" + commentId); // 1,2,3,4
  console.log(comments[commentId - 1]);
  if (commentId < 1 || commentId > comments.length) {
    res.render("404");
  }
  if (isNaN(commentId)) {
    res.render("404");
  }
  res.render("comment", {
    commentInfo: comments[commentId - 1],
    /*
    {
        id: 1,
        userid: 'apple',
        date: '2024-10-23',
        comments: '안녕하세요~~~~~~~~~'
    }
    */
  });
});

// [404] error
// listen 바로 위에 하면서 젤 마지막에 처리해야함
app.get("*", (req, res) => {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
