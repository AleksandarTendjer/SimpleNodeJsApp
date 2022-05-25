let bodyParser = require("body-parser");
let compression = require("compression");
let path = require("path");
let express = require("express");
let indexRouter = require("./routes/index");
let apiRouter = require("./routes/api");

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");

//Route Prefixes
app.use("/", indexRouter);
app.use("/api/", apiRouter);

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

module.exports = app;
