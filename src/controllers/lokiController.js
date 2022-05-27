const lokiModel = require("../models/lokiModel");
exports.getPairByLanguage = async (req, res) => {
  if (Object.keys(req?.query).length === 0) {
    lokiModel.retLangWordPairs("EN").then(function (pair) {
      return res.json(200, pair.word);
    });
  } else {
    lokiModel.retLangWordPairs(req.query?.lang).then(function (pair) {
      return res.json(200, pair.word);
    });
  }
};
