const { Events } = require("../../../db");

module.exports = async () => {
  const allEvents = await Events.findAll();
  return allEvents;
};
