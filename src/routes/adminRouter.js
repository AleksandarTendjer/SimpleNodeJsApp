const express = require("express");
const adminController = require("../controllers/adminController");

let router = express.Router();
//TODO- add routes.
router.get("/", adminController.getDashboard);

module.exports = router;
