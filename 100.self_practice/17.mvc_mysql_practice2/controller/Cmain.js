const user = require("../model/user");
const User = user.user;
console.log(User);
console.log(User.split("\n"));

const Users = User.split("\n").map((row) => {
  const [id, pw, name] = row.split("//");
  return { id, pw, name };
});

exports.getIndex = (req, res) => {
  res.render("index");
};

exports.getResult = (req, res) => {
  const { userid, userpw } = req.body;
  let match = Users.find((user) => {
    return user.id === userid && user.pw === userpw;
  });

  if (match) {
    res.send({
      isSuccess: true,
      username: match.name,
    });
  } else {
    res.send({
      isSuccess: false,
    });
  }
};
