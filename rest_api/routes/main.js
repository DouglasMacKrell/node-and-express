const express = require("express");
const passport = require("passport");
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

router.post(
  "/signup",
  passport.authenticate("signup", { session: false }),
  (request, response, next) => {
    response.status(200).json({ message: "signup successful", status: 200 });
  }
);

router.post("/login", (request, response, next) => {
  passport.authenticate("login", (error, user) => {
    try {
      if (error) {
        return next(error);
      }
      if (!user) {
        return next(new Error("email and password are required"));
      }
      request.login(user, { session: false }, (err) => {
        if (err) return next(err);
        return response.status(200).json({ user, status: 200 });
      });
    } catch (err) {
      console.log(err);
      return next(err);
    }
  })(request, response, next);


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

module.exports = router;
