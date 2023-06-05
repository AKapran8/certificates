const express = require("express");
const router = express.Router();

const certificatesController = require("../controllers/certifications.controller");

router.get("/", certificatesController.getCertificates);
router.get("/bootstrap", certificatesController.getBootstrapCertificate);
router.get("/logos", certificatesController.getLogosCertificate);
router.get("/polytechnic", certificatesController.getPolytechnicCertificate);
router.get("/german-a2", certificatesController.getGermanA2Certificate);
router.get("/mean", certificatesController.getMEANCertificate);
router.get("/german-b1", certificatesController.getB1TeilnahmebestatigungCertificate);
router.get("/react-calculator", certificatesController.getCalculatorCertificate);

module.exports = router;