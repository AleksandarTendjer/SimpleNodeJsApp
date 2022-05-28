const lokiModel = require("../models/lokiModel");

exports.getDashboard = async function (req, res) {
  return res.status(200).render("admin");
};
exports.insertPairPost = async function (req, res) {
  lokiModel.getLangWordPair(req.body?.lang).then(function (pair) {
    if (pair !== null) {
      return res
        .status(400)
        .json({ error: "The Language pair already exists!" });
    }
    lokiModel
      .insertLangWordPair(req.body.lang, req.body?.word)
      .then(function (pair) {
        if (pair !== null) {
          return res
            .status(200)
            .json({ info: "Successfuly inserted the pair!" });
        }
        return res.status(500).json({ error: "Couldn't insert the pair!" });
      });
  });
};
