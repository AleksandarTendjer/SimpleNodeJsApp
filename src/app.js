const bodyParser = require("body-parser");
const compression = require("compression");
const path = require("path");
const express = require("express");
const indexRouter = require("./routes/index");
const apiRouter = require("./routes/adminRouter");
const lokiRouter = require("./routes/lokiRouter");

const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//app.set("views", __dirname + "\views");
app.set("views", path.join(__dirname, "views"));
// Set view engine as EJS
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//Route Prefixes
//app.use("/", indexRouter);
app.use("/", lokiRouter);
app.use("/admin", apiRouter);

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

module.exports = app;
