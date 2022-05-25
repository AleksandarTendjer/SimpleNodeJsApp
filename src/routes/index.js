var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/hello", function (req, res) {
  res.render("index", { title: "Hello world" });
});

router.get("/hello-rest", function (req, res) {
  res.json({ message: "Hello world" });
});
module.exports = router;
