// TODO: 컨트롤러 코드
const models = require("../models");

// GET '/user'
exports.getIndex = (req, res) => {
  res.render("index");
};
// GET '/user/signup'
exports.getSignup = (req, res) => {
  res.render("signup");
};
// GET '/user/signin'
exports.getSignin = (req, res) => {
  res.render("signin");
};

// 회원 가입 ; POST '/user/signup'
exports.postSignup = async (req, res) => {
  try {
    const result = await models.User.create({
      userid: req.body.userid,
      pw: req.body.pw,
      name: req.body.name,
    });
    console.log("회원가입 결과 : ", result);
    res.send("회원가입 성공");
  } catch (err) {
    console.error("회원가입 실패", err);
    res.status(500).send("err");
  }
};

// 로그인 ; POST '/user/signin'
exports.postSignin = async (req, res) => {
  try {
    const result = await models.User.findOne({
      where: {
        userid: req.body.userid,
        pw: req.body.pw,
      },
    });
    console.log("로그인 시도 결과: ", result);
    // console.log("로그인 시도 : ", result.dataValues);
    if (Boolean(result)) {
      res.send(true);
    } else {
      res.send(false);
    }
  } catch (err) {
    console.error("회원가입 실패", err);
    res.status(500).send("err");
  }
};

// 프로필 조회 ; POST '/user/profile'
exports.postProfile = (req, res) => {
  models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  })
    .then((result) => {
      console.log("프로필 조회 결과 : ", result);
      // res.send("프로필 조회");
      res.render("profile", {
        data: result.dataValues,
        //  dataValues: { id: 20, userid: '555', name: '555', pw: '555' },
      });
    })
    .catch((err) => {
      console.error("프로필 조회 err", err);
      res.status(500).send("프로필 조회 err");
    });
};

// 회원정보 수정 ; PATCH '/user/profile/edit'
exports.patchProfile = (req, res) => {
  models.User.update(
    {
      pw: req.body.pw,
      name: req.body.name,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then((result) => {
      console.log("수정 완료 결과 :", result); //[1], [0]
      res.end();
    })
    .catch((err) => {
      console.error("수정 실패 err :", err);
      res.status(500).send("서버 수정 실패 err :");
    });
};

// 회원정보 삭제 ; DELETE '/user/profile/delete'
exports.deleteProfile = (req, res) => {
  models.User.destroy({
    where: { id: req.body.id },
  })
    .then((result) => {
      console.log("삭제 완료 결과 :", result); // 1 , 0
      res.send("삭제 완료");
    })
    .catch((err) => {
      console.error("삭제 오류", err);
      res.status(500).send("서버 삭제 오류");
    });
};
