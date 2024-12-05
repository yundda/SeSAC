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
// POST '/user/signup'
exports.postSignup = (req, res) => {
  console.log(req.body);
  User.postSignup(req.body, (result) => {
    console.log("Cuser.js signup :", result);
    res.send(result + "번 등록완료");
  });
};

// GET '/user/signin'
exports.getSignin = (req, res) => {
  res.render("signin");
};
// POST '/user/signin'
exports.postSignin = (req, res) => {
  console.log("postSignin:", req.body);
  User.postSignin(req.body, (result) => {
    console.log("Cuser.js signin :", result);
    res.send(result);
  });
};
// POST '/user/profile'
exports.postProfile = (req, res) => {
  console.log("postProfile: ", req.body);
  User.postSignin(req.body, (result) => {
    console.log("postProfile Cuser.js :", result);
    res.render("profile", { data: result });
  });
};
// PATCH '/user/profile/edit'
exports.patchProfile = (req, res) => {
  User.patchProfile(req.body, () => {
    res.send("수정완료");
  });
};

// DELETE '/user/profile/delete'
exports.deleteProfile = (req, res) => {
  console.log("deleteProfile :", req.body);
  User.deleteProfile(req.body.id, () => {
    res.send(req.body.id + "번 삭제");
  });
};
