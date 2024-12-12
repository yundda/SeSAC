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
router.get("/profile", controller.getProfile);

// POST 'signup'
router.post("/signup", controller.postSignup);

// POST 'signin'
router.post("/signin", controller.postSignin);

// GET '/logout'
router.get("/logout", controller.getLogout);

// PATCH '/patchUser',
router.patch("/patchUser", controller.patchUser);

// DELETE '/deleteUser',
router.delete("/deleteUser", controller.deleteUser);
module.exports = router;
