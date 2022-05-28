const db = require("../lokiDb");
const bcrypt = require("bcryptjs");

exports.getLangWordPair = async function (lang) {
  try {
    lang = lang.toUpperCase();
    const langWordPairs = db.getCollection("langWordPairs");
    let pair = langWordPairs.findOne({ lang: lang });
    return pair;
  } catch (e) {
    throw e;
  }
};

exports.insertUser = async function (username, password) {
  try {
    return await bcrypt.hash(password, 5).then(function (hashedpassword) {
      const userCollection = db.getCollection("users");
      let pair = userCollection.insertOne({
        username: username,
        password: hashedpassword,
      });
      return pair;
    });
  } catch (e) {
    throw e;
  }
};
exports.checkIfUserExists = async function (username, password) {
  try {
    const userCollection = db.getCollection("users");
    let user = userCollection.findOne({
      username: username,
    });
    if (user != null) {
      return await bcrypt.compare(password, user.password).then((doMatch) => {
        return doMatch;
      });
    }
    return false;
  } catch (e) {
    throw e;
  }
};
exports.insertLangWordPair = async function (language, word) {
  try {
    const langWordPairCollection = db.getCollection("langWordPairs");
    let pair = langWordPairCollection.insertOne({
      lang: language,
      word: word,
    });
    return pair;
  } catch (e) {
    throw e;
  }
};
