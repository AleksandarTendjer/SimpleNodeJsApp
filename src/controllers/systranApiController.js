const apiKey = process.env.SYSTRAN_API_KEY;
request = require("request");
exports.getSupportedLanguages = async (req, res) => {
  const languages = await request.get(
    {
      url: "https://api-platform.systran.net/translation/supportedLanguages",
      qs: {
        key: apiKey,
      },
    },
    function (err, resp, body) {
      if (err || resp.statusCode !== 200) {
        cb(err || new Error(body || "Unable to get supported languages"));
        return;
      }

      try {
        body = JSON.parse(body);
      } catch (e) {
        cb(e);
        return;
      }

      return res.status(200).json(body);
    }
  );
  return languages;
};
exports.getTranlsation = async (req, res) => {
  const translated = await translate("en", req.query.target, req.query.content);
  if (translated)
    return res.status(200).json({ info: "Translated into:" + translated });
  return res.status(400).json({
    error:
      "Not able to translate :" + req.query.content + " to " + req.query.target,
  });
};

const translate = (source, target, content) =>
  new Promise((resolve, reject) =>
    request.post(
      {
        url: "https://api-platform.systran.net/translation/text/translate",
        qs: {
          key: apiKey,
          source: source || "auto",
          target: target,
          format: "text",
          input: content,
        },
      },
      (err, res, body) => {
        if (err || res.statusCode != 200) return null;

        try {
          //.outputs[0].output

          return resolve(JSON.parse(body));
        } catch (e) {
          return reject(e);
        }
      }
    )
  );
