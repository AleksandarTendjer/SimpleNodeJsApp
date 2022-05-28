const loki = require("lokijs");

const lokiDB = new loki("app_data/langWordPairs.json", {
  autosave: true,
  autoload: true,
  throttledSaves: true,
});

let langWordPaircollection = lokiDB.addCollection("langWordPairs", {
  unique: ["lang"],
  autoupdate: true,
});

langWordPaircollection.insert({ lang: "EN", word: "Hello World!" });
langWordPaircollection.insert({ lang: "SLO", word: "Zdravo svete!" });
langWordPaircollection.insert({ lang: "ESP", word: "Hola Mundo!" });
langWordPaircollection.insert({ lang: "NE", word: "Hallo Wereld!" });
langWordPaircollection.insert({ lang: "DE", word: "Halo Welt!" });
langWordPaircollection.insert({ lang: "FR", word: "Hola Mundo!" });
langWordPaircollection.insert({ lang: "PL", word: "Witaj świecie!" });
langWordPaircollection.insert({ lang: "PT", word: "Ola Mundo!" });
langWordPaircollection.insert({ lang: "N", word: "Hei Verden!" });
langWordPaircollection.insert({ lang: "H", word: "Helló Világ!" });
langWordPaircollection.insert({ lang: "LT", word: "Sveika pasaule!" });

let userCollection = lokiDB.addCollection("users", {
  unique: ["username"],
  autoupdate: true,
});

module.exports = lokiDB;
