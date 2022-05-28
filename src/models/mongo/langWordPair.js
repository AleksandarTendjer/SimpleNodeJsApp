const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * User schema
 */

const langWordPairSchema = new Schema({
  lang: { type: String, default: "" },
  word: { type: String, default: "" },
});
/**
 * Methods
 */

langWordPairSchema.method({});

/**
 * Register
 */

mongoose.model("LangWordPair", langWordPairSchema);
