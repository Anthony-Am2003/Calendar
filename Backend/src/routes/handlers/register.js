const bcrypt = require("bcrypt");
const { User } = require("../../db");
const { Op } = require("sequelize");

module.exports = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    if (!(username || email || password)) {
      return res.status(400).json({ error: "Missing data." });
    }

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const [newUser, alreadyExists] = await User.findOrCreate({
      where: { [Op.or]: [{ username }, { email }] },
      defaults: { username, email, passwordHash },
    });

    if (alreadyExists) {
      return res.status(201).json({
        message: "User created succesfully.",
        accessToken: true,
        userId: newUser.id,
      });
    } else {
      return res.status(409).json({ error: "User already exist." });
    }
  } catch ({ message }) {
    return res.status(500).json({ error: message });
  }
};
