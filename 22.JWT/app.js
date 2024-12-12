const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();
const PORT = 8080;
// 비밀키 -> .env에 저장해서 쓰자
const SECRET = "TFFA4CGb2GAdq6B9";
// https://randstrgen.lazyig.com 랜덤 문자 생성 링크

/* 미들웨어 설정 */
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// DB 정보
const userInfo = {
  id: "cocoa",
  pw: "1234",
  name: "코코아",
  age: 18,
};

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});

// POST '/login'
app.post("/login", (req, res) => {
  try {
    console.log(req.body);
    const { id, pw } = req.body;
    const { id: realId, pw: realPw } = userInfo;
    if (id === realId && pw === realPw) {
      // 로그인 성공
      // jwt 발급 : sign(페이로드(저장할 정보), 비밀키)
      const token = jwt.sign({ id }, SECRET);
      // {id : id}일 경우 그냥 {id}만 보내도 됨
      console.log("app.js token! >", token);
      // jwt는 클라이언트에서 관리하기 때문에 클라이언트에게 토큰을 보내줘야 함
      res.send({ result: true, token }); // = { result : true , token : token }
    } else {
      // 로그인 실패
      res.send({
        result: false,
        message: "app.js >> 로그인 정보가 올바르지 않습니다.",
      });
    }
  } catch (err) {
    console.log("post/login err", err);
    res.status(500).send({ message: "app.js >> 서버 에러" });
  }
});

// POST '/token'
app.post("/token", (req, res) => {
  try {
    console.log(req.headers.authorization); // Bearer ~~.~~~
    if (req.headers.authorization) {
      const token = req.headers.authorization.split(" ")[1]; // split 결과는 배열로 들어오기 때문에
      console.log(token);
      try {
        // 토큰 검증 작업
        const auth = jwt.verify(token, SECRET);
        console.log(auth);
        // { id: 'cocoa', iat: 1733894238 } iat는 알아서 들어간 거
        if (auth.id === userInfo.id) {
          res.send({ result: true, name: userInfo.name });
        }
      } catch (err) {
        console.log("app.js >> 토큰 에러", err);
        res
          .status(401)
          .send({
            result: false,
            message: "app.js >> 인증된 회원이 아닙니다.",
          });
      }
    } else {
      // 인증 정보 없을 때
      res.redirect("/login");
    }
  } catch (err) {
    console.log("post/login err", err);
    res.status(500).send({ message: "app.js >> 서버 에러" });
  }
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
