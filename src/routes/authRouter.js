const express = require("express");

const authController = require("../controllers/authController");

const router = express.Router();

router.get("/hello", authController.loginGet);
router.post("/hello", authController.loginPost);
router.get("/register", authController.registerGet);

router.post("/register", authController.registerPost);

module.exports = router;
