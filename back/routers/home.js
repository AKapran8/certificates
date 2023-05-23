const express = require("express");
const router = express.Router();

router.get("", async (req, res, next) => {
  const data = {
    title: "Home page",
  };
  res.render("home.ejs", { data });
});

module.exports = router;
