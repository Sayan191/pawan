var express = require("express");
var router = express.Router();
const {login} = require("../Controllers/auth");

router.post("/login", login);


module.exports = router;