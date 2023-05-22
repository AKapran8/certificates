const express = require("express");
const router = express.Router();

const certifController = require("../controllers/certifications.controller");

// Enpoint url with prexis "/api" must be equal to middleware/navbar.js navbarlistData endpoint
router.get("/bootstrap", certifController.getBootstrap);
router.get("/logos", certifController.getLogos);
router.get("/polytechnic", certifController.getPolytechnic);
router.get("/deutsch-a2", certifController.getA2Deutsch);
router.get("/mean", certifController.getMEAN);

module.exports = router;
