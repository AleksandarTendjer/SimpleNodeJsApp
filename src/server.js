const express = require("express");
const app = require("./app");

const PORT = process.env.PORT || 8080;

// Start the server

const serve = () =>
  app.listen(PORT, () => {
    logger.info(`🌏 Express server started at http://localhost:${PORT}`);
  });
