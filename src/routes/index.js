const express = require("express");
const router = express.Router();
const translateController = require("../controllers/translateController");

router.get("/hello-rest/", translateController.getPairByLanguage);
router.get("/hello/", translateController.getPairByLanguage);
router.get("/", function (req, res) {
  return res.redirect("/secure/hello");
});
module.exports = router;
