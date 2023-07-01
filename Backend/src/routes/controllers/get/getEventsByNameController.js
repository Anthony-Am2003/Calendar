const  getAllEvents  = require("./getAllEventsController");

module.exports = async (name) => {
  const totalEvents = await getAllEvents();

  const eventsFoundByName = await totalEvents.filter((event) =>
    event.name.toLowerCase().includes(name.toLowerCase())
  );

  if (eventsFoundByName) return eventsFoundByName;

  throw new Error("No hay eventos con ese nombre");
};
