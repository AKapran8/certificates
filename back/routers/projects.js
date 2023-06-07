const express = require("express");
const router = express.Router();

const certificatesController = require("../controllers/projects.controller");

router.get("/", certificatesController.getProjects);
router.get("/:key", certificatesController.getProjectByKey);

module.exports = router;