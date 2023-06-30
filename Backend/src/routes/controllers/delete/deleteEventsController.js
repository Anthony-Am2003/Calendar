const { Events } = require("../../../db");

module.exports = async (id) => {
  await Events.destroy({ where: { id } });
  const allEvents = await Events.findAll();

  return allEvents;
};
