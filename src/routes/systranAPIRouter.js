var express = require("express");
var request = require("request");

var router = express.Router();
const apiKey = process.env.SYSTRAN_API_KEY;
router.post("/", async (req, res, next) => {
  const translated = await translate(req.query.source, "en", req.query.content);
  res.status(200).json({ info: "Translated into:" + translated });
});

const translate = (source, target, content) =>
  new Promise((resolve, reject) =>
    request(
      `https://api-platform.systran.net/translation/text/translate?input=${content}&source=${source}&target=${target}&key=${apiKey}`,
      (err, data, body) => {
        if (err) return reject(err);

        try {
          return resolve(JSON.parse(body).outputs[0].output);
        } catch (e) {
          return reject(e);
        }
      }
    )
  );
module.exports = router;
