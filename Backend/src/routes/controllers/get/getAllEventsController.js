const { Events } = require("../../../db");

module.exports = async () => {
  const allEvents = await Events.findAll();

  const sortedEvents = allEvents.sort((a, b) => {
    return new Date(a.initialDate) - new Date(b.initialDate);
  });
  return sortedEvents;
};
