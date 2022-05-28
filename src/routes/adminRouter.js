const express = require("express");
const adminController = require("../controllers/adminController");

let router = express.Router();
//TODO- add routes.
router.get("/", adminController.getDashboard);
router.post("/", adminController.insertPairPost);

module.exports = router;
