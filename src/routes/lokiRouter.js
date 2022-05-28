const express = require("express");

const lokiController = require("../controllers/lokiController");
const router = express.Router();

router.get("/hello-rest/", lokiController.getPairByLanguage);
router.get("/hello/", lokiController.getPairByLanguage);

router.post("/secure/hello", lokiController.loginPost);
router.post("/secure/register", lokiController.registerPost);

module.exports = router;
