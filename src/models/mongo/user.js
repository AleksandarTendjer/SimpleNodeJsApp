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

mongoose.model("User", userSchema);
