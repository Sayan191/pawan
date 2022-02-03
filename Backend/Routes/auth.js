var express = require("express");
var router = express.Router();
const {login, signout} = require("../Controllers/auth");

router.post("/login", login);

router.get("/logout", signout);

module.exports = router;