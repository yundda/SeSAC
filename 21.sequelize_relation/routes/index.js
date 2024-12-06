const express = require("express");
const controller = require("../controller/Cmain");
const router = express.Router();

// GET '/'
router.get("/", controller.main);

module.exports = router;
