const dotenv = require("dotenv");
dotenv.config();

const app = require("./app");
const http = require("http");

// DB connection
const MONGO_URI = process.env.MONGO_URI;
const mongoose = require("mongoose");

// Remove the warning with Promise
mongoose.Promise = global.Promise;

// Connect the db with the url provide
try {
  mongoose.connect(MONGO_URI);
} catch (err) {
  mongoose.createConnection(MONGO_URI);
}

mongoose.connection
  .once("open", () => console.log(`🗄️ MongoDB running at ${MONGO_URI}`))
  .on("error", (e) => {
    throw e;
  });

// Start the server
const PORT = process.env.PORT || 8080;

app.set("port", PORT);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`🌏 Express server started at http://localhost:${PORT}`);
});
