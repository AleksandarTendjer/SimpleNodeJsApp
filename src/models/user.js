const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * User schema
 */

const userSchema = new Schema({
  username: { type: String, default: "" },
  password: { type: String, default: "" },
});
/**
 * Methods
 */

userSchema.method({});

/**
 * Register
 */

module.exports = User = mongoose.model("User", userSchema);
