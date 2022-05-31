const UserModel = require("../models/user");
const bcrypt = require("bcryptjs");

exports.loginPost = async function (req, res) {
  await UserModel.findOne({
    username: req.body?.username,
  }).then((user) => {
    bcrypt.compare(req.body.password, user?.password).then((doMatch) => {
      if (doMatch) {
        return res.redirect("/admin");
      }
      return res.status(400).json({ error: "Invalid Email or Password!" });
    });
  });
};

exports.loginGet = async function (req, res) {
  return res.status(200).render("login");
};
exports.registerPost = async function (req, res) {
  const hashedpassword = await bcrypt.hash(req.body?.password, 5);
  await UserModel.create(
    { username: req.body?.username, password: hashedpassword },
    function (err) {
      if (err)
        return res.status(400).json({ info: "The user already exists!" });

      return res.status(200).json({ info: "Successfully registered in!" });
    }
  );
};
