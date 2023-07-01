const bcrypt = require("bcrypt");
const { User } = require("../../../db");
const { Op } = require("sequelize");

module.exports = async (username, email, password) => {
  if (!(username || email || password)) {
    throw new Error("Missing data.");
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const [newUser, alreadyExists] = await User.findOrCreate({
    where: { [Op.or]: [{ username }, { email }] },
    defaults: { username, email, passwordHash },
  });

  if (alreadyExists) {
    return {
      message: "User created succesfully.",
      accessToken: true,
      userId: newUser.id,
    };
  } else {
    throw new Error("User already exist.");
  }
};
