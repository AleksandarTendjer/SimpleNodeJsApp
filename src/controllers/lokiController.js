const lokiModel = require("../models/lokiModel");

exports.getPairByLanguage = async (req, res) => {
  if (Object.keys(req?.query).length === 0) {
    lokiModel.getLangWordPair("EN").then(function (pair) {
      return res.json(200, pair.word);
    });
  } else {
    lokiModel.getLangWordPair(req.query?.lang).then(function (pair) {
      return res.json(200, pair.word);
    });
  }
};

exports.loginPost = async function (req, res) {
  await lokiModel
    .checkIfUserExists(req.body?.username, req.body?.password)
    .then(function (doMatch) {
      if (doMatch) {
        return res.redirect("/admin");
      }
      return res.status(400).json({ error: "Invalid Email or Password!" });
    });
};
exports.registerPost = async function (req, res) {
  await lokiModel
    .insertUser(req.body?.username, req.body?.password)
    .then(function (user) {
      if (user !== null) {
        res.status(200).json({ info: "Successfully registered in!" });
        return;
      } else {
        res.status(500).json({ info: "Not able to register!" });
        return;
      }
    });
};
