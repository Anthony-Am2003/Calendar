const registerController = require("../../controllers/post/postRegisterController");

module.exports = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    const data = await registerController(username, email, password);

    return res.status(201).json(data);
  } catch ({ message }) {
    return res.status(500).json({ error: message });
  }
};
