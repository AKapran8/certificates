const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

const certificatesRouters = require("./routers/certification");
// const projectsRouters = require("./routers/projects");
// const CVRouters = require("./routers/cv");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/back/files'));
app.use(express.static(__dirname + '/build'));

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
// app.use("/api/projects", projectsRouters)
// app.use("/api/cv", CVRouters)
// app.use("*", async (_, res, next) => {
//   res.sendFile(path.join(__dirname + '/build/index.html'));
// });

module.exports = app;
