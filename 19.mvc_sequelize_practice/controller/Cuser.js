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

// POST '/user/signup'
exports.postSignup = (req, res) => {
  // [sequelize 전]
  // User.signup(req.body, (result) => {
  //   res.send(result.insertId + "번 등록");
  // });

  // [sequelize 후]
  // `INSERT INTO user (userid,pw,name) VALUE ('${data.userid}','${data.pw}','${data.name}')`,
  models.User.create({
    userid: req.body.userid,
    pw: req.body.pw,
    name: req.body.name,
  })
    .then((result) => {
      // console.log(result);
      res.end();
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("err");
    });
};

// POST '/user/signin'
exports.postSignin = (req, res) => {
  // [sequelize 전]
  // User.signin(req.body, (result) => {
  //   console.log("signup Cuser :", result);
  //   if (result.length > 0) {
  //     res.send(true);
  //   } else {
  //     res.send(false);
  //   }
  // });
  // [sequelize 후]
  // `SELECT * from user WHERE userid='${data.userid}' AND pw='${data.pw}' LIMIT 1`,
  models.User.findOne({
    where: {
      userid: req.body.userid,
      pw: req.body.pw,
    },
  }).then((result) => {
    console.log("findOne 결과 :", result);
    // 로그인 성공 시 result :
    // user {
    //   dataValues: { id: 18, userid: '555', name: '555', pw: '555' },
    //   ...
    //   },
    //   isNewRecord: false

    // 로그인 실패 시 result :
    //  null
    console.log(Boolean(result));
    if (Boolean(result)) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

// POST '/user/profile'
exports.postProfile = (req, res) => {
  // [sequelize 전]
  // User.postProfile(req.body, (result) => {
  //   console.log("postProfile Cuser.js : ", result);
  //   res.render("profile", { data: result });
  // });
  // [sequelize 후]
  // `SELECT * from user WHERE userid='${data.userid}' LIMIT 1`,
  models.User.findOne({
    where: {
      userid: req.body.userid,
    },
  })
    .then((result) => {
      console.log("프로필 조회", result.dataValues);
      // res.send("프로필 조회");
      res.render("profile", { data: result.dataValues });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("err");
    });
};

// PATCH '/user/profile/edit'
exports.patchProfile = (req, res) => {
  // [sequelize 전]
  // User.patchProfile(req.body, () => {
  //   res.send("수정");
  // });
  // [sequelize 후]
  // `UPDATE user SET name='${data.name}', pw='${data.pw}' WHERE id=${data.id}`,
  models.User.update(
    {
      name: req.body.name,
      pw: req.body.pw,
    },
    {
      where: {
        id: req.body.id,
      },
    }
  )
    .then((result) => {
      console.log(result);
      // result [1], [0]
      res.send("수정 성공");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("err");
    });
};

// DELETE '/user/profile/delete'
exports.deleteProfile = (req, res) => {
  // [sequelize 전]
  // User.deleteProfile(req.body.id, () => {
  //   res.send("삭제");
  // });
  // [sequelize 후]
  // DELETE from user WHERE id='${id}'
  models.User.destroy({
    where: {
      id: req.body.id,
    },
  })
    .then((result) => {
      console.log(result);
      res.send("삭제 성공");
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("err");
    });
};
