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
  console.log("postSignup Cuser.js : ", req.body);
  User.addUser(req.body, (result) => {
    console.log("Cuser.js result :", result);
    res.send(result.insertId + "번 등록");
  });
};

// POST '/user/signin'
exports.postSignin = (req, res) => {
  console.log(req.body);
  const { userid, pw } = req.body;
  User.postSignin(req.body, (result) => {
    console.log("Cuser.js", result);
    res.send(result);

    // if (userid === result.userid && pw === result.pw) {
    //   res.send({
    //     isSuccess: true,
    //     result: result,
    //   });
    // } else {
    //   res.send({ isSuccess: false });
    // }
  });
};

// POST '/user/profile'
exports.postProfile = (req, res) => {
  console.log("Cuser.js profile :", req.body);
  User.postSignin(req.body, (result) => {
    res.render("profile", { data: result });
  });
};

// PATCH '/user/profile/edit'
exports.patchProfile = (req, res) => {
  User.patchProfile(req.body, (result) => {
    console.log("Cuser.js :", result);
    res.send("수정");
  });
};

// DELETE '/user/profile/delete'
exports.deleteProfile = (req, res) => {
  User.deleteProfile(req.body.id, (result) => {
    res.send(req.body.id + "번 id 삭제");
  });
};
