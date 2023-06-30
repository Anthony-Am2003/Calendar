const { Events } = require('../../db');

const putEvent = async (id, name, initialDate, finalDate, image, description, location, reminder, category) => {
  const eventToPut = await Events.findByPk(id);

  if (!eventToPut) {
    throw new Error('Este evento no existe');
  }

  eventToPut.name = name;
  eventToPut.initialDate = initialDate;
  eventToPut.finalDate = finalDate;
  eventToPut.image = image;
  eventToPut.description = description;
  eventToPut.location = location;
  eventToPut.reminder = reminder;
  eventToPut.category = category;

  await eventToPut.save();

};

module.exports = { putEvent };