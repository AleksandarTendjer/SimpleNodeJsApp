const lokiController = require("../controllers/lokiController");

module.exports = function (app) {
  app.get("/hello-rest/:lang", lokiController.getPairByLanguage);
  app.get("/hello/:lang", lokiController.getPairByLanguage);
};
