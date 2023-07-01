const bcrypt = require("bcrypt");
const { User } = require("../../../db");
const { Op } = require("sequelize");

module.exports = async (username, email, password) => {
  if (!(username || email || password)) {
    throw new Error("Missing data.");
  }

  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const [newUser, wasCreated] = await User.findOrCreate({
    where: { [Op.or]: [{ username }, { email }] },
    defaults: { username, email, passwordHash },
  });

  if (wasCreated) {
    return {
      message: "User created succesfully.",
    };
  } else {
    throw new Error("User already exist.");
  }
};
