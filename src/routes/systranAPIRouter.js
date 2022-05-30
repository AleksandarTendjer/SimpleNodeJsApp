const express = require("express");
const systranController = require("../controllers/systranApiController");
var router = express.Router();
router.post("/getTranslation/", systranController.getTranlsation);
router.get("/getLanguages/", systranController.getSupportedLanguages);
module.exports = router;
