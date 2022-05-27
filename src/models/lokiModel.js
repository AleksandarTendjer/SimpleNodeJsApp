const db = require("../db");

exports.retLangWordPairs = async function (lang) {
  try {
    const langWordPairs = db.getCollection("langWordPairs");
    let pair = langWordPairs.findOne({ lang: lang });
    return pair;
  } catch (e) {
    throw e;
  }
};
