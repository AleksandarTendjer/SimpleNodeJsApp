const loki = require("lokijs");
const db = new loki("app_data/langWordPairs.json", {
  autosave: true,
  autoload: true,
  throttledSaves: true,
});

var collection = db.addCollection("langWordPairs", {
  unique: ["lang"],
  autoupdate: true,
});

collection.insert({ lang: "EN", word: "Hello World!" });
collection.insert({ lang: "SLO", word: "Zdravo svete!" });
collection.insert({ lang: "ESP", word: "Hola Mundo!" });
collection.insert({ lang: "NE", word: "Hallo Wereld!" });
collection.insert({ lang: "DE", word: "Halo Welt!" });
collection.insert({ lang: "FR", word: "Hola Mundo!" });
collection.insert({ lang: "PL", word: "Witaj świecie!" });
collection.insert({ lang: "PT", word: "Ola Mundo!" });
collection.insert({ lang: "N", word: "Hei Verden!" });
collection.insert({ lang: "H", word: "Helló Világ!" });
collection.insert({ lang: "LT", word: "Sveika pasaule!" });

module.exports = db;
