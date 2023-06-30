const { Events } = require('../../db');

const getEventsInRange = async (date) => {
  const events = await Events.findAll({
    where: {
      allDates: {
        $contains: [date],
      },
    },
  });

  return events;
};

module.exports = { getEventsInRange };
