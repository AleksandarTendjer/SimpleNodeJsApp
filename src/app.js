const bodyParser = require("body-parser");
const compression = require("compression");
const path = require("path");
const express = require("express");
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/api");
const lokiRouter = require("./routes/lokiRouter");

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", __dirname + "/views");

//Route Prefixes
//app.use("/", indexRouter);
app.use("/", lokiRouter);
app.use("/api/", apiRouter);

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

module.exports = app;
