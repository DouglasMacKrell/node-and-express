require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const routes = require("./routes/main");
const passwordRoutes = require("./routes/password");

const app = express();
const PORT = process.env.PORT || 3000;

// UPDATE EXPRESS SETTINGS
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(cookieParser());
app.use(cors({ credentials: true, origin: process.env.CORS_ORIGIN }));

// REQUIRE PASSWORD AUTH

require("./auth/auth");

// SETTING UP ROUTES

app.use("/", routes);
app.use("/", passwordRoutes);

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
