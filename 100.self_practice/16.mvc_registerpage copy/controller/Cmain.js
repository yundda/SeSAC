const userInfo = require("../model/user");
// GET '/'
exports.index = (req, res) => {
  res.render("index");
};

// POST '/login'
exports.login = (req, res) => {
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

// POST '/login2'
exports.login2 = (req, res) => {
  // console.log(userInfo.user);
  /*
  `apple//1234//사과사과
banana//4321//바나나나나
cocoa//qwer1234//미떼`;
  */
  const users = []; // [{realId:~~, realPw:~~, name:~~},{..},{..}]
  const userIds = []; //["apple","banana","cocoa"]
  const userData = userInfo.user.split("\n");
  for (let i of userData) {
    const userInfo = i.split("//"); // [banana,4321,바나나나나]
    const userObj = {
      realId: userInfo[0],
      realPw: userInfo[1],
      name: userInfo[2],
    };
    users.push(userObj);
    userIds.push(userInfo[0]);
  }
  const idx = userIds.indexOf(req.body.userid);
  // idx >=0 userIds에 있는 회원
  // idx = -1 userIds에 없는 회원
  if (idx >= 0) {
    if (req.body.userpw === users[idx].realPw) {
      res.send({
        isSuccess: true,
        username: users[idx].name,
      });
    } else {
      res.send({ isSuccess: false });
    }
  } else {
    res.send({ isSuccess: false });
  }
};

exports.getPractice = (req, res) => {
  res.render("practice");
};
exports.getDate = (req, res) => {
  console.log(req.params);
  res.render("date");
};
