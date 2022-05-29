const express = require("express");

const authController = require("../controllers/authController");
const router = express.Router();

router.get("/hello-rest/", authController.getPairByLanguage);
router.get("/hello/", authController.getPairByLanguage);

router.post("/secure/hello", authController.loginPost);
router.post("/secure/register", authController.registerPost);

module.exports = router;
