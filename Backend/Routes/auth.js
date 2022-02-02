var express = require("express");
var router = express.Router();
const {login, signout, check} = require("../Controllers/auth");

router.post("/login", check ,login);

router.get("/logout", signout);

module.exports = router;