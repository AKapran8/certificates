const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const certificatesRouters = require("./back/routers/certification");
const projectsRouters = require("./back/routers/projects");
const CVRouters = require("./back/routers/cv");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/back/files'));
app.use(express.static(__dirname + '/build'));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  next();
});

app.use("/api/certificates", certificatesRouters)
app.use("/api/projects", projectsRouters)
app.use("/api/cv", CVRouters)
app.use("*", async (_, res, next) => {
  res.sendFile(path.join(__dirname + '/build/index.html'));
});

module.exports = app;
