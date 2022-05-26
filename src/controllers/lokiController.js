const db = require("../db");

exports.getPairByLanguage = function (req, res) {
  return new Promise(function (fulfill, reject) {
    db.loadDatabase({}, function () {
      try {
        const langWordPairs = db.getCollection("langWordPairs");
        var pair = langWordPairs.findOne({ lang: lang });
        fulfill(pair);
      } catch (ex) {
        reject(ex);
      }
    });
  });
};
