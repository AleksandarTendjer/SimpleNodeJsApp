const express = require("express");
const router = express.Router();

/* GET home page. */
router.get("/hello", function (req, res) {
  res.set("Content-Type", "text/html");
  res.send(Buffer.from("<h1>Hello World</h1>"));
});

router.get("/hello-rest", function (req, res) {
  res.json({ message: "Hello world" });
});

module.exports = router;
