const lokiModel = require("../models/lokiModel");
exports.getPairByLanguage = async (req, res) => {
  lokiModel.retLangWordPairs(req.query?.lang).then(function (pair) {
    return res.json(200, pair.word);
  });
};
