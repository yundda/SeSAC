const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.index);
router.post("/login", controller.register);

module.exports = router;