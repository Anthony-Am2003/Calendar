const { Events } = require("../../../db");

module.exports = async (id) => {
  const eventToFind = Events.findByPk(id);

  if (eventToFind) {
    await Events.destroy({ where: { id } });
    const allEvents = await Events.findAll();
    return allEvents;
  } else {
    throw new Error("Event not found.");
  }
};
