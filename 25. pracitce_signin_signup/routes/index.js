const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

// GET '/'
router.get("/", controller.getIndex);
// GET '/signup'
router.get("/signup", controller.getSignup);

// GET '/signin'
router.get("/signin", controller.getSignin);

// // GET '/profile'
// router.get("/profile", controller.getProfile);

// POST 'signup'
router.post("/signup", controller.postSignup);

// POST 'signin'
router.post("/signin", controller.postSignin);

// GET '/logout'
router.get("/logout", controller.getLogout);

// // POST '/profile'
// router.post("/profile", controller.postProfile);
module.exports = router;
