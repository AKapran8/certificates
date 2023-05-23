const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const certifRouters = require("./routers/certification");
const homeRouter = require("./routers/home");
const errorRouter = require("./routers/error");

const navbarDataMiddleware = require("./middleware/navbar");

app.set("view engine", ".ejs");
app.set("views", path.join(__dirname, "templates"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/files", express.static(path.join("files")));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  next();
});

app.use("/api", navbarDataMiddleware, certifRouters);
app.use("", navbarDataMiddleware, homeRouter);
app.use("*", navbarDataMiddleware, errorRouter);

module.exports = app;
