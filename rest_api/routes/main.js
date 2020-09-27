const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Hi!");
  res.send("Hello world");
});

router.get("/status", (req, res) => {
  res.status(200).json({
    message: "OK",
    status: 200,
  });
});

router.post("/signup", (req, res, next) => {
  if (!req.body) {
    res.status(400).json({
      message: "Invalid body",
      status: 400,
    });
  } else {
    res.status(200).json({
      message: "OK",
      status: 200,
    });
  }
});

router.post("/login", (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Invalid body",
      status: 400,
    });
  } else {
    res.status(200).json({
      message: "OK",
      status: 200,
    });
  }
});

router.post("/logout", (req, res) => {
  if (!req.body) {
    res.status(400).json({
      message: "Invalid body",
      status: 400,
    });
  } else {
    res.status(200).json({
      message: "OK",
      status: 200,
    });
  }
});

router.post("/token", (req, res) => {
  if (!req.body || !req.body.refreshToken) {
    res.status(400).json({
      message: "Invalid body",
      status: 400,
    });
  } else {
    const { refreshToken } = req.body;
    res.status(200).json({
      message: `Refresh token requested for token: ${refreshToken}`,
      status: 200,
    });
  }
});

module.exports = router