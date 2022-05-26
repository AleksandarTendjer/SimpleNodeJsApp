const express = require("express");

const app = require("./app");
var http = require("http");

// Start the server

const PORT = process.env.PORT || 8080;

app.set("port", PORT);

const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`🌏 Express server started at http://localhost:${PORT}`);
});
