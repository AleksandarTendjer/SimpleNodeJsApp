const express = require("express");

const authController = require("../controllers/authController");
const translateController = require("../controllers/translateController");

const router = express.Router();
router.get("/hello-rest/", translateController.getPairByLanguage);
router.get("/hello/", translateController.getPairByLanguage);
router.get("/", function (req, res) {
  return res.redirect("/secure/hello");
});
router.get("/secure/hello", authController.loginGet);
router.post("/secure/hello", authController.loginPost);
router.post("/secure/register", authController.registerPost);

module.exports = router;
