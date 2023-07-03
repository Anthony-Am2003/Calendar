const loginController = require("../../controllers/post/postLoginController");

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const data = await loginController(username, password);

    return res.status(200).json(data);
  } catch ({ message }) {
    return res.status(500).json({ error: message });
  }
};
