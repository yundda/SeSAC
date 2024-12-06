// TODO: 컨트롤러 코드
const User = require("../model/User");
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
  User.signup(req.body, (result) => {
    res.send(result.insertId + "번 등록");
  });
};

// POST '/user/signin'
exports.postSignin = (req, res) => {
  User.signin(req.body, (result) => {
    console.log("signup Cuser :", result);
    if (result.length > 0) {
      res.send(true);
    } else {
      res.send(false);
    }
  });
};

// POST '/user/profile'
exports.postProfile = (req, res) => {
  User.postProfile(req.body, (result) => {
    console.log("postProfile Cuser.js : ", result);
    res.render("profile", { data: result });
  });
};

// PATCH '/user/profile/edit'
exports.patchProfile = (req, res) => {
  User.patchProfile(req.body, () => {
    res.send("수정");
  });
};

// DELETE '/user/profile/delete'
exports.deleteProfile = (req, res) => {
  User.deleteProfile(req.body.id, () => {
    res.send("삭제");
  });
};
