const express = require("express");
const session = require("express-session");
const app = express();
const PORT = 8080;

app.set("view engine", "ejs");
app.use("/static", express.static(__dirname + "/static"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// 10분짜리 세션 설정
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 10 * 60 * 1000,
      httpOnly: true,
    },
  })
);

app.get("/", (req, res) => {
  // 로그인이 안 된 유저 > {isLogin : false}
  // 로그인 된 유저 > {isLogin : true, user : user}
  console.log(req.session);
  if (req.session.user) {
    res.render("index", {
      isLogin: true,
      user: req.session.user,
    });
  } else {
    res.render("index", { isLogin: false });
  }
  console.log(req.session.user);
  // res.render("index",{});
});

app.get("/login", (req, res) => {
  res.render("login");
});

const userInfo = {
  userId: "cocoa",
  userPw: "1234",
};
// POST /login
// 실제 로그인 진행
// 세션 연결
// 세션의 user라는 키를 추가해 userid 값을 value로 전달
app.post("/login", (req, res) => {
  console.log(req.body);
  //{ id: 'aaa', pw: '111' }
  const { id, pw } = req.body;
  const { userId, userPw } = userInfo;
  if (userId === id && userPw === pw) {
    req.session.user = id;
    console.log("session : ", req.session.user);
    res.redirect("/");
  } else {
    res.redirect("/");
  }
});
// GET /logout
// 세션 삭제
app.get("/logout", (req, res) => {
  console.log(req.session);
  req.session.destroy((err) => {
    if (err) throw err;
    res.redirect("/");
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
