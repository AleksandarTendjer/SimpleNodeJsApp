const LangWordPairModel = require("../models/langWordPair");

exports.getPairByLanguage = async (req, res) => {
  if (Object.keys(req?.query).length === 0) {
    await LangWordPairModel.findOne({ lang: "EN" }).then((pair) => {
      return res.status(200).json(pair.word);
    });
  } else {
    LangWordPairModel.findOne({ lang: req.query?.target }).then((pair) => {
      return res.status(200).json(pair?.word);
    });
  }
};
