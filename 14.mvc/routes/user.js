const express = require("express");
const router = express.Router();
const controller = require("../controller/Cuser");

// GET /user
// app.js에서 /user로 들어오는 걸 여기로 보냈기 때문에 /만 작성
router.get("/", controller.getUser);

// // EX) GET /user/aa
// router.get('/aa',controller.a)
// // EX) GET /user/login
// router.get('/login',controller.login)

module.exports = router;
