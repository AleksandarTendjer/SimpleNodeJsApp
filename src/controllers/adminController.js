const LangWordPairModel = require("../models/langWordPair");

exports.getDashboard = async function (req, res) {
  return res.status(200).render("admin");
};

exports.insertPairPost = async function (req, res) {
  LangWordPairModel.findOne({ lang: req.body?.lang }).then((pair) => {
    if (pair) {
      return res
        .status(400)
        .json({ error: "The Language pair already exists!" });
    }
    const lang = req.body?.lang.toUpperCase();
    const word = req.body?.word;
    pair = new LangWordPairModel({
      lang: lang,
      word: word,
    });
    LangWordPairModel.create(pair, function (err) {
      if (err) throw err;
      console.log("");
      return res.status(200).json({ info: "Successfuly inserted the pair!" });
    });
  });
};
