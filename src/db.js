const loki = require("lokijs");
const db = new loki("app_data/langWordPairs.json", {
  autosave: true,
  autoload: true,
  throttledSaves: true,
});
module.exports = db;
