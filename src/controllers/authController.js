const UserModel = require("../models/user");
const LangWordPairModel = require("../models/langWordPair");

exports.getPairByLanguage = async (req, res) => {
  if (Object.keys(req?.query).length === 0) {
    await LangWordPairModel.findOne({ lang: "EN" }).then((pair) => {
      return res.json(200, pair.word);
    });
  } else {
    LangWordPairModel.findOne({ lang: req.query?.lang }).then((pair) => {
      return res.json(200, pair.word);
    });
  }
};

exports.loginPost = async function (req, res) {
  await UserModel.findOne({
    username: req.body?.username,
    password: req.body?.password,
  }).then((doMatch) => {
    if (doMatch) {
      return res.redirect("/admin");
    }
    return res.status(400).json({ error: "Invalid Email or Password!" });
  });
};
exports.registerPost = async function (req, res) {
  await UserModel.create(req.body, function (err) {
    if (err) throw err;
    console.log("");
    return res.status(200).json({ info: "Successfully registered in!" });
  });
};
