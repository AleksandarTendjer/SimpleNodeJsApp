// DB connection
var MONGODB_URL = process.env.MONGODB_URL;
var mongoose = require("mongoose");
var db = mongoose.connection;

// Remove the warning with Promise
mongoose.Promise = global.Promise;
// Connect the db with the url provide
try {
  mongoose.connect(constants.MONGODB_URL);
} catch (err) {
  mongoose.createConnection(constants.MONGODB_URL);
}

mongoose.connection
  .once("open", () => console.log("MongoDB Running"))
  .on("error", (e) => {
    throw e;
  });
