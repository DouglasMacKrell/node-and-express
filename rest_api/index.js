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

app.post("/signup", (req, res) => {
  res.status(200).json({
    message: "OK",
    status: 200,
  });
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
