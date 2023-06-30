const bcrypt = require("bcrypt");
const { User } = require("../../db");
const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    if (!(username || password)) {
      return res.status(400).json({ error: "Missing data." });
    }

    const userFound = await User.findOne({ where: { username } });

    if (userFound) {
      const isPasswordCorrect = await bcrypt.compare(
        password,
        userFound.passwordHash
      );

      if (!(userFound && isPasswordCorrect)) {
        return res.status(401).json({ error: "Invalid username or password." });
      }

      const userForToken = {
        id: userFound.id,
        username: userFound.username,
      };

      const token = await jwt.sign(userForToken, process.env.SECRET);

      return res.status(200).json({
        data: {
          id: userFound.id,
          username: userFound.username,
          token,
        },
        message: "Loggin in...",
      });
    } else {
      return res.status(401).json({ error: "Invalid username or password." });
    }
  } catch ({ message }) {
    return res.status(500).json({ error: message });
  }
};
