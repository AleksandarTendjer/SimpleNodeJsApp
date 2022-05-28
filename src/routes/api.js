const express = require("express");
const adminRouter = require("./admin");

const app = express();

app.use("/admin/", adminRouter);

module.exports = app;
