const express = require("express");
const router = express.Router();

const utilsController = require("./../controllers/utils.controller");

router.get("/navbar", utilsController.getNavbarData);
router.get("/technologies", utilsController.getTechnologies);

module.exports = router;