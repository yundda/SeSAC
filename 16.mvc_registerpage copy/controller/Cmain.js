const userInfo = require("../model/user");
console.log(userInfo.userInfos);

exports.index = (req, res) => {
  res.render("index");
};

exports.register = (req, res) => {
  const { realID, realPw } = userInfo.userInfos;
  const { userid, userpw } = req.body;
  if (userid === realID && userpw === realPw) {
    res.send({
      isSuccess: true,
      userid: userid,
    });
  } else {
    res.send({ isSuccess: false });
  }
};
