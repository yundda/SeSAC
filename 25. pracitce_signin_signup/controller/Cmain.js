const crypto = require("crypto");
const { User } = require("../models");

// pw 암호화
function hashPw(pw) {
  const salt = crypto.randomBytes(16).toString("base64");
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha512";

  const hash = crypto
    .pbkdf2Sync(pw, salt, iterations, keylen, algorithm)
    .toString("base64");
  return { salt, hash };
}

// pw 비교
function checkPw(inputPw, savedSalt, savedHash) {
  const iterations = 100;
  const keylen = 64;
  const algorithm = "sha512";

  const hash = crypto
    .pbkdf2Sync(inputPw, savedSalt, iterations, keylen, algorithm)
    .toString("base64");
  return hash === savedHash;
}

// let pw = "123";
// const a = hashPw(pw);
// console.log(a);
// const { salt, hash } = a;
// console.log(checkPw(pw, salt, hash));

// GET '/'
exports.getIndex = (req, res) => {
  const { userid } = req.session;
  console.log(userid);
  if (userid) {
    res.render("index", { isLogin: true });
  } else {
    res.render("index", { isLogin: false });
  }
};
// GET '/signup'
exports.getSignup = (req, res) => {
  res.render("signup");
};

// GET '/signin'
exports.getSignin = (req, res) => {
  const { userid } = req.session;
  if (userid) {
    res.redirect("/");
  } else {
    res.render("signin");
  }
};

// // GET '/profile'
// exports.getProfile = (req, res) => {
//   res.render("profile");
// };

// POST '/signup'
// 회원 정보 등록 (create)
// 암호화
exports.postSignup = async (req, res) => {
  console.log(req.body);
  const hashedPw = hashPw(req.body.pw);

  try {
    const signinResult = await User.create({
      pw: hashedPw.hash,
      name: req.body.name,
      userid: req.body.userid,
      salt: hashedPw.salt,
    });
    res.send("회원가입 성공");
  } catch (err) {
    console.error("회원가입 에러", err);
    res.status(500).send("회원가입 서버 에러");
  }
};

// POST '/signin'
// 로그인
// 암호화 pw 비교
exports.postSignin = async (req, res) => {
  console.log("session 설정 전", req.session);
  try {
    // const signinResult = await User.findOne({
    //   where: {
    //     pw: req.body.pw,
    //     userid: req.body.userid,
    //   },
    // });
    const signinResult = await User.findOne({
      where: { userid: req.body.userid },
    });
    const { salt: savedSalt, pw: savedPw } = signinResult;
    if (checkPw(req.body.pw, savedSalt, savedPw)) {
      // 세션 설정
      req.session.userid = req.body.userid;
      console.log("session 설정 후", req.session);
      res.send({
        isLogin: true,
        name: signinResult.dataValues.name,
        message: "로그인 성공",
      });
    } else {
      res.send({ isLogin: false, message: "아이디와 비밀번호를 확인하세요!" });
    }
    // console.log(signinResult);
    // null or signinResult.dataValues : {id:~~}
  } catch (err) {
    console.error("회원가입 에러", err);
    res.status(500).send("회원가입 서버 에러");
  }
};

// GET '/logout'
exports.getLogout = (req, res) => {
  const { userid } = req.session;
  if (userid) {
    req.session.destroy((err) => {
      if (err) throw err;
      res.redirect("/");
    });
  } else {
    res.send(`
      <script>
        alert("이미 세션이 만료되었어요.")
        document.location.href = "/"
      </script>
      `);
  }
};

// // POST '/profile'
// exports.postProfile = (req, res) => {
//   User.findOne({
//     where: {
//       userid: req.body.userid,
//     },
//   })
//     .then((result) => {
//       console.log("프로필 조회", result.dataValues);
//       // res.send("프로필 조회");
//       res.render("profile", { data: result.dataValues });
//     })
//     .catch((err) => {
//       console.error(err);
//       res.status(500).send("err");
//     });
// };
