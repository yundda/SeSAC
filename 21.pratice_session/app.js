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
  // url 창에서 /login 경로로 로그인 하려고 할 때도 로그인 된 사람은 접근 못 하게!
  const user = req.session.user;
  if (user) {
    res.redirect("/");
  } else {
    res.render("login");
  }
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
    res.send(`
    <script>
      alert("아이디 또는 비밀번호가 틀렸어요. 다시 시도하세요.")
      document.location.href="/login"
    </script>
    `);
  }
});
// GET /logout
// 세션 삭제
app.get("/logout", (req, res) => {
  console.log(req.session);
  const user = req.session.user;
  if (user) {
    // 로그인 된 유저라면 >> 로그아웃 시켜주기
    req.session.destroy((err) => {
      if (err) throw err;
      res.redirect("/");
    });
  } else {
    // 10분 후라서 이미 세션 만료된 유저
    res.send(`
      <script>
        alert("이미 세션이 만료되었어요.")
        document.location.href = "/"
      </script>
      `);
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
