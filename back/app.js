const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const certificatesRouters = require("./routers/certification");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '/files')));
app.use(express.static(path.join(__dirname, '/..', "index.html")));

app.use((_, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  next();
});

app.use("/api/certificates", certificatesRouters)
app.use("*", async (_, res) => {
  res.sendFile(path.join(__dirname, '/..', "index.html"));
});

module.exports = app;
