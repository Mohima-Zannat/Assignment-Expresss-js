const express = require("express");
const { getHelloWorld, generateToken, postResponse } = require("../controllers/authController");

const router = express.Router();

router.get("/hello", getHelloWorld);
router.get("/token", generateToken);
router.post("/post", postResponse);

module.exports = router;
