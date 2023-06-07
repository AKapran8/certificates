const express = require("express");
const router = express.Router();

const certificatesController = require("../controllers/certificates.controller");

router.get("/:key", certificatesController.getCertificateByKey);

module.exports = router;