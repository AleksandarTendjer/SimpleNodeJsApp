const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * User schema
 */

const langWordPairSchema = new Schema({
  lang: { type: String, unique: true, default: "" },
  word: { type: String, default: "" },
});
/**
 * Methods
 */

langWordPairSchema.method({});

/**
 * Register
 */

module.exports = LangWordPair = mongoose.model(
  "LangWordPair",
  langWordPairSchema
);
