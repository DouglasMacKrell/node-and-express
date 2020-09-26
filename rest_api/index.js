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
    next(new Error('test'))
//   res.status(200).json({
//     message: "OK",
//     status: 200,
//   });
});

app.post("/login", (req, res) => {
  res.status(200).json({
    message: "OK",
    status: 200,
  });
});

app.post("/logout", (req, res) => {
  res.status(200).json({
    message: "OK",
    status: 200,
  });
});

app.post("/token", (req, res) => {
  res.status(200).json({
    message: "OK",
    status: 200,
  });
});

app.post("/forgot-password", (req, res) => {
  res.status(200).json({
    message: "OK",
    status: 200,
  });
});

app.post("/reset-password", (req, res) => {
  res.status(200).json({
    message: "OK",
    status: 200,
  });
});

// CATCH ALL OTHER ROUTES 

app.use((req, res) => {
    res.status(404).json({
        message: "404 PAGE NOT FOUND",
        status: 404
    })
})

// HANDLE ERRORS

app.use((error, req, res, next) => {
    console.log(error)
  res.status(error.status || 500).json({
    error: error.message,
    status: 500,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
