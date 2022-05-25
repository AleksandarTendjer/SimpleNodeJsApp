var express = require("express");
var adminRouter = require("./admin");

var app = express();

app.use("/admin/", adminRouter);

module.exports = app;
