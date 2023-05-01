const express = require("express");
const database = require("../config/database");
const bodyParser = require("body-parser");
const cors = require("cors");
const corsOptions = require("../config/corsOptions");
const logger = require("morgan");
const compression = require("compression");
const path = require("path");
const os = require("os");
const app = express();

//calling database
database();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(logger("short"));
app.use(bodyParser.json({ limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
console.log(path.join(__dirname, ".." + "/public"));
app.use(express.static(path.join(__dirname, ".." + "/public")));
app.use(cors(corsOptions));
app.use(compression({ filter: shouldCompress, level: 8 }));

function shouldCompress(req, res) {
  if (req.headers["x-no-compression"]) {
    // don't compress responses with this request header
    return false;
  }

  // fallback to standard filter function
  return compression.filter(req, res);
}

app.use(function (req, res, next) {
  res.removeHeader("X-Powered-By", false);
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, DELETE, OPTIONS"
  );
  next();
});

//user routes
app.use("/api/v1/", require("../routes/user.routes"));
app.get("/", (req, res) => res.send("Hello World!"));

module.exports = app;
