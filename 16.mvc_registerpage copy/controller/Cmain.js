const express = require("express");
const userInfo = require("../model/user");

exports.main = (req, res) => {
  res.render("index");
};

exports.register = (req, res) => {
  const { userid, userpw } = req.body;
  const { realID, realPw } = userInfo.userInfos()[0];
  if (userid === realID && userpw === realPw) {
    res.send({
      isSuccess: true,
      userid: userid,
    });
  } else {
    res.send({
      isSuccess: false,
    });
  }
};
