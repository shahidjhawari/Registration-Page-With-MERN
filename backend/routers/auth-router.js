const express = require("express");
const router = express.Router();
const register = require("../controllers/auth-controllers")

router.route("/api/register").post(register.register);

module.exports = router;