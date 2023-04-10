const express = require("express");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const router = express.Router();
const Auth = require("../models/Auth");

const secretKey = "$3cr3t";

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    user = await Auth.findOne({ email: email });
    if (!user) {
      return res
        .status(400)
        .json({ status: false, msg: "Incorrect Credentials" });
    }
    const hash = CryptoJS.SHA256(password).toString();
    const storedHash = user.password;
    if (hash === storedHash) {
      const { name, email } = user;
      const token = jwt.sign({ name, email }, secretKey);
      const status = true;
      const msg = "Login Successful";
      return res.send({ status, msg, token });
    } else {
      return res
        .status(400)
        .json({ status: false, msg: "Incorrect Credentials" });
    }
    res.send(hash);
  } catch (e) {
    return res
      .status(400)
      .json({ status: false, msg: "Internal Server Error" });
  }
});

router.post("/signup", async (req, res) => {
  const { name, email, password } = req.body;
  try {
    olduser = await Auth.findOne({ email: email });
    if (olduser) {
      return res
        .status(400)
        .json({ status: false, msg: "Email Already Registered" });
    }
    const hash = CryptoJS.SHA256(password).toString();
    const newUser = new Auth({
      name: name,
      email: email,
      password: hash,
    });
    await newUser.save();
    return res
      .status(200)
      .json({ status: true, msg: "User Registered Successfully" });
  } catch (e) {
    return res
      .status(400)
      .json({ status: false, msg: "Internal Server Error" });
  }
});

router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Protected route", user: req.user });
});

function verifyToken(req, res, next) {
  const token = req.headers["auth-token"];

  if (!token) {
    return res
      .status(401)
      .json({ status: false, msg: "Auth Token Not Provided" });
  }

  try {
    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    next();
  } catch (err) {
    return res
      .status(401)
      .json({ status: false, msg: "This Token Is Not Valid" +err});
  }
}

module.exports = router;
