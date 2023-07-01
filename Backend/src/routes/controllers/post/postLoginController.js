const bcrypt = require("bcrypt");
const { User } = require("../../../db");
const jwt = require("jsonwebtoken");

module.exports = async (username, password) => {
  if (!(username || password)) {
    throw new Error("Missing data.");
  }

  const userToFind = await User.findOne({ where: { username } });

  if (userToFind) {
    const isPasswordCorrect = await bcrypt.compare(
      password,
      userToFind.passwordHash
    );

    if (!isPasswordCorrect) {
      throw new Error("Invalid username or password.");
    }

    const userForToken = {
      id: userToFind.id,
      username: userToFind.username,
    };

    const token = await jwt.sign(userForToken, process.env.SECRET, {
      expiresIn: 60 * 60 * 24 * 7,
    });

    return {
      userData: {
        id: userToFind.id,
        username: userToFind.username,
        token,
      },
      message: "Loggin in...",
    };
  } else {
    throw new Error("Invalid username or password.");
  }
};
