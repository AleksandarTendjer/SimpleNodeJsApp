const bodyParser = require("body-parser");
const compression = require("compression");
const path = require("path");
const express = require("express");
const indexRouter = require("./routes/index");
const mongoAdminRouter = require("./routes/adminRouter");
const mongoAuthRouter = require("./routes/authRouter");
const systranRouter = require("./routes/systranAPIRouter");
const app = express();

app.use(compression());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("views", path.join(__dirname, "views"));
// Set view engine as EJS
app.engine("html", require("ejs").renderFile);
app.set("view engine", "html");

//Route Prefixes
//app.use("/", indexRouter);
app.use("/", mongoAuthRouter);
app.use("/admin", mongoAdminRouter);
app.use("/translate", systranRouter);

app.use(
  express.static(path.join(__dirname, "public"), { maxAge: 31557600000 })
);

module.exports = app;
