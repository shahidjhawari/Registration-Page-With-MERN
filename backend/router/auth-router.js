const express = require("express");
const router = express.Router();
const register = require("../controllers/auth-controllers");

router.route("/").get(register.register);

module.exports = router;