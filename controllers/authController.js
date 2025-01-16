const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

const getHelloWorld = (req, res) => {
  res.status(200).json({ message: "Hello World" });
};

const generateToken = (req, res) => {
  const payload = { user: "testUser" };
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

  res.status(200).json({ token });
};

const postResponse = (req, res) => {
  res.status(200).json({ message: "I am post body" });
};

module.exports = { getHelloWorld, generateToken, postResponse };
