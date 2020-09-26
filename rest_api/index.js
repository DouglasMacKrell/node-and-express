const express = require("express");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/test", (req, res) => {
  res.send("test");
});

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});
