const express = require("express");
const router = express.Router();

router.get("", async (req, res, next) => {
  const data = {
    title: "Error page",
  };

  res.render("error.ejs", { data });
});

module.exports = router;
