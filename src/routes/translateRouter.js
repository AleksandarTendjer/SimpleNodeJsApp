const express = require("express");
const systranTranslateController = require("../controllers/translateSystranApiController");
const localTranslateController = require("../controllers/translateController");

var router = express.Router();

router.get("/getTranslation/", (req, res) => {
  if (process.env.NODE_ENV === "TEST")
    return systranTranslateController.getTranlsation(req, res);
  return localTranslateController.getPairByLanguage(req, res);
});

router.get("/getLanguages/", systranTranslateController.getSupportedLanguages);

module.exports = router;
