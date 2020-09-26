const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  console.log("Hi!");
  res.send("Hello world");
});

app.get("/status", (req, res) => {
  res.status(200).json({
    message: "OK",
    status: 200,
  });
});

app.post("/signup", (req, res, next) => {
  console.log(req.body);
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

app.post("/login", (req, res) => {
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

app.post("/logout", (req, res) => {
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

app.post("/token", (req, res) => {
  if (!req.body || !req.body.refreshToken) {
    res.status(400).json({
      message: "Invalid body",
      status: 400,
    });
  } else {
      const { refreshToken } = req.body
    res.status(200).json({
      message: `Refresh token requested for token: ${refreshToken}`,
      status: 200,
    });
  }
});

app.post("/forgot-password", (req, res) => {
    if (!req.body || !req.body.email) {
      res.status(400).json({
        message: "Invalid body",
        status: 400,
      });
    } else {
      const { email } = req.body;
      res.status(200).json({
        message: `Forgotten password requested for email: ${email}`,
        status: 200,
      });
    }
});

app.post("/reset-password", (req, res) => {
    if (!req.body || !req.body.email) {
      res.status(400).json({
        message: "Invalid body",
        status: 400,
      });
    } else {
      const { email } = req.body;
      res.status(200).json({
        message: `Password reset requested for email: ${email}`,
        status: 200,
      });
    }
});

// CATCH ALL OTHER ROUTES

app.use((req, res) => {
  res.status(404).json({
    message: "404 PAGE NOT FOUND",
    status: 404,
  });
});

// HANDLE ERRORS

app.use((error, req, res, next) => {
  console.log(error);
  res.status(error.status || 500).json({
    error: error.message,
    status: 500,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
