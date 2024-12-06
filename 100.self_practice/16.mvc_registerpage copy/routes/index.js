const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.index);
router.post("/login", controller.login);
router.post("/login2", controller.login2);

module.exports = router;
