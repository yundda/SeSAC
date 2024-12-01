const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

router.get("/", controller.getIndex);
router.post("/result", controller.getResult);

module.exports = router;
