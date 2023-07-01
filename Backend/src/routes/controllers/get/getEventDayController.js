const { Events, sequelize } = require("../../../db");
const { Op } = require('sequelize');

module.exports = async (date) => {
  const events = await Events.findAll({
    where: {
      allDates: {
        [Op.contains]: [date],
      },
    },
  });

  return events;
};