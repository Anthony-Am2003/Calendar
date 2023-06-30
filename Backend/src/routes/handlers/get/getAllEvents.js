const getAllEvents = require("../../controllers/get/getAllEventsController");

module.exports = async (req, res) => {
  try {
    const results = await getAllEvents();
    if (!results) throw Error("No hay ningun evento en este Momento");
    res.status(200).json(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
