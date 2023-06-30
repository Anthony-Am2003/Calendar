const loginController = require("../../controllers/post/postLoginController");

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!(username || password)) {
      return res.status(400).json({ error: "Missing data." });
    }

    const data = await loginController(username, password);

    return res.status(200).json(data);
  } catch ({ message }) {
    return res.status(500).json({ error: message });
  }
};
