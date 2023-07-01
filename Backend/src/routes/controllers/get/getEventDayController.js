const { Events } = require("../../../db");

module.exports = async (date) => {
  const events = await Events.findAll({
    where: {
      allDates: {
        $contains: [date],
      },
    },
  });

  return events;
};
