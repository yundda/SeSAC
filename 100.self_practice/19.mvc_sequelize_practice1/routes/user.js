// TODO: 라우트 설정
const express = require("express");
const controller = require("../controller/Cuser");
const router = express.Router();

// GET '/user'
router.get("/", controller.getIndex);

// GET '/user/signup'
router.get("/signup", controller.getSignup);

// GET '/user/signin'
router.get("/signin", controller.getSignin);

// POST '/user/signup'
router.post("/signup", controller.postSignup);

// POST '/user/signin'
router.post("/signin", controller.postSignin);

// POST '/user/profile'
router.post("/profile", controller.postProfile);

// PATCH '/user/profile/edit'
router.patch("/profile/edit", controller.patchProfile);

// DELETE '/user/profile/delete'
router.delete("/profile/delete", controller.deleteProfile);

module.exports = router;
